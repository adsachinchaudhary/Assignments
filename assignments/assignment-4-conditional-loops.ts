/* Assignment -4 (Conditional Statements & Loops)

Bank Transactions
Positive value refers Credit and Negative refers Debit Transaction
Transactions Amount
1. 50000
2. -2000
3. 3000
4. -15000
5. -200
6. -300
7. 4000
8. -3000
First Store all the transactions in any data structure of Your Choice from collections, and by using
Loops and conditional statements
1. Print total number of credit and debit transactions completed
2. Print the total amount credited and debited in account
3. Print total amount remaining at the end in Bank Account
4. If any transaction limit exceeds +/- 10000 then print the message “Suspicious credit/ debit
Transaction with Amount” and also print total number of suspicious transactions */

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