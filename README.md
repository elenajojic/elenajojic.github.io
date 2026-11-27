# Elena Jojic · Portfolio

Plain HTML, CSS and JS. No build step, no framework, hosted free on GitHub Pages.

## Editing
All the text lives in **`content.js`**:
1. Open `content.js` on github.com and click the pencil icon.
2. Change the text inside the "quotes".
3. Click **Commit changes**. The site updates in about a minute.

To add a project, job or course, copy an existing `{ ... }` block, paste it below, and edit it. Keep the commas between blocks.

To swap your photo, upload a new `assets/elena.png` with the background removed.

## To finish
1. **Photo:** add a cutout of yourself (background removed, PNG) at `assets/elena.png`. The site turns it into the grey halftone automatically.
2. **Resume:** add your PDF at `assets/Elena_Jojic_Resume.pdf`, then set `resumePdf` in `content.js`.
3. **LinkedIn:** paste your URL into `linkedin` in `content.js`.
4. **Hobby photos (optional):** add images to `assets/` and set `img` on any hobby.

## Going live (free)
1. Rename this repo to `elenajojic.github.io` (Settings → General → Repository name).
2. Settings → Pages: Source = *Deploy from a branch*, Branch = `main`, folder `/ (root)`.
3. In a minute or two the site is live at **https://elenajojic.github.io**.

### Custom domain later (optional)
Add a file named `CNAME` containing just the domain (for example `elenajojic.me`), then at the registrar add:
- `A  @` records: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- `CNAME  www  elenajojic.github.io`

Then tick **Enforce HTTPS** under Settings → Pages.

## Extras
- Press **S** (or the Spec view button) for blueprint mode with measurements.
- ← → keys flip through project folders.
- Fonts are self-hosted in `assets/fonts`. The name uses Feeling Passionate by Din Studio (personal use license); the rest are open source.
