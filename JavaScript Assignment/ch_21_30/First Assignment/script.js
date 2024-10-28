var userVal = parseFloat(prompt('Enter a value with decimal point:'));
var roundedVal = Math.ceil(userVal);

var text = 'This is my dummy text.';
var slicedText = text.slice(0, roundedVal);

let reversedText = '';
for(let i = slicedText.length - 1; i >= 0; i--) {
    reversedText += slicedText[i];
}
alert(reversedText);