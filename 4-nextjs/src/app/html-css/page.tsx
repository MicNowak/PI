import style from "./style.module.css";

export default function Page() {
	return (
		<>
			<h1>HTML3 & CSS</h1>
			<p>
				Page created as a second task using proper HTML3 and CSS syntax
				validated using W3C validator
			</p>
			<div className={style.container}>
				<div className={style.screen}>
					<div className={style.image}></div>
					<div className={style.gradient}></div>
					<div className={style["header-text"]}>Lorem ipsum</div>
					<div className={style.text}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Sed maximus rutrum nisi id malesuada.
					</div>
				</div>
				<div className={style.screen}>
					<div className={style.image}></div>
					<div className={style.gradient}></div>
					<div className={style["header-text"]}>Morbi ac dictum</div>
					<div className={style.text}>
						Morbi ac dictum nunc. Phasellus eleifend eget leo id
						gravida. Integer tincidunt volutpat odio sed.
					</div>
				</div>
				<div className={style.screen}>
					<div className={style.image}></div>
					<div className={style.gradient}></div>
					<div className={style["header-text"]}>Ut dolor augue</div>
					<div className={style.text}>
						Ut dolor augue, varius ut tempor ut, rhoncus ultrices
						orci. Quisque dapibus mauris condimentum quam lacinia.
					</div>
				</div>
				<div className={style.screen}>
					<div className={style.image}></div>
					<div className={style.gradient}></div>
					<div className={style["header-text"]}>Quisque odio</div>
					<div className={style.text}>
						Quisque odio tortor, commodo ac felis sit amet, pulvinar
						aliquam sem. Fusce id pulvinar nibh, a euismod orci.
					</div>
				</div>
				<div className={style.screen}>
					<div className={style.image}></div>
					<div className={style.gradient}></div>
					<div className={style["header-text"]}>Nam volutpat</div>
					<div className={style.text}>
						Nam volutpat ultrices placerat. Aenean accumsan, metus
						vel scelerisque lobortis, ex diam laoreet mauris.
					</div>
				</div>
				<div className={style.screen}>
					<div className={style.image}></div>
					<div className={style.gradient}></div>
					<div className={style["header-text"]}>Proin congue</div>
					<div className={style.text}>
						Proin congue molestie elit in feugiat. Cras et convallis
						magna. Vestibulum in libero ut metus condimentum.
					</div>
				</div>
			</div>
		</>
	);
}
