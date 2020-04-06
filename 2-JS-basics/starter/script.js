//console.log('hello world again!');

/**************************
* Variables and data types
* */
/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;

console.log(fullAge);

var job;
console.log(job);

job = 'teacher';
console.log(job);

// Variable naming rules
var _3years = 3;
var johnMark = 'John and Mark';


// Unused vaiable names
// var 3years = 3;
// if = 23
// &any = 15;
//
*/
/**************************
 * Variables mutation and type correction
 * */
/*
var firstName = 'John';
var age = 28;

console.log(firstName + ' ' + age);

var job, isMarried;

job = 'teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Ish e merried? ' + isMarried);

// variable mutation
age = 'twenty eight';
job = 'driver';
*/
/*alert(firstName + ' is a ' + age + ' year old ' + job + '. Ish e merried? ' + isMarried);

var lastName = prompt('What is his last name?');

console.log(firstName + ' ' + lastName);*/


/************************************
* Basic operators
*/
/*
var now, yearJohn, yearMark;

now = 2018;
ageJohn = 28;
ageMark = 33;

// Math operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);
console.log(yearMark);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);

// Logical operators
var johnOlder = ageJohn > ageMark;
console.log(johnOlder);

johnOlder = ageJohn < ageMark;
console.log(johnOlder);

// typeof operator
console.log(typeof johnOlder);
console.log(typeof ageJohn);
console.log(typeof 'Mark is older than John');

var x;
console.log(typeof x);*/

/***************************
* Operator precedence
* */
/*
now = 2018;
yearJohn = 1989;
var fullAge = 18;

// Multiple operators
var isFullAge = now - yearJohn >= fullAge; //true
console.log(isFullAge);

// Grouping
ageJohn = now - yearJohn;
ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

// Multiple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);

// More operators
x *= 2; //x = x * 2;
console.log(x);

x += 10;
console.log(x);

//x = x + 1;
//x += 1;
//x ++;
x --;
console.log(x);*/


/*var firstName = 'John';
var civilStatus = 'single';
*/

/*if( civilStatus === 'married') {
    console.log(firstName + ' is married');
} else {
    console.log(firstName + ' will hopefully marry soon :)')
}*/

/*var isMarried = true;
if( isMarried) {
    console.log(firstName + ' is married');
} else {
    console.log(firstName + ' will hopefully marry soon :)')
}

var massMark = 75;
var massJohn = 90;

var heightMark = 1.70;
var heightJohn = 1.80;

function BMICalculator(mass, height) {
    return (mass / (height * height));
}

var bmiMark = BMICalculator(massMark, heightMark);
var bmiJohn = BMICalculator(massJohn, heightJohn);

if(bmiMark > bmiJohn) {
    console.log("Mark's BMI higher than John's");
} else {
    console.log("John's BMI higher than Mark's");
}*/

/*
var firstName = 'John';
var age = 20;

if(age < 13) {
    console.log(firstName + ' is a boy');
} else if (age >= 13 && age < 20) { // Between 13 and 20 === age >= 13 AND age < 20
    console.log(firstName + ' is a teenager');
} else if (age >= 20 && age < 30) { // Between 13 and 20 === age >= 13 AND age < 20
    console.log(firstName + ' is a young man');
} else {
    console.log(firstName + ' is a man');
}*/

/*****************************
 * The Ternary Operator and Switch Statements // hármas operátor
 */

/*var firstName = 'John';
var age = 16;

// ternary operator
age >= 18 ? console.log(firstName + ' drinks beer')
: console.log(firstName + ' drinks juice');

var drink = age >= 18 ? 'beer' : 'juice';

console.log(firstName + ' drinks ' + drink);*/

/*if (age >= 18) {
    var drink = 'beer';
} else {
    var drink = 'jiuce';
}*/

// switch statement

/*var job = 'instructor';
switch (job){
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teachers kids how to code');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites');
        break;
    default:
        console.log(firstName + ' does something else');
}


age = 20;
switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man');
        break;
    default:
        console.log(firstName + ' is a man');
}*/

/*****************************
 * Truthy and Falsy values and equality operators
 */

// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values

/*var height;

height = 23;

if (height || height === 0) {
    console.log('Variable is defined')
} else {
    console.log('Variable Has NOT been defined')
}

// Equality operators
if (height == '23') {
    console.log('The == operator does type correction!')
}*/


/*****************************
 * Functions
 */

/*function  calculateAge (birthYear) {
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageMike, ageJane);


function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;

    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' is already retired.');
    }
}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');*/

/*****************************
 * Function Statements and Expressions
 */

//function declaration
//function whatDoYouDo(job, firstName) {}

//function expression
/*var whatDoYouDo = function (job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName + ' drives a cab in Lisbon';
        case 'designer':
            return firstName + ' designs beautiful websites';
        default:
            return firstName + ' does something else';
    }
};

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));*/

/*****************************
 * Arrays
 */

// Initialize new array
/*var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names);
console.log(names.length);

names[1] = 'Ben';
console.log(names);

//names[5] = 'Mary';
// Mutate array data
names[names.length] = 'Mary';
console.log(names);

// Different data types
var john = ['John', 'Smith', 1990, 'teacher', false];

john.push('blue');
console.log(john); // ["John", "Smith", 1990, "teacher", false, "blue"]

john.unshift('Mr');
console.log(john); // ["Mr", "John", "Smith", 1990, "teacher", false, "blue"]

john.pop();
john.pop();
console.log(john); // ["Mr", "John", "Smith", 1990, "teacher"]

john.shift();
console.log(john); // ["John", "Smith", 1990, "teacher"]

console.log(john.indexOf(1990)); // 2

console.log(john.indexOf(23)); // -1

console.log(john.indexOf('designer')); // -1

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner);

john[3] = 'designer';
isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner);


///////////////

/*var bills = [124,48,268];

function tipCalculator(bill) {
    var tip;
    if(bill < 50) {
        tip = bill * 0.2
    } else if( 50 <= bill && bill <= 200) {
        tip = bill * 0.15;
    } else if(bill > 200){
        tip = bill * 0.1;
    }

    return tip;
}

function finalPaid(bill){
    return bill + tipCalculator(bill);
}

var tips = [tipCalculator(bills[0]), tipCalculator(bills[1]), tipCalculator(bills[2])];
var fullBills = [finalPaid(bills[0]), finalPaid(bills[1]), finalPaid(bills[2])];

console.log(tips);
console.log(fullBills);*/

/*****************************
 * Objects and properties
 */

// Object literal
/*var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};

console.log(john);
console.log(john.firstName);    // John
console.log(john['lastName']);  // Smith
var x = 'birthYear';
console.log(john[x]);           // 1990

john.job = 'designer';
john['isMarried'] = true;

console.log(john);


// new Object syntax
var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';
console.log(jane);*/

/*****************************
 * Objects and methods
 */

/*var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function () {
        this.age = 2018 - this.birthYear;
    }
};

console.log(john.calcAge());

//john.calcAge();

console.log(john);*/

/*****************************
 * Loops and iteration
 */

/*console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log(1);
console.log(1);*/


/*for ( var i = 0; i < 10; i+= 2) {
    console.log(i);
}*/

// i = 0, 0 < 10 TRUE, log i to console, i++
// i = 1, 1 < 10 TRUE, log i to console, i++
// ...
// i = 9, 9 < 10 TRUE, log i to console, i++
// i = 10, 10 < 10 FALSE, exit the loop!

/*for ( var j = 1; j < 20; j+= 2) {
    console.log(j);
}*/

// var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];

/*console.log(john[0]);
console.log(john[1]);
console.log(john[2]);
console.log(john[3]);
console.log(john[4]);*/

/*
for (var i = 0; i < john.length; i++) {
    console.log(john[i]);
}

//while loop
var i = 0;
while(i <john.length) {
    console.log(john[i]);
    i++;
}
*/

// continue and break statements
/*var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') continue;
    console.log(john[i]);
}

for (var i = 0; i < john.length; i++) {
    if (typeof john[i] !== 'string') break;
    console.log(john[i]);
}



// looping backwards
for (var i = john.length - 1; i >= 0; i--){
    console.log(john[i]);
}*/
