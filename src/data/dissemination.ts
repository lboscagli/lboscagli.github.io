import { Cite, type CSL } from "@citation-js/core";
import "@citation-js/plugin-bibtex";
import conferenceBibliography from "./publications_conference.bib?raw";
import journalBibliography from "./publications_journal.bib?raw";
import invitedSpeakingBibliography from "./invited_speaker.bib?raw";

function parseEntries(bibliography: string) {
  const activeEntries = bibliography
    .split(/\r?\n/)
    .filter((line) => !line.trimStart().startsWith("%"))
    .join("\n");

  return new Cite(activeEntries).data
    .map((entry: CSL) => {
      const doi = entry.DOI?.replace(/^https?:\/\/doi\.org\//i, "");
      const details = [
        entry.volume ? `Vol. ${entry.volume}` : undefined,
        entry.issue ? `No. ${entry.issue}` : undefined,
        entry.page ? `pp. ${entry.page}` : undefined,
      ]
        .filter((detail): detail is string => detail !== undefined)
        .join(", ");

      return {
        id: entry.id,
        title: entry.title ?? "Untitled entry",
        authors: (entry.author ?? []).map(
          (author) =>
            author.literal ??
            [author.given, author.family].filter(Boolean).join(" "),
        ),
        year: entry.issued?.["date-parts"]?.[0]?.[0]?.toString() ?? "",
        venue: entry["container-title"] ?? entry.publisher ?? "",
        details,
        link: doi ? `https://doi.org/${doi}` : entry.URL,
      };
    })
    .sort((first, second) => second.year.localeCompare(first.year));
}

export const disseminationGroups = [
  {
    title: "Journal publications",
    entries: parseEntries(journalBibliography),
  },
  {
    title: "Conference publications",
    entries: parseEntries(conferenceBibliography),
  },
  {
    title: "Invited speaking",
    entries: parseEntries(invitedSpeakingBibliography),
  },
];
