// Simple Dice Roll game: roll 1-6. Win on 4-6, lose on 1-3.
function rollDie() {
    // random number 1..6
    const roll = Math.floor(Math.random() * 6) + 1;

    // simple math: distance from maximum 6
    const distanceFromMax = 6 - roll;

    // conditionals to determine outcome
    let message;
    if (roll >= 4) {
        message = 'You win!';
    } else if (roll >= 2) {
        message = 'Close — try again!';
    } else {
        message = 'Too low — you lose.';
    }

    // output to the page using innerHTML
    const resultEl = document.getElementById('result');
    if (resultEl) {
        resultEl.innerHTML = `You rolled <strong>${roll}</strong>. ${message} <br>Distance from 6: ${distanceFromMax}`;
    } else {
        console.warn('Result element not found');
    }
}