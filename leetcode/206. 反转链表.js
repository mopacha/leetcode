/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// 方法一： 迭代
// var reverseList = function (head) {
//     if (head === null || head.next === null) {
//         return head
//     } else {
//         let pre = null
//         let cur = head
//         while (cur) {
//             let next = cur.next
//             cur.next = pre
//             pre = cur
//             cur = next
           
//         }
//         return pre
//     }
// };

// 方法二： 递归
var reverseList = function (head) {
    if (head == null || head.next == null) {
        return head
    }else {
        const ret = reverseList(head.next)
        head.next.next = head
        head.next = null
        return ret
    }
};


const head = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: null
            }
        }
    }
}

console.log(reverseList(head))