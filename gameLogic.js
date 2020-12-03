






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

