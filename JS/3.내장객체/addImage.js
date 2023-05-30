window.onload=function(){
    let imgNode = document.createElement('img');

    let date = new Date();
    let hour =date.getHours();
    
    // 삼항연산자 쓰는 방법
    let imgSrc = (hour < 12) ? 'images/morning.jpg' : 'images/afternoon.jpg';
    // img노드의 src속성 변경
    imgNode.src=imgSrc;

    //if문 쓰는 방법
    // if(Hour>12){
    //     imgNode.src='images/afternoon.jpg'
        
    // }else{
    //     imgNode.src='images/morning.jpg'
    // }
    

    //부모요소 선택 (body)
    let container = document.querySelector('#container');
    
    // 자식으로 등록
    container.appendChild(imgNode);
}