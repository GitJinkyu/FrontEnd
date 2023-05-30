window.onload=function(){
    let body = document.querySelector('body');
    let result = document.querySelector('#result')
    body.addEventListener('keydown',function(e){
        console.log(e.code);
        console.log(e.key);
        console.log(e.keyCode);
        result.innerHTML=`code: ${e.code} key: ${e.key} keyCode: ${e.keyCode}`
        
    });

}