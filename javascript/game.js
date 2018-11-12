// Create an array of words
var words = ["luffy", "chopper", "nami", "zoro", "usopp", "robin", "ace", "shanks"];
// Choose words randomly
var randomWords = Math.floor(Math.random() * words.length);
var randomWords = words[randomWords]
var rightGuess = [];
var wrongGuess = [];
var underScore = [];

// DOM Manipulation
var docUnderScore = document.getElementsByClassName("underscore");
var docRightGuess = document.getElementsByClassName("rightGuess");
var docWrongGuess = document.getElementsByClassName("wrongGuess");
// Testing
console.log(randomWords);
// Create underscores based on length of words
var generateUnderscore = () => {
    for (var i = 0; i < randomWords.length; i++) {
        underScore.push('_');

    }
    return underScore;
}

// Get user's guess
document.addEventListener("keypress", function (event) {
    var keyword = String.fromCharCode(event.keyCode);
    if (randomWords.indexOf(keyword) > -1) {
        // add to right word array
        rightGuess.fill(keyword);

        // replace underscore with right letter
        underScore[randomWords.indexOf(keyword)] = keyword;
        docUnderScore[0].innerHTML = underScore.join(" ");
        docRightGuess[0].innerHTML = rightGuess;
        // Checks to see if user word matches guesses
        if (underScore.join("") == randomWords) {
            alert("YOU WIN");
        }
    }
    else {
        wrongGuess.push(keyword);
        docWrongGuess[0].innerHTML = wrongGuess;
    }
});

docUnderScore[0].innerHTML = generateUnderscore().join(" ");
function myFunction() {
    location.reload();
}
// Check if guess is right
// If right push to right array
// If wrong push to wrong array

