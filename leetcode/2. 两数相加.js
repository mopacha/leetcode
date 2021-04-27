/*
输入：l1 = [2,4,3], l2 = [5,6,4]
输出：[7,0,8]
解释：342 + 465 = 807.
*/


function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var addTwoNumbers = function (l1, l2) {
    let sum = new ListNode('0')
    let head = sum
    let curry = 0

    while (l1 || l2 || curry) {
        let val1 = l1 !== null ? l1.val : 0;
        let val2 = l2 !== null ? l2.val : 0;
        let sumVal = val1 + val2 + curry

        curry = sumVal >= 10 ? 1 : 0
        sum.next = new ListNode(sumVal % 10)

        sum = sum.next
        if (l1 !== null) {
            l1 = l1.next
        }

        if (l2 !== null) {
            l2 = l2.next
        }
    }

    return head.next
}




const l1 = {
    val: 2,
    next: {
        val: 4,
        next: {
            val: 3
        }
    }
}
const l2 = {
    val: 5,
    next: {
        val: 6,
        next: {
            val: 4
        }
    }
}

console.log(addTwoNumbers(l1, l2))