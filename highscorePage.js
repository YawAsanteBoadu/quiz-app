const highScoresList = document.getElementById('highScoresList');

// get the highscore out of local storage//
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

highScores.map( scores=> {
    console.log(`${scores.name}-${scores.score}`)
})