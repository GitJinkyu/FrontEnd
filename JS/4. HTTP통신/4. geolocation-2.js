window.onload=function(){
    getLocation.addEventListener('click',function(){
        if ("geolocation" in navigator) {
    
            /* 위치정보 사용 가능 */
        
            // 현재위치 요청
            // getCurrentPosition(성공콜백,오류콜백)
            navigator.geolocation.getCurrentPosition((position) => {
                doSomething(position.coords.latitude, position.coords.longitude);
              });
              
          } else {
            /* 위치정보 사용 불가능 */
            alert('geoloaction 지원 불가❌!!')
          }
          
          function doSomething(latitude,longitude){
            result.innerHTML+=`경도:${latitude} <br>`
            result.innerHTML+=`위도:${longitude}`
          }
          
    });

}

  