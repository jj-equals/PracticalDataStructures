
export class Graph<T> {

    private _adjacencyList: Object | any = {};

    public get adjacencyList(): Object | any {
        return this._adjacencyList;
    }

    private set adjacencyList(v: Object | any) {
        this._adjacencyList = v;
    }

    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex: T): boolean {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
            return true;
        }
        return false;
    }

    addEdge(vertex1: T, vertex2: T): boolean {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1].push(vertex2);
            this.adjacencyList[vertex2].push(vertex1);
            return true;
        }
        return false;
    }

    removeEdge(vertex1: T, vertex2: T): boolean {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((v: T) => v !== vertex2);
            this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((v: T) => v !== vertex1);
            return true;
        }
        return false;
    }

    removeVertex(vertex: T): Graph<T> | undefined {
        if (!this.adjacencyList[vertex]) {
            return undefined;
        }

        while (this.adjacencyList[vertex].length) {
            let temp = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, temp);
        }

        delete this.adjacencyList[vertex];
        return this;
    }
}