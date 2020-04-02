---
id: shells
title: Shells
---

## bash
- `<Ctrl-r>` - reverse-i-search.
- `set -o vi` - enable vi mode in Bash.

## zsh
- `bindkey -v` - vi mode in zsh shell.
- `bindkey '^R' history-incremental-search-backward`- backward Reverse Search in zsh.

## fish
- On Ubuntu, I had problems with `ripgrep` completions while installing `fish`.
  Fixed it by doing:

    ```
    apt -o Dpkg::Options::="--force-overwrite" -f upgrade
    ```

    ```
    dpkg-divert --add --divert  /usr/share/fish/completions/rg.fish.0 --rename --package ripgrep /usr/share/fish/completions/rg.fish
    dpkg-divert --add --divert  /usr/share/fish/completions/bat.fish.0 --rename --package bat /usr/share/fish/completions/bat.fish
    ```

    More info: https://github.com/fish-shell/fish-shell/issues/5822
