let sentences = ["이태호", "정윤아", "김정현", "이주현", "이근영"];
let wrongAnswer = [
  "아니야",
  "아닌거같은데,,,",
  "이걸 모르나요?",
  "다시 생각해보세요!",
  "아.닌.데",
  "틀렸어",
  "한번만 다시 생각해볼까?",
  "땡!",
  "WRONG ANSWER",
];

function changeText() {
  let content = document.getElementById("contents");
  let index = Math.floor(Math.random() * sentences.length);
  content.childNodes[1].innerText = sentences[index];
}

function enterkey() {
  if (window.event.keyCode == 13) {
    // 엔터키가 눌렸을 때
    let passWord = document.getElementById("pw");
    if (passWord.value == "이태호") {
      let lock = document.getElementById("lock");
      lock.style.display = "none";
    } else {
      let question = document.getElementById("q");
      question.innerHTML =
        "<h3>" +
        wrongAnswer[Math.floor(Math.random() * wrongAnswer.length)] +
        "</h3>";
    }
  }
}
