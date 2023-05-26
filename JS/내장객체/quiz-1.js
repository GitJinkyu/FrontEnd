window.onload=function(){
    btn1.addEventListener('click',function(e){

        let pNode = document.createElement('td')
        let pNode2 = document.createElement('td')
        let name = document.querySelector('#username').value;
        let majer = document.querySelector('#major').value;

        let nameNode = document.createTextNode(name)
        let majerNode = document.createTextNode(majer)


        pNode.appendChild(nameNode);
        pNode2.appendChild(majerNode);
        
        pNode.style.color='blue';
        pNode.style.fontWeight='bold';

        pNode2.style.color='lightsalmon';
        pNode2.style.fontWeight='bold';

        //테이블 추가하기
        let tr = document.createElement('tr');
        let tbody = document.querySelector('tbody');

        tbody.appendChild(tr);
        
        tr.appendChild(pNode);
        tr.appendChild(pNode2);

        e.preventDefault()
    });
}