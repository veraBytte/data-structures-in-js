/**
 *       10
 *   4        20
 * 2   8   17   170
 */

/**
 * Node class for Binary Search Tree implementation.
 */
class Node{
    /**
     * Create a new Node.
     * @param {any} value - The value of the node.
     */
    constructor(value){
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

/**
 * Binary Search Tree class.
 */
export class BynarySearchTree{

    /**
     * Create a new Binary Search Tree.
     */
    constructor(){
        this.root = null;
    }

    /**
     * Add a new item to the Binary Search Tree.
     * @param {any} value - The value to add to the tree.
     * @returns {BynarySearchTree} The Binary Search Tree.
     */
    insert(value){
        const node = new Node(value);

        if(this.root === null){
            this.root = node;
        }else{
            let currentNode = this.root;
            while(true){
                if (value < currentNode.value) {
                    if (currentNode.value === node.value) {
                        return 'Ya existe el elemento'
                    }

                    if(!currentNode.left){
                       currentNode.left = node;
                       return this;
                    }

                    currentNode = currentNode.left;
                }else{
                    if (currentNode.value === node.value) {
                        return 'Ya existe el elemento'
                    }

                    if (!currentNode.right) {
                        currentNode.right = node;
                        return this;
                    }

                    currentNode = currentNode.right;
                }
            }
        }
    }

    /**
     * Find a specific node in the tree.
     * @param {any} value - The value of the node to find.
     * @returns {Node|null} The node if found, or null if not found.
     */
    find(value){
        if(this.root === null) return null
        let currentNode = this.root;
            while(true){
                if (value === currentNode.value){
                    return currentNode
                }else{
                    if (value < currentNode.value) {
                        if (currentNode.left === null) return null
                        currentNode = currentNode.left;
                    }else{
                        if (currentNode.right === null) return null
                        currentNode = currentNode.right;
                    }
                }
            }
    }

    /**
     * Remove a specific node from the tree.
     * @param {any} value - The value of the node to remove.
     */
    remove(value) {
        this.root = this.removeNode(this.root, value);
    }

    /**
     * Helper method to remove a node from the tree.
     * @param {Node} node - The node to start from.
     * @param {any} value - The value of the node to remove.
     * @returns {Node|null} The updated node, or null if the node was removed.
     */
    removeNode(node, value) {
        if (node === null) {
            return null;
        } else if (value < node.value) {
            node.left = this.removeNode(node.left, value);
            return node;
        } else if (value > node.value) {
            node.right = this.removeNode(node.right, value);
            return node;
        } else {
            // node with no leaf nodes
            if (node.left === null && node.right === null) {
                node = null;
                return node;
            }
            // node with one node
            if (node.left === null) {
                node = node.right;
                return node;
            } else if (node.right === null) {
                node = node.left;
                return node;
            }
            // node with two nodes
            let tempNode = this.findMinNode(node.right);
            node.value = tempNode.value;
            node.right = this.removeNode(node.right, tempNode.value);
            return node;
        }
    }

     /**
     * Helper method to find the node with the minimum value.
     * @param {Node} node - The node to start from.
     * @returns {Node} The node with the minimum value.
     */
    findMinNode(node) {
        if (node.left === null)
            return node;
        else
            return this.findMinNode(node.left);
    }
    /**
     * Este método se utiliza para visitar todos los nodos del árbol en un orden específico. Los métodos comunes de recorrido incluyen in-order, pre-order, post-order y level-order.
     */
    traverse(){

    }
}

const tree = new BynarySearchTree();
tree.insert(40)
tree.insert(30)
tree.insert(50)
tree.insert(25)
tree.insert(35)
tree.insert(45)
tree.insert(55)