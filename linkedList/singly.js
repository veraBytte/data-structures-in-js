class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
}

class SinglyLinkedList {
    constructor(value){
        this.head = {
            value : value,
            next : null
        }

        this.tail = this.head;
        this.length = 1
    }

    append(value){
        const node = new Node(value);
        this.tail.next = node;
        //Aqui se actualiza cual es el ultimo objeto anidado
        this.tail = node
        this.length++;
        return this
    }

    insert(value){
        this.head.next = new Node (value)
    }

    prepend(value){
        const node = new Node(value)
        node.next = this.head;
        this.head = node;
        this.length++
        return this
    }

    insert(index, value){
        if(index >= this.length){
            return this.append(value)
        }

        const node = new Node(value);
        const pointer = this.getIndex(index - 1);
        const holdingPointer = pointer.next;

        pointer.next = node
        node.next = holdingPointer

        this.length++;
        return 'Agregado' + node;
    }

    remove(index) {
        if (index < 0 || index >= this.length) {
          return `El indice no existe actualmente el indice mayor es ${this.length}`;
        }

        let nodeRemoved = undefined
      
        if (index === 0) {
            nodeRemoved = this.head.value;
            this.head = this.head.next;
        }else {
            const pointer = this.getIndex(index - 1);
            const nodeToRemove = pointer.next;
            nodeRemoved = this.head.value;
            
            if (index === this.length - 1) {
                this.tail = pointer;
            }

            pointer.next = nodeToRemove.next;
        }
        this.length--;
        return nodeRemoved;
      }

    getIndex(index){
        let counter = 0;
        let currentNode = this.head;
        
        while(counter != index){
            currentNode = currentNode.next;
            counter++
        }
        return currentNode;
    }
}


// console.log(myLinkedList.insert(2,"Valor agregado"));

// 1 -> 2 -> 3 -> 4 -> 5 -> null

// let singleLinkedList = {
//     head : {
//         value: 1,
//         next : {
//             value : 2,
//             next : {
//                 value :3 ,
//                 next: {
//                     value:4,
//                     next:null
//                 }
//             }
//         }
//     }
// }