import { RESERVATION_LIST } from './reservation.js';

const userNameInput = document.querySelector(["[name='user-name']"]);
const userPhoneInput = document.querySelector(["[name='user-phone']"]);
const form = document.querySelector('form');
const reservationNum = document.querySelector('#reservation-number');

console.log(userNameInput);

// 연락처 입력 -> 형식 변환
userPhoneInput.addEventListener('input', (e) => {
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
    // 피드백 : 실행 X -> 상단에 작성
    if (inputValueName == '' || inputValueNum == '')
        return alert('이름과 전화번호를 모두 입력해주세요.');

    const findUserName = RESERVATION_LIST.filter((el) => el.name === inputValueName);
    // 23-01-05 ************************************************************************************************************
    /* if (findUserName.length !== 0 && findUserName[0].phone == inputValueNum) {
         reservationNum.innerHTML = findUserName[0].number;
      } else {
         alert('일치하는 정보가 없습니다.');
      };

      피드백 : findUserName[0]이 잘못됨

      위 코드에서 findUserName[0].phone이 문제가 되는 건,
      1. 이름이 같고 연락처가 다른 이용자의 정보가 존재할 때 문제가 됨
      2. 사용자가 입력한 이름과 데이터에 있는 사용자 이름 비교 ==> 이름 값이 같은 객체들을 담은 배열(findUserName)의 0번째 인덱스 객체의 phone 값만 비교하기 때문에 문제가 됨
          (간단히 말하자면 가져온 배열(findUserName)안에 객체가 여러 개 있을 수 있는데 무조건 0번째 인덱스 객체만 가져와서 비교해서 문제가 된다는 뜻임)
      --> 피드백 : find 혹은 for문 사용

      --> 가져온 배열(findUserName)의 "가장 첫 번째 객체에서만 비교"하는 것과, 
          배열(findeUserName)중 phone과 inputValueNum이 같은 것 중 "가장 첫번째 값만 가져오는 것" (find)
      */

    // 23-01-06 수정 ************************************************************************************************************
    // length가 0이 아닐 때의 조건만 생각했는데, 0일 때 조건을 return 하는 방법도 있었다.
    if (findUserName.length == 0) return alert('일치하는 정보가 없습니다.');
    // 피드백에 따라 find 사용
    const findUserPhoneNum = findUserName.find((el) => el.phone === inputValueNum);
    reservationNum.innerHTML = findUserPhoneNum.number;

    // console.log(findUserPhoneNum);
    // console.log(findUserName[0].phone);
    // console.log(inputValueNum);
    // console.log(findUserName);
}

form.addEventListener('submit', findUserReservation);
