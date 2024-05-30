<script lang="ts">
	import { langStore, type Lang } from '$lib/lang';
	let lang: Lang;
	langStore.subscribe((value) => {
		lang = value;
	});
	const pageInfo = {
		title: {
			pl: 'Ogólne informacje',
			en: 'General info'
		},
		'About me': {
			pl: {
				heading: 'O mnie',
				content:
					'Jestem studentem informatyki poszukującym możliwości rozwoju i zdobycia doświadczenia w dynamicznym świecie technologii. Moje zainteresowania obejmują szeroki zakres dziedzin informatyki, w tym programowanie, analizę danych oraz sztuczną inteligencję. Jestem otwarty na możliwości praktyk, staży oraz projektów, które pozwolą mi rozwijać się jako przyszły specjalista IT.'
			},
			en: {
				heading: 'About me',
				content:
					'I am a computer science student looking for opportunities to grow and gain experience in the dynamic world of technology. My interests span a wide range of computer science fields, including programming, data analysis, and artificial intelligence. I am open to internships, traineeships, and projects that will allow me to develop as a future IT specialist.'
			}
		},
		Education: {
			pl: {
				heading: 'Edukacja',
				content: [
					{
						school: 'Uczelnia: Szkoła Główna Gospodarstwa Wiejskiego w Warszawie',
						degree: 'Kierunek: Informatyka',
						level: 'Poziom: Studia I stopnia (Inżynier)',
						year: 'Okres: 10.2021 - teraz'
					},
					{
						school: 'Szkoła: Technikum Elektroniczne nr 1 Warszawa im. Marcina Kasprzaka',
						degree: 'Kierunek: Technik informatyk',
						level: 'Poziom: Technikum',
						year: 'Okres: 2017 - 2021'
					}
				]
			},
			en: {
				heading: 'Education',
				content: [
					{
						school: 'University: Warsaw University of Life Sciences',
						degree: 'Field: Computer Science',
						level: "Level: Bachelor's degree (Engineer)",
						year: 'Period: 10.2021 - present'
					},
					{
						school:
							'High School: Electronics Technical School No. 1 Warsaw named after Marcin Kasprzak',
						degree: 'Field: IT technician',
						level: 'Level: Technical school',
						year: 'Period: 2017 - 2021'
					}
				]
			}
		},
		Experience: {
			pl: {
				heading: 'Doświadczenie',
				content: [
					{
						position: 'Stanowisko: Analityk danych',
						company: 'Firma: SSW Pragmatic Solutions',
						year: 'Okres: 05.2022 - teraz',
						description:
							'Główne zadania: Analiza danych, tworzenie raportów, wizualizacja danych, wsparcie w zarządzaniu projektem'
					}
				]
			},
			en: {
				heading: 'Experience',
				content: [
					{
						position: 'Position: Data analyst',
						company: 'Company: SSW Pragmatic Solutions',
						year: 'Period: 05.2022 - present',
						description:
							'Main tasks: Data analysis, report creation, data visualization, project management support'
					}
				]
			}
		},
		Skills: {
			heading: {
				pl: 'Umiejętności',
				en: 'Skills'
			},
			content: [
				'Rust',
				'Python',
				'JavaScript',
				'TypeScript',
				'HTML5',
				'CSS3',
				'SQL',
				'Git',
				'Linux',
				'Excel',
				'Power BI'
			]
		},
		Contact: {
			heading: {
				pl: 'Kontakt',
				en: 'Contact'
			},
			content: {
				email: 'michalnowak@...',
				phone: {
					heading: {
						pl: 'Telefon:',
						en: 'Phone:'
					},
					content: '+48 123 456 789'
				},
				location: {
					pl: 'Lokalizacja: Warszawa, Polska',
					en: 'Location: Warsaw, Poland'
				},
				GitHub: '',
				LinkedIn: ''
			}
		}
	};
</script>

<h1 class="h1">{pageInfo.title[lang]}</h1>
<div class="container py-4">
	<div class="card p-4">
		<h2 class="h2">{pageInfo['About me'][lang].heading}</h2>
		<p>{pageInfo['About me'][lang].content}</p>
	</div>
	<div class="card p-4 mt-4">
		<h2 class="h2">{pageInfo.Education[lang].heading}</h2>
		<ul class="list">
			{#each pageInfo.Education[lang].content as item}
				<li>
					<div>
						<span class="badge text-2xl">•</span>
						<span class="flex-auto">
							<strong class="text-2xl">{item.year}</strong>
							<p class="pl-10">{item.school}</p>
							<p class="pl-10">{item.degree}</p>
							<p class="pl-10">{item.level}</p>
						</span>
					</div>
				</li>
			{/each}
		</ul>
	</div>
	<div class="card p-4 mt-4">
		<h2 class="h2">{pageInfo.Experience[lang].heading}</h2>
		<ul class="list">
			{#each pageInfo.Experience[lang].content as item}
				<li>
					<div>
						<span class="badge text-2xl">•</span>
						<span class="flex-auto">
							<strong class="text-2xl">{item.year}</strong>
							<p class="pl-10">{item.position}</p>
							<p class="pl-10">{item.company}</p>
							<p class="pl-10">{item.description}</p>
						</span>
					</div>
				</li>
			{/each}
		</ul>
	</div>
	<div class="card p-4 mt-4">
		<h2 class="h2">{pageInfo.Skills.heading[lang]}</h2>
		<p class="pt-1">{pageInfo.Skills.content.join(', ')}</p>
	</div>
	<div class="card p-4 mt-4">
		<h2 class="h2">{pageInfo.Contact.heading[lang]}</h2>
		<p>Email: {pageInfo.Contact.content.email}</p>
		<p>{pageInfo.Contact.content.phone.heading[lang]} {pageInfo.Contact.content.phone.content}</p>
		<p>{pageInfo.Contact.content.location[lang]}</p>
		<p>GitHub: {pageInfo.Contact.content.GitHub}</p>
		<p>LinkedIn: {pageInfo.Contact.content.LinkedIn}</p>
	</div>
</div>
