//미완성...



const $deletelog = document.querySelector(`input#deletelog`)
//데이터 파싱해서 가져오기
loadData(); 
//최근대화 지우기 >> localstorage초기화 
$deletelog.addEventListener(`click`, e => {
    e.preventDefault();
    deletelog();
}) 




// jsonData의 length만큼 행만들고 안에 데이터 넣기 
function loadData () {
    const localdata = localStorage.getItem(`log1`)
    const jsonData = JSON.parse(localdata) 
    if (jsonData) {
    for (let i=0; i < jsonData.length; i++) {
        
        const tr = document.createElement('tr');  //테이블 행
        tr.classList.add('localdata');
            
            
        const tdnum = document.createElement(`td`); // 번호
        tdnum.classList.add(`localdata-column`);
        tdnum.textContent = `${i +1 }`
    
        const tdCook = document.createElement('td'); //요리
        tdCook.classList.add('localdata-column');
        tdCook.textContent = jsonData[i].요리;
            
        const tdIngredients = document.createElement('td');  //재료
        tdIngredients.classList.add('localdata-column');
        tdIngredients.textContent = jsonData[i].재료;
        
        //파싱해서 가져온 데이터중 재료부분 내용 테스트
        console.log(tdIngredients.textContent)
    
    
        const aRecipe = document.createElement('a');    //레시피 클릭시 레시피 상세보기 이동
        aRecipe.href = `#`
        aRecipe.classList.add(`link-to-content${i+1}`);
        aRecipe.textContent = `더보기`

        

        
        const tdRecipe = document.createElement('td');
        tdRecipe.classList.add('localdata-column');
        const $recipepreview =  jsonData[i].레시피; 
        const $receipePrev = $recipepreview.slice(0, 1);
        tdRecipe.textContent = $receipePrev
        //td안에 a테그 넣어서 더보기 링크 달아놓기 (완성X)
        tdRecipe.appendChild(aRecipe);
        
        //tr안에 td요소들 넣기
        tr.appendChild(tdnum);
        tr.appendChild(tdCook);
        tr.appendChild(tdIngredients);
        tr.appendChild(tdRecipe);
    

        //body안에 만들어진 tr넣기
        const $body = document.getElementById(`boardbody`)
        $body.appendChild(tr);


        //모달창 안의 내용
            const $createmodal = document.createElement(`div`);
            $createmodal.classList.add(`modal-${i+1}`);
            $createmodal.id = `modal-${i+1}`;

            const $createmodalcontent = document.createElement(`div`);
            $createmodalcontent.classList.add(`modalcontent`);
            $createmodalcontent.id = `modalcontent`
            $createmodalcontent.style = `display:none;`
            
            //레시피
            const $createmodaltextcontent = document.createElement(`textarea`);
            $createmodaltextcontent.classList.add(`modalreceipe`);
            const $textarea = $recipepreview.join(`\n`);
            $createmodaltextcontent.value = $textarea;
            //요리
            const $createmodalcook = document.createElement(`div`);
            $createmodalcook.classList.add(`modalcook`);
            $createmodalcook.textContent = `요리: ${jsonData[i].요리}`;
            //재료
            const $createmodalIngredients = document.createElement(`div`);
            $createmodalIngredients.classList.add(`modalingredients`);
            $createmodalIngredients.textContent = `재료: ${jsonData[i].재료}`;
            //닫기버튼
            const $createmodalclose = document.createElement(`input`);
            $createmodalclose.classList.add(`modalclose`);
            $createmodalclose.type = `button`;
            $createmodalclose.value = `닫기`;
            //북마크 미구현
            const $createmodalbookmark = document.createElement(`div`);
            $createmodalbookmark.classList.add(`bookmark`);
            $createmodalbookmark.textContent = ``;

            //모달창 만들기
            $createmodalcontent.appendChild($createmodalcook);
            $createmodalcontent.appendChild($createmodalIngredients);
            $createmodalcontent.appendChild($createmodaltextcontent);
            $createmodalcontent.appendChild($createmodalbookmark);
            $createmodalcontent.appendChild($createmodalclose);
            $createmodal.appendChild($createmodalcontent);
    
            const $modal = document.getElementById(`modal`);
            $modal.appendChild($createmodal);
            //모달열기
            aRecipe.addEventListener(`click`, (e) => {
                e.preventDefault();
                const $modalstyle = document.getElementById(`modal-${i+1}`)
                const $allmodalcontent = document.getElementsByClassName(`modalcontent`)
                
                for (let i=0; i < $allmodalcontent.length; i++) {
                    $modalcontent = $allmodalcontent[i];
                    $modalcontent.style.display = "block";
                }
                $modal.style.display = "block";
                $modalstyle.style.display = "block";
            //모달닫기
            $createmodalclose.addEventListener(`click`, e => {
                for (let i=0; i < $allmodalcontent.length; i++) {
                    $modalcontent = $allmodalcontent[i];
                    $modalcontent.style.display = "none";
                }
                $modal.style.display = "none";
                $modalstyle.style.display = "none";
            })

            })
    } 
} else {
        console.log(`비어있음.`)

    }
}


function deletelog() {
    localStorage.removeItem(`log1`);
    window.location.reload()
}


//화면 밖 클릭시 모달 닫기
window.onclick = function(event) {
    if (event.target.className == "modal") {
        event.target.style.display = "none";
    }
};

