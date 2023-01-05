import { RESERVATION_LIST } from "./reservation.js";

const userNameInput = document.querySelector(["[name='user-name']"]);
const userPhoneInput = document.querySelector(["[name='user-phone']"]);
const form = document.querySelector("form");
const reservationNum = document.querySelector("#reservation-number");

console.log(userNameInput);

// 연락처 입력 -> 형식 변환
userPhoneInput.addEventListener("input", (e) => {
  e.preventDefault();
  const inputValueNum = e.target.value;
  let replaceNum = inputValueNum.replace(/^(\d{3})(\d{4})(\d{4})$/, `$1-$2-$3`);
  e.target.value = replaceNum;
  console.log(replaceNum);
});

// 이름 input, 연락처 input(위에서 형식 변환) value 가져오기
// 가져온 value가 배열 속 객체 -> 일치하는 값이 있는지
// 배열에서 일치하는 값 찾기
// 1. 이름이 있는지
// 2. 이름이 있다면 이름과 맞는 연락처인지
function findUserReservation(e) {
  e.preventDefault(e);
  const inputValueName = userNameInput.value;
  const inputValueNum = userPhoneInput.value;
  // 실행 X -> 상단에 작성
  if (inputValueName == "" || inputValueNum == "") return alert("test");

  const findUserName = RESERVATION_LIST.filter(
    (el) => el.name === inputValueName
  );
  // find
  if (findUserName.length !== 0 && findUserName[0].phone == inputValueNum) {
    reservationNum.innerHTML = findUserName[0].number;
  } else {
    alert("일치하는 정보가 없습니다.");
  }
  // console.log(findUserName[0].phone == inputValueNum);
  // console.log(findUserName[0].phone);
  // console.log(inputValueNum);
  // console.log(findUserName);
}

form.addEventListener("submit", findUserReservation);
