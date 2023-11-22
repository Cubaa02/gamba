var hody = [];
var isRolling = false;

document.getElementById('game').addEventListener('click', function () {
    if (!isRolling) {
        rollDice();
    }
});

function rollDice() {
    isRolling = true;
    hody = [];
    var duration = 3000;

    var cubes = document.getElementsByClassName('cube');
    var results = document.getElementsByClassName('result');

    var rollsCompleted = 0;

    function checkRollsCompletion() {
        rollsCompleted++;
        if (rollsCompleted === cubes.length) {
            isRolling = false;
        }
    }

    for (var i = 0; i < cubes.length; i++) {
        animateRoll(cubes[i], results[i], duration, checkRollsCompletion);
    }
}

function animateRoll(cube, resultDiv, duration, callback) {
    var shuffleInterval = setInterval(function () {
        var h = Math.ceil(Math.random() * 3);
        hody.push(h);
        cube.src = 'kostka' + h + '.png?' + new Date().getTime(); 
    }, 100);

    setTimeout(function () {
        clearInterval(shuffleInterval);
        callback();
        displayResults(resultDiv, hody[hody.length - 1]);
    }, duration);
}
