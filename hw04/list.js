var NodeListItem = /** @class */ (function () {
    function NodeListItem(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
    return NodeListItem;
}());
var DoublyLinkedList = /** @class */ (function () {
    function DoublyLinkedList() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    DoublyLinkedList.prototype.add = function (data) {
        var node = new NodeListItem(data);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        }
        else {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return node;
    };
    DoublyLinkedList.prototype.remove = function (node) {
        if (node === this.head) {
            this.head = node.next;
            if (this.head) {
                this.head.prev = null;
            }
        }
        else if (node === this.tail) {
            this.tail = node.prev;
            if (this.tail) {
                this.tail.next = null;
            }
        }
        else {
            node.prev.next = node.next;
            node.next.prev = node.prev;
        }
        this.length--;
    };
    DoublyLinkedList.prototype.find = function (callback) {
        var current = this.head;
        while (current) {
            if (callback(current)) {
                return current;
            }
            current = current.next;
        }
        return null;
    };
    DoublyLinkedList.prototype.modify = function (callback, data) {
        var node = this.find(callback(this.head));
        if (node) {
            node.data = data;
        }
    };
    DoublyLinkedList.prototype.toArray = function () {
        var arr = [];
        var current = this.head;
        while (current) {
            arr.push(current.data);
            current = current.next;
        }
        return arr;
    };
    DoublyLinkedList.prototype.howLength = function () {
        return this.length;
    };
    return DoublyLinkedList;
}());
