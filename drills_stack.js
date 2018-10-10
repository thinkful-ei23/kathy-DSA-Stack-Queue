const Stack = require('./stack');

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
		console.log(currentNode.data); //needs console.log to work
		currentNode = currentNode.next;
	}
};

function is_palindrome(str) { //works
	str = (str).replace(/[^a-zA-Z0-9]/g, "");
	console.log(str, 'original string');
	let palForward = new Stack();

	for (let i = 0; i < str.length; i++) {
		let forwardLetter = str.charAt(i);
		console.log(forwardLetter)
		palForward.push(forwardLetter);
	}
	for (let c = 0; c < str.length; c++) {
		let forwardLetter = str.charAt(c);
		if (forwardLetter !== palForward.pop()) {
			return false;
		}
	}
	return true;
};

//Matching parentheses
function match(math) {
	//separate like charAt in palindrome
	//place in stack
	//use mystery code to match
}

//Sort Stack
function sort(stack) {
	let stackMix = new Stack();
	let tempStack = new Stack();
	let tempNode = stack.top;
	let tempTop = stack.pop();
	console.log(stackMix, 'where no woman has gone')

	while (tempNode > tempTop) {


	}
	// if (tempNode > tempTop) {
	// 	tempTop = tempStack.push(tempTop)
	// } else {
	// 	tempNode = tempStack.push(tempNode)
	// 	tempTop = tempNode
	// }
	// console.log(tempStack, 'where no man has gone')


	//smallest on top ... largest go first
	//pop top and hold in tempNode
	//pop new top and compare to tempNode
	//smaller goes into 2ndStack
	// largest is then in the tempNode
	//then reverse, compare temNode to popped top, largest goes into original stack
};
sort();

// console.log( , 'where no man has gone')
// console.log( , 'where no man has gone')
// console.log( , 'Landrew part of the body')
//++++++++++++++++++++ MAIN +++++++++++++++++++++++++++=
function main() {

	let starTrek = new Stack();

	starTrek.push('Kirk');
	starTrek.push('Spock');
	starTrek.push('McCoy');
	starTrek.push('Scotty')
	// console.log(starTrek, 'out in space - first console.log in main')
	// peek(starTrek);  //need to console log to see
	// console.log(peek(starTrek), 'Live long and prosper');
	// display(starTrek); // don't need console to see

	// starTrek.pop()
	// starTrek.pop()
	// console.log(starTrek, 'where no man has gone')

	// display(starTrek);

	// true, true, true, false, true
	// console.log(is_palindrome("DAD"));
	// console.log(is_palindrome("A man, a plan, a canal: Panama"));
	// console.log(is_palindrome("1001"));
	// console.log(is_palindrome("Tauhida"));
	// console.log(is_palindrome("madam i'm adam"));

	let stackMix = new Stack();

	stackMix.push(24);
	stackMix.push(34);
	stackMix.push(84);
	stackMix.push(64);
	stackMix.push(14);
	stackMix.push(4);
	stackMix.push(74);
	stackMix.push(94);
	stackMix.push(44);
	stackMix.push(54);
	// console.log(stackMix);
	// display(stackMix); console.log('display(stackMix) in function main()')




}
main();
