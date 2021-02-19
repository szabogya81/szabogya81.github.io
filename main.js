const startButton = document.querySelector('.start-button');
const contentContainer = document.querySelector('.content-container');
const quizResult = document.querySelector('.quiz-result');
const contentUl = document.querySelector('.content-container ul');
const hearderOne = document.querySelector('.content-container h1');
const hearderTwo = document.querySelector('.content-container h2');
const question = document.querySelector('.question');
const answer = document.querySelector('.answer');
const checkOpts = document.querySelectorAll('.check-opt');
const options = document.querySelectorAll('.option');
const getAnswerButton = document.querySelector('.get-answer');
const nextQuestionButton = document.querySelector('.next');
const counterHolder = document.querySelector('.counter');
let ready = false;
let points = 0;
let questionCounter = 0;
const quiz = shuffle(quizInput); // quizInput;
const questionNumber = quiz.length;

function shuffle(array) {
  let currentIndex = array.length; let temporaryValue; let
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// Kérdés lap felépítése
const questionBuilder = (i) => {
  hearderOne.textContent = quiz[i].header1;
  hearderTwo.textContent = quiz[i].header2;
  question.innerHTML = quiz[i].question;
  options.forEach((element, index) => {
    const opt = quiz[i].options;
    element.textContent = opt[index];
  });
  counterHolder.textContent = `${questionCounter + 1} / ${questionNumber}`;
};

// Lépés a következő kérdésre
const getNext = () => {
  if (ready) {
    ready = false;
    questionCounter += 1;
    if (questionCounter === questionNumber) {
      hearderOne.textContent = 'Kvíz eredmény';
      hearderTwo.classList.add('hide');
      question.classList.add('hide');
      answer.classList.add('hide');
      nextQuestionButton.classList.add('hide');
      contentUl.classList.add('hide');
      const percent = Math.round(points / (questionNumber / 100));
      let message = '';
      if (percent >= 50) message = '<div>Gratulálok!<br><b>Szép eredmény!</b>';
      quizResult.innerHTML = `pontszám: <span>${points} / ${questionNumber}</span><p>${percent}%</p>${message}<a href="index.html">Újrakezdés</a>`;
      quizResult.classList.remove('hide');
    } else {
      getAnswerButton.classList.remove('hide');
      nextQuestionButton.classList.add('hide');
      answer.classList.add('hide');
      answer.classList.remove('filter-ok', 'filter-error');
      options.forEach((element) => element.classList.remove('correct'));
      checkOpts.forEach((element) => element.checked = false);
      questionBuilder(questionCounter);
    }
  }
};

// A helyes válasz megjelenítése
const showAnswer = (answers) => {
  if (parseInt(answers, 10) === parseInt(quiz[questionCounter].result, 10)) {
    answer.innerHTML = `<p class="ok">Helyes válasz.</p>${quiz[questionCounter].answer}`;
    answer.classList.add('filter-ok');
    points += 1;
  } else {
    answer.innerHTML = `<p class="error">Hibás válasz</p>A helyes válasz: <b>${quiz[questionCounter].results}</b><br>${quiz[questionCounter].answer}`;
    answer.classList.add('filter-error');
  }
  // helyes opció jelölése
  options.forEach((element, index) => {
    const bool = quiz[questionCounter].boolres;
    if (bool[index] === true) element.classList.add('correct');
  });
  answer.classList.remove('hide');
  nextQuestionButton.classList.remove('hide');
  getAnswerButton.classList.add('hide');
};

// Válasz ellenőrzése
const checkAnswer = () => {
  let answers = '';
  checkOpts.forEach((element) => {
    if (element.checked === true) {
      answers += element.value;
      if (ready === false) ready = true;
    }
  });
  if (ready) showAnswer(answers);
  else alert('Válaszolj a kérdésre!');
};

// Kvíz indítása
const startQuiz = () => {
  contentUl.classList.remove('hide');
  hearderTwo.classList.remove('hide');
  getAnswerButton.classList.remove('hide');
  startButton.classList.add('hide');
  questionBuilder(questionCounter);
};

// Eseménykezelők
(() => startButton.addEventListener('click', startQuiz))();
(() => nextQuestionButton.addEventListener('click', getNext))();
(() => getAnswerButton.addEventListener('click', checkAnswer))();
