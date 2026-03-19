/* Assignment - 10*/

function maxProfit(prices: number[]): number {
    let minPrice: number = Number.MAX_VALUE;
    let maxProfit: number = 0;

    for (let price of prices) {
        if (price < minPrice) {
            minPrice = price; // Update the minimum price
        } else if (price - minPrice > maxProfit) {
            maxProfit = price - minPrice; // Update the maximum profit
        }
    }

    return maxProfit;
}

// Example usage:
const prices1: number[] = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices1)); // Output: 5
const prices2: number[] = [7, 6, 4, 3, 1];
console.log(maxProfit(prices2)); // Output: 0

export { };