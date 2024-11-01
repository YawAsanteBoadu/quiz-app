// referencing html elements//
const questionPanel = document.getElementById('questionPanel');
// make answer options an array so array properties can work on it//
const options = Array.from(document.getElementsByClassName('ansChoice'));
const questionCounterText = document.getElementById('questionCounter');
const scoreText = document.getElementById('score');

let currentQuestion = {};
let acceptingAnswer = false;   // prevent user from answering question before its loaded//
let score = 0; 
let questionCounter = 0;
let availableQuestion = []  // keep a copy of the question set 

let questionsArray = [
    {
        question: 'In the Scoville scale, what is the hottest chemical?',
        option1 : 'Capsaicin',
        option2 : 'Dihydrocapsaicin',
        option3 : 'Tinyatoxin',
        option4 : 'Resiniferatoxin',
        answer : 1,
    },
    {
        question: 'Which country had an &quot;Orange Revolution&quot; between 2004 and 2005?',
        option1 : 'Ukraine',
        option2 : 'Latvia',
        option3 : 'Lithuania',
        option4 : 'Belarus',
        answer : 2,
    },
    {
        question: 'Which greek god/goddess tossed a golden apple with the words &quot;for the fairest&quot; into the middle of the feast of the gods?',
        option1 : 'Eris',
        option2 : 'Hades',
        option3 : 'Ares',
        option4 : 'Artemis',
        answer : 3,
    },
    {
        question: 'What do the letters of the fast food chain KFC stand for?',
        option1 : 'Kentucky Fried Chicken',
        option2 : 'Kentucky Fresh Cheese',
        option3 : 'Kiwi Food',
        option4 : 'Kibbled Freaky Cow',
        answer : 4,
    },

    ]
    
    // features//
const CORRECT_BONUS = 10;
const MAX_QUES = 5;

// function to show pre-loader//
const showPreLoader = () => {
    overlay.style.display = 'block'
}

// function to hide pre-loader when called//
const hidePreLoader = () =>{
    overlay.style.display = 'none'
}

startGame = () => {
    questionCounter = 0; 
    score = 0;
    availableQuestion = [...questionsArray]; 
    getNewQuestion();
}

getNewQuestion = () => {

    if(availableQuestion.length === 0 || questionCounter > MAX_QUES) {
        localStorage.setItem('mostRecentScores', score); // push score data into localStorage//\
        
        window.location.assign("/end.html")

    
    }
    questionCounter++;
    questionCounterText.innerHTML = `${questionCounter}/${MAX_QUES}`
    questionIndex = Math.floor(Math.random() * availableQuestion.length);
    currentQuestion = availableQuestion[questionIndex];
    // console.log(currentQuestion)
    questionPanel.innerText = currentQuestion.question;

    options.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['option' + number];
    });

    //remove the question used//
    availableQuestion.splice(questionIndex, 1); 

    acceptingAnswer = true; // user can answer question 
}

// adding click event to the options //
options.forEach(choice => {
    choice.addEventListener('click', (e) =>{
        if(!acceptingAnswer) return;
        acceptingAnswer = false;

        // check for correct answer option//
        const selectedOption = e.target;
        const selectedAnswer = selectedOption.dataset['number'];

        // determines correct answer//
        const classToApply = selectedAnswer == currentQuestion.answer? 'correct' : 'incorrect';

        // check for correct answer and update score
        if(classToApply === 'correct') {
            increamentScore(CORRECT_BONUS);
        }

        //refferencing html class through javascript//
        selectedOption.parentElement.classList.add(classToApply);

        // use setTimeOut to control correct-incorrect effect//
        setTimeout( ()=> {
            selectedOption.parentElement.classList.remove(classToApply);
            getNewQuestion();
        },1000)
        // console.log(classToApply);

    })
})

increamentScore = (num) => {
    score += num;
    scoreText.innerHTML = score;
}

startGame ();

