// Получить модальное окно
let modal = document.querySelector(".myModal");

console.log(modal);

// Получить кнопку, которая открывает модальное окно
let square1 = document.querySelector(".square1");

console.log(square1);

// Получить элемент <span>, который закрывает модальное окно
let span = document.querySelectorAll(".close")[0];

console.log(span);

// Когда пользователь нажимает на кнопку, откроется модельное окно
square1.onclick = function() {
  modal.style.display = "block";
}

// Когда пользователь нажимает на <span> (x), закроется модальное окно
span.onclick = function() {
  modal.style.display = "none";
}

// Когда пользователь щелкает в любом месте за пределами модального, закроется оно
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}