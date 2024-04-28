// Quiz questions and answers
const questions = [
    {
        question: "What is the capital of France?",
        choices: ["Paris", "London", "Rome", "Berlin"],
        correct: 0
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        choices: ["William Shakespeare", "Charles Dickens", "Mark Twain", "Jane Austen"],
        correct: 0
    },
    {
        question: "Which planet is known as the Red Planet?",
        choices: ["Mars", "Earth", "Venus", "Jupiter"],
        correct: 0
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const choicesElement = document.getElementById("choices");

    choicesElement.innerHTML = "";

    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    currentQuestion.choices.forEach((choice, index) => {
        const button = document.createElement("button");
        button.className = "choice";
        button.textContent = choice;
        button.addEventListener("click", () => selectChoice(index));
        choicesElement.appendChild(button);
    });
}
function selectChoice(index) {
    const currentQuestion = questions[currentQuestionIndex];

    if (index === currentQuestion.correct) {
        score++;
    }

    currentQuestionIndex++; 
    if (currentQuestionIndex < questions.length) {
        loadQuestion(); 
    } else {
        displayScore(); 
    }
}

function displayScore() {
    const scoreElement = document.getElementById("score");
    scoreElement.textContent = `Your score is ${score} out of ${questions.length}.`;
}

document.getElementById("next-question").addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    }
});

document.addEventListener("DOMContentLoaded", loadQuestion);
