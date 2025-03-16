// 8. Filter out students who scored more than 50

const studentMarks = [45, 67, 89, 34, 50, 76, 90, 23];
const passedStudents = studentMarks.filter(mark => mark > 50);
console.log("Students with marks greater than 50:", passedStudents);