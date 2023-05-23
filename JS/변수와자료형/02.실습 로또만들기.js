
window.onload = function(){
    let btn=document.querySelector('#btn')
    
    btn.onclick = function() {
        

        let lottoDiv = document.querySelector('div#lottoDiv');
        let arr=new Array(6);
        
        for (let i = 0; i < 6; i++) {
            arr[i] = parseInt((Math.random()*44)+1);
        }
        
        lottoDiv.innerHTML ='';

        for(let i=0; i<arr.length; i++){
            console.log(arr[i]);
            

            lottoDiv.innerHTML +=`<div class='ball bg${i}'>${arr[i]}</div>`;

            let bg=document.querySelector(`.bg${i}`);
            bg.style.backgroundColor=getColor()
        }
        

    }
    
}

function getColor(){
    let r=parseInt(Math.random()*256); 
    let g=parseInt(Math.random()*256);
    let b=parseInt(Math.random()*256);
    return `rgb(${r},${g},${b})`;

}