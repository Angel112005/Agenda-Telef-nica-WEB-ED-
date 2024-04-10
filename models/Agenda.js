// import { Queue } from "../models/Queue.js";
import { Queue } from "./Queue.js";

export class Agenda {
    constructor() {
        this.contacts = new Queue();
    }

    addContact(contact) {
        this.contacts.enqueue(contact);
    }

    removeContact() {
        return this.contacts.dequeue();
    }

    getContactCount() {
        return this.contacts.getSize();
    }
}
