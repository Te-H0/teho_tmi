# TEHO TMI 
> 처음 만든 개발 작품 (2021/11 ~ 2021/12)
- 연예인 벨런스 게임, 음식 퀴즈 게임, 성향 검사 등이 유행할 시절 생각해낸 프로젝트 입니다.
- 이태호(본인)의 TMI를 기반으로 한 퀴즈 15개 중 랜덤으로 출제되는 10개의 문제를 푸는 퀴즈입니다.
- "Do it! HTML + CSS + 자바스크립트 웹 표준의 정석" 책으로 학습 후 약 한달간 제작하였습니다.
- 인스타그램으로 홍보 후 지인들에게 참여를 유도하기 위해 반응형 디자인을 했습니다. 모바일로 대부분 사용할 것이라 판단하여 비율은 핸드폰에 맞춰져 있습니다
> 웹으로 사용시 화면 비율을 세로가 길게 (모바일 화면 처럼) 조절하여야 합니다. 첫 화면의 답은 이태호 입니다. https://te-h0.github.io/teho_tmi/

## STACKS
<div align = center>
   <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
   <img src="https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=CSS3&logoColor=white"> 
   <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white">
 </div>
 
## 주요 화면
### 입장 페이지
- 멋있는 화면을 만들고 싶어 첫 화면은 저의 이름(이태호)을 입력해야 입장이 가능하도록 구성하였습니다.
<div align = "center">
  <img height="700" alt="tmi 메인" src="https://github.com/Te-H0/teho_tmi/assets/54144849/e6bd2d9e-ba03-4b70-acef-9748613ef360">
  <img height="700" alt="tmi 메인" src="https://github.com/Te-H0/teho_tmi/assets/54144849/3f0232ed-84c3-4545-af5a-55c83dbab63f">
</div>


### 문제 풀이
- 데이터 베이스의 개념을 모르고 있었기에 값을 저장하기 위해 session storage를 사용하였습니다.
- session storage에서 정답, 현재 페이지의 index, 문제 번호, 점수(문제당 1점 부여)를 관리합니다.
- random을 사용해 다음 페이지의 index를 결정하며 배열에서 전에 선택된 페이지가 아닌지 확인합니다.
<div align = "center">
  <img height="700" alt="생성1" src="https://github.com/Te-H0/teho_tmi/assets/54144849/9160c9e8-2986-4020-a8c2-bb12f4d286de">
  <img height="700" alt="문항 생성, gpt" src="https://github.com/Te-H0/teho_tmi/assets/54144849/99cdf1bd-2361-4836-a3ac-3051052f7df8">
  <img width="800" alt="image" src="https://github.com/Te-H0/teho_tmi/assets/54144849/92a03f11-66d5-4a9b-a0bb-0d7b042b6c82">
</div>

### 결과 화면
- 10개의 문제가 제출되었을 경우 마지막 페이지로 이동되며 점수가 나오게 됩니다.
<div align = "center">
  <img height="700" alt="생성1" src="https://github.com/Te-H0/teho_tmi/assets/54144849/35cf441e-18db-4bfc-b703-6a1819b89971">
</div>


## 느낀 점
1. 제가 만든 것을 다른 사람이 사용했던 첫번째 프로젝트였습니다. 누구에게는 간단하고 쉬운 내용이겠지만 저의 주변인들이 사용하고 주는 피드백에 일주일동안 뿌듯함과 행복함에 살았던 기억이 있습니다.
2. 이때를 기점으로 개발에 더욱 흥미가 붙게 되었고 실전에서는 책이나 글로 배우고 깨달을 수 없는 것이 있다는 것을 깨달을 수 있었습니다.

## 배운 점
1. 이때의 경험으로 유지 보수에 대한 생각을 하며 코드를 짜기 시작했습니다. 하나의 글자를 고치는데 15개의 파일을 일일이 수정하며 뼈저리게 깨달았습니다.
2. 이미 내가 하는 고민은 세상에 해결책이 존재할 가능성이 높다는 것을 알게 되었습니다. 
