'use strict'
// STACK
class _Node {
	constructor(data, next) {
		this.data = data;
		this.next = next;
	}
}
class Stack {  //LIFO
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

function peek(stack) { //works
	let currentNode = stack.top;
	if (currentNode === null) {
		return null;
	}
	return currentNode.data
};

function display(stack) { //works prints out last to first
	let currentNode = stack.top;
	while (currentNode !== null) {
		console.log(currentNode.data);
		currentNode = currentNode.next;
	}
	// return currentNode.data
};

// function display(stack) { // prints out first to last
// 	let currentNode = stack.top;
// 	while (currentNode !== null) {
// 		console.log(currentNode.data);
// 		currentNode = currentNode.next;
// 	}
// 	// return currentNode.data
// };


// console.log(starTrek, 'where no man has gone')
// console.log(starTrek, 'where no man has gone')
// console.log(currentNode.data, 'Landrew part of the body')
//++++++++++++++++++++ MAIN +++++++++++++++++++++++++++=
function main() {

	let starTrek = new Stack();

	starTrek.push('Kirk');
	starTrek.push('Spock');
	starTrek.push('McCoy');
	starTrek.push('Scotty')
	// console.log(starTrek, 'out in space - first console.log in main')
	peek(starTrek);  //need to console log to see
	// console.log(peek(starTrek), 'Live long and prosper');
	display(starTrek); // don't need console to see

}
main();

