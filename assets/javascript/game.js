alphabet = function () {
    var alphabet = ['a', 'b','c', 'd', 'e', 'f', 'g', 'j', 'i', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u','v', 'w', 'x', 'y', 'z'];

    var movies;
    var word ;
    var guess ;
    var guesses = [ ];
    var lives ;
    var counter ;
    var space;

    var showLives = document.getElementById("yourlives");
    var showMovies = document.getElementById("movies");
    
    var buttons = function {
        myButtons = document.getElementById('buttons');
        letters = document.createElement('ul');

        for (var i = 0; i < alphabet.length; i++) {
            letters.id = 'alphabet';
            list = document.createElement('li');
            list.id = 'letter';
            list.innerHTML = alphabet[i];
            check();
            myButtons.appendChild(letters);
            
        }

    }

}

result = function() {
    wordHolder = document.getElementById('hold');
    correct = document.createElement('ul');

    for (var i = 0; i < word.length; i++) {
        correct.setAttribute('id', 'my-word');
        guess = doucment.createElement('li');
        guess.setAttribute('class', 'guess');
        if (word[i] === "-") {
            guess.innerHTML = "-";
            space = 1;    
        }
        else {
            guess.innerHTML = "-";
        }
        guesses.push(guess);
        wordHolder.appChild(correct);
        correct.appendChild(guess);
    }
}

comments = function () {
    showLives.innerHTML = "You have" + lives + "lives";
    if (lives < 1) {
        showLives.innerHTML = "Loser Game Over";
    }
    for (var i = 0; i < guesses.length; i++) {
        if (counter + space === guesses.length) {
            showLives.innerHtML = "Boo-Ya You WIn!"
        }
    }
}

check = function() {
    list.onclick = function() {
        var guess = (this.innerHTML);
        this.setAttribute("class");
        this.onclick = null;
        for (var i =0, i < word.length; i++) {
            if (word[i] === guess) {
                guesses[i].innerHTML =guess;
                counter += 1;
            }
        }
        var j = (word.indexOf(guess));
        if (j === -1) {
            lives -= 1;
            comments();
        }
        else {
            comments();
        }
    }

}

play = function (){
    categories = [
        ["The Lion King", "Clueless", "Hocus Pocus", "10 Things I Hate About You", "Finding Nemo", "Selena", "Now and Then", "Jurassic Park", "Titanic", "Matrix", "Goog WillHunting", "Con Air", "Men In Black"]
    ];
chosenCategory = categories[Math.floor(Math.random() * categories.length)];
word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
buttons();

guesses = [ ];
lives = 10;
counter = 0;
space = 0;
result();
comments();


}

document.getElementById('reset').onclick = function() {
    correct.parentNode.removeChild(correct);
    letters.parentNode.removeChild(letters);
    showClue.innerHMTL = "";
    AudioContext.clearRect(0, 0, 400, 400);
    play();
}


















    
 
