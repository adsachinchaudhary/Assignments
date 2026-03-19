//Assignment 7
//=====================================================================

let sentense: string = "Java programming is fun and challenging";
console.log(sentense); // Output: Java programming is fun and challenging

//Count the total number of words in the sentence.
let stringwordscount: number = sentense.split(" ").length;
console.log("Total words in the string are : "+stringwordscount); // Output: Total words in the string are : 6

//Reverse the string word by word and print the reversed string.
let reversedSentensewords: string = " ";
let sentensewords: string[] = sentense.split(" ");
for(let i: number = sentensewords.length-1; i>=0; i--){
    reversedSentensewords = reversedSentensewords + sentensewords[i] + " ";
}
console.log("Reverse String words are : "+reversedSentensewords); // Output:  challenging and fun is programming Java

//Convert the first character of each word to uppercase and print original sentence

let titlecaseSentense: string = sentense.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
console.log("Title Case Sentense is : "+titlecaseSentense); // Output: Java Programming Is Fun And Challenging

//Assignment 8
//=====================================================================

let paragraph : string = "Java is a popular programming language. Java is used for web development, mobile applications, and more.";
console.log(paragraph); // Output: Java is a popular programming language. Java is used for web development, mobile applications, and more.

let wordoccurences: { [key: string]: number } = {};
let words: string[] = paragraph.split("Java");
console.log("Total occurences of word 'Java' in the paragraph are : "+(words.length-1)); // Output: Total occurences of word 'Java' in the paragraph are : 2

let indexOfJava: number [] = [];
let startIndex: number = 0;
while ((startIndex = paragraph.indexOf("Java", startIndex)) !== -1) {
    indexOfJava.push(startIndex);
    startIndex += "Java".length;
}
console.log("Indexes of word 'Java' is at index : "+indexOfJava); // Output: Indexes of word 'Java' is at index : 0,40

//Assignments 9
//=====================================================================

let introws: number = 5;
for(let i: number = 1; i<=introws; i++){
    let row: string = "";
    for(let j: number = 1; j<=i; j++){
        row += "* ";
    }
    console.log(row);
}