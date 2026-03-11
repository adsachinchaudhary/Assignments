/* Assignment -3 (Arrays/Datatypes/Operators)

1. Create two arrays to store student names ["Suresh","Mahesh","Naresh"] and
marks [75, 80, 82] Add 10 marks to each students using assignment operators and
store it into another array, after adding 10 marks identify the average marks of all
students */

let studentNames: string[] = ["Suresh", "Mahesh", "Naresh"];
let marks: number[] = [75, 80, 82];
let updatedMarks: number[] = [];

for (let i = 0; i < marks.length; i++) {
    updatedMarks[i] = marks[i] + 10;
}

let totalMarks = 0;
for (let i = 0; i < updatedMarks.length; i++) {
    totalMarks += updatedMarks[i];
}

let averageMarks = totalMarks / updatedMarks.length;
console.log("Updated Marks:");
console.log("Suresh" + ": " + updatedMarks[0]);
console.log("Mahesh" + ": " + updatedMarks[1]);
console.log("Naresh" + ": " + updatedMarks[2]);
console.log("Average Marks:", averageMarks);

/*
Output:
Updated Marks:
Suresh: 85
Mahesh: 90
Naresh: 92
Average Marks: 89
*/