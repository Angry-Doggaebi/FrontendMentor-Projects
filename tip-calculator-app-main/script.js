$(document).ready(function(){
    //Bill 값 실시간으로 가져오기
    $("#billNum").on("propertychange change keyup paste input", function() {
        var billNewValue = this.value;
        // (같음)var billNewValue = document.getElementById('billNum').value;
        document.getElementById('total').innerHTML = billNewValue;
    });

    //Number of people 값 실시간으로 가져오기
    $("#peopleNum").on("propertychange change keyup paste input", function() {
        var peopleNewValue = this.value;
        var billNewValue = document.getElementById('billNum').value;
        document.getElementById('total').innerHTML = billNewValue/peopleNewValue;
    });

    
});