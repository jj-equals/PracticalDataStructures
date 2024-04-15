export interface IQueue<T> {
    
    //Adds item to the start of the queue
    enqueue(value: T): void;
    
    //Removes item at the end of the queue
    dequeue(): T;

    //Get queue lenght
    get lenght(): number;
}