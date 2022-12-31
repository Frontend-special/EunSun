import { RESERVATION_LIST } from "./reservation .js";
console.log(RESERVATION_LIST);

/* 

예약 고객확인하기

1. 요구사항 확인하기
2. 요구사항 바탕으로 인풋 생각하기
3. 인풋 바탕으로 단계별 한글로 함수 설계하기
4. 단계별 구글링 키워드 생각하기

*/

/*

1. 요구사항 확인하기
    사용자가 입력한 이름과 연락처를 
    가지고 있는 데이터와 비교하여 예약번호를 확인해준다. 
    (이름이 없는 경우, 전화번호가 다른 경우 예약번호를 확인할 수 없다.)

2. 요구사항 바탕으로 인풋 생각하기
    (1) 사용자가 입력한 이름
    (2) 사용자가 입력한 연락처
    (3) 데이터에 이름이 있는지 확인 -> 이름에 맞는 전화번호가 있는지 확인 -> 예약번호 표시


3. 인풋 바탕으로 단계별 한글로 함수 설계하기
    (1) 이름을 입력 
        1. input의 value 가져오기

    (2) 연락처 입력
        1. input의 value 가져오기
        2. 연락처 입력 형식 
            --> RESERVATION_LIST의 phone은 '000-0000-0000' 형식으로
                하이픈이 있기 때문에 비교를 위해 input에서 숫자 13자리 입력하였을 때
                위와 같은 형식으로 변환할 필요가 있어보임 *** 

    (3) button 클릭, submit
        1. 이름 혹은 연락처에 공란이 있는 경우 제출 불가능한 조건 필요
        2. RESERVATION_LIST 배열 안 객체 중 name이 사용자가 입력한 이름이 있는지 찾을 수 있어야 함. ***
        3. 사용자가 입력한 이름이 RESERVATION_LIST의 name에 있으면, 
            해당 객체에 있는 phone의 값이 사용자가 입력한 연락처와 같은지 확인해야 함. ***

    (4) 예약번호 표시
        1. (3)-1 조건에 어긋나면 메세지 표시 (alert, focus 같은 방법도..)
        2. (3)-2 조건에 어긋나면 메세지 표시
        3. (3)-3 조건에 어긋나면 메세지 표시, 통과하면 해당 객체의 number값을 보여줘야 함.
    

4. 검증해야 하는 것,,
    - 입력한 input의 value를 000-0000-0000 의 형태로 변환
    - 배열 속 객체의 key, value값과 input의 value 값 비교하는 법
        -> input에 입력한 value의 값이 RESERVATION_LIST 배열을 돌면서 
            어떤 객체의 특정 키의 value가 있는 지 찾아야 함

5. 구글링 키워드
    - 배열안의 객체(들 중 속성과 값 매칭된 것..)
    - 전화번호 형식 변경하는 정규표현식 , replace 이용

*/