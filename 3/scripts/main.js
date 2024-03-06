/**
 * Makes move on cell selected by index
 * @param {number} index - cell index
 */
function makeMove(index) {
	currentTurn += 1;
	board[index].textContent = currentSign;
	if (checkIfWin(convertBoard2Str())) {
		endGame(`${currentSign} won`);
		return;
	}
	if (currentTurn == 9) {
		endGame("Draw");
		return;
	}

	currentSign = currentSign === "X" ? "O" : "X";
	deactivateButton(index);
	if (gameMode != "pvp" && playerSign != currentSign) {
		makeMove(bot.nextMove(convertBoard2Str()));
	}
}

/**
 * Starts game with selected gamemode as selected symbol
 * @param {"pvp" | "easy" | "medium" | "hard"} mode
 */
function startGame(mode) {
	// Read info from menu
	gameMode = mode;
	const menu = document.getElementById("menu");
	playerSign = menu.querySelector("input[type=radio]:checked").value;

	// Setup board
	for (let i = 0; i < 9; i++) {
		activateButton(i);
	}
	menu.hidden = true;

	// create bot and first move
	if (gameMode != "pvp") {
		bot = new Bot(gameMode, playerSign === "X" ? "O" : "X");
		if (playerSign == "O") makeMove(bot.nextMove(convertBoard2Str()));
	}
}

/**
 * @param {string} result
 */
function endGame(result) {
	for (let i = 0; i < 9; i++) {
		deactivateButton(i);
	}
	document.getElementById("win-text").textContent = result;
	document.getElementById("restart").hidden = false;
}
