let userScore =0;
let compScore =0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const compscorePARA = document.querySelector("#computerRscore");
const userscorePARA = document.querySelector("#userRscore");

const genCompChoice = () => {
    const options = ['stone', 'paper', 'scissor'];
    const a = Math.floor(Math.random()*3);//math.random humesha 0 se 1 ki range me genrate hota hai usko 3 se multiply krke hum 0 to 2 ki range me le aate hai
    return options[a];
};
const playGame = (userChoice) => {
    console.log("user choice:", userChoice);
    //generate computer choice
    const compChoice = genCompChoice();
    console.log("computer choice:", compChoice);
    // Game logic to determine winner would go here
    if(userChoice === compChoice) {
        console.log("It's a tie!");
        msg.innerText = "Tie!";
    } else if((userChoice === 'stone' && compChoice === 'scissor') ||
              (userChoice === 'paper' && compChoice === 'stone') ||
              (userChoice === 'scissor' && compChoice === 'paper')) {
        userScore++;
        msg.innerText = "You win!";
        msg.style.backgroundColor = "lightgreen";
        userscorePARA.innerText = userScore;
        console.log("User wins this round!");
    } else {
        compScore++;
        msg.innerText = "You lose!";
        compscorePARA.innerText = compScore;
        msg.style.backgroundColor = "red";
        console.log("Computer wins this round!");
    }
    console.log(`Scores => User: ${userScore}, Computer: ${compScore}`);

}
choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute('id');
        playGame(userChoice);
    });
});
