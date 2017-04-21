/**
 * Algoritimo de Fibonacci
 * Nesse algoritmo o último item da lista é somado com o penultimo gerando um novo número dessa soma e adicionado a lista
 * [https://pt.wikipedia.org/wiki/Sequ%C3%AAncia_de_Fibonacci]
 */

class Fibonacci {
    constructor(interator) {
        this.lista = [];
        this.lista[0] = 0;
        this.lista[1] = 1;
        this.interator = interator;
        this.calculator();
    }

    printAll() {
        console.log(this.lista.toString());
    }

    printOneToOne() {
        for (let i = 0, total = this.lista.length; i < total; i++) {
            console.log(this.lista[i]);
        }
    }

    calculator() {
        for (let i = 2; i < this.interator; i++) {
            this.lista.push(this.lista[i - 1] + this.lista[i - 2])
        }
    }


}

const Fibo = new Fibonacci(20);
Fibo.printAll();
Fibo.printOneToOne();