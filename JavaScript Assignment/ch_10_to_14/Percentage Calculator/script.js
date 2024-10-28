document.getElementById('btn').onclick = function() {
    var markObtained = parseFloat(document.getElementById('marksObtained').value);

    var totalMarks = parseFloat(document.getElementById('totalMarks').value);

    if(markObtained && totalMarks <= 0) {
        alert('Please enter valid number.');
    }

    const percentage = (markObtained / totalMarks) * 100;

    alert(`You have scored: ${percentage.toFixed(2)}%`);
}