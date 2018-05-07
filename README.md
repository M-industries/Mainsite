# Mainsite

Pages are in the `pages` directory and have the following configuration options:

```yaml
layout: page             # page for pages, home for home, default for e.g. 404
title: About             # the H1
category: sub            # main for the left menu, sub right
                         # leave out the category to create an unliste page
permalink: /about/       # url for the page

anchors:                 # for in-page navigation
  - label: M-industries
    name: info
  - label: Alan
    name: alan
  - label: Learn it
    name: learn
```

Tip: duplicate an existing page to use as a template.

The homepage is special, all its contents are in the template.

## Markdown

Markdown is converted using [kramdown](https://kramdown.gettalong.org/),
which has a [quick reference guide](https://kramdown.gettalong.org/quickref.html).

## Jekyll

The site is built using [Jekyll](https://jekyllrb.com/docs/home/),
for which there are guides and docs aplenty.

All commits to the `gh-pages` branch result in an update of the public website.
