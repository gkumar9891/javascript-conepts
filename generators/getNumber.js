function* getNumber(a, b) {
    yield a + b // if yield occur then it automatically return and to return addition for first time
    yield a * b  // return multiplication of number for second time
}

const fun = getNumber(5, 5);
console.log(fun.next());
console.log(fun.next());
console.log(fun.next());


