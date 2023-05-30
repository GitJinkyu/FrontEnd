window.onload=function(){
    let javaNode = document.createElement('li');
    let OracleNode = document.createElement('li');
    let JSPServletNode = document.createElement('li');
    let SPRINGNode = document.createElement('li');

    let java = document.createTextNode('Java')
    let Oracle = document.createTextNode('Oracle')
    let JSPServlet = document.createTextNode('JSP/Servlet')
    let SPRING = document.createTextNode('SPRING')

    javaNode.appendChild(java);
    OracleNode.appendChild(Oracle);
    JSPServletNode.appendChild(JSPServlet);
    SPRINGNode.appendChild(SPRING);
    
    //부모요소 선택 (body)
    let ul = document.querySelector('ul');

    //노드 선택(삽입하고싶은 위치의 요소를 선택) 
    let li1 = document.querySelector('li')



    // .insertBefore(삽입할 노드,삽입할 위치)
    ul.insertBefore(javaNode,li1);
    ul.insertBefore(OracleNode,li1);
    ul.appendChild(JSPServletNode);
    ul.appendChild(SPRINGNode);

    
    
}