const student = {
    name: 'Rafid',
    1: 50,
    'home-address': 'kochu khet',
    marks: 90
}

// dot notation
const studentName = student.name;
console.log(studentName);
console.log(student);
console.log(student['marks']);
console.log(student['1']);

console.log(student['home-address']);

for (const key in student) {
    const value = student[key];
    console.log(value);
}

const propName = 'marks'
console.log(student[propName])