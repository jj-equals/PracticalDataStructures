export interface IDataStructure<T> {
    //Adds items to the end of collection
    push(value: T): void;

    //Returns index of item that has this value
    lookupByValue(value: T): number;

    //Return value of item in requested index
    lookupByIndex(index: number): T;

    //Remove last item of the collection
    pop(): void;
}