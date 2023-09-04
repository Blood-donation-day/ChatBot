const $body = document.getElementById(`tbody.boardbody`)
const localdata = localStorage.getItem(`log1`)
console.log(localdata)

for (i=0; i < localdata.length; i++) {

    const tr = document.createElement('tr');  //테이블 행
    tr.classList.add('localdata');
        
        
    const tdCook = document.createElement('td'); //요리
    tdCook.classList.add('localdata-column');
    tdCook.textContent = localdata[i].요리;
        
    // const tdIngredients = document.createElement('td');  //재료
    // tdIngredients.classList.add('localdata-column');
    // tdIngredients.textContent = localdata[i, 재료];
    // console.log(tdIngredients.textContent)
    
    //데이터 파싱해서 가져오고 0번 인덱스 출력 테스트 
    const jsonData = JSON.parse(localdata) 
    console.log(jsonData[0])

  
  
    // 재료 속성에 접근
  const ingredients = recipeItem.재료;

  // ingredients를 tdIngredients의 textContent로 설정
  tdIngredients.textContent = ingredients;

  // 콘솔에 출력
  console.log(tdIngredients.textContent);
        
    const aReceipe = document.createElement('a');    //레시피 클릭시 레시피 상세보기 이동
    aReceipe.href = '#';
    aReceipe.id = `link-to-content${i}`;
        
    const tdReceipe = document.createElement('td');
    tdReceipe.classList.add('localdata-column');
    tdReceipe.textContent = localdata[i].레시피;
        
    aReceipe.appendChild(tdReceipe);
    
    //tr안에 td요소들 넣기
    tr.appendChild(tdCook);
    tr.appendChild(tdIngredients);
    tr.appendChild(tdReceipe);

    //body안에 만들어진 tr넣기
    $body.appendChild(tr);

}   