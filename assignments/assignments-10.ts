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

/* //using array
function maxProfit(prices: number[]): number {
    let minPrice: number = Number.MAX_VALUE;
    let maxProfit: number = 0;
    for (let i: number = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else if (prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice;
        }
    }
    return maxProfit;
}

//using two pointer approach
function maxProfitTwoPointer(prices: number[]): number {
    let left: number = 0; // Buy pointer
    let right: number = 1; // Sell pointer
    let maxProfit: number = 0;
    while (right < prices.length) {
        if (prices[left] < prices[right]) {
            maxProfit = Math.max(maxProfit, prices[right] - prices[left]);
        } else {
            left = right; // Move the buy pointer to the right
        }
        right++; // Move the sell pointer to the right
    }
    return maxProfit;
}

// Example usage:
const prices1: number[] = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices1)); // Output: 5
console.log(maxProfitTwoPointer(prices1)); // Output: 5
const prices2: number[] = [7, 6, 4, 3, 1];
console.log(maxProfit(prices2));
// Output: 0
console.log(maxProfitTwoPointer(prices2)); // Output: 0 */