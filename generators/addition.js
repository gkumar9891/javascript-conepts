function* addition(a) {
    let id = a ?? 1;
    while(true) {
        id = yield id; //used to return the number from b.next(5)
    }
}

const b = addition();
console.log(b.next());
console.log(b.next(5)); // we can pass number to yield
