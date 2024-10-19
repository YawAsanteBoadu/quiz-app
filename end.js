const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn'); 
const finalScore = document.getElementById('finalScore');

// retrieve score from localStorage and display on end page// 
const mostRecentScores = localStorage.getItem('mostRecentScores');

finalScore.innerText = `Score: ${mostRecentScores}`;

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
console.log(highScores)

const MAX_HIGH_SCORE = 5;

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
})
// save high score//
saveHighScore = ((e) => {
    console.log('save button works');
    e.preventDefault();

    const scores = {
        score: Math.floor(Math.random() * 100),
        name: username.value
    }

    highScores.push(scores);  // pushing the scores object into the array highscores//
    
    highScores.sort((a,b) => a.score - b.score) // find out the difference in arranging the par for sorting 
    highScores.splice(MAX_HIGH_SCORE);

    console.log(highScores)

})

