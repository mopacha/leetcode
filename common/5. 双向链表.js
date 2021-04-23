
function DoubleLinkedList() {
    let Node = function (element) {
        this.element = element
        this.next = null
        this.prev = null
    }
    let length = 0;
    let head = null;
    let tail = null;

    // 向链表尾部添加一个新的项
    this.append = function (element) {
        let node = new Node(element)
        let current;

        if (head === null) {
            head = node
        } else {
            while (current) {
                current = current.next
            }
            current.next = node
            tail = node
        }
        length++
    }

    //向链表特定位置插入一个新的项
    this.insert = function (position, element) {
        let node = new Node(element)
        let index = 0
        let current = head;
        let previous
        if (position >= 0 && position <= length) {
            if (position === 0) {
                if (!head) {
                    head = node
                    tail = node
                } else {
                    node.next = current
                    current.prev = node
                    head = node
                }
            } else if (position === length) {
                current.next = node
                node.prev = current
                tail = node
            } else {
                while (index < position) {
                    index++
                    previous = current
                    current = current.next
                }
                previous.next = node
                node.next = current
                current.prev = node
                node.prev = previous
            }
            length++
            return true
        } else {
            return false
        }
    }

    //从链表特定位置移除一项
    this.removeAt = function (position) {
        //检查是否越界
        if (position > -1 && position < length) {
            var current = head,
                previous,
                index = 0;
            if (position === 0) { //移除第一项
                head = current.next;
                //新 如果只有一项，更新tail
                if (length === 1) {
                    tail = null;
                } else {
                    head.prev = null;
                }
            } else if (position === length - 1) { //新 最后一项
                current = tail;
                tail = current.prev;
                tail.next = null;
            } else {
                while (index++ < position) {
                    previous = current;
                    current = current.next;
                }
                //将previous与current的下一项链接起来，跳过current，从而移除它
                previous.next = current.next;
                current.next.prev = previous; //新
            }
            length--;
            return current.element;
        } else {
            return null;
        }
    }
}