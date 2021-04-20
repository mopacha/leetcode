/**
 * @param {number[]} prices
 * @return {number}
 */


// 方法一： 暴力解法，时间复杂度O(n²)
// var maxProfit = function (prices) {
//     let len = prices.length;
//     let maxProfit = 0
//     for (let i = 0; i < len - 1; i++) {
//         for (let j = i + 1; j < len; j++) {
//             if (prices[i] < prices[j]) {
//                 let profit = prices[j] - prices[i]
//                 maxProfit = Math.max(maxProfit, profit)
//             }
//         }
//     }
//     return maxProfit
// };

// 方法二：动态思想 

var maxProfit = function (prices) {
    let len = prices.length;
    if (!len) return 0;

    let minPrice = prices[0];
    let maxProfit = 0;

    for (let i = 1; i < len; i++) {
        if (prices[i] <= minPrice) {
            minPrice = prices[i]
        } else {
            maxProfit = Math.max(maxProfit, prices[i] - minPrice)
        }
    }

    return maxProfit
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]))