import type { Lang } from '../data/types';

export function prefix(lang: Lang): string {
  return lang === 'pt' ? '/pt' : '';
}

export function homeHref(lang: Lang): string {
  return lang === 'pt' ? '/pt' : '/';
}

export function workAnchorHref(lang: Lang): string {
  return `${homeHref(lang)}#selected-work`;
}

export function resumeHref(lang: Lang): string {
  return `${prefix(lang)}/resume`;
}

export function caseHref(lang: Lang, slug: string): string {
  return `${prefix(lang)}/work/${slug}`;
}
