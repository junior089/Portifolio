import type { SiteContent } from './types';

export const en: SiteContent = {
  nav: { work: 'Work', resume: 'Résumé' },
  hero: {
    eyebrow: 'Brasília, Brazil — open to remote',
    headline: 'Software Engineering Student & Backend Developer',
    sub: 'I build backend systems and data pipelines with Python, C#/.NET, PostgreSQL and Docker. Software Engineering student at UniCEUB, Brasília.',
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
    backHome: '← Index'
  },
  experience: [
    {
      role: 'Full Stack Developer',
      org: 'MAY Derma · Contract · Remote',
      meta: 'May 2026 – Jul 2026',
      desc: "Built and customized a WooCommerce e-commerce platform and integrated it with external business systems. Worked with WordPress, C#/.NET, PostgreSQL, Docker, Nginx and Linux in production.",
      stack: 'WordPress · C#/.NET · PostgreSQL · Docker · Nginx · Linux'
    },
    {
      role: 'Back-end Developer',
      org: 'Agiliza Doutor · Contract · Remote',
      meta: 'Aug 2025 – Feb 2026',
      desc: "Back-end development on a platform serving the medical and legal sectors, working in Scrum sprints. I built the judicial scraper that later evolved into CourtIQ, and implemented most of the platform's API endpoints — each delivered as a full vertical slice: data modeling, migrations, models and DTOs, repository layer, controller, endpoint and documentation.",
      stack: 'Python · REST APIs · PostgreSQL · Async processing · Scrum'
    }
  ],
  focus: [
    { group: 'Languages', items: 'Python · C# / .NET · TypeScript · SQL' },
    { group: 'Backend', items: 'FastAPI · REST APIs · Async workers · Webhooks · Idempotency' },
    { group: 'Data', items: 'PostgreSQL · Payload CMS · Data modeling · Data normalization' },
    { group: 'Infrastructure', items: 'Docker · Linux · Nginx · CI/CD · Git' },
    { group: 'Frontend', items: 'React · Next.js · Tailwind CSS' }
  ],
  education: {
    degree: "Bachelor's in Software Engineering",
    meta: 'UniCEUB — Centro Universitário de Brasília · Feb 2026 – Dec 2029'
  },
  certsList: [
    { name: 'Oracle Cloud Infrastructure 2026 Architect Associate', year: '2026' },
    { name: 'AWS Certified Cloud Practitioner', year: '2026' },
    { name: 'AWS Certified AI Practitioner', year: '2026' }
  ],
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
            v: "Built and customized a WooCommerce platform and integrated it with external business systems. WordPress, C#/.NET, PostgreSQL, Docker, Nginx and Linux in production."
          },
          {
            k: 'Back-end Developer',
            meta: 'Agiliza Doutor · Aug 2025 – Feb 2026',
            v: "Back-end development on a platform serving the medical and legal sectors, in Scrum sprints. Built the judicial scraper that later evolved into CourtIQ and implemented most of the platform's API endpoints as full vertical slices."
          }
        ]
      },
      {
        label: 'Projects',
        rows: [
          {
            k: 'CourtIQ',
            meta: 'Personal project · not deployed',
            v: 'Judicial monitoring SaaS. Adapter-based architecture normalizing 19 court integrations into one domain model. Python, FastAPI, PostgreSQL, Redis, Playwright, Docker.'
          },
          {
            k: 'Avivando',
            meta: 'Jun – Sep 2026 · in production',
            v: 'Member management platform serving over 500 users, built alongside a senior engineer. Two integrated applications on Payload CMS: public site and operational core, with role-based access control. React, TypeScript, Payload CMS, PostgreSQL, Node.js.'
          },
          {
            k: 'MAY Derma',
            meta: 'May – Jul 2026 · contract',
            v: 'WooCommerce platform integrated with external business systems over webhooks and idempotent async workers.'
          }
        ]
      },
      {
        label: 'Education',
        rows: [
          {
            k: "Bachelor's in Software Engineering",
            meta: 'UniCEUB · Feb 2026 – Dec 2029',
            v: 'Centro Universitário de Brasília.'
          }
        ]
      },
      {
        label: 'Certifications',
        rows: [
          { k: 'Oracle Cloud Infrastructure 2026 Architect Associate', meta: '2026', v: '' },
          { k: 'AWS Certified Cloud Practitioner', meta: '2026', v: '' },
          { k: 'AWS Certified AI Practitioner', meta: '2026', v: '' }
        ]
      },
      {
        label: 'Technical',
        rows: [
          {
            k: 'Languages & backend',
            meta: '',
            v: 'Python, C#/.NET, TypeScript, SQL. FastAPI, REST APIs, async workers, webhooks, idempotency.'
          },
          {
            k: 'Data & infrastructure',
            meta: '',
            v: 'PostgreSQL, Payload CMS, Docker, Linux, Nginx, CI/CD, Git.'
          }
        ]
      }
    ]
  }
};
