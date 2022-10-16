const rock_user = document.getElementById('user-rock');
const paper_user = document.getElementById('user-paper');
const scissors_user = document.getElementById('user-scissors');
const rock_com = document.getElementById('com-rock');
const paper_com = document.getElementById('com-paper');
const scissors_com = document.getElementById('com-scissors');
const winBox = document.getElementById('kotak');
const inFo = document.getElementById("h1");
const refresh = document.getElementById("ulang");
const x = document.querySelector(".user-tool");
const addElement1 = [...document.getElementsByClassName("dissap")];
const button = document.querySelector('button');

function comThink() {
    let choices = ['Batu', 'Gunting', 'Kertas'];
    let randomChoices = Math.floor(Math.random() * 3);
    return choices[randomChoices];
}
function resultObject() {
    winBox.classList.add('winBox');
        inFo.setAttribute("style", "font-size:36px; color:white; background-color:gray; border-radius: 10px");
}
function resultDraw() {
    winBox.classList.add('drawBox');
    inFo.setAttribute("style", "font-size:36px; color:white; background-color:green; border-radius: 10px");
}
function win() {
    console.log("Player 1 Win");
    resultObject();
    inFo.innerText = "Player 1 WIN"
}

function lose() {
    console.log("COM WIN");
    resultObject();
    inFo.innerText = "COM WIN"
}

function draw() {
    console.log("Draw");
    resultDraw();
    inFo.innerText = "Draw"
}

function gameCompare(pilihanUser) {

    const computerUser = comThink();
    console.log("Hasil User => " + pilihanUser);
    console.log("Hasil dari => " + computerUser);

    switch (pilihanUser + computerUser) {
        case "BatuGunting":
        case "GuntingKertas":
        case "KertasBatu":
            win();
            break;
        case "GuntingBatu":
        case "BatuKertas":
        case "KertasGunting":
            lose();
            break;
        case "GuntingGunting":
        case "BatuBatu":
        case "KertasKertas":
            draw();
    }


    switch (computerUser) {
        case "Batu":
            rock_com.classList.add('chosen');
            break;
        case "Gunting":
            scissors_com.classList.add('chosen');
            break;
        case "Kertas":
            paper_com.classList.add('chosen');
    }

}
function play() {
    rock_user.addEventListener('click', function () {
        this.classList.add('chosen');
        gameCompare("Batu");
        addElement1.forEach(addElement3 => {
            addElement3.setAttribute("style", "cursor: not-allowed;pointer-events: none;")
        })
    })

    paper_user.addEventListener('click', function () {
        this.classList.add('chosen');
        gameCompare("Kertas");
        addElement1.forEach(addElement3 => {
            addElement3.setAttribute("style", "cursor: not-allowed;pointer-events: none;")
        })
    })

    scissors_user.addEventListener('click', function () {
        this.classList.add('chosen');
        gameCompare("Gunting");
        addElement1.forEach(addElement3 => {
            addElement3.setAttribute("style", "cursor: not-allowed;pointer-events: none;");
        })
    })
}

play();
refresh.addEventListener('click', function () {
    addElement1.forEach(addElement2 => {
        addElement2.classList.remove('chosen')
    });
    addElement1.forEach(addElement3 => {
        addElement3.removeAttribute("style", "cursor: not-allowed;pointer-events: none;")
    })
    winBox.classList.remove('winBox');
    winBox.classList.remove('drawBox');
    inFo.removeAttribute("style", "color: ''; font-size:'' ")
    inFo.style.marginTop = null;
    inFo.style.fontSize = null;
    inFo.innerText = "VS"
    button.disabled = false;
})
