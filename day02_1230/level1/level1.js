/*
배열 나누기
함수 division 특정한 배열을 내가 원하는 원소의 갯수를 길이로 가진 배열들로 분해하려고한다
이후, 해당 배열들을 요소로 갖는 배열을 반환한다
ex) 길이기 80인 배열은 길이가 5로 분해한다면 16개의 배열을 요소로 갖는 배열을 반환한다

1. 요구사항 확인하기
    특정 배열을 원하는 원소의 갯수로 나누어 배열로 반환하고, 남는 나머지도 배열로 반환하여 보여준다.

2. 요구사항 바탕으로 인풋 생각하기
    나눠질 배열(의 length) 
    나눌 원소의 갯수

3. 인풋 바탕으로 단계별 한글로 함수 설계하기
    (1) 배열의 length 구하기
    (2) 배열을 원하는 원소의 갯수만큼 나눠야 하는데 이때 나머지가 있는 지 없는 지 확인해야 함
        떠오르는 것 -> floor.. (1)의 length를 n(원하는 원소 갯수)로 나누고 나눈 나머지도 배열에 추가
    (3) 배열을 length 만큼 잘라서 빈 배열에 추가, 새로운 배열로 만들어주기
        떠오르는 것 -> push, splice

4. 단계별 구글링 키워드 생각하기
    3-(2) 의 나머지를 배열로 만드는 법..
        떠오르는 것 -> Math.floor()로 소숫점 버리고 배열 만들기 / 나머지만큼의 length를 가진 배열 만들기

*/

function division() {}

// arr = [1,2,3,4,5]
// division(arr, 2); === [ [1,2], [3,4], [5] ]
