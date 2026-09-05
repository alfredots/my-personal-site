# Plano Tecnico: Site Pessoal Alfredo Tito

**Iniciativa:** 001-personal-site  
**Data:** 2026-09-05  
**Entrada:** `specs/constitution.md` e `idea/mockup-v2_2.html`  
**Status:** proposta para revisao

## Resumo

Construir uma pagina unica, estatica e responsiva em Astro para apresentar a
trajetoria profissional de Alfredo Tito. O primeiro incremento deve reproduzir
a direcao editorial do mockup com componentes Astro pequenos, dados de
conteudo centralizados e CSS proprio, evitando dependencias de UI ou runtime
desnecessarias.

## Verificacao da constituicao

- **Narrativa:** a ordem da pagina sera hero, sobre, trajetoria, habilidades,
  projetos, publicacoes, contato e rodape.
- **Identidade:** a paleta, a atmosfera de rota e a combinacao Fraunces, Inter
  e JetBrains Mono serao traduzidas para tokens CSS e componentes semanticos.
- **Astro/SSG:** a pagina sera gerada com `output: 'static'`; o conteudo
  principal nao dependera de JavaScript.
- **Acessibilidade:** HTML semantico, skip link, foco visivel, alt text,
  contraste revisado, ancoras compreensiveis e `prefers-reduced-motion`.
- **Desempenho/SEO:** fontes e imagens serao otimizadas; metadados e URL
  canonica serao definidos no layout base.
- **Manutencao:** experiencia, projetos, habilidades e publicacoes ficarao em
  modulos de dados separados da marcacao visual.

## Decisoes tecnicas

### Stack

- Astro com TypeScript.
- CSS nativo com custom properties e media queries.
- Markdown ou modulos TypeScript para dados estruturados, conforme o volume
  final de conteudo.
- Astro Assets para imagens locais e geracao de formatos responsivos.
- Sem framework de componentes no primeiro incremento.

### Estrutura proposta

```text
src/
  components/
    SiteHeader.astro
    Hero.astro
    AboutSection.astro
    Timeline.astro
    SkillsSection.astro
    ProjectsSection.astro
    PublicationsSection.astro
    ContactSection.astro
    SiteFooter.astro
  content/
    portfolio.ts
  layouts/
    BaseLayout.astro
  pages/
    index.astro
  styles/
    global.css
public/
  favicon.svg
```

Os nomes sao uma proposta inicial; a implementacao pode simplificar
componentes que nao tenham comportamento ou markup relevante proprio.

## Arquitetura de conteudo

`src/content/portfolio.ts` deve concentrar estruturas tipadas para:

- identidade, localizacao e texto do hero;
- resumo profissional e biografia;
- itens da linha do tempo, incluindo periodo, cargo, empresa e resultados;
- grupos de habilidades e soft skills;
- projetos, links, descricao, ano e tecnologias;
- publicacoes, certificacoes e links de referencia;
- canais de contato.

O mockup sera usado como conteudo inicial, mas metricas, datas, links,
fotografia e projetos precisam ser confirmados antes do deploy. Dados nao
confirmados devem ser marcados como pendentes durante o desenvolvimento, sem
serem apresentados como definitivos na versao publicada.

## Estrategia visual

1. Definir tokens para fundos, textos, acentos, bordas, espacamento e largura
   maxima a partir da paleta do mockup.
2. Recriar a hierarquia tipografica com carregamento otimizado das fontes e
   fallback local coerente.
3. Usar CSS para rota tracejada, selos e detalhes decorativos apenas quando
   nao prejudicar semantica, contraste ou custo de carregamento.
4. Implementar primeiro o layout mobile e ampliar para desktop com poucos
   breakpoints estaveis.
5. Garantir que cards, tags, botoes e marcadores mantenham dimensoes estaveis
   quando o texto variar.

## SEO e entrega

`BaseLayout.astro` sera responsavel por `lang="pt-BR"`, title, description,
canonical, Open Graph, Twitter card, favicon e viewport. A pagina devera
conter um unico `h1`, hierarquia correta de headings e links externos com
`rel="noreferrer"` quando aplicavel. A configuracao de build permanecera
estatica e pronta para hospedagem em CDN, S3 ou servico equivalente.

## Plano de validacao

- `npm run build` ou `astro build` deve concluir sem erros.
- Verificar HTML gerado com JavaScript desabilitado.
- Testar navegacao por teclado, skip link, foco e leitura sem mouse.
- Conferir viewport mobile e desktop, incluindo ausencia de overflow
  horizontal.
- Auditar contraste, alt text e estrutura de headings.
- Verificar URLs de contato, links externos e metadados no HTML final.
- Rodar Lighthouse ou auditor equivalente para performance, acessibilidade,
  boas praticas e SEO.
- Comparar visualmente com o mockup sem transformar o HTML original em
  dependencia de runtime.

## Sequencia de implementacao

1. Inicializar o projeto Astro com TypeScript e modo estatico.
2. Configurar layout base, reset, tokens CSS, fontes e metadados.
3. Modelar e validar os dados do portfolio.
4. Implementar header, hero e navegacao por ancoras.
5. Implementar sobre, trajetoria e habilidades.
6. Implementar projetos, publicacoes, certificacoes e contato.
7. Adicionar fotografia, favicon, detalhes decorativos e estados de foco.
8. Validar responsividade, acessibilidade, SEO e build de producao.
9. Atualizar dados pendentes e preparar o deploy estatico.

## Riscos e decisoes em aberto

- **Conteudo desatualizado:** confirmar cargo atual, datas, metricas e lista de
  projetos antes do deploy.
- **Fontes externas:** decidir entre Google Fonts e arquivos locais para
  equilibrar identidade, privacidade e desempenho.
- **Fotografia:** definir imagem, dimensoes, texto alternativo e tratamento
  visual.
- **Decoracao SVG:** manter apenas ornamentos que funcionem bem em telas
  pequenas e com movimento reduzido.
- **Hospedagem:** escolher o destino final para configurar canonical, dominio,
  sitemap e politica de cache.