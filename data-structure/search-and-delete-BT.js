class node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
};


function searchInBST(root, key) {

    if(root == null) {
        return null
    }

    if(root.data == key) {
        return root;
    }

    if(root.data > key) {
        return searchInBST(root.left, key)
    } else {
        return searchInBST(root.right, key)
    }
}


{
    let root = new node(4);
    root.left = new node(2);
    root.right = new node(5);
    root.left.left = new node(1);
    root.left.right = new node(3);
    root.right.right = new node(6);

    delete(root.left.left.le);
    console.log(root);

    // let returnedNode = searchInBST(root, 6);
    // console.log(returnedNode);
}

