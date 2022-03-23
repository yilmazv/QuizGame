let startQuiz = document.getElementById("startbutton");
let showQuestions = document.getElementById("answers");
let timerShow = document.getElementById("time");
let questionEl = document.getElementById("questions");
let answersEl = document.getElementById("answers");
let mixQuestions;
let indexCurrent;
let questions = [
  {
    question: "Just testing the questions",
    answer: [
      { text: "1", correct: true },
      { text: "2", correct: false },
      { text: "3", correct: false },
      { text: "4", correct: false },
    ],
  },
];

startQuiz.addEventListener("click", function () {
  gameStart();
  timer();
  nextQuestion();
});

function gameStart() {
  startQuiz.classList.add("hide");
  mixQuestions = questions.sort(() => Math.random() - 0.5);
  indexCurrent = 0;
  showQuestions.classList.remove("hide");
}
function timer() {
  let sec = 60;
  let timer = setInterval(function () {
    timerShow.textContent = "Time Left: " + sec;
    sec--;
    if (sec < 0) {
      clearInterval(timer);
    }
  }, 1000);
}

function nextQuestion() {
  displayQuestion(mixQuestions[indexCurrent]);
}


function displayQuestion(question) {
  questionEl.innerText = question.question;
  question.answer.array.forEach((answer) => {
    let answerBtns = document.createElement("button");
    answerBtns.innerText = answer.text;
    answerBtns.classList.add("btn");
    if(answer.correct = true){
      answerBtns.dataset.correct = answer.correct
    }
  }
};
function correctAnswer(){}
function gameEnd() {}
