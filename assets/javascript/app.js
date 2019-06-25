//start quiz
//set Timer 2 minutes
function start() {

    $('#quiz').show();

    var timeout = 120;
    var windowTimeout = setInterval(function () {
        timeout--;
        $("#showNumber").html("Time Remaining: " + timeout);

    }, 1000);
}


window.onload = function () {
    var fiveMinutes = 60 * 5,
        display = document.querySelector('#countdownTimer');
    startTimer(fiveMinutes, display);
};


//10 questions, 4 possible answers, 1 correct answer
var myQuestions = [
    {
        question: "only interested in mainstream or popular things",
        answers: {
            a: 'basic',
            b: 'woke',
            c: 'slay',
            d: 'ratchet',
        },
        correctAnswer: 'a'
    },
    {
        question: "really cool",
        answers: {
            a: 'shook',
            b: 'dank',
            c: 'savage',
            d: 'trill',
        },
        correctAnswer: 'b'
    },
    {
        question: "to be honest",
        answers: {
            a: 'TBH',
            b: 'FOMO',
            c: 'TFW',
            d: 'GMT',
        },
        correctAnswer: 'a'
    },
    {
        question: "when you are angry because you are so hungry",
        answers: {
            a: 'bougie',
            b: 'suh',
            c: 'cray',
            d: 'hangry',
        },
        correctAnswer: 'd'
    },
    {
        question: "Someone from a higher class",
        answers: {
            a: 'bougie',
            b: 'Gucci',
            c: 'squad',
            d: 'GOAT',
        },
        correctAnswer: 'a'
    },
    {
        question: "A group of friends",
        answers: {
            a: 'squad',
            b: 'goals',
            c: 'hunty',
            d: 'bae',
        },
        correctAnswer: 'a'
    },
    {
        question: "upgrade appearance to a better version and enhance looks",
        answers: {
            a: 'lit',
            b: 'fierce',
            c: 'glow up',
            d: 'thicc',
        },
        correctAnswer: 'c'
    },
    {
        question: "to be bitter about something or someone",
        answers: {
            a: 'skurt',
            b: 'throw shade',
            c: 'salty',
            d: 'roasted',
        },
        correctAnswer: 'c'
    },
    {
        question: "used to describe people having bigger body parts that are bigger than usual",
        answers: {
            a: 'thicc',
            b: 'lit',
            c: 'bop',
            d: 'curve',
        },
        correctAnswer: 'a'
    },
    {
        question: "to give someone a nasty look or say something unpleasant about them",
        answers: {
            a: 'straight fire',
            b: 'throw shade',
            c: 'sip tea',
            d: 'low key',
        },
        correctAnswer: 'b'
    },
];

function questions() {

}

//score
var score = function () {
    if (input === correctAnswer) {
        correct = correctAns + 1;
        alert("Correct!");
    } else {
        incorrect = incorrectAns + 1;
        alert("incorrect")
    }
}