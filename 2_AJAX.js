// Exemple de requête GET avec XMLHttpRequest : plus ancien, moins lisible mais plus compatible avec les anciens navigateurs
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://api.example.com/data');
xhr.onload = () => {
    if (xhr.status === 200) {
        console.log(xhr.response);
    } else {
        console.error('Erreur lors de la requête');
    }
};
xhr.send();

// Exemple de requête POST avec XMLHttpRequest
const xhr = new XMLHttpRequest();
xhr.open('POST', 'https://api.example.com/data');
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = () => {
    if (xhr.status === 200) {
        console.log(xhr.response);
    } else {
        console.error('Erreur lors de la requête');
    }
};
const data = { nom: 'John', age: 30 };
xhr.send(JSON.stringify(data));

// Exemple de requête GET avec fetch
fetch('https://api.example.com/data')
    .then(response => {
        if (!response.ok) {
            throw new Error('Erreur lors de la requête');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });

// Exemple de requête POST avec fetch
const data = { nom: 'John', age: 30 };
fetch('https://api.example.com/data', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
})
    .then(response => {
        if (!response.ok) {
            throw new Error('Erreur lors de la requête');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });

//async await
async function loadContent(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

//Abort Controller
const controller = new AbortController();
const signal = controller.signal;

setTimeout(() => {
    controller.abort();
}, 5000);

fetch('https://api.example.com/data', { signal })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erreur lors de la requête');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });

//gestion des erreurs http
fetch('https://api.example.com/data')
    .then(response => {
        if (!response.ok) {
            throw new Error('Erreur lors de la requête');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });

//headers

const headers = new Headers({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer <token>'
});

fetch('https://api.example.com/data', {
    method: 'POST',
    headers,
    body: JSON.stringify({ nom: 'John', age: 30 })
})
    .then(response => {
        if (!response.ok) {
            throw new Error('Erreur lors de la requête');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error(error);
    });


//fichiers
fetch('https://example.com/image.png')
    .then(response => response.blob())
    .then(blob => {
        const url = URL.createObjectURL(blob);
        const img = new Image();
        img.src = url;
        document.body.appendChild(img);
    })
    .catch(error => {
        console.error(error);
    });

//formulaires
const form = document.querySelector('#myForm');

form.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(form);
    fetch('https://api.example.com/data', {
        method: 'POST',
        body: formData
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur lors de la requête');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error(error);
        });
});

//progression denvoi de fichiers 
const fileInput = document.querySelector('#myFile');
const progressBar = document.querySelector('#progressBar');

fileInput.addEventListener('change', event => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);

    fetch('https://api.example.com/data', {
        method: 'POST',
        body: formData
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur lors de la requête');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.error(error);
        });
});

fileInput.addEventListener('progress', event => {
    if (event.lengthComputable) {
        const percentage = (event.loaded / event.total) * 100;
        progressBar.value = percentage;
    }
});

