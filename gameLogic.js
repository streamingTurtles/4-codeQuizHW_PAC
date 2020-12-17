
// timer and progress bar section of code
var count;
var outterDiv = document.getElementById("barProgress");   
var width = 0;
var pbcounter = 100;

function start(){
  theQuiz(0); // pass in a 0 to show the 1st question from theQuestion array  

  count = setInterval(timer,1000)  
}
function timer(){
  pbcounter = pbcounter-1; 
  document.getElementById('count').innerText = "You have " + pbcounter + " seconds to take quiz";
  document.getElementById("timer").innerHTML = pbcounter + " seconds remaining";
//   console.log("progress bar is: " + width + " pbcounter is: " + pbcounter + "count is: " + count);
  if (width == 99) {
    //   console.log("width is at: " + width + '%');
      outterDiv.style.width = 100 + '%'; // needed to "fudge" graphically to complete the progress bar
      width = 0;
      pbcounter = 100;
      document.getElementById('count').innerText = "Click above to start the Quiz again";
      clearInterval(count);
    } else {
      width++;  
      outterDiv.style.width = width + '%'; // increment the width % of the div #barProress
    } 
}





// clears the current setInterval timer that's running when all questions have been answered
// various settings are reInitialized where this function is called
function stopp(){  
  clearInterval(count)   
}





// Local Storage Section 
// Section of code will create <li><</li> tags for entered text to capture Initials and Score
// Items are stored until cleared using localSorage.clear() function
var form = document.querySelector('form');
var ul = document.querySelector('ul');
var button = document.querySelector('button');
var input = document.getElementById('item');


// 1. create array for scores to be stored if there is something in localStorage
// this is checked 1st as we are saving data, and when game reStarts, we want to render the stored data - that which would have been saved into localStorage via setItem()
var scoresArray;
if (localStorage.getItem('items')) {
  scoresArray = JSON.parse(localStorage.getItem('items'))
  console.log("scoresArray in IF condition is: ", scoresArray);
} else {
  scoresArray = []  // if nothing is in the localStorage, just at least create the array object
  console.log("scoresArray in else is: ", scoresArray);
}


// 2. add items to localStorage found in 'items' - also add youScore after all questions have been answered in theQuiz() function
localStorage.setItem('items', JSON.stringify(scoresArray));
// use JSON stringify to getItem to render into <li> tags - need to JSON.parse() back into object syntax
var data = JSON.parse(localStorage.getItem('items'));
// create the li tags to show our input 
var createLiTags = function(text){
  if(text){
  var li = document.createElement('li');
  li.textContent = text;
  ul.appendChild(li);
  }
}

//  *** added new function for reGRade on 12/15/2020, prevents an empty entry *** 
function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == "" || x == null) {
    alert("Please enter your name or initials \n or refresh the page to take the quiz again");
    return false;
  } else {
    createLiTags(input.value + " scored: " + getData[getDataTRACK] + " out of the 3 questions");    // *** added for reGRade on 12/15/2020 *** 
  }
}


// prevent from sending to a server - stop the default element behavior
form.addEventListener('submit', function (e) {
  e.preventDefault();
  // set our local storage
  scoresArray.push(input.value + " scored: " + getData[getDataTRACK] + " out of the 3 questions"); // *** added for reGRade on 12/15/2020 *** 
  localStorage.setItem('items', JSON.stringify(scoresArray));
  // *** repositioned into new function above for reGRade on 12/15/2020 ***
  // createLiTags(input.value + " scored: " + getData[getDataTRACK] + " out of the 3 questions");    // *** added for reGRade on 12/15/2020 *** 
  input.value = "";
});


// loops through all current storage, and displays it in browser in li tags via creaeLiTags function
data.forEach(item => {
  createLiTags(item);
});
// data.forEach(function (thing, index){   // "item" renamed to "thing" is just the name you want to give the contents of each element in the array
// 	createLiTags(thing);
// 	console.log("index of array is: ", index); // is each index of the array
// 	console.log("item in array is:", item);    // is what is in the data array, the contents of each index
// });












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
var submittal = document.getElementById('submitYourAnswers');
var results   = document.getElementById('yourScore');
console.log("reset youScore to: ", youScore);
var youScore =0;
var scoreDataArray = [];
var data2;
var dataIn;
var getData=[];
var finalScore=0;
var getDataTRACK;  // *** added for reGRade on 12/15/2020, see line 188 where its incremented to track location in the array ***


