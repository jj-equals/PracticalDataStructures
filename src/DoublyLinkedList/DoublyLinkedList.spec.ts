import { DoublyLinkedList } from "./DoublyLinkedList";

describe('Singly Linked List: ', () => {
    describe('Fails when trying to: ', () => {
        var collection = new DoublyLinkedList<number>();

        it('Iterate an empty collection', () => {
            expect(() => collection.get(1)).toThrow(Error);
        });

        it('Remove last position item of an empty collection', () => {
            expect(() => collection.pop()).toThrow(Error);
        });

        it('Remove first position item of an empty collection', () => {
            expect(() => collection.shift()).toThrow(Error);
        });

        it('Insert item out of the items range', () => {
            expect(() => collection.insert(-1, 10)).toThrow(Error);
            expect(() => collection.insert(1, 10)).toThrow(Error);
        })
    })

    describe('Is capable of adding items: ', () => {
        it("By pushing items to collection's last position", () => {
            var collection = new DoublyLinkedList<number>();
            collection.push(5);
            collection.push(10);

            expect(collection.get(1)).toBe(10);
        })

        it("By unshifting items to collection's first position", () => {
            var collection = new DoublyLinkedList<number>();
            collection.unshift(5);
            collection.unshift(10);

            expect(collection.get(1)).toBe(5);
        })
    });

    describe('Is capable of removing items: ', () => {
        it("By 'poping' items of collection`s last position", () => {
            var collection = new DoublyLinkedList<number>();
            collection.push(5);
            collection.push(10);
            collection.push(15);
            collection.push(20);

            collection.pop();
            expect(collection.lenght).toBe(3);
        });

        it("By 'shifting' items on collection`s first position", () => {
            var collection = new DoublyLinkedList<number>();
            collection.unshift(5);
            collection.unshift(10);
            collection.unshift(15);
            collection.unshift(20);

            collection.shift();
            expect(collection.get(0)).toBe(15);
            expect(collection.lenght).toBe(3);
        });

        it("By 'removing' items on collection`s first position", () => {
            var collection = new DoublyLinkedList<number>();
            collection.push(5);
            collection.push(10);
            collection.push(15);

            collection.remove(0);
            expect(collection.get(0)).toBe(10);
            expect(collection.lenght).toBe(2);
        });

        it("By 'removing' items on collection`s last position", () => {
            var collection = new DoublyLinkedList<number>();
            collection.push(5);
            collection.push(10);
            collection.push(15);

            collection.remove(2);
            expect(collection.get(1)).toBe(10);
            expect(collection.lenght).toBe(2);
        });
    });
});