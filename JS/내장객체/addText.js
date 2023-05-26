window.onload=function(){
    order.addEventListener('click',function(){

        let pNode = document.createElement('p')
        let txt1 = document.querySelector('#container > h2').innerHTML;

        let txtNode = document.createTextNode(txt1)


        pNode.appendChild(txtNode);
        

        pNode.style.color='red';
        pNode.style.fontWeight=800;

        let orderInfo = document.querySelector('#orderInfo');

        orderInfo.appendChild(pNode);
    });
}