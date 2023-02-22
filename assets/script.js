// This page is going to be used for the main JS logic that will serve as a bridge beteween the scores/questions

// Psuedocode for the structure of the coding test - 10 questions - 60 seconds total - getting a question wrong is minus 6 seconds. Game is over ONCE: 1. the time limit is reached 2. all questions are answered before time limit is reached

var quizTimer = 60;
var currentQuestion = 0;

function wrongAnswer() {
    // create function to take away 6 sec's for every wrong answer
}   

function displayQuestion(num) {
    document.getElementById("question-title").innerHTML = questions[num].question;
    document.getElementById("answer-1").innerHTML = questions[num].answers[0];
    document.getElementById("answer-2").innerHTML = questions[num].answers[1];
    document.getElementById("answer-3").innerHTML = questions[num].answers[2];
    document.getElementById("answer-4").innerHTML = questions[num].answers[3];
}

function answerSelected(answer) {
    if (questions[currentQuestion].answers[answer] ===  questions[currentQuestion].correctAnswer){
        // answer is correct, moved to next question and 10 points are awarded for it
    } else {
        // answer is wrong - minus 6 seconds and then move on to the next question
    }
    currentQuestion = currentQuestion + 1;
    displayQuestion(currentQuestion);
}


function timerStart() {
    document.getElementById("question").classList.remove("hide");
    document.getElementById("answer-1").classList.remove("hide");
    document.getElementById("answer-2").classList.remove("hide");
    document.getElementById("answer-3").classList.remove("hide");
    document.getElementById("answer-4").classList.remove("hide");
    displayQuestion(0);
    // create function to start the 60 second timer
    var downloadTimer = setInterval(function(){
        if(quizTimer <= 0){
          clearInterval(downloadTimer);
          window.alert("The time limit has been reached. GAME OVER!");
        // ^created prompt message that pops up once the time limit is reached (hits 0) before all of the questions are answered^  

        // function storeName() {
        //     // Initials storage after timer runs out 2-3 characters in length
        //     var userInitials = window.prompt("Please add your initials to be saved in the highscores").toLowerCase(); 
            
        //     // Looping through user input-making sure only numeric values between 8-128 are present
        //     if (containsOnlyNumbers(userInitials)){
        //       // success
        //       // user entered numbers- now checking initials are between 2-3 characters long 
        //       userInitials = parseInt(userInitials)
        //       if (userInitials >= 2 && userInitials <= 3) {
        //       // user has entered an acceptable initials length between 2-3
        //         userInitialsResult = userInitials;
        //       } else {
        //         window.alert("Please enter letters or numbers between 2-3 characters in length")
        //         generateHighscore();
        //       }
        //     } else {
        //       window.alert("Please enter letters/number values only")
        //       generateHighscore();
        //     }


        }
        document.getElementById("time").innerHTML = quizTimer;
        console.log(document.getElementById("time").innerHTML);
        quizTimer -= 1;
    }, 1000);
}  



// Question 1/10 - timer starts at 60 seconds. Once answered you are prompted with the next question in line. Your score from this question is stored for the total score at the end. 

var questions = [
    {
        question: "Question One: Arrays in JavaScript are defined by which of the following statements?",
        answers: ["It is an ordered list of values", "It is an ordered list of objects", "It is an ordered list of strings","It is an ordered list of functions"],
        correctAnswer: "It is an ordered list of values",
    },
    
    // Question 2/10 - timer is live. Once answered you are prompted with the next question in line. Your score from this question is stored for the total score at the end. 
    
    {
        question: "Question Two: Javascript is an _______ language",
        answers: ["Object-Oriented", "Object-Based", "Procedural","Static"],
        correctAnswer: "Object-Based",
    },
    
    // Question 3/10 - timer is live. Once answered you are prompted with the next question in line. Your score from this question is stored for the total score at the end. 
    
    {
        question: "Question Three: Which of the following keywords is used to define a variable in Javascript?",
        answers: ["var", "let", "Both A & B","Yoo here's a variable dude"],
        correctAnswer: "Both A & B",
    },
    
    // Question 4/10 - timer is live. Once answered you are prompted with the next question in line. Your score from this question is stored for the total score at the end. 
    
   {
        question: "Question Four: Which function is used to serialize an object into a JSON string in Javascript?",
        answers: ["stringify()", "parse()", "convert()","serialization()"],
        correctAnswer: "stringify()",
    },
    
    // Question 5/10 - timer is live. Once answered you are prompted with the next question in line. Your score from this question is stored for the total score at the end. 
    
    {
        question: "Question Five: How do you stop an interval timer in Javascript?",
        answers: ["clearTimer", "intervalOver", "timerStop","clearInterval"],
        correctAnswer: "clearInterval",
    },
    
    // Question 6/10 - timer is live. Once answered you are prompted with the next question in line. Your score from this question is stored for the total score at the end. 
    
     {
        question: "Question Six: Which symbol is used separate JavaScript statements?",
        answers: ["Comma (,)", "Colon (:)", "Hyphen (_)", "Semicolon (;)"],
        correctAnswer: "Semicolon (;)",
    },
    
    // Question 7/10 - timer is live. Once answered you are prompted with the next question in line. Your score from this question is stored for the total score at the end. 
    
     {
        question: "Question Seven: What is the tag we use to put Javascript inside HTML?",
        answers: ["js", "javascript", "script","scripting"],
        correctAnswer: "'<script>'",
    },
    
    // Question 8/10 - timer is live. Once answered you are prompted with the next question in line. Your score from this question is stored for the total score at the end. 
    
     {
        question: "Question Eight: DOM stands for ____?",
        answers: ["Document Object Model", "Document Object Manipulation", "Document Objective Model","It's short for Dominic, the creator of the DOM"],
        correctAnswer: "Document Object Model",
    },
    
    // Question 9/10 - timer is live. Once answered you are prompted with the next question in line. Your score from this question is stored for the total score at the end. 
    
    {
        question: "Question Nine: Which method is used for debuging purposes in javascript?",
        answers: ["console.message(hello)", "console.log(hello)", "log(hello)","message(hello)"],
        correctAnswer: "console.log()",
    },
    
    // Question 10/10 - timer is live. Once answered you finihsed with the coding test. Your score from this question is added to your scores from questions 1-9 to get the total score. 
    
     {
        question: "Question Ten: Which of the following type of variables takes precedence over other if names are same?",
        answers: ["Global", "Main", "Local", "Preceding"],
        correctAnswer: "Local",
    },

]

// Now that the game is over with, you are presented with a score based of the questions you answered along with adding your initials (3 Letter combo A-Z). That score is then saved in the highscores.html page for viewing