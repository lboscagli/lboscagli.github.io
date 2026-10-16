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

- **Publications:** edit `src/data/publications.bib`. Replace the sample entries
  with your own BibTeX entries. Useful fields include `author`, `title`, `year`,
  `journal` or `booktitle`, `volume`, `number`, `pages`, `doi`, and `url`.
  Remove all sample entries when you are ready; the Publications section and
  navigation link will be hidden if there are no entries.
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

The site displays the title, authors, venue, year, volume/issue/pages, and a
clickable DOI or URL when supplied. Entries are sorted with the newest year
first.

## 3. Preview and verify locally

Start the development server:

```sh
npm run dev
```

Open the local URL printed by Astro, usually `http://localhost:4321`. Check the
Publications navigation link and section, verify the citation text and links,
and check any other sections you changed. Stop the server with `Ctrl+C`.

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

Stage the intended files, then review the staged diff:

```sh
git add src/data src/config.ts src/components src/pages package.json package-lock.json README.md RUNBOOK.md
git diff --cached
```

Adjust the `git add` paths if you changed different files. Once the staged
diff contains only the changes you intend to publish, commit them:

```sh
git commit -m "Update portfolio content"
```

## 5. Publish to GitHub Pages

Push the commit to `master`:

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
