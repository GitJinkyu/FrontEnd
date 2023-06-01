window.onload=function(){
    toggle.addEventListener('click',function(){
        container.classList.toggle('hidden')
    })
    

    signform.addEventListener('submit', function(event) {
        var genderRadios = document.getElementsByName('gender');
        var isChecked = false;
        for (var i = 0; i < genderRadios.length; i++) {
            if (genderRadios[i].checked) {
                isChecked = true;
                break;
            }
        }
        if (!isChecked) {
            event.preventDefault(); // 폼 전송 막기
            alert('성별을 선택해주세요.');
        }
    });

    function fuc(domain) {
        document.signform.backemail.value  = domain;
        // 파라미터로 전달받은 셀렉트박스 속성값을 
        // 텍스트 박스 속성값에 전달함
      }
}

