//클릭한 팁 퍼센테이지를 전역변수로 활용
var tipPercent;

//Bill만 입력된 경우
//입력한 bill값을 실시간으로 읽어와 total 부분에 반영
$(document).ready(function(){
    $("#billNum").on("propertychange change keyup paste input", function() {
        var billNewValue = this.value;
        document.getElementById('total').innerHTML = '$'+billNewValue;
    });
});

//버튼 클릭시 사람 수 입력여부에 따른 계산식 함수
function calculationDependingOnPeopleNum(tipPercentage){
    //입력한 사람 수
    var peopleNewValue = document.getElementById('peopleNum').value;
    //입력한 bill 값
    var billNewValue = document.getElementById('billNum').value;

    if (peopleNewValue == ""){ //사람 수 입력 안 한 경우
        //tip amount
        var tipAmount = billNewValue*tipPercentage;
        var tipAmount = Math.floor(tipAmount*100)/100;//소수점 아래 두 자리 이하 버림
        document.getElementById('tipAmount').innerHTML = '$'+tipAmount;

        //total
        var total = parseFloat(billNewValue)+parseFloat(tipAmount);
        document.getElementById('total').innerHTML = '$'+total.toFixed(2); //소수점 아래 2자리 제한(반올림)

    } else { //사람 수 입력한 경우
        //tip amount
        var tipAmount = billNewValue/peopleNewValue*tipPercentage;
        var tipAmount = Math.floor(tipAmount*100)/100;
        document.getElementById('tipAmount').innerHTML = '$'+tipAmount;

        //total
        var total = billNewValue/peopleNewValue+tipAmount;
        document.getElementById('total').innerHTML = '$'+total.toFixed(2);

    };
}

//button
function btnClickEvent(tipPercentage){
    //전역변수 값 변경
    tipPercent = tipPercentage; 

    calculationDependingOnPeopleNum(tipPercentage);
};

//custom
$(document).ready(function(){
    //Select Tip 값 실시간으로 가져오기
    $("#btnNum").on("propertychange change keyup paste input", function() {
        //입력한 tip 값을 백분율에서 소수로 변환
        var tipPercentage = this.value * 0.01;

        calculationDependingOnPeopleNum(tipPercentage);
    });
});

//Number of people 값 실시간으로 가져오기
//버튼에서 입력받아 전역변수로 바꾸어놓은 변수 tipPercent의 값 사용
$(document).ready(function(){
    $("#peopleNum").on("propertychange change keyup paste input", function() {

        // 입력한 사람 수
        var peopleNewValue = this.value;
        // 입력한 bill값 
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