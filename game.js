const FIRST_WORDLE_DATE = new Date("19-Jun-2021");
const TODAY_WORDLE_NUMBER = Math.ceil(Math.abs(FIRST_WORDLE_DATE - new Date().setHours(0,0,0,0))/(1000 * 60 * 60 * 24));
const WORD_LENGTH = 5;
const CONGRATS_MESSAGES = ["Genius", "Magnificent", "Impressive", "Splendid", "Great", "Phew"];

const guessGrid = document.querySelector(".game-board");
const getActiveTiles = () => guessGrid.querySelectorAll("[data-state='active']");

document.addEventListener("keydown", (event) => {
    if(event.key == "Enter"){
        checkGuess();
    }

    if(event.key == "Backspace" || event.key == "Delete"){
        deleteLetter();
    }

    if(event.key.match(/^[a-zA-Z]$/)){
        updateLetter(event.key.toLowerCase());
    }
    console.log(event.key);
});

function checkGuess(){
    const activeTiles = getActiveTiles();
    if(activeTiles.length != WORD_LENGTH) {
        activeTiles.forEach((tile) => {
            tile.dataset.animation = "shake"
            tile.addEventListener("animationend", () => tile.removeAttribute("data-animation"));
        });
    }
}

function deleteLetter(){
    const lastActiveTiles = [...getActiveTiles()].pop();
    if(lastActiveTiles == null) return;
    lastActiveTiles.removeAttribute("data-state");
    lastActiveTiles.removeAttribute("data-letter");
    lastActiveTiles.textContent = "";
}

function updateLetter(key){
    if(getActiveTiles().length >= WORD_LENGTH) return;
    const emptyTile = guessGrid.querySelector(":not([data-letter])");
    emptyTile.dataset.state = "active";
    emptyTile.dataset.animation = "pop";
    emptyTile.dataset.letter = key;
    emptyTile.textContent = key;
}
