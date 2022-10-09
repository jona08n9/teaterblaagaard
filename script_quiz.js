// <h2>Er teater noget for dig?</h2>
// <div id="quiz_container">
// <h3 id="quiz__question"></h3>;
//    <p id="quiz__answer-1" class="quiz__answer-box"></p>
//    <p id="quiz__answer-2" class="quiz__answer-box"></p>
//   </div>
//   <div id="quiz__result">
//    <h3><span id="quiz__result-title"></span></h3>
//   <p id="quiz__result-text"></p>
//   </div>

const quizContainer = document.querySelector("#quiz__container");
const quizStart = document.querySelector("#quiz__start-container");
const questionContainer = document.querySelector("#quiz__question-container");
const quizQuestion = document.querySelector("#quiz__question");
const quizAns1 = document.querySelector("#quiz__answer-1");
const quizAns2 = document.querySelector("#quiz__answer-2");
const resultsCont = document.querySelector("#quiz__result-container");
const resultTitle = document.querySelector("#quiz__result-title");
const resultText1 = document.querySelector("#quiz__result-text1");
const resultText2 = document.querySelector("#quiz__result-text2");
const resultText3 = document.querySelector("#quiz__result-text3");
const startBut = document.querySelector("#quiz__start-button");

startBut.addEventListener("click", showQuiz);

function showQuiz() {
  console.log("Start quiz");

  startBut.removeEventListener("click", showQuiz);

  quizStart.classList.toggle("hidden");
  questionContainer.classList.toggle("hidden");

  quizQuestion.textContent = "Hvordan ser din ideelle fredag ud?";
  quizAns1.textContent = "Chille på sofaen med et glas vin og en netflix serie...";
  quizAns2.textContent = "Mødes med vennerne over en kold øl.";

  quizAns1.addEventListener("click", question1a);
  quizAns2.addEventListener("click", question1b);
}

function question1a() {
  console.log("Sti - Netflix");

  quizAns1.removeEventListener("click", question1a);
  quizAns2.removeEventListener("click", question1b);

  quizQuestion.textContent = "Hvad vil du helst se?";
  quizAns1.textContent = "Sikkert bare Friends... For 15. gang...";
  quizAns2.textContent = "Noget fra Netflix top 10 liste, idk";

  quizAns1.addEventListener("click", svar1);
  quizAns2.addEventListener("click", svar2);
}

function question1b() {
  console.log("Sti - Øl");

  quizAns1.removeEventListener("click", question1a);
  quizAns2.removeEventListener("click", question1b);

  quizQuestion.textContent = "Kunne du finde på at foreslå, at tage i teateret og nyde den kolde øl der?";
  quizAns1.textContent = "Ja!";
  quizAns2.textContent = "Nej...";

  quizAns1.addEventListener("click", svar3);
  quizAns2.addEventListener("click", svar4);
}

function svar1() {
  console.log("svar1");

  questionContainer.classList.toggle("hidden");
  resultsCont.classList.toggle("hidden");

  resultTitle.textContent = "Saa har du aldrig vaeret paa Blaagaard!";
  resultText1.textContent = "Vi dømmer dig ikke... vi forstår dig godt...";
  resultText2.textContent = "Men på Blaagaard får du én på opleveren og måske åbner det dine øjne for noget nyt!?";
  resultText3.textContent = "#TeaterForAlle";
}
function svar2() {
  console.log("svar2");

  questionContainer.classList.toggle("hidden");
  resultsCont.classList.toggle("hidden");

  resultTitle.textContent = "Saa har du aldrig vaeret paa Blaagaard!";
  resultText1.textContent = "I får én på opleveren og måske åbner det jeres øjne for noget nyt.";
  resultText2.textContent = "Bliv en del af fællesksabet - Oplev noget nyt!";
  resultText3.textContent = "#TeaterForAlle";
}
function svar3() {
  console.log("svar3");

  questionContainer.classList.toggle("hidden");
  resultsCont.classList.toggle("hidden");

  resultTitle.textContent = "Fedt! Så skal du bare prøve det på Blaagaard!";
  resultText2.textContent = "Tag vennerne under armen og vis dem hvad kultur også kan.";
  resultText1.textContent = "Vi har rammerne for en fed aften - både i sæderne og i baren!";
  resultText3.textContent = "#TeaterForAlle";
}
function svar4() {
  console.log("svar4");

  questionContainer.classList.toggle("hidden");
  resultsCont.classList.toggle("hidden");

  resultTitle.textContent = "Saa har du aldrig vaeret paa Blaagaard!";
  resultText2.textContent = "Tag med dine venner her ned og lad os skabe rammerne for en fed aften - en af mange kommende!";
  resultText1.textContent = "";
  resultText3.textContent = "#TeaterForAlle";
}
