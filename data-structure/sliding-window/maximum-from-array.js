let arr = [1, 4, 2, 10, 2, 3, 1, 0];
let k = 3;

let prefixSum = [];
prefixSum.push(0);

let sum = 0;
for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
    prefixSum.push(sum);
}

let start = 0;
let end = k;

let maximum = 0;
while(end <= arr.length) {
    tSum = prefixSum[end] - prefixSum[start];
    if(tSum > maximum) {
        maximum = tSum;
    }
    start++;
    end++;
}

console.log(maximum);
