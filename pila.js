class Pila{
    constructor(){
        this.Pila = [];
    }
    push(element){
        this.Pila.push(element);
    }
    pop(){
        return this.Pila.pop();
    }
    isEmpty(){
        return this.Pila.length === 0;
    }
    size(){
        return this.Pila.length;
    }
}

let pila = new Pila();
pila.push({nombre:"Lisa", edad:27});
pila.push({nombre:"Jennie", edad:30});
console.log(pila.pop());
console.log(pila.size());
console.log(pila.isEmpty());
pila.pop();
console.log(pila.isEmpty());