let yourscore = 0;
let compscore = 0;

const c = document.querySelectorAll(".choice");
const gameoptions = () => {
    const options = ["rock", "paper", "scissors"];
    const index = Math.floor(Math.random() * 3);
    return options[index];
}

displayscore = () => {
    document.getElementById("ys").innerText = `${yourscore}`;
    document.getElementById("cs").innerText = `${compscore}`;
}
let userwin = true;
const playgame = (userchoice) => {
    const compchoice = gameoptions();

    if (userchoice === compchoice) {
        userwin = null;

        displayscore();
    } else {
        userwin = true;
        if (userchoice === "rock") {
            if (compchoice === "paper") {
                console.log("comp won!");
                compscore++;
                userwin = false;
                displayscore();

            } else {
                console.log("user won!");
                yourscore++;
                userwin = true;
                displayscore();
            }
        } else if (userchoice === "paper") {
            if (compchoice === "rock") {
                console.log("user won !");
                yourscore++;
                userwin = true;
                displayscore();
            } else {
                console.log("comp won!");
                compscore++;
                userwin = false;
                displayscore();
            }
        } else {
            if (compchoice === "rock") {
                console.log("comp won!");
                userwin = false;
                compscore++;
                displayscore();
            } else {
                console.log("user won !");
                yourscore++;
                userwin = true;
                displayscore();
            }
        }

    }
}
displaybar = (uc) => {
    if (userwin === null) {
        document.getElementById("messagedisplay").innerText = `It was a Draw, Play Again`;
    } else {
        if (uc === "rock") {
            if (userwin === true) {
                document.getElementById("messagedisplay").innerText = `YOU WIN! your Rock beats scissors`;
            } else {
                document.getElementById("messagedisplay").innerText = `YOU LOSE! Paper beats your Rock`;
            }
        } else if (uc === "paper") {
            if (userwin === true) {
                document.getElementById("messagedisplay").innerText = `YOU WIN! your paper beats Rock`;
            } else {
                document.getElementById("messagedisplay").innerText = `YOU LOSE! scissors beats your Paper`;
            }
        } else {
            if (userwin === true) {
                document.getElementById("messagedisplay").innerText = `YOU WIN! your scissors beats Paper`;
            } else {
                document.getElementById("messagedisplay").innerText = `YOU LOSE! Rock beats your scissors`;
            }
        }
    }
}

let us;
c.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        console.log("userchoice= ", userchoice);
        playgame(userchoice);
        displaybar(userchoice);
    });
});