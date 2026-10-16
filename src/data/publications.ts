import { Cite } from "@citation-js/core";
import "@citation-js/plugin-bibtex";
import bibliography from "./publications.bib?raw";

export const publications = new Cite(bibliography).data
  .map((entry) => {
    const details = [
      entry.volume ? `Vol. ${entry.volume}` : undefined,
      entry.issue ? `No. ${entry.issue}` : undefined,
      entry.page ? `pp. ${entry.page}` : undefined,
    ]
      .filter((detail): detail is string => detail !== undefined)
      .join(", ");

    return {
      id: entry.id,
      title: entry.title ?? "Untitled publication",
      authors: (entry.author ?? []).map(
        (author) =>
          author.literal ??
          [author.given, author.family].filter(Boolean).join(" "),
      ),
      year: entry.issued?.["date-parts"]?.[0]?.[0]?.toString() ?? "",
      venue: entry["container-title"] ?? entry.publisher ?? "",
      details,
      link: entry.DOI ? `https://doi.org/${entry.DOI}` : entry.URL,
    };
  })
  .sort((first, second) => second.year.localeCompare(first.year));
