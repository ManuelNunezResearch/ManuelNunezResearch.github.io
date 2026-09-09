# Manuel Núñez academic website

Website:

https://manuelnunezresearch.github.io/

## Publications

Publications are stored in:

    _data/publications.yml

Valid types:

    journal
    conference
    chapter

Example:

    - type: 'journal'
      year: 2026
      title: 'Title of the paper'
      authors: 'A. Author, B. Author and M. Núñez'
      details: 'Journal Name, volume, pages, 2026.'
      pdf: '/papers/file.pdf'
      url: 'https://doi.org/...'

Link behaviour:

- only `url`: the title links to the external page
- only `pdf`: the title links to the local PDF
- `url` + `pdf`: the title links externally and a [PDF] link is also shown
- neither: the title is shown without a link

Local PDFs must be copied to:

    papers/

The BibTeX bibliography is:

    papers/publications.bib

Years are displayed automatically from newest to oldest.

---

## Conferences and committees

Conference information is stored in:

    _data/committees.yml

The `permanent` section contains permanent activities.

The `years` section contains events grouped by year.

Example:

    - year: 2027
      events:
        - name: "Conference name"
          role: "PC Member"
          url: "https://..."

The current Conferences page automatically displays only the current year.

Older years automatically appear on:

    /conferences/manuel-nunezs-involvement-in-previous-scientific-events/

Therefore, when a new year starts, no page has to be moved manually.

---

## Main page photographs

Photographs are stored in:

    assets/photos/

Their configuration is stored in:

    assets/photos/photos.json

To change the main photograph, edit:

    "main": {
      "file": "photo.jpg",
      "title": "Caption",
      "alt": ""
    }

To add a photograph to the historical gallery:

1. Copy the JPG file to `assets/photos/`.
2. Add an entry to the `gallery` array in `photos.json`.

Example:

    {
      "file": "new-photo.jpg",
      "orientation": "landscape",
      "caption": "June 2026"
    }

Valid orientations:

    portrait
    landscape

The JavaScript that renders the photographs is:

    assets/js/home-photos.js

---

## Site structure

Main page:

    index.html

Common Jekyll layout:

    _layouts/default.html

404 page:

    404.html

Favicon:

    favicon.svg

Navigation JavaScript:

    assets/js/navigation.js

Configuration:

    _config.yml

---

## Important

Do not recreate the old `/manolo/` directory.

Do not edit generated HTML to add publications or conference entries.
Use the corresponding YAML data files instead.

The Main page is intentionally static and does not use the Jekyll layout.