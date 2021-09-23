$(document).ready(function() {

  // json
  $.ajax({
    url: "js/bookdata.json",
    dataType: "json",
    success : function(data){
      if(data.length> 0) {
        for(let i in data) {
          let img = data[i].img;
          let alt = data[i].alt;
          let subject = data[i].subject;
          let author = data[i].author;
          let price = data[i].price;
          $(".book2").eq(i).append("<img src='"+ data[i].img + "' alt='" + data[i].alt + "'>");
          $(".book2 .b_txt h4").eq(i).append(data[i].subject); 
          $(".book2 .b_txt .auther").eq(i).append(data[i].author); 
          $(".book2 .b_txt .price").eq(i).append(data[i].price);
        }
      }
    }
  });


  // kakao api -> brand pick
  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",// 전송 주소
    data: { query: "희극과 격언1" },// 보낼 데이터
    headers: { Authorization: "KakaoAK e704ab6e9bd82a9c42c124931e6f5051" }// 내 API key KakaoAK로 시작
  })
    .done(function (msg) {// 응답이 오면 처리하는 코드
      console.log(msg);
      let kakao = $('#kakao');
      for (let i = 0; i < 1; i++) {//1개만 출력

        $("#kakao p.img").append("<img src='" + msg.documents[i].thumbnail + "'>");

        let tit = msg.documents[i].title;
        tit = tit.substring(0, 9);//9번째 글자에서 자름
        $("#kakao .in_txt").append("<h4>" + tit + "</h4>");

        const num = msg.documents[i].price;
        let pri = num.toLocaleString('en-US')
        $("#kakao .in_txt").append("<p>₩" + pri + "</p>");
      }
    });

  $.ajax({
    method: "GET",
    url: "https://dapi.kakao.com/v3/search/book?target=title",// 전송 주소
    data: { query: "동사의 맛" },// 보낼 데이터
    headers: { Authorization: "KakaoAK e704ab6e9bd82a9c42c124931e6f5051" }// 내 API key KakaoAK로 시작
  })
    .done(function (msg) {// 응답이 오면 처리하는 코드
      console.log(msg);
      let kakao = $('#kakao2');
      for (let i = 0; i < 1; i++) {//2개만 출력

        $("#kakao2 p.img").append("<img src='" + msg.documents[i].thumbnail + "'>");
        $("#kakao2 .in_txt").append("<h4>" + msg.documents[i].title + "</h4>");

        const num = msg.documents[i].price;
        let pri = num.toLocaleString('en-US')
        $("#kakao2 .in_txt").append("<p>₩" + pri + "</p>");

        // let str = msg.documents[i].contents;
        // str = str.substring(0, 101);//101번째 글자에서 자름

        // $('#kakao li').eq(i).append("<p>" + str + "</p>");
      }
    });



})