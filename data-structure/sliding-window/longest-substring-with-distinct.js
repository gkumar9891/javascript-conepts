let string = "abcabcbb";
let ans = "";

let set = new Set();

let tString = "";
for(let i = 0; i < string.length; i++) {
    if(set.has(string[i])) {
        if(tString.length > ans.length) {
            ans = tString;
            tString = string[i];
            set.clear();
            set.add(string[i]);
        }
    } else {
        tString += string[i];
        set.add(string[i]);
    }
}

if(tString.length > ans.length) {
    ans = tString;
}

console.log(ans);