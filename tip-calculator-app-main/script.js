//클릭한 팁 퍼센테이지를 전역변수로 활용
var tipPercent

//Bill 값 실시간으로 가져오기
$(document).ready(function(){
    $("#billNum").on("propertychange change keyup paste input", function() {
        // 입력한 bill값 가져오기
        var billNewValue = this.value;
        //출력
        document.getElementById('total').innerHTML = '$'+billNewValue;
    });
});

//button 눌렀을 때 함수
//jquery의 ready랑 분리되어야 함
function btnClickEvent(tipPercentage){
    //입력한 사람 수
    var peopleNewValue = document.getElementById('peopleNum').value;
    //입력한 bill 값
    var billNewValue = document.getElementById('billNum').value;
    //전역변수 값 변경
    tipPercent = tipPercentage;

    //사람 수 입력 안 했을 경우
    if (peopleNewValue == ""){
        //tip amount 계산 후 변수에 입력
        var tipAmount = billNewValue*tipPercentage;
        //소수점 아래 두 자리 이하 버림
        var tipAmount = Math.floor(tipAmount*100)/100;
        //출력
        document.getElementById('tipAmount').innerHTML = '$'+tipAmount;

        //total 계산 후 변수에 입력 및 출력 (문자열'$'+전체계산값(소수점 아래 2자리 제한(반올림)))
        var total = parseFloat(billNewValue)+parseFloat(tipAmount);
        document.getElementById('total').innerHTML = '$'+total.toFixed(2);

    } else {
        //tip amount 계산 후 변수에 입력
        var tipAmount = billNewValue/peopleNewValue*tipPercentage;
        //소수점 아래 두 자리 이하 버림
        var tipAmount = Math.floor(tipAmount*100)/100;
        //출력
        document.getElementById('tipAmount').innerHTML = '$'+tipAmount;

        //total 계산 후 변수에 입력 및 출력 (문자열'$'+전체계산값(소수점 아래 2자리 제한(반올림)))
        var total = billNewValue/peopleNewValue+tipAmount;
        document.getElementById('total').innerHTML = '$'+total.toFixed(2);

    };
};

//button대신 직접 입력할 경우
$(document).ready(function(){
    //Select Tip 값 실시간으로 가져오기
    $("#btnNum").on("propertychange change keyup paste input", function() {
        //입력한 tip 값을 백분율에서 소수로 변환
        var tipPercentage = this.value * 0.01;
        //입력한 사람 수
        var peopleNewValue = document.getElementById('peopleNum').value;
        //입력한 bill 값
        var billNewValue = document.getElementById('billNum').value;

        //tip amount 계산 후 변수에 입력 및 출력
        var tipAmount = billNewValue/peopleNewValue*tipPercentage;
        var tipAmount = Math.floor(tipAmount*100)/100;
        document.getElementById('tipAmount').innerHTML = '$'+tipAmount.toFixed(2);

        //total 계산 후 변수에 입력, '$'문자열과 함께 출력
        var total =billNewValue/peopleNewValue+tipAmount;
        document.getElementById('total').innerHTML = '$'+total.toFixed(2);
    });
});

//Number of people 값 실시간으로 가져오기
$(document).ready(function(){
    $("#peopleNum").on("propertychange change keyup paste input", function() {

        // 입력한 사람 수 가져오기
        var peopleNewValue = this.value;
        // 입력한 bill값 가져오기
        var billNewValue = document.getElementById('billNum').value;

           
        if (tipPercent == null){ //버튼을 안 눌렀을 경우  
            document.getElementById('total').innerHTML = '$'+billNewValue/peopleNewValue;
            document.getElementById('tipAmount').innerHTML = '$'+0;
        } else { //버튼 누른 경우
            //tip amount 계산 후 변수에 입력 및 출력
            var tipAmount = billNewValue/peopleNewValue*tipPercent;
            var tipAmount = Math.floor(tipAmount*100)/100;
            document.getElementById('tipAmount').innerHTML = '$'+tipAmount.toFixed(2);

            //total 계산 후 변수에 입력, '$'문자열과 함께 출력
            var total =billNewValue/peopleNewValue+tipAmount;
            document.getElementById('total').innerHTML = '$'+total.toFixed(2);
        }
    });
});