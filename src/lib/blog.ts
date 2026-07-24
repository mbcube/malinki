import { parseISO, isValid, parse, format } from "date-fns";
import { fr, enCA } from "date-fns/locale";

export interface BlogCategory {
  slug: string;
  fr: string;
  en: string;
}

/**
 * Parses a `publishedAt` value that may be an ISO date string (e.g. "2026-06-15")
 * or a French long-form date (e.g. "11 février 2026"). Returns `null` if the
 * value can't be parsed.
 */
export function parsePublishedAt(value?: string | null): Date | null {
  if (!value) return null;
  const trimmed = value.trim();

  const iso = parseISO(trimmed);
  if (isValid(iso)) return iso;

  const frenchLongForm = parse(trimmed, "d MMMM yyyy", new Date(), {
    locale: fr,
  });
  if (isValid(frenchLongForm)) return frenchLongForm;

  return null;
}

export function formatPublishedAt(
  value: string | undefined | null,
  lang: "fr" | "en",
): string | null {
  const date = parsePublishedAt(value);
  if (!date) return null;
  return lang === "fr"
    ? format(date, "d MMMM yyyy", { locale: fr })
    : format(date, "MMMM d, yyyy", { locale: enCA });
}

/** ISO-8601 date (YYYY-MM-DD) for schema.org / Open Graph article dates. */
export function toIsoDate(value?: string | null): string | undefined {
  const date = parsePublishedAt(value);
  if (!date) return undefined;
  return format(date, "yyyy-MM-dd");
}

/**
 * Looks up the translated label for a category slug. Returns `null` if the
 * slug doesn't match any known category (e.g. the post has no category yet).
 */
export function getCategoryLabel(
  categories: BlogCategory[],
  slug: string | undefined | null,
  lang: "fr" | "en",
): string | null {
  if (!slug) return null;
  const category = categories.find((c) => c.slug === slug);
  if (!category) return null;
  return lang === "fr" ? category.fr : category.en;
}

/** Treat CMS placeholder `"null"` as missing. */
export function getBlogAuthor(author?: string | null): string | undefined {
  if (!author) return undefined;
  const trimmed = author.trim();
  if (!trimmed || trimmed.toLowerCase() === "null") return undefined;
  return trimmed;
}

/**
 * Absolute cover URL for OG / JSON-LD. Returns `undefined` when missing so
 * callers can fall back to the site logo.
 */
export function resolveCoverImageUrl(
  coverImage: string | undefined | null,
  siteUrl = "https://malinki.ca",
): string | undefined {
  if (!coverImage?.trim()) return undefined;
  const src = coverImage.trim();
  if (/^https?:\/\//i.test(src)) return src;
  const base = siteUrl.replace(/\/$/, "");
  return `${base}${src.startsWith("/") ? src : `/${src}`}`;
}
