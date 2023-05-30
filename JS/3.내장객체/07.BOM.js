window.onload=()=>{
    // window.open()
    btn1.addEventListener('click',()=>{
        // window.open('http://www.naver.com'); //새탭이 열리고 사이트 접속
        // window.open('http://www.naver.com','na2ver'); //open(url,창이름)

        // open(ulr,창이름,'속성')
        window.open('07.BOM.html','BOM','width=50, height=500')
    });

    // 타이머 관련 메소드
    // window.setTimeout()
    btn2.addEventListener('click',()=>{
        let timerId=0;

        let newWindow = window.open('07.BOM.html','BOM','width=50, height=500');

        newWindow.alert('3초후 종료됩니다.')

        //setTimeout(콜백함수,시간)
        //일정 시간 경과 후 콜백함수 한번 실행
        timerId = window.setTimeout(()=>{
            newWindow.close();
        },3000)

        //타이머 id를 clearTimeout()함수에 전달하면 해당 id의 타이머를 취소할수있다.
        clearTimeout(timerId)
    });

    let setInt='';
    btnStart.addEventListener('click',()=>{
        setInt=setInterval(function(){
            let date = new Date();

            area1.innerHTML 
            = `${date.getHours()} : ${date.getMinutes()} : <span id='second'>${date.getSeconds()}</span>`;
            
        },1000);
        
    });


    btnStop.addEventListener('click',()=>{
        console.log('setInt 중지')
        clearInterval(setInt);
        
    });


    btn3.addEventListener('click',()=>{
        area2.innerHTML='<h4> location 객체 </h4>'

        for(key in location){
            // console.log('key: ',key)
            // //객체[속성]
            // //객체.속성
            // console.log('value: ',location[key])

            area2.innerHTML+= 
                `key: ${key}, value: ${location[key]}<br>`
        }
    });

    btn4.addEventListener('click',()=>{
        
    });

    btn5.addEventListener('click',()=>{
        
    });

    btn6.addEventListener('click',()=>{
        
    });







































}