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

