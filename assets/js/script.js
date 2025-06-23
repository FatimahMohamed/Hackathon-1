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

        // add event listeners to answer buttons
        const answerButtons = document.getElementsByClassName("answer-choice");
        for (let answerButton of answerButtons) {
            // add the event listener
            answerButton.addEventListener("click", function () {
                // only give feedback if an answer has not yet been clicked
                if (!answerSelected) {
                    // remove styling from feedback text
                    document.getElementById("feedback").classList.value = "";
                    // check if the answer is correct
                    if (checkAnswer(this.getAttribute("data-answer"), questionSet, questionIndex)) {
                        // update variables
                        document.getElementById("feedback").innerText = "Correct!";
                        document.getElementById("feedback").classList.add("feedback-correct");
                        this.children[0].innerHTML = tickText;
                        this.children[0].classList.add("correct-glow");
                        this.children[0].classList.remove("glow");
                        correct++;
                    } else {
                        document.getElementById("feedback").innerText = "Incorrect.";
                        document.getElementById("feedback").classList.add("feedback-incorrect");
                        this.children[0].innerHTML = crossText;
                        this.children[0].classList.add("incorrect-glow");
                        this.children[0].classList.remove("glow");
                        incorrect++;
                    }
                    // update answer select to true and show next button
                    answerSelected = true;
                    document.getElementById("feedback-box").classList.remove("hidden");
                    // update the score
                    updateScore(correct, incorrect);                    
                }
            });
        }

        // get question set
        let questionSet = getQuestions(QUESTIONS, difficulty, amount);

        // set the first question
        setQuestion(questionSet, questionIndex);
        setBgColour(questionSet, questionIndex);

        // add the event listener to the next button so that the next question can be set, or the quiz ended if it is the final question.
        // also, we only want this button to be clickable if the question has been answered.
        let nextQuestionButton = document.getElementById("next-question-button");
        nextQuestionButton.addEventListener("click", function () {
            // check if answer has been selected, and if the quiz is not over (should stop people from messing with the HTML)
            if (answerSelected && quizFinished === false) {
                // check if final question
                if (questionIndex === amount - 1) {
                    // hide the button again
                    document.getElementById("feedback-box").classList.add("hidden");
                    endQuiz(correct, incorrect);
                } else {
                    // hide the button again
                    document.getElementById("feedback-box").classList.add("hidden");
                    // update variables, hide next button, remove the feedback, and show the next question
                    questionIndex++;
                    answerSelected = false;
                    document.getElementById("feedback").innerText = "";
                    setQuestion(questionSet, questionIndex);
                    setBgColour(questionSet, questionIndex);

                }
            }
        });
    }
}
/**
 * shuffles given array
 */
function shuffle(array) {
    const copy = array.slice();
    let result = [];
    while (copy.length > 0) {
        const randomIndex = Math.floor(Math.random() * copy.length);
        result.push(copy[randomIndex]);
        copy.splice(randomIndex, 1);
    }
    return result;
}

/**
 * gets the questions from the question list
 */
function getQuestions(questions, difficulty = "easy", amount = 8) {

    // variable to temporarily store all the questions of the chosen difficulty
    let tempArr = [];

    // add the questions to the temporary array
    for (let question of questions) {
        if (question.difficulty === difficulty) {
            tempArr.push(question);
        }
    }

    // shuffle the questions
    tempArr = shuffle(tempArr);

    // shuffle the answer order for each question
    for (let i = 0; i < tempArr.length; i++) {
        tempArr[i].answers = shuffle(tempArr[i].answers);
    }

    // return the amount of questions requested
    return tempArr.splice(0, amount);

}

/**
 * checks the answer chosen
 */
function checkAnswer(answer, questions, questionIndex) {

    if (answer === questions[questionIndex].correct) {
        return true;
    } else {
        return false;
    }
}

/**
 * set question on the page
 */
function setQuestion(questions, questionIndex) {

    // set the question number
    document.getElementById("question-number").innerText = questionIndex + 1;

    // set the question text
    document.getElementById("question-text").innerText = questions[questionIndex].text;

    // get the answer boxes
    const answerBoxes = document.getElementsByClassName("answer");

    // for each answer box, set the answer and the data attribute of the parent for checking. also need a variable to store each answer
    let answerIndex = 0;
    for (let answerBox of answerBoxes) {
        // set the answer text
        answerBox.innerText = questions[questionIndex].answers[answerIndex];
        // set the data attribute
        answerBox.parentElement.setAttribute("data-answer", questions[questionIndex].answers[answerIndex]);
        // remove the incorrect or correct glow
        answerBox.classList.remove("correct-glow");
        answerBox.classList.remove("incorrect-glow");
        // re-add the glow
        answerBox.classList.add("glow");
        // increment
        answerIndex++;
    }
}

/**
 * update the score on the page
 */
function updateScore(correct, incorrect) {

    // set the correct text
    document.getElementById("correct-amount").innerText = correct;

    // set the incorrect text
    document.getElementById("incorrect-amount").innerText = incorrect;
}

/**
 * end the quiz once all questions answered
 */
function endQuiz(correct, incorrect) {

    // end the quiz
    quizFinished = true;

    // hide the boxes
    document.getElementById("question-box").classList.add("hidden");
    document.getElementById("answer-box").classList.add("hidden");
    document.getElementById("feedback-box").classList.add("hidden");

    // unhide the final score box
    document.getElementById("final-result-box").classList.remove("hidden");

    // set the scores
    document.getElementById("final-correct-amount").innerText = correct;
    document.getElementById("final-incorrect-amount").innerText = incorrect;

    // add the event listener to the retry button. only allow it to activate if the quiz is finished
    const retryButton = document.getElementById("retry-button");
    retryButton.addEventListener("click", function () {
        // only activate if the quiz is finished
        if (quizFinished) {

            // reload the page to reset the quiz
            location.reload();

        }
    });
}

/**
 * set the background colour of each planet
 */
function setBgColour(questions, questionIndex) {

    // list of the classes
    const coloursList = ["Mercury", "Venus", "Mars", "Earth", "Jupiter", "Saturn", "Uranus", "Neptune"];

    // set an index for adding the class
    let classIndex = 0;

    // loop through all the buttons
    const answerButtons = document.getElementsByClassName("answer");
    for (let answerButton of answerButtons) {
        // remove each class from the list
        for (let colour of coloursList) {
            answerButton.classList.remove(`${colour}`);
        }
        // add the correct class
        answerButton.classList.add(`${questions[questionIndex].answers[classIndex]}`);
        classIndex++;
    }
}

/**
 *
 */
// Functionality for the progress bar 
document.getElementById('next-question-button').addEventListener('click', function () {
    increaseProgress();
});

let progress = 12.5;

/**
 * increase the length of the progress bar
 */
function increaseProgress() {
    if (progress < 100) {
        progress += 12.5;
        document.getElementById('progress-bar').style.width = progress + '%';
    }
}