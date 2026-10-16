# Site maintenance runbook

This runbook explains how to update this portfolio, preview the changes, commit
them to Git, and publish them to GitHub Pages.

## 1. Get the repository ready

If you have not cloned the site yet:

```sh
git clone https://github.com/lboscagli/lboscagli.github.io.git
cd lboscagli.github.io
npm ci
```

If you already have a local copy, open a terminal in the repository and update
the deployment branch before editing:

```sh
git switch master
git pull origin master
```

Check `git status` before starting. Keep any existing local changes you want;
do not overwrite or discard changes you have not reviewed.

## 2. Make your changes

- **Dissemination:** edit the matching BibTeX file:
  - `src/data/publications_journal.bib` for journal publications
  - `src/data/publications_conference.bib` for conference publications
  - `src/data/invited_speaker.bib` for invited talks and seminars
  Useful fields include `author`, `title`, `year`, `journal` or `booktitle`,
  `volume`, `number`, `pages`, `doi`, and `url`. Records are grouped by their
  file, so add each entry to the appropriate file. The Dissemination section
  and its navigation link are hidden if all three files have no entries.
- **Outreach:** edit the two example activities in the `outreach` array in
  `src/config.ts`:
  - The `article` activity has an image and newspaper link. Set `link` to the
    newspaper article URL; both the image and the article link will then open
    the newspaper page. Update `title`, `description`, `linkText`, and
    `imageAlt`.
  - The `event` activity displays a date, text, and image. Update its `date`,
    `title`, `description`, and `imageAlt`.
  Upload your image files into `public/images/`, then set each activity's
  `image` to its site path, such as `/images/newspaper-article.jpg`. The sample
  placeholder images can be replaced by uploading your own files and changing
  these paths.
- **Profile, projects, experience, and education:** edit `src/config.ts`.
- **Layout and appearance:** edit the relevant component in `src/components/`
  or the global stylesheet at `src/styles/global.css`.

Keep each BibTeX record complete and correctly delimited with braces and commas.
For example:

```bibtex
@article{yourCitationKey,
  author  = {Surname, Given and Coauthor, Other},
  title   = {Your Publication Title},
  journal = {Journal Name},
  year    = {2026},
  volume  = {1},
  pages   = {1--10},
  doi     = {10.1234/example}
}
```

The Dissemination section displays the title, authors, venue, year,
volume/issue/pages, and a clickable DOI or URL when supplied. Entries in each
group are sorted with the newest year first.

## 3. Preview and verify locally

Start the development server:

```sh
npm run dev
```

Open the local URL printed by Astro, usually `http://localhost:4321`. Check the
Dissemination navigation link and its journal, conference, and invited-speaking
groups, verify the citation text and links, and check the Outreach section and
any other sections you changed. Stop the server with `Ctrl+C`.

Run the production build before committing:

```sh
npm run build
```

The generated site is written to `dist/`. Fix any build errors before
continuing.

## 4. Review and commit

Review exactly what will be committed:

```sh
git status
git diff
```

For the current Dissemination and Outreach update, stage the related files
(including removed placeholder files), then review the staged diff:

```sh
git add -A -- README.md RUNBOOK.md src/components/Header.astro src/components/Publications.astro src/components/Dissemination.astro src/components/Outreach.astro src/data/publications.bib src/data/publications.ts src/data/dissemination.ts src/data/invited_speaker.bib src/data/publications_conference.bib src/data/publications_journal.bib src/pages/index.astro
git diff --cached
```

Only continue if `git diff --cached` shows the changes you intend to publish.
If you changed different files, adjust the paths in `git add` accordingly.
Commit the changes:

```sh
git commit -m "Add dissemination and outreach sections"
```

## 5. Publish to GitHub Pages

Push the commit to `master`. This push starts the GitHub Pages deployment:

```sh
git push origin master
```

The workflow in `.github/workflows/deploy.yml` runs automatically when a commit
is pushed to `master`. It installs dependencies, runs `npm run build`, and
deploys the generated `dist/` site to GitHub Pages. You can also start it
manually from the repository's **Actions** tab using **Run workflow**.

To follow deployment:

1. Open the repository on GitHub and select **Actions**.
2. Open the latest **Deploy Astro site to GitHub Pages** run.
3. Wait for both the build and deploy jobs to complete successfully.
4. Visit [https://lboscagli.github.io/](https://lboscagli.github.io/) and
   refresh the page to check the published changes.

If the workflow fails, open the failed job and read its logs. Correct the
reported build or deployment issue, run `npm run build` locally again, then
commit and push the fix. GitHub Pages deployment also needs to be configured to
use **GitHub Actions** as its build and deployment source in the repository's
**Settings → Pages**.
