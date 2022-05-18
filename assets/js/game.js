const FIRST_WORDLE_DATE = new Date("19-Jun-2021");
const TODAY_WORDLE_NUMBER = Math.ceil(Math.abs(FIRST_WORDLE_DATE - new Date().setHours(0,0,0,0))/(1000 * 60 * 60 * 24));
const WORD_LENGTH = 5;
const CONGRATS_MESSAGES = ["Genius", "Magnificent", "Impressive", "Splendid", "Great", "Phew"];

const guessGrid = document.querySelector(".game-board");
const alertContainer = document.querySelector(".alert-container");
const keyboard = document.querySelector(".keyboard");
const getActiveTiles = () => guessGrid.querySelectorAll("[data-state='active']");

startGame();

function startGame(){
    document.addEventListener("keydown", handleKeyPress);
    document.addEventListener("click", handleMouseClick);
}

function pauseGame(){
    document.removeEventListener("keydown", handleKeyPress);
    document.removeEventListener("click", handleMouseClick);
}

function handleMouseClick(event){
    if(event.target.matches("[data-key]"))
        updateLetter(event.target.dataset.key);
    else if(event.target.matches("[data-enter]"))
        submitWord();
    else if(event.target.matches("[data-backspace]"))
        deleteLetter();
}

function handleKeyPress(event){
    if(event.key.match(/^[a-zA-Z]$/))
        updateLetter(event.key.toLowerCase());
    else if(event.key == "Enter")
        submitWord();
    else if(event.key == "Backspace" || event.key == "Delete")
        deleteLetter();
}

function submitWord(){
    const wordle = DAILY_WORDS[TODAY_WORDLE_NUMBER];
    const activeTiles = [...getActiveTiles()];
    const guessWord = activeTiles.reduce((word, tile) => {
        return word + tile.dataset.letter;
    },"");

    if(guessWord.length == 0){
        const emptyTilesRow = [...guessGrid.querySelectorAll(":not([data-letter])")].slice(0, WORD_LENGTH);
        setAnimation(emptyTilesRow, "shake");
    }
    else if(guessWord.length != WORD_LENGTH) {
        const currentRow = [...guessGrid.querySelectorAll(".tile")].slice(NUMBER_OF_GUESSES*WORD_LENGTH, (NUMBER_OF_GUESSES+1)*WORD_LENGTH);
        setAnimation(currentRow, "shake")
        showAlert("Not enough letters");
    }
    else if(!VALID_WORDS.includes(guessWord) && !DAILY_WORDS.includes(guessWord)){
        showAlert("Not in word list")
        setAnimation(activeTiles, "shake");
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
    emptyTile.dataset.letter = key;
    emptyTile.textContent = key;
    setAnimation([emptyTile], "pop");
}

function setAnimation(tiles, animation, delay=0, state=null){
    tiles.forEach((tile, index) => {
            if(state!=null) tile.dataset.state = state;
            setTimeout(() => {
                    tile.dataset.animation = animation;
                    tile.addEventListener("animationend", () => {
                        tile.removeAttribute("data-animation");
                    }, {once: true});
                }, (delay*index));
    });
}

function showAlert(message, duration=200){
    const alert = document.createElement("div");
    alert.textContent = message;
    alert.classList.add("alert");
    alertContainer.prepend(alert);

    if(duration != null){
        setTimeout(()=>{
            alert.classList.add("hide");
            alert.addEventListener("transitionend", () => {
                alert.remove();
            });
        }, duration)
    }

}