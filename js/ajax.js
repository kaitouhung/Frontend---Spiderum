$(document).ready(function () {
    
    getData();
});


/*<div class="_chungtrai">
    <div class="cottrai">
        <img src="assets/images/game2.jpg" alt="">
    </div>
    <div class="cotphai">
        <a href="">Lời muộn màng dành cho Zelda Hoang Dã</a>
        <p>Bạn không thể sao chép nội dung này, vui lòng liên hệ với tác giả hoặc admin để được hỗ trợ.</p>
        <div class="avata">
            <img src="assets/images/sangtac8.jpg" alt="">
        </div>
        <a href="" class="cuoi">Hùng Lý</a>
    </div>
</div>*/

        function getData() {
            $.ajax({
                url: "https://api.myjson.com/bins/vxcn0",
                method: "GET",
                success: function (res) {
                    console.log(res);
                    var html = '';

                    for (var i = 0; i < res.length; i++) {
                        html +=
                        '<a class="_ajax" href="trangchudangnhap.html?id=' + res[i].id + '">' +
                            '<div class="_chungtrai">'+
                            
                                '<div class="cottrai">'+
                                    '<img src="'+res[i].image+'" alt="">'+
                                '</div>'+
                                '<div class="cotphai">'+
                                    '<p class="dau">'+res[i].title+'</p>'+
                                    '<p>'+res[i].text+'</p>'+
                                    '<div class="avata">'+
                                        '<img src="'+res[i].image_1+'" alt="">'+
                                    '</div>'+
                                    '<p class="cuoi">'+res[i].author+'</p>'+
                                '</div>'+
                            
                            '</div>'+
                            '</a>';                      

                    }

                    $('.chungtrai').prepend(html);
                },
                error: function (err) {
                    alert("Can't get data from server");
                    console.log(err)
                }
            })
        }