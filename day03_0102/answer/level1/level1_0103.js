/*

originArr와 divNumber을 매개변수로 갖는 함수

매개변수로 받은 originArr을 변수 arr에 담고
결과값을 빈배열에 담는다.

arr 배열의 길이만큼 순회하는데, 순회하면서 i에 divNumber 값만큼 더한다.
arr 배열에서 i부터, i+divNum값의 직전까지의 요소만 빈배열에 추가하여 반환한다.

--> for문 내용이 잘 이해가 안 돼서 콘솔을 찍어봤는데
    originArr에 [1,2,3,4,5,6,7,8,9]
    divNum이 4라고 하면,
    i는 0 i+divNumber는 4 / (4,8), (8,12) ... 
    arr에서 인덱스 0부터 3(4-0)까지 요소만 빈배열에 추가해서 반환,
    인덱스 4부터 7까지
    인덱스 8부터 11까지 ... 

*/