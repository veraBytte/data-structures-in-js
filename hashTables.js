class HashTable {
    constructor(size){
        this.data = new Array(size)
    }

    hashMethod(key){
      //Maria
        let hash = 0
        for (let index = 0; index < key.length; index++) {
            //      (0    + Valor unicode "M" : 77 * 1 ) % 60
            hash = (hash + key.charCodeAt(index) * index) % this.data.length 
        }
        return hash
    }

    set(key, value) {
        const address = this.hashMethod(key); // 0 <-> 60
        console.log("El address de este elemento es :" + address);

        // this.data = [[["Maria", 25], ["Juan", 30]], [["Ana", 20], ["Pedro", 40]]];
        if (!this.data[address]) {
          this.data[address] = [];
        }

        // Si en la posicion 12 hay un array por cada array dentro de ese array va  acomparar el elemento de la posicion 0 que se igual a la key [ [[0,1],[0,1]], [[0,1],[0,1]]  ]
        if (this.data[address].find((element) => element[0] === key)) {
          // Va  a recorrer este array [[0,1],[0,1]]
          for (let i = 0; i < this.data[address].length; i ++) {
            // "Maria" -> "Juan"
            if (this.data[address][i][0] === key) {
              this.data[address][i][1] = value;
            }
          }
        } else {
          this.data[address].push([key, value]);
        }
        return this.data;
      }

    get(key){
        const address = this.hashMethod(key); // 4

        const currentBucket = this.data[address];
        if(currentBucket){
            for (let index = 0; index < currentBucket.length; index++) {
                if(currentBucket[index][0] === key){
                    return currentBucket[index][1]
                }                
            }
        }
        return undefined;
    }

    delete(key){
      
    }
}

const myHashTable = new HashTable(50);
myHashTable.set("Diego",1990)
myHashTable.set("Camilo",1920)
myHashTable.set("Angelica",2000)
myHashTable.get("Angelica")

const map = new Map()
const weak = new WeakMap