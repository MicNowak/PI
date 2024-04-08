"use client";
import { NavLink } from "@mantine/core";
import Link from "next/link";

type Props = {
	close: () => void;
};

export default function Navbar({ close }: Props) {
	return (
		<>
			<NavLink label="Home" component={Link} href="./" onClick={close} />
			<NavLink label="Tasks" defaultOpened={true} opened={true}>
				<NavLink
					label="Hello World"
					description="Task 1: Hello World"
					component={Link}
					href="./hello-world"
				/>
				<NavLink
					label="HTML3-CSS"
					description="Task 2: HTML3-CSS"
					component={Link}
					href="./html-css"
					onClick={close}
				/>
				<NavLink
					label="Tic-Tac-Toe"
					description="Task 3: JS Game"
					component={Link}
					href="./tic-tac-toe"
					onClick={close}
				/>
			</NavLink>
			<NavLink
				label="About"
				component={Link}
				href="./about"
				onClick={close}
			/>
		</>
	);
}
