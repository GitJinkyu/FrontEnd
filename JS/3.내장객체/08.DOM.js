window.onload=function(){
    btn1.addEventListener('click',function(){
        // 요소 노드 생성
        let elementnode = document.createElement('h3');
        // 텍스트 노드 생성
        let txtnode = document.createTextNode('안녕하세요')
        
        //연결 (자식요소로등록)
        // 선택된 부모요소의 맨마지막에 추가됨
        elementnode.appendChild(txtnode);
        area1.appendChild(elementnode);

        area1.innerHTML+= '<h3>html로도 가능합니다</h3>';
    })

    // 텍스트 노드가 없는 요소 노드 생성
    // 요소의 속성을 설정하는 방법
    btn2.addEventListener('click',function(){
        
        // 요소노드 생성
        let imgNode = document.createElement('img')

        // 속성 설정하는 방법
        //두가지 방법이 있다.
        imgNode.src= 'images/morning.jpg';
        // imgNode.setAttribute('src','images/morning.jpg');
        imgNode.setAttribute('width','150px');
        imgNode.setAttribute('height','100px');

        //연결 (자식요소로 등록)
        area2.appendChild(imgNode);

        area2.innerHTML+='<img src="images/afternoon.jpg" width="150px" height="100px">'
        

    })

    btn3.addEventListener('click',function(e){
        area3.remove();

        //이벤트가 발생한 요소
        let target=e.target;
        console.log(target);
        
        // 타겟의 상위 요소를 반환
        console.log(target.parentNode);

        // 상위 요소의 자식노드를 샂게
        let delNode = document.querySelector('#area1');
        target.parentNode.removeChild(delNode);
    })


    // 원하는 위치에 노드 추가
    btn4.addEventListener('click',function(){
        //p요소 생성
        let pNode = document.createElement('p');
        //text node생성
        let txtNode = document.createTextNode('헤이');

        //연결
        pNode.appendChild(txtNode);


        //부모요소 선택 (body)
        let body = document.querySelector('body');
        
        //노드 선택(삽입하고싶은 위치의 요소를 선택) (h1)
        let h1 = document.querySelector('h1')

        // .insertBefore(삽입할 노드,삽입할 위치)
        body.insertBefore(pNode,h1)

    })

    .addEventListener('click',function(){
            

    })



}
