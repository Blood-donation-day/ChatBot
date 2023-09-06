# 한정된 재료를 사용하여 요리하는 ChatBot
첫 개인 프로젝트입니다. GPT 모델 API를 활용하여 요리사 챗봇을 구현해보는 프로젝트 입니다.
해당 ChatGPT API는 부트캠프 기간 동안에만 작동됩니다. (~23/12/31)
## 1. 목표
<!-- ### 1-1. 목표 -->
- 다양한 요리재료를 사용하여 사용자의 요구사항 충족
- 가지고 있는 재료가 부족한 경우, 대체 재료를 알려줘 요리에 활용.
- 재료에 따라 대체 레시피 제공

## 2. 개발환경 및 배포 URL
### 2-1. 개발 환경
- HTML, CSS, 자바스크립트
### 2-2. 배포 URL
- https://blood-donation-day.github.io/ChatBot/
## 3. 프로젝트 구조와 개발 일정
### 3-1. 프로젝트 구조
<br>
<img src=image/project.png>
원하는 요리, 재료 입력

요리하기! 버튼 누르면 요리: [메뉴] 재료: [재료들] 전송
답변을 {요리: 요리, 재료: 재료1, 레시피: 레시피...} 형식으로 받음.

답변형식을 변수에 저장 및 유저에게 출력. // 
로컬스토리지에서 데이터를 받고 변수값을 push후 다시 로컬스토리지에 저장.

최근기록 탭에서 로컬스토리지에 있는 값을 가져와 최근기록 확인 및 기록 초기화.

### 3-2. 개발 일정
<img src=image/schedule.png width=500px>
## 4. UI/BM
### 4-1. 목업 페이지

- 메인페이지
<img src=image/mainpage.png width=500px>
- 재료 넣기
<img src=image/input.png width=500px>
- 결과
<img src=image/result.png width=500px>
- 대화기록
<img src=image/history.png width=500px>
- 즐겨찾기
<img src=image/bookmark.png width=500px>
>

## 5. 메인 기능




## 6. 추가 기능
## 7. 개발하며 느낀점
###문제점 

로컬스토리지에다가 저장하는거 

배열의 , 와 내용의 , 를 구분

로컬스토리지에서 가져온 데이터로 표만들기 
    const jsonData = JSON.parse(localdata) 
    console.log(jsonData[0])
    const recipeItem = JSON.parse(localdata[0]);
    console.log(recipeItem)  
    파싱하기전에 가져오기 / 파싱하고 가져오기 [ 만 출력됬었음.

자바스크립트를 불러올 때 html을 불러오기전에 불러오면 에러발생
async속성 사용

최근기록 삭제 

모달창띄우기에서 eventlisner를 돌려가면서 띄우는데 
자꾸  const $modalstyle = document.getElementById(`modal-${i+1}`) 에서 에러가 났다
                    $modalstyle.style.display = "block";
                    알고보니 for문에서 (i=0; i < jsonData.length; i++) 으로 i가 전역변수로 들어가서 생긴 오류 



아쉬운점
즐겨찾기, 최근대화 갯수많아지면 페이지별로 나누기

목표
1. HTML, CSS, JavaScript에 적응하기
2. 비동기 통신을 경험하고 실제 프로젝트에 사용하기
3. 인공지능을 API로 다뤄보는 경험
4. GitHub사용에 익숙해지고 페이지 배포 체험
5. 코드리뷰 경험



<!-- 채팅보내고 받을 때 활용할 기초 내용 정리
주제 뭐로하지?? 
주제: 메뉴와 재료를 알려주면 요리방법을 알려주는 챗봇

한정된 재료와 원하는 메뉴를 알려주면 해당 재료로 원하는 메뉴를 만드는 방법을 알려주는 챗봇
재료는 검색하여 선택 // 메뉴는 직접 입력

요리: 국수 재료: 면, 간장
기본대화내용
질문 & 답변  대화창  

질문내역 / 질문내역 초기화.
            메뉴바  
            메인 컨텐츠 다른 페이지 article 태그 받아와서 집어넣기 





주제: 아 이걸 멀로해야되나....




예시?
피자주문 
    1. 주소를 입력
        근처 피자집 검색
        가장 가까운 피자집 지도 >> 확인 클릭
    2. 메뉴선택
    각종 메뉴 / 옵션 (사이즈, 사이드메뉴)
    
    3.결제창 >> 결제  -->