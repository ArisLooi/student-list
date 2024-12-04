
const students = []; //students is an empty array that will store student objects.

function addStudent() {
  const name = prompt("Enter the student's name: ");
  const grade = parseInt(prompt("Enter the student's grade"));
  const student = { 
    name:name,
    grade:grade,
    //Creates a student object with the entered name and grade.
  }
  
  students.push(student); //Adds the student object to the students array.
  alert('Student added!') //Displays an alert confirming the student was added.
}

function viewStudents() {
  let studentList = "List of students: \n"; //Initializes a string studentList to store the list of students.
  for (const student of students) {
    studentList += `${student.name}: ${student.grade}\n`;
    //Iterates over the students array using a for...of loop.Appends each student's name and grade to the studentList string.
  }
  alert(studentList); //
}