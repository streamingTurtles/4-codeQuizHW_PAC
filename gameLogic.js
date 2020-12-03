



// This is a seperate data.js file to hold all the quiz questions & answers in an array

// an array to hold all the object key-value pairs
var theQuestions = [
    {   
        question1: "Is Javascript and Java programing related or similiar programming languages?",
            answers1: {
                a: "Yes",
                b: "No",
                c: "Sometimes"
            },
            correctAnswer1: "b"
    },
    {
        question2: "What does a CLOSURE do in Javascript?", 
            answer2: {
                a: "A Closure gives you access to the outer function's scope from an inner function",
                b: "A Closure allows you to have private variables",
                c: "Both b & C"
            },
            correctAnswer2: "c"
    },
    {
        question3: "What is an IIFE in Javascript?", 
            answer2: {
                a: "Immediately Invoked Function Expression",
                b: "Instantiated Integer Float Expression",
                c: "International Integrated Field Electronics"
            },
            correctAnswer3: "a"
    }
];



// create the variables to store each elements reference
var questions = document.getElementById('quizQuestions');
var submittal = document.getElementById('submitYourAnswers');
var results   = document.getElementById('yourScore');

// var ques1 = document.createElement("div");


function theQuiz(){
    var count =0;
    
    questions = 'Question-1: ' + theQuestions[0];
    console.log(questions);
    questions = 'Question-1: ' + theQuestions[0];
    console.log(questions);
    console.log(questions);
    console.log(questions);
    console.log('Question-1: ' + theQuestions[2]);
    questions.textContent = theQuestions[0];
    // questions.appendChild(theQuestions[0]);
    document.getElementById('quizQuestions').innerHTML = theQuestions[0];

}




function yourResults (){
}


// start the quiz when user "Clicks to Start " button
theQuiz();


// show the results when the timer ends or the user submits
yourResults();

