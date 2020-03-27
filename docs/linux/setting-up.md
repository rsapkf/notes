---
id: setting-up
title: Setting up a New Machine
---

## Some things I do when setting up a new Linux machine.

- Map `CAPSLOCK` to `CTRL` and vice versa.
  - On Debian, 
    - `vim /etc/default/keyboard`
    - Change the line that reads `XKBOPTIONS=""` to `XKBOPTIONS="ctrl:swapcaps"`
    - `$ sudo dpkg-reconfigure -phigh console-setup`

   - EmacsWiki Page: https://www.emacswiki.org/emacs/MovingTheCtrlKey
   - WikiWikiWeb: http://wiki.c2.com/?RemapCapsLock
 
- Pull up my [dotfiles](https://github.com/rsapkf/dotfiles/) and install necessary [programs](programs.md) (run the install script(@TODO))
- Enable _Italics_ in Vim and tmux ([add terminfo](https://github.com/tmux/tmux/blob/2.1/FAQ#L355-L383) if needed).
- Configure [Mutt](https://github.com/muttmua/muttt) / [NeoMutt](https://github.com/neomutt/neomutt) (`vim ~/.mutt/muttrc` / `~/.neomutt/neomuttrc`)
- Enable 'Single Click to Open Files' in the default Graphical File Manager.