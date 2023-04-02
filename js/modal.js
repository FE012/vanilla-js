//모달열기
function modalOpen() {
  document.querySelector(".modal_wrap").style.display = "block";
  document.querySelector(".modal_background").style.display = "block";
}

// 모달 끄기
function modalClose() {
  console.log("모달되고 있다");
  document.querySelector(".modal_wrap").style.display = "none";
  document.querySelector(".modal_background").style.display = "none";
}

// 버튼 클릭시 이벤트리스너 작동하기
document.querySelector(".todo-box").addEventListener("click", modalOpen);
document
  .querySelector(".modal-close_btn")
  .addEventListener("click", modalClose);
