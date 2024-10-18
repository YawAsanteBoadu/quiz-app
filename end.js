const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn'); 
const finalScore = document.getElementById('finalScore');

// retrieve score from localStorage and display on end page// 
const mostRecentScores = localStorage.getItem('mostRecentScores');
finalScore.innerText = `Score: ${mostRecentScores}`;

username.addEventListener('keyup', ()=>{
    saveScoreBtn.disabled = !username.value;
})
// save high score//
saveHighScore = ((e) => {
    console.log('save button works');
    e.preventDefault();
})

