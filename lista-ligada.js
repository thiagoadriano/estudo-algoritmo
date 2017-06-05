/**
 * Estrutura de dados no formato de lista ligada (Linked List)
 * Nesse conceito é feito adição de elementos por meio de referencia com o próximo
 * [https://pt.wikipedia.org/wiki/Lista_ligada]
 */
function LinkedList()
{
    let Node = (element) => {
        this.element = element;
        this.next = null;
    }

    let length = 0;
    let head = null;

    this.append = (element) => {
        let node = new Node(element),;
            current;
        if(head === null){
            head = node;
        }else{
            current = head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }
        length++;
    }
    this.insert = (position, element) => {}
    this.removeAt = (position) => {
        if(position > -1 && position < length){
            let current = head,
                previous,
                index = 0;
            if(position === 0){
                head = current.next;
            }else{
                while(index++ < position){
                    previous = current;
                    current = current.next;
                }
                previous.next = current.next;
            }
            length--;
            return current.element
        }else{
            return null;
        }
    }
    this.remove = (element) => {}
    this.indexOf = (element) => {}
    this.isEmpty = () => {}
    this.size = () => {}
    this.toString = () => {}
    this.print = () => {}
}