//
/*var massMark, massJohn, heightMark, heightJohn, bmiMark, bmiJohn;
var higherMarkBMI = true;

massMark = 75;
massJohn = 90;

heightMark = 1.70;
heightJohn = 1.80;

function BMICalculator(mass, height) {
    return (mass / (height * height));
}

bmiMark = BMICalculator(massMark, heightMark);
bmiJohn = BMICalculator(massJohn, heightJohn);

console.log(bmiMark);
console.log(bmiJohn);

if(bmiMark < bmiJohn) {
    higherMarkBMI = false;
}

console.log("Is Mark's BMI higher than John's" + ' ' + higherMarkBMI);*/
/*
var teamJohnAverageScore = (89 + 120 + 103) / 3;
var teamMikeAverageScore = (116 + 94 + 123) / 3;

if (teamJohnAverageScore > teamMikeAverageScore) {
    console.log("John's team is a winner " + teamJohnAverageScore + ' scores');
} else if (teamMikeAverageScore > teamJohnAverageScore){
    console.log("Mike's team is a winner " + teamMikeAverageScore + ' scores');
} else {
    console.log('There is a draw');
}


// extra
var teamMaryAverageScore = (116 + 94 + 123) / 3;

if (teamJohnAverageScore > teamMikeAverageScore && teamJohnAverageScore > teamMaryAverageScore) {
    console.log("John's team is a winner " + teamJohnAverageScore + ' scores');
} else if (teamMikeAverageScore > teamJohnAverageScore && teamMikeAverageScore > teamMaryAverageScore){
    console.log("Mike's team is a winner " + teamMikeAverageScore + ' scores');
} else if (teamMaryAverageScore > teamJohnAverageScore && teamMaryAverageScore > teamMikeAverageScore){
    console.log("Mary's team is a winner " + teamMaryAverageScore + ' scores');
}*/

/*
var john = {
    firstName: 'John',
    height: 1.80,
    mass: 90,
    bmiCalc: function () {
        this.bmi = (this.mass / (this.height * this.height));
        return this.bmi;
    }
};

var mark = {
    firstName: 'Mark',
    height: 1.70,
    mass: 75,
    bmiCalc: function () {
        this.bmi = (this.mass / (this.height * this.height));
        return this.bmi;
    }
};

if(john.bmiCalc() > mark.bmiCalc()) {
    console.log(john.firstName + ' has a higher BMI of ' + john.bmi);
} else if(mark.bmi > john.bmi) {
    console.log(mark.firstName + ' has a higher BMI of ' + mark.bmi);
} else {
    console.log('They have same BMI');
}
*/
/*
var johnBills = {
    bill: [124, 48, 268, 180, 42],
    calcTip: function() {
        this.tip = [];
        this.finalPaid = [];
        for(var i = 0; i < this.bill.length; i++) {
            if (this.bill[i] < 50) {
                this.tip[i] = this.bill[i] * 0.2
            } else if (50 <= this.bill[i] && this.bill[i] <= 200) {
                this.tip[i] = this.bill[i] * 0.15;
            } else if (this.bill[i] > 200) {
                this.tip[i] = this.bill[i] * 0.1;
            }
        }
        return this.tip;
    },
    finalPaidCalc: function () {
        for(var j = 0; j < this.bill.length; j++) {
            this.finalPaid[j] = this.bill[j] + this.tip[j];
        }
        return this.finalPaid;
    },
    averageTipsCalc: function() {
        this.sum = 0;
        for(i = 0; i < this.tip.length; i++) {
            this.sum += this.tip[i];
        }
        this.average = this.sum / this.tip.length;
        return this.average;
    }
};
johnBills.calcTip();
johnBills.finalPaidCalc();
johnBills.averageTipsCalc();
console.log(johnBills);

var markBills = {
    bill: [77, 375, 110, 45],
    calcTip: function() {
        this.tip = [];
        this.finalPaid = [];
        for(var i = 0; i < this.bill.length; i++) {
            if (this.bill[i] < 100) {
                this.tip[i] = this.bill[i] * 0.2
            } else if (100 <= this.bill[i] && this.bill[i] <= 300) {
                this.tip[i] = this.bill[i] * 0.10;
            } else if (this.bill[i] > 200) {
                this.tip[i] = this.bill[i] * 0.25;
            }
        }
        return this.tip;
    },
    finalPaidCalc: function () {
        for(var j = 0; j < this.bill.length; j++) {
            this.finalPaid[j] = this.bill[j] + this.tip[j];
        }
        return this.finalPaid;
    },
    averageTipsCalc: function() {
        this.sum = 0;
        for(i = 0; i < this.tip.length; i++) {
            this.sum += this.tip[i];
        }
        this.average = this.sum / this.tip.length;
        return this.average;
    }
};
markBills.calcTip();
markBills.finalPaidCalc();
markBills.averageTipsCalc();
console.log(markBills);

if(johnBills.average > markBills.average) {
    console.log("John's family paid highest tips on average " + johnBills.average);
} else if(markBills.average > johnBills.average) {
    console.log("Mark's family paid highest tips on average " + markBills.average);
} else {
    console.log('Both family payed same tips on average');
}*/

/*var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];

        for(var i = 0; i < this.bills.length; i++) {
            // Determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];

            if (bill < 50) {
                percentage = .2;
            } else if (50 <= bill && bill < 200) {
                percentage = .15;
            } else {
                percentage = .1
            }
            // Add results to the corresponding arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
};

john.calcTips();
console.log(john);*/

var john = {
    fullName: 'John Smith',
    bills: [124, 48, 268, 180, 42],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];

        for(var i = 0; i < this.bills.length; i++) {
            // Determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];

            if (bill < 50) {
                percentage = .2;
            } else if (50 <= bill && bill < 200) {
                percentage = .15;
            } else {
                percentage = .1
            }
            // Add results to the corresponding arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
};

var mark = {
    fullName: 'John Smith',
    bills: [77, 475, 110, 45],
    calcTips: function() {
        this.tips = [];
        this.finalValues = [];

        for(var i = 0; i < this.bills.length; i++) {
            // Determine percentage based on tipping rules
            var percentage;
            var bill = this.bills[i];

            if (bill < 100) {
                percentage = .2;
            } else if (100 <= bill && bill < 300) {
                percentage = .1;
            } else {
                percentage = .25
            }
            // Add results to the corresponding arrays
            this.tips[i] = bill * percentage;
            this.finalValues[i] = bill + bill * percentage;
        }
    }
};


function calcAverage(tips){
    var sum = 0;
    for (var i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    }

    return sum / tips.length;
}

// Do the calculations
john.calcTips();
mark.calcTips();
console.log(john, mark);

john.average = calcAverage(john.tips);
mark.average = calcAverage(mark.tips);
console.log(john, mark);

if(john.average > mark.average) {
    console.log(john.fullName + '\'s family pays higher tips, with an average of $' + john.average);
} else if(john.average < mark.average) {
    console.log(mark.fullName + '\'s family pays higher tips, with an average of $' + mark.average);
} else {
    console.log('Both family payed same tips on average');
}