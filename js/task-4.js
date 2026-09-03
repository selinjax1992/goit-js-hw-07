//todo відправлення форми form.login-form повинна відбуватися за подією submit.
//todo Під час відправлення форми сторінка не повинна перезавантажуватися.
//todo Якщо при сабміті у формі є незаповнені поля, виводь alert з попередженням про те, що 'All form fields must be filled in'. Не додавай на інпути атрибут required, валідація має відбуватися саме через JS.
//todo Якщо користувач заповнив усі поля і відправив форму, збери значення полів в об'єкт з двома властивостями, де ключ — це ім'я інпутів, а значення — відповідні значення цих інпутів, очищені від пробілів по краях. Для доступу до елементів форми використовуй властивість elements.
//todo ри сабміті форми виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

const refs = {
  form: document.querySelector(".login-form"),
};

const submitForm = (event) => {
  event.preventDefault();
  const formData = {
    email: refs.form.elements.email.value.trim(),
    password: refs.form.elements.password.value.trim(),
  };

  if (Object.values(formData).includes("")) {
    alert("All form fields must be filled in");
    return;
  }
  console.log(formData);
  refs.form.reset();
};

refs.form.addEventListener("submit", submitForm);
