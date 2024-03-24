import { IDataStructure } from "../../IDataStructure";

export class SinglyLinkedList<T> implements IDataStructure<T> {
    private head: Node<T> | null = null;
    private tail: Node<T> | null = null;

    private validateInitialization(): void {
        if (!this.head) {
            throw new Error("Linked List not Initialized");
        }
    }

    public push(value: T): void {
        let item = new Node<T>(value);

        if (!this.head && !this.tail) {
            this.head = item;
            this.tail = item;
            return;
        }

        this.tail!.next = item;
        this.tail! = item;
    }

    public pop(): void {
        this.validateInitialization();

        if(this.head == this.tail){
            this.head = null;
            this.tail = null;
            
            return;
        }

        var previous: Node<T> = this.head!;
        var current: Node<T> = this.head!;

        while(current.next != null){
                previous = current;
                current = current.next;
        }

        previous.next = null;
        this.tail = previous;
    }

    public lookupByValue(value: T): number {
        this.validateInitialization();

        var item: Node<T> = this.head!;
        let indexCounter = 0;

        while (true) {
            if(item.getValue()==value){
                return indexCounter;
            }
            if (!item.next) {
                throw new Error("Couldn`t find the value.");
            }
            item = item.next;
            indexCounter++;
        }
    }

    public lookupByIndex(index: number): T {
        this.validateInitialization();

        var item: Node<T> = this.head!;
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
}

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