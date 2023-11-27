'use strict';

class Node {
  constructor(value, previous = null, next = null) {
    this.value = value;
    this.previous = previous;
    this.next = next;
  }
}

class DoubleLinkedList {
  constructor(capasity) {
    this.head = null;
    this.tail = null;
    this.capasity = capasity;
  }

  getSize() {
    let count = 0;
    let currentNode = this.head;

    while (currentNode) {
      count++;
      currentNode = currentNode.next;
    }

    return count;
  }

  getHead() {
    return this.head;
  }

  add(value) {
    const newNode = new DoubleLinkedList(value, this.head);

    if (this.head) {
      this.head.previous = newNode;
    }

    this.head = newNode;

    if (!this.tail) {
      this.tail = newNode;
    }
    return this;
  }


  remove(value) {
    if (!this.head) {
      return null;
    }

    let removeNode = null;
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === value) {
        removeNode = currentNode;

        if (removeNode === this.head) {
          this.head = removeNode.next;

          if (this.head) {
            this.head.previous = null;
          }

          if (removeNode === this.tail) {
            this.tail = null;
          }
        } else if (removeNode === this.tail) {
          this.tail = removeNode.previous;
          this.tail.next = null;
        } else {
          const previousNode = removeNode.previous;
          const nextNode = removeNode.next;
          previousNode.next = nextNode;
          nextNode.previous = previousNode;
        }
      }
      currentNode = currentNode.next;
    }
    return removeNode;
  }

  search(value) {
    if (!this.head) {
      return null;
    }

    let currentNode = this.head;

    while (currentNode) {
      if (value !== undefined && currentNode.value === value) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
    return null;
  }

  toArray() {
    const nodes = [];
    let currentNode = this.head;

    while (currentNode) {
      nodes.push(currentNode);
      currentNode = currentNode.next;
    }
    return nodes;
  }
}

const linkedList = new DoubleLinkedList();

linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.add(4);
linkedList.add(5);

console.log('Size:', linkedList.getSize());
console.log('Head:', linkedList.getHead());
console.log('Array:', linkedList.toArray());

linkedList.remove(3);

console.log('Size after remove:', linkedList.getSize());
console.log('List after remove:', linkedList.toArray());

linkedList.search(2)
console.log(linkedList.search());




