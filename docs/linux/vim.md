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

## Command Mode

- `!pwd` - run `pwd` terminal command from vim.
- `:read date` - insert the output of `date` command in current line.
  - `:30read date` - insert the output of `date` command in line 30.
  - `:$read date` - insert the output of `date` command in the last line.
- `:10,15s/old/new/g` - substitute all occurences of `old` with `new` from line 10 to 15.
- `:.,.+5s/old/new/g` - substitute all occurences of `old` with `new` from the current line to the next 5 lines.
- `:g/import/d` - delete all lines including the word `import`.
- `:g!/import/d` - delete all lines not including the word `import`.

## Working with splits

- `:split` / `:sp` - horizontal split.
  - `:10sp` - 10 lines high horizontal split.
  - `<ctrl> w _` - maximize a horizontal split.
  - `<ctrl> w =` - equalize splits.
  - `:resize +5` / `:res +5` - increase a split height by 5 lines.
- `:vsplit` / `:vs` - vertical split.
  - `<ctrl> w |` - maximize a vertical split.
  - `<ctrl> w =` - equalize splits.
  - `:vertical resize +5` / `:vert res +5` - increase a split height by 5 lines.
- `<ctrl> w c` - close a split.
- `<ctrl> w R` - swap splits.

## Miscellaneous

- `:set wrap` / `:set nowrap`
- Default `leader` is `\` (I map to it to `<space>` / `,`)
- `<CR>` (aka carriage/cartridge return) means `Enter`/`Return`.
- Alternative to `<ESC>`: `<C-[>` (I map `<ESC>` to `jj` / `jk`)
- `:smile`
