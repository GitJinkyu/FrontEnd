window.onload=function(){

    let buttons = document.querySelectorAll('button');


    // 반복문 이용해서 버튼을 하나씩 꺼내오고 이벤트를 추가
    for(button of buttons){
        button.addEventListener('click',function(){
            console.log(this.innerText);
            console.log('addEventListener this',this.innerText);

            buttonClick(this.innerText);

        });
    }


    function buttonClick(buttonTxt){
        let result=document.querySelector('#result');

        if(buttonTxt =='AC'){
            // 0으로 초기화
            result.innerHTML = '0';
        } else if(buttonTxt== '='){
            result.innerHTML = eval(result.innerText);
        } else{
            // 선택된 버튼에 txt값을 result에 추가
            if(result.innerHTML =='0'){
                //초기화
            result.innerHTML = buttonTxt;
            } else{
                //연결해서 입력
                result.innerHTML += buttonTxt;
            }
        }

    }

    
    // zero.onclick = function(){
    //     let result=document.querySelector('#result');
    //     if(result.innerHTML== '0'){
    //         result.innerHTML='';
    //     }else{
    //         result.innerHTML+='0';
    //     }

    // }
    // one.onclick = function(){
    //     let result=document.querySelector('#result');
    //     if(result.innerHTML== '0'){
    //         result.innerHTML='1';
    //     }else{
    //         result.innerHTML+='1';
    //     }

    // }
    // two.onclick = function(){
    //     let result=document.querySelector('#result');
    //     if(result.innerHTML== '0'){
    //         result.innerHTML='2';
    //     }else{
    //         result.innerHTML+='2';
    //     }

    // }
    // three.onclick = function(){
    //     let result=document.querySelector('#result');
    //     if(result.innerHTML== '0'){
    //         result.innerHTML='3';
    //     }else{
    //         result.innerHTML+='3';
    //     }

    // }
    // four.onclick = function(){
    //     let result=document.querySelector('#result');
    //     if(result.innerHTML== '0'){
    //         result.innerHTML='4';
    //     }else{
    //         result.innerHTML+='4';
    //     }

    // }
    // five.onclick = function(){
    //     let result=document.querySelector('#result');
    //     if(result.innerHTML== '0'){
    //         result.innerHTML='5';
    //     }else{
    //         result.innerHTML+='5';
    //     }

    // }
    // six.onclick = function(){
    //     let result=document.querySelector('#result');
    //     if(result.innerHTML== '0'){
    //         result.innerHTML='6';
    //     }else{
    //         result.innerHTML+='6';
    //     }

    // }
    // seven.onclick = function(){
    //     let result=document.querySelector('#result');
    //     if(result.innerHTML== '0'){
    //         result.innerHTML='7';
    //     }else{
    //         result.innerHTML+='7';
    //     }

    // }
    // eight.onclick = function(){
    //     let result=document.querySelector('#result');
    //     if(result.innerHTML== '0'){
    //         result.innerHTML='8';
    //     }else{
    //         result.innerHTML+='8';
    //     }

    // }
    // nine.onclick = function(){
    //     let result=document.querySelector('#result');
    //     if(result.innerHTML== '0'){
    //         result.innerHTML='9';
    //     }else{
    //         result.innerHTML+='9';
    //     }

    // }

    // clear.onclick = function(){
    //     let result=document.querySelector('#result');
    //     result.innerHTML='0';


    // }

    // equal.onclick = function(){
    //     let result=document.querySelector('#result');

    //     result.innerText = eval(result.innerText);

    // }

    // plus.onclick = function(){
    //     let result=document.querySelector('#result');
    //     if(result.innerHTML== '0'){
    //         result.innerHTML='+';
    //     }else{
    //         result.innerHTML+='+';
    //     }

    // }

    // minus.onclick = function(){
    //     let result=document.querySelector('#result');
    //     if(result.innerHTML== '0'){
    //         result.innerHTML='+';
    //     }else{
    //         result.innerHTML+='+';
    //     }

    // }

    // astric.onclick = function(){
    //     let result=document.querySelector('#result');
    //     if(result.innerHTML== '0'){
    //         result.innerHTML='*';
    //     }else{
    //         result.innerHTML+='*';
    //     }

    // }

    // dot.onclick = function(){
    //     let result=document.querySelector('#result');
    //     if(result.innerHTML== '0'){
    //         result.innerHTML='.';
    //     }else{
    //         result.innerHTML+='.';
    //     }

    // }

    // left.onclick = function(){
    //     let result=document.querySelector('#result');
    //     if(result.innerHTML== '0'){
    //         result.innerHTML='(';
    //     }else{
    //         result.innerHTML+='(';
    //     }

    // }

    // right.onclick = function(){
    //     let result=document.querySelector('#result');
    //     if(result.innerHTML== '0'){
    //         result.innerHTML=')';
    //     }else{
    //         result.innerHTML+=')';
    //     }

    // }

    // percent.onclick = function(){
    //     let result=document.querySelector('#result');
    //     if(result.innerHTML== '0'){
    //         result.innerHTML='%';
    //     }else{
    //         result.innerHTML+='%';
    //     }

    // }
}
