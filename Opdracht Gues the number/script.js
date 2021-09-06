let userName = prompt("Hallo en welkom bij het spel 'Guess the Number' ! Wat is je naam?");

if (userName != null) {
    alert("Hallo en leuk dat je wilt meedoen met het spel " + userName);
}


const guessNumber = function () {
    const randomNum = Math.floor(Math.random() * 25) + 1;

    while (guess !== randomNum) {

        var guess = parseInt(prompt('Raad een nummer tussen de (0 t/m 25)'));
        if (guess < randomNum) {
            alert("Dat is niet juist. Te laag. Probeer het nogmaals");
        } else if (guess > randomNum) {
            alert(" Dat is niet juist. Te hoog. Probeer het nogmaals ");

        } else if (guess == randomNum) {
            alert("Fantastische je heb gewonnen. Tot de volgende keer " + userName);
        } else {
            alert("Error!!! Vul een cijfer in...");
        }

    }
}

guessNumber();


/*var attempt = document.querySelector(".attempt")
var attemptCounter = 0
else (numOfTries > 3) {
    alert('Je hebt het maximaal aantal pogingen gebruik');
}*/