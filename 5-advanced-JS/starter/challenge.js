/*(function () {
    function Question(question, answers, correctAnswer){
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    }

    var question1 = new Question(
        'My birthday?',
        ['1982.08.13', "1987.05.21", "1984.08.13"],
        0
    );

    var question2 = new Question(
        'Javascript the best programing language?',
        ['Yes', "No"],
        0
    );

    var question3 = new Question(
        'What does best describe the coding',
        ['Easy', 'Fun', 'Hard'],
        1
    );

    var questions = [question1, question2, question3];

    var scores = 0, next = true;

    function quiz() {
        var index = Math.floor(Math.random() * questions.length);
        console.log('________________________________________________');
        console.log(questions[index].question);
        for (var i = 0; i < questions[index].answers.length; i++) {
            console.log(i + ': ' + questions[index].answers[i]);
        }
        console.log('________________________________________________');
        answers(prompt(), questions[index].correctAnswer);
    }

    function answers(answer, correctAnswer){
        if (parseInt(answer) === correctAnswer) {
            console.log('Answer is correct');
            scores++;
        } else if (answer === 'exit'){
            next = false;
        } else {
            console.log('Answer is bad');
        }
        console.log('Your scores: ' + scores);
        console.log('________________________________________________');
        if (next){
            quiz();
        } else {
            console.log('EXIT THE GAME')
        }
    }

    quiz();
})();*/

// basic
/*(function () {
    function Question(question, answers, correctAnswer){
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    }

    Question.prototype.displayQuestion = function() {
        console.log('________________________________________________');
        console.log(this.question);
        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
        console.log('________________________________________________');
    };

    Question.prototype.checkAnswer = function(answer){
        if (answer === this.correctAnswer) {
            console.log('Answer is correct');
        } else {
            console.log('Answer is bad');
        }
        console.log('________________________________________________');
    };

    var question1 = new Question(
        'My birthday?',
        ['1982.08.13', "1987.05.21", "1984.08.13"],
        0
    );

    var question2 = new Question(
        'Javascript the best programing language?',
        ['Yes', "No"],
        0
    );

    var question3 = new Question(
        'What does best describe the coding',
        ['Easy', 'Fun', 'Hard'],
        1
    );

    var questions = [question1, question2, question3];

    var index = Math.floor(Math.random() * questions.length);

    questions[index].displayQuestion();

    var answer = parseInt(prompt('Please select the correct answer.'));

    questions[index].checkAnswer(answer);
})();*/

// expert
(function () {
    function Question(question, answers, correctAnswer){
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    }

    Question.prototype.displayQuestion = function() {
        console.log('________________________________________________');
        console.log(this.question);
        for (var i = 0; i < this.answers.length; i++) {
            console.log(i + ': ' + this.answers[i]);
        }
        console.log('________________________________________________');
    };

    Question.prototype.checkAnswer = function(answer, callback){
        var sc;

        if (answer === this.correctAnswer) {
            console.log('Answer is correct');
            sc = callback(true);
        } else  {
            console.log('Answer is bad');
            sc = callback(false);
        }
        console.log('________________________________________________');

        this.displayScore(sc)
    };

    Question.prototype.displayScore = function(score) {
        console.log('Your scores: ' + score);
        console.log('________________________________________________');
    };

    var question1 = new Question(
        'My birthday?',
        ['1982.08.13', "1987.05.21", "1984.08.13"],
        0
    );

    var question2 = new Question(
        'Javascript the best programing language?',
        ['Yes', "No"],
        0
    );

    var question3 = new Question(
        'What does best describe the coding',
        ['Easy', 'Fun', 'Hard'],
        1
    );

    function score() {
        var scores = 0;

        return function(correct) {
            if(correct) {
                scores++;
            }
            return scores;
        };
    }

    var keepScore = score();

    function nextQuestion() {

        var questions = [question1, question2, question3];

        var index = Math.floor(Math.random() * questions.length);

        questions[index].displayQuestion();

        var answer = prompt('Please select the correct answer.');

        if( answer !== 'exit') {
            questions[index].checkAnswer(parseInt(answer), keepScore);

            nextQuestion();
        } else {
            console.log('EXIT THE GAME')
        }
    }

    nextQuestion();
})();