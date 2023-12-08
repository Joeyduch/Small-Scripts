/*
    - a Cycle object is basically a cyclic iterator
    - this is inspired by intertools/cycle in Python, I saw a video using it then got inspired to implement it from scratch
*/

class Cycle {
    constructor(array) {
        this.current = null;

        let first = null;
        for(let i=0; i<array.length; i++) {
            if(i===0) {
                first = new CycleNode(array[i]);
                this.current = first;
            }
            else {
                let cycle = new CycleNode(array[i]);
                this.current.next = cycle;
                this.current = this.current.next;
            }
            if(i===array.length-1) this.current.next = first;
        }
    }

    next() {
        this.current = this.current.next;
        return this.current.value;
    }
}


class CycleNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


module.exports = Cycle;
