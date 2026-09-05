export const portfolio = {
	name: 'Alfredo Tito',
	location: 'São Paulo, SP',
	role: 'Frontend sênior',
	hero: {
		headline: 'De pesquisador em histórias interativas a engenheiro frontend sênior no Itaú.',
		summary:
			'Quase 10 anos de estrada em frontend, de bibliotecas de UI a produtos financeiros de larga escala. React, Next.js e performance são meu ofício.',
	},
	about: [
		'Formado em Ciência da Computação pela UFMA, comecei em 2016 como pesquisador no laboratório Telemídia. Foi lá que a paixão por interfaces web pegou de vez.',
		'Hoje sou Analista de Engenharia de TI Pleno no Itaú Unibanco, depois de passar por Dotz, NoVerde e Grupo Mateus: sempre no frontend, sempre buscando performance, escala e boa experiência de uso.',
	],
	journey: [
		{
			period: 'fev/2026 — presente',
			role: 'Analista de Engenharia de TI Pleno',
			company: 'Itaú Unibanco · São Paulo, SP',
			current: true,
			achievements: [],
		},
		{
			period: 'out/2024 — jan/2026',
			role: 'Senior / Mid-Level Frontend Developer',
			company: 'Dotz · jun/2023 — jan/2026 · São Paulo, SP',
			achievements: [
				'Migrei o Ganhe Online de Angular para Next.js (SSR + ISR): PageSpeed de 22 para 85 (+286%).',
				'Ampliei páginas indexadas de 150 para 400+ (+165% de tráfego orgânico).',
				'Atualizei a extensão Lembrador (React + Vite): +9% de conversão.',
			],
		},
		{
			period: 'jun/2021 — jan/2024',
			role: 'Frontend Jr. → Pleno',
			company: 'NoVerde · Fintech / Empréstimos · São Paulo, SP',
			achievements: [
				'Evoluí a biblioteca interna de UI (React, Storybook, Design Tokens).',
				'Criei o site institucional com SSG na AWS (S3 + CloudFront).',
			],
		},
		{
			period: 'set/2020 — jun/2021',
			role: 'Programador Júnior',
			company: 'Grupo Mateus · Varejo · São Luís, MA',
			achievements: ['Sistemas de RH com Vue.js, Vuetify e Vuex.', 'Suporte a app desktop em C++ com Qt.'],
		},
		{
			period: '2016 — set/2020',
			role: 'Pesquisador',
			company: 'Telemídia/MA · UNA/SUS, EuQuero e QRCodeReader',
			achievements: [
				'Biblioteca para histórias interativas não-lineares (AngularJS).',
				'Base do que depois viraria minhas publicações sobre FableJS.',
			],
		},
	],
	skills: {
		stack: ['React', 'Next.js', 'Vue.js', 'Angular', 'TypeScript', 'Node.js', 'Java / Spring Boot'],
		'infra & dados': ['AWS', 'Azure', 'Firebase', 'Google Analytics', 'Tag Manager', 'React Query'],
		ferramentas: ['Git', 'NPM / Yarn', 'VS Code', 'Material UI', 'GitLab', 'Trello'],
		soft: ['Rápido aprendizado', 'Criatividade', 'Ótimo em resolução de problemas', 'Bom em dar e receber feedback'],
	},
	projects: [
		{ name: 'Unx', description: 'Plataforma web — interface e fluxo de produto.', year: '2023', stack: ['React', 'TS'] },
		{ name: 'Proffy', description: 'App de conexão entre professores e alunos.', year: '2023', stack: ['React', 'Node'] },
		{ name: 'World trip', description: 'Planejador de viagens com mapa interativo.', year: '2022', stack: ['React', 'Maps API'] },
	],
	publications: [
		'Utilizando FableJS como Ferramenta de Apoio à Criação de Histórias Interativas',
		'Improving the Authoring of Web-based Interactive E-books with FableJS',
	],
	certifications: [
		'Desenvolvimento avançado com JavaScript ES6',
		'Domine a Arquitetura Limpa e Hexagonal',
		'Curso Online de UI Design',
		'Curso Web Moderno Completo com JavaScript 2022 + Projetos',
		'Engenharia de Prompt',
	],
	contact: {
		email: 'alfredtito97@gmail.com',
		linkedin: 'https://www.linkedin.com/in/alfredots',
		github: 'https://github.com/alfredots',
	},
} as const;