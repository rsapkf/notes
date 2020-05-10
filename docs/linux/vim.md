---
id: vim
title: Vim / Neovim
---

## Enable _Italics_ in Vim

- add `highlight Comment cterm=italic` to .vimrc (**after the colorscheme declaration**).

- If using [nanotech/jellybeans.vim](https://github.com/nanotech/jellybeans.vim) colorscheme, make sure to add `let g:jellybeans_use_term_italics = 1` too.

## Buffers

- `:ls` - see a list of current buffers.
- `:e ../file.txt` - open ../file.txt.
- `:b file` - switch between all open files.
- `:b#` - open last visited file.

## Tabs (I use tmux, not needed anymore)

- `:tabs` - list all tabs including their displayed windows.
- `:tabm 0` - move current tab to first.
- `:tabm` - move current tab to last.
- `:tabn` - go to next tab.
- `:tabp` - go to previous tab.
- `:tabfirst` - go to first tab.
- `:tablast` - go to last tab.

In Normal mode:

- `gt` - go to next tab.
- `gT` - go to previous tab.
- `{i}gt` - go to tab in position `i`.

## Miscellaneous

- `:set wrap` / `:set nowrap`
- Default `leader` is `\` (I map to it to `<space>` / `,`)
- `<CR>` (aka carriage/cartridge return) means`Enter`/`Return`.
- Alternative to `<ESC>`: `<C-[>` (I map `<ESC>` to `jj` / `jk`)
- `:smile`
