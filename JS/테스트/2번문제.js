// 버튼이 클릭되면
        // json형식 문자열을 파싱해서 화면에 출력

        // json형식 문자열
        let jsonStr = `[
            {
            "name" : "고경희"
            ,"major" : "컴퓨터공학"
            ,"grade" : 2
            ,"phone" : "010-1111-2222"
            }
            ,{
            "name" : "홍길동"
            ,"major" : "컴퓨터공학"
            ,"grade" : 2
            ,"phone" : "010-1111-2222"
            }
        ]`

        
        
        //   jsObj로 변경
        let jsObj = JSON.parse(jsonStr)



window.onload=function(){
    btn1.addEventListener('click',function(e){
        testJson()

    });
    
    
}

function testJson(){
        // 오브젝트 출력
        console.log(jsObj);

        // 오브젝트를 다시 json으로 변환
        let jsjson = JSON.stringify(jsObj);

        // json 출력
        console.log(jsjson);

};

