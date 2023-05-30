// 버튼이 클릭되면
        // json형식 문자열을 파싱해서 화면에 출력

        // json형식 문자열
        let jsonStr = `[
            {
            "name" : "도레미"
            ,"major" : "컴퓨터 공학"
            ,"grade" : 2
            }
            ,{
            "name" : "솔라시"
            ,"major" : "컴퓨터 공학"
            ,"grade" : 4
            }
            ,{
            "name" : "미미"
            ,"major" : "컴퓨터 공학"
            ,"grade" : 1
            }
            ,{
            "name" : "파솔라"
            ,"major" : "컴퓨터 공학"
            ,"grade" : 3
            }
        ]`

        //   jsObj로 변경
        let jsObj = JSON.parse(jsonStr)


window.onload=function(){
    btn1.addEventListener('click',function(e){
        console.log(jsObj) 

        for(let i in jsObj){
            //화면에 출력
            let pNode = document.createElement('td');
            let pNode2 = document.createElement('td');
            let pNode3 = document.createElement('td');
    
    
            pNode.innerHTML=jsObj[i].name;
            pNode2.innerHTML=jsObj[i].major;
            pNode3.innerHTML=jsObj[i].grade;
    
            // innerHTML 쓰는게 더 편함
            // let nameNode = document.createTextNode(jsObj.name);
            // let majerNode = document.createTextNode(jsObj.major);
            // let gradeNode = document.createTextNode(jsObj.grade);
            // pNode.appendChild(nameNode);
            // pNode2.appendChild(majerNode);
            // pNode3.appendChild(gradeNode);
    
            let tr = document.createElement('tr');
            let tbody = document.querySelector('tbody');
    
            tbody.appendChild(tr);
            
            tr.appendChild(pNode);
            tr.appendChild(pNode2);
            tr.appendChild(pNode3);

        }


        // 폼에 버튼이 한개만 있을 경우 submit으로 인식하기때문에 기본이벤트 제거해야함
        e.preventDefault()

        
    });
}