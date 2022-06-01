class node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
};


function insertBST(root, val) {
    if(root == null) {
        return new node(val) 
    }

    if(val < root.data) {
        root.left = insertBST(root.left, val);

    } else {
        root.right = insertBST(root.right, val);
    }

    return root;

}


let arr = [5,1,3,4,2,7];
let root = null;
root = insertBST(root, arr[0]);

for(let i = 1; i < arr.length; i++){
    insertBST(root, arr[i]);
}

console.log(root);



// let root = new node(arr[0]);

// var i = 1

// while(i != arr.length - 1) {
//    let node = new node(arr[i]);

//    if(arr[i] > root.data )


    
//     i++;
// }