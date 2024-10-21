const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn'); 
const finalScore = document.getElementById('finalScore');

// retrieve score from localStorage and display on end page// 
const mostRecentScores = localStorage.getItem('mostRecentScores');
finalScore.innerText = `Score: ${mostRecentScores}`;
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];


const MAX_HIGH_SCORE = 5;

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
})
// save high score//
saveHighScore = ((e) => {
    e.preventDefault();

    const scores = {
        score: Math.floor(Math.random() * 100),
        name: username.value
    }

    highScores.push(scores);  // pushing the scores object into the array highscores//
    
    highScores.sort((a,b) => b.score - a.score) // to arrange the highscore value in descending order// 
    highScores.splice(MAX_HIGH_SCORE);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    // window.location.assign('/')  // find out the logic behind a single slah, which takes you back to the index page//

})

