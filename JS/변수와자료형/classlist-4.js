window.onload=function(){
    let mode = document.querySelector('#mode')

    mode.addEventListener('click',()=>{
        document.body.classList.toggle('dark')

    })

    let title = document.querySelector('#title')

    title.addEventListener('click',()=>{
        title.classList.toggle('clicked')
        
    })

    let user = document.querySelectorAll('#desc p');
    user.forEach(ptag => {
        ptag.addEventListener('click', () => {
            ptag.classList.toggle('blue-italic');
          });
    });
}