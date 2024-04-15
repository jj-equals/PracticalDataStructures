import { IQueue } from "../IQueue";

class Node<T> {

    private _value: T;
    public next: Node<T> | null = null;

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
export class Queue<T> implements IQueue<T> {

    private first: Node<T> | null = null;
    private last: Node<T> | null = null;

    private _lenght: number = 0;

    public get lenght(): number {
        return this._lenght;
    }

    private set lenght(v: number) {
        this._lenght = v;
    }

    enqueue(value: T): void {
        let item = new Node(value);
        if (this.lenght === 0) {
            this.first = item;
            this.last = item;
        } else {
            this.last!.next = item;
            this.last = item;
        }

        this.lenght++;
    }

    dequeue(): T {
        if (this.lenght === 0) {
            throw new Error("No items to dequeue");
        }
        
        let item: Node<T> | null = null;
        if (this.lenght === 1) {
            item = this.first;
            this.first = null;
            this.last = null;
        } else {
            item = this.first;
            this.first = item!.next;
            item!.next = null;
        }   

        this.lenght--;
        return item!.value;
    }

}