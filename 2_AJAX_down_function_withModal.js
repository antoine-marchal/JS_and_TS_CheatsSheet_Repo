function downloadFile(url, filename) {
  const progressModal = document.createElement('div');
  progressModal.style.display = 'none';

  const progressBar = document.createElement('div');
  progressBar.style.width = '0%';

  const progressLabel = document.createElement('div');
  progressLabel.textContent = '0%';

  progressModal.appendChild(progressBar);
  progressModal.appendChild(progressLabel);

  document.body.appendChild(progressModal);

  fetch(url)
    .then(response => {
      const total = response.headers.get('content-length');
      let loaded = 0;

      const reader = response.body.getReader();
      return new ReadableStream({
        start(controller) {
          function pump() {
            reader.read().then(({ done, value }) => {
              if (done) {
                controller.close();
                return;
              }

              loaded += value.byteLength;
              const percent = Math.floor((loaded / total) * 100);
              progressBar.style.width = percent + '%';
              progressLabel.textContent = percent + '%';

              controller.enqueue(value);
              pump();
            })
            .catch(error => {
              console.error(error);
              controller.error(error);
            });
          }
          pump();
        }
      });
    })
    .then(stream => new Response(stream))
    .then(response => response.blob())
    .then(blob => {
      const objectUrl = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = objectUrl;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(objectUrl);
    })
    .catch(error => {
      console.error(error);
    })
    .finally(() => {
      document.body.removeChild(progressModal);
    });
  
  progressModal.style.display = 'block';
}
