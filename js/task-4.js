 let counterValue = 0;

  const decrementButton = document.querySelector('[data-action="decrement"]');
  const incrementButton = document.querySelector('[data-action="increment"]');
  const valueSpan = document.getElementById('value');

  decrementButton.addEventListener('click', () => {
    counterValue--;
    valueSpan.textContent = counterValue;
  });

  incrementButton.addEventListener('click', () => {
    counterValue++; 
    valueSpan.textContent = counterValue;
  });