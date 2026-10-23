import type { SiteContent } from './types';
import {
  ARPEON_REPO_URL,
  AVIVANDO_URL,
  OCI_ARCHITECT_BADGE_URL,
  ORACLE_AI_DATABASE_BADGE_URL,
  VISIO_DIVINA_REPO_URL
} from './constants';

export const en: SiteContent = {
  nav: { work: 'Work', resume: 'Résumé' },
  hero: {
    eyebrow: 'Brasília, Brazil — open to remote',
    headline: 'Software Engineering Student & Backend Developer',
    sub: 'I build backend systems and data pipelines with C#/.NET, Python, Java and PostgreSQL, and maintain an open-source desktop application in Java and Angular. Software Engineering student at UniCEUB, Brasília.',
    ctaWork: 'View selected work →',
    ctaResume: 'Read the résumé'
  },
  labels: {
    selectedWork: 'Selected work',
    experience: 'Experience',
    technicalFocus: 'Technical focus',
    certifications: 'Certifications & education',
    contact: 'Contact',
    readCase: 'Read case →',
    viewSource: 'View source →',
    education: 'Education',
    certs: 'Certifications',
    location: 'Location',
    backHome: '← Index',
    verify: 'Verify →',
    community: 'Community',
    nextCase: 'Next case',
    downloadCv: 'CV (PDF)'
  },
  experience: [
    {
      role: 'Full Stack Developer',
      org: 'MAY Derma · Contract · Remote',
      meta: 'May 2026 – Jul 2026',
      desc: "Set up the company's WordPress/WooCommerce store and built an affiliate and prescriber system around it in C#/.NET — referral links, coupons, commissions and partner dashboards. Integrated payment, shipping and marketing over webhooks and kept production running on Docker, Nginx, PostgreSQL and Linux.",
      stack: 'C#/.NET · WordPress · WooCommerce · PostgreSQL · Docker · Nginx · Linux'
    },
    {
      role: 'Back-end Developer',
      org: 'Agiliza Doutor · Contract · Remote',
      meta: 'Aug 2025 – Feb 2026',
      desc: 'Back-end development on a platform serving the medical and legal sectors, working in Scrum sprints. I built the judicial scraper that later evolved into CourtIQ, modeled a 32-table relational database and implemented 149 REST endpoints — each delivered as a full vertical slice: data modeling, migrations, models and DTOs, repository layer, controller, endpoint and documentation.',
      stack: 'Python · REST APIs · PostgreSQL · Async processing · Scrum'
    }
  ],
  focus: [
    { group: 'Languages', items: 'Python · C# / .NET · Java · TypeScript · SQL' },
    { group: 'Backend', items: 'FastAPI · ASP.NET Core · REST APIs · Async workers · Webhooks · Idempotency' },
    { group: 'Data', items: 'PostgreSQL · Redis · Payload CMS · Data modeling · Data normalization' },
    { group: 'Infrastructure', items: 'Docker · Linux · Nginx · GitHub Actions · Azure DevOps · Git' },
    { group: 'Frontend', items: 'Angular · React · Next.js · Tailwind CSS' }
  ],
  education: {
    degree: "Bachelor's in Software Engineering",
    meta: 'UniCEUB — Centro Universitário de Brasília · Feb 2026 – Dec 2029'
  },
  certsList: [
    {
      name: 'Oracle Cloud Infrastructure Certified Architect Associate',
      issuer: 'Oracle',
      code: '1Z0-1072-26',
      year: '2026',
      href: OCI_ARCHITECT_BADGE_URL
    },
    {
      name: 'Oracle AI Database Certified Foundations Associate',
      issuer: 'Oracle',
      year: '2026',
      href: ORACLE_AI_DATABASE_BADGE_URL
    },
    { name: 'AWS Certified AI Practitioner', issuer: 'Amazon Web Services', code: 'AIF-C01', year: '2026' },
    { name: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services', code: 'CLF-C02', year: '2026' }
  ],
  community: [{ name: 'AWS Builder Center — Campus Builder Student Leader, Brazil', meta: '2026 – present' }],
  contact: {
    headline: 'Open to internships and backend engineering roles.',
    body: 'The fastest way to reach me is email. Code is on GitHub; the résumé is one page and downloadable as PDF.',
    location: 'Brasília, DF, Brazil · Open to remote'
  },
  notFound: {
    title: 'This page does not exist.',
    body: 'The address is wrong or the page was moved. Everything on the site is reachable from these three places.',
    links: [
      { label: 'Index', path: '/' },
      { label: 'Selected work', path: '/#selected-work' },
      { label: 'Résumé', path: '/resume' }
    ]
  },
  resume: {
    title: 'Résumé',
    lede: 'Condensed version. The full document is available as a PDF.',
    download: 'Download PDF ↓',
    cvFile: '/Carlos-Alberto-Oliveira-Jr-CV-EN.pdf',
    blocks: [
      {
        label: 'Experience',
        rows: [
          {
            k: 'Full Stack Developer',
            meta: 'MAY Derma · May – Jul 2026',
            v: 'Built an affiliate and prescriber system in C#/.NET — referral links, coupons, commissions and dashboards — and the WordPress/WooCommerce store, which has taken 259 paid orders from 224 customers. Integrated payment, shipping and marketing over webhooks; ran production on Docker, Nginx and PostgreSQL.'
          },
          {
            k: 'Back-end Developer',
            meta: 'Agiliza Doutor · Aug 2025 – Feb 2026',
            v: 'Implemented 149 REST endpoints and a 32-table data model with migrations for a platform serving the legal and medical sectors, in Scrum sprints. Built the Python scraping pipeline for court updates that later evolved into CourtIQ.'
          }
        ]
      },
      {
        label: 'Projects',
        rows: [
          {
            k: 'CourtIQ',
            meta: 'Personal project · not deployed',
            v: 'Judicial data API normalizing 19 court integrations (PJe and e-SAJ) into one domain model, with queues, retries with exponential backoff and 634 automated tests. Python, FastAPI, PostgreSQL, Redis, Playwright, Docker.'
          },
          {
            k: 'ARPEON',
            meta: '2026 – present · open source',
            v: 'Local-first desktop score editor with MIDI playback, a YIN tuner, performance reports and PDF/image recognition. 11 Java modules behind an Angular interface, 242 JUnit and 184 Vitest tests, CI on Windows, Linux and macOS. Java, Angular, TypeScript, Gradle.',
            link: { label: 'Source →', href: ARPEON_REPO_URL }
          },
          {
            k: 'Avivando',
            meta: 'Jun – Sep 2026 · in production',
            v: 'Member management platform serving over 500 users, built alongside a senior engineer. Two integrated applications on Payload CMS: public site and operational core, with role-based access control. React, TypeScript, Payload CMS, PostgreSQL, Node.js.',
            link: { label: 'Live site →', href: AVIVANDO_URL }
          },
          {
            k: 'Visio Divina',
            meta: 'Jun 2026 · UniCEUB extension project',
            v: 'Team web application that turns sermon scripts into editable slide decks with an LLM (Llama 3.3 70B), validating the output against Zod schemas with a repair prompt and a fallback. PostgreSQL on Supabase with Row Level Security; export to PPTX, PDF and PNG. TypeScript, React.',
            link: { label: 'Source →', href: VISIO_DIVINA_REPO_URL }
          }
        ]
      },
      {
        label: 'Education',
        rows: [
          {
            k: "Bachelor's in Software Engineering",
            meta: 'UniCEUB · Feb 2026 – Dec 2029 (expected)',
            v: 'Centro Universitário de Brasília. Currently in the second semester.'
          }
        ]
      },
      {
        label: 'Certifications',
        rows: [
          {
            k: 'Oracle Cloud Infrastructure Certified Architect Associate',
            meta: 'Oracle · 1Z0-1072-26 · 2026',
            v: '',
            link: { label: 'Verify →', href: OCI_ARCHITECT_BADGE_URL }
          },
          {
            k: 'Oracle AI Database Certified Foundations Associate',
            meta: 'Oracle · 2026',
            v: '',
            link: { label: 'Verify →', href: ORACLE_AI_DATABASE_BADGE_URL }
          },
          { k: 'AWS Certified AI Practitioner', meta: 'AWS · AIF-C01 · 2026', v: '' },
          { k: 'AWS Certified Cloud Practitioner', meta: 'AWS · CLF-C02 · 2026', v: '' }
        ]
      },
      {
        label: 'Community',
        rows: [
          {
            k: 'AWS Builder Center',
            meta: '2026 – present',
            v: 'Campus Builder Student Leader, Brazil.'
          }
        ]
      },
      {
        label: 'Technical',
        rows: [
          {
            k: 'Languages & frameworks',
            meta: '',
            v: 'C#, Python, Java, TypeScript, JavaScript and SQL. .NET (ASP.NET Core), FastAPI, Angular and React.'
          },
          {
            k: 'Back-end & data',
            meta: '',
            v: 'REST APIs, webhooks, queues and async workers, idempotency. PostgreSQL, Redis, data modeling and migrations.'
          },
          {
            k: 'Tools',
            meta: '',
            v: 'Docker, Linux, Nginx, Git, GitHub Actions and Azure DevOps.'
          }
        ]
      },
      {
        label: 'Languages',
        rows: [
          { k: 'Portuguese', meta: 'Native', v: '' },
          { k: 'English', meta: 'Intermediate', v: 'Professional reading and writing.' }
        ]
      }
    ]
  }
};
