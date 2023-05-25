window.onload=function(){
    //고전 이벤트

    // 이벤트가 발생한 요소는
    // 내부적으로 이벤트 발생 정보를 담고 있는 객체를 매개변수로 전달한다
    
    //이벤트의 발생정보를 확인하고 싶다면 매개변수를 입력
    btn1.onclick = function(e){
        console.log('고전이벤트 모델',this);
        console.log('이벤트 객체',e);

        console.log(e);
        console.log(e.target);      // 이벤트가 발생한 대상
        console.log(e.button);      // 마우스 키값 반환
        console.log(e.clientX);     // 이벤트가 발생한 가로 위치
        console.log(e.clientY);     // 이벤트가 발생한 세로 위치
        console.log(e.ctrlKey);     // ctrl을 눌렀는지
        console.log(e.shiftKey);    // shift를 눌렀는지
        
        // 이전 이벤트와 현재 이벤트가 발생한 시간의 차이를 밀리세컨드로 반환
        console.log(e.timeStamp);
        console.log(e.code);    // 키보드 키코드 값
        console.log(e.key);    // 키보드 키

    }

    // 고전 방식으로 이벤트를 적용할 경우 
    // 속성에 값을 주는 것이기 때문에 중복적용 불가능
    // 덮어씌기된다.  마지막에 정의한 함수가 실행됨
    btn1.onclick = (e)=>{
        //화살표 함수에서는 this가 없음
        //상위요소의 this를 찾아서 반환
        console.log('this :',this);
        console.log('e :',e.target);
    }

                                    //외부 함수를 넣는법
                                    //함수명 뒤에 ()를 붙이면 바로 실행되어버림
    btn2.addEventListener('click',clickEventHandler);

    btn2.addEventListener('mouseenter',function(){
        this.style.backgroundColor='red';
    });
    btn2.addEventListener('mouseleave',(e)=>{
        e.target.style.backgroundColor='blue';
    });
    

    //2. 이벤트가 발생한 요소 객체에 접근하는 방법
    // 1) 고전 이벤트 방식
    btn3.onclick = function(e){
        console.log('e.target: ',e.target);
        console.log('this: ',this);
        console.log('window.event.target: ',window.event.target);
    }

    btn3.onclick = (e)=>{
        console.log('e.target: ',e.target);
        console.log('this: ',this);  //화살표 함수에선 this 사용 불가
        console.log('window.event.target: ',window.event.target);
    }

    // 3) 표준 이벤트 방식
    btn4.addEventListener('click',function(e){
        console.log('e.target: ',e.target);
        console.log('this: ',this);
        console.log('window.event.target: ',window.event.target);
    });
    
    submit1.addEventListener('click',function(e){
        
        // 정규식
        // 특정규칙을 가진 문자열을 검색하거나 치환할때 사용하는 형식 언어
        // /패턴/으로 선언
        // /정규식패턴/.test('문자열')
        // 문자열에 정규식 패턴을 만족하는 값이 있으면 true, 없으면 false를 리턴한다
        let regExp =/^[a-zA-Z0-9]{5,12}$/;
        
        let userId = document.querySelector('#userId').value;

        // ^ : 시작
        // [] : [...]내의 문자들 중 하나라도 존재
        // {m,n} : 앞선 패턴이 최소  m번 최대 n번 반복되는 문자열을 의미한다
        // $ : 끝
        
        if(!regExp.test(userId)){
            alert('아이디는 영문자,숫자로만 이루어진 총 5~ 12자 사이로 입력해 주세요')
            
            //표준 이벤트 방식에서는(이벤트 객체가 있는 경우)
            // 이벤트객체의 preventDefault() 함수를 이용하여 기본이벤트를 제거 할 수 있다
            e.preventDefault()
        }





    });

}

function clickEventHandler(){
    console.log('표준이벤트모델')
    
}


//2) 인라인 방식에서 이벤트가 발생한 요소를 확인하는 방법
function test(e){
    // 인라인방식은 매개값으로 이벤트객체를 가져올수없다!
    console.log('e: ',e); //undefined
    console.log('this: ',this); //상위 객체인 window 객체를 가리킨다 
    console.log('window.event.target: ',window.event.target); //접근 가능!
}

function passwordCheck(){
    let pass1 = document.querySelector('#pass1')
    let pass2 = document.querySelector('#pass2')
    
    if(pass1.value!==pass2.value){
        alert('비밀번호가 일치하지 않습니다.')
        return false;
    }
}
