"use strict";
exports.__esModule = true;
var Node = /** @class */ (function () {
    function Node(value, next) {
        this.value = value;
        this.next = next ? next : undefined;
    }
    return Node;
}());
var SinglyLinkedList = /** @class */ (function () {
    function SinglyLinkedList() {
        this.length = 0;
    }
    SinglyLinkedList.prototype.prepend = function (item) {
        var node = new Node(item);
        this.length++;
        if (this.head) {
            node.next = this.head;
            this.head = node;
            return;
        }
        this.head = node;
    };
    SinglyLinkedList.prototype.insertAt = function (item, idx) {
        var new_node = new Node(item);
        this.length++;
        var prev_node = this.get_node(idx);
        if (!prev_node) {
            return;
        }
        new_node.next = prev_node.next;
        prev_node.next = new_node;
    };
    SinglyLinkedList.prototype.append = function (item) {
        var node = new Node(item);
        this.length++;
        var curr = this.head;
        if (curr) {
            while (curr.next) {
                curr = curr.next;
            }
            curr.next = node;
            return;
        }
        this.head = node;
    };
    SinglyLinkedList.prototype.remove = function (item) {
        var idx = this.findFirstItemIndex(item);
        if (!idx) {
            return;
        }
        return this.removeAt(idx);
    };
    SinglyLinkedList.prototype.get = function (idx) {
        var _a;
        return (_a = this.get_node(idx)) === null || _a === void 0 ? void 0 : _a.value;
    };
    SinglyLinkedList.prototype.get_node = function (idx) {
        var curr = this.head;
        if (idx > this.length - 1 || curr == undefined || idx < 0) {
            return undefined;
        }
        for (var i = 0; i <= idx; i++) {
            if (i == idx) {
                return curr;
            }
            if (!curr.next) {
                return undefined;
            }
            curr = curr.next;
        }
        return undefined;
    };
    SinglyLinkedList.prototype.removeAt = function (idx) {
        var _a, _b;
        console.log(idx);
        if (idx > this.length - 1 || idx < 0 || this.length == 0) {
            return;
        }
        if (idx == 0) {
            var val = (_a = this.head) === null || _a === void 0 ? void 0 : _a.value;
            this.head = (_b = this.head) === null || _b === void 0 ? void 0 : _b.next;
            this.length--;
            return val;
        }
        var prev_node = this.get_node(idx - 1);
        if (!prev_node) {
            return;
        }
        var target_node = prev_node.next;
        if (!target_node) {
            return;
        }
        prev_node.next = target_node.next;
        this.length--;
        return target_node.value;
    };
    // Get the index of the first occurrence of the item in the list
    SinglyLinkedList.prototype.findFirstItemIndex = function (item) {
        var curr = this.head;
        if (!curr) {
            return undefined;
        }
        var i = 0;
        while (true) {
            if (curr.value === item) {
                return i;
            }
            else {
                if (curr.next) {
                    curr = curr.next;
                    i++;
                    continue;
                }
                break;
            }
        }
        return undefined;
    };
    return SinglyLinkedList;
}());
exports["default"] = SinglyLinkedList;
