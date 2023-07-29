let string = "cbaabd";
let ans = string[0];

for(let i = 0; i < string.length; i++) {
    let l = i - 1;
    let r = i + 1;
    let tString = string[i];

    while(l >= 0 || r < string.length) {        
        if(string[l] == string[r]) {
            tString = string[l] + tString;
            tString = tString + string[r];
        } else {
            if(tString.length > ans.length) {
                ans = tString;
            }
            break;
        }

        l--;
        r++;
    }
}

for(let i = 0; i < string.length; i++) {
    let l = i;
    let r = i + 1;
    let tString = "";

    while(l >= 0 || r < string.length) {        
        if(string[l] == string[r]) {
            tString = string[l] + tString;
            tString = tString + string[r];
        } else {
            if(tString.length > ans.length) {
                ans = tString;
            }
            break;
        }

        l--;
        r++;
    }
}

console.log(ans);
