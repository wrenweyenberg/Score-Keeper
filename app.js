const p1={
    score: 0,
    button: document.querySelector('#p1button'),
    display: document.querySelector('#p1display')
}
const p2 = {
    score: 0,
    button: document.querySelector('#p2button'),
    display: document.querySelector('#p2display')
}

function updateScore(player, opponent) {
    if (!isGameOver) {
        player.score +=1
        if (player.score===winningScore) {
            isGameOver=true;
            player.display.classList.add('winner');
            opponent.display.classList.add('loser');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
    }
        player.display.textContent=player.score;
}

const resetButton=document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playTo')
let winningScore = 3;
let isGameOver=false;

p1.button.addEventListener('click', function() {
    updateScore(p1,p2);
})
p2.button.addEventListener('click', function() {
    updateScore(p2,p1);
})

winningScoreSelect.addEventListener('change', function() {
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', reset)

function reset() {
    isGameOver=false;
    for (let p of [p1,p2]) {
        p.score=0;
        p.display.textContent=p.score;
        p.display.classList.remove('winner','loser');
        p.button.disabled = false;
    }
    }