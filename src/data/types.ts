export type Lang = 'en' | 'pt';

export interface SiteContent {
  nav: { work: string; resume: string };
  hero: {
    eyebrow: string;
    headline: string;
    sub: string;
    ctaWork: string;
    ctaResume: string;
  };
  labels: {
    selectedWork: string;
    experience: string;
    technicalFocus: string;
    certifications: string;
    contact: string;
    readCase: string;
    viewSource: string;
    education: string;
    certs: string;
    location: string;
    backHome: string;
  };
  experience: {
    role: string;
    org: string;
    meta: string;
    desc: string;
    stack: string;
  }[];
  focus: { group: string; items: string }[];
  education: { degree: string; meta: string };
  certsList: { name: string; year: string }[];
  contact: { headline: string; body: string; location: string };
  notFound: {
    title: string;
    body: string;
    links: { label: string; path: string }[];
  };
  resume: {
    title: string;
    lede: string;
    download: string;
    cvFile: string;
    blocks: {
      label: string;
      rows: { k: string; meta: string; v: string }[];
    }[];
  };
}
