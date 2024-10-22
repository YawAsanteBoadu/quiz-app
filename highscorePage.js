const highScoresList = document.getElementById('highScoresList');

// get the highscore out of local storage//
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

highScoresList.innerHTML = highScores
.map( scores=> {
    return`<li class="dsiplay-highScore">${scores.name}:  ${scores.score} </li>`
})
.join("")