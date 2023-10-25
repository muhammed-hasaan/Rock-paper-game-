var arr = ["https://rock-paper-scissor-azaan.netlify.app/img/rock.png", "https://rock-paper-scissor-azaan.netlify.app/img/paper.png", "https://rock-paper-scissor-azaan.netlify.app/img/scissors.png"]
function getRandomComputerChoice() {
    return arr[Math.floor(Math.random() * arr.length)];
}
function setComputerChoice() {
    var randomimage = getRandomComputerChoice();
    document.getElementById("image").src = randomimage;
    return arr.indexOf(randomimage);
}
function rockuser() {
    document.getElementById("imageuser").src = arr[0];
    var userChoice = 0;
    var computerChoice = setComputerChoice();
    checkResult(userChoice, computerChoice);
}
function paperuser() {
    document.getElementById("imageuser").src = arr[1];
    var userChoice = 1;
    var computerChoice = setComputerChoice();
    checkResult(userChoice, computerChoice);
}
function scissoruser() {
    document.getElementById("imageuser").src = arr[2];
    var userChoice = 2;
    var computerChoice = setComputerChoice();
    checkResult(userChoice, computerChoice);
}
document.addEventListener('keydown', (e) => {
    if (e.keyCode == 82) {
        document.getElementById("imageuser").src = arr[0];
        var userChoice = 0;
        var computerChoice = setComputerChoice();
        checkResult(userChoice, computerChoice);
    }
})
document.addEventListener('keydown', (e) => {
    if (e.keyCode == 80) {
        document.getElementById("imageuser").src = arr[1];
        var userChoice = 1;
        var computerChoice = setComputerChoice();
        checkResult(userChoice, computerChoice);
    }
})
document.addEventListener('keydown', (e) => {
    if (e.keyCode == 83) {
        document.getElementById("imageuser").src = arr[2];
        var userChoice = 2;
        var computerChoice = setComputerChoice();
        checkResult(userChoice, computerChoice);
    }
})
var compscorev = 0;
var userscorev = 0;
function checkResult(userChoice, computerChoice) {
    var resultElement = document.getElementById("result");
    var scorecomp = document.getElementById("compscore");
    var usercomp = document.getElementById("userscore");

    if (userChoice === computerChoice) {
        resultElement.textContent = "It's a tie!";
    } else if ((userChoice === 0 && computerChoice === 2) || (userChoice === 1 && computerChoice === 0) || (userChoice === 2 && computerChoice === 1)) {
        resultElement.textContent = "You wins!";
        userscorev++
        usercomp.innerText = userscorev;
    } else {
        resultElement.textContent = "Computer win!";
        compscorev++
        scorecomp.innerText = compscorev;
    }
    if(compscorev == 20 || userscorev == 20){
        compscorev = 0;
        userscorev = 0;
        alert("Thanks for playing")
        window.location.reload()
    }
}