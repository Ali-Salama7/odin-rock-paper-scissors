const choices = ["Rock", "Paper", "Scissors"]

const getComputerChoice = () => {
    let choice = Math.floor(Math.random() * 3)
    return choices[choice]
}

const getHumanChoice = () => {
    let humanInput = prompt("Enter (Rock, Paper, Scissors: )")
    return humanInput
}



const playGame = () => {
    let humanScore = 0
    let computerScore = 0

    let numberOfRounds = prompt("Enter number of round you want: ")
    let rounds = Number(numberOfRounds)

    const playRound = (humanChoice, computerChoice) => {
        if(humanChoice === computerChoice){
            return "It's a tie!"
        } else if(
            (humanChoice === "Rock" && computerChoice === "Scissors") ||
            (humanChoice === "Paper" && computerChoice === "Rock") || 
            (humanChoice === "Scissors" && computerChoice === "Paper")
        ){
            humanScore++
            return "You win this round."
        }else{
            computerScore++
            return "Computer wins this round"
        }
    }

    for (let i = 1; i <= rounds; i++) {
        const humanChoice = getHumanChoice()
        const computerChoice = getComputerChoice()
        console.log(playRound(humanChoice, computerChoice))
    }

    // //First round
    // const humanChoice1 = getHumanChoice()
    // const computerChoice1 = getComputerChoice()
    // console.log(playRound(humanChoice1, computerChoice1))
    // //Second round
    // const humanChoice2 = getHumanChoice()
    // const computerChoice2 = getComputerChoice()
    // console.log(playRound(humanChoice2, computerChoice2))
    // //Third round
    // const humanChoice3 = getHumanChoice()
    // const computerChoice3 = getComputerChoice()
    // console.log(playRound(humanChoice3, computerChoice3))
    // //Fourth round
    // const humanChoice4 = getHumanChoice()
    // const computerChoice4 = getComputerChoice()
    // console.log(playRound(humanChoice4, computerChoice4))
    // //FIfith round
    // const humanChoice5 = getHumanChoice()
    // const computerChoice5 = getComputerChoice()
    // console.log(playRound(humanChoice5, computerChoice5))

    console.log("----Game Over----")
    console.log(`Final Result -> You: ${humanScore} || Computer: ${computerScore}`)

    if(humanScore > computerScore){
        console.log("Congratulations! You won the overall game!")
    } else if(humanScore < computerScore){
        console.log("Computer won the overall game. Better luck next time!");
    } else{
        console.log("It's an overall tie!");
    }

}

playGame()