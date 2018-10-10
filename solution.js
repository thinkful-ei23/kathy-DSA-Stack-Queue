/*
Exercise #1
A palindrome is a word, phrase, or number that is spelled the same forward and backward.
For example,dad is a palindrome; A man, a plan, a canal: Panama� is a palindrome if
you take out the spaces and ignore the punctuation; and 1,001 is a numeric palindrome.
We can use a stack to determine whether or not a given string is a palindrome.
Write a function that takes a string of letters and returns true or false to determine
whether it is palindromic. For example:
console.log(is_palindrome("dad"));
console.log(is_palindrome("A man, a plan, a canal: Panama"));
console.log(is_palindrome("1001"));
// true, true, true
*/
function isPalindrome(s) {
	s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
	const stack = new Stack();

	for (let i = 0; i < s.length; i++) {
		stack.push(s.charAt(i));
	}

	for (let i = 0; i < s.length; i++) {
		if (stack.pop() !== s.charAt(i)) {
			return false;
		}
	}

	return true;
}

// true, true, true
/*console.log(isPalindrome("dad"));
console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("1001"));*/

// Simple
function parenthesesMatch(s) {
	const stack = new Stack();

	for (let i = 0; i < s.length; i++) {
		const char = s.charAt(i);
		if (char === '(') {
			stack.push(char);
		}
		else if (char === ')') {
			const candidate = stack.peek();
			if (!candidate) {
				return false;
			}
			stack.pop();
		}
	}

	if (stack.peek()) {
		return false;
	}
	return true;
}



// Multiple
function parenthesesMatch(s) {
	const stack = new Stack();

	const brackets = {
		'(': ')',
		'{': '}',
		'[': ']'
	};

	const openBrackets = Object.keys(brackets);
	const closeBrackets = Object.values(brackets);

	for (let i = 0; i < s.length; i++) {
		const char = s.charAt(i);
		if (openBrackets.includes(char)) {
			stack.push(char);
		}
		else if (closeBrackets.includes(char)) {
			const candidate = stack.peek();
			if (brackets[candidate] !== char) {
				return false;
			}
			stack.pop();
		}
	}

	if (stack.peek()) {
		return false;
	}
	return true;
}

// With strings
function parenthesesMatch(s) {
	const stack = new Stack();

	const brackets = {
		'(': ')',
		'{': '}',
		'[': ']'
	};

	const openBrackets = Object.keys(brackets);
	const closeBrackets = Object.values(brackets);

	const quotes = ['"', "'"];

	let inQuotes = false;

	for (let i = 0; i < s.length; i++) {
		const char = s.charAt(i);

		if (quotes.includes(char)) {
			if (inQuotes) {
				const candidate = stack.peek();
				if (candidate === char) {
					stack.pop();
					inQuotes = false;
				}
			}
			else {
				stack.push(char);
				inQuotes = true;
			}
		}
		else if (openBrackets.includes(char) && !inQuotes) {
			stack.push(char);
		}
		else if (closeBrackets.includes(char) && !inQuotes) {
			const candidate = stack.peek();
			if (brackets[candidate] !== char) {
				return false;
			}
			stack.pop();
		}
	}

	if (stack.peek()) {
		return false;
	}
	return true;
}

console.log(parenthesesMatch("(1 + 2) + 3"));
console.log(parenthesesMatch("(1 + 2) + 3)"));
console.log(parenthesesMatch(")1 + 2) + 3"));
console.log(parenthesesMatch("(1 + 2 + (3)"));
console.log(parenthesesMatch("([({})])"));
console.log(parenthesesMatch("([({)}])"));
console.log(parenthesesMatch("'{(\"'"));
console.log(parenthesesMatch("[{'('}('')]"));
console.log(parenthesesMatch("[{'(\"}('')]"));

/***********************/

function squareDance(queue) {
	const spareMen = new Queue();
	const spareWomen = new Queue();

	const pairs = new Queue();

	let personA, personB;
	while (personA = queue.dequeue()) {
		if (personA.gender === 'male') {
			if (personB = spareWomen.dequeue()) {
				pairs.enqueue([personA, personB]);
			}
			else {
				spareMen.enqueue(personA);
			}
		}

		else if (personA.gender === 'female') {
			if (personB = spareMen.dequeue()) {
				pairs.enqueue([personA, personB]);
			}
			else {
				spareWomen.enqueue(personA);
			}
		}
	}
	return pairs;
}

const queue = new Queue();
queue.enqueue({
	name: 'Gwendolyn Wilderman',
	gender: 'female'
});
queue.enqueue({
	name: 'Wilbur Brakus',
	gender: 'male'
});
queue.enqueue({
	name: 'Vallie Howell',
	gender: 'female'
});
queue.enqueue({
	name: 'Nova Doyle',
	gender: 'female'
});
queue.enqueue({
	name: 'Monica Turcotte',
	gender: 'female'
});
queue.enqueue({
	name: 'Corine Smith',
	gender: 'female'
});
queue.enqueue({
	name: 'Jamir Sporer',
	gender: 'male'
});

squareDance(queue).display();

/******************************/
function ophidianBank() {
	const queue = new Queue();
	// Assumption: New people join the queue at the same rate they are seen

	for (var i = 0; i < 100; i++) {
		console.log('Person joined line');
		queue.enqueue({
			angriness: 0 // How fed up the person is with doing their paperwork
		});

		const person = queue.dequeue();
		if (Math.random() < 0.25) {
			console.log(`Person with angriness ${person.angriness} sent to the back`);
			person.angriness++;
			queue.enqueue(person);
		}
		else {
			console.log(`Person with angriness ${person.angriness} processed`);
		}
	}
}

ophidianBank();

/*
Sort Stack
Write a program to sort a stack such that the smallest items are on the top. You can use
an additional temporary stack, but you may not copy the elements into any other data structure
(such as an array).
*/

//*******************************************************
function isEmpty(s) {
	return s.top === null;
}
function sortStack(originalStack) {
	let newStack = new Stack();
	console.log(isEmpty(originalStack));
	while (!isEmpty(originalStack)) {
		let temp = originalStack.pop();
		console.log("temp here " + temp);
		console.log("Peek here " + newStack.peek());
		while (!isEmpty(newStack) && (newStack.peek() > temp)) {
			originalStack.push(newStack.pop());
		}
		newStack.push(temp);
		console.log("new stack..." + newStack.peek());

	}

	while (!isEmpty(newStack)) {
		originalStack.push(newStack.pop());

	}

}

/*
Queue Implementation using Stack
A common way to implement a queue is to use a doubly linked list.
Using the concept of queue in mind, implement a queue using 2 stacks and no other data structure.
(You are not allowed to use a doubly linked list or array. Use the stack implementation
with Linked list from your today’s reading material)
*/

class Queue {
	constructor() {
		//this.top = null;
		this.oldStack = new Stack();
		this.newStack = new Stack();
	}
	eneque(item) {
		this.oldStack.push(item);
	}

	dequeue() {
		this._reverseElement();
		return this.newStack.pop();
	}
	peek() {
		this._reverseElement();
		return this.newStack.peek();
	};
	_reverseElement() {
		//console.log(`NewStack is empty is>>>>>${isEmpty(this.newStack)}`);
		//console.log(`NewStack is empty is>>>>>${this.oldStack.isEmpty()}`);
		if (isEmpty(this.newStack)) {
			while (!isEmpty(this.oldStack)) {
				this.newStack.push(this.oldStack.pop());
			}
		}
	}
}