const pics=['pic-1.jpg','pic-2.jpg','pic-3.jpg','pic-4.jpg','pic-5.jpg','pic-6.jpg'];
let index = 0;

window.onload=function(){
    let left = document.querySelector('#left');
    let right = document.querySelector('#right');

    
    container.style.backgroundImage ='url(images/pic-1.jpg)'


    left.addEventListener('click',function(){
        
        index--;

        if(index<=0){
            index=pics.length-1;
        }
        console.log(index)
        container.style.backgroundImage =`url(images/${pics[index]})`
    });
    
    right.addEventListener('click',function(){
        
        index++;

        if(index>5){
            index= 0
        }
        console.log(index)
        container.style.backgroundImage =`url(images/${pics[index]})`
    });
    
}

// 일정 간격으로 반복적으로 콜백 함수를 실행
// setInterval(콜백함수,대기시간(밀리초),(콜백함수의 인자 나열));

var interval = setInterval(function(){
    imgChange()
},1200);


//interval 중지
function stop(){
    console.log('setInterval 중지')
    clearInterval(interval);
}

function imgChange(){
    index++;

        if(index>5){
            index= 0
        }
        console.log(index)
        container.style.backgroundImage =`url(images/${pics[index]})`

}