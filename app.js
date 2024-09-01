let userScore = 0;
let ComScore = 0;

const choices = document.querySelectorAll(".choice");

choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        console.log(choice.id ,"is selected")
    })
}
)