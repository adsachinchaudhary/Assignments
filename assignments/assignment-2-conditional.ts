//Assignment-2 (Conditional Statements)

function evaluateLoanEligibility(customerName: string, creditScore: number, income: number, isEmployed: boolean, debtToIncomeRatio: number): void {
    if (creditScore > 750) {
        console.log(`${customerName}, your loan is automatically approved.`);
    } else if (creditScore >= 650 && creditScore <= 750) {
        if (income >= 50000) {
            if (isEmployed) {
                if (debtToIncomeRatio < 40) {
                    console.log(`${customerName}, your loan is approved.`);
                } else {
                    console.log(`${customerName}, your loan is denied due to high debt-to-income ratio.`);
                }
            } else {
                console.log(`${customerName}, your loan is denied due to unemployment.`);
            }
        } else {
            console.log(`${customerName}, your loan is denied due to insufficient income.`);
        }
    } else {
        console.log(`${customerName}, your loan is denied due to low credit score.`);
    }
}
let customerName = "John Doe";
let creditScore = 720;
let income = 50000.0;
let isEmployed = false;
let debtToIncomeRatio = 35.0;

evaluateLoanEligibility(customerName, creditScore, income, isEmployed, debtToIncomeRatio);

/**********Output*********
John Doe, your loan is denied due to unemployment.
*/