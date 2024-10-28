function capitalizeWords() {
    var inputValue = document.getElementById('userInput').value;

    var words = inputValue.split(' ');

    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    }

    var capitalizedString = words.join(' ');

    console.log(capitalizedString);
    alert(capitalizedString);
}