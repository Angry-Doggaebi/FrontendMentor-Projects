//클릭한 팁 버튼 또는 작성한custom의 값을 전역변수에 저장
//사람 수 또는 bill 값이 팁 금액보다 나중에 설정되는 경우 대비
var tipPercent;

//Bill
$(document).ready(function(){
    //입력되는 값 실시간으로 가져오기
    $("#billNum").on("propertychange change keyup paste input", function() {
        var billNewValue = this.value;
        let check = /^[0-9.]+$/ //숫자체크

        

        document.getElementById('tipAmount').innerHTML = '$0.00';
        document.getElementById('total').innerHTML = '$'+billNewValue;

         
        if (!check.test(billNewValue)){ //값이 숫자가 아닌 경우
            //0.00 출력
            //박스에 숫자를 썼다 지우는 경우 total이 빈 칸으로 출력되는 경우 대비
            document.getElementById('total').innerHTML = '$0.00';
        };
    });
});

//최종 결과 계산식
function finalResultCalculation(peopleNewValue, billNewValue){

    //tip amount
    var tipAmount = billNewValue/peopleNewValue*tipPercent;
    var tipAmount = Math.floor(tipAmount*100)/100;//소수점 아래 두 자리 이하 버림
    document.getElementById('tipAmount').innerHTML = '$'+tipAmount;

    //total
    var total = billNewValue/peopleNewValue+tipAmount;
    document.getElementById('total').innerHTML = '$'+total.toFixed(2); //소수점 아래 2자리 제한(반올림)
}
//Number of people 창에 0입력시 error 활성화
function enableZeroErrorOfNumOfPeople(){
    //0입력시 클래스명 바꿔서 의사클래스 :focus를 변화
    document.getElementById('peopleNum').className = "Error";
    //안내문구 출력
    document.getElementById('cannotZero').innerHTML = "can't be zero";
}
//Number of people 창 error 비활성화
function disableZeroErrorOfNumOfPeople(){
    //0입력때 바꾼 클래스 되돌리기
    document.getElementById('peopleNum').className = "peopleNum";
    //0입력때 출력한 안내 문구 없애기
    document.getElementById('cannotZero').innerHTML = "";
}

//button
function btnClickEvent(tipPercentage){
    //전역변수 값 변경
    tipPercent = tipPercentage; 
    //입력한 사람 수
    var peopleNewValue = document.getElementById('peopleNum').value;
    //입력한 bill 값
    var billNewValue = document.getElementById('billNum').value;

    if (peopleNewValue == ""){ //사람 수 입력 안 한 경우
        peopleNewValue=1;
        
        finalResultCalculation(peopleNewValue, billNewValue);

    } else { //사람 수 입력한 경우
        finalResultCalculation(peopleNewValue, billNewValue);
    };
};

//custom
$(document).ready(function(){
    $("#custom").on("propertychange change keyup paste input", function() {
        //입력한 tip 값을 백분율에서 소수로 변환
        var tipPercentage = this.value * 0.01;
        //전역변수 값 변경
        tipPercent = tipPercentage; 
        //입력한 사람 수
        var peopleNewValue = document.getElementById('peopleNum').value;
        //입력한 bill 값
        var billNewValue = document.getElementById('billNum').value;

        if (peopleNewValue == ""){ //사람 수 입력 안 한 경우
            peopleNewValue=1;
            
            finalResultCalculation(peopleNewValue, billNewValue);

        } else { //사람 수 입력한 경우
            finalResultCalculation(peopleNewValue, billNewValue);
        };
    });
});

//custom click event
//radio button 클릭 후 custom 클릭 시 버튼의 클릭 상태 디자인이 계속 활성화되어있는 문제 대비
function customClickEvent(){

    // // 체크 상태 확인
    // document.querySelector('input[name="btn"]').checked; 
    // // 체크된 값 console에 반영
    // var btnValue = document.querySelector('input[name="btn"]:checked').value; 
    // console.log(btnValue);

    // 체크된 버튼 초기화
    var ladioReset = document.getElementsByName('btn');
    for(var i = 0; i<5; i++){
        ladioReset[i].checked = false;
    };
    
};

//Number of people
//button, custom 값 입력받아 전역변수로 바꾸어놓은 변수 tipPercent 사용 (사람 수를 팁 금액보다 나중에 선택하는 경우에도 작동하도록)
$(document).ready(function(){
    $("#peopleNum").on("propertychange change keyup paste input", function() {

        // 입력한 사람 수
        var peopleNewValue = this.value;
        // 입력한 bill값 
        var billNewValue = document.getElementById('billNum').value;
        // 공백 체크
        var blankCheck = /^\s+|\s+$/g;
        //0 error 비활성화
        disableZeroErrorOfNumOfPeople();

        if (tipPercent == null){ //버튼을 안 눌렀을 경우
            if (peopleNewValue.replace( blankCheck, '' ) == ""){ //사람수 입력x
                peopleNewValue=1;
                tipPercent=0;

                finalResultCalculation(peopleNewValue, billNewValue);

            }
            else if(peopleNewValue == 0){ //0입력시
                enableZeroErrorOfNumOfPeople();
            }
            else{ //평범한 숫자 입력시
                document.getElementById('total').innerHTML = '$'+billNewValue/peopleNewValue;
                document.getElementById('tipAmount').innerHTML = '$'+0.00;
            };
        } else { //버튼 누른 경우
            if (peopleNewValue.replace( blankCheck, '' ) == ""){ //사람수 입력x
                peopleNewValue=1;

                finalResultCalculation(peopleNewValue, billNewValue);

            }
            else if(peopleNewValue && peopleNewValue == 0){ //0입력시
                document.getElementById('tipAmount').innerHTML = '$0.00';
                document.getElementById('total').innerHTML = '$0.00';

                enableZeroErrorOfNumOfPeople();
            }
            else { //평범한 숫자 입력시
                finalResultCalculation(peopleNewValue, billNewValue);
            };
        }; 
    });
});

//reset
function resetEvent(){
    var tipAmount = document.getElementById('tipAmount');
    var total = document.getElementById('total');
    tipAmount.innerHTML = '$0.00';
    total.innerHTML = '$0.00';

    disableZeroErrorOfNumOfPeople();
};