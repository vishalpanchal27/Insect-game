const mainPage = document.querySelector(".heroSection");
const playBtn = document.querySelector("#playBtn");
const secondPage = document.querySelector(".secondPage")
const mosqito = document.querySelector("#mosqito")
const chooseInsect = document.querySelectorAll(".insects")
const gameScreen = document.querySelector(".game")
const scoreBoard = document.querySelector("#scoreBoard")
const time = document.querySelector("#time")
const insectsPosition = document.querySelector('.insect-position')
const gameStart = document.querySelector(".gameStartScreeen")
const image = document.querySelector('.image')
const mouseCursor = document.querySelector('.mouseCursor');
// const alert = document.querySelector(".alert")

let seconds = 11;
let score = 0;
gameStart.style.display = "none"
secondPage.style.display = "none"
function getRandomLocation() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const x = Math.random() * (width - 200) + 100
    const y = Math.random() * (height - 200) + 100
    return { x, y }
}


function toNextPage(className) {
    className.classList.add("transitionActive");
    setTimeout(() => {
        className.style.display = "none"
    }, 1000)
}


playBtn.addEventListener('click', () => {
    toNextPage(mainPage);
    scoreBoard.textContent = "0";
    secondPage.style.display = "flex"
})

let imgSrc;

chooseInsect.forEach(btn => {
    btn.addEventListener('click', function () {
        const img = btn.querySelector('img');
        toNextPage(secondPage)
        let src;
        if (img) {
            src = img.getAttribute('src');
        }
        imgSrc = btn.src;
        console.log(imgSrc);
        gameStart.style.display = "block"
        timeLeft()
        image.src = imgSrc;
    })
})



function randomPosi() {
    // image.src = imgSrc;
    const { x, y } = getRandomLocation();
    insectsPosition.style.top = y + 'px';
    insectsPosition.style.left = x + 'px';
}
insectsPosition.addEventListener('click', () => {
    score++;
    scoreBoard.innerHTML = score;
})



insectsPosition.addEventListener('click', randomPosi);
randomPosi();

let intervelId;

function timeLeft() {
    intervelId = setInterval(() => {
        seconds--
        time.innerHTML = `${seconds}`;
        if (seconds == 0) {
            clearInterval(intervelId)
            gameStart.classList.add("restart");
            mainPage.classList.remove("transitionActive")
            mainPage.style.display = "flex"
            secondPage.classList.remove("transitionActive")
            secondPage.style.display = "flex"
            gameStart.classList.remove("restart")
            alert(`You caught ${score} 🪰 Insects in 10 seconds`)
            secondPage.style.display = "none"
            gameStart.style.display = "none"
            seconds = 11;
            playBtn.textContent = "Restart Game"
            score = 0;
            // alert.textContent = `You caught ${score} 🪰 Insects in 10 seconds`
        }
    }, 1000);
}

// window.addEventListener('mousemove', (event) => {
//     let mousePos = { x: undefined, y: undefined };
//     mousePos = { x: event.clientX, y: event.clientY };
//     mouseCursor.style.top = mousePos.y + 'px';
//     mouseCursor.style.left = mousePos.x + 'px';
// });