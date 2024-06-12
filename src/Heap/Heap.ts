export class Heap<T> {

    private _heapArray: Array<T> = [];

    public get heapArray(): Array<T> {
        return this._heapArray;
    }

    private set heapArray(v: Array<T>) {
        this._heapArray = v;
    }

    private leftChild(index: number): number {
        return 2 * index + 1;
    }

    private rightChild(index: number): number {
        return 2 * index + 2;
    }

    private parent(index: number): number {
        return Math.floor((index - 1) / 2);
    }

    private swap(index1: number, index2: number): void {
        [this.heapArray[index1], this.heapArray[index2]] = [this.heapArray[index2], this.heapArray[index1]];
    }


    public insert(value: T): void {
        this.heapArray.push(value);
        let len = this.heapArray.length;
    }
}