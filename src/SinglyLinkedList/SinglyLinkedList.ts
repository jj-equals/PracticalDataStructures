import { IDataStructure } from "../IDataStructure";

export class SinglyLinkedList<T> implements IDataStructure<T> {
    private head: SinglyLinkedListNode<T> | null = null;
    private tail: SinglyLinkedListNode<T> | null = null;

    private validateInitialization(): void {
        if (!this.head) {
            throw new Error("Linked List not Initialized");
        }
    }

    public push(value: T): void {
        let item = new SinglyLinkedListNode<T>(value);

        if (!this.head && !this.tail) {
            this.head = item;
            this.tail = item;
            return;
        }

        this.tail!.next = item;
        this.tail! = item;
    }

    public unshift(value: T): void {
        let item = new SinglyLinkedListNode<T>(value);

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

        var previous: SinglyLinkedListNode<T> = this.head!;
        var current: SinglyLinkedListNode<T> = this.head!;

        while (current.next != null) {
            previous = current;
            current = current.next;
        }

        previous.next = null;
        this.tail = previous;
    }

    public shift(): void {
        this.validateInitialization();

        if (this.head == this.tail) {
            this.head = null;
            this.tail = null;

            return;
        }

        var previous: SinglyLinkedListNode<T> = this.head!;
        this.head = this.head!.next;
        previous.next = null;
    }

    public get(index: number): T {
        this.validateInitialization();

        var item: SinglyLinkedListNode<T> = this.head!;
        let indexCounter = 0;

        while (indexCounter != index) {
            if (!item.next) {
                throw new Error("Index out of bound");
            }
            item = item.next;
            indexCounter++;
        }

        return item.getValue();
    }

    public set(index: number, value: T): void {
        var item = new SinglyLinkedListNode<T>(value);
        this.validateInitialization();

        //Only one node in the collection
        if(this.head! == this.tail!){
            this.head = item;
            this.tail = item;
            return;
        }

        //First node in the collection
        if(index == 0){
            item.next = this.head!.next;
            this.head!.next = null;
            this.head = item;
            return;
        }

        // All other cases
        var previous: SinglyLinkedListNode<T> = this.head!;
        var current: SinglyLinkedListNode<T> = this.head!;
        let indexCounter = 0;

        while (indexCounter != index) {
            if (!current.next) {
                throw new Error("Index out of bound");
            }
            previous = current;
            current = current.next;
            indexCounter++;
        }

        previous.next = item;
        item.next = current.next;
    }
}

class SinglyLinkedListNode<T> {
    private value: T;
    public next: SinglyLinkedListNode<T> | null = null;

    constructor(value: T) {
        this.value = value;
    }

    public getValue(): T {
        return this.value;
    }
}