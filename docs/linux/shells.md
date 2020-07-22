---
id: shells
title: Shells
---

## bash
- `<Ctrl-r>` - reverse-i-search.
- `set -o vi` - enable vi mode in Bash.

- Bash Scripting Tip:
```
➜  ~ var="apple orange"
➜  ~ echo $var
apple orange

➜  ~ echo $var | awk '{print $1}'
apple
➜  ~ time ( echo $var | awk '{print $1}')
apple
( echo $var | awk '{print $1}'; )  0.01s user 0.00s system 107% cpu 0.008 total

➜  ~ echo $var | awk '{print $2}'
orange
➜  ~ time ( echo $var | awk '{print $2}')
orange
( echo $var | awk '{print $2}'; )  0.00s user 0.01s system 107% cpu 0.008 total
```

awk takes ~0.008 seconds whereas these builtin alternatices take only ~0.002 seconds

```
➜  ~ echo "${var%% *}"
apple
➜  ~ time ( echo "${var%% *}" )
apple
( echo "${var%% *}"; )  0.00s user 0.00s system 71% cpu 0.002 total

➜  ~ echo "${var##* }"
orange
➜  ~ time ( echo "${var##* }" )
orange
( echo "${var##* }"; )  0.00s user 0.00s system 72% cpu 0.002 total
```

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
