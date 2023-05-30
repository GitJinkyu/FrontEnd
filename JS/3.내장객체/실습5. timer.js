window.onload=function(){
    bttn.addEventListener('click',function(e){

        let newbox = document.createElement('div');
        newbox.classList.add('noti');

        newbox.innerHTML='알림내용표시'
        // let boxtxt = document.createTextNode('알림내용표시'); innerHTML이 편함
        // newbox.appendChild(boxtxt);

        let notibox = document.querySelector('#noti-box');

        notibox.appendChild(newbox);
        

        
        //요소 삭제
        setTimeout(()=>{
            notibox.remove();
        },3000)

        
    });
}