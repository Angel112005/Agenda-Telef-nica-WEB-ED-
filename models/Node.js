export class Node {
    data
    next
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}