var courses = [];

for (let i = 0; i < 5; i++) {
    let course = prompt(`Enter course ${i + 1}:`);
    courses.push(course || "");
}

courses.forEach((course, index) => {
    alert(`Course ${index + 1}: ${course}`);
});

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