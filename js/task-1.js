const categoriesLenght = document.querySelectorAll(".item");
console.log(`Number of categories ${categoriesLenght.length}`);
categoriesLenght.forEach((element) => {
  const name = element.querySelector("h2");
  const elements = element.querySelectorAll("ul>li");
  console.log(`Category: ${name.textContent}`);
  console.log(`Elements: ${elements.length}`);
});
