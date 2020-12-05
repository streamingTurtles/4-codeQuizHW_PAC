
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



function theQuiz(index){
    var count= 0; // used to treat correct index value rendered into the innerHTML since it only concatenates stings, and I need the index
    var quizQuestions = document.getElementById("quizQuestions");
    //creating span and div tag for the questions and answer options using the array index 
    if (index > 2) {
        index = 0;
        console.log("current index value from theQuiz function return is: ", index);
        return // exit the function - end of quiz
    }
    var questionTag = '<span>'+ theQuestions[index].id + ". " + theQuestions[index].question +'</span>';
    var answersOptionsTag = '<div class="option" data-answer="a"><button>'+ theQuestions[index].possibleAnswer[0] +'</button></div>'
                          + '<div class="option" data-answer="b"><button>'+ theQuestions[index].possibleAnswer[1] +'</button></div>'
                          + '<div class="option" data-answer="c"><button>'+ theQuestions[index].possibleAnswer[2] +'</button></div>'
    quizQuestions.innerHTML = questionTag; //adding into quizQuestions div space
    answersList.innerHTML = answersOptionsTag; //add object to answersList id, adding into answerList div space   
    var youSelected = document.getElementById("yourAnswer");


        // get all the data-answer values from answersList obj. and store the arraylike node-list into selected variable/object/array
        var nodelistt = answersList.querySelectorAll(".data-answer");
        console.log("nodelistt: ", nodelistt); // this is empty
        var selected = answersList.querySelectorAll(".option"); // nodeList
        console.log("selected: ",selected) // this shows the nodeList, represents the answers for each of the questions
        console.log("CURRENT INDEX IS: ", index);


        // using the IDL (Inerface Definition Language) attributes here
        selected[0].onclick = function(){
            console.log("INDEX is: ", index, " you selected from question ", index+1,  " the ANSWER: ", theQuestions[index].possibleAnswer[0])
            count = index+1;
            youSelected.innerHTML = " you selected from question " + count + " the ANSWER: " + theQuestions[index].possibleAnswer[0] 
            console.log()
            index++;
            console.log("index value from within possibleAnswer array: ", index);
            theQuiz(index);
        }
        selected[1].onclick = function(){
            console.log("INDEX is: ", index, " you selected from question ", index+1,  " the ANSWER: ", theQuestions[index].possibleAnswer[1])
            count = index+1;
            youSelected.innerHTML = " you selected from question " + count + " the ANSWER: " + theQuestions[index].possibleAnswer[1]
            console.log()
            index++;
            console.log("index value from within possibleAnswer array: ", index);
            theQuiz(index);
        }
        selected[2].onclick = function(){
            console.log("INDEX is: ", index, " you selected from question ", index+1,  " the ANSWER: ", theQuestions[index].possibleAnswer[2])
            count = index+1;
            youSelected.innerHTML = " you selected from question " + count + " the ANSWER: " + theQuestions[index].possibleAnswer[2]           
            console.log()
            index++;
            console.log("index value from within possibleAnswer array: ", index);
            theQuiz(index);
        }



}



// function that will generate a form element to enter the users information & calculated score
function yourResults (){
}




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