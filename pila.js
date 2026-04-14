class Pila{
    constructor(){
        this.Pila = [];
    }
    push(element){
        this.Pila.push(element);
    }
    pop(){
        return this.pila.pop();
    }
    isEmpty(){
        return this.pila.length === 0;
    }
    size(){
        return this.pila.length;
    }
}

let pila = new pila();
pila.push({nombre:"Lisa", edad:27});
pila.push({nombre:"Jennie", edad:30});
console.log(pila.pop());

