//http통신을 이용하여 서버로부터 데이터를 수신
let xhr = new XMLHttpRequest();

//방식,자료위치,비동기 여부(기본: 비동기)
xhr.open('get','json/student-2.json');

// 서버에 자료를 요청
xhr.send();

// xhr.status 상태값(속성)
// 상태값이 바뀔때마다 이벤트가 호출
// XMLHttpRequest 객체의 현재 상태를 나타낸다
//     0. UNSENT : XMLHttpRequest 객체가 생성됨.
//     1. OPENED : open() 메소드가 성공적으로 실행됨(서버에 요청)
//     2. HEADERS_RECEIVED : 요청에 대한 응답으로 Header가 도착함
//     3. LOADING(숫자 3) : 요청한 데이터를 처리중임
//     4. DONE(숫자 4) : 요청한 데이터의 처리가 완료되어 응답할 준비가 완료됨
xhr.onreadystatechange = function(){



    // xhr 객체가 가지고 있는 속성, 속성값을 출력
    // reDiv.innerHTML +=('========================<br>');
    // for (xhrAttr in xhr){
    //   reDiv.innerHTML += (`${xhrAttr} : ${xhr[xhrAttr]}<br>`)
    // }

    // xhr.status
    //   서버의 문서 상태
    //   200 : 서버에 문서가 존재함
    //   404 : 서버에 문서가 존재하지 않음

    if(xhr.readyState === 4 && xhr.status === 200){
        //응답 문자열 (json 형식의 문자열)
        console.log(xhr.responseText);

        // jsObj로 변환
        let jsObj = JSON.parse(xhr.responseText);

        // 화면에 출력
        for(let i in jsObj){
            //화면에 출력
            let result= document.querySelector('#result')

            result.innerHTML+=`
            <h1>이름: ${jsObj[i].name}</h1>
            <ul>
                <li>전공: ${jsObj[i].major}</li>
                <li>학년: ${jsObj[i].grade}</li>
            </ul>
            `;
        }
    }
}