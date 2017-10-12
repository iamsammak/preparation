// filterLinkedList
//
// Write a double-ended LinkedList class in JavaScript.
//
// You should have a Link class
// It should keep a reference to next and prev.
// You should have a LinkedList class
// It should have first and last methods to return the first/last links in the list, or undefined if the list is empty.
// It should have push and pop methods.
// You should write a remove method that takes in a value and removes the first link found with that value.
// Given a linked list of integers and an integer value, delete every node of the linkedlist containing that value. Use JavaScript.
//
// Solution

class Link {
  constructor(value) {
    this.next = null;
    this.prev = null;
    this.value = value;
  }
}

class LinkedList {
  constructor() {
    this.head = new Link();
    this.tail = new Link();
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  isEmpty() {
    return this.head.next === this.tail;
  }

  first() {
    if (this.isEmpty()) return null;
    return this.head.next;
  }

  last() {
    if (this.isEmpty()) return null;
    return this.tail.prev;
  }

  find(val) {
    let link = this.first();
    while (link) {
      if (link.value === val) {
        return link;
      }

      link = link.next;
    }
  }

  remove(val) {
    let nodeToRemove = this.find(val);
    if (!nodeToRemove) return;
    let before = nodeToRemove.prev;
    let after = nodeToRemove.next;

    before.next = after;
    after.prev = before;
    nodeToRemove.prev = null;
    nodeToRemove.next = null;

    return nodeToRemove;
  }

  push(val) {
    const link = new Link(val);
    let last = this.tail.prev;
    last.next = link;
    link.prev = last;
    link.next = this.tail;
    this.tail.prev = link;
  }

  pop() {
    if (this.isEmpty()) return;
    const last = this.last();
    const newLast = last.prev;

    newLast.next = this.tail;
    this.tail.prev = newLast;
    last.next = null;
    last.prev = null;
    return last;
  }

  removeAll(val) {
    let link = this.head.next;

    while (link !== this.tail) {
      if (link.value === val) {
        let before = link.prev;
        let after = link.next;

        before.next = after;
        after.prev = before;
        link.prev = null;
        link.next = null;
        link = after;
      } else {
        link = link.next;
      }
    }
  }
}
