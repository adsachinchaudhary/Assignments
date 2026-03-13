/* let browsers: string[] = ["Chrome", "Firefox", "Edge", "Safari", "Opera"];

for (let i = 0; i < browsers.length; i++) {
    console.log(`Browser ${i + 1}: ${browsers[i]}`);
}


function addNumbers(a:number, b:number):number
{    return a + b;
}

let num1: number = 5;
let num2: number = 10;
let sum: number = addNumbers(num1, num2);
console.log(`The sum of ${num1} and ${num2} is: ${sum}`);

let marks: number[] = [85, 92, 78, 90, 88];
let totalMarks: number = 0;

for (let mark of marks) {
    totalMarks += mark;
}
let averageMarks: number = totalMarks / marks.length;
console.log(`Total Marks: ${totalMarks}`);
console.log(`Average Marks: ${averageMarks.toFixed(2)}`);

interface Product {
    name: string;
    price: number;
    quantity: number;
}
let products: Product[] = [
    { name: "Laptop", price: 1200, quantity: 5 },
    { name: "Smartphone", price: 800, quantity: 10 },
    { name: "Headphones", price: 150, quantity: 20 }
];

let totalInventoryValue: number = 0;
for (let product of products) {
    totalInventoryValue += product.price * product.quantity;
}
console.log(`Total Inventory Value: $${totalInventoryValue}`);
 */


/* 1 se 10 tak numbers print karo for loop se. */
let num: number;

for (let i = 1; i <= 10; i++) {
    num = i;
    console.log(num);
}
