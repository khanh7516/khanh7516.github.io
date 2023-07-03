const grades = [
 {name: 'John', grade: 8, sex: 'M'},
 {name: 'Sarah', grade: 12, sex: 'F'},
 {name: 'Bob', grade: 16, sex: 'M'},
 {name: 'Johnny', grade: 2, sex: 'M'},
 {name: 'Ethan', grade: 4, sex: 'M'},
 {name: 'Paula', grade: 18, sex: 'F'},
 {name: 'Donald', grade: 5, sex: 'M'},
 {name: 'Jennifer', grade: 13, sex: 'F'},
 {name: 'Courtney', grade: 15, sex: 'F'},
 {name: 'Jane', grade: 9, sex: 'F'}
]



//Bài 1
let avgGrade = (grades, length) => {
    return grades.reduce((sum, std) => sum + std.grade, 0) / length;
}

console.log(avgGrade(grades, grades.length));


let filterSex = (grades, sex) => {
    return grades.filter((std) => std.sex == sex);
}

let femaleGrades = filterSex(grades, "F");
console.log(avgGrade(femaleGrades, femaleGrades.length ));