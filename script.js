const questions = [
    {
        question: "Siapa penemu lampu pijar?",
        options: ["Nikola Tesla", "Albert Einstein", "Thomas Edison", "Isaac Newton"],
        answer: "Thomas Edison"
    },
    {
        question: "Berapa hasil dari 7 x 8?",
        options: ["42", "48", "56", "64"],
        answer: "56"
    },
    {
        question: "Negara mana yang memiliki bendera merah dan putih?",
        options: ["Indonesia", "Jepang", "Thailand", "Malaysia"],
        answer: "Indonesia"
    },
    {
        question: "Apa nama planet terbesar di tata surya?",
        options: ["Mars", "Venus", "Jupiter", "Saturnus"],
        answer: "Jupiter"
    },
    {
        question: "Apa nama ibu kota Australia?",
        options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
        answer: "Canberra"
    },
    {
        question: "Negara mana yang terkenal dengan menara Eiffel?",
        options: ["Italia", "Spanyol", "Jerman", "Prancis"],
        answer: "Prancis"
    },
    {
        question: "Berapakah jumlah provinsi di Indonesia saat ini?",
        options: ["34", "38", "40", "36"],
        answer: "38"
    },
    {
        question: "Mata uang resmi Jepang adalah?",
        options: ["Yen", "Won", "Baht", "Ringgit"],
        answer: "Yen"
    },
    {
        question: "Tahun berapakah Indonesia merdeka?",
        options: ["1942", "1945", "1950", "1965"],
        answer: "1945"
    }
];

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 10;
let timer;

const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options");
const timeDisplay = document.getElementById("time-left");
const scoreDisplay = document.getElementById("score-value");
const nextButton = document.getElementById("next-btn");

function startQuiz() {
    showQuestion();
}

function showQuestion() {
    clearInterval(timer);
    timeLeft = 10;
    timeDisplay.textContent = timeLeft;

    const question = questions[currentQuestionIndex];
    questionText.textContent = question.question;
    optionsContainer.innerHTML = "";

    question.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option");
        button.onclick = () => checkAnswer(option);
        optionsContainer.appendChild(button);
    });

    startTimer();
}

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        timeDisplay.textContent = timeLeft;

        if (timeLeft === 0) {
            clearInterval(timer);
            disableOptions();
            setTimeout(nextQuestion, 1000);
        }
    }, 1000);
}

function checkAnswer(selectedOption) {
    clearInterval(timer);
    const correctAnswer = questions[currentQuestionIndex].answer;
    const options = document.querySelectorAll(".option");

    options.forEach(option => {
        if (option.textContent === correctAnswer) {
            option.classList.add("correct");
        } else if (option.textContent === selectedOption) {
            option.classList.add("wrong");
        }
        option.disabled = true;
    });

    if (selectedOption === correctAnswer) {
        score += 10;
        scoreDisplay.textContent = score;
    }

    setTimeout(nextQuestion, 1000);
}

function disableOptions() {
    document.querySelectorAll(".option").forEach(option => {
        option.disabled = true;
    });
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        alert(`Game selesai! Skor akhir: ${score}`);
        location.reload(); // Restart game
    }
}

nextButton.addEventListener("click", nextQuestion);

startQuiz();
