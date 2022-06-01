class QElement {
    constructor(element, priority) {
        this.element = element;
        this.priority = priority;
    }
}

class PQueue {
    constructor() {
        this.queue = [];
    }

    enqueue(element, priority) {
        var element = new QElement(element, priority);
        let contain = false;
        for(let i = 0; i < this.queue.length; i++) {
            if(this.queue[i].priority > element.priority) {
                contain = true;
                this.queue.splice(i, 0, element);
                
                break;
            }
        }

        if(!contain) {
        this.queue.push(element);
        }
    }
}

var queue = new PQueue();
queue.enqueue('Gaurav', 5);
queue.enqueue("Ravi", 2);
queue.enqueue('Godam', 7);
queue.enqueue('Rahul', 5);
console.log(queue);