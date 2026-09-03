//todo Напиши скрипт, який змінює колір фону елемента <body> через інлайн-стиль по кліку на button.change-color і задає це значення кольору текстовим вмістом для span.color.
const refs = {
  changeColorBtn: document.querySelector(".change-color"),
  body: document.querySelector("body"),
  span: document.querySelector(".color"),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const onChangeColorBtnClick = () => {
  const randomHex = getRandomHexColor();
  refs.body.style.backgroundColor = randomHex;
  refs.span.textContent = randomHex;
};

refs.changeColorBtn.addEventListener("click", onChangeColorBtnClick);
