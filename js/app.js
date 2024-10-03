const choices = ["rock", "paper", "scissors"];
const result = document.getElementById('result');
const player = document.getElementById('player-choice');
const computer = document.getElementById('computer-choice');
const winStatics = document.querySelector('.won');
const lostStatics = document.querySelector('.lost')
const user = document.querySelector('.username')
let wins = 0;
let losses = 0;

let SetName = prompt('Enter Your Username')
user.innerHTML = SetName

function Play(playerChoice){
    const computerChoice = choices[Math.floor(Math.random() * 3)]
    computer.innerHTML = computerChoice
    player.innerHTML = playerChoice

    
    
    if(playerChoice === computerChoice){
        result.innerHTML = "tie"
    }else{
        switch(playerChoice){
            case "rock":
                if(computerChoice === "scissors"){
                    result.innerHTML = "You Won!"
                    winStatics.innerHTML = ++wins
                }else{
                    result.innerHTML = "You Lost"
                    lostStatics.innerHTML = ++losses
                }
                break;

            case "paper":
                if(computerChoice === "rock"){
                    result.innerHTML = "You Won!"
                    winStatics.innerHTML = ++wins
                }else{
                    result.innerHTML = "You Lost"
                    lostStatics.innerHTML = ++losses
                }
                break;
            
            case "scissors":
                if(computerChoice === "paper"){
                    result.innerHTML = "You Won!"
                    winStatics.innerHTML = ++wins
                }else{
                    result.innerHTML = "You Lost"
                    lostStatics.innerHTML = ++losses
                }
        }
    }
}


// misc
const img = document.querySelector('.prize')
const ins = document.querySelector('.instruction')
function showimg(){
    img.style.width = "500px"
}
function closeimg(){
    img.style.width = "0"
}

function instructionOpen(){
    ins.style.transform = "translateY(0)"
}
function instructionClosed(){
    ins.style.transform = "translateY(800px)"

}