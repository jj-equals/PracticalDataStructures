import { IStack } from "../IStack";

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
export class Stack<T> implements IStack<T> {

    private top: Node<T> | null = null;
    private _lenght: number = 0;

    public get lenght(): number {
        return this._lenght;
    }

    private set lenght(v: number) {
        this._lenght = v;
    }

    push(value: T): void {
        let item = new Node(value);
        if (this.lenght === 0) {
            this.top = item;
        } else {
            item.next = this.top;
            this.top = item;
        }

        this.lenght++;
    }

    pop(): T {
        if (this.lenght === 0) {
            throw new Error("No items in the stack");
        }
        
        let item = this.top;
        this.top = item!.next;
        item!.next = null;

        this.lenght--;
        return item!.value;
    }

}