class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    addFirst(value) {
        const newNode = new Node(value);

        if (this.head === null) {
            this.head = newNode;
            return;
        }

        newNode.next = this.head;
        this.head = newNode;
    }

    addLast(value) {
        const newNode = new Node(value);

        if (this.head === null) {
            this.head = newNode;
            return;
        }

        let dummy = this.head;

        while (dummy.next !== null) {
            dummy = dummy.next;
        }

        dummy.next = newNode;
    }

    deleteFirst() {
        if (this.head === null) {
            return;
        }

        this.head = this.head.next;
    }

    deleteLast() {
        if (this.head === null) {
            return;
        }

        if (this.head.next === null) {
            this.head = null;
            return;
        }

        let dummy = this.head;

        while (dummy.next.next !== null) {
            dummy = dummy.next;
        }

        dummy.next = null;
    }

    find(val) {
        let dummy = this.head;

        while (dummy !== null) {
            if (dummy.value === val) {
                return true;
            }

            dummy = dummy.next;
        }

        return false;
    }

    delete(val) {
        if (this.head === null) {
            return;
        }

        if (this.head.value === val) {
            this.head = this.head.next;
            return;
        }

        let dummy = this.head;

        while (dummy.next !== null) {
            if (dummy.next.value === val) {
                dummy.next = dummy.next.next;
                return;
            }

            dummy = dummy.next;
        }
    }

    print() {
        let dummy = this.head;
        let res = "";

        while (dummy !== null) {
            res += dummy.value + " -> ";
            dummy = dummy.next;
        }

        res += "null";
        console.log(res);
    }
}


// Testing

const list = new LinkedList();

console.log("Initial empty list:");
list.print();

console.log("Adding elements:");
list.addLast(10);
list.addLast(20);
list.addLast(30);
list.print();

console.log("After addFirst(5):");
list.addFirst(5);
list.print();

console.log("After deleteFirst():");
list.deleteFirst();
list.print();

console.log("After deleteLast():");
list.deleteLast();
list.print();

console.log("Find 20:", list.find(20));
console.log("Find 100:", list.find(100));

console.log("After delete(20):");
list.delete(20);
list.print();