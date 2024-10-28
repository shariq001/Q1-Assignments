document.getElementById('btn').onclick = function() {
    var markObtained = parseFloat(document.getElementById('marksObtained').value);

    var totalMarks = parseFloat(document.getElementById('totalMarks').value);

    if(markObtained && totalMarks <= 0) {
        alert('Please enter valid number.');
    }

    const percentage = (markObtained / totalMarks) * 100;
    document.getElementById('div2-p1').innerHTML = percentage;

    switch(true) {
        case(percentage >= 90 && percentage <= 100):
        document.getElementById('div2-p2').innerHTML = 'A+';
        break;

        case(percentage >= 75 && percentage <= 89):
        document.getElementById('div2-p2').innerHTML = 'A';
        break;

        case(percentage >= 60 && percentage <= 74):
        document.getElementById('div2-p2').innerHTML = 'B';
        break;

        case(percentage >= 45 && percentage <= 59):
        document.getElementById('div2-p2').innerHTML = 'C';
        break;

        case(percentage >= 30 && percentage <= 44):
        document.getElementById('div2-p2').innerHTML = 'D';
        break;

        case(percentage >= 0 && percentage <= 29):
        document.getElementById('div2-p2').innerHTML = 'F';
        break;

        default:
        document.getElementById('div2-p2').innerHTML = "Invalid percentage";
    }
}