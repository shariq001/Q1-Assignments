var value = parseInt(prompt('Enter a number you want to factorialize:'));

function factorialize(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    return num * factorialize(num - 1);
}

let result = factorialize(value);
console.log(result); 
alert(result);

