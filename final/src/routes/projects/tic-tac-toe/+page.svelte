<script lang="ts">
	import { RadioGroup, RadioItem } from '@skeletonlabs/skeleton';
	import Bot from './Bot';
	import { checkIfWin, convertBoard2Str } from './functions';
	type Sign = 'X' | 'O';
	type Difficulty = 'pvp' | 'easy' | 'medium' | 'hard' | null;
	let currentSign: Sign = 'X';
	let currentTurn = 0;
	let gameMode: Difficulty = null;
	let playerSign: Sign = 'X';
	let bot: Bot;

	const board: HTMLButtonElement[] = Array(9).fill(document.createElement('button'));

	let uiElements: {
		menu: HTMLDivElement;
		initialGamemodeSelect: HTMLDivElement;
		botMenu: HTMLDivElement;
		board: HTMLDivElement;
		winText: HTMLDivElement;
		restart: HTMLButtonElement;
	} = {
		menu: document.createElement('div'),
		initialGamemodeSelect: document.createElement('div'),
		botMenu: document.createElement('div'),
		board: document.createElement('div'),
		winText: document.createElement('div'),
		restart: document.createElement('button')
	};

	function makeMove(index: number) {
		currentTurn += 1;
		board[index].textContent = currentSign;
		if (checkIfWin(convertBoard2Str(board))) {
			endGame(`${currentSign} won`);
			return;
		}
		if (currentTurn == 9) {
			endGame('Draw');
			return;
		}

		currentSign = currentSign === 'X' ? 'O' : 'X';
		board[index].disabled = true;
		if (gameMode != 'pvp' && playerSign != currentSign) {
			makeMove(bot.nextMove(convertBoard2Str(board as HTMLButtonElement[])));
		}
	}

	function endGame(result: string) {
		board.forEach((cell) => {
			if (cell) cell.disabled = true;
		});
		uiElements.winText.textContent = result;
		uiElements.restart.style.display = 'block';
	}

	function startGame(mode: 'pvp' | 'easy' | 'medium' | 'hard') {
		// Read info from menu
		gameMode = mode;
		const menu = document.getElementById('menu');

		// Setup board
		board.forEach((cell) => {
			if (cell) cell.disabled = false;
		});
		uiElements.menu.hidden = true;

		// create bot and first move
		if (gameMode != 'pvp') {
			bot = new Bot(gameMode, playerSign === 'X' ? 'O' : 'X');
			if (playerSign == 'O') makeMove(bot.nextMove(convertBoard2Str(board)));
		}
	}

	function restartGame() {
		board.forEach((cell) => {
			cell.textContent = '';
			cell.disabled = true;
		});
		uiElements.winText.textContent = '';
		uiElements.menu.hidden = false;
		uiElements.initialGamemodeSelect.hidden = false;
		uiElements.botMenu.hidden = true;
		uiElements.restart.style.display = 'none';
		currentSign = 'X';
		currentTurn = 0;
		gameMode = null;
		playerSign = 'X';
	}
</script>

<h1 class="h1">Tic Tac Toe</h1>

<div bind:this={uiElements.menu} class="my-2">
	<div bind:this={uiElements.initialGamemodeSelect}>
		<button
			class="btn variant-filled"
			on:click={() => {
				startGame('pvp');
			}}>PvP</button
		>
		<button
			class="btn variant-filled"
			on:click={() => {
				uiElements.botMenu.hidden = false;
				uiElements.initialGamemodeSelect.hidden = true;
			}}
		>
			vs Computer
		</button>
	</div>
	<div bind:this={uiElements.botMenu} hidden>
		<div class="my-2">
			<RadioGroup>
				<RadioItem bind:group={playerSign} name="justify" value={'X'}>X</RadioItem>
				<RadioItem bind:group={playerSign} name="justify" value={'O'}>O</RadioItem>
			</RadioGroup>
		</div>
		<button
			class="btn variant-filled"
			on:click={() => {
				startGame('easy');
			}}>Easy</button
		>
		<button
			class="btn variant-filled"
			on:click={() => {
				startGame('medium');
			}}
		>
			Medium
		</button>
		<button
			class="btn variant-filled"
			on:click={() => {
				startGame('hard');
			}}
		>
			Hard
		</button>
	</div>
</div>
<div bind:this={uiElements.board} id="board">
	{#each Array(9) as _, i}
		<button
			bind:this={board[i]}
			class="btn variant-filled"
			on:click={() => {
				makeMove(i);
			}}
			disabled
		>
		</button>
	{/each}
</div>
<div bind:this={uiElements.winText}></div>
<button
	class="btn variant-filled my-2 hidden"
	bind:this={uiElements.restart}
	on:click={restartGame}
>
	Play again
</button>

<style>
	#board {
		display: grid;
		grid-template-columns: repeat(3, 7rem);
		gap: 1rem;
	}
	#board > button {
		font-size: 5rem;
		aspect-ratio: 1/1;
	}
</style>
