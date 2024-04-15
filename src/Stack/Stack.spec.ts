import { Stack } from "./Stack";

describe('Stack: ', () => {
    describe('Fails when trying to: ', () => {
        var collection = new Stack<number>();

        it('get item from empty stack', () => {
            expect(() => collection.pop()).toThrow(Error);
        });
    });

    describe('Succed when trying to: ',()=>{
        it('create a new item onto the end of the stack', ()=>{
            var collection = new Stack<number>();
            collection.push(1);
            expect(collection.lenght).toBe(1);
            expect(collection.pop()).toBe(1);
        })

        it('validates the amount of items after poping the last one', ()=>{
            var collection = new Stack<number>();
            collection.push(5);
            collection.push(10);
            collection.push(15);

            let value = collection.pop();
            expect(value).toBe(15);
            expect(collection.lenght).toBe(2);
        })
    })
});