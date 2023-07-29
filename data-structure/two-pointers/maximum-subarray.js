let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

let sum = 0;
let maxSumSoFar = -999999;
let left = -1;
let right = -1;

for(let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
    if(sum < arr[i]) {
        sum = arr[i];
        left = i;
    }

    if(sum > maxSumSoFar) {
        maxSumSoFar = sum;
        right = i;
    }
}

console.log(arr.slice(left, right + 1));