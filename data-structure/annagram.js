function isAnnagram(str1, str2) {
    let mp1 = new Map();
    let mp2 = new Map()
    let length1 = str1.length;
    let length2 = str2.length;
    if(length1 != length2) {
        return false
    }
    for(let i = 0; i < length1; i++) {
        if(!mp1[str1[i]]) {
            mp1[str1[i]] = 1;
        } else { 
            mp1[str1[i]]++;    
        }
        if(!mp2[str2[i]]) {
            mp2[str2[i]] = 1;
        } else { 
            mp2[str2[i]]++;    
        }
    }
    for(let el in mp1) {
        if(mp1[el] != mp2[el]) {
            return false;
        }
    }
    return true;
}

console.log(isAnnagram("abcc", "cbaa"));