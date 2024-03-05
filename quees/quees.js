/**
 * Node class for queue implementation.
 */
class Node{
    /**
     * Create a new Node.
     * @param {any} value - The value of the node.
     */
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

/**
 * Queue class implemented with a singly linked list.
 */
class Queue {
    /**
     * Create a new Queue.
     */
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    /**
     * Add a new item to the end of the queue.
     * @param {any} value - The value to add to the queue.
     */
    enqueue(value){
        const node = new Node(value);
    
        if(this.length === 0){
            this.first = node;
            this.last = node;
        }else{
            this.last.next = node;
            this.last = node;
        }

        this.length++;
    }

    /**
     * Remove the first item from the queue.
     * @return {any} The value of the removed node.
     */
    dequeue(){
        if (!this.first) {
            return null;
        }

        const value = this.peek();
        this.first = this.first.next;
        this.length--;
    
        return value;
    }

    /**
     * Get the first item of the queue.
     * @return {any} The value of the first node.
     */
    peek(){
        if (!this.first) {
            return null;
        }
        return this.first.value;
    }
}

// last - value - value - first