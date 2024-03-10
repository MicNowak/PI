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
	let winningCellsCominations = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	for (const cellCombination of winningCellsCominations) {
		if (
			cellCombination.every((x) => board[x] === "X") ||
			cellCombination.every((x) => board[x] === "O")
		)
			return true;
	}
	return false;
}

/**
 * Converts global board to string[]
 * @returns {string[]}
 */
function convertBoard2Str() {
	return board.map((x) => x.textContent);
}
