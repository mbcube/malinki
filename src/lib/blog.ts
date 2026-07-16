import { parseISO, isValid, parse, format } from "date-fns";
import { fr, enCA } from "date-fns/locale";

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
  lang: "fr" | "en"
): string | null {
  const date = parsePublishedAt(value);
  if (!date) return null;
  return lang === "fr"
    ? format(date, "d MMMM yyyy", { locale: fr })
    : format(date, "MMMM d, yyyy", { locale: enCA });
}
