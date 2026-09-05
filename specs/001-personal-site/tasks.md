# Tarefas: Site Pessoal Alfredo Tito

**Iniciativa:** 001-personal-site  
**Plano:** `specs/001-personal-site/plan.md`  
**Status:** pronto para implementacao

## Convencoes

- `[P]` indica tarefa que pode ser executada em paralelo com outra do mesmo
  bloco, desde que suas dependencias estejam concluidas.
- Cada tarefa deve deixar o projeto executavel ou validavel antes da proxima
  etapa.
- Conteudo profissional pendente deve permanecer identificado e nao ser
  tratado como definitivo.

## Fase 1: Fundacao

- [ ] T001 Inicializar o projeto Astro com TypeScript, scripts `dev`, `build`
  e `preview`, e configuracao `output: 'static'`.
- [ ] T002 [P] Criar a estrutura base de diretorios em `src/`, incluindo
  `components`, `content`, `layouts`, `pages` e `styles`.
- [ ] T003 [P] Configurar `.gitignore` com dependencias, artefatos de build,
  arquivos de ambiente e `.DS_Store`.
- [ ] T004 Criar `src/layouts/BaseLayout.astro` com `lang="pt-BR"`, viewport,
  title, description, canonical e metadados Open Graph/Twitter.
- [ ] T005 Criar `src/styles/global.css` com reset, tokens da paleta,
  tipografia, espacamento, largura de conteudo, foco visivel e
  `prefers-reduced-motion`.
- [ ] T006 Criar `src/pages/index.astro` usando o layout base e uma ordem
  semantica de secoes com um unico `h1`.
- [ ] T007 Executar o primeiro `npm run build` e corrigir qualquer erro de
  configuracao antes de iniciar os componentes.

## Fase 2: Conteudo tipado

- [ ] T008 Criar `src/content/portfolio.ts` com tipos para identidade, hero,
  biografia, trajetoria, habilidades, projetos, publicacoes, certificacoes e
  contatos.
- [ ] T009 [P] Transcrever o conteudo inicial do mockup para os dados
  estruturados, preservando acentos e links oficiais.
- [ ] T010 Revisar e marcar como pendentes datas, metricas, projetos,
  fotografia e demais informacoes que ainda nao foram confirmadas.
- [ ] T011 Validar os dados e garantir que cada link externo tenha URL valida,
  rotulo compreensivel e destino coerente.

## Fase 3: Estrutura da pagina

- [ ] T012 Implementar `SiteHeader.astro` com marca, navegacao por ancoras e
  skip link para o conteudo principal.
- [ ] T013 Implementar `Hero.astro` com localizacao, posicionamento
  profissional, texto de apresentacao e chamadas para trajetoria e contato.
- [ ] T014 Implementar `AboutSection.astro` com biografia, slot de fotografia
  e tratamento para alt text quando a imagem for adicionada.
- [ ] T015 Implementar `Timeline.astro` com periodo, cargo, empresa,
  localizacao e resultados profissionais.
- [ ] T016 Implementar `SkillsSection.astro` com grupos de stack,
  infraestrutura, ferramentas e soft skills.
- [ ] T017 Implementar `ProjectsSection.astro` com cards, descricao,
  tecnologias, ano e links apenas para projetos confirmados.
- [ ] T018 Implementar `PublicationsSection.astro` com publicacoes,
  certificacoes e referencias externas.
- [ ] T019 Implementar `ContactSection.astro` com e-mail, LinkedIn e GitHub,
  usando links com rotulos acessiveis.
- [ ] T020 Implementar `SiteFooter.astro` com autoria, localizacao e ano.
- [ ] T021 Compor todos os componentes em `index.astro` e conferir a ordem de
  leitura sem CSS.

## Fase 4: Identidade visual e responsividade

- [ ] T022 Aplicar a hierarquia Fraunces, Inter e JetBrains Mono com fallback e
  estrategia de carregamento definida.
- [ ] T023 [P] Adicionar detalhes de rota, estrelas, selos e demais ornamentos
  do mockup com markup decorativo nao intrusivo.
- [ ] T024 [P] Definir tratamento visual para fotografia, favicon e imagens
  locais usando Astro Assets quando houver arquivos disponiveis.
- [ ] T025 Implementar layout mobile-first para todas as secoes e ajustar o
  comportamento em viewport desktop.
- [ ] T026 Verificar contraste, estados de hover/foco, tamanhos estaveis de
  botoes e tags e ausencia de rolagem horizontal.

## Fase 5: Validacao e entrega

- [ ] T027 Executar `npm run build` e `npm run preview` para validar a entrega
  estatica de producao.
- [ ] T028 Verificar o conteudo com JavaScript desabilitado e confirmar que o
  fluxo principal continua navegavel.
- [ ] T029 Testar navegacao completa por teclado, skip link, foco visivel e
  ordem semantica dos headings.
- [ ] T030 Testar viewport mobile e desktop, incluindo textos longos, links e
  ausencia de sobreposicao.
- [ ] T031 Auditar HTML gerado, alt text, canonical, Open Graph, favicon,
  idioma, links externos e dados profissionais.
- [ ] T032 Executar Lighthouse ou auditor equivalente e corrigir problemas de
  performance, acessibilidade, boas praticas e SEO.
- [ ] T033 Comparar o resultado final com `idea/mockup-v2_2.html` e registrar
  desvios intencionais de layout ou conteudo.
- [ ] T034 Escolher hospedagem e configurar dominio, sitemap, cache e variavel
  canonical antes do deploy.

## Ordem recomendada

Implementar T001-T007 primeiro. Em seguida, T008-T011 podem preparar o
conteudo enquanto a fundacao estabiliza. A pagina deve ser composta de T012 a
T021 antes dos acabamentos de T022 a T026. T027-T034 sao obrigatorias antes da
publicacao.