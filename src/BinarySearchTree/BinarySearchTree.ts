import { IBinarySearchTree } from "../IBinarySearchTree";

class Node<T> {
    private _value: T;

    public get value(): T {
        return this._value;
    }

    public left: Node<T> | null = null;

    public right: Node<T> | null = null;

    constructor(value: T) {
        this._value = value;
    }

}

export class BinarySearchTree<T> implements IBinarySearchTree<T> {
    private root: Node<T> | null = null;

    public insert(value: T): void {
        if (!this.root) {
            this.root = new Node(value);
            return;
        }

        let temp = this.root;
        let item = new Node(value);

        while (true) {
            //Discard duplicates
            if (item.value === temp.value) {
                return;
            }

            //Search open position at the left
            if (item.value < temp.value) {
                if (!temp.left) {
                    temp.left = item;
                    return;
                }
                temp = temp.left;
            }

            //Search open position at the right
            if (item.value > temp.value) {
                if (!temp.right) {
                    temp.right = item;
                    return;
                }
                temp = temp.right;
            }
        }
    }

    public contains(value: T): boolean {
        if (!this.root) {
            return false;
        }

        let temp = this.root;
        while (true) {
            if (value == temp.value) {
                return true;
            }
            if (value < temp.value) {
                if (!temp.left) {
                    return false;
                }
                temp = temp.left;
            }
            if (value > temp.value) {
                if (!temp.right) {
                    return false;
                }
                temp = temp.right;
            }
        }
    }
}