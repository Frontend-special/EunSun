/* 
레시피 재료 추가하기

1. 요구사항 확인하기
    사용자가 입력한 재료명과 용량을 테이블 목록에 추가하여 보여주고 삭제할 수 있게 해줌
    이때, 같은 재료명은 중복 추가 불가능

    
2. 요구사항 바탕으로 인풋 생각하기
    (1) 사용자가 입력한 재료명
    (2) 사용자가 입력한 용량
    (3) 재료와 무게행 하단에 추가되는 내용 리스트 행
    (4) 리스트가 추가될 때 관리행 하단에 추가되는 삭제 버튼


3. 인풋 바탕으로 단계별 한글로 함수 설계하기
    (1) 재료명과 용량 input의 value를 하단 테이블 리스트에 추가해야 함
    (2) 제출 버튼 눌렀을 때 새로고침 X
    (3) 하단에 추가된 리스트 중 재료의 이름과 사용자가 입력한 재료명 value가 같을 때
        추가 불가능 --> alert 메세지 표시
    (4) 삭제 버튼 생성하고, 삭제 버튼을 눌렀을 때 리스트 삭제 
        --> 수업 중 배웠던 내용 참고하기


4. 단계별 구글링 키워드 생각하기
    (1) 사용자가 입력한 내용 하단에 추가.
    (2) table 태그 안에 생성된 행 데이터의 내용을 저장하려는 input value와 비교


*/
