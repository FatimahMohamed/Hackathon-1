// question list
const questions = [
    {
        question: "test question 1",
        answers: [
            {answer: "answer 0", correct: false},
            {answer: "answer 1", correct: false},
            {answer: "answer 2", correct: false},
            {answer: "answer 3", correct: true}
        ],
        difficulty: 0
    },
    {
        question: "test question 2",
        answers: [
            {answer: "answer 0", correct: false},
            {answer: "answer 1", correct: false},
            {answer: "answer 2", correct: true},
            {answer: "answer 3", correct: false}
        ],
        difficulty: 0
    }
];
document.addEventListener("DOMContentLoaded", function() { 
    // this clicks the settings button on loading
    document.getElementById("settings-button").click();
});