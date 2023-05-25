window.onload=function(){
    let img = document.querySelector('img');

    img.addEventListener('mouseover',function(){
        img.src='images/pic-2.jpg';
    });
    img.addEventListener('mouseout',function(){
        img.src='images/pic-1.jpg';
    });


}