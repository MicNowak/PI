export function checkIfWin(board: string[]): boolean {
	const winningCellsCominations = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	];
	for (const cellCombination of winningCellsCominations) {
		if (
			cellCombination.every((x) => board[x] === 'X') ||
			cellCombination.every((x) => board[x] === 'O')
		)
			return true;
	}
	return false;
}

export function convertBoard2Str(board: HTMLElement[]): string[] {
	return board.map((x) => x.textContent || '');
}
