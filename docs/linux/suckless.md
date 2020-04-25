---
id: suckless
title: Suckless
---

## Patching suckless tools
- For tarballs
  `patch -p1 < path/to/patch.diff`

- For git repos
  `git apply path/to/patch.diff`

## sent
- Make sure to install [`farbfeld`](https://tools.suckless.org/farbfeld/) to
  have images show up on slides.

## dmenu
- Had problems with dmenu-4.9 tarball installation. Seems to be related to [this commit](https://git.suckless.org/dmenu/commit/db6093f6ec1bb884f7540f2512935b5254750b30.html). Run the latest git to fix this.
