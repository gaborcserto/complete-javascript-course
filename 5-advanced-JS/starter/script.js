// Function constructor

/*var john = {
    name: 'John',
    yearOfBirth: 1990,
    job: 'teacher'
};*/
/*
var Person = function(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};

Person.prototype.calculateAge = function () {
    console.log(2016 - this.yearOfBirth);
};

Person.prototype.lastName = 'Smith';

var john = new Person('John', 1990, 'teacher');
var jane = new Person('Jane', 1969, 'designer');
var mark = new Person('Mark', 1948, 'retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);*/

/*
// Object.create
var personProto = {
  calculateAge: function () {
      console.log(2016 - yearOfBirth);
  }
};

var john = Object.create(personProto);
john.name = 'John';
john.yearOfBirth = 1990;
john.job = 'teacher';

var jane = Object.create(personProto, {
    name: { value: 'Jane'},
    yearOfBirth: { value: 1969},
    job: { value: 'designer'}
});
*/


// Primitives vs objects
/*
// Primitives
var a = 23;
var b = a;

a = 46;

console.log(a);     // 46
console.log(b);     // 23

// Objects
var obj1 = {
    name: 'John',
    age: 26
};

var obj2 = obj1;
obj1.age = 30;
console.log(obj1);  // 30
console.log(obj2);  // 30

// Functions
var age = 27;
var obj = {
    name: 'Jonas',
    city: 'Lisbon'
};

function change(a, b) {
    a = 30;
    b.city = 'San Francisco';
}

change( age, obj);
console.log(age);       // 27
console.log(obj.city);  // San Francisco
*/


// Passing functions as arguments
/*
var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(el) {
    return el >= 18;
}

function maxHearRate(el){

    if(el >= 18 && el <= 81) {
        return Math.round(206.9 - (0.67 * el));
    } else {
        return -1;
    }
}

var ages = arrayCalc(years, calculateAge);
console.log(ages);      // [26, 51, 79, 11, 18]

var fullAges = arrayCalc(ages, isFullAge);
console.log(fullAges);  // [true, true, true, false, true]

var rates = arrayCalc(ages, maxHearRate);
console.log(rates);     // [189, 173, 154, -1, 195]
*/



// Functions returning functions
/*
function interviewQuestion(job){
    if(job === 'designer') {
        return function (name) {
            console.log(name + ', can you please explain what UX design is?');
        }
    } else if (job === 'teacher') {
        return function (name) {
            console.log('What subject dou you teach, ' + name + '?');
        }
    } else {
        return function (name) {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');

teacherQuestion('John');    // What subject dou you teach, John?
designerQuestion('John');   // John, can you please explain what UX design is?
designerQuestion('Jane');   // Jane, can you please explain what UX design is?
designerQuestion('Mark');   // Mark, can you please explain what UX design is?
designerQuestion('Mike');   // Mike, can you please explain what UX design is?

interviewQuestion('teacher')('Mark');   // What subject dou you teach, Mark?
*/

// Immediately Invoked Function Expressions IIFE
/*
function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}
game();
*/
/*
(function () {
    var score = Math.random() * 10;
    console.log(score >= 5);
})();
// console.log(score);

(function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5);*/

// Closures

/*function retirement(retirementAge) {
    var a = ' years left until retirement.';
    return function(yearOfBirth){
        var age = 2016 - yearOfBirth;
        console.log((retirementAge - age) + a)
    }
}

var retirementUS = retirement(66);
var retirementGermany = retirement(64);
var retirementIceland = retirement(67);
retirementUS(1990);
retirementGermany(1990);
retirementIceland(1990);

// retirement(66)(1990);

function interviewQuestion(job){

    return function (name) {
        if(job === 'designer') {
            console.log(name + ', can you please explain what UX design is?');
        } else if (job === 'teacher') {
            console.log('What subject dou you teach, ' + name + '?');
        } else {
            console.log('Hello ' + name + ', what do you do?');
        }
    }
}

var interviewTeacher = interviewQuestion('teacher');
interviewTeacher('Jack');

interviewQuestion('teacher')('John');*/

// Bind, call and apply
/*var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function(style, timeOfDay) {
        if (style === 'formal') {
            console.log(
                'Good ' + timeOfDay + ', Ladies and gentlemen! I\'m ' +
                this.name + ', I\'m a ' +
                this.job + ' and I\'m ' +
                this.age + ' years old.'
            );
        } else if(style === 'friendly') {
            console.log(
                'Hey! What\'s up? I\'m ' +
                this.name + ', I\'m a ' +
                this.job + ' and I\'m ' +
                this.age + ' years old. Have a nice ' +
                timeOfDay + '.'
            );
        }
    }
};

var emily = {
    name: 'Emily',
    age: 35,
    job: 'designer'
};

john.presentation('formal', 'morning');

john.presentation.call(emily, 'friendly', 'afternoon');

// john.presentation.apply(emily, ['friendly', 'afternoon']);

var johnFriendly = john.presentation.bind(john, 'friendly');
johnFriendly('morning');
johnFriendly('night');

var emilyFormal = john.presentation.bind(emily, 'formal');
emilyFormal('afternoon');


var years = [1990, 1965, 1937, 2005, 1998];

function arrayCalc(arr, fn) {
    var arrRes = [];
    for (var i = 0; i < arr.length; i++) {
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el) {
    return 2016 - el;
}

function isFullAge(limit, el) {
    return el >= limit;
}

var ages = arrayCalc(years, calculateAge);
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20));
console.log(ages);
console.log(fullJapan);*/