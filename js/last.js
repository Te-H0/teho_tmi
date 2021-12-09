let ansCount = window.sessionStorage.getItem("ansCount");
let questionNumber = document.getElementById("count");

window.sessionStorage.setItem("qCount", ansCount * 10);
questionNumber.innerHTML = window.sessionStorage.getItem("qCount");

document
  .getElementById("next-btn")
  .addEventListener("click", window.open("", "_self").close());
