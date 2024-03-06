let currentSign = "X";
let currentTurn = 0;
/** @type {"pvp" | "easy" | "medium" | "hard"} */
let gameMode;
/** @type {"X" | "O"} */
let playerSign;
/** @type {Bot} */
let bot;

/** @type {HTMLButtonElement[]} */
const board = Array.from(
	document.getElementById("board").getElementsByTagName("button")
);

/**
 * Returns true if sombody wins
 * @param {string[]} board
 * @returns {boolean}
 */
function checkIfWin(board) {
	// rows and columns
	for (let i = 0; i < 3; i++) {
		const row = [board[3 * i], board[3 * i + 1], board[3 * i + 2]];
		const column = [board[i], board[i + 3], board[i + 6]];
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
	const diagonal1 = [board[0], board[4], board[8]];
	const diagonal2 = [board[2], board[4], board[6]];
	return (
		diagonal1.every((x) => x == "X") ||
		diagonal1.every((x) => x == "O") ||
		diagonal2.every((x) => x == "X") ||
		diagonal2.every((x) => x == "O")
	);
}

/**
 * Converts global board to string[]
 * @returns {string[]}
 */
function convertBoard2Str() {
	return board.map((x) => x.textContent);
}
