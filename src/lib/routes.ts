import type { Lang } from '../data/types';
import { SITE_URL } from '../data/constants';

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

// The host serves every page as a directory, so canonical URLs carry the trailing slash.
export function absoluteUrl(path: string): string {
  const withSlash = path.endsWith('/') ? path : `${path}/`;
  return new URL(withSlash, SITE_URL).href;
}
