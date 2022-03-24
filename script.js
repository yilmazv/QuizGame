let startQuiz = document.getElementById("startbutton");
let showQuestions = document.getElementById("answers");
let timerShow = document.getElementById("time");
let questionEl = document.getElementById("questions");
let answersEl = document.getElementById("answers");
let playerNameEl = document.getElementById("user");
let count = 0;
let holdingIndex = 0;
let sec = 60;

// let questions = [
//   {
//     question: "Just testing the questions",
//     answer: [
//       { text: "1", correct: true },
//       { text: "2", correct: false },
//       { text: "3", correct: false },
//       { text: "4", correct: false },
//     ],
//   },
// {
//     question: "Just testing the questions",
//     answer: [
//       { text: "1", correct: true },
//       { text: "2", correct: false },
//       { text: "3", correct: false },
//       { text: "4", correct: false },
//     ],
//   },
// ];
// creating the questions and answers object and array.
let questions = ["Select the lowest number", "Selecte the highest number"];
let answers = [
  [
    { text: "1", correct: true },
    { text: "2", correct: false },
    { text: "3", correct: false },
    { text: "4", correct: false },
  ],
  [
    { text: "1", correct: true },
    { text: "2", correct: false },
    { text: "3", correct: false },
    { text: "4", correct: false },
  ],
];

// console.log(answers[holdingIndex].length);

startQuiz.addEventListener("click", function () {
  gameStart();
  timer();
  displayQuestion();
});

function gameStart() {
  startQuiz.classList.add("hide");
  showQuestions.classList.remove("hide");
}
function timer() {
  let timer = setInterval(function () {
    timerShow.textContent = "Time Left: " + sec;
    sec--;
    if (sec < 0) {
      clearInterval(timer);
    }
  }, 1000);
  return sec;
}
// this is the function that that goes to the array and selects the question and then selects and answer
function displayQuestion() {
  questionEl.innerText = questions[holdingIndex];
  for (let i = 0; i < answers[holdingIndex].length; i++) {
    let answerBtns = document.getElementById(`${i}`);
    answerBtns.innerText = answers[holdingIndex][i].text;
    answersEl.appendChild(answerBtns);
    answerBtns.addEventListener("click", () => {
      holdingIndex++;
      if (holdingIndex < questions.length) {
        displayQuestion();
        // console.log(answers);
        // console.log(answers[i][i]).correct;

        if (answers[i][i].correct === true) {
          count++;
          console.log(count);
          displayQuestion();
        }
      } else {
        sec = sec - 1;
      }
      if (i > questions.length || sec == 0) {
        gameEnd();
      }
    });
  }
}
// promts the user to put their initals and stores it to local storage
function gameEnd() {
  let nameOfPlayer = prompt("Enter your initals");
  localStorage.setItem("nameofplayer", nameOfPlayer);
  localStorage.setItem("score", JSON.stringify(count));
  playerNameEl.innerText = nameOfPlayer + " , " + count;
  sec = 0;
}
// add class to buttons
// hide old buttons
// add a check inside of event listener
// if answers.correct = true
// max number check for the question
// }
// //   questionEl.innerText = question.question;
// //   question.answer.forEach((answer) => {
// //     let answerBtns = document.createElement("button");
// //     answerBtns.innerText = answer.text;
// //     answerBtns.classList.add("btn");
// //     if ((answer.correct = true)) {
// //       answerBtns.dataset.correct = answer.correct;
// //     }
// //     answerBtns.addEventListener("click",correctAnswer() => {
// //       answersEl.appendChild(answerBtns)
// //     })
// //   });
// // }
