function typeTest(){
    // document.write('type 테스트');
    // alert('type 테스트');
    console.log('type 테스트');
    
    //변수를 선언시 사용되는 키워드
    //var,let,const(상수)

    //숫자형: 정수와 실수를 포함
    let age = 20;
    let height = 184.5;

    //문자열 :작은따옴표, 큰따옴표로 묶은 데이터
    let name = '문인수';

    //논리값 :true,false
    let check= false;
    
    //박스 선택
    let area1 = document.querySelector('#area1');

    //박스에 값을 입력
    area1.innerHTML='<h4>안녕하세요</h4>';

    // Template Literals 템플릿 리터럴
    // "",'' 대신 ``(백팃)을 사용하여 변수 (${})를 함께 출력 
    area1.innerHTML+=`name:${name} ,type:${typeof(name)}<br>`;
    area1.innerHTML+=`age:${age} ,type:${typeof(age)}<br>`;
    area1.innerHTML+=`height:${height} ,type:${typeof(height)}<br>`;
    area1.innerHTML+=`check:${height} ,type:${typeof(check)}<br>`;
    
    


    
}


function typeTest2(){
    // document.write('type 테스트');
    // alert('type 테스트');
    console.log('type 테스트');

    //배열 선언
    let hobbies=['축구','농구','야구'];
    let area2=document.querySelector('#area2');

    area2.innerHTML='객체 테스트';
    area2.innerHTML+=`hobbies= ${hobbies}, TYPE: ${typeof(hobbies)}<br><br>`;


    //변수에 함수를 저장 할 수 도 있고
    // 매개변수로 함수를 넘겨줄수도 있다

    //함수 선언
    // let testFunc = function(num1, num2){
        // 매개변수의 갯수가 일치하지 않은 경우
        // ,undefined로 초기화 되어 오류가 발생 ==>>초기값을 지정해줘야함
    //초기값 지정
    let testFunc = function(num1=0, num2=0){
        console.log('num1',num1);
        console.log('num2',num2);
        return num1+num2;
    }

    // 함수실행:변수이름 (매개변수)
    console.log('testFunc', testFunc(10,20));
    // 매개변수의 갯수가 일치하지않아도 실행 된다
    console.log('testFunc', testFunc(10));

    area2.innerHTML += `testFunc : ${testFunc}, type:${typeof(testFunc)}<br><br>`
    
    //객체타입
    let user = {
        //속성:값,
        //속성:값,...
        name: '문인수',
        age: 20,
        height: 184.5,
        id:'test',
        hobbies:['축구','농구','야구']
        
    }
    console.log(user);
    console.log(user.name);
    console.log(user.age);
    console.log(user.height);
    console.log(user.id);
    console.log(user.hobbies);

    area2.innerHTML += `user: ${user}, type:${typeof(user)}<br><br>`
    area2.innerHTML += `null: type:${typeof(null)}<br><br>`
    area2.innerHTML += `undefined: type:${typeof(undefined)}<br><br>`
}


// 2. 데이터의 형변환
//     1) 문자열과 숫자의 '+'연산
//         문자형과 + 연산지 문자열로 변경
//         그외의 연산시 숫자타입인 경우 숫자로 변환 하여 연산처리
function plusTest(){
    let test1 =  7 + 7; // 14
    let test2 =  '7' + 7; // '77'
    let test3 =  7 + '7'; // '77'
    let test4 =  7 + 7 + '7'; // '147'
    let test5 =  7 + '7' + 7; // '777'
    let test6 =  '7' + (7 + 7); // '714'
    
    let test7 =  7 * '7'; // 49
    let test8 =  '7' - 3; // 4
    let test9 =  '4' / 2; // 2
    let test10 =  4 % '2'; // 0
    let test11 =  '3' * '7'; // 21
    let test12 =  '3' * 'a'; // NaN

    let area3 = document.querySelector('#area3');

    area3.innerHTML = `test1':${test1}<br><br>`;
    area3.innerHTML += `test2':${test2}<br><br>`;
    area3.innerHTML += `test3':${test3}<br><br>`;
    area3.innerHTML += `test4':${test4}<br><br>`;
    area3.innerHTML += `test5':${test5}<br><br>`;
    area3.innerHTML += `test6':${test6}<br><br>`;
    area3.innerHTML += `test7':${test7}<br><br>`;
    area3.innerHTML += `test8':${test8}<br><br>`;
    area3.innerHTML += `test9':${test9}<br><br>`;
    area3.innerHTML += `test10':${test10}<br><br>`;
    area3.innerHTML += `test11':${test11}<br><br>`;
    area3.innerHTML += `test12':${test12}<br><br>`;
}

function castingTest(){
    let area4= document.querySelector('#area4');

    area4.innerHTML = `2 + '3' : ${2 + '3'}<br><br>`; //23
    area4.innerHTML += `2 + Number('3') : ${2 + Number('3')}<br><br>`; //5
    area4.innerHTML += `String(2) + Number('3') : ${String(2) + Number('3')}<br><br>`; //23
    area4.innerHTML += `2 + parseInt('3') : ${2 + parseInt('3')}<br><br>`; //5
    area4.innerHTML += `2 + parseFloat('3') : ${2 + parseFloat('3')}<br><br>`; //5
    
    //16진수를 10진수로 변환
    // ff : 255
    area4.innerHTML += `${parseInt('ff',16)}`
}

function opTest(){
    let area5 = document.querySelector('#area5');

    area5.innerHTML = '"==" 연산자 테스트 <br><br>'
    area5.innerHTML += `7==7 : ${7 == 7} <br><br>`
    area5.innerHTML += `7=="7" : ${7 == "7"} <br><br>`
    area5.innerHTML += `7!="7" : ${7 != "7"} <br><br>`
    area5.innerHTML += `"7"!="7" : ${"7" != "7"} <br><br>`
    
    area5.innerHTML += '"===" 연산자 테스트 <br><br>'
    area5.innerHTML += `7===7 : ${7 === 7} <br><br>`
    area5.innerHTML += `7==="7" : ${7 === "7"} <br><br>`
    area5.innerHTML += `7==="7" : ${7 === "7"} <br><br>`
    area5.innerHTML += `"7"==="7" : ${"7" === "7"} <br><br>`
}

function forTest(){
    // 1~10까지 수를 담고 있는 배열 array
    let array=[1,2,3,4,5,6,7,8,9,10];

    for(let i=0; i<array.length; i++){
        console.log(array[i]);
    }
    console.log('for 끝==============================');

    // for(변수 in 객체){}
    // 반복문- 객체 키와 값 가져오기
    // 반복 변수에 array의 index를 순서대로 담아서 반복시킨다
    // 객체명.속성명, 객체명[속성명]
    for(let i in array){
        console.log(array[i]);
    }
    let student = {
        name:'고길동'
        ,age:'43'
        ,class:'1'
    };

    // 객체의 속성, 속성값을 출력
    for(key in student){
        console.log(key, student[key]);
    }
    console.log('for in 끝==============================');
    
    //배열.forEach(function(변수){})
    // 배열의 요소를 함수의 매개변수로 전달
    array.forEach(function(num){
        console.log(num);
    });
    console.log('forEach ==============================');
    
    let i = 0 ;
    while(true){
        i++;
        // 짝수이면 시작으로 돌아감(continue);
        if(i%2==0){
            continue;
        }
        console.log(i);
        
        if(i>5){
            break;
        }
        
        
    }
    console.log('while ==============================');

    // ES6부터 추가된 for문
    for(let iterator of array){
        console.log(iterator);
    }
    
    

}