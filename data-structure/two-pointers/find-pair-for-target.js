let arr = [3, 5, 2, 8, 11];
let target = 10;

arr.sort((a, b) => a - b);
let start = 0;
let end = arr.length - 1;

let ans = -1;

while(start < end) {
    if(arr[start] + arr[end] == target) {
        ans = [arr[start], arr[end]];
        break;
    }
    
    if(arr[end] > target){
        end--;
    } else if(arr[start] + arr[end] > target) {
        end--;
    } else {
        start++;
    }
}

console.log(ans);
