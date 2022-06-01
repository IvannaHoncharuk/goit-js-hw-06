const input = document.querySelector('#name-input');
console.log(input);
const output = document.querySelector('#name-output');
console.log(output);

input.addEventListener('input', onInputChange);

function onInputChange(event) {
    if (event.currentTarget.value === "") {
        output.textContent = "Anonymous";
    } else {
        output.textContent = event.currentTarget.value;
        console.log(event.currentTarget.value);
    }
}