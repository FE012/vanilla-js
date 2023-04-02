const todayDate = document.querySelector("div#today-date");

// 년도,월,일,요일 구하는 함수 만듦 ex)2023년 4월 1일 토요일
function getDate() {
  const today = new Date();
  const weekday = ["일", "월", "화", "수", "목", "금", "토"];

  const year = today.getFullYear(); // 년도
  const month = today.getMonth() + 1; // 월
  const date = today.getDate(); // 일
  const day = weekday[today.getDay()]; // 요일

  todayDate.innerText = `${year}년 ${month}월 ${date}일 ${day}요일`;
}

getDate();
setInterval(getDate, 1000);
