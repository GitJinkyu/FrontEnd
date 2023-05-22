
//화면을 모두 로드(출력)하고 나서 실행
//따로 호출 안해도 화면만 모두 출력되면 자동 실행
window.onload = function(){
    // 0~255 임의의 숫자 추출
    let r=parseInt(Math.random()*256);
    let g=parseInt(Math.random()*256);
    let b=parseInt(Math.random()*256);
    document.body.style.backgroundColor=`rgb(${r},${g},${b})`;
}


function setColor(){
    // 0~255 임의의 숫자 추출
    let r=parseInt(Math.random()*256);
    let g=parseInt(Math.random()*256);
    let b=parseInt(Math.random()*256);
    document.body.style.backgroundColor=`rgb(${r},${g},${b})`;
}

// setColor();