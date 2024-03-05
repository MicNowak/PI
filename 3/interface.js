/**
 * If user selected "vs Computer"
 */
function selectBot() {
	document.getElementById("bot-menu").hidden = false;
	document.getElementById("initial-gamemode-select").hidden = true;
}
/**
 * Activate button in index
 * @param {number} index
 */
function activateButton(index) {
	board[index].disabled = false;
}

/**
 * Deactivate button in index
 * @param {number} index
 */
function deactivateButton(index) {
	board[index].disabled = true;
}
