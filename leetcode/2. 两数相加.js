/*
输入：l1 = [2,4,3], l2 = [5,6,4]
输出：[7,0,8]
解释：342 + 465 = 807.
*/

var addTwoNumbers = function(l1, l2){
    let first = l1.join('')
    let second = l2.join('')
    let sum =parseInt(first) + parseInt(second)
    return sum.toString().split('').reverse().map(i=>parseInt(i))
}

const l1 = [2,4,3]
const l2 = [5,6,4]
console.log(addTwoNumbers(l1,l2))