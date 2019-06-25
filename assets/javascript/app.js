//start quiz
//set Timer 2 minutes
var timeout = 120;

function start() {

    $('#quiz').show();

    var correctAns = 0;
    var incorrectAns = 0;
    var unanswered = 0;

    //timer, start and stop
    var windowTimeout = setInterval(function () {
        // if timer runs out, reset timer and hide quiz
        if (timeout === 0) {
            clearInterval(windowTimeout);
            $('#quiz').hide();

//if then statements for correct, incorrect and unanswered questions

//q1
            if ($('#q1:checked').val() == myAnswers[0]) {
                correctAns++;
            } else if ($('#q1:checked').length == 0) {
                unanswered++;
            }
            else {
                incorrectAns++;
            } 

//q2
            if ($('#q2:checked').val() == myAnswers[1]) {
                correctAns++;
            } else if ($('#q2:checked').length == 0) {
                unanswered++;
            }
            else {
                incorrectAns++;
            } 

//q3
            if ($('#q3:checked').val() == myAnswers[2]) {
                correctAns++;
            } else if ($('#q3:checked').length == 0) {
                unanswered++;
            }
            else {
                incorrectAns++;
            } 

//q4
            if ($('#q4:checked').val() == myAnswers[3]) {
                correctAns++;
            } else if ($('#q4:checked').length == 0) {
                unanswered++;
            }
            else {
                incorrectAns++;
            } 

//q5
            if ($('#q5:checked').val() == myAnswers[4]) {
                correctAns++;
            } else if ($('#q5:checked').length == 0) {
                unanswered++;
            }
            else {
                incorrectAns++;
            } 

//q6
            if ($('#q6:checked').val() == myAnswers[5]) {
                correctAns++;
            } else if ($('#q6:checked').length == 0) {
                unanswered++;
            }
            else {
                incorrectAns++;
            } 
            
//q7
            if ($('#q7:checked').val() == myAnswers[6]) {
                correctAns++;
            } else if ($('#q7:checked').length == 0) {
                unanswered++;
            }
            else {
                incorrectAns++;
            } 

//q8
            if ($('#q8:checked').val() == myAnswers[7]) {
                correctAns++;
            } else if ($('#q8:checked').length == 0) {
                unanswered++;
            }
            else {
                incorrectAns++;
            } 

//q9
            if ($('#q9:checked').val() == myAnswers[8]) {
                correctAns++;
            } else if ($('#q9:checked').length == 0) {
                unanswered++;
            }
            else {
                incorrectAns++;
            } 

//q10
            if ($('#q10:checked').val() == myAnswers[9]) {
                correctAns++;
            } else if ($('#q10:checked').length == 0) {
                unanswered++;
            }
            else {
                incorrectAns++;
            } 

            //show score in html
            $('#correct-answers').html(correctAns);
            $('#incorrect-answers').html(incorrectAns);
            $('#unanswered').html(unanswered);
            $('#results').show();
            
        } else {

            //show timer in page
            timeout--;
            $("#showNumber").html("Time Remaining: " + timeout);
        }
    }, 1000);
}

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

// array of correct answers
var myAnswers = ['a', 'b', 'a', 'd', 'a', 'a', 'c', 'c', 'a', 'b'];

//end game when timer hits 0
function endGame () {
    timeout = 0;
}