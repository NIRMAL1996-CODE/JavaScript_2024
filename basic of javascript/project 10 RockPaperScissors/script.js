//rock,  paper,  scissors game using JS
let computerChoices =["rock", "scissors", "paper"]; 

let randomChoice = Math.floor(Math.random()* 3 );
let computer =computerChoices[randomChoice];
console.log("Computer choice= ", computer);

let user= prompt("Enter any one : rock,  paper,  scissors");
if(user!== "rock" && user!== "scissors" && user!== "paper" )
{
    alert("INVALID INPUT")
}
else if(user=== computer)
{
    alert(" Its a tie");
}
else if(user==="rock" && computer=== "scissors"|| user==="scissors" && computer==="paper" ||user==="paper" && computer==="rock") 
    {
      alert("WINNER is User " + "  USER= " + user + " COMPUTER= " + computer);
    }
    else
    {
        alert('"WINNER is Computer"'+ " COMPUTER= " + computer + "  USER= " + user );
    }

