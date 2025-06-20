// questions list
const QUESTIONS = [
    {
        text: "Which of the following planets is located closest to the Sun?",
        answers: ["Mercury", "Earth", "Saturn", "Neptune"],
        correct: "Mercury",
        difficulty: "easy"
    },
    {
        text: "Which of the following planets is located furthest away from the Sun?",
        answers: ["Venus", "Mars", "Saturn", "Neptune"],
        correct: "Neptune",
        difficulty: "easy"
    },
    {
        text: "Which of the following planets is located closest to Earth?",
        answers: ["Mercury", "Venus", "Mars", "Uranus"],
        correct: "Mars",
        difficulty: "easy"
    },
    {
        text: "Which of the following planets is located furthest from Earth?",
        answers: ["Venus", "Mars", "Saturn", "Uranus"],
        correct: "Uranus",
        difficulty: "easy"
    },
    {
        text: "Which of the following planets is best known for its red colour?",
        answers: ["Mars", "Earth", "Jupiter", "Uranus"],
        correct: "Mars",
        difficulty: "easy"
    },
    {
        text: "Which of the following planets is best known for its impressive rings?",
        answers: ["Mercury", "Venus", "Saturn", "Neptune"],
        correct: "Saturn",
        difficulty: "easy"
    },
    {
        text: "Which of the following planets is best known for spinning vertically?",
        answers: ["Mars", "Earth", "Jupiter", "Uranus"],
        correct: "Uranus",
        difficulty: "easy"
    },
    {
        text: "Which of the following planets is famous for its large, red spot??",
        answers: ["Venus", "Earth", "Jupiter", "Saturn"],
        correct: "Jupiter",
        difficulty: "easy"
    },
    {
        text: "Which of the following planets is the largest in the Solar System?",
        answers: ["Earth", "Jupiter", "Uranus", "Neptune"],
        correct: "Jupiter",
        difficulty: "easy"
    },
    {
        text: "Which of the following planets is the smallest in the Solar System?",
        answers: ["Mercury", "Mars", "Saturn", "Uranus"],
        correct: "Mercury",
        difficulty: "easy"
    },
    {
        text: "Which of the following planets does not have any rings?",
        answers: ["Venus", "Jupiter", "Uranus", "Neptune"],
        correct: "Venus",
        difficulty: "medium"
    },
    {
        text: "Which of the following planets takes precisely one year to orbit the Sun?",
        answers: ["Mercury", "Earth", "Saturn", "Neptune"],
        correct: "Earth",
        difficulty: "medium"
    },
    {
        text: "On which of the following planets does a day last the longest?",
        answers: ["Venus", "Mars", "Jupiter", "Uranus"],
        correct: "Venus",
        difficulty: "medium"
    },
    {
        text: "On which of the following planets does a day last the shortest?",
        answers: ["Earth", "Jupiter", "Saturn", "Uranus"],
        correct: "Jupiter",
        difficulty: "medium"
    },
    {
        text: "Which of the following planets has the most moons?",
        answers: ["Mars", "Jupiter", "Saturn", "Neptune"],
        correct: "Saturn",
        difficulty: "medium"
    },
    {
        text: "Which of the following planets has the least moons?",
        answers: ["Jupiter", "Saturn", "Uranus", "Neptune"],
        correct: "Neptune",
        difficulty: "medium"
    },
    {
        text: "Which of the following planets is the smallest?",
        answers: ["Venus", "Earth", "Mars", "Neptune"],
        correct: "Mars",
        difficulty: "medium"
    },
    {
        text: "Which of the following planets is the largest?",
        answers: ["Mars", "Saturn", "Uranus", "Neptune"],
        correct: "Saturn",
        difficulty: "medium"
    },
    {
        text: "Which of the following planets is the largest?",
        answers: ["Venus", "Earth", "Uranus", "Neptune"],
        correct: "Uranus",
        difficulty: "medium"
    },
    {
        text: "Which of the following planets has the highest surface temperature?",
        answers: ["Mercury", "Venus", "Earth", "Mars"],
        correct: "Venus",
        difficulty: "medium"
    },
    {
        text: "Which of the following planet's atmosphere contains the highest percentage of helium?",
        answers: ["Earth", "Mars", "Jupiter", "Uranus"],
        correct: "Uranus",
        difficulty: "hard"
    },
    {
        text: "Which of the following planet's atmosphere contains the highest percentage of hydrogen?",
        answers: ["Mercury", "Saturn", "Uranus", "Neptune"],
        correct: "Saturn",
        difficulty: "hard"
    },
    {
        text: "Which of the following planets has the largest axial tilt?",
        answers: ["Earth", "Jupiter", "Saturn", "Neptune"],
        correct: "Neptune",
        difficulty: "hard"
    },
    {
        text: "Which of the following planets has the smallest axial tilt?",
        answers: ["Venus", "Earth", "Jupiter", "Saturn"],
        correct: "Venus",
        difficulty: "hard"
    },
    {
        text: "Which of the following planets has the largest orbital inclination with respect to the Sun?",
        answers: ["Earth", "Mars", "Uranus", "Neptune"],
        correct: "Earth",
        difficulty: "hard"
    },
    {
        text: "Which of the following planets has the smallest orbital inclination with respect to the Sun?",
        answers: ["Mercury", "Venus", "Mars", "Saturn"],
        correct: "Mercury",
        difficulty: "hard"
    },
    {
        text: "Which of the following planets has the smallest orbital inclination with respect to the ecliptic plane?",
        answers: ["Earth", "Mars", "Jupiter", "Uranus"],
        correct: "Earth",
        difficulty: "hard"
    },
    {
        text: "Which of the following planets has the largest orbital inclination with respect to the ecliptic plane?",
        answers: ["Earth", "Mars", "Uranus", "Neptune"],
        correct: "Mars",
        difficulty: "hard"
    }
];

