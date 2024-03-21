$.ajax({
    // 클라이언트가 요청을 보낼 서버의 URL 주소
    url: `www.api.com`, 
    // 요청과 함께 서버로 보낼 데이터 POST 방식에서만 사용
    data: {}, 
    type: "POST", // HTTP 요청 방식(GET, POST)
    success:function(json){},
    error:function(e){}
})