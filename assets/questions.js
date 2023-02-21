// This is the JS for the questions within the coding test

// Psuedocode for the structure of the coding test - 10 questions - 60 seconds total - getting a question wrong is minus 6 seconds. Game is over ONCE: 1. the time limit is reached 2. all questions are answered before time limit is reached

// Question 1/10 - timer starts at 60 seconds. Once answered you are prompted with the next question in line. Your score from this question is stored for the total score at the end. 

var question1 = {
    question: "Arrays in JavaScript are defined by which of the following statements?",
    answers: ["It is an ordered list of values", "It is an ordered list of objects", "It is an ordered list of strings","It is an ordered list of functions"],
    correctAnswer: "It is an ordered list of values",
}

// Question 2/10 - timer is live. Once answered you are prompted with the next question in line. Your score from this question is stored for the total score at the end. 

var question2 = {
    question: "Javascript is an _______ language",
    answers: ["Object-Oriented", "Object-Based", "Procedural","Static"],
    correctAnswer: "Object-Based",
}

// Question 3/10 - timer is live. Once answered you are prompted with the next question in line. Your score from this question is stored for the total score at the end. 

var question3 = {
    question: "Which of the following keywords is used to define a variable in Javascript?",
    answers: ["var", "let", "Both A & B","Yoo here's a variable dude"],
    correctAnswer: "Both A & B",
}

// Question 4/10 - timer is live. Once answered you are prompted with the next question in line. Your score from this question is stored for the total score at the end. 

var question4 = {
    question: "Which function is used to serialize an object into a JSON string in Javascript?",
    answers: ["stringify()", "parse()", "convert()","serialization()"],
    correctAnswer: "stringify()",
}

// Question 5/10 - timer is live. Once answered you are prompted with the next question in line. Your score from this question is stored for the total score at the end. 

var question5 = {
    question: " How do you stop an interval timer in Javascript?",
    answers: ["clearTimer", "intervalOver", "timerStop","clearInterval"],
    correctAnswer: "clearInterval",
}

// Question 6/10 - timer is live. Once answered you are prompted with the next question in line. Your score from this question is stored for the total score at the end. 

var question6 = {
    question: "Which symbol is used separate JavaScript statements?",
    answers: ["Comma (,)", "Colon (:)", "Hyphen (_)", "Semicolon (;)"],
    correctAnswer: "Semicolon (;)",
}

// Question 7/10 - timer is live. Once answered you are prompted with the next question in line. Your score from this question is stored for the total score at the end. 

var question7 = {
    question: "What is the tag we use to put Javascript inside HTML?",
    answers: ["<js>", "<javascript>", "<script>","<scripting>"],
    correctAnswer: "<script>",
}

// Question 8/10 - timer is live. Once answered you are prompted with the next question in line. Your score from this question is stored for the total score at the end. 

var question8 = {
    question: "DOM stands for ____?",
    answers: ["Document Object Model", "Document Object Manipulation", "Document Objective Model","It's short for Dominic, the creator of the DOM"],
    correctAnswer: "Document Object Model",
}

// Question 9/10 - timer is live. Once answered you are prompted with the next question in line. Your score from this question is stored for the total score at the end. 

var question9 = {
    question: "Which method is used for debuging purposes in javascript?",
    answers: ["console.message(hello)", "console.log(hello)", "log(hello)","message(hello)"],
    correctAnswer: "console.log()",
}

// Question 10/10 - timer is live. Once answered you finihsed with the coding test. Your score from this question is added to your scores from questions 1-9 to get the total score. 

var question10 = {
    question: "Which of the following type of variables takes precedence over other if names are same?",
    answers: ["Global", "Main", "Local", "Preceding"],
    correctAnswer: "Local",
}


export { question1, question2, question3, question4, question5, question6, question7, question8, question9, question10 };
// Now that the game is over with, you are presented with a score based of the questions you answered along with adding your initials (3 Letter combo A-Z). That score is then saved in the highscores.html page for viewing