/**
 * Estrutura de dados no fotmato LIFO (Last In First Out - O último a Entrar é o primeiro a sair) este é um conceito de PILHA
 * nesse conceito os elemntos novos entram no final do array dessa forma quando for chamar ou executar 
 * tera de puxar o ultimo elemento adicionado 
 * [https://pt.wikipedia.org/wiki/LIFO]
 */

let Stack = (function() {
    const items = new WeakMap();

    class Stack {
        constructor() {
            items.set(this, []);
        }
        push(element) {
            let s = items.get(this);
            s.push(element);
        }
        pop() {
            let s = items.get(this);
            let r = s.pop();
            return r;
        }
        peek() {
            let s = items.get(this);
            return s[s.length - 1];
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

    return Stack;
})();

let stack = new Stack();

console.log(stack.isEmpty());
stack.push("NovoItem");
stack.push("NovoItem2");

console.log(stack.isEmpty());
console.log(stack.size());
console.log(stack.print());

stack.push("NovoItem3");

console.log(stack.size());
console.log(stack.print());

console.log(stack.pop());

console.log(stack.size());
console.log(stack.print());

stack.clear();

console.log(stack.size());
console.log(stack.print());
console.log(stack.isEmpty());