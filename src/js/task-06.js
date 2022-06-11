const inputEl = document.querySelector('#validation-input');
const dataLength = document.querySelector('input[data-length]');
const inputLength = dataLength.dataset.length;
console.log(inputLength);


inputEl.addEventListener('blur', (event) => {

    if (event.currentTarget.value.length === Number(inputLength)) {
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');

    } else {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
    }
});