const counterValue = document.getElementById('value');
let value = 0;



const incrementButton = document.querySelector('button[data-action="increment"]');
const decrementButton = document.querySelector('button[data-action="decrement"]');


incrementButton.addEventListener('click', () => {
  value += 1;
  counterValue.textContent = value;
});

decrementButton.addEventListener('click', () => {
  value -= 1;
  counterValue.textContent = value;
});
