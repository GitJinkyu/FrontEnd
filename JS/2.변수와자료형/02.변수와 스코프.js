//사용자로부터 출생년도를 입력 받아서 
//나이를 출력하는 프로그램

var date = new Date(); //내장 객체

//현재 년도 가져오기
var year = date.getFullYear(); 

function getAge(){
    //블럭레벨
    if(true){
        //지역변수
        let birth_year = prompt('출생년도를 입력해주세요');
        var age = year - birth_year;
        console.log(`당신의 나이는 ${age}입니다.`)
        console.log(birth_year);
    }
}
//var 키워드는 함수레벨
// console.log(`당신의 나이는 ${age}입니다.`) // 에러발생

// // let 변수는 블록레벨
// console.log(birth_year); // 에러발생

/*
    스코프: 예약어에 따라 스코프가 달라짐
    함수레벨 스코프(var)
        함수 외부에서 함수 내부에서 선언된 변수에 접근 불가
    블럭레벨 스코프(let,const)
        블럭 외부에서 블럭 내부에 선언된 변수에 접근 불가
    
    *주의
        예약어를 붙이지 않은 경우
        오류가 발생하지 않으며 전역 변수로 생성됨
*/

//전역변수 (global variable) : 함수 외부에서 변수를 선언
g_str1='전역변수';
var g_str2='var전역변수';
let g_str3='let전역변수';

console.log('전역변수 출력=========');
console.log(g_str1);
console.log(g_str2);
console.log(g_str3);


// windows 객체:
// 브라우저에서 제공하는 브라우저창(window)에 대한 정보를 담고 있는 객체
// 전역변수 사용 시 'window.변수명' 혹은 'this.변수명'으로 표현해서 사용할 수 있다.

// var로 선언하면 window객체와 연결
console.log('window.변수명========');
console.log(window.g_str1);
console.log(window.g_str2);
console.log(window.g_str3);
console.log('this.변수명========');
console.log(this.g_str1);
console.log(this.g_str2);
console.log(this.g_str3);


function test(){
    console.log('전역변수 출력=========');
    console.log(g_str1);
    console.log(g_str2);
    console.log(g_str3);
    
    console.log('window.변수명========');
    console.log(window.g_str1);
    console.log(window.g_str2);
    console.log(window.g_str3);
    
    console.log('this.변수명========');
    console.log(this.g_str1);
    console.log(this.g_str2);
    console.log(this.g_str3);
    
    //지역변수 :  함수 외부에서 접근 불가..
    //키워드 없이 선언하면 함수가 실행시 전역변수로 작성
    l_str1 = '지역변수';
    var l_str2 = 'var 지역변수';
    let l_str3 = 'let 지역변수';
    
    console.log(l_str1);
    console.log(l_str2);
    console.log(l_str3);
    
    // 전역변수와 동일한 이름의 지역 변수 선언시 지역변수가 우선
    // 상단 출력이 undefined로 나오며 전역변수는 영향받지 않음
    
    //앞에 키워드를 달지않을 경우 전역변수 취급되므로 재선언이됨
    // g_str2='전역변수 == 지역변수';
    
    //앞에 키워드를 달 경우 이름은 같지만 함수내 지역변수로 취급되고
    // 함수가 끝난 뒤 함수 밖에서 호출하면 전역변수 값 그대로 나옴
    
    
    /*
    호이스팅:위로 끌어올리다
    자바스크립트 파서가 프로그램 실행전에
    변수와 함수의 메모리 공간을 미리 할당 하는것
    변수선언문과 함수선언문 유효범위 최상단에 선언(변수는 undefined로 초기화)
    */
   var g_str2='전역변수 == 지역변수';

   
   
   console.log('g_str2',g_str2); //지역변수에서 전역변수와 같은 이름으로 재선언
    
   //블럭레벨 스코프 테스트
   if(true){
       b_str1='블럭선언'; //전역
       var b_str2='블럭선언 var'; //함수
       let b_str3='블럭선언 let'; //블럭
       // 상수 : 선언과 동시에 초기화,변경 불가
       const b_str4 = '블럭선언 const' //블럭
    }

    console.log('함수내부선언',b_str1);
    console.log('함수내부선언',b_str2);

    // 블럭레벨 스코프 (let,const)
    // 블럭 내부에서 선언된 경우블럭 외부에서 호출 불가
    // console.log('함수내부선언',b_str3); //에러
    // console.log('함수내부선언',b_str4); //에러
}

//함수내부에서 선언된 지역변수를 함수밖에서 호출할때
//키워드없이 선언된 변수만 호출가능
// *단 지역변수를 선언한 함수가 한번 실행되야함.
// 함수 실행 이후 키워드 없이 선언된 변수도 호출이 가능
// console.log(l_str1); //키워드 없이 선언된 변수
// console.log(l_str2);
// console.log(l_str3);

//페이지가 모든 요소를 로드한 이후 바로 실행
window.onload= function(){
    console.log('onload 실행 -페이지 로딩 완료=====')

    //var 예약어의 중복선언
    var num=0;
    console.log(num);
    var num=10;
    console.log(num);

    //let으로 선언시 num1을 선언문이 나오기 전에 사용불가
    // let,const도 호이스팅이 되지만
    // Temporal Dead Zone(TDZ)에 위치
    // TDZ: 선언전에 변수를 사용하는것을 비허용하는 개념상의 공간

    // num1 = 10; //에러발생. 선언문 나오기전에 호출

    //let 예약어의 중복선언
    let num1 = 0;  
    // let num1 = 10; 에러발생
    console.log(num1);

    num1 = 10;
    console.log(num1);

}