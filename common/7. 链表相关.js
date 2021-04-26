/* /code/19.js */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

// 测试工具类，为了声明链表用，好方便测试
class LinkList {
    constructor() {
        this.head = null;
        this.length = 0;
    }
    // 添加节点
    append(element) {
        let node = new ListNode(element);
        if (this.head === null) this.head = node;
        else {
            // 找到末尾，追加节点
            let end = this.getElementAt(this.length - 1);
            end.next = node
        }
        this.length++;
    }

    /**
     * 根据位置找节点
     */
    getElementAt(position) {
        // 先边界判断，边界外直接返回null
        if (position < 0 || position >= this.length) return null;
        else {
            // 从头开始找
            let current = this.head;
            for (let i = 0; i < position; i++) {
                current = current.next
            }
            return current;
        }
    }

    // 方便查看链表
    toString() {
        if (this.length === 0) return [];
        let current = this.head;
        let arr = [];

        while (current) {
            arr.push(current.val);
            current = current.next;
        }

        return arr;
    }

    listToArray(head) {
        let arr = [];
        let current = head;
        while (current) {
            arr.push(current.val)
            current = current.next
        }
        return arr;
    }

    // 获取链表的头
    getHead() {
        return this.head;
    }
}

// 测试
let linkList = new LinkList();
linkList.append('1');
linkList.append('2');
linkList.append('3');


let head = linkList.getHead();

console.log(linkList);

console.log(JSON.stringify(linkList))
console.log(linkList.toString())
