# CARLOS ALBERTO SOARES DE OLIVEIRA JÚNIOR
**Estudante de Engenharia de Software & Desenvolvedor Back-end**

Brasília, Brasil · +55 61 99244-5034 · carlosalbertoliveirajr07@gmail.com
[LinkedIn](https://www.linkedin.com/in/carlos-alberto-soares-de-oliveira-júnior) · [GitHub](https://github.com/junior089) · [Portfólio](https://carlosjr.engineer)

---

## RESUMO

Estudante de Engenharia de Software e desenvolvedor back-end com experiência contratual em sistemas de produção para e-commerce, tecnologia jurídica e setor médico. Foco em serviços de back-end, pipelines de dados e integrações com C#/.NET, Python, PostgreSQL, Docker e Linux. Construiu uma plataforma de dados judiciais com 19 integrações de tribunais normalizadas por trás de uma única API, e uma plataforma de gestão de membros em produção atendendo mais de 500 usuários.

---

## EXPERIÊNCIA

### Desenvolvedor Full-Stack (Contrato) · MAY Derma
**Mai 2026 – Jul 2026 · Remoto · Brasília, Brasil**

- Construiu e customizou uma plataforma de e-commerce responsiva em WordPress/WooCommerce, cobrindo catálogo de produtos, variações, kits, promoções e fluxos de checkout.
- Desenvolveu uma plataforma em C#/.NET para afiliados, prescritores e criadores, com links de indicação, cupons, atribuição de vendas, comissões, dashboards e relatórios.
- Integrou APIs de pagamento, logística e ERP via webhooks e workers assíncronos, usando idempotência para suportar reentregas e tentativas duplicadas.
- Implantou e manteve infraestrutura de produção com Docker, Nginx, PostgreSQL e VPS Linux.

### Desenvolvedor Back-end (Contrato) · Agiliza Doutor
**Ago 2025 – Fev 2026 · Remoto · Brasília, Brasil**

- Desenvolvimento back-end em plataforma voltada aos setores jurídico e médico, trabalhando em sprints Scrum.
- Projetou e implementou um pipeline de web scraping em Python para monitorar atualizações processuais nos principais portais de tribunais brasileiros, complementando dados incompletos ou atrasados da API unificada.
- Implementou a maior parte dos endpoints REST da plataforma, cada um entregue como fatia vertical completa: modelagem de dados, migrações, models e DTOs, camada de repositório, controller, endpoint e documentação.
- Automatizou coleta, normalização e persistência de dados jurídicos heterogêneos; contribuiu com regras de negócio, manutenção e melhorias de confiabilidade.

---

## PROJETOS

### CourtIQ — Plataforma de Dados Judiciais · Projeto pessoal
**Python · FastAPI · PostgreSQL · Redis · Playwright · Docker**

- Projetou e construiu uma plataforma SaaS para monitoramento de processos judiciais brasileiros, normalizando **19 integrações de tribunais** (famílias PJe e e-SAJ) em um único modelo de domínio por meio de uma camada de adaptadores registrados.
- Implementou um pipeline assíncrono com fila à frente dos workers, isolando a API de fontes externas instáveis; a entrega de webhooks é at-least-once, com histórico de retentativas e chaves de deduplicação documentadas.
- Construiu organizações multi-tenant, chaves de API, SDKs e cobrança no modelo de dados desde a primeira migração.
- **634 testes aprovados** na validação consolidada — 504 da API com 66,42% de cobertura de linhas, 41 do scraper com 73,45%, 89 do frontend. Adaptadores testados contra fixtures de páginas salvas.
- Não está em produção; projetado, construído e validado em ambiente controlado. Código parcialmente público.

### Avivando — Plataforma de Gestão de Membros
**Jun 2026 – Set 2026 · React · TypeScript · Supabase · PostgreSQL · Row Level Security · Edge Functions**

- Construído em dupla com um engenheiro sênior responsável pelo core. **Em produção, atendendo mais de 500 usuários.**
- Duas aplicações integradas — um site público e um core operacional cobrindo cadastro de membros, formulários, check-in, comunicados, atividades e controle de acesso por papel.
- Autorização aplicada no PostgreSQL via Row Level Security, e não no código da aplicação.
- 24 módulos de coleção, 14 migrações, 14 rotas de API/BFF; CI executando lint, tipos, testes e build contra uma instância isolada de PostgreSQL.

### Auren Presenter · Projeto independente, em desenvolvimento
**Rust · Svelte · REST**

- Arquitetando um sistema multiplataforma e offline-first de apresentação ao vivo, que isola saídas de display, palco, mídia, NDI e automação de falhas de internet e da interface do operador.

---

## FORMAÇÃO

**Bacharelado em Engenharia de Software** · Centro Universitário de Brasília (UniCEUB)
Fev 2026 – Dez 2029 (previsto) · Brasília, Brasil

---

## COMPETÊNCIAS TÉCNICAS

**Linguagens:** C#, Python, TypeScript, JavaScript, SQL
**Back-end & Dados:** .NET, ASP.NET Core, FastAPI, APIs REST, web scraping, workers assíncronos, webhooks, idempotência, PostgreSQL, Supabase, Row Level Security
**Infraestrutura:** Docker, Linux, Nginx, CI/CD, Git
**Front-end:** React, Next.js, Tailwind CSS
**Práticas:** Scrum, análise de requisitos, testes automatizados, fundamentos de arquitetura de software

---

## CERTIFICAÇÕES, COMUNIDADE & IDIOMAS

**Certificações:** Oracle Cloud Infrastructure 2026 Certified Architect Associate · AWS Certified AI Practitioner (AIF-C01) · AWS Certified Cloud Practitioner (CLF-C02)
**Comunidade:** AWS Builder Center — Campus Builder Student Leader, Brasil, 2026–presente
**Idiomas:** Português (nativo) · Inglês (intermediário — leitura e escrita profissionais)
