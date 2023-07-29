// main.js
const quizes = [
    {
        id: 1,
        question: "1 + 1 = ?",
        answers: [1, 2, 3, 4],
    },
    {
        id: 2,
        question: "2 + 2 = ?",
        answers: [2, 3, 4, 5],
    },
    {
        id: 3,
        question: "3 + 3 = ?",
        answers: [3, 4, 5, 6],
    },
];

const quizContainer = document.querySelector(".quiz-container");
const randomAnswerBtn = document.getElementById("btn");

const renderQuizzes = () => {
    quizContainer.innerHTML = "";
    quizes.forEach((quiz) => {
        const quizItem = document.createElement("div");
        quizItem.classList.add("quiz-item");

        const questionHeading = document.createElement("h3");
        questionHeading.textContent = quiz.question;

        const quizAnswers = document.createElement("div");
        quizAnswers.classList.add("quiz-answer");

        quiz.answers.forEach((answer) => {
            const answerItem = document.createElement("div");
            answerItem.classList.add("quiz-answer-item");

            const input = document.createElement("input");
            input.type = "radio";
            input.name = quiz.id; 
            const label = document.createElement("label");
            label.textContent = answer;

            answerItem.appendChild(input);
            answerItem.appendChild(label);

            quizAnswers.appendChild(answerItem);
        });

        quizItem.appendChild(questionHeading);
        quizItem.appendChild(quizAnswers);

        quizContainer.appendChild(quizItem);
    });
};


randomAnswerBtn.addEventListener("click", () => {
    quizes.forEach((quiz) => {
        const randomIndex = Math.floor(Math.random() * quiz.answers.length);
        const radioInputs = document.querySelectorAll(`input[name="${quiz.id}"]`);

        radioInputs[randomIndex].checked = true;
    });
});


renderQuizzes();

