export interface IStack<T> {
    
    //Adds item to the end of the stack
    push(value: T): void;
    
    //Removes item at the end of the stack
    pop(): T;

    //Get stack lenght
    get lenght(): number;
}