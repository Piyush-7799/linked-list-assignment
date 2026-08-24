nano README.md# Linked List Assignment

**Name:** Piyush Kumar

**Assignment Title:** Create a Linked List with JavaScript

## Short Explanation

A linked list is a linear data structure made up of nodes. Each node contains a value and a reference to the next node.

In this implementation, `head` points to the first node and `next` points to the next node.

## Methods Implemented

1. `addFirst(value)` - Adds a node at the beginning.
2. `addLast(value)` - Adds a node at the end.
3. `deleteFirst()` - Deletes the first node.
4. `deleteLast()` - Deletes the last node.
5. `print()` - Prints the linked list.
6. `find(value)` - Finds a value in the linked list.
7. `delete(value)` - Deletes the first node containing the given value.

## Example Output

```text
Initial empty list:
null

Adding elements:
10 -> 20 -> 30 -> null

After addFirst(5):
5 -> 10 -> 20 -> 30 -> null

After deleteFirst():
10 -> 20 -> 30 -> null

After deleteLast():
10 -> 20 -> null

Find 20: true
Find 100: false

After delete(20):
10 -> null
```

## Technology Used

* JavaScript
* Node.js
* Linked List

## Repository Structure

```text
linked-list-assignment/
│
├── linkedlist.js
└── README.md
