
import { Node } from "./Node.js"; 

export class Queue {
    constructor() {
        this.front = null;
        this.back = null;
        this.size = 0;
    }

    enqueue(data) {
        let newNode = new Node(data);
        if (!this.front) {
            this.front = this.back = newNode;
        } else {
            this.back.next = newNode;
            this.back = newNode;
        }
        this.size++;
    }

    dequeue() {
        if (!this.front) return null;
        let data = this.front.data;
        this.front = this.front.next;
        this.size--;
        if (!this.size) this.back = null;
        return data;
    }

    isEmpty() {
        return this.size === 0;
    }

    peek() {
        if (!this.front) return null;
        return this.front.data;
    }

    getSize() {
        return this.size;
    }
}