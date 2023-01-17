// $(document).ready( function() {
//     $( '.person' ).click( function() {
//         $('.messages').slideToggle(200);
//     });
// });


$(document).ready(function(){
    $(".notifications > .person").click(function(){
        $(this).children(".messages").slideToggle(200);
    });
});





