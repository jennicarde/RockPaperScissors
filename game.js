var loses = 0;
var wins = 0;

var play = function(userChoice) {
    document.getElementById("player").innerHTML = "";
    document.getElementById("opponent").innerHTML = "";
    document.getElementById("results").innerHTML = "";

    if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors") {
        document.getElementById("player").innerHTML = 'You chose' + ' ' + userChoice + '.';
    }

    var computerChoice = Math.random();
    if (computerChoice < 0.34) {
        computerChoice = "rock";
    } else if (computerChoice <= 0.67) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }

    document.getElementById("opponent").innerHTML = '// Your opponent chose' + ' ' + computerChoice + '.';

    var compare = function(choice1, choice2) {
        if (choice1 === choice2) {
            return "The result is a tie!";
        } else if (choice1 === "rock") {
            if (choice2 === "scissors") {
                wins++;
                return "Rock beats scissors. You win!";
            } else {
                loses++;
                return "Paper beats rock. You lose.";
            }
        } else if (choice1 === "paper") {
            if (choice2 === "rock") {
                wins++;
                return "Paper beats rock. You win!";
            } else {
                loses++;
                return "Scissors beats paper. You lose.";
            }
        } else if (choice1 === "scissors") {
            if (choice2 === "paper") {
                wins++;
                return "Paper beats scissors. You win!";
            } else {
                loses++;
                return "Rock beats scissors. You lose.";
            }
        }
    };

    var winner = compare(userChoice, computerChoice);

    document.getElementById("results").innerHTML = winner;
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("loses").innerHTML = loses;

};

var reset = function() {
    loses = 0;
    wins = 0;
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("loses").innerHTML = loses;
};
