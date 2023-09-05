
//querySelector 
const $menu = document.querySelector(`input.menu`);
const $Ingredients = document.querySelector(`input.Ingredients`)
const $button = document.querySelector(`button.submit`); 
const $resultreceipe = document.querySelector(`textarea.GPTresult-receipelist`)




// /////////////

const data = []
data.push (
    {"role" : "system", "content" : "여러 재료를 사용하여 사용자의 요구에 맞춰주는 만능 요리사야"},
    
    //질문, 답변  > 여러개 가능
    {"role": "user", "content": "내가 만들고 싶은 메뉴와 가지고 있는 재료를 알려줄테니 방법을 알려줘. 반드시 내가 말한 재료만을 사용해야해. 만약 해당 재료들 만으로 만들기 어렵다면 만들지 못한다고 말해줘."},
    {"role": "assistant", "content": " 네 알겠습니다. 조리하고 싶으신 메뉴와 가지고 있는 재료를 알려주시면 방법을 알려드리겠습니다."},
    {"role": "user", "content": "원하는 메뉴와 재료를 알려주면 반드시 해당 재료만을 사용하여 요리법을 알려줘. 다른 재료는 사용하지말고. 요리법에 반드시 정확한 계량, 명확한 시간, 구체적인 방법을 표시해줬으면 좋겠어. 만약 요리가 불가능하다면 반드시 말해줘. 답변형식은 반드시 요리: [요리], 재료: [재료1, 재료2], 레시피: [1.~~~, 2.~~~], 사용하지않는 재료: [사용하지않는재료] 형식으로 보내줘. "},
    {"role": "assistant", "content": " 네 알겠습니다. 정해진 형태를 지켜 답변형식을 설정하겠습니다. 반드시 정확한 수치, 시간, 구체적인 방법을 포함하여 답변하겠습니다. 말씀하신 재료만 사용하여 조리하고 싶으신 메뉴와 가지고 있는 재료를 알려주시면 방법을 알려드리겠습니다. 만약 해당 재료만으로 요리가 불가능하다면 알려드리겠습니다."},
    {"role": "user", "content": " 예를들어 밀가루로 면을 만들라는 너무 억지스러운 조리법은 삼가해줘. 반드시 그 답변을 JSON 형식으로 담아서 보내줘 반드시 그 외 다른 불필요한 말은 생략해줘. 반드시 파싱과정에서 문제가 없는지 확인하고 보내줘"},
    {"role": "assistant", "content": "실제로 원할한 수행이 가능한 조리법을 제공하겠습니다. 네 답변을 JSON형식으로 보내고 그 외 불필요한 정보는 제공하지 않겠습니다. "},
    )

//////////////////////
//API링크 
const url = `https://estsoft-openai-api.jejucodingcamp.workers.dev/`


//버튼을 누르면 데이터를 전송하고 기존의 채팅데이터를 같이 전송.
//내가 질문한 내용과 GPT의 답변내용을 함께 기존의 데이터와 함께 전송해야함
//최대 몇개까지? >> 30개  

$button.addEventListener("click", e => {
    e.preventDefault() //원치않는 이벤트 방지 / 기본옵션
    const contents = `요리:${$menu.value} 재료${$Ingredients.value}`   //imput = 텍스트칸 value = 텍스트안의 값
    if ($menu.value === ``) {       //음식, 재료칸 비어있으면 전송하지 않겠다.  
        alert(`음식는 필수사항입니다.`);
        return;
    }  else if ($Ingredients.value === ``) {       //왜 둘이 if ($menu || $Ingredients.value === ``) 일때로 하면 적용이 안되는거지? 
        alert(`재료는 필수사항입니다.`);
        return;
    }

    data.push({                        // data배열에 해당 내용을 뒤에 추가하겠다.
        "role" : "user",
        "content" : contents
    })
    result(); //결과페이지 
    $menu.value = ""
    $Ingredients.value = ""
    //data 배열의 길이가 30개 이상일 경우 앞에서 부터 data내용 삭제
    if (data.length > 29) {
        data.shift();
    }
    window.scroll({top:920, behavior:"smooth"})
    GETGPT()
})



async function GETGPT() {
    const res = await fetch(url, {   //각종 데이터 전송 및 res에 답변내용 저장  
        method : "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
        redirect: `follow`
    })
    const answer = await res.json();  
    const answerText = answer.choices[0].message.content;
    
    // 결과 확인용 답변 콘솔에출력 
    console.log(answer);  
    console.log(answerText)
    
    
    // 답변을 answer 테그의 안의 p테그 추가하고 안에 출력 
    // $answer.innerHTML = `<p>${answerText}</p>`
    
    
    
 

    await local(answerText);  //로컬저장함수
    }

async function local(text) {
    
    //answerText 내용 파싱해서 로컬에 저장하기
    const json = JSON.parse(text);   
    
    // 로컬스토리지에서 받아오고 답변내용 추가 후 로컬스토리지에 넣기
    
    let GPT_result = localStorage.getItem(`log1`);
    
    if (!GPT_result) {
        GPT_result = [];
    } else {
        GPT_result = JSON.parse(GPT_result);
    }

    GPT_result.push(json);
    localStorage.setItem(`log1`, JSON.stringify(GPT_result))
    const lastIndex = GPT_result.length -1;
    
    //결과 확인용 콘솔로그
    console.log(GPT_result[lastIndex].요리)
    console.log(GPT_result[lastIndex].재료)
    console.log(GPT_result[lastIndex].레시피)


    
    
  // 레시피부분 배열 끝을 \n join해서 순서에 따라 줄바꿈 일어나게함.
    const $recipeText = GPT_result[lastIndex].레시피;
    const $textarea = $recipeText.join(`\n`);
    $resultreceipe.value = $textarea;
}


//결과창에 입력한내용 나오게하기
function result() {
    const $resultmenu = document.querySelector(`div.GPTresult-foodlist`)
    const $resultIngredients = document.querySelector(`div.GPTresult-Ingredientslist`)
    

    $resultmenu.innerHTML = `${$menu.value}`
    $resultIngredients.innerHTML = `${$Ingredients.value}`
}

//다시하기 버튼 추가 
const $retry = document.querySelector(`input.retry`)

$retry.addEventListener (`click` , e => {
    e.preventDefault()
    window.scrollTo({top:-920, behavior:"smooth"})
    $resultreceipe.value = `곧 맛있는 요리법을 알려드립니다.`
})

