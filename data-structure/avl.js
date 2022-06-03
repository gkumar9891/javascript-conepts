class node{
    left = null;
    right = null;
    data;
    height = 1;

    constructor(val) {
        this.data = val;    
    }
};

class Avl {
    
    height(node) {
        if(node == null) {
            return 0;
        }

        return node.height;
    }

    max(x, y) {
        if(x > y) {
            return x;
        }

        return y;
    }

    getBalance(root) {
        if(root == null) {
            return 0;
        }
        return this.height(root.left) - this.height(root.right);
    }

    leftRotate(x) {
        let y = x.right;
        let t2 = y.left;

        y.left = x;
        x.right = t2;

        x.height = this.max(this.height(x.left), this.height(x.right)) + 1;
        y.height = this.max(this.height(y.left), this.height(y.right)) + 1;

        return y;
    }

    rightRotate(y) {
        let x = y.left;
        let t2 = x.right;

        x.right = y;
        y.left = t2;

        y.height = this.max(this.height(y.left), this.height(y.right)) + 1;
        x.height = this.max(this.height(x.left), this.height(x.right)) + 1;

        return x;
       
    }
    
    insert(root, val) {
        if(root == null) {
            let temp = new node(val);
            return temp;
        }

        if(root.data > val) {
           root.left = this.insert(root.left, val);
        }
        else if(root.data < val ) {
          root.right = this.insert(root.right, val);
        } else {
            return root;
        }

        root.height = 1 + this.max( this.height(root.left), this.height(root.right));

        let balance = this.getBalance(root);

        if(balance > 1 && val < root.left.data) {
            return this.rightRotate(root);
        }

        if(balance < -1 && val > root.right.data ) {
            return this.leftRotate(root);
        }

        if(balance > 1 && val > root.left.data) {
            root.left = this.leftRotate(root.left);
            return this.rightRotate(root);
        }

        if(balance < -1 && val < root.right.data ) {
           //one more state ment need
            root.right = this.rightRotate(root.right);
            return this.leftRotate(root);
        }

        return root

    }


}

let root = null;
let avlTree = new Avl();
root = avlTree.insert(root, 10);
root = avlTree.insert(root, 20);
root = avlTree.insert(root, 30);
root = avlTree.insert(root, 40);
root = avlTree.insert(root, 50);
root = avlTree.insert(root, 25);

console.log(root);
