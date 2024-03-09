class Bot {
	/**
	 * Creates bot with set difficulty
	 * @param {"easy" | "medium" | "hard"} difficulty
	 * @param {"X" | "O"} sign
	 */
	constructor(difficulty, sign) {
		this.difficulty = difficulty;
		this.sign = sign;
	}
	/**
	 * Genarates random next move cell index
	 * @param {string[]} board
	 * @returns {number}
	 */
	#generateRandomMove(board) {
		const posibleMoves = board.reduce((acc, x, i) => {
			if (x == "") acc.push(i);
			return acc;
		}, []);
		return posibleMoves[Math.floor(Math.random() * posibleMoves.length)];
	}

	/**
	 * Calcuates score of a move using minimax algorithm
	 * @param {string[]} board
	 * @param {number} depth
	 * @param {"X" | "O"} sign
	 * @returns {number}
	 */
	#minimax(board, depth, sign) {
		const nextSign = sign === "X" ? "O" : "X";
		if (checkIfWin(board)) {
			return this.sign === sign ? -10 + depth : 10 - depth;
		} else if (board.every((x) => x !== "")) {
			return 0;
		}
		let getBetterScore, bestScore;
		if (this.sign === sign) {
			getBetterScore = Math.max;
			bestScore = -Infinity;
		} else {
			getBetterScore = Math.min;
			bestScore = Infinity;
		}
		for (let i = 0; i < 9; i++) {
			if (board[i] !== "") continue;
			board[i] = sign;
			let score = this.#minimax(board, depth + 1, nextSign);
			board[i] = "";
			bestScore = getBetterScore(bestScore, score);
		}
		return bestScore;
	}

	/**
	 * Generates optimal next move cell index
	 * @param {string[]} board
	 * @returns {number}
	 */
	#generateOptimalMove(board) {
		let bestScore = -Infinity;
		let move;
		for (let i = 0; i < 9; i++) {
			if (board[i] === "") {
				board[i] = this.sign;
				let score = this.#minimax(board, 0, playerSign);
				board[i] = "";
				if (score > bestScore) {
					bestScore = score;
					move = i;
				}
			}
		}
		return move;
	}

	/**
	 * Generates next move based on board position
	 * @param {string[]} board
	 * @returns {number} Returns index of a cell
	 */
	nextMove(board) {
		switch (this.difficulty) {
			case "easy":
				return this.#generateRandomMove(board);
			case "medium":
				if (Math.random() > 0.5)
					return this.#generateOptimalMove(board);
				else return this.#generateRandomMove(board);
			case "hard":
				return this.#generateOptimalMove(board);
			default:
				break;
		}
	}
}
