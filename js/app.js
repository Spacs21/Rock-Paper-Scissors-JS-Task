let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let score1 = document.getElementById('score1')
let score2 = document.getElementById('score2')
let randomNumber1 = document.getElementById('number')
let randomNumber2 = document.getElementById('number2')
let win1 = document.getElementById('win1')
let audio = document.getElementById('audio')

btn1.addEventListener("click", function(){
    let res = Math.floor(Math.random()* 10);
    randomNumber1.textContent = res;
    score1.textContent = +score1.textContent + res
    if(score1.innerHTML >= 100){ 
        win1.style.opacity = "1"
        audio.play()
    }
})

btn2.addEventListener("click", function(){
    let res = Math.floor(Math.random()* 10);
    randomNumber2.textContent = res;
    score2.textContent = +score2.textContent + res
    if(score2.innerHTML >= 100){ 
        win2.style.opacity = "1"
        audio.play()
    }
})

