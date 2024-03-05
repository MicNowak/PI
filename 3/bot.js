class Bot {
    /**
     * Creates bot with set difficulty
     * @param {"easy" | "medium" | "hard"} difficulty
     */
    constructor(difficulty) {
        this.difficulty = difficulty;
    }
    /**
     *
     * @param {string[]} board
     * @returns {number} Returns index of a cell
     */
    makeMove(board) {
        /** @type {number[]} */
        const posibleMoves = board.reduce((acc, x, i) => {
            if (x == "") acc.push(i);
        }, []);
        console.log(posibleMoves);
    }
}
