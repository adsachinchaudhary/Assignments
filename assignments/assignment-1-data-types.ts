
//Process 1

//1. Temperature of a city in degrees Celsius: 25.5
let temperature: number = 25.5;
console.log(temperature);

//2. Whether a customer has placed an order: true or false
let hasPlacedOrder: boolean = true;
console.log(hasPlacedOrder);

//3. Person's phone number: "123-456-7890"
let phoneNumber: string = "123-456-7890";
console.log(phoneNumber);

//4. Amount of money in a customer's bank account: 1000.50
let bankAccountBalance: number = 1000.50;
console.log(bankAccountBalance);

//5. Person's email address: "john.doe@example.com"
let emailAddress: string = "john.doe@example.com";
console.log(emailAddress);

//6. Coordinates of a location (latitude, longitude): 37.7749, -122.4194
let coordinates: [number, number] = [37.7749, -122.4194];
console.log(coordinates);

//7. Person's marital status: true or false
let isMarried: boolean = false;
console.log(isMarried);

//8. Person's occupation: "Software Engineer"
let occupation: string = "Software Engineer";
console.log(occupation);

//9. Person's favourite colour: "Blue"
let favouriteColour: string = "Blue";
console.log(favouriteColour);

//10.Current year: 2023
let currentYear: number = 2023;
console.log(currentYear);

//11.Number of followers on a social media platform: 1,000,000
let numberOfFollowers: number = 1000000;
console.log(numberOfFollowers);

//12.Rating of a movie: 7.5
let movieRating: number = 7.5;
console.log(movieRating);

//13.Person's blood type: 'A'
let bloodType: string = 'A';
console.log(bloodType);

//14.Title of a book: "To Kill a Mockingbird"
let bookTitle: string = "To Kill a Mockingbird";
console.log(bookTitle);

//15.Number of employees in a company: 500
let numberOfEmployees: number = 500;
console.log(numberOfEmployees);

//16.Time of an event: 2:30 PM
let eventTime: string = "2:30 PM";
console.log(eventTime);

//17.Name of a country: "United States"
let countryName: string = "United States";
console.log(countryName);

//18.Person's eye color: "Brown"
let eyeColor: string = "Brown";
console.log(eyeColor);

//19.Person's birthplace: "New York City"
let birthplace: string = "New York City";
console.log(birthplace);

//20. Distance between two cities: 200.5
let distanceBetweenCities: number = 200.5;
console.log(distanceBetweenCities);

//Process 2

interface sachinInfo { 
temperature: number,
hasPlacedOrder: boolean,
phoneNumber: string,
bankAccountBalance: number,
emailAddress: string,
coordinates: [number, number],
isMarried: boolean,
occupation: string,
favouriteColour: string,
currentYear: number,
numberOfFollowers: number,
movieRating: number,
bloodType: string,
bookTitle: string,
numberOfEmployees: number,
eventTime: string,
countryName: string,
eyeColor: string,
birthplace: string,
distanceBetweenCities: number
}

let sachin: sachinInfo = {
    temperature: 25.5,
    hasPlacedOrder: true,
    phoneNumber: "123-456-7890",
    bankAccountBalance: 1000.50,
    emailAddress: "john.doe@example.com",
    coordinates: [37.7749, -122.4194],
    isMarried: false,
    occupation: "Software Engineer",
    favouriteColour: "Blue",
    currentYear: 2023,
    numberOfFollowers: 1000000,
    movieRating: 7.5,
    bloodType: 'A',
    bookTitle: "To Kill a Mockingbird",
    numberOfEmployees: 500,
    eventTime: "2:30 PM",
    countryName: "United States",
    eyeColor: "Brown",
    birthplace: "New York City",
    distanceBetweenCities: 200.5
}
console.log(sachin);