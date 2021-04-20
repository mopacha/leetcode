/**
 * @param {number[]} height
 * @return {number}
 */


//方法一：时间复杂度O(n²)
// var maxArea = function (height) {
//     let maxArea = 0
//     for (let i = 0; i < height.length - 1; i++) {
//         for (let j = i + 1; j < height.length; j++) {
//             let area = (j - i) * Math.min(height[i], height[j])
//             maxArea = Math.max(maxArea, area)
//         }
//     }
//     return maxArea
// };


// 方法二： 双针针法; 时间复杂度 O(n)
var maxArea = function (height) {
    let len = height.length;
    let l = 0;
    let r = len - 1;
    let maxArea = 0;

    while (l < r) {
        let area = (r - l) * (Math.min(height[r], height[l]))
        maxArea = Math.max(area, maxArea)
        if (height[l] > height[r]) {
            r--
        } else {
            l++
        }
    }

    return maxArea
};



console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))