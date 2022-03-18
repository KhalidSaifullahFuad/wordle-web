const FIRST_WORDLE_DATE = new Date("19-Jun-2021");
const TODAY_WORDLE_NUMBER = Math.ceil(Math.abs(FIRST_WORDLE_DATE - new Date().setHours(0,0,0,0))/(1000 * 60 * 60 * 24));
const WORD_LENGTH = 5;
const CONGRATS_MESSAGES = ["Genius", "Magnificent", "Impressive", "Splendid", "Great", "Phew"];

const guessGrid = document.querySelector(".game-board");
const getActiveTiles = () => guessGrid.querySelectorAll("[data-state='active']");

document.addEventListener("keydown", (event) => {
    if(event.key == "Enter")
        checkGuess();

    if(event.key == "Backspace" || event.key == "Delete")
        deleteLetter();

    if(event.key.match(/^[a-zA-Z]$/))
        updateLetter(event.key.toLowerCase());
});

function checkGuess(){
    const wordle = DAILY_WORDS[TODAY_WORDLE_NUMBER];
    const activeTiles = [...getActiveTiles()];
    const guessWord = activeTiles.reduce((word, tile) => {
        return word + tile.dataset.letter;
    },"");

    if(guessWord.length == 0){
        const emptyTilesRow = [...guessGrid.querySelectorAll(":not([data-letter])")].slice(0, WORD_LENGTH);
        emptyTilesRow.forEach((tile) => {
            tile.dataset.animation = "shake";
            tile.addEventListener("animationend", () => tile.removeAttribute("data-animation"));
        });
    }
    else if(guessWord.length != WORD_LENGTH) {
        activeTiles.forEach((tile) => {
            // setAnimation(tile, "shake")
            tile.dataset.animation = "shake";
            tile.addEventListener("animationend", () => tile.removeAttribute("data-animation"));
        });
    }
    if(guessWord === wordle){
        // activeTiles.forEach((tile) => {
        //     tile.dataset.state = "correct";
        //     setAnimation(tile, "bounce", 250);
        // });
        // setAnimation(activeTiles, "bounce", 200, "correct");
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
    // setAnimation(emptyTile, "pop");
    emptyTile.dataset.animation = "pop";
    emptyTile.addEventListener("animationend", () => emptyTile.removeAttribute("data-animation"));
}

function setSingleTileAnimation(tile, animation){
    tile.dataset.state = state;
    setAnimation(tile, animation, duration);
}

// function setAnimation(tiles, animation, delay=0, state="active"){
//     tiles.forEach((tile, index) => {
//         tile.dataset.state = state;
//         setTimeout(() => {
//             tile.dataset.animation = animation;
//             tile.addEventListener("animationend", () => tile.removeAttribute("data-animation"));
//         }, (delay*index));
//     });
// }