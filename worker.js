function calculateFactorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

self.addEventListener('message', event => {
  const number = event.data;
  const result = calculateFactorial(number);
  self.postMessage(result);
});
