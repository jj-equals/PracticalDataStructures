import { BinarySearchTree } from "./BinarySearchTree"

describe('BinarySearchTree: ',()=>{
    it("Should insert items to the left", ()=>{
        let tree = new BinarySearchTree<number>();

        tree.insert(20);
        tree.insert(15);
        tree.insert(10);

        expect(tree.contains(20)).toBe(true);
        expect(tree.contains(15)).toBe(true);
        expect(tree.contains(10)).toBe(true);
    })

    it("Should insert items to the right", ()=>{
        let tree = new BinarySearchTree<number>();

        tree.insert(20);
        tree.insert(25);
        tree.insert(30);

        expect(tree.contains(20)).toBe(true);
        expect(tree.contains(25)).toBe(true);
        expect(tree.contains(30)).toBe(true);
    })

    it("Should not find inexistent item", ()=>{
        let tree = new BinarySearchTree<number>();
        tree.insert(20);
        expect(tree.contains(30)).toBe(false);
    })

    it("Should not find item in empty Tree",()=>{
        let tree = new BinarySearchTree<number>();
        expect(tree.contains(30)).toBe(false);
    })
})