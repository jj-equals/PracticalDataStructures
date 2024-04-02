import { IDataStructure } from "../IDataStructure";

class Node<T> {

    private _value: T;
    public next: Node<T> | null = null;
    public previous: Node<T> | null = null;

    public get value(): T {
        return this._value;
    }

    private set value(v: T) {
        this._value = v;
    }

    constructor(value: T) {
        this._value = value;
    }
}

export class DoublyLinkedList<T> implements IDataStructure<T> {
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

    get(index: number): T {
        if (this.lenght === 0) {
            throw new Error("Doubly Linked List not Initialized");
        }

        var ascending = index <= (this.lenght / 2);
        var value: T;

        if (ascending) {
            let temp = this.head;
            for (let i: number = 0; i < this.lenght; i++) {
                if (index == i) {
                    value = temp!.value;
                    break;
                }
                temp = temp!.next;
            }
        } else {
            let temp = this.tail;
            for (let i: number = this.lenght; i > 0; i--) {
                if (index == i) {
                    value = temp!.value;
                    break;
                }
                temp = temp!.previous;
            }
        }

        return value!;
    }

    set(index: number, value: T): void {
        throw new Error("Method not implemented.");
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
        throw new Error("Method not implemented.");
    }
    insert(index: number, value: T): void {
        throw new Error("Method not implemented.");
    }
    remove(index: number): void {
        throw new Error("Method not implemented.");
    }
    reverse(): void {
        throw new Error("Method not implemented.");
    }

}