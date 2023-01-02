// ---------------------------------------문제 1번

/* 
1. 요구사항 확인하기 
    로딩될 때 글씨가 변경되어 보여줌

2. 요구사항 바탕으로 인풋 생각하기
    로딩될 때 변경되는 텍스트

3. 인풋 바탕으로 단계별 한글로 함수 설계하기
    로드된 후 발생하는 이벤트 사용하여 작성

*/

window.onload = function () {
  const loadingText = document.querySelector("#display");
  loadingText.innerText = "로딩 중 변경 텍스트 입니다.";
};

// ---------------------------------------문제 2번
const tab = document.querySelectorAll(".tab");
const tabContent = document.querySelectorAll(".block");

/* 
1. 요구사항 확인하기
  탭을 클릭했을 때 선택한 탭의 배경과 글자의 색이 바뀜

2. 요구사항 바탕으로 인풋 생각하기
  div 클릭 -> background, color style 변경

3. 인풋 바탕으로 단계별 한글로 함수 설계하기
   (1) div 클릭 이벤트 설정
   (2) active class에 css 적용
   (3) 각 탭을 클릭할 때, active 클래스를 추가하고 제거하는 방식
  


*/

// ---------------------------------------문제 4번
/* 
1. 요구사항 확인하기 
    숫자 입력 불가능하며 숫자가 입력되면 alert // 입력 가능한 글자 길이는 10자

2. 요구사항 바탕으로 인풋 생각하기
    input의 value (숫자 여부 판단)
    input 속성 

3. 인풋 바탕으로 단계별 한글로 함수 설계하기
    정규표현식 사용하여 숫자 입력했는지 확인하는 함수 
    위 함수를 키 놓을 때 발생하는 이벤트의 콜백함수로
    dom api로 input의 attribute 변경

4. 단계별 구글링 키워드 생각하기
    숫자만 입력 가능한 정규표현식

*/

let verifyInput = document.querySelector("#te_input");
// 1. 숫자 입력 방지
function verifyInputValue() {
  const regExp = /[0-9]/;
  if (regExp.test(verifyInput.value)) {
    alert("숫자가 입력되었습니다.");
    verifyInput.value = "";
    console.log(verifyInput.value);
  }
}
//e.target.value
verifyInput.addEventListener("keyup", verifyInputValue);

// 2. 길이 제한 attr 변경
verifyInput.setAttribute("maxLength", 10);

// ---------------------------------------문제 5번

/*

5번 및 6번

1. 요구사항 확인하기
  input창 입력 후 저장하면 하단에 내용 추가.
  추가된 내용을 수정, 수정한 내용을 저장 가능.
  초기화 버튼을 누르면 하단 list 안 모든 내용이 사라짐.

2. 요구사항 바탕으로 인풋 생각하기
  사용자가 입력한 input value
  -> 하단에 list 추가
  초기화 버튼
  삭제 및 수정 버튼

3. 인풋 바탕으로 단계별 한글로 함수 설계하기

(1) input value가 하단에 li로 추가
(2) li가 추가될 때 editBtn, delBtn 같이 추가
(3) editBtn -> 클릭했을 때 텍스트가 input으로 변환, 이때 input의 value는 기존에 저장했던 value 값
(4) saveBtn -> 수정 후 다시 저장. 3-(1)의 함수와 같은 방식으로 하면 되지 않을까?
(5) resetBtn -> 리스트의 전체 내용 (innerHTML)을 빈 값으로 만들어주기

4. 단계별 구글링 키워드 생각하기
parentNode, childNodes ... (<<- 강의 필기 내용 참고)
추가 append / 삭제 remove / 


*/
