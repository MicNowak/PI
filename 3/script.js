/** @type {HTMLButtonElement[]} */
const board = Array.from(
    document.getElementById("board").getElementsByTagName("button")
);

/** @type {string} */
let currentSymbol = "X";

/** @type {string} */
let gameMode = "";
/** @type {string} */
let playerSymbol = "";
/** */
let bot;
/**
 * Change current symbol
 */
function changeSymbol() {
    if (currentSymbol == "X") currentSymbol = "O";
    else currentSymbol = "X";
}

/**
 * Returns true if sombody wins
 * @returns {boolean}
 */
function checkIfWin() {
    // rows and columns
    for (let i = 0; i < 3; i++) {
        const row = [
            board[3 * i].textContent,
            board[3 * i + 1].textContent,
            board[3 * i + 2].textContent,
        ];
        const column = [
            board[i].textContent,
            board[i + 3].textContent,
            board[i + 6].textContent,
        ];
        // check row
        if (row.every((x) => x == "X") || row.every((x) => x == "O")) {
            return true;
        }
        // check column
        if (column.every((x) => x == "X") || column.every((x) => x == "O")) {
            return true;
        }
    }
    // diagonal
    const diagonal1 = [
        board[0].textContent,
        board[4].textContent,
        board[8].textContent,
    ];
    const diagonal2 = [
        board[2].textContent,
        board[4].textContent,
        board[6].textContent,
    ];
    return (
        diagonal1.every((x) => x == "X") ||
        diagonal1.every((x) => x == "O") ||
        diagonal2.every((x) => x == "X") ||
        diagonal2.every((x) => x == "O")
    );
}

/**
 * Deactivate button in index
 * @param {number} index
 */
function deactivateButton(index) {
    board[index].disabled = true;
}

/**
 * Makes move on cell selected by index
 * @param {number} index - cell index
 */
function makeMove(index) {
    board[index].textContent = currentSymbol;
    console.log(checkIfWin());
    changeSymbol();
    deactivateButton(index);
}

/**
 * Prepares board for next game
 */
function setupBoard() {
    currentSymbol = "X";
    board.forEach((btn) => {
        btn.disabled = false;
        btn.textContent = "";
    });
}

/**
 * Starts game with selected gamemode as selected symbol
 * @param {"pvp" | "easy" | "medium" | "hard"} mode
 */
function startGame(mode) {
    // Read info from menu
    gameMode = mode;
    const menu = document.getElementById("menu");
    playerSymbol = menu.querySelector("input[type=radio]:checked").value;

    // Setup board
    setupBoard();
    document.getElementById("board").hidden = false;
    menu.hidden = true;

    // create bot and first move
    if (gameMode != "pvp") {
        if (playerSymbol == "O") makeMove(0);
    }
}
