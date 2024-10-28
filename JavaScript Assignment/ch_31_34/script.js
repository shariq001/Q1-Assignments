function calculateDetails() {

    var name = document.getElementById("name").value;
    var day = parseInt(document.getElementById("day").value);
    var month = parseInt(document.getElementById("month").value) - 1; 
    var year = parseInt(document.getElementById("year").value);


    if (!name || isNaN(day) || isNaN(month) || isNaN(year)) {
        console.log("Please enter valid values for all fields.");
        return;
    }

    var userDOB = new Date(year, month, day);

    if (isNaN(userDOB.getTime())) {
        console.log("Your DOB is Invalid Date");
        return;
    }

    var currentDate = new Date();
    var currentHours = currentDate.getHours();

    if (currentHours >= 5 && currentHours < 12) {
        console.log(`Hello ${name}, Good Morning!`);
        alert(`Hello ${name}, Good Morning!`);
    } else if (currentHours >= 12 && currentHours < 17) {
        console.log(`Hello ${name}, Good Afternoon!`);
        alert(`Hello ${name}, Good Afternoon!`);
    } else if (currentHours >= 17 && currentHours < 21) {
        console.log(`Hello ${name}, Good Evening!`);
        alert(`Hello ${name}, Good Evening!`);
    } else {
        console.log(`Hello ${name}, Good Night!`);
        alert(`Hello ${name}, Good Night!`);
    }

    console.log(`Your DOB is ${userDOB.toLocaleString('en-PK', { timeZone: 'Asia/Karachi' })}`);

    var ageInMilliseconds = currentDate - userDOB;
    var ageDate = new Date(ageInMilliseconds);
    var years = currentDate.getFullYear() - userDOB.getFullYear();
    var months = currentDate.getMonth() - userDOB.getMonth();
    if (months < 0) {
        years--;
        months += 12;
    }
    var days = currentDate.getDate() - userDOB.getDate();
    if (days < 0) {
        months--;
        var lastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
        days += lastMonth.getDate();
    }

    var hours = currentDate.getHours() - userDOB.getHours();
    var minutes = currentDate.getMinutes() - userDOB.getMinutes();
    var seconds = currentDate.getSeconds() - userDOB.getSeconds();
    if (seconds < 0) {
        minutes--;
        seconds += 60;
    }
    if (minutes < 0) {
        hours--;
        minutes += 60;
    }
    if (hours < 0) {
        days--;
        hours += 24;
    }

    console.log(`You are ${years} years ${months} months ${days} days ${hours} hours ${minutes} minutes ${seconds} seconds old`);

    var ageInDays = Math.floor(ageInMilliseconds / (1000 * 60 * 60 * 24));
    console.log(`Your age in days: ${ageInDays}`);

    var nextBirthdayYear = currentDate.getFullYear();
    if (currentDate > new Date(nextBirthdayYear, month, day)) {
        nextBirthdayYear++;
    }
    var nextBirthday = new Date(nextBirthdayYear, month, day);
    var timeUntilBirthday = nextBirthday - currentDate;
    var daysLeft = Math.floor(timeUntilBirthday / (1000 * 60 * 60 * 24));
    var hoursLeft = Math.floor((timeUntilBirthday % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutesLeft = Math.floor((timeUntilBirthday % (1000 * 60 * 60)) / (1000 * 60));
    var secondsLeft = Math.floor((timeUntilBirthday % (1000 * 60)) / 1000);

    if (daysLeft === 0 && hoursLeft === 0 && minutesLeft === 0 && secondsLeft === 0) {
        console.log(`Happy Birthday ${name}! Today is your birthday.`);
    } else {
        console.log(`Time left in your next birthday: ${daysLeft} days ${hoursLeft} hours ${minutesLeft} minutes ${secondsLeft} seconds`);
    }

    var finalResult = `Time left in your next birthday: ${daysLeft} days ${hoursLeft} hours ${minutesLeft} minutes ${secondsLeft} seconds`;

    document.getElementById('div2-p').innerHTML = finalResult;
}