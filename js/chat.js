//querySelector 
const $input = document.querySelector(`input.prompt`); 
const $button = document.querySelector(`button.submit`); 
const $answer = document.querySelector(`.answer`);

// /////////////

const data = []
data.push (
    {"role" : "system", "content" : "최초 AI컨셉/직업 설정"},
    
    //질문, 답변  > 여러개 가능
    {"role": "user", "content": "가상 질문"},
    {"role": "assistant", "content": " 가상 답변 ."},
)

//////////////////////
//API링크 
const url = `https://estsoft-openai-api.jejucodingcamp.workers.dev/`


//버튼을 누르면 데이터를 전송하고 기존의 채팅데이터를 같이 전송.
//내가 질문한 내용과 GPT의 답변내용을 함께 기존의 데이터와 함께 전송해야함
//최대 몇개까지? >> 30개  

$button.addEventListener("click", e => {
    e.preventDefault() //원치않는 이벤트 방지 / 기본옵션
    const contents = $input.value   //imput = 텍스트칸 value = 텍스트안의 값
    data.push({                        // data배열에 해당 내용을 뒤에 추가하겠다.
        "role" : "user",
        "content" : contents
    })
    $input.value = ""
    //data 배열의 길이가 30개 이상일 경우 앞에서 부터 data내용 삭제
    if (data.length > 29) {
        data.shift();
    }
    
    GPTAI()
})



async function GPTAI() {
    const res = await fetch(url, {   //각종 데이터 전송 및 res에 답변내용 저장  
        method : "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
        redirect: `follow`
    })
    const answer = await res.json();  
    // 답변 콘솔에출력
    console.log(answer);  
    console.log(answer.choices[0].message.content)
    // 답변을 answer 테그의 안의 p테그 추가하고 안에 출력
    $answer.innerHTML = `<p>${answer.choices[0].message.content}</p>`
    
    
    const $답변 = document.querySelector(`.답변`);
    
    //답변 div테그에 data내용 출력 (임시 확인용)
    if ($답변 !== "") {
        data.push({
            "role" : "assistant",
        "content" : answer.choices[0].message.content
        })
        $답변.innerHTML = `${JSON.stringify(data)}`
    }
    
   

    }


