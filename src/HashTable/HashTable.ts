export class HashTable<T> {
    private dataMap: Array<any>

    constructor(size: number = 7) {
        this.dataMap = new Array<any>(size);
    }

    public set(key: string, value: T): HashTable<T> {
        let index = this.hash(key);
        if (!this.dataMap[index]) {
            this.dataMap[index] = [];
        }
        this.dataMap[index].push([key, value]);
        return this;
    }

    public get(key: string): T | undefined {
        let index = this.hash(key);
        if (this.dataMap[index]) {
            for (let i: number = 0; i < this.dataMap[index].length; i++) {
                if (this.dataMap[index][i][0] === key) {
                    return this.dataMap[index][i][1];
                }
            }
        }
        return undefined;
    }

    public keys(): Array<string> {
        let keys:Array<string> = [];
        for (let i: number = 0; i < this.dataMap.length; i++) {
            if (this.dataMap[i]) {
                for (let j: number = 0; j < this.dataMap[i].length; j++) {
                    keys.push(this.dataMap[i][j][0]);
                }
            }
        }
        return keys;
    }

    private hash(key: string) {
        let hash = 0;
        for (let i: number = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
        }
        return hash;
    }
}