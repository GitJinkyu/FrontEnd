window.onload=function(){
    // id가 특수문자 - 가 입력되서 바로 접근 못함 변수에 담아줌
    let modalbox = document.querySelector('#modal-box')
    let open = document.querySelector('#open')
    let close = document.querySelector('#close')
    
    // open,close는 window 객체의 내장 함수명임
    // 아이디로 바로 참조 불가
    // 변수에 담아주거나 직접 접근해야함

    open.addEventListener('click',function(){
        modalbox.classList.add('active')
    
        // modalbox.style.display='flex';
    });

    close.addEventListener('click',function(){
        modalbox.classList.remove('active')

        // modalbox.style.display='none';
    });
}