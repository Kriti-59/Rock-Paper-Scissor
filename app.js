let userScore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorep = document.querySelector("#user-score");
const comScorep = document.querySelector("#com-score")

choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        userChoice = choice.id;
        console.log(userChoice ,"is selected");
        play(userChoice);


    })
}
)

const showWinner = (userWin, userChoice, comChoice) => {
    if (userWin) {
        msg.innerText = `You won! Your ${userChoice} beats ${comChoice}`;
        msg.style.backgroundColor = "green"
        userScore +=1
        userScorep.innerText = userScore;

    }
    else{
        console.log("you loose");
        msg.innerText = `You lost, ${comChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red"
        comScore +=1
        comScorep.innerText = comScore

    }
}

const play = (userChoice) =>{
    console.log("user choice = ", userChoice)
    const comChoice = randChoice();
    console.log("com choice =", comChoice)

    if (userChoice == comChoice){
        drawGame();
    }
    else{

        let userWin = true;
        if (userChoice == "rock"){
            userWin = comChoice === "paper" ? false : true
        }
        else if (userChoice === "paper"){
            userWin = comChoice === "scissors" ? false: true;
        }

        else{
            userWin = comChoice === "rock" ? false: true;
        }
        showWinner(userWin, userChoice, comChoice)
    }

}

const randChoice = () =>{
    const options = ["rock", "scissors", "paper"]
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];

}

const drawGame  =() => {
    console.log("Draw")
    msg.innerText = "Draw. Play again!"
}