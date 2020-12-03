
// array to hold key, values for questions.
var theQuestions = [
    {   
        id: 1,
        question: "Is Javascript and Java programing related or similiar programming languages?",
        correctAnswer1: "b",
            possibleAnswer: [
                "a: Yes",
                "b: No",
                "c: Sometimes"
            ]            
    },
    {
        id: 2,
        question: "What does a CLOSURE do in Javascript?", 
        correctAnswer2: "c",
            possibleAnswer: [
                "a: A Closure gives you access to the outer function's scope from an inner function",
                "b: A Closure allows you to have private variables",
                "c: Both b & C"
            ]
    },
    {
        id: 3,
        question: "What is an IIFE in Javascript?", 
        correctAnswer3: "a",
            possibleAnswer: [
                "a: Immediately Invoked Function Expression",
                "b: Instantiated Integer Float Expression",
                "c: International Integrated Field Electronics"
            ]
    }
];





// create the variables to store each elements reference

// var questions = document.getElementById('quizQuestions');
var submittal = document.getElementById('submitYourAnswers');
var results   = document.getElementById('yourScore');

// var ques1 = document.createElement("div");


function theQuiz(){
    var count =0;
    var index=0;  // temp testing
    var quizQuestions = document.getElementById("quizQuestions");
    //creating span and div tag for the questions and answer options using the array index 
    var questionTag = '<span>'+ theQuestions[index].id + ". " + theQuestions[index].question +'</span>';
    var answersOptionsTag = '<div class="option"><button>'+ theQuestions[index].possibleAnswer[0] +'</button></div>'
                          + '<div class="option"><button>'+ theQuestions[index].possibleAnswer[1] +'</button></div>'
                          + '<div class="option"><button>'+ theQuestions[index].possibleAnswer[2] +'</button></div>'
    quizQuestions.innerHTML = questionTag; //adding a new span tag inside the questionTag
    answersList.innerHTML = answersOptionsTag; //adding a new div tag inside answersOptionsTag    


}




function yourResults (){
}


// start the quiz when user "Clicks to Start " button
theQuiz();


// show the results when the timer ends or the user submits
yourResults();





// to handle if the browser is refreshed at any time - need to reSet all counts and settings
function checkRefresh()
{
	if( document.refreshForm.visited.value == "" )
	{
		// This is a fresh page load
		document.refreshForm.visited.value = "1";		
        
        // fresh page loads, clear things
        quizQuestions.innerHTML = ''; // reset to empty string
        answersList.innerHTML = ''; // reset to empty string  
	}
	else
	{
		// This is a page refresh
        // add necessary code for a user refresh 
        quizQuestions.innerHTML = ''; // reset to empty string
        answersList.innerHTML = ''; // reset to empty string  
        
	}
}