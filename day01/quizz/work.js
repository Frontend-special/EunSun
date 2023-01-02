/*

변수 위치 찾기
1. 변수 a는 main 함수 안에서만 사용된다 // 
2. 변수 b는 dom api selector로 다른 이벤트에서 사용될 여지가 있다. //
3. 변수 c는 메인 함수 안에서 실행되는 콜백함수 solution의 인자이다 // 
4. 변수 d는 솔루션 함수에서 전달받은 c를 다른 형태로 바꿔준다. // 
5. 변수 e는 main함수의 최종 반환 값으로 향후 다른 함수에서 재사용된다. // 

*/

// 2. b는 다른 이벤트에서 사용될 여지가 있어 함수 외부에서 선언하는 전역변수
// let b;
// let e;

// function solution() {
//
// }

// function parse() {}

// function main() {
//   // 1. a는 메인 안에서만 사용하는 지역변수 --> main 안에서만 사용
//   let a;
//   let c;
//   solution(c);

//   return;
// }

//

let b;
let e;
function solution(c) {
  let d;
}
function parse() {}

function main(solution) {
  let a;
  let c;
  solution(c);
  return;
}

e = main(solution);
