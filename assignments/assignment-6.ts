/* Assignment 6: Prime Number Checker */

function isPrime(n: number): boolean {
    if (n <= 1) {
        return false; // 1 and numbers less than 1 are not prime
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false; // n is divisible by a number other than 1 and itself
        }
    }
    return true; // n is prime
}
console.log(isPrime(7));  // Output: true
console.log(isPrime(25)); // Output: false
console.log(isPrime(1));  // Output: false