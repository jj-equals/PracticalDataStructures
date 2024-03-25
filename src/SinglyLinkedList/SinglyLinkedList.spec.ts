import { SinglyLinkedList } from "./SinglyLinkedList";


describe('Singly Linked List: ', () => {
    describe('Fails when trying to: ', () => {
        var collection = new SinglyLinkedList<number>();

        it('Iterate an empty collection', () => {
            expect(() => collection.get(1)).toThrow(Error);
        });

        it('Remove last position item of an empty collection', () => {
            expect(() => collection.pop()).toThrow(Error);
        });

        it('Remove first position item of an empty collection', () => {
            expect(() => collection.shift()).toThrow(Error);
        });

    });

    describe('Is capable of adding items: ', () => {
        it("By pushing items to collection's last position", () => {
            var collection = new SinglyLinkedList<number>();
            collection.push(5);
            collection.push(10);

            let receivedValue = collection.get(1);
            expect(receivedValue).toBe(10);
        })

        it("By unshifting items to collection's first position", () => {
            var collection = new SinglyLinkedList<number>();
            collection.unshift(5);
            collection.unshift(10);

            let receivedValue = collection.get(0);
            expect(receivedValue).toBe(10);
        })
    })

    describe('Is capable of replacing items: ', () => {
        var collection = new SinglyLinkedList<number>();
        collection.push(5);
        collection.push(10);
        collection.push(15);
        collection.push(20);

        it("In the first position", () => {
            collection.set(0, 1);
            expect(collection.get(0)).toBe(1);
        });

        it("In an intermediary position", () => {
            collection.set(2, 12);
            expect(collection.get(2)).toBe(12);
        });

        it("In the last position", () => {
            collection.set(3, 50);
            expect(collection.get(3)).toBe(50);
            expect(() => collection.get(4)).toThrow(Error);
        });
    })

    describe('Is capable of inserting items: ', () => {
        var collection = new SinglyLinkedList<number>();
        collection.push(5);
        collection.push(10);
        collection.push(15);
        collection.push(20);

        it("In the first position", () => {
            collection.insert(0, 1);
            expect(collection.get(0)).toBe(1);
            expect(collection.get(4)).toBe(20);
            expect(() => collection.get(5)).toThrow(Error);
        })

        it("In an intermediary position", () => {
            collection.insert(3, 99);
            expect(collection.get(3)).toBe(99);
        })
    })

    describe('Is capable of removing items: ', () => {
        it('By poping items of collection`s last position', () => {
            var collection = new SinglyLinkedList<number>();
            collection.push(5);
            collection.push(10);
            collection.push(15);
            collection.push(20);

            collection.pop();
            expect(() => collection.get(3)).toThrow(Error);
        });

        it('By shifting items on collection`s first position', () => {
            var collection = new SinglyLinkedList<number>();
            collection.unshift(5);
            collection.unshift(10);
            collection.unshift(15);
            collection.unshift(20);

            collection.shift();
            expect(() => collection.get(3)).toThrow(Error);
        });
    })

});