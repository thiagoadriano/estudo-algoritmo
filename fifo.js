/**
 * Estrutura de dados no fotmato FIFO (First In First Out - O primeiro a Entrar é o primeiro a sair) este é um conceito de FILA
 * nesse conceito os elemntos novos entram no final do array dessa forma quando for chamar ou executar 
 * tera de puxar o primeiro elemento adicionado 
 * [https://pt.wikipedia.org/wiki/FIFO]
 */

let Queue = (function() {
    const items = new WeakMap();

    class Queue {
        constructor() {
            items.set(this, []);
        }
        enqueue(element) {
            let s = items.get(this);
            s.push(element);
        }
        dequeue() {
            let s = items.get(this);
            let r = s.shift();
            return r;
        }
        front() {
            let s = items.get(this);
            return s[0];
        }
        isEmpty() {
            let s = items.get(this);
            return s.length == 0;
        }
        clear() {
            items.set(this, []);
        }
        size() {
            let s = items.get(this);
            return s.length;
        }
        print() {
            let s = items.get(this);
            console.log(s.toString());
        }
    }

    return Queue;
})();

let queue = new Queue();

console.log(queue.isEmpty());
queue.enqueue("John");
queue.enqueue("Jack");

console.log(queue.isEmpty());
console.log(queue.size());
console.log(queue.print());

queue.enqueue("Camila");

console.log(queue.size());
console.log(queue.print());

console.log(queue.dequeue());

console.log(queue.size());
console.log(queue.print());

queue.clear();

console.log(queue.size());
console.log(queue.print());
console.log(queue.isEmpty());