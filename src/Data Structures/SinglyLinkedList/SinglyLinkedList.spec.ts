import { SinglyLinkedList } from "./SinglyLinkedList";

describe('Singly Linked List: ', () => {
    describe('Fails when trying to: ', () => {
        var collection = new SinglyLinkedList<number>();

        it('Iterate an empty collection', () => {
            expect(() => collection.lookupByIndex(1)).toThrow(Error);
        });

        it('Remove last item of an empty collection', () => {
            expect(() => collection.pop()).toThrow(Error);
        });

    });

    describe('Is Capable of Adding and Recovering Items: ', () => {
        var collection = new SinglyLinkedList<number>();
        collection.push(5);
        collection.push(10);

        it('By Index', () => {
            let receivedIndex = collection.lookupByValue(10);
            expect(receivedIndex).toBe(1);
        });

        it('By Value', () => {
            let receivedValue = collection.lookupByValue(5);
            expect(receivedValue).toBe(0);
        });
    });

    it('Is Capable of Removing Last Item', () => {
        var collection = new SinglyLinkedList<number>();
        collection.push(5);
        collection.push(10);
        collection.push(15);
        collection.push(20);

        collection.pop();
        expect(()=> collection.lookupByIndex(3)).toThrow(Error);
    })
});