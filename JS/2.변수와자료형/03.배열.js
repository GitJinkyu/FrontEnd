window.onload=function(){
    let btn = document.querySelector('#btn1');
    let area = document.querySelector('#area1');
    
    // btn 요소에 click 이벤트가 발생하면 함수를 실행
    btn.addEventListener('click',function(){
        // area.innerHTML='실행!';

        // 1. 배열을 선언하는법
        let array1 = new Array(); //
        let array2 = new Array(3); //[empty x 3]
        let array3 = new Array('빨강','파랑','초록','노랑');
        let array4 = ['자바','오라클','css','자바스크립트']

        console.log('Array1 : ',array1)
        console.log('Array2 : ',array2)
        console.log('Array3 : ',array3)
        console.log('Array4 : ',array4)

        //여러가지 타입을 입력
        let array5 = [
            '고경희'           //문자
            ,28               //숫자
            ,true             //논리값
            ,[1,2,3,4]        //배열
            ,function(){      //함수
                return 1    
            }
            ,{}               //객체
        ]
        console.log('Array5 : ',array5);



        // 2.배열에 값을 추가하기
        array1[0];'귤'
        array1[1];'사과'
        array1[2];'자몽'

        console.log('============================');

        area.innerHTML += `array1(반배열)에 값 대입 : [${array1}]<br>`
                        +`array1.length : ${array1.length}<br><br>`;
                        
        // 배열의 길이를 3으로 정햇지만 길이가 자동으로 늘어남
        array2[0] = '자동차';
        array2[1] = '비행기';
        array2[2] = '기차';
        array2[3] = '배';

        area.innerHTML += `array2(반배열)에 값 대입 : [${array2}]<br>`
                        +`array2.length : ${array2.length}<br><br>`;

    });



        // 2.배열의 메소드들

        // 1) indexOf() : 항목의 index번호를 반환
        let btn2 = document.querySelector('#btn2');
        let area2 = document.querySelector('#area2');
        btn2.addEventListener('click',function(){
            // area2.innerHTML='실행완료';
            let array = ['귤','복숭아','사과','망고','자몽'];

            area2.innerHTML+=`array: [${array}]<br><br>`
            // 복숭아의 index
            area2.innerHTML+=`복숭아가 있는 배열의 인덱스: [${array.indexOf('복숭아')}]<br><br>`
            // 자몽의 index
            area2.innerHTML+=`자몽이 있는 배열의 인덱스: [${array.indexOf('자몽')}]<br><br>`
        
        })


        // 2) concat() : 배열을 연결하여 반환
        // 배열1.concat(배열2)
        // 배열1의 요소, 배열2의 요소를 결합하여 새로운 배여을 만들어 반환한다.
        // 원본 배열에 영향을 미치지않는다
        let btn3 = document.querySelector('#btn3');
        let area3 = document.querySelector('#area3');
        btn3.addEventListener('click',function(){
            area3.innerHTML+='실행확인메세지';
            let array1 =['유재석','노홍철','정형돈','하하','정준하','박명수'];
            let array2 =['침착맨','주호민','김풍','주우재','궤도민수','박정민'];
            
            area3.innerHTML+=`array1: [${array1}]<br>`;
            area3.innerHTML+=`array2: [${array2}]<br>`;
            
            area3.innerHTML+=`결합: [${array1.concat(array2)}]<br>`;
            // 원본에 영향을 미치지 않는다
            area3.innerHTML+=`array1: [${array1}]<br>`;

        })


        // 3)join() : 배열의 요소들을 결합하여 문자열로 반환
        // 매개값으로 구분자를 임의의 원하는 방식으로 입력할 수 있다.
        let btn4 = document.querySelector('#btn4');
        let area4 = document.querySelector('#area4');
        btn4.addEventListener('click',function(){
            area4.innerHTML+='실행확인메세지';
            let array =['서울','강원','경기'];

            area4.innerHTML += `array.join('|') : [${array.join('|')}]<br>`
            area4.innerHTML += `array.toString() : [${array.toString()}]<br>`

            // 공백을 구분자로 문자열 생성
            let str = array.join(' ');

            //문자열을 다시 배열로 만들기
            area4.innerHTML+= `str.split(' ' ): [${str.split(' ')}]`
            
        })



        // 4)reverse() : 배열의 순서를 뒤집는다
        // 원본에 영향을 미치는 메소드
        let btn5 = document.querySelector('#btn5');
        let area5 = document.querySelector('#area5');
        btn5.addEventListener('click',function(){
            area5.innerHTML+='실행확인메세지';
            // ES6에서 추가된 배열 생성 메소드
            let array = Array.of(10,5,3,6)

            
            area5.innerHTML+=`원본array : [${array}]<br><br>`
            area5.innerHTML+=`뒤집기array : [${array.reverse()}]<br><br>`
            area5.innerHTML+=`원본array : [${array}]<br><br>`

        })



        // 5)sort()
        // 배열을 오름차순(문자기준) 으로 정렬하는 메소드이다. : 
        // 원본 배열에 영향을 미치는 메서드
        let btn6 = document.querySelector('#btn6');
        let area6 = document.querySelector('#area6');
        btn6.addEventListener('click',function(){
            area6.innerHTML+='실행확인메세지';
            let array1 =[10,35,230,100,885];
            let array2 =['체리','사과','바나나','수박']
            area6.innerHTML +=`array1 : [${array1}]<br><br>`
            area6.innerHTML +=`array2 : [${array2}]<br><br>`
            area6.innerHTML +=`array1 : [${array1.sort()}]<br><br>`
            area6.innerHTML +=`array2 : [${array2.sort()}]<br><br>`
            
            area6.innerHTML +=`array1 : [${array1}]<br><br>`
            area6.innerHTML +=`array2 : [${array2}}]<br><br>`

            // sort() 메소드에 함수를 매개값으로 전달해서 정렬 기준을 번경할수있다.
            array1.sort(function(left, right){
                return left - right; //오름차순 정렬
                
            });
            area6.innerHTML +=`array1 오름차순 정렬 : [${array1}]<br><br>`
            


            array1.sort(function(left, right){
                return right - left; //내림차순 정렬
                
            });
            area6.innerHTML +=`array1 내림차순 정렬 : [${array1}]<br><br>`


            area6.innerHTML +=`array1 내림차순 정렬 : [${array2.sort().reverse()}]<br><br>`

        })


        // 6)push(), pop()
        // push() : 배열의 맨 뒤에 요소를 추가한다. 
        // pop() : 배열의 맨 뒤에 요소를 반환 후 제거한다.
        let btn7 = document.querySelector('#btn7');
        let area7 = document.querySelector('#area7');
        btn7.addEventListener('click',function(){
            let array = ['박효신','아이유','방탄소년단','GD']
            
            
            area7.innerHTML +=`array  : [${array}]<br><br>`
            //배열 맨 뒤에 새로운 요소를 추가하고 배열의 길이를 반환
            console.log('push() ',array.push('coldplay')) 
            area7.innerHTML +=`array.push  : [${array}]<br><br>`
            
            //배열 맨 뒤에 새로운 요소를 추가하고 배열의 길이를 반환
            console.log('push() ',array.push('임창정')) 
            area7.innerHTML +=`array.push  : [${array}]<br><br>`
            
            //배열 맨 뒤에 있는 요소를 반환한 후 제거함
            area7.innerHTML +=`array.pop()  : [${array.pop()}]<br><br>`
            area7.innerHTML +=`array.pop  : [${array}]<br><br>`
        })



        // 7)shift() , unshift()
        // shift() : 배열의 맨 앞의 요소를 반환 후 제거한다.
        // unshift() : 배열의 맨 앞에 요소를 추가한다.
        let btn8 = document.querySelector('#btn8');
        let area8 = document.querySelector('#area8');
        btn8.addEventListener('click',function(){
            let array = ['나루토','원피스','20세기소년']
            
            
            area8.innerHTML +=`array  : [${array}]<br><br>`
            //배열 맨 뒤에 새로운 요소를 추가하고 배열의 길이를 반환
            console.log('unshift() ',array.unshift('짱구')) 
            area8.innerHTML +=`array.unshift  : [${array}]<br><br>`
            
            //배열 맨 뒤에 새로운 요소를 추가하고 배열의 길이를 반환
            console.log('unshift() ',array.unshift('도라에몽')) 
            area8.innerHTML +=`array.unshift  : [${array}]<br><br>`
            
            //배열 맨 뒤에 있는 요소를 반환한 후 제거함
            area8.innerHTML +=`array.shift()  : [${array.shift()}]<br><br>`
            area8.innerHTML +=`array.shift  : [${array}]<br><br>`
        })

        // 8)slice(), splice()</h3>
        // slice() : 배열의 요소를 뽑아내는 메소드이다. 
        // splice() : 배열의 특정 인덱스 위치에 요소 제거 및 추가하는 메소드
        let btn9 = document.querySelector('#btn9');
        let area9 = document.querySelector('#area9');
        btn9.addEventListener('click',function(){
            let array = ['나루토','원피스','20세기소년','H2','짱']
            
            // array.slice(시작인덱스,끝인덱스)
            // 해당범위의 요소를 추출한다 끝인덱스는 포함되지않음
            area9.innerHTML +=`array.slice  : [${array.slice(0,4)}]<br><br>`
            // 원본 배열에 영향을 미치지않는다
            area9.innerHTML +=`array : [${array}]<br><br>`
            

            // array.splice(2,0, 'spring')
            // 시작인덱스,삭제할 갯수, 추가할 요소
            area9.innerHTML +=`array.splice  : [${array.splice(1,0,'spring','mybatis')}]<br><br>`
            
            // 원본 배열에 영향을 미침
            area9.innerHTML +=`array : [${array}]<br><br>`
            
            
            //1번 인덱스부터 요소 2개 삭제
            area9.innerHTML +=`array.splice  : [${array.splice(1,2)}]<br><br>`
            area9.innerHTML +=`array : [${array}]<br><br>`

        })
      
}

