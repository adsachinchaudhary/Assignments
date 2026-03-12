// Assignment -4 (Conditional Statements & Loops)

let transactions: number[] = [50000, -2000, 3000, -15000, -200, -300, 4000, -3000];
let creditCount = 0;
let debitCount = 0;
let totalCredit = 0;
let totalDebit = 0;
let suspiciousCount = 0;

for (let i = 0; i < transactions.length; i++) {
    let amount = transactions[i];
    if (amount > 0) {
        creditCount++;
        totalCredit += amount;
        if (amount > 10000) {  
            console.log(`Suspicious credit transaction with amount: ${amount}`);
            suspiciousCount++;
        }
    } else {
        debitCount++;
        totalDebit += amount;
        if (amount < -10000) {
            console.log(`Suspicious debit transaction with amount: ${amount}`);
            suspiciousCount++;
        }

    }
}

let remainingBalance = totalCredit + totalDebit;
console.log(`Total number of credit transactions: ${creditCount}`);
console.log(`Total number of debit transactions: ${debitCount}`);
console.log(`Total amount credited: ${totalCredit}`);
console.log(`Total amount debited: ${totalDebit}`);
console.log(`Remaining balance in bank account: ${remainingBalance}`);
console.log(`Total number of suspicious transactions: ${suspiciousCount}`);


/**********Output**********
Suspicious credit transaction with amount: 50000
Suspicious debit transaction with amount: -15000
Total number of credit transactions: 3
Total number of debit transactions: 5
Total amount credited: 57000
Total amount debited: -20500
Remaining balance in bank account: 36500
Total number of suspicious transactions: 2
*/