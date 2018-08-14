function BST() {
    this.root = null;

    this.insert = function(val) {
        var newNode = new Node(val);
        if (this.root == null) {
            this.root = newNode;
            return this;
        }
        
        var currentNode = this.root;

        while (currentNode != null) {
            if (val < currentNode.value) {
                if (currentNode.left == null) {
                    currentNode.left = newNode;
                    return this;
                }
                else {
                    currentNode = currentNode.left;
                }
            }
            else {
                if (currentNode.right == null) {
                    currentNode.right = newNode;
                    return this;
                }
                else {
                    currentNode = currentNode.right;
                }
            }
        }
    }

    this.preOrderTraversal = function(root) {
        console.log(root.value);

        if (root.left != null) {
            this.preOrderTraversal(root.left);
        }
        if (root.right != null) {
            this.preOrderTraversal(root.right);
        }
    }

    this.postOrderTraversal = function(root) {
        if (root.left != null) {
            this.postOrderTraversal(root.left);
        }
        if (root.right != null) {
            this.postOrderTraversal(root.right);
        }
        console.log(root.value);
    }

    this.inOrderTraversal = function(root) {
        if (root.left != null) {
            this.inOrderTraversal(root.left);
        }
        console.log(root.value);
        if (root.right != null) {
            this.inOrderTraversal(root.right);
        }
    }
}

function Node(val) {
    this.value = val;
    this.left = null;
    this.right = null;
}

var tree = new BST();
var tree1 = new BST();
tree.insert(10).insert(-14).insert(83).insert(-49).insert(40).insert(56).insert(7).insert(89).insert(50).insert(11)

// tree.preOrderTraversal(tree.root);
// tree.postOrderTraversal(tree.root);
// tree.inOrderTraversal(tree.root);

BST.prototype.depth = function(root) {
    if (root == null) {
        return 0;
    }
    
    var leftDepth = this.depth(root.left);
    var rightDepth = this.depth(root.right);

    return Math.max(leftDepth, rightDepth) + 1;
}

console.log(tree.depth(tree.root));