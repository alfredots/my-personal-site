# Constituicao do Site Pessoal Alfredo Tito

**Status:** aprovada para orientar a fase de especificacao  
**Versao:** 1.0.0  
**Data:** 2026-09-05

## Objetivo

Criar um site pessoal estatico para apresentar Alfredo Tito como engenheiro
frontend senior, conectando experiencia profissional, projetos, publicacoes e
formas de contato em uma narrativa pessoal clara. O mockup em
`idea/mockup-v2_2.html` e a referencia visual e de conteudo inicial, mas nao
substitui a validacao dos dados antes da publicacao.

## Principios

### 1. Narrativa antes de catalogo

O site deve contar uma trajetoria, e nao apenas listar tecnologias. A
experiencia profissional sera organizada como uma rota: apresentacao,
trajetoria, habilidades, projetos, publicacoes e contato. Cada secao precisa
ter uma funcao editorial clara e contribuir para a percepcao de senioridade,
impacto e autoria.

### 2. Identidade visual autoral e legivel

A linguagem visual deve preservar a atmosfera de viagem, correspondencia e
cartografia sugerida pelo mockup: paleta noturna com vermelho, latão,
pergaminho e azul, detalhes de rota e selos, e contraste entre Fraunces,
Inter e JetBrains Mono. A estetica nunca deve comprometer legibilidade,
hierarquia, contraste ou velocidade. Ornamentos devem apoiar o conteudo, nao
competir com ele.

### 3. Astro e paginas estaticas por padrao

O projeto sera construido com Astro e tera geracao estatica como estrategia
principal de entrega. Conteudo que nao exige interacao ou dados em tempo real
deve ser renderizado no build. JavaScript no cliente sera minimo, isolado em
componentes interativos somente quando houver beneficio claro para a
experiencia. A hospedagem deve ser compativel com os artefatos estaticos
gerados pelo Astro.

### 4. Acessibilidade e responsividade sao requisitos de produto

Todas as paginas devem funcionar em telas pequenas e grandes, com navegacao
por teclado, foco visivel, HTML semantico, textos alternativos adequados,
contraste suficiente e suporte a `prefers-reduced-motion`. Links devem ter
destino e rotulos compreensiveis, e a ordem do conteudo deve continuar logica
sem depender de efeitos visuais.

### 5. Desempenho, SEO e compartilhamento desde o inicio

O site deve carregar rapidamente, evitar dependencias desnecessarias e
otimizar imagens e fontes. Cada pagina publicada deve ter titulo, descricao,
idioma `pt-BR`, URL canonica e metadados de compartilhamento coerentes. O
conteudo principal deve ser indexavel sem depender de JavaScript.

### 6. Conteudo verificavel e facil de atualizar

Informacoes de cargos, datas, metricas, empresas, publicacoes, links e
certificacoes devem ser tratadas como dados editaveis, separados da
apresentacao sempre que isso simplificar a manutencao. Nenhuma afirmacao
profissional ou link deve ser publicada sem confirmacao. O projeto deve
manter uma estrutura simples, com componentes pequenos e nomes que expressem
seu papel na pagina.

## Escopo inicial

A primeira versao deve conter uma pagina pessoal com as seguintes secoes:

- cabecalho com identificacao e navegacao por ancora;
- hero com posicionamento profissional e chamadas para acao;
- sobre, incluindo espaco para fotografia;
- trajetoria profissional em linha do tempo;
- habilidades tecnicas, infraestrutura, ferramentas e soft skills;
- projetos selecionados, inicialmente marcados como conteudo provisorio
  quando ainda nao validados;
- publicacoes e certificacoes;
- contato por e-mail, LinkedIn e GitHub;
- rodape com localizacao, autoria e ano.

O escopo nao inclui backend, autenticacao, CMS, blog, area administrativa ou
formulario que exija processamento de servidor.

## Criterios de aceite da fundacao

Uma implementacao guiada por esta constituicao so pode avancar para a
publicacao quando:

1. `astro build` gerar a pagina sem erros e sem depender de um servidor de
   aplicacao em runtime.
2. O conteudo essencial estiver disponivel com JavaScript desabilitado.
3. A pagina puder ser percorrida por teclado e tiver foco visivel em links e
   controles.
4. A experiencia permanecer utilizavel em viewport mobile e desktop, sem
   sobreposicao ou rolagem horizontal acidental.
5. Metadados, links externos, e-mail, imagens e textos profissionais tiverem
   sido revisados antes do deploy.
6. O resultado visual preservar a direcao do mockup sem copiar sua estrutura
   de forma que dificulte a manutencao.

## Governanca

Esta constituicao e o contrato de qualidade do projeto. Especificacoes,
planos e tarefas futuras devem respeitar seus principios ou registrar
explicitamente uma excecao e sua justificativa. Mudancas que alterem a
tecnologia de entrega, a estrategia de conteudo, a acessibilidade ou a
identidade visual exigem atualizacao desta constituicao antes da
implementacao.

Revisoes devem atualizar a versao e a data no cabecalho. A versao major muda
quando um principio ou limite de escopo e removido; a minor quando um
principio e ampliado; a patch quando ha apenas ajuste editorial ou de clareza.