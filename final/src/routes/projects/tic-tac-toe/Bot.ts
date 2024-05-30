import { checkIfWin } from './functions';

export default class Bot {
	difficulty: 'easy' | 'medium' | 'hard';
	sign: 'X' | 'O';
	constructor(difficulty: 'easy' | 'medium' | 'hard', sign: 'X' | 'O') {
		this.difficulty = difficulty;
		this.sign = sign;
	}

	#generateRandomMove(board: string[]): number {
		const posibleMoves = board.reduce((acc, x, i) => {
			if (x == '') acc.push(i);
			return acc;
		}, [] as number[]);
		return posibleMoves[Math.floor(Math.random() * posibleMoves.length)];
	}

	#minimax(board: string[], depth: number, sign: 'X' | 'O'): number {
		const nextSign = sign === 'X' ? 'O' : 'X';
		if (checkIfWin(board)) {
			return this.sign === sign ? -10 + depth : 10 - depth;
		} else if (board.every((x) => x !== '')) {
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
			if (board[i] !== '') continue;
			board[i] = sign;
			const score = this.#minimax(board, depth + 1, nextSign);
			board[i] = '';
			bestScore = getBetterScore(bestScore, score);
		}
		return bestScore;
	}

	#generateOptimalMove(board: string[]): number {
		const playerSign = this.sign === 'X' ? 'O' : 'X';
		let bestScore = -Infinity;
		let move;
		for (let i = 0; i < 9; i++) {
			if (board[i] === '') {
				board[i] = this.sign;
				const score = this.#minimax(board, 0, playerSign);
				board[i] = '';
				if (score > bestScore) {
					bestScore = score;
					move = i;
				}
			}
		}
		return move ?? -1;
	}

	nextMove(board: string[]): number {
		switch (this.difficulty) {
			case 'easy':
				return this.#generateRandomMove(board);
			case 'medium':
				if (Math.random() > 0.5) return this.#generateOptimalMove(board);
				else return this.#generateRandomMove(board);
			case 'hard':
				return this.#generateOptimalMove(board);
			default:
				return -1;
		}
	}
}
