var NodeTree = /** @class */ (function () {
    function NodeTree(value, left, right) {
        if (left === void 0) { left = null; }
        if (right === void 0) { right = null; }
        this.value = value;
        this.left = left;
        this.right = right;
    }
    return NodeTree;
}());
var BinaryTree = /** @class */ (function () {
    function BinaryTree() {
        this.root = null;
    }
    // Добавление узла в дерево
    BinaryTree.prototype.add = function (value) {
        var node = new NodeTree(value);
        if (!this.root) {
            this.root = node;
            return;
        }
        var current = this.root;
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
    };
    // Поиск узла в дереве
    BinaryTree.prototype.find = function (value) {
        var current = this.root;
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
    };
    // Удаление узла из дерева
    BinaryTree.prototype.remove = function (value) {
        this.root = this._remove(this.root, value);
    };
    BinaryTree.prototype._remove = function (node, value) {
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
            var tempNode = this._findMin(node.right);
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
    };
    // Поиск узла с минимальным значением в дереве
    BinaryTree.prototype._findMin = function (node) {
        while (node.left) {
            node = node.left;
        }
        return node;
    };
    //Минимальная высота
    BinaryTree.prototype.findMinHeight = function (node) {
        if (node === void 0) { node = this.root; }
        if (node == null) {
            return -1;
        }
        ;
        var left = this.findMinHeight(node.left);
        var right = this.findMinHeight(node.right);
        if (left < right) {
            return left + 1;
        }
        else {
            return right + 1;
        }
        ;
    };
    //Максимальная высота
    BinaryTree.prototype.findMaxHeight = function (node) {
        if (node === void 0) { node = this.root; }
        if (node == null) {
            return -1;
        }
        ;
        var left = this.findMaxHeight(node.left);
        var right = this.findMaxHeight(node.right);
        if (left > right) {
            return left + 1;
        }
        else {
            return right + 1;
        }
        ;
    };
    return BinaryTree;
}());
