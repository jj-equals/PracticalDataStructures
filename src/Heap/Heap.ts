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
        let current = this.heapArray.length - 1;

        while (current > 0 && this.heapArray[current] > this.heapArray[this.parent(current)]) {
            this.swap(current, this.parent(current));
            current = this.parent(current);
        }
    }

    private sinkDown(index: number): void {
        let maxIndex = index;
        let size = this.heapArray.length;

        while (true) {
            let leftIndex = this.leftChild(index);
            let rightIndex = this.rightChild(index);

            if (leftIndex < size && this.heapArray[leftIndex] > this.heapArray[maxIndex]) {
                maxIndex = leftIndex;
            }
            if (rightIndex < size && this.heapArray[rightIndex] > this.heapArray[maxIndex]) {
                maxIndex = rightIndex;
            }
            if (maxIndex !== index) {
                this.swap(index, maxIndex);
                index = maxIndex;
            }
            else {
                return;
            }
        }
    }

    public remove(): T | undefined {
        if (this.heapArray.length === 0) {
            return undefined;
        }
        if (this.heapArray.length === 1) {
            return this.heapArray.pop();
        }

        const maxValue = this.heapArray[0];
        this.heapArray[0] = this.heapArray.pop() as T;

        this.sinkDown(0);
        return maxValue;
    }
}