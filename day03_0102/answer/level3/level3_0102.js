/*
1. deleteIngredient()
    -> 이벤트가 발생한 태그가 button 태그가 아닐 때 리턴
    -> 이벤트가 발생한 요소의 부모요소 중 가장 가까운 tr태그 
    -> 위 변수의 td 태그 textContent를 ingredient 변수에 담는다
    -> tr 태그 삭제
    -> 맵을 만든 리스트에서 ingredient의 내용(textContent) 삭제

2. 폼을 제출하였을 때 발생하는 이벤트
    -> 제출하였을 때 새로고침 되어 값이 사라지게 하는 것을 막음
    -> 재료명 input에서 사용자가 입력한 value 값을 변수에 담았음
    -> 무게 input에서 사용자가 입력한 value 값을 변수에 담았음
    -> 재료 리스트에 사용자가 입력한 재료가 있으면 이미 존재하는 재료
    -> 재료명이 없거나 무게값이 없으면 입력해주세요

    -> 표의 행 생성
    -> 위 행에는 사용자가 입력한 재료명과 무게값, 삭제 버튼을 동시에 생성
    -> 위 행에 재료를 삭제하는 클릭 이벤트

    -> 재료 리스트에 재료, 무게값 set ..? 
    -> table 태그에 위의 행을 추가
    -> 사용자가 입력한 두 개의 input 값을 비워줌


3. 버튼 클릭했을 때 발생하는 이벤트
    -> list의 children..? 의 length가 0보다 클 때 innderText를 비워줌
    -> 재료 리스트 데이터를 weight와 ingredient 항목을 각각 돌면서
        li 태그를 추가
        li 태그의 텍스트에 재료와 무게를 넣고
        리스트에서 li 태그 내용 추가



map, set
table 태그에 내용 추가 (input의 value를 추가)
children


*/