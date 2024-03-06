const array = ["Diego","Carmen","Jorge"] // Array Dinamico

class MyArray {
    constructor() {
        this.length = 0;
        this.data = {}
    }
    get(index){
        return this.data[index]
    }
    push(item){
        this.data[this.length] = item;
        this.length++;
        return this.data
    }
    pop(){
        const lastItem = this.data[this.length-1];
        delete this.data[this.length-1]
        this.length--
        return lastItem;
    }
    delete(index){
        const item = this.data[index]
        this.shiftIndex(index)
        return item
    }

    shiftIndex(index){
        for (let i = index; i < this.length -1; i++) {
            this.data[i] = this.data[i + 1]
        }

        delete this.data[this.length - 1];
        this.length--;

        return "done"
    }

    // first option
    unshift(item){
        for (let i = this.length; i > 0; i--) {
            this.data[i] = this.data[i - 1]
        }

        this.data[0] = item
        this.length++;
        return this.data[0]
    }

    //Second option (recursivity)
    recursivityUnshift(item, i = this.length){
        if(i>0){
            this.data[i] = this.data[i-1];
            return this.recursivityShif(item,i-1)
        }else {
            this.data[0] = item;
            this.length++;
            return this.data[0];
        }
    }

    shift(){
        const removeItem = this.data[0]
        delete this.data[0];
        for (let i = 0; i < this.length; i++) {
            this.data[i] = this.data[i+1]
        }
        delete this.data[this.length-1]
        this.length--;
        return removeItem
    }

}

const ejemplo = new MyArray();

ejemplo.push("Camilo")
ejemplo.push("Adriana")
ejemplo.push("Oscar")
ejemplo.push("Estefani")
ejemplo.push("Angie")
// console.log(ejemplo.get(0));
// console.log(ejemplo.pop());
// console.log(ejemplo);
//console.log(ejemplo.shiftIndex(2));
//console.log(ejemplo.data)
console.log(ejemplo.data)
//console.log(ejemplo.unshift("Alexander"))
console.log(ejemplo.shift())

