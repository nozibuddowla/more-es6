const student = {
    name: 'Rafid',
    1: 50,
    family: {
        title: 'Bhuiyan',
        // mother: {
        //     name: 'noor jahan',
        //     age: 45
        // }
    },
    'home-address': 'kochu khet',
    marks: 90
}

console.log(student.name);

console.log(student.family.title);
console.log(student.family?.mother);
console.log(student.family.mother?.age);