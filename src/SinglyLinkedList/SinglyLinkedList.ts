import { IDataStructure } from "../IDataStructure";

class Node<T> {
    private value: T;
    public next: Node<T> | null = null;

    constructor(value: T) {
        this.value = value;
    }

    public getValue(): T {
        return this.value;
    }
}
export class SinglyLinkedList<T> implements IDataStructure<T> {

    private head: Node<T> | null = null;
    private tail: Node<T> | null = null;
    private _lenght: number = 0;

    public get lenght(): number {
        return this._lenght;
    }

    private set lenght(v: number) {
        this._lenght = v;
    }

    private validateInitialization(): void {
        if (!this.head) {
            throw new Error("Singly Linked List not Initialized");
        }
    }

    private getNode(index: number): Node<T> {
        let counter = 0;
        var current: Node<T> | null = this.head;

        while (true) {
            if (current == null) {
                throw new Error("Index out of bound");
            }

            if (index == counter) {
                return current;
            }
            current = current.next;
            counter++;
        }
    }

    public push(value: T): void {
        this.lenght++;
        let item = new Node<T>(value);

        if (!this.head && !this.tail) {
            this.head = item;
            this.tail = item;

            return;
        }

        this.tail!.next = item;
        this.tail! = item;
    }

    public unshift(value: T): void {
        this.lenght++;
        let item = new Node<T>(value);

        if (!this.head && !this.tail) {
            this.head = item;
            this.tail = item;
            return;
        }

        item.next = this.head;
        this.head = item;
    }

    public pop(): void {
        this.validateInitialization();

        if (this.head == this.tail) {
            this.head = null;
            this.tail = null;

            return;
        }

        var newTail: Node<T> = this.getNode(this.lenght - 2);

        newTail.next = null;
        this.tail = newTail;

        this.lenght--;
    }

    public shift(): void {
        this.validateInitialization();

        if (this.head == this.tail) {
            this.head = null;
            this.tail = null;

            return;
        }

        var previous: Node<T> = this.getNode(0);
        this.head = this.head!.next;
        previous.next = null;

        this.lenght--;
    }

    public get(index: number): T {
        this.validateInitialization();
        return this.getNode(index).getValue();
    }

    public set(index: number, value: T): void {
        this.validateInitialization();
        var item = new Node<T>(value);

        //Only one node in the collection
        if (this.head! == this.tail!) {
            this.head = item;
            this.tail = item;
            return;
        }

        //First node in the collection
        if (index == 0) {
            item.next = this.head!.next;
            this.head!.next = null;
            this.head = item;
            return;
        }

        // All other cases
        var previous: Node<T> = this.getNode(index - 1);
        var current: Node<T> = this.getNode(index);

        item.next = current.next;
        previous.next = item;
    }

    insert(index: number, value: T): void {
        if (index < 0 || index > this.lenght) {
            throw new Error("Index out of bound");
        }

        //First item or Empty Collection
        if (index == 0 || this.lenght == 0) {
            this.unshift(value);
            return;
        }
        //Last item
        if (this.lenght == index) {
            this.push(value);
            return;
        }

        var previous: Node<T> = this.getNode(index - 1);
        var current: Node<T> = this.getNode(index);

        var item = new Node<T>(value);
        item.next = current;
        previous.next = item;

        this.lenght++;
    }

    public remove(index: number): void {
        if (index < 0 || index > this.lenght) {
            throw new Error("Index out of bound");
        }
        if (index == 0) {
            this.shift();
            return;
        }
        if (index == this.lenght - 1) {
            this.pop();
            return;
        }

        var previous: Node<T> = this.getNode(index - 1);
        var current: Node<T> = this.getNode(index);

        previous.next = current.next;
        current.next = null;
        this.lenght--;
    }

    reverse(): void {
        this.validateInitialization();

        //Invert pointers
        var temp: Node<T> | null = this.head;
        this.head = this.tail;
        this.tail = temp;

        //Flip over the list
        var next: Node<T> | null = temp;
        var previous: Node<T> | null = null;
        for (let i: number = 0; i < this.lenght; i++) {
            next = temp!.next;
            temp!.next = previous;
            previous = temp;
            temp = next;
        }
    }
}

