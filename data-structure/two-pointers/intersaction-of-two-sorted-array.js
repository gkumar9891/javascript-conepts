let arr1 = [1, 3, 4, 5, 7];
let arr2 = [2, 3, 5, 6];

let ans = [];

let left, right;
left = right = 0;

while((left < arr1.length) || (right < arr2.length)) {
    if(arr1[left] == arr2[right]) {
        ans.push(arr1[left]);
        left++;
        right++;
    } else if(arr1[left] > arr1[right]) {
        right++;
    } else {
        left++;
    }
}

console.log(ans);