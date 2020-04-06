///////////////////////////////////////
// Lecture: Hoisting

// functions
/*
calculateAge(1965);

function calculateAge(year) {
    console.log(2016 - year);
}
*/
// calculateAge(1990);

/*
// retirement(1956); //doesn't work

var retirement = function (year) {
    console.log(65 - (2016 - year));
};

retirement(1990);*/
/*
// variables
console.log(age);   // undefined
var age = 23;
console.log(age);   // 23


function foo() {
    console.log(age);   // undefined
    var age = 65;
    console.log(age);
}
foo();              // 65
console.log(age);   // 23

*/
///////////////////////////////////////
// Lecture: Scoping


// First scoping example
/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c); // Hello!Hi!Hey!
    }
}
*/
// Example to show the differece between execution stack and scope chain
/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    //console.log(a + b + c + d); // Uncaught ReferenceError: b is not defined

    console.log(a + d); // Uncaught ReferenceError: b is not defined
}


*/

///////////////////////////////////////
// Lecture: The this keyword

// console.log(this);

/*calculationAge(1985);

function calculationAge(year){
    console.log(2016 - year);
    console.log(this);          // window object
}*/


var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function () {
        console.log(this);                      // john object
        console.log(2016 - this.yearOfBirth);   // 26

        /*function innerFunction() {
            console.log(this);                  // window object
        }
        innerFunction();*/
    }
};

john.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};

mike.calculateAge = john.calculateAge;
mike.calculateAge();


