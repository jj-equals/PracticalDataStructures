import { Queue } from "./Queue";

describe('Queue: ', () => {
    describe('Fails when trying to: ', () => {
        var collection = new Queue<number>();

        it('dequeue an empty queue', () => {
            expect(() => collection.dequeue()).toThrow(Error);
        });
    });

    describe('Succed when trying to: ',()=>{
        it('enqueuing a new item onto the end of the queue', ()=>{
            var collection = new Queue<number>();

            collection.enqueue(1);
            expect(collection.lenght).toBe(1);
            expect(collection.dequeue()).toBe(1);
        })

        it('validates the amount of items after dequeueing the first one', ()=>{
            var collection = new Queue<number>();
            collection.enqueue(5);
            collection.enqueue(10);
            collection.enqueue(15);

            let value = collection.dequeue();
            expect(value).toBe(5);
            expect(collection.lenght).toBe(2);
        })
    })
});