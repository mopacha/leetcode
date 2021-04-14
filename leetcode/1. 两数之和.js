/*
输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
*/

// 方法一：
const twoSum = (nums, target) => {
    for (let i = 0, x = nums.length - 1; i < x; i++) {
        for (let j = i + 1, y = nums.length; j < y; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }
}

const nums = [2, 7, 11, 15], target = 9
console.log(twoSum(nums, target))