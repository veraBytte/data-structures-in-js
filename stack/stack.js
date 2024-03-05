class Node {
    /**
     * 
     * @param {any} value 
     */
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

/**
 * Stack class implemented with a singly linked list.
 */
class Stack {
    /**
     * Create a new Stack
     */
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    /**
     * Get the top item of the stack.
     * @returns {Node} The top node of the stack
     */
    peek(){
        if (this.isEmpty()) {
            return null;
        }

        return this.top;
    }

    /**
     * Add a new item to the top of the stack.
     * @param {any} value - The value to add to the stack.
     * @returns {Node} The new top node of the stack.
     */
    push(value){
        const node = new Node(value);

        if (this.length === 0) {
            this.top = node;
            this.bottom = node;
        } else{
            const holdingPointer = this.top;
            this.top = node;
            this.top.next = holdingPointer;
        }
        this.length++;
        return this.top
    }

    /**
     * Remove the top item from the stack.
     * @return {any} The value of the removed node.
     */
    pop(){
        if (this.isEmpty()) {
            return null;
        }

        const removedTop = this.top;
        this.top = this.top.next;
        this.length--;

        if (this.isEmpty()) {
            this.bottom = null;
        }
        return removedTop.value;
    }

    /**
     * Check if the stack is empty.
     * @return {boolean} True if the stack is empty, false otherwise.
     */
    isEmpty(){
        return this.length === 0
    }

    /**
     * Reset the stack to be empty.
     * @return {boolean} True if the stack is empty, false otherwise.
     */
    reset() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
        return this.length === 0
    }
}

// | Top  |
// | next |
//     | 
//     v
// | Value |
// | next  |
//     |
//     v
// | Bottom |
// | next   |
//     |
//     v
// | null   |