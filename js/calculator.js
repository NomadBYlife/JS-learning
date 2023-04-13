var buttonPlus = document.getElementById('buttonPlus');
var buttomMinus = document.getElementById('buttonMinus');
var buttomMultiply = document.getElementById('buttonMultiply');
var buttomDevide = document.getElementById('buttonDevide');

var input1 = document.getElementById('number1');
var input2 = document.getElementById('number2');

var operationButtons = document.getElementsByClassName('operation-button');

function makeOperation(operationCode) {
    var number1 = Number(input1.value)
    var number2 = Number(input2.value)
    if (operationCode === '+') {
        var result = number1 + number2
    } else if (operationCode === '-') {
        var result = number1 - number2
    } else if (operationCode === '*'){
        var result = number1 * number2
    } else if (operationCode === '/'){
        var result = number1 / number2
    } else {
        console.log('operation is unknown');
    }
    console.log(result);
}


function onOperationButtonClick(eventObject) {
    var clickedElement = eventObject.currentTarget;
    var operation = clickedElement.innerHTML;
    makeOperation(operation);
}

for (var i = 0; i < operationButtons.length; i++) {
    operationButtons[i].addEventListener('click', onOperationButtonClick);
    
}


