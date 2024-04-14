// ✅ No error
"use client";
import { List } from "@mantine/core";

export default function Page() {
	return (
		<>
			<h1>About</h1>
			<p>
				This website was created for the sole purpose of creating a
				responsive single page website for web programming classes in
				SGGW university.
			</p>
			<h2>Technologies used for creating:</h2>
			<List withPadding size="lg">
				<List.Item>TypeScript</List.Item>
				<List.Item>React</List.Item>
				<List.Item>Tailwind CSS</List.Item>
				<List.Item>Next.js</List.Item>
				<List.Item>Mentine</List.Item>
			</List>
		</>
	);
}
