window.onload=function(){
    btn1.addEventListener('click',function(){
        let javaP = document.createElement('p');
        let OracleP = document.createElement('p');
        let JSPServletP = document.createElement('p');
        let SPRINGP = document.createElement('p');

        let java = document.createTextNode('Java')
        let Oracle = document.createTextNode('Oracle')
        let JSPServlet = document.createTextNode('JSP/Servlet')
        let SPRING = document.createTextNode('SPRING')

        javaP.appendChild(java);
        OracleP.appendChild(Oracle);
        JSPServletP.appendChild(JSPServlet);
        SPRINGP.appendChild(SPRING);
        
        //부모요소 선택 (body)
        let body = document.querySelector('body');

        //노드 선택(삽입하고싶은 위치의 요소를 선택) 
        let p1 = document.querySelector('p')
        let p2 = document.querySelectorAll('p')[2];


        // .insertBefore(삽입할 노드,삽입할 위치)
        body.insertBefore(javaP,p1);
        body.insertBefore(OracleP,p1);
        body.appendChild(JSPServletP);
        body.appendChild(SPRINGP);
        
        //버튼 위로 넣으려면
        // p2.appendChild(SPRINGP);
        // p2.insertBefore(JSPServletP,SPRINGP);
        
    })
}