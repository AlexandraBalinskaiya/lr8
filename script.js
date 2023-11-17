document.addEventListener('DOMContentLoaded', function() {
    const userNameElement = document.getElementById('user-name');
    const computerNameElement = document.getElementById('computer-name');
    const userScoreElement = document.getElementById('user-score');
    const computerScoreElement = document.getElementById('computer-score');
    const roundsLeftElement = document.getElementById('rounds-left');
    const generateButton = document.getElementById('generate-button');

    let userName = prompt("Please enter your name:", "User");
    if (userName != null && userName != "") {
        userNameElement.textContent = userName;
    }

    let userScore = 0;
    let computerScore = 0;
    let roundsLeft = 3;

    generateButton.addEventListener('click', function() {
        if (roundsLeft > 0) {
            const userNumber = Math.floor(Math.random() * 10) + 1;
            const computerNumber = Math.floor(Math.random() * 10) + 1;

            userScoreElement.textContent = userNumber;
            computerScoreElement.textContent = computerNumber;

            if (userNumber > computerNumber) {
                userScore++;
            } else if (computerNumber > userNumber) {
                computerScore++;
            }

            roundsLeft--;
            roundsLeftElement.textContent = roundsLeft;
            checkWinner();
        }
    });

    function checkWinner() {
    if (roundsLeft === 0) {
        const winner = userScore > computerScore ? userName : 'Computer';
        setTimeout(function() {
            alert(winner + ' wins!');
            resetGame();
        }, 1000); // Затримка 1 секунда перед збросом гри
    }
}


    function resetGame() {
        userScore = 0;
        computerScore = 0;
        roundsLeft = 3;
        userScoreElement.textContent = '0';
        computerScoreElement.textContent = '0';
        roundsLeftElement.textContent = roundsLeft;
    }
});
