$(document).ready(function() {

  // json
  $.ajax({
    url: "js/bookdata.json",
    dataType: "json",
    success : function(data){
      if(data.length> 0) {
       
          // let img = data[i].img;
          // let alt = data[i].alt;
          // let subject = data[i].subject;
          // let author = data[i].author;
          // let price = data[i].price;
          $(".book2").eq(0).append("<img src='"+ data[0].img + "' alt='" + data[0].alt + "'>");
          $(".book2 .b_txt h4").eq(0).append(data[i].subject); 
          $(".book2 .b_txt .auther").eq(0).append(data[i].author); 
          $(".book2 .b_txt .price").eq(0).append(data[i].price);

          $(".book3").eq(1).append("<img src='"+ data[1].img + "' alt='" + data[1].alt + "'>");
          $(".book3 .b_txt h4").eq(1).append(data[1].subject); 
          $(".book3 .b_txt .auther").eq(1).append(data[1].author); 
          $(".book3 .b_txt .price").eq(1).append(data[1].price);

          $(".book4").eq(2).append("<img src='"+ data[2].img + "' alt='" + data[2].alt + "'>");
          $(".book4 .b_txt h4").eq(2).append(data[2].subject); 
          $(".book4 .b_txt .auther").eq(2).append(data[2].author); 
          $(".book4 .b_txt .price").eq(2).append(data[2].price);

          $(".book5").eq(3).append("<img src='"+ data[3].img + "' alt='" + data[3].alt + "'>");
          $(".book5 .b_txt h4").eq(3).append(data[3].subject); 
          $(".book5 .b_txt .auther").eq(3).append(data[3].author); 
          $(".book5 .b_txt .price").eq(3).append(data[3].price);
      
          $(".book6").eq(4).append("<img src='"+ data[4].img + "' alt='" + data[4].alt + "'>");
          $(".book6 .b_txt h4").eq(4).append(data[4].subject); 
          $(".book6 .b_txt .auther").eq(4).append(data[4].author); 
          $(".book6 .b_txt .price").eq(4).append(data[4].price);
      
          $(".book7").eq(5).append("<img src='"+ data[5].img + "' alt='" + data[5].alt + "'>");
          $(".book7 .b_txt h4").eq(5).append(data[5].subject); 
          $(".book7 .b_txt .auther").eq(5).append(data[5].author); 
          $(".book7 .b_txt .price").eq(5).append(data[5].price);
      
          $(".book8").eq(6).append("<img src='"+ data[6].img + "' alt='" + data[6].alt + "'>");
          $(".book8 .b_txt h4").eq(6).append(data[6].subject); 
          $(".book8 .b_txt .auther").eq(6).append(data[6].author); 
          $(".book8 .b_txt .price").eq(6).append(data[6].price);
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