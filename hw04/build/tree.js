"use strict";
class NodeTree {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}
class BinaryTree {
    constructor() {
        this.root = null;
    }
    // Добавление узла в дерево
    add(value) {
        const node = new NodeTree(value);
        if (!this.root) {
            this.root = node;
            return;
        }
        let current = this.root;
        while (current) {
            if (value < current.value) {
                if (!current.left) {
                    current.left = node;
                    break;
                }
                current = current.left;
            }
            else {
                if (!current.right) {
                    current.right = node;
                    break;
                }
                current = current.right;
            }
        }
    }
    // Поиск узла в дереве
    find(value) {
        let current = this.root;
        while (current) {
            if (value === current.value) {
                return current;
            }
            if (value < current.value) {
                current = current.left;
            }
            else {
                current = current.right;
            }
        }
        return null;
    }
    // Удаление узла из дерева
    remove(value) {
        this.root = this._remove(this.root, value);
    }
    _remove(node, value) {
        if (!node) {
            return null;
        }
        if (value === node.value) {
            if (!node.left && !node.right) {
                return null;
            }
            if (!node.left) {
                return node.right;
            }
            if (!node.right) {
                return node.left;
            }
            const tempNode = this._findMin(node.right);
            node.value = tempNode.value;
            node.right = this._remove(node.right, tempNode.value);
            return node;
        }
        if (value < node.value) {
            node.left = this._remove(node.left, value);
            return node;
        }
        node.right = this._remove(node.right, value);
        return node;
    }
    // Поиск узла с минимальным значением в дереве
    _findMin(node) {
        while (node.left) {
            node = node.left;
        }
        return node;
    }
    //Минимальная высота
    findMinHeight(node = this.root) {
        if (node == null) {
            return -1;
        }
        ;
        let left = this.findMinHeight(node.left);
        let right = this.findMinHeight(node.right);
        if (left < right) {
            return left + 1;
        }
        else {
            return right + 1;
        }
        ;
    }
    //Максимальная высота
    findMaxHeight(node = this.root) {
        if (node == null) {
            return -1;
        }
        ;
        let left = this.findMaxHeight(node.left);
        let right = this.findMaxHeight(node.right);
        if (left > right) {
            return left + 1;
        }
        else {
            return right + 1;
        }
        ;
    }
}
