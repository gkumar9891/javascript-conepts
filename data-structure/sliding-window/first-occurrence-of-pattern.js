let string = "hello world";
let pattern = "world";

let j = 0;

let ans = -1;

for(let i = 0; i < string.length; i++) {
    if(string[i] == pattern[j]) {
        j++;

        if(j == pattern.length) {
            ans = i - (pattern.length - 1);
            break;
        }
    } else {
        j = 0;
    }
}

console.log(ans);

