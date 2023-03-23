class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  add(data) {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }

    this.length++;
    return node;
  }

  remove(node) {
    if (node === this.head) {
      this.head = node.next;
      if (this.head) {
        this.head.prev = null;
      }
    } else if (node === this.tail) {
      this.tail = node.prev;
      if (this.tail) {
        this.tail.next = null;
      }
    } else {
      node.prev.next = node.next;
      node.next.prev = node.prev;
    }

    this.length--;
  }

  find(callback) {
    let current = this.head;
    while (current) {
      if (callback(current)) {
        return current;
      }
      current = current.next;
    }
    return null;
  }

  modify(callback, data) {
    let node = this.find(callback);
    if (node) {
      node.data = data;
    }
  }

  toArray() {
    const arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.data);
      current = current.next;
    }
    return arr;
  }

  howLength() {
    return this.length;
  }
}