'use strict'

const Queue = require('./queue');

function peek(queue) { //works
	let currentNode = queue.top;
	if (currentNode === null) {
		return null;
	}
	return currentNode.data
};

function display(queue) { //works prints out last to first
	let currentNode = queue.top;
	while (currentNode !== null) {
		console.log(currentNode.data); //needs console.log to work
		currentNode = currentNode.next;
	}
};




// ------------------------------ MAIN
function main() {
	let starTrekQ = new Queue();

	starTrekQ.enqueue('Kirk');
	starTrekQ.enqueue('Spock');
	starTrekQ.enqueue('Uhura');
	starTrekQ.enqueue('Sulu');
	starTrekQ.enqueue('Checkov');
	console.log(starTrekQ);
};
main();
