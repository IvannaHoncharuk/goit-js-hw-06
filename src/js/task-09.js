const bodyEl = document.querySelector('body');
const buttonEl = document.querySelector('.change-color');
const textColorEl = document.querySelector('.color');

buttonEl.addEventListener("click", onChangeColor);

function onChangeColor() {
  const hexColor = getRandomHexColor();
  bodyEl.style.backgroundColor = hexColor;
  textColorEl.textContent = hexColor;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
