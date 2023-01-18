//모든 슬라이드가 함께 작동
// $(document).ready( function() {
//     $( '.person' ).click( function() {
//         $('.messages').slideToggle(200);
//     });
// });


//선택한 슬라이드만 작동
// $(document).ready(function(){
//     $(".notifications > .person").click(function(){
//         $(this).children(".messages").slideToggle(200);
//     });
// });

//선택한 슬라이드, 배경색, 리드마크 작동
$(document).ready(function(){
    $(".notifications > .person").click(function(){
        $(this).children(".messages").slideToggle(200);
        $(this).css("backgroundColor", "white");
        // $(this).children(".stories").children(".name_detail").children(".readmark").css("display", "none");
        $(this).find(".readmark").css("display", "none");
    });
});


$(document).ready(function(){
    var num = $('.readmark').length; //리드마크 개수
    var count = 0; 
    document.getElementById('numOfNoti').innerHTML = num; //알림 개수
    $(".notifications > .person").click(function(){ //.person을 클릭하면
        count++;
        var valNum = num-count;
        document.getElementById('numOfNoti').innerHTML = valNum;
    });
});

