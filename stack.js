'use strict'

// STACK

class _Node {
	constructor(data, next) {
		this.data = data;
		this.next = next;
	}
}

class Stack {  //FIFO
	constructor() {
		this.top = null;
	}
	push(data) {  //O(1)
		//if the top of the stack is empty, then the data will be the
		//top of the stack
		if (this.top === null) {
			this.top = new _Node(data, null);
			return this.top;
		}

		//if the top already has something then create a new node
		//add data to the new node
		// have the pointer point to the top
		const node = new _Node(data, this.top);
		this.top = node;
	}
	pop() {  //O(1)
		//in order to remove the top of the stack, you have to point
		//the pointer to the next item and that next item becomes the
		//top of the stack
		const node = this.top;
		this.top = node.next;
		return node.data;
	}
}