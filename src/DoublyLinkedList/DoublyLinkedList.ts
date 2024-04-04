import { IList } from "../IList";

class Node<T> {

    private _value: T;
    public next: Node<T> | null = null;
    public previous: Node<T> | null = null;

    public get value(): T {
        return this._value;
    }

    public changeValue(v: T): void {
        if (v != this.value) {
            this.value = v;
        }
    }

    private set value(v: T) {
        this._value = v;
    }

    constructor(value: T) {
        this._value = value;
    }
}

export class DoublyLinkedList<T> implements IList<T> {
    private head: Node<T> | null = null;
    private tail: Node<T> | null = null;

    private _lenght: number = 0;

    public get lenght(): number {
        return this._lenght;
    }
    public set lenght(v: number) {
        this._lenght = v;
    }


    push(value: T): void {
        let item = new Node(value);

        if (this.lenght === 0) {
            this.head = item;
            this.tail = item;
        } else {
            item.previous = this.tail;
            this.tail!.next = item;
            this.tail = item;
        }

        this.lenght++;
    }
    unshift(value: T): void {
        let item = new Node(value);

        if (this.lenght === 0) {
            this.head = item;
            this.tail = item;
        }
        else {
            item.next = this.head;
            this.head!.previous = item;
            this.head = item;
        }

        this.lenght++;
    }

    private getNode(index: number): Node<T> {
        if (this.lenght === 0) {
            throw new Error("Doubly Linked List not Initialized");
        }

        if (index < 0 || index >= this.lenght) {
            throw new Error("Index out of bound");
        }

        var ascending = index <= (this.lenght / 2);
        var node: Node<T>;

        if (ascending) {
            let temp = this.head;
            for (let i: number = 0; i < this.lenght; i++) {
                if (index == i) {
                    node = temp!;
                    break;
                }
                temp = temp!.next;
            }
        } else {
            let temp = this.tail;
            for (let i: number = this.lenght - 1; i > 0; i--) {
                if (index == i) {
                    node = temp!;
                    break;
                }
                temp = temp!.previous;
            }
        }

        return node!;
    }

    get(index: number): T {
        return this.getNode(index).value;
    }

    set(index: number, value: T): void {
        this.getNode(index).changeValue(value);
    }

    pop(): void {
        if (this.lenght === 0) {
            throw new Error("Doubly Linked List not Initialized");
        }
        if (this.lenght === 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            let temp = this.tail!;
            this.tail = this.tail!.previous;
            this.tail!.next = null;
            temp.previous = null;
        }

        this.lenght--;
    }

    shift(): void {
        if (this.lenght === 0) {
            throw new Error("Doubly Linked List not Initialized");
        }
        if (this.lenght === 1) {
            this.head = null;
            this.tail = null;
        } else {
            let temp = this.head!.next;
            temp!.previous = null;
            this.head = temp;
        }
        this.lenght--;
    }

    insert(index: number, value: T): void {
        if (this.lenght === 0) {
            throw new Error("Doubly Linked List not Initialized");
        }
        if (index < 0 || index > this.lenght) {
            throw new Error("Index out of bound");
        }
        if (index === 0) {
            this.unshift(value);
            return;
        }
        if (index === this.lenght) {
            this.push(value);
            return;
        }

        let current = new Node(value);
        let before = this.getNode(index - 1);
        let after = before.next;

        current.next = after;
        current.previous = before;
        before.next = current;
        after!.previous = current;

        this.lenght++;
    }

    remove(index: number): void {
        if (this.lenght === 0) {
            throw new Error("Doubly Linked List not Initialized");
        }
        if (index < 0 || index >= this.lenght) {
            throw new Error("Index out of bound");
        }
        if (index === 0) {
            this.shift();
            return;
        }
        if (index === this.lenght - 1) {
            this.pop();
            return;
        }

        let current = this.getNode(index);
        let before = current!.previous;
        let after = current!.next;

        before!.next = after;
        current.next = null;
        current.previous = null;
        this.lenght--;
    }

    reverse(): void {
        if(this.lenght !== 0 && this.lenght !== 1){   

            let item = new Node(this.tail!.value);
            this.head = item;
            let temp = this.tail!.previous;

            while(temp != null){
                item.next = new Node(temp!.value);
                item.next.previous = item;
                item = item.next;
                temp = temp!.previous;
            }
            this.tail = item;
        }
    }

}