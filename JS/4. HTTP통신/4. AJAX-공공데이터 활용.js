window.onload=function(){
    btnCamInfo.addEventListener('click',function(e){

        e.preventDefault()
        let campForm = document.querySelector('#campForm')
        let formData = new FormData(campForm);

        let url = 'https://apis.data.go.kr/B551011/GoCamping/locationBasedList?';
        let parms ='';
        // key/value paris 반환
        for(let pair of formData.entries()){
            console.log('pair[0]',pair[0]);
            console.log('pair[1]',pair[1]);
            parms +=`${pair[0]}=${pair[1]}&`;
            
        }
        url += parms;
        console.log('url:',url);

        // ES6에서
        // url요청 결과를 받아온다
        fetch(url)
        // 요청결과가 성공이라면
        // 화살표함수에서 한줄인 경우 return문과 {}가 생략가능
        .then(res => res.json())
        .then((json)=>{
            console.log(json)
            printCampInfo(json.response.body.items.item)
        })
        .catch((err)=> console.log(err));
    });

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
            alert('geolocation 지원 불가❌!!')
          }
          
          function doSomething(latitude,longitude,item){

            var mapContainer = document.getElementById(`myMap`); // 지도를 표시할 div
            mapContainer.style.width = "720px";
            mapContainer.style.height = "350px"; 
            let mapOption = {
            center: new kakao.maps.LatLng(latitude, longitude), // 지도의 중심좌표
            level: 4 // 지도의 확대 레벨
            };

            // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
            let map = new kakao.maps.Map(mapContainer, mapOption);
            
            // 마커를 표시할 위치와 title 객체 배열입니다 
            var positions = [];

            for (var i = 0; i < item.length; i++) {
                var position = {
                    title: item[i].facltNm,
                    latlng: new kakao.maps.LatLng(item[i].mapY, item[i].mapX)
                };
                positions.push(position);
            }

            // 마커 이미지의 이미지 주소입니다
            var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 
                
            for (var i = 0; i < positions.length; i ++) {
                
                // 마커 이미지의 이미지 크기 입니다
                var imageSize = new kakao.maps.Size(24, 35); 
                
                // 마커 이미지를 생성합니다    
                var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 
                
                // 마커를 생성합니다
                var marker = new kakao.maps.Marker({
                    map: myMap, // 마커를 표시할 지도
                    position: positions[i].latlng, // 마커를 표시할 위치
                    title : positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                    image : markerImage // 마커 이미지 
                });
            }

          }

          
    });
    
}

//캠핑장 정보 출력
// 배열을 매개변수로 받아서 배열에 입력된 정보를 화면에 출력
function printCampInfo(item){
    
    
    
    let result = document.querySelector('#result');

    // div초기화
    result.innerText ='';

    let ul = document.createElement('ul');
    result.appendChild(ul);

    for (let i in item) {
        let li = document.createElement('li');
        ul.appendChild(li);

        let h1 = document.createElement('h1');
        h1.innerText = `캠핑장 이름: ${item[i].facltNm}`;
        li.appendChild(h1);

        let addressP = document.createElement('p');
        addressP.innerHTML = `<b>주소:</b> ${item[i].addr1}`;
        li.appendChild(addressP);

        let introP = document.createElement('p');
        introP.innerHTML = `<b>소개:</b> ${item[i].intro}`;
        li.appendChild(introP);

        let img = document.createElement('img');
        img.src = item[i].firstImageUrl;
        img.alt = "";
        li.appendChild(img);

        let mapDiv = document.createElement('div');
        mapDiv.id = `map${i}`;
        mapDiv.style.width = "720px";
        mapDiv.style.height = "350px";
        li.appendChild(mapDiv);

        let mapY = item[i].mapY;
        let mapX = item[i].mapX;
        let mapContainer = document.getElementById(`map${i}`); // 지도를 표시할 div 
        let mapOption = {
            center: new kakao.maps.LatLng(mapY, mapX), // 지도의 중심좌표
            level: 4 // 지도의 확대 레벨
        };

        // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
        let map = new kakao.maps.Map(mapContainer, mapOption);

        // 마커를 표시할 위치와 title 객체 배열입니다 
        var positions =
            {
                title: `${item[i].facltNm}`, 
                latlng: new kakao.maps.LatLng(mapY, mapX)
            };
           
        

        // 마커 이미지의 이미지 주소입니다
        var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"; 
            
        // 마커 이미지의 이미지 크기 입니다
        var imageSize = new kakao.maps.Size(24, 35); 
        
        // 마커 이미지를 생성합니다    
        var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize); 
        
        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
            map: map, // 마커를 표시할 지도
            position: positions.latlng, // 마커를 표시할 위치
            title : positions.title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
            image : markerImage // 마커 이미지 
        });

        var locPosition = new kakao.maps.LatLng(mapY, mapX), // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
            message = `<div style="padding:5px;">${item[i].facltNm}</div>`; // 인포윈도우에 표시될 내용입니다
        
        // 마커와 인포윈도우를 표시합니다
        displayMarker(locPosition, message);
        function displayMarker(locPosition, message) {

            // 마커를 생성합니다
            var marker = new kakao.maps.Marker({  
                map: map, 
                position: locPosition
            }); 
            
            var iwContent = message, // 인포윈도우에 표시할 내용
                iwRemoveable = true;
        
            // 인포윈도우를 생성합니다
            var infowindow = new kakao.maps.InfoWindow({
                content : iwContent,
                removable : iwRemoveable
            });
            
            // 인포윈도우를 마커위에 표시합니다 
            infowindow.open(map, marker);
            
            // 지도 중심좌표를 접속위치로 변경합니다
            map.setCenter(locPosition);      
        }    
    }
}