// some necessary globals
let quizRunning = false;
let quizFinished = false;
const tickText = '<i class="fa-solid fa-check feedback-mark-tick"></i>';
const crossText = '<i class="fa-solid fa-xmark feedback-mark-cross"></i>';


// on document load, open up the settings menu and add event listener to start button
document.addEventListener("DOMContentLoaded", function () {

    // click on settings menu
    document.getElementById("settings-button").click();

    // add event listener to start button
    let startButton = document.getElementById("start-button");
    startButton.addEventListener("click", runQuiz);

});

/**
 * initialise quiz
 */
function runQuiz() {
    // first, check if the quiz is running. only start the quiz if not
    if (quizRunning === false) {

        // unhide the correct boxes
        document.getElementById("question-box").classList.remove("hidden");
        document.getElementById("answer-box").classList.remove("hidden");
        document.getElementById("feedback-box").classList.remove("hidden");
        document.getElementById("initial-box").classList.add("hidden");

        // update the state of the quiz and set difficulty
        quizRunning = true;
        let difficulty = "easy";

        // disable the radio buttons, get the difficulty chosen, and update the text of the close button in the modal
        let radioButtons = document.getElementsByClassName("difficulty-button");
        for (let radioButton of radioButtons) {
            // disable the button
            radioButton.disabled = true;
            // set the difficulty if checked
            if (radioButton.checked) {
                difficulty = radioButton.value;
            }

        }

        // update button text to better show what it does
        document.getElementById("start-button").innerText = "Close";

        // set variables
        let questionIndex = 0;
        let correct = 0;
        let incorrect = 0;
        let amount = 8;
        let answerSelected = false;
    }
}
/**
 * shuffles given array
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
 * gets the questions from the question list
 */
function getQuestions(questions, difficulty = "easy", amount = 8) {

}

/**
 * checks the answer chosen
 */
function checkAnswer(answer, questions, questionIndex) {

}

/**
 * set question on the page
 */
function setQuestion(questions, questionIndex) {

}

/**
 * update the score on the page
 */
function updateScore(correct, incorrect) {

}

/**
 * end the quiz once all questions answered
 */
function endQuiz(correct, incorrect) {

}

/**
 * set the background colour of each planet
 */
function setBgColour(questions, questionIndex) {

}