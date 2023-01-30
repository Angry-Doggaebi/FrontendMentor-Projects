//선택한 슬라이드, 배경색, 리드마크, 링크된 페이지 작동
$(document).ready(function(){
    $(".notifications > .person").click(function(){
        $(this).children(".messages").slideToggle(200);
        $(this).css("backgroundColor", "white");
        // $(this).children(".stories").children(".name_detail").children(".readmark").css("display", "none");
        $(this).find(".readmark").css("display", "none");
    });
    $(".noti_link").not(".person").click(function(){
        $(this).css("color", "hsl(219, 12%, 42%)");
    });
});


//리드마크 개수만큼 person 아이디가 든 배열을 만들어서 클릭시 같은 아이디가 든 배열 제거 후 배열 개수 반환
$(document).ready(function(){
    //.person의 모든 id를 배열에 저장
    const parent = document.getElementById('notifications');
    const children = Array.from(parent.children);
    const ids = children.map(element => {
        return element.id;
    }); 

    var num = $(ids).length; //배열 개수
    document.getElementById('numOfNoti').innerHTML = num; //처음 알림 개수 = 배열 개수

    $(".notifications > .person").click(function(){ //.person을 클릭하면
        //id값을 가져와서
        var id_check = $(this).attr("id");
        //배열과 비교
        for (var i=0; i<num; i++){
            if (id_check === ids[i]){
                //배열에서 같은 id 삭제
                ids.splice(i, 1);
                i--; 
                //알림개수 = 배열개수
                num = $(ids).length;
                document.getElementById('numOfNoti').innerHTML = num;
            };
        };
    });

    //mark all as read 누르면
    $("#markAll").click(function(){
        //모든 알림 읽음 표시
        $(".person").css("backgroundColor", "white");
        $(".person").find(".readmark").css("display", "none");
        //모든 배열 삭제
        ids.splice(0);
        //알림개수 = 배열개수
        num = $(ids).length;
        document.getElementById('numOfNoti').innerHTML = num;
    });
});

