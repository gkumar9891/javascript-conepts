class heap {
    arr = [];

    insert(val) {
        if (this.arr.length == 0) {
            this.arr.push(val);
            return;
        }

        this.arr.push(val)
        let current = this.arr.length - 1;
        let parent = parseInt(current / 2);

        while (this.arr[current] > this.arr[parent]) {
            let temp = this.arr[current];
            this.arr[current] = this.arr[parent];
            this.arr[parent] = temp;

            current = parent;
            parent = parseInt(current / 2);
        }
    }

    print() {
        console.log(this.arr);
    }

    heapSort() {

        var n = this.arr.length;

        while(n--) {
    
            this.print();
            let temp = this.arr[0];
            this.arr[0] = this.arr[n];
            this.arr[n] = temp;

            var i = 0;

            while (i < n) {

                let left = 2 * i + 1;
                let right = 2 * i + 2;

                if(right >= n) {
                     let temp = this.arr[i];
                     this.arr[i] = this.arr[left];
                     this.arr[left] = temp;
                     break;
                }

                let largest = this.arr[left] > this.arr[right] ? 2 * i + 1 : 2 * i + 2;

                if(largest > n) {
                    return;
                }

                if (this.arr[i] < this.arr[largest]) {
                    let temp = this.arr[i];
                    this.arr[i] = this.arr[largest];
                    this.arr[largest] = temp;

                    i = largest;
                } else {
                    break;
                }
            }
        }
    }
}


var h = new heap();
h.insert(30);
h.insert(50);
h.insert(70);
h.insert(60);
h.insert(20);
h.insert(25);
h.print();

// h.deleteNode();
// h.heapSort();
h.print();



