"use client";
import { Radio, Button, Divider } from "@mantine/core";
import { Bot, checkIfWin } from "./bot";
import type { Difficulty, Sign } from "./bot";
import { Dispatch, SetStateAction, useState } from "react";

type State = "pvp" | "ai" | Difficulty | "end" | null;

function selectBot(
	stateSetter: Dispatch<SetStateAction<State>>,
	difficulty: Difficulty,
	playerSign: Sign
): Bot {
	stateSetter(difficulty);
	return new Bot(difficulty, playerSign === "X" ? "O" : "X");
}

function Board({
	board,
	onClick,
}: {
	board: string[];
	onClick: (i: number) => void;
}) {
	return (
		<div>
			{board.map((x, i) => (
				<Button key={i} onClick={() => onClick(i)}>
					{board[i]}
				</Button>
			))}
		</div>
	);
}

export default function Page() {
	const [state, setState] = useState<State>(null);
	const [playerSign, setPlayerSign] = useState<Sign>("X");
	const [board, setBoard] = useState<string[]>(Array(9).fill(""));

	let currentSign: Sign = "X";
	let currentTurn = 0;
	let bot: Bot;
	let winString: string = "";

	function endGame(result: string) {
		console.log(result);

		winString = result;
		setState("end");
	}

	function makeMove(index: number) {
		currentTurn += 1;
		setBoard((board) => {
			board[index] = currentSign;
			return board;
		});
		if (checkIfWin(board)) {
			endGame(`${currentSign} won`);
			return;
		}
		if (currentTurn == 9) {
			endGame("Draw");
			return;
		}

		currentSign = currentSign === "X" ? "O" : "X";
		if (state !== "pvp" && playerSign !== currentSign) {
			makeMove(bot.nextMove(board));
		}
		console.log(board);
	}
	return (
		<>
			<div>
				{state === null ? (
					<>
						<Button onClick={() => setState("pvp")}>PvP</Button>
						<Button onClick={() => setState("ai")}>
							vs Computer
						</Button>
					</>
				) : state === "ai" ? (
					<>
						<Radio
							value="X"
							label="X"
							checked={playerSign === "X"}
							onChange={() => setPlayerSign("X")}
						/>
						<Radio
							value="O"
							label="O"
							checked={playerSign === "O"}
							onChange={() => setPlayerSign("O")}
						/>
						<Button
							onClick={() => {
								bot = selectBot(setState, "easy", playerSign);
							}}
						>
							Easy
						</Button>
						<Button
							onClick={() => {
								bot = selectBot(setState, "medium", playerSign);
							}}
						>
							Medium
						</Button>
						<Button
							onClick={() => {
								bot = selectBot(setState, "hard", playerSign);
							}}
						>
							Hard
						</Button>
					</>
				) : state === "end" ? (
					<p>{winString}</p>
				) : (
					<Board board={board} onClick={makeMove} />
				)}
			</div>
		</>
	);
}
