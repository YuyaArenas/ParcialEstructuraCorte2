class Cola{
    constructor(){
        this.Cola=[];
    }    
    PutIn(element){
        this.Cola.push(element);
        console.log(element);
    }

    PutOut(element){
        if(this.Cola.length == 0){
            console.log("No hay nada en la cola, no se puede eliminar");
            return;
        }
        let eliminado = this.Cola.shift();
        console.log("se elimino el numero " + eliminado);
    }
    isEmpty(){
        return this.Cola.length == 0;
    }
    size(){
        return this.Cola.length;
    }
}

let cola = new Cola();
cola.PutIn(34);
cola.PutIn(9);
cola.PutIn(72);

console.log("En la cola hay " + cola.size());

cola.PutOut();
cola.PutOut ();

console.log("Ahora quedan "+ cola.size());

cola.PutOut();

console.log("esta vacia " + cola.isEmpty());