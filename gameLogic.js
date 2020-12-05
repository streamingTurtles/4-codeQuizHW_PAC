
// array to hold key, values for questions.
var theQuestions = [
    {   
        id: 1,
        question: "Is Javascript and Java programing related or similiar programming languages?",
        correctAnswer: "b",
            possibleAnswer: [
                "a: Yes",
                "b: No",
                "c: Sometimes"
            ]            
    },
    {
        id: 2,
        question: "What does a CLOSURE do in Javascript?", 
        correctAnswer: "c",
            possibleAnswer: [
                "a: A Closure gives you access to the outer function's scope from an inner function",
                "b: A Closure allows you to have private variables",
                "c: Both b & C"
            ]
    },
    {
        id: 3,
        question: "What is an IIFE in Javascript?", 
        correctAnswer: "a",
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


// function is called when start() is called by pressing start quiz button
function theQuiz(index){
    var count= 0; // used to treat correct index value rendered into the innerHTML since it concatenates strings only, and I need the index value, number
    var yayOrNay = "";  // the variable the stores an incorrect or correct answer for each of the questions
    var quizQuestions = document.getElementById("quizQuestions");
    // condition to restore back to start after answered the qustions or end of quiz case
    if (index > 2) { // when you finished answering the question do these things
        index = 0;  // set back where you are in the object array to the beginning
        console.log("index value set back to the beginning - to: ", index);
        stopp();
        pbcounter = 0;  // push to 0 seconds
        document.getElementById('count').innerText = "You have finished the quiz, refresh your browser to take the quiz again";
        document.getElementById("timer").innerHTML = pbcounter + " seconds remaining"; 
        outterDiv.style.width = 100 + '%'; // make barProgress complete - representing end of quiz
        // clearInterval(count)
        return // exit the function - end of quiz
    }
    //creating span and div tag for the questions and answer options using the array index    
    var questionTag = '<span>'+ theQuestions[index].id + ". " + theQuestions[index].question +'</span>';
    var answersOptionsTag = '<div class="option" data-answer="a"><button>'+ theQuestions[index].possibleAnswer[0] +'</button></div>'
                          + '<div class="option" data-answer="b"><button>'+ theQuestions[index].possibleAnswer[1] +'</button></div>'
                          + '<div class="option" data-answer="c"><button>'+ theQuestions[index].possibleAnswer[2] +'</button></div>'
    quizQuestions.innerHTML = questionTag; //adding into quizQuestions div space
    answersList.innerHTML = answersOptionsTag; //add object to answersList id, adding into answerList div space   
    var youSelected = document.getElementById("yourAnswer");
    var dataAnswer = document.getElementById("option");


        // get all the data-answer values from answersList obj. and store the arraylike node-list into the selected variable object array
        var nodelistt = answersList.querySelectorAll(".data-answer");
        console.log("nodelistt: ", nodelistt); // this is empty
        var selected = answersList.querySelectorAll(".option"); // nodeList
        console.log("selected: ",selected) // this shows the nodeList, represents the answers for each of the questions
        console.log("CURRENT INDEX IS: ", index);

        
        // using the IDL (Inerface Definition Language) attribute (onclick) here
        // Note: this whole function can be reduced and broken to smaller functions - once I get working, I'll do that, for now need to just get it to work
        // Question 1 case
            selected[0].onclick = function(){
                var dataAnswer = this.getAttribute("data-answer");
                console.log ("Here is the data-answer value: ", dataAnswer);
            console.log("INDEX is: ", index, " you selected from question ", index+1,  " the ANSWER: ", theQuestions[index].possibleAnswer[0])
            console.log("1st CHARACTER", theQuestions[index].possibleAnswer[0].charAt(0)) // testing code to find 1st letter to which to compare
            console.log("2nd CHARACTER", theQuestions[index].possibleAnswer[1].charAt(0)) // testing code to find 1st letter to which to compare
            console.log("3rd CHARACTER", theQuestions[index].possibleAnswer[2].charAt(0)) // testing code to find 1st letter to which to compare
            // test  console code to discover the case when the answer should be correct
            console.log(theQuestions[index].possibleAnswer[1].charAt(0)); // consoles "b" for index @ 0, possibleAnswer @ 1,  char place @ 0
            console.log(theQuestions[index].correctAnswer.charAt(0) + " " + theQuestions[index].correctAnswer.charAt(0));     // consoles "b" for charAt 0, the frist location in string
            // console.log(theQuestions[index].correctAnswer.charAt(0));     // consoles "b" for charAt 0, the frist location in string
              
            
            // for Questions 1. 2. & 3. - when selecting multiple choice letter a:
            if (theQuestions[index].possibleAnswer[0].charAt(0) === theQuestions[index].correctAnswer.charAt(0)) {console.log("CORRECT"); yayOrNay="CORRECT" }
                else { console.log("INCORRECT ANSWER"); yayOrNay="WRONG ANSWER, 10 sec off the clock"; 
                       pbcounter = pbcounter -10;  // deduct 10sec if incorrect answer :(
                       width = width+10;  

                }

            count = index+1;
            youSelected.innerHTML = " you selected from question " + count + " the ANSWER: " + theQuestions[index].possibleAnswer[0] + "  - this is the: " + yayOrNay
            console.log("index value from within possibleAnswer array BEFORE index increment: ", index);
            index++;
            console.log("index value from within possibleAnswer array AFTER index increment: ", index);
            theQuiz(index);
        }
        // Question 2 case
        selected[1].onclick = function(){
                var dataAnswer = this.getAttribute("data-answer");
                console.log ("Here is the data-answer value: ", dataAnswer);
            console.log("INDEX is: ", index, " you selected from question ", index+1,  " the ANSWER: ", theQuestions[index].possibleAnswer[1])
            console.log("1st CHARACTER", theQuestions[index].possibleAnswer[0].charAt(0)) // testing code to find 1st letter to which to compare
            console.log("2nd CHARACTER", theQuestions[index].possibleAnswer[1].charAt(0)) // testing code to find 1st letter to which to compare
            console.log("3rd CHARACTER", theQuestions[index].possibleAnswer[2].charAt(0)) // testing code to find 1st letter to which to compare
            console.log(theQuestions[index].possibleAnswer[1].charAt(0)) // consoles "a" for index 0
            console.log(theQuestions[index].correctAnswer.charAt(0))     // consoles "b" for index 0
            

            // for Questions 1. 2. & 3. - when selecting multiple choice letter b:
            if (theQuestions[index].possibleAnswer[1].charAt(0) === theQuestions[index].correctAnswer.charAt(0)) {console.log("CORRECT"); yayOrNay="CORRECT" }
                else { console.log("INCORRECT ANSWER"); yayOrNay="WRONG ANSWER, 10 sec off the clock"; 
                       pbcounter = pbcounter -10;  // deduct 10sec if incorrect answer :(
                       width = width+10;
                }
      
            count = index+1;
            youSelected.innerHTML = " you selected from question " + count + " the ANSWER: " + theQuestions[index].possibleAnswer[1] + "  - this is the: " + yayOrNay
            console.log()
            index++;
            console.log("index value from within possibleAnswer array: ", index);
            theQuiz(index);
        }
        // Question 3 case
        selected[2].onclick = function(){
            console.log("INDEX is: ", index, " you selected from question ", index+1,  " the ANSWER: ", theQuestions[index].possibleAnswer[2])
            console.log("1st CHARACTER", theQuestions[index].possibleAnswer[0].charAt(0)) // testing code to find 1st letter to which to compare
            console.log("2nd CHARACTER", theQuestions[index].possibleAnswer[1].charAt(0)) // testing code to find 1st letter to which to compare
            console.log("3rd CHARACTER", theQuestions[index].possibleAnswer[2].charAt(0)) // testing code to find 1st letter to which to compare
            console.log(theQuestions[index].possibleAnswer[2].charAt(0)) // consoles "a" for index 0
            console.log(theQuestions[index].correctAnswer.charAt(0))     // consoles "b" for index 0
           

            // for Questions 1. 2. & 3. - when selecting multiple choice letter c:
            if (theQuestions[index].possibleAnswer[2].charAt(0) === theQuestions[index].correctAnswer.charAt(0)) {console.log("CORRECT"); yayOrNay="CORRECT" }
                else { console.log("INCORRECT ANSWER"); yayOrNay="WRONG ANSWER, 10 sec off the clock"; 
                       pbcounter = pbcounter -10;  // deduct 10sec if incorrect answer :(
                       width = width+10;                       
                }

            count = index+1;
            youSelected.innerHTML = " you selected from question " + count + " the ANSWER: " + theQuestions[index].possibleAnswer[2] + "  - this is the: " + yayOrNay         
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