document.getElementById('btn').onclick = function() {
    var number1 = parseFloat(document.getElementById('num1').value);
    var number2 = parseFloat(document.getElementById('num2').value);
    var operation = document.getElementById('operation').value;
    var result;

    if (operation === 'add') {
        result = number1 + number2;
        alert('Result: ' + result);
    } else if (operation === 'sub') {
        result = number1 - number2;
        alert('Result: ' + result);
    } else if (operation === 'mul') {
        result = number1 * number2;
        alert('Result: ' + result);
    } else if (operation === 'div') {
        if (number2 !== 0) {
            result = number1 / number2;
            alert('Result: ' + result);
        } else {
            alert('Cannot divide by zero');
            return;
        }
    } else if (operation === 'rem') {
        result = number1 % number2
        alert('Result: ' + result);
    }
}