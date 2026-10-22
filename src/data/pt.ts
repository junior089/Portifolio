import type { SiteContent } from './types';
import { OCI_ARCHITECT_BADGE_URL, ORACLE_AI_DATABASE_BADGE_URL } from './constants';

export const pt: SiteContent = {
  nav: { work: 'Trabalhos', resume: 'Currículo' },
  hero: {
    eyebrow: 'Brasília, Brasil — aberto a remoto',
    headline: 'Estudante de Engenharia de Software e desenvolvedor backend',
    sub: 'Construo sistemas backend e pipelines de dados com C#/.NET, Python, Java e PostgreSQL, e mantenho um aplicativo desktop open source em Java e Angular. Estudante de Engenharia de Software na UniCEUB, Brasília.',
    ctaWork: 'Ver trabalhos selecionados →',
    ctaResume: 'Ver o currículo'
  },
  labels: {
    selectedWork: 'Trabalhos selecionados',
    experience: 'Experiência',
    technicalFocus: 'Foco técnico',
    certifications: 'Certificações e formação',
    contact: 'Contato',
    readCase: 'Ler o caso →',
    viewSource: 'Ver código →',
    education: 'Formação',
    certs: 'Certificações',
    location: 'Localização',
    backHome: '← Índice',
    verify: 'Verificar →'
  },
  experience: [
    {
      role: 'Desenvolvedor Full Stack',
      org: 'MAY Derma · Contrato · Remoto',
      meta: 'Mai 2026 – Jul 2026',
      desc: 'Montei a loja da empresa em WordPress/WooCommerce e construí em C#/.NET um sistema de afiliados e prescritores em torno dela — links de indicação, cupons, comissões e dashboards para parceiros. Integrei pagamento, frete e marketing via webhooks e mantive a produção com Docker, Nginx, PostgreSQL e Linux.',
      stack: 'C#/.NET · WordPress · WooCommerce · PostgreSQL · Docker · Nginx · Linux'
    },
    {
      role: 'Desenvolvedor Back-end',
      org: 'Agiliza Doutor · Contrato · Remoto',
      meta: 'Ago 2025 – Fev 2026',
      desc: 'Desenvolvimento back-end em uma plataforma para os setores médico e jurídico, trabalhando em sprints Scrum. Construí o scraper judicial que depois evoluiu para o CourtIQ, modelei um banco relacional de 32 tabelas e implementei 149 endpoints REST — cada um entregue como fatia vertical completa: modelagem de dados, migrações, models e DTOs, camada de repositório, controller, endpoint e documentação.',
      stack: 'Python · APIs REST · PostgreSQL · Processamento assíncrono · Scrum'
    }
  ],
  focus: [
    { group: 'Linguagens', items: 'Python · C# / .NET · Java · TypeScript · SQL' },
    { group: 'Backend', items: 'FastAPI · ASP.NET Core · APIs REST · Workers assíncronos · Webhooks · Idempotência' },
    { group: 'Dados', items: 'PostgreSQL · Redis · Payload CMS · Modelagem de dados · Normalização de dados' },
    { group: 'Infraestrutura', items: 'Docker · Linux · Nginx · GitHub Actions · Azure DevOps · Git' },
    { group: 'Frontend', items: 'Angular · React · Next.js · Tailwind CSS' }
  ],
  education: {
    degree: 'Bacharelado em Engenharia de Software',
    meta: 'UniCEUB — Centro Universitário de Brasília · Fev 2026 – Dez 2029'
  },
  certsList: [
    { name: 'Oracle Cloud Infrastructure Certified Architect Associate', year: '2026', href: OCI_ARCHITECT_BADGE_URL },
    { name: 'Oracle AI Database Certified Foundations Associate', year: '2026', href: ORACLE_AI_DATABASE_BADGE_URL },
    { name: 'AWS Certified AI Practitioner', year: '2026' },
    { name: 'AWS Certified Cloud Practitioner', year: '2026' }
  ],
  contact: {
    headline: 'Aberto a estágios e vagas de engenharia backend.',
    body: 'O caminho mais rápido é o email. O código está no GitHub; o currículo tem uma página e pode ser baixado em PDF.',
    location: 'Brasília, DF, Brasil · Aberto a remoto'
  },
  notFound: {
    title: 'Esta página não existe.',
    body: 'O endereço está errado ou a página foi movida. Tudo no site é alcançável a partir destes três lugares.',
    links: [
      { label: 'Índice', path: '/pt' },
      { label: 'Trabalhos selecionados', path: '/pt#selected-work' },
      { label: 'Currículo', path: '/pt/resume' }
    ]
  },
  resume: {
    title: 'Currículo',
    lede: 'Versão resumida. O documento completo está disponível em PDF.',
    download: 'Baixar PDF ↓',
    cvFile: '/Carlos-Alberto-Oliveira-Jr-CV-PT.pdf',
    blocks: [
      {
        label: 'Experiência',
        rows: [
          {
            k: 'Desenvolvedor Full Stack',
            meta: 'MAY Derma · Mai – Jul 2026',
            v: 'Construí em C#/.NET um sistema de afiliados e prescritores — links de indicação, cupons, comissões e dashboards — e montei a loja em WordPress/WooCommerce. Integrei pagamento, frete e marketing via webhooks; mantive a produção com Docker, Nginx e PostgreSQL.'
          },
          {
            k: 'Desenvolvedor Back-end',
            meta: 'Agiliza Doutor · Ago 2025 – Fev 2026',
            v: 'Implementei 149 endpoints REST e um modelo de dados de 32 tabelas com migrações para uma plataforma dos setores jurídico e médico, em sprints Scrum. Construí o pipeline de scraping em Python para atualizações processuais que evoluiu para o CourtIQ.'
          }
        ]
      },
      {
        label: 'Projetos',
        rows: [
          {
            k: 'CourtIQ',
            meta: 'Projeto pessoal · não implantado',
            v: 'API de dados judiciais que normaliza 19 integrações de tribunais (PJe e e-SAJ) em um único modelo de domínio, com filas, retentativas com backoff exponencial e 634 testes automatizados. Python, FastAPI, PostgreSQL, Redis, Playwright, Docker.'
          },
          {
            k: 'ARPEON',
            meta: '2026 – atual · open source',
            v: 'Editor de partituras desktop e local, com reprodução MIDI, afinador YIN, relatórios de desempenho e reconhecimento de PDF e imagem. 11 módulos Java atrás de uma interface Angular, 242 testes JUnit e 184 Vitest, CI em Windows, Linux e macOS. Java, Angular, TypeScript, Gradle.'
          },
          {
            k: 'Avivando',
            meta: 'Jun – Set 2026 · em produção',
            v: 'Plataforma de gestão de membros atendendo mais de 500 usuários, construída ao lado de um engenheiro sênior. Duas aplicações integradas sobre Payload CMS: site público e core operacional, com controle de acesso por papéis. React, TypeScript, Payload CMS, PostgreSQL, Node.js.'
          },
          {
            k: 'Visio Divina',
            meta: 'Jun 2026 · projeto de extensão UniCEUB',
            v: 'Aplicação web em equipe que transforma roteiros de pregação em apresentações editáveis com um LLM (Llama 3.3 70B), validando a saída com schemas Zod, prompt de reparo e fallback. PostgreSQL no Supabase com Row Level Security; exportação para PPTX, PDF e PNG. TypeScript, React.'
          }
        ]
      },
      {
        label: 'Formação',
        rows: [
          {
            k: 'Bacharelado em Engenharia de Software',
            meta: 'UniCEUB · Fev 2026 – Dez 2029 (previsto)',
            v: 'Centro Universitário de Brasília. Cursando o segundo semestre.'
          }
        ]
      },
      {
        label: 'Certificações',
        rows: [
          { k: 'Oracle Cloud Infrastructure Certified Architect Associate', meta: '2026', v: '', href: OCI_ARCHITECT_BADGE_URL },
          { k: 'Oracle AI Database Certified Foundations Associate', meta: '2026', v: '', href: ORACLE_AI_DATABASE_BADGE_URL },
          { k: 'AWS Certified AI Practitioner', meta: '2026', v: '' },
          { k: 'AWS Certified Cloud Practitioner', meta: '2026', v: '' }
        ]
      },
      {
        label: 'Técnico',
        rows: [
          {
            k: 'Linguagens e frameworks',
            meta: '',
            v: 'C#, Python, Java, TypeScript, JavaScript e SQL. .NET (ASP.NET Core), FastAPI, Angular e React.'
          },
          {
            k: 'Back-end e dados',
            meta: '',
            v: 'APIs REST, webhooks, filas e workers assíncronos, idempotência. PostgreSQL, Redis, modelagem de dados e migrações.'
          },
          {
            k: 'Ferramentas',
            meta: '',
            v: 'Docker, Linux, Nginx, Git, GitHub Actions e Azure DevOps.'
          }
        ]
      },
      {
        label: 'Idiomas',
        rows: [
          { k: 'Português', meta: 'Nativo', v: '' },
          { k: 'Inglês', meta: 'Intermediário', v: 'Leitura e escrita profissionais.' }
        ]
      }
    ]
  }
};
