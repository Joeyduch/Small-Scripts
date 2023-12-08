/*
    - a Cycle object is like a linkedlist but it cycles back to the first item after the last
    - this is inspired by intertools/cycle in Python
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
    constructor(value=null, next=null) {
        this.value = value;
        this.next = next;
    }
}


module.exports = Cycle;