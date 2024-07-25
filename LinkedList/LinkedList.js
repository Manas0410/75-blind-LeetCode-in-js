class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Insert a node at the end of the list at head
  addAtFirstPosition(data) {
    let newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  // Insert a node at the end of the list
  addAtLastPosition(data) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }

    let current = this.head;

    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  //   find the size

  size() {
    let current = this.head;
    let count = 0;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  // Insert a node at a given position in the list
  addAtPosition(data, position) {
    if (position < 0 || position > this.size()) {
      throw new Error("Invalid position");
    }

    let newNode = new Node(data);
    if (position === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }
    let current = this.head;
    for (let i = 0; i < position - 1; i++) {
      current = current.next;
    }
    newNode.next = current.next;
    current.next = newNode;
  }

  // Delete a node at top position in the list

  removeTopNode() {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
  }

  // Delete a node at last position in the list

  removeLastNode() {
    if (!this.head) {
      return;
    }

    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }
    current.next = null;
  }

  // Delete a node at a given position in the list
  removeAtPosition(position) {
    if (position < 0 || position > this.size()) return;

    if (position === 0) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    for (let i = 0; i < position - 1; i++) {
      current = current.next;
    }
    current.next = current.next.next;
  }

  // Print the list
  printList() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
    console.log("NULL");
  }
}

// ref forward ref÷
// synthetic events

//  234 206 237 19 2
