// 创建一个类的骨架
function LinkedList() {
    // 辅助类，表示要加入链表的项
    let Node = function (element) {
        this.element = element;
        this.next = null // 指向链表下一个项的指针
    }

    let length = 0;
    let head = null;

    // 向链表尾部添加一个新的项
    this.append = function (element) {
        let node = new Node(element);
        let current;
        if (head === null) {
            // 如果链表为空
            head = node
        } else {
            current = head;
            while (current.next) {
                current = current.next
            }
            current.next = node
        }
        length++
    }
    //向链表特定位置插入一个新的项
    this.insert = function (position, element) {
        if (position >= 0 && position <= length) {
            let node = new Node(element);
            let current = head
            let index = 0
            let previous

            if (position === 0) {
                node.next = current
                head = node
            } else {
                while (index < position) {
                    index++
                    previous = current
                    current = current.next
                }
                node.next = current
                previous.next = node
            }

            length++
            return true
        } else {
            return false
        }
    };
    //从链表特定位置移除一项
    this.removeAt = function (position) {
        if (position > -1 && position < length) {
            let current = head;
            let index = 0;
            let previous;

            if (position === 0) {
                head = current.next
            } else {
                while (index < position) {
                    index++
                    previous = current
                    current = current.next
                }
                previous.next = current.next
            }
            length--
            return current.element
        } else {
            return null
        }
    };

    // 只输出链表中的元素
    this.toString = function () {
        let current = head
        let str = ''
        while (current) {
            str = str + ',' + current.element;
            current = current.next
        }
        return str.slice(1)
    }
    //返回元素在链表中的索引，如果没有则返回-1
    this.indexOf = function (element) {
        let index = 0;
        let current = head;
        while (current) {
            if (element === current.element) {
                return index;
            }
            index++
            current = current.next
        }
        return -1
    };
}

