/* Assignment (Conditional Statements & Loops)

Employee Table
========================
S.No    Name            Base Salary         Experience (Years)      Year-End Rating (Out of 5)
1       AliceJohnson    75000.0             5.1                     4.2
2       BobSmith        68000.0             3.2                     3.8
3       CarolDavis      82000.0             7.1                     4.5
4       DavidBrown      90000.0             10.2                    2.5
5       EvaGreen        60000.0             2.4                     3.5

Hike
========================
Rating          % of base Salary as variable pay        Bonus
> =4.0              15.0                                1500
>=3 && < 4          10.0                                1200
< 3.0               3.0                                 300

Extra Perks
=========================
Employees with Experience >= 5 Years get extra Reward of 5000;

There are 5 Employee records. Now Calculate the Hike percentage of each Employee and store the
Values in Map with EmployeeName and HikePercentagevalue and Print them.

Hike = ( Base Salary * variable pay % ) + Bonus + Reward ;
Hike % = Hike / Base Salary . */

interface Employee {
    name: string;
    baseSalary: number;
    experience: number;
    yearEndRating: number;
}

let employees: Employee[] = [
    { name: "AliceJohnson", baseSalary: 75000.0, experience: 5.1, yearEndRating: 4.2 },
    { name: "BobSmith", baseSalary: 68000.0, experience: 3.2, yearEndRating: 3.8 },
    { name: "CarolDavis", baseSalary: 82000.0, experience: 7.1, yearEndRating: 4.5 },
    { name: "DavidBrown", baseSalary: 90000.0, experience: 10.2, yearEndRating: 2.5 },
    { name: "EvaGreen", baseSalary: 60000.0, experience: 2.4, yearEndRating: 3.5 }
]

let hikeMap: Map<string, number> = new Map();

for (let employee of employees) {
    let variablePayPercentage: number;
    let bonus: number;
    let reward: number = 0;

    if (employee.yearEndRating >= 4.0) {
        variablePayPercentage = 0.15;
        bonus = 1500;
    } else if (employee.yearEndRating >= 3 && employee.yearEndRating < 4) {
        variablePayPercentage = 0.10;
        bonus = 1200;
    } else {
        variablePayPercentage = 0.03;
        bonus = 300;
    }

    if (employee.experience >= 5) {
        reward = 5000;
    }

    let hike = (employee.baseSalary * variablePayPercentage) + bonus + reward;
    let hikePercentage = (hike / employee.baseSalary) * 100;
    hikeMap.set(employee.name, hikePercentage);
}

hikeMap.forEach((hikePercentage, name) => {
    console.log(`${name}: ${hikePercentage.toFixed(2)}%`);
});