/*
배열 나누기
함수 division 특정한 배열을 내가 원하는 원소의 갯수를 길이로 가진 배열들로 분해하려고한다
이후, 해당 배열들을 요소로 갖는 배열을 반환한다
ex) 길이기 80인 배열은 길이가 5로 분해한다면 16개의 배열을 요소로 갖는 배열을 반환한다
*/

function division(originArr, divideNum) {
  // 1. 원본 배열을 원하는 갯수만큼 자르기
  // originArr.slice(0, divideNum)
  // originArr.slice(divideNum, divideNum+divideNum) ... 반복
  // 2. 자른 원소를 빈 배열에 추가. 나머지 원소도 배열에 추가
  // push

  const arr = originArr;
  const answerArr = [];
  for (let i = 0; i < arr.length; i += divideNum) {
    answerArr.push(arr.slice(i, i + divideNum));
    // console.log(i, i + divNumber);
    // console.log(arr.slice(i, i + divNumber));
  }
  return answerArr;
}

console.log(division([1, 2, 3, 4, 5, 6, 7, 8, 9], 4));