// function is called when start() is called by pressing start quiz button
function theQuiz(index){
    var count= 0; // used to treat correct index value rendered into the innerHTML since it concatenates strings only, and I need the index value, number
    var yayOrNay = "";  // the variable that stores an incorrect or correct answer for each of the questions
    var quizQuestions = document.getElementById("quizQuestions");
    // condition to restore back to start after answered the qustions or end of quiz case
    if (index > theQuestions.length -1) { // *** added for reGRade on 12/15/2020 on this line *** - eliminated the < 2 "keeping with good coding pracice for NO MAGIC NUBERS" and replaced with theQuestion.length -1 ***
              index = 0;  // set back where you are in the object array to the beginning
              console.log("index value set back to the beginning -> to: ", index);
              stopp();  // runs clearInterval() - clearing the interval set by setinterval() - JS internal functions
              pbcounter = 0;  // push to 0 seconds
              document.getElementById('count').innerText = "You have finished the quiz, refresh your browser to take the quiz again";
              document.getElementById("timer").innerHTML = pbcounter + " seconds remaining"; 
              outterDiv.style.width = 100 + '%'; // make barProgress complete - representing end of quiz
              document.getElementById("yourScore").innerHTML = "Your score is: " + youScore + " out of 3 question correct"
              // *************************** added ***********************************
              // *** added for reGRade on 12/15/2020, lines 174 to 198 ***
              // *************************** added ***********************************
              console.log("*********************************************************")
              // *** DON'T USE ' ' FOR THE ARGUMENT AS PARAMETER HERE, you are capturing the object or whatever the datatype ***         
              // localStorage.setItem('youScore', JSON.stringify(youScore)); 
              // localStorage.setItem('finalScore', finalScore);  // need to name 'youScore' in 1st parameter, using other name won't work???
              // getData = localStorage.getItem('finalScore'); // you need ' ' since your getting the localStorage which is stored as a string
              getData = localStorage.getItem('youScore'); // you need ' ' since your getting the localStorage which is stored as a string
              console.log("youScore is: ", youScore +  "   finalScore is: " , finalScore + "   getData array is: ", getData);
              getData = getData ? getData.split(','): [];
              getData.push(youScore);
              getDataTRACK = getData.length-1; // is the index of the last item pushed onto the array - to use to get that score to post with quiz takers name
              console.log("track position in getData array to show score in localStorage on line # 81 & 83 ", getDataTRACK);
              // getData.push('youScore');  // will add in what's between the ' ', I want the value
              console.log("getData is: ", getData);
              // localStorage.setItem('youScore', youScore);  // need to name 'youScore' in 1st parameter, using other name won't work - why - just REMEMBER key = value, either for var x = something
              // localStorage.setItem( youScore , getData.toString());  // testing, doesn't work 
              // localStorage.setItem('youScore', JSON.stringify(getData)); // testing, doesn't work
              // localStorage.setItem('youScore', getData.toString());  // testing, doesn't work
              localStorage.setItem('youScore',getData);
              console.log("getData is: ", getData); // QUESTION: why is last one in the array a value and not a string, but as one is added it becomes a string ????????
              getData.forEach(function(number){  // just using a forEach to test that I have the scores in an array show in console
              console.log(number);
              });
              console.log("*********************************************************")
              // *************************** added ***********************************
              // *************************** added ***********************************       
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
            if (theQuestions[index].possibleAnswer[0].charAt(0) === theQuestions[index].correctAnswer.charAt(0)) {console.log("CORRECT"); yayOrNay="CORRECT" 
                youScore++;
                finalScore = youScore;
            }
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
            if (theQuestions[index].possibleAnswer[1].charAt(0) === theQuestions[index].correctAnswer.charAt(0)) {console.log("CORRECT"); yayOrNay="CORRECT" 
                youScore++;
                finalScore = youScore;
            }
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
            if (theQuestions[index].possibleAnswer[2].charAt(0) === theQuestions[index].correctAnswer.charAt(0)) {console.log("CORRECT"); yayOrNay="CORRECT" 
                youScore++;
                finalScore = youScore;
            }
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