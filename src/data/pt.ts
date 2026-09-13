import type { SiteContent } from './types';

export const pt: SiteContent = {
  nav: { work: 'Trabalhos', resume: 'Currículo' },
  hero: {
    eyebrow: 'Brasília, Brasil — aberto a remoto',
    headline: 'Estudante de Engenharia de Software e desenvolvedor backend',
    sub: 'Construo sistemas backend e pipelines de dados com Python, C#/.NET, PostgreSQL e Docker. Estudante de Engenharia de Software na UniCEUB, Brasília.',
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
    backHome: '← Índice'
  },
  experience: [
    {
      role: 'Desenvolvedor Full Stack',
      org: 'MAY Derma · Contrato · Remoto',
      meta: 'Mai 2026 – Jul 2026',
      desc: 'Construí e customizei uma plataforma de e-commerce em WooCommerce e a integrei a sistemas externos de negócio. Trabalhei com WordPress, C#/.NET, PostgreSQL, Docker, Nginx e Linux em produção.',
      stack: 'WordPress · C#/.NET · PostgreSQL · Docker · Nginx · Linux'
    },
    {
      role: 'Desenvolvedor Back-end',
      org: 'Agiliza Doutor · Contrato · Remoto',
      meta: 'Ago 2025 – Fev 2026',
      desc: 'Desenvolvimento back-end em uma plataforma para os setores médico e jurídico, trabalhando em sprints Scrum. Construí o scraper judicial que depois evoluiu para o CourtIQ e implementei a maior parte dos endpoints da API da plataforma — cada um entregue como fatia vertical completa: modelagem de dados, migrações, models e DTOs, camada de repositório, controller, endpoint e documentação.',
      stack: 'Python · APIs REST · PostgreSQL · Processamento assíncrono · Scrum'
    }
  ],
  focus: [
    { group: 'Linguagens', items: 'Python · C# / .NET · TypeScript · SQL' },
    { group: 'Backend', items: 'FastAPI · APIs REST · Workers assíncronos · Webhooks · Idempotência' },
    { group: 'Dados', items: 'PostgreSQL · Payload CMS · Modelagem de dados · Normalização de dados' },
    { group: 'Infraestrutura', items: 'Docker · Linux · Nginx · CI/CD · Git' },
    { group: 'Frontend', items: 'React · Next.js · Tailwind CSS' }
  ],
  education: {
    degree: 'Bacharelado em Engenharia de Software',
    meta: 'UniCEUB — Centro Universitário de Brasília · Fev 2026 – Dez 2029'
  },
  certsList: [
    { name: 'Oracle Cloud Infrastructure 2026 Architect Associate', year: '2026' },
    { name: 'AWS Certified Cloud Practitioner', year: '2026' },
    { name: 'AWS Certified AI Practitioner', year: '2026' }
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
            v: 'Construí e customizei uma plataforma WooCommerce e a integrei a sistemas externos de negócio. WordPress, C#/.NET, PostgreSQL, Docker, Nginx e Linux em produção.'
          },
          {
            k: 'Desenvolvedor Back-end',
            meta: 'Agiliza Doutor · Ago 2025 – Fev 2026',
            v: 'Desenvolvimento back-end em plataforma para os setores médico e jurídico, em sprints Scrum. Construí o scraper judicial que evoluiu para o CourtIQ e implementei a maior parte dos endpoints da API como fatias verticais completas.'
          }
        ]
      },
      {
        label: 'Projetos',
        rows: [
          {
            k: 'CourtIQ',
            meta: 'Projeto pessoal · não implantado',
            v: 'SaaS de monitoramento judicial. Arquitetura de adaptadores normalizando 19 integrações judiciais em um modelo de domínio. Python, FastAPI, PostgreSQL, Redis, Playwright, Docker.'
          },
          {
            k: 'Avivando',
            meta: 'Jun – Set 2026 · em produção',
            v: 'Plataforma de gestão de membros atendendo mais de 500 usuários, construída ao lado de um engenheiro sênior. Duas aplicações integradas sobre Payload CMS: site público e core operacional, com controle de acesso por papéis. React, TypeScript, Payload CMS, PostgreSQL, Node.js.'
          },
          {
            k: 'MAY Derma',
            meta: 'Mai – Jul 2026 · contrato',
            v: 'Plataforma WooCommerce integrada a sistemas externos de negócio via webhooks e workers assíncronos idempotentes.'
          }
        ]
      },
      {
        label: 'Formação',
        rows: [
          {
            k: 'Bacharelado em Engenharia de Software',
            meta: 'UniCEUB · Fev 2026 – Dez 2029',
            v: 'Centro Universitário de Brasília.'
          }
        ]
      },
      {
        label: 'Certificações',
        rows: [
          { k: 'Oracle Cloud Infrastructure 2026 Architect Associate', meta: '2026', v: '' },
          { k: 'AWS Certified Cloud Practitioner', meta: '2026', v: '' },
          { k: 'AWS Certified AI Practitioner', meta: '2026', v: '' }
        ]
      },
      {
        label: 'Técnico',
        rows: [
          {
            k: 'Linguagens e backend',
            meta: '',
            v: 'Python, C#/.NET, TypeScript, SQL. FastAPI, APIs REST, workers assíncronos, webhooks, idempotência.'
          },
          {
            k: 'Dados e infraestrutura',
            meta: '',
            v: 'PostgreSQL, Payload CMS, Docker, Linux, Nginx, CI/CD, Git.'
          }
        ]
      }
    ]
  }
};
