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
        //tạo và thêm các element dựa trên cấu trúc file html
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
            input.name = quiz.id; //câu trả lời có cùng 1 question sẽ có name giống nhau
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

//thêm sự kiện click cho nút random
randomAnswerBtn.addEventListener("click", () => {
    quizes.forEach((quiz) => {
        const randomIndex = Math.floor(Math.random() * quiz.answers.length);         //giá trị random trong khoảng số lượng câu trả lời của từng quiz
        const radioInputs = document.querySelectorAll(`input[name="${quiz.id}"]`);   //chọn tất cả các input đáp án

        radioInputs[randomIndex].checked = true;                                     //set giá trị input của câu trả lời với số random tương ứng
    });
});


renderQuizzes(); //render các element khi load trang

