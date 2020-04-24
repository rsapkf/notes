---
id: setting-up
title: Setting up a New Machine
---

## Some things I like to do when setting up a new Linux machine.

- Map `CAPSLOCK` to `CTRL` and vice versa.
  - On Debian, 
    - `vim /etc/default/keyboard`
    - Change the line that reads `XKBOPTIONS=""` to `XKBOPTIONS="ctrl:swapcaps"`
    - `$ sudo dpkg-reconfigure -phigh console-setup`

   - EmacsWiki Page: https://www.emacswiki.org/emacs/MovingTheCtrlKey
   - WikiWikiWeb: http://wiki.c2.com/?RemapCapsLock
 
- Pull up my [dotfiles](https://github.com/rsapkf/dotfiles/) and install necessary prgrams: (run the install script(@TODO))

    - Install Programming Environments:
      - Python (Latest)
      - Rust
      - Haskell
      - Java

    - Install Programs:
      - Text Editors:
        - `Vim/Neovim, Emacs(Orgmode, Evil), VSCode, Gedit, Sublime Text`
      
      - IDEs:
        - `Pycharm, IntellijIDEA, Android Stuio`

      - Web Browsers:
        - `Firefox Developer Edition, Brave, Chromium, qutebrowser, surf, w3m, lynx`

      - Terminal Emulators:
        `Alacritty, rxvt-unicode, st`

      - Window Managers:
        `i3, dwm, dwmstatus`
     
      - Misc:
        `sent, zsh, ranger, mutt, Irssi, dmenu, broot, nitrogen, fzf `

    - Install Fonts:
      - `Mononoki Nerd Font, Source Code Pro`

    - Install Themes
      - `vim-airline, powerline tmux`
      - Dracula on zsh, mutt, qutebrowser, i3, dmenu, rxvt-unicode(.Xresources), Alacritty, VSCode, Sublime Text, Emacs, Jetbrains IDEs, Firefox, Chromium, Neovim, Gedit

- Enable _Italics_ in Vim and tmux ([add terminfo](https://github.com/tmux/tmux/blob/2.1/FAQ#L355-L383) if needed).
- Configure [Mutt](https://github.com/muttmua/muttt) / [NeoMutt](https://github.com/neomutt/neomutt) (`vim ~/.mutt/muttrc` / `~/.neomutt/neomuttrc`)
- Enable 'Single Click to Open Files' in the default Graphical File Manager.

