// question list
const questions = [
    {
        question: "test question 1",
        answers: [
            { answer: "answer 0", correct: false },
            { answer: "answer 1", correct: false },
            { answer: "answer 2", correct: false },
            { answer: "answer 3", correct: true }
        ],
        difficulty: 0
    },
    {
        question: "test question 2",
        answers: [
            { answer: "answer 0", correct: false },
            { answer: "answer 1", correct: false },
            { answer: "answer 2", correct: true },
            { answer: "answer 3", correct: false }
        ],
        difficulty: 0
    },
    {
        question: "test question 3",
        answers: [
            { answer: "answer 0", correct: false },
            { answer: "answer 1", correct: false },
            { answer: "answer 2", correct: false },
            { answer: "answer 3", correct: true }
        ],
        difficulty: 0
    },
    {
        question: "test question 4",
        answers: [
            { answer: "answer 0", correct: false },
            { answer: "answer 1", correct: false },
            { answer: "answer 2", correct: true },
            { answer: "answer 3", correct: false }
        ],
        difficulty: 0
    },
    {
        question: "test question 5",
        answers: [
            { answer: "answer 0", correct: false },
            { answer: "answer 1", correct: false },
            { answer: "answer 2", correct: false },
            { answer: "answer 3", correct: true }
        ],
        difficulty: 0
    },
    {
        question: "test question 6",
        answers: [
            { answer: "answer 0", correct: false },
            { answer: "answer 1", correct: false },
            { answer: "answer 2", correct: true },
            { answer: "answer 3", correct: false }
        ],
        difficulty: 0
    }
];

document.addEventListener("DOMContentLoaded", function () {
    // this clicks the settings button on loading
    // document.getElementById("settings-button").click();

    // Add event listener to start button
    let startButton = document.getElementById("start-button");
    startButton.addEventListener("click", runQuiz);

});


/**
 * run initial set up
 */
function runQuiz() {

    // set variables
    let difficulty = 0;
    let amount = 3;
    let questionIndex = 0;

    // get questions
    const questionSet = getQuestions(questions);
    showQuestion(questionIndex, questionSet);

}

/**
 * get the questions for the quiz
 */
function getQuestions(questions, difficulty = 0, amount = 3) {

    // variable to store questions
    let questionsOfDifficulty = [];

    // loop through all questions
    for (let question of questions) {
        if (question.difficulty === difficulty) {
            questionsOfDifficulty.push(question);
        }
    }

    // shuffle questions
    questionsOfDifficulty = shuffle(questionsOfDifficulty);    

    // return the shuffled questions of amount specified
    return questionsOfDifficulty.splice(0, amount);

}

/**
 * shuffle array passed in
 */
function shuffle(array) {

    const copy = array.slice();
    let result = [];
    while (copy.length > 0) {
        const randomIndex = Math.floor(Math.random() * copy.length)
        result.push(copy[randomIndex]);
        copy.splice(randomIndex, 1);
    }
    return result;
}

/**
 * show the question
 */
function showQuestion(questionIndex, questionArray) {
    
    // get question number from document
    const questionNumber = document.getElementById("question-number");
    questionNumber.innerText = questionIndex + 1;

    // get question text from document
    const questionText = document.getElementById("question-text");
    questionText.innerText = questionArray[questionIndex].question;
    console.log(questionArray[questionIndex].question);

    // get answer choices from document
    const answers = document.getElementsByClassName("answer");
    // for getting the answers from the question
    let answerIndex = 0;
    for (let answer of answers) {
        answer.innerText = questionArray[questionIndex].answers[answerIndex].answer;
        answerIndex++;
    }
}

/**
 * check answer
 */
function checkAnswer(questionIndex, questionArray) {

}

/**
 * end the game
 */
function endGame() {
    
}