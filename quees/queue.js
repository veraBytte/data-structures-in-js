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
    #length = 0
    constructor() {
        this.first = null;
        this.last = null;
    }

    /**
     * Add a new item to the end of the queue.
     * @param {any} value - The value to add to the queue.
     */
    enqueue(value){
        if (value === undefined) throw new Error ('You must provide a value to enqueue.')

        const node = new Node(value);
    
        if(this.isEmpty()){
            this.first = node;
            this.last = node;
        }else{
            this.last.next = node;
            this.last = node;
        }

        this.#length++;
    }

    /**
     * Remove the first item from the queue.
     * @return {any} The value of the removed node.
     */
    dequeue(){
        if (this.isEmpty()) throw new Error('You cannot dequeue from an empty queue.') 
            

        const value = this.peek();
        this.first = this.first.next;
        this.#length--;
    
        return value;
    }

    /**
     * Get the first item of the queue.
     * @return {any} The value of the first node.
     */
    peek(){
        return (this.isEmpty()) ? true : null;
    }

    /**
     * Check if the queue is empty.
     * @returns {boolean} True if the queue is empty or false isn't
     */
    isEmpty(){
        return this.#length === 0;
    }

    /**
     * Get the total number elements in the Queue.
     * @returns {number} 
     */
    size() {
        return this.#length;
    }


    clear() {
        this.first = null;
        this.last = null;
        this.#length = 0;
    }
}

// Structure
// last - value - value - first (FIFO)