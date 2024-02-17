  const inputElement = document.getElementById('validation-input');

  inputElement.addEventListener('blur', () => {
    const enteredValue = inputElement.value.trim();
    const requiredLength = parseInt(inputElement.getAttribute('data-length'), 10);

    if (enteredValue.length === requiredLength) {
      inputElement.classList.remove('invalid');
      inputElement.classList.add('valid');
    } else {
      inputElement.classList.remove('valid');
      inputElement.classList.add('invalid');
    }
  });