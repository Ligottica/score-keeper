const p1 = {
    score: 0,
    button: document.querySelector('#p1button'),
    display: document.querySelector('#p1display')
}

const p2 = {
    score: 0,
    button: document.querySelector('#p2button'),
    display: document.querySelector('#p2display')
}


const winningScoreSelect = document.querySelector('#playto');
const resetButton = document.querySelector('#reset');
let winningScore = 3;
let isGameOver = false;
const image = document.querySelector('img');


function playSound(url) {
    const audio = new Audio(url);
    audio.play();
  }


function updateScores(player, opponent) {
    if(!isGameOver) {
        player.score += 1;
        if(player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
            image.src = "https://media.giphy.com/media/l4q8cJzGdR9J8w3hS/giphy.gif";
            playSound('https://www.pacdv.com/sounds/applause-sounds/app-5.mp3')
        }
        player.display.textContent = player.score;
    }
}


p1.button.addEventListener('click', function() {
    updateScores(p1,p2)
})

p2.button.addEventListener('click', function() {
    updateScores(p2,p1)
})

winningScoreSelect.addEventListener('change', function() {
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    for(let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
        image.src = "https://images.unsplash.com/photo-1611251135345-18c56206b863?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    }
}    
