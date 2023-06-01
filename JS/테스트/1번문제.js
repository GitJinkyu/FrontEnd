window.onload=function(){
    
    clock()
    
}

function clock(){
    var now = new Date();	// 현재 날짜 및 시간
    var hours = now.getHours();	// 시간
    var minutes = now.getMinutes();	// 분
    var seconds = now.getSeconds();	// 초
    var time = `현재 시간: ${hours}시 ${minutes}분 ${seconds}초`;

    board.innerHTML = time;
    console.log(`현재 시간: ${hours}시 ${minutes}분 ${seconds}초`);
    setTimeout(clock,1000);
}
