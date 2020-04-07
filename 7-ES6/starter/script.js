// Lecture: let and const

/*
// ES5
var name5 = 'Jane Smith';
var age5 = 21;

name5 = 'Jane Miller';
console.log(name5);

// ES6
//const name6 = 'Jane Smith';
let name6 = 'Jane Smith';
let age6 = 23;
name6 = 'Jane Miller';
console.log(name6);
*/

// ES5
function driversLicence5(passedTest) {
	//console.log(firstName); undefined
	if(passedTest) {
		var firstName = 'John';
		var yearOfBirth = 1990;
		
		console.log(firstName + ', born in ' + yearOfBirth + ' is now officially allowed to drive a car.');
	}
	
	console.log(firstName + ', born in ' + yearOfBirth + ' is now officially allowed to drive a car.');
}

driversLicence5(true);

// ES6
function driversLicence6(passedTest) {
	//console.log(firstName); ReferenceError firstName is not defined
	//let firstName;
	//const yearOfBirth = 1990;
	
	if(passedTest) {
		let firstName = 'John';
		const yearOfBirth = 1990;
		//firstName = 'John';
		
		console.log(firstName + ', born in ' + yearOfBirth + ' is now officially allowed to drive a car.');
	}
	
	//console.log(firstName + ', born in ' + yearOfBirth + ' is now officially allowed to drive a car.');
	// firstName is not defined
}

driversLicence6(true);

let i = 23;
for (let i = 0; i < 5; i++) {
	console.log(i);//0 1 2 3 4
}
console.log(i);//23

var j = 23;
for (var i = 0; i < 5; i++) {
	console.log(i);//0 1 2 3 4
}
console.log(i);//5

////////////////////////////
// Lecture: Blocks and IIFEs

// ES6
{
	const a = 1;
	let b = 2;
	var c = 3;
}

//console.log(a + b); //ReferenceError a is not defined
console.log(c);

// ES5
(function () {
	var c = 3;
})();

//console.log(c); //ReferenceError a is not defined


///////////////////
// Lecture: Strings
let firstName = 'John';
let lastName = 'Smith';
const yearOfBirth = 1990;

function calcAge(year) {
	return 2016 - year;
}

// ES5
console.log('This is ' + firstName + ' ' + lastName + '. He was born in ' + yearOfBirth + '. Today, he is ' + calcAge(yearOfBirth) + ' years old.');

// ES6
console.log(`This is ${firstName} ${lastName}. He was born in ${yearOfBirth}.  Today, he is ${calcAge(yearOfBirth)} years old.`);

const n = `${firstName} ${lastName}`;
console.log(n.startsWith('J')); //true
console.log(n.startsWith('n')); //false
console.log(n.endsWith('th'));  //true
console.log(n.endsWith('Sm'));  //false
console.log(n.includes(' '));   //true
console.log(n.includes('oh'));   //true

console.log(firstName.repeat(5)); //JohnJohnJohnJohnJohn
console.log(`${firstName}`.repeat(5)); //John John John John John

///////////////////////////
// Lecture: Arrow functions
const years = [1990, 1965, 1982, 1937];

// ES5
var ages5 = years.map(function (el) {
	return 2016 - el;
});
console.log(ages5);

// ES6
let ages6 = years.map(el => 2016 - el);
console.log(ages6);

ages6 = years.map((el, index) => `Age element ${index + 1} : ${2016 - el}.`);
console.log(ages6);

ages6 = years.map((el, index) => {
	const now = new Date().getFullYear();
	const age = now - el;
	return `Age element ${index + 1} : ${age}.`
});
console.log(ages6);

/////////////////////////////
// Lecture: Arrow functions 2

// ES5
var box5 = {
	color: 'green',
	position: 1,
	clickMe: function() {
		var self = this;
		document.querySelector('.green').addEventListener('click',
			function () {
				//var str = 'This is box number ' + this.position + ' and it is ' + this.color;
				// This is box number undefined and it is undefined
				
				var str = 'This is box number ' + self.position + ' and it is ' + self.color;
				// This is box number 1 and it is green
				alert(str);
			})
	}
};
//box5.clickMe();

// ES6
const box6 = {
	color: 'green',
	position: 1,
	clickMe: function() {
		document.querySelector('.green').addEventListener('click',
			() => {
				let str = 'This is box number ' + this.position + ' and it is ' + this.color;
				alert(str);
			})
	}
};
box6.clickMe();

/*
const box66 = {
	color: 'green',
	position: 1,
	clickMe: () => {
		document.querySelector('.green').addEventListener('click',
			() => {
				let str = 'This is box number ' + this.position + ' and it is ' + this.color;
				alert(str);
			})
	}
};
box66.clickMe();
 */

function Person(name) {
	this.name = name;
}

// ES5
Person.prototype.myFriends5 = function (friends) {
	var arr = friends.map(function (el) {
		return this.name + ' is friends with ' + el;
	}.bind(this));
	
	console.log(arr);
};

var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends5(friends);

// ES6
Person.prototype.myFriends6 = function (friends) {
	let arr = friends.map(el => `${this.name} is friends with ${el}`);
	console.log(arr);
};

new Person('Mike').myFriends6(friends);

//////////////////////////
// Lecture: Destructuring


// ES5

var john = ['John', 26];
//var name = john[0];
//var age = john[1];

// ES6
const [name, year] = ['John', 26];
console.log(name);
console.log(year);

const obj = {
	firstName: 'John',
	lastName: 'Smith'
};

const {firstName, lastName} = obj;
console.log(firstName);
console.log(lastName);

const {firstName: a, lastName: b} = obj;
console.log(a);
console.log(b);

function calcAgeRetirement(year) {
	const age = new Date().getFullYear() - year;
	return [age, 65 - age];
}

const [age2, retirement] = calcAgeRetirement(1998);
console.log(age2);
console.log(retirement);