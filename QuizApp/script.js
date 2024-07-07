const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers: [
               {text: "Shark", correct: "false"},
               {text: "Blue Whale", correct: "true"},
               {text: "Elephant", correct: "false"},
               {text: "Gorilla", correct: "false"},
        ]
    },
    {
        question: "What is the smallest planet in our solar system?",
        answers: [
            {text: "Mercury", correct: "true"},
            {text: "Mars", correct: "false"},
            {text: "Venus", correct: "false"},
            {text: "Pluto", correct: "false"}
        ]
    },
    {
        question: "Which element has the highest melting point?",
        answers: [
            {text: "Iron", correct: "false"},
            {text: "Tungsten", correct: "true"},
            {text: "Gold", correct: "false"},
            {text: "Silver", correct: "false"}
        ]
    },
    {
        question: "What is the capital city of Australia?",
        answers: [
            {text: "Sydney", correct: "false"},
            {text: "Melbourne", correct: "false"},
            {text: "Canberra", correct: "true"},
            {text: "Perth", correct: "false"}
        ]
    },
    {
        question:"Which planet is known as the Red Planet?",
        answers:[
            {text:"Jupiter",correct:"false"},
            {text:"Mars",correct:"true"},
            {text:"Saturn",correct:"false"},
            {text:"Venus",correct:"false"}
        ]
    },
    {
        question:"What is the main component of the sun's energy?",
        answers:[
            {text:"Liquid lava flows",correct:"false"},
            {text:"Nuclear fusion reactions",correct:"true"},
            {text:"Chemical explosions",correct:"false"},
            {text:"Magnetic storms",correct:"false"}
        ]
    },
    {
        question:"Who wrote the play 'Romeo and Juliet'?",
        answers:[
            {text:"William Shakespeare",correct:"true"},
            {text:"Charles Dickens",correct:"false"},
            {text:"Jane Austen",correct:"false"},
            {text:"Mark Twain",correct:"false"}
        ]
    },
    {
        question: "Which country gifted the Statue of Liberty to the USA?",
        answers: [
            {text: "France", correct: "true"},
            {text: "Canada", correct: "false"},
            {text: "England", correct: "false"},
            {text: "Spain", correct:" false"}
        ]
    },
    {
        question: "Which country gifted the Statue of Liberty to the USA?",
        answers: [
            {text: "France", correct: "true"},
            {text: "Canada", correct: "false"},
            {text: "England", correct: "false"},
            {text: "Spain", correct:" false"}
        ]
    },
    {
        question: "What is the largest desert in the world?",
        answers: [
            {text: "Sahara", correct: "false"},
            {text: "Arabian", correct: "false"},
            {text: "Gobi", correct: "false"},
            {text: "Antarctica", correct: "true"}
        ]
    },
    {
        question: "Which human organ is capable of regenerating tissue?",
        answers: [
            {text: "Heart", correct: "false"},
            {text: "Brain", correct: "false"},
            {text: "Liver", correct: "true"},
            {text: "Lung", correct: "false"}
        ]
    },
    {
        question: "What is the capital city of Australia?",
        answers: [
            {text: "Sydney", correct: "false"},
            {text: "Melbourne", correct: "false"},
            {text: "Canberra", correct: "true"},
            {text: "Perth", correct: "false"}
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answerButtons");
const nextButton = document.getElementById("nextBtn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
     const button = document.createElement("button");
     button.innerHTML = answer.text;
     button.classList.add("btn");
     answerButton.appendChild(button);

      if(answer.correct){
        button.dataset.correct = answer.correct
      }
     button.addEventListener("click", selectAnswer);
    })

}

function resetState(){
    nextBtn.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}


function selectAnswer(e){
 const selectedBtn = e.target;
 const isCorrect = selectedBtn.dataset.correct === "true";
 if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;
 }
 else{
    selectedBtn.classList.add("incorrect");
 }
 Array.from(answerButton.children).forEach(button=>{ 
    if(button.dataset.correct === "true"){
        button.classList.add("correct");
    }
    else{
        button.disabled = true;
    }
 })
 nextButton.style.display = "block";
}

function showScore(){
    resetState()
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`
    nextButton.innerHTML = "playAgain";
    nextButton.style.display = "block";
}

function handleNextButton(){
currentQuestionIndex++;
if(currentQuestionIndex < questions.length){
    showQuestion();
}
else{
    showScore();
}
}

nextButton.addEventListener("click", ()=>{
 if(currentQuestionIndex < questions.length){
    handleNextButton();
 }
 else{
    startQuiz();
 }
})

startQuiz();