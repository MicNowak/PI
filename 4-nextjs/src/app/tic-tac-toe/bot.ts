export type Difficulty = "easy" | "medium" | "hard";
export type Sign = "X" | "O";

export function checkIfWin(board: string[]): boolean {
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

export class Bot {
	difficulty: Difficulty;
	sign: Sign;

	constructor(difficulty: Difficulty, sign: Sign) {
		this.difficulty = difficulty;
		this.sign = sign;
	}

	generateRandomMove(board: string[]): number {
		const posibleMoves = board.reduce((acc: number[], x, i) => {
			if (x == "") acc.push(i);
			return acc;
		}, []);
		return posibleMoves[Math.floor(Math.random() * posibleMoves.length)];
	}

	minimax(board: string[], depth: number, sign: Sign): number {
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
			let score = this.minimax(board, depth + 1, nextSign);
			board[i] = "";
			bestScore = getBetterScore(bestScore, score);
		}
		return bestScore;
	}

	generateOptimalMove(board: string[]): number {
		const playerSign = this.sign === "X" ? "O" : "X";
		let bestScore = -Infinity;
		let move: number = -1;
		for (let i = 0; i < 9; i++) {
			if (board[i] === "") {
				board[i] = this.sign;
				let score = this.minimax(board, 0, playerSign);
				board[i] = "";
				if (score > bestScore) {
					bestScore = score;
					move = i;
				}
			}
		}
		return move;
	}

	nextMove(board: string[]): number {
		switch (this.difficulty) {
			case "easy":
				return this.generateRandomMove(board);
			case "medium":
				if (Math.random() > 0.5) return this.generateOptimalMove(board);
				else return this.generateRandomMove(board);
			case "hard":
				return this.generateOptimalMove(board);
			default:
				return this.generateRandomMove(board);
		}
	}
}
