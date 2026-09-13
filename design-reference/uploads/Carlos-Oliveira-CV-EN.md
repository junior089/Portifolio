# CARLOS ALBERTO SOARES DE OLIVEIRA JÚNIOR
**Software Engineering Student & Backend Developer**

Brasília, Brazil · +55 61 99244-5034 · carlosalbertoliveirajr07@gmail.com
[LinkedIn](https://www.linkedin.com/in/carlos-alberto-soares-de-oliveira-júnior) · [GitHub](https://github.com/junior089) · [Portfolio](https://carlosjr.engineer)

---

## SUMMARY

Software Engineering undergraduate and backend developer with contract experience building production systems for e-commerce, legal technology, and the medical sector. Focused on backend services, data pipelines and integrations with C#/.NET, Python, PostgreSQL, Docker and Linux. Built a judicial data platform with 19 court integrations normalized behind a single API, and a member management platform running in production for over 500 users.

---

## EXPERIENCE

### Contract Full-Stack Developer · MAY Derma
**May 2026 – Jul 2026 · Remote · Brasília, Brazil**

- Built and customized a responsive WordPress/WooCommerce e-commerce platform covering product catalogs, variants, bundles, promotions and checkout flows.
- Developed a C#/.NET platform for affiliates, prescribers and creators with referral links, coupons, sales attribution, commissions, dashboards and reporting.
- Integrated payment, logistics and ERP APIs over webhooks and async workers, using idempotency to survive retries and duplicate deliveries.
- Deployed and maintained production infrastructure with Docker, Nginx, PostgreSQL and Linux VPS.

### Contract Back-End Developer · Agiliza Doutor
**Aug 2025 – Feb 2026 · Remote · Brasília, Brazil**

- Back-end development on a platform serving the legal and medical sectors, working in Scrum sprints.
- Designed and implemented a Python web-scraping pipeline to monitor case updates across major Brazilian court portals, supplementing delayed or incomplete unified API data.
- Implemented most of the platform's REST API endpoints, each delivered as a full vertical slice: data modeling, migrations, models and DTOs, repository layer, controller, endpoint and documentation.
- Automated collection, normalization and persistence of heterogeneous legal data; contributed to business rules, maintenance and reliability improvements.

---

## PROJECTS

### CourtIQ — Judicial Data Platform · Personal project
**Python · FastAPI · PostgreSQL · Redis · Playwright · Docker**

- Designed and built a SaaS platform for monitoring Brazilian judicial proceedings, normalizing **19 court integrations** (PJe and e-SAJ families) into a single domain model through a registered adapter layer.
- Implemented an async pipeline with a queue in front of the workers, isolating the API from unreliable upstreams; webhook delivery is at-least-once with retry history and documented deduplication keys.
- Built multi-tenant organizations, API keys, SDKs and billing into the data model from the first migration.
- **634 tests passing** in consolidated validation — 504 for the API at 66.42% line coverage, 41 for the scraper at 73.45%, 89 for the frontend. Adapters tested against saved page fixtures.
- Not deployed; designed, built and validated in a controlled environment. Source partially public.

### Avivando — Member Management Platform
**Jun 2026 – Sep 2026 · React · TypeScript · Supabase · PostgreSQL · Row Level Security · Edge Functions**

- Built alongside a senior engineer who focused on the core. **In production, serving over 500 users.**
- Two integrated applications — a public site and an operational core covering member records, forms, check-in, announcements, activities and role-based access.
- Authorization enforced in PostgreSQL Row Level Security rather than in application code.
- 24 collection modules, 14 migrations, 14 API/BFF routes; CI running lint, types, tests and build against an isolated PostgreSQL instance.

### Auren Presenter · Independent project, in development
**Rust · Svelte · REST**

- Architecting a cross-platform, offline-first live presentation system that isolates display, stage, media, NDI and automation outputs from internet and operator-interface failures.

---

## EDUCATION

**B.Sc. in Software Engineering** · Centro Universitário de Brasília (UniCEUB)
Feb 2026 – Dec 2029 (expected) · Brasília, Brazil

---

## TECHNICAL SKILLS

**Languages:** C#, Python, TypeScript, JavaScript, SQL
**Backend & Data:** .NET, ASP.NET Core, FastAPI, REST APIs, web scraping, async workers, webhooks, idempotency, PostgreSQL, Supabase, Row Level Security
**Infrastructure:** Docker, Linux, Nginx, CI/CD, Git
**Frontend:** React, Next.js, Tailwind CSS
**Practices:** Scrum, requirements analysis, automated testing, software architecture fundamentals

---

## CERTIFICATIONS, COMMUNITY & LANGUAGES

**Certifications:** Oracle Cloud Infrastructure 2026 Certified Architect Associate · AWS Certified AI Practitioner (AIF-C01) · AWS Certified Cloud Practitioner (CLF-C02)
**Community:** AWS Builder Center — Campus Builder Student Leader, Brazil, 2026–present
**Languages:** Portuguese (native) · English (intermediate — professional reading and writing)
