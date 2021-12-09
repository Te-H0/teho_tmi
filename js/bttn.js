let sBtn = document.getElementById("start-btn"); //000에 있는 시작 버튼
let sUrl = document.getElementById("start-url");
let nextLink = document.getElementById("next_page"); //문제풀때있는버튼
let questionNumber = document.getElementById("count");
let url = [
  "001.html",
  "002.html",
  "003.html",
  "004.html",
  "005.html",
  "006.html",
  "007.html",
  "008.html",
  "009.html",
  "010.html",
  "011.html",
  "012.html",
  "013.html",
  "014.html",
  "015.html",
];
let checkUrl = [
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
];
let ans = [
  "4",
  "2",
  "1",
  "3",
  "2",
  "4",
  "3",
  "1",
  "3",
  "2",
  "2",
  "1",
  "1",
  "4",
  "2",
];

if (
  window.location.href !=
  "file:///Users/te___ho/Desktop/first_project/index.html"
) {
  questionNumber.innerHTML = window.sessionStorage.getItem("qCount");
}

nextLink.addEventListener("click", next);

function start() {
  let nowPage = Math.floor(Math.random() * url.length);
  checkUrl[nowPage] = true;
  window.sessionStorage.setItem("qCount", 1);
  window.sessionStorage.setItem("ansCount", 0);
  window.sessionStorage.setItem("nowPage", nowPage);
  window.sessionStorage.setItem("checkUrl", JSON.stringify(checkUrl));
  sUrl.setAttribute("href", url[nowPage]);
}

function next() {
  let qCount = window.sessionStorage.getItem("qCount");
  let ansCount = window.sessionStorage.getItem("ansCount");
  let nowPage = window.sessionStorage.getItem("nowPage");
  let cUrl = JSON.parse(window.sessionStorage.getItem("checkUrl"));

  if (
    document.querySelector('input[name="example"]:checked').value ==
    ans[nowPage]
  ) {
    //정답이면
    window.sessionStorage.setItem("ansCount", ++ansCount);
  } //radiobox에서 체크한 값 참조해서 sessionStorage 값 초기화

  if (qCount == 10) {
    window.sessionStorage.setItem("qCount", ansCount * 10);

    nextLink.setAttribute("href", "last.html");
  } else {
    do {
      nowPage = Math.floor(Math.random() * url.length);
    } while (cUrl[nowPage] == true);
    cUrl[nowPage] = true;
    window.sessionStorage.setItem("checkUrl", JSON.stringify(cUrl));
    window.sessionStorage.setItem("qCount", ++qCount);
    window.sessionStorage.setItem("nowPage", nowPage);
    nextLink.setAttribute("href", url[nowPage]);
  }
}
// do {
//   let n = Math.floor(Math.random() * url.length);
// } while (checkUrl[n] == true);
// qcount++;

// if(document.querySelector('input[name="example"]:checked').value == ans[n])
// {
//   ansCount++;
// } //radiobox에서 체크한 값 참조.
// sBtn.setAttribute("href", "002.html");
