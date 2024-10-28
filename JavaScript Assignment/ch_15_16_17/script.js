var courses = [];

var course1 = prompt('Course 1: ');
courses.push(course1);

var course2 = prompt('Course 2: ');
courses.push(course2);

var course3 = prompt('Course 3: ');
courses.push(course3);

var course4 = prompt('Course 4: ');
courses.push(course4);

var course5 = prompt('Course 5: ');
courses.push(course5);


alert(`Course1: ${course1}`);
alert(`Course2: ${course2}`);
alert(`Course3: ${course3}`);
alert(`Course4: ${course4}`);
alert(`Course5: ${course5}`);

alert(`All Courses: ${courses}`);

let editPermission = prompt("Do you want to edit a course? (yes/no)").toLowerCase();

if (editPermission === "yes") {
    let editIndex = parseInt(prompt("Enter the course number you want to edit (1-5):")) - 1;

    if (editIndex >= 0 && editIndex < courses.length) {
        let newCourse = prompt(`Enter the new name for course ${editIndex + 1}:`);
        courses[editIndex] = newCourse || "";
        
        alert(`Updated Course List: ${courses}`);
    } else {
        alert("Invalid course number.");
    }
} else {
    alert("No courses were edited.");
}