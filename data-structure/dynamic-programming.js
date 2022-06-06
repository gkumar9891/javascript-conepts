function getFib(n, memo = {}) {
    if(n in memo) return memo[n];
    
    if(n == 1){
        return 1;
    }

    if(n == 0) {
        return 0;
    }

    memo[n] = getFib(n - 1, memo) + getFib(n - 2, memo);
    return memo[n]
}

console.log(getFib(3));
console.log(getFib(7));
console.log(getFib(910));