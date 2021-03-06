'use strict';

var TreeNode = require('../Common/treeNode.js');
var inherits = require('../Common/utils.js');

var binarySearchTree = function () {
    this.root = new TreeNode();
};
inherits(binarySearchTree, TreeNode);

binarySearchTree.prototype = {
    insert: function (val) {
        // check if is root? How is it root? If parent is null; set value and return
        // Otherwise, left and right child
        // CONTINUE
        var node = this.root;
        while (node.val) {
            if (val > node.val) {
                node = node.rightChild;
            } else {
                node = node.leftChild;
            }
        }

    },
    remove: '',
    contains: ''
};

module.exports = binarySearchTree;
