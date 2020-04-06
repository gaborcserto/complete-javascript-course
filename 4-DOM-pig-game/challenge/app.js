/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying, lastScroll, lastScrollTwo, winningScore;

init();

document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying) {
        // 1. random number
        var dice = Math.floor(Math.random() * 6) + 1;
        var diceTwo = Math.floor(Math.random() * 6) + 1;

        // 2. display the result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';

        var diceDOMTwo = document.querySelector('.diceTwo');
        diceDOMTwo.style.display = 'block';
        diceDOMTwo.src = 'dice-' + diceTwo + '.png';

        if((lastScroll === 6 || lastScrollTwo === 6 ) && (dice === 6 || diceTwo === 6) ) {
            roundScore = 0;
            scores[activePlayer] = 0;
            nextPlayer();
        }

        // 3. update round score IF the rolled number was not a 1
        if(dice !== 1 && diceTwo !== 1) {
            // Add to score
            roundScore += (dice + diceTwo);
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
            lastScroll = dice;
            lastScrollTwo = diceTwo;

            if(dice === 6 && diceTwo === 6) {
                // Next player
                nextPlayer();
            }
        } else {
            // Next player
            nextPlayer();
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function () {
    if(gamePlaying) {
        // Add CURRENT score to GLOBAL score
        scores[activePlayer] += roundScore;

        // Update the UI
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

        // Check if player won the game
        if (scores[activePlayer] >= winningScore) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';

            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.diceTwo').style.display = 'none';

            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

            gamePlaying = false;
        } else {
            // Next player
            nextPlayer();
        }
    }
});

function nextPlayer() {
    // Next player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.diceTwo').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

document.getElementById('winning-score').addEventListener('change', function () {
    winningScore = document.getElementById('winning-score').value;
    console.log(winningScore)
});

function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;

    lastScore = 0;
    lastScroll = 0;
    winningScore = document.getElementById('winning-score').value;
    console.log(winningScore);

    gamePlaying = true;

    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.diceTwo').style.display = 'none';

    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;

    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');

    document.querySelector('.player-0-panel').classList.add('active');
}