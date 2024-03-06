class Node {
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

export class DoubleLinkedList {
    constructor(value){
        this.head = {
            value : value,
            next : null,
            prev :  null
        }

        this.tail = this.head;
        this.length = 1;
    }
}