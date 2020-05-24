---
id: linux
title: Linux
---

## Some useful commands

- CPU temperature<br>
  `sensors | awk '/^CPU/ {print $2}'`

- Free memory (2.2G/7.6G)<br>
  `free -h | awk '/^Mem:/ {print $3 "/" $2}'`

- Top 10 most memory intensive processes<br>
  `ps axch -o cmd:15,%mem --sort=-%mem | head`

- Top 10 most CPU intensive processes<br>
  `ps axch -o cmd:15,%cpu --sort=-%cpu | head`

- Does your Terminal Emulator support _Italics_?<br>
  `echo -e "\e[3m foo \e[23m"`

- `dd` command usage to burn an iso to a flash drive<br>
  `dd if=Downloads/archlinux-x86_64.iso of=/dev/sdb status=progress`

- Display the SSID of connected network<br>
  `nmcli -t -f active,ssid dev wifi | egrep '^yes' | cut -d\' -f2`

- Colormap in terminal<br>
  `msgcat --color=test`

## Desktop Entry Template

- [ArchWiki Page](https://wiki.archlinux.org/index.php/Desktop_entries)
- [freedesktop.org Specification](https://specifications.freedesktop.org/desktop-entry-spec/desktop-entry-spec-latest.html#recognized-keys)

Example .desktop file (`~/.local/share/applications`):

```
[Desktop Entry]
Name=pCloud
GenericName=pCloud Client
Exec=/opt/pcloud
Terminal=false
Type=Application
Categories=Application;
Comment=pCloud Cloud Storage
```

## Useful Programs

- `man [program]` - view man pages for programs.
- `apropos` - search the manual page names and descriptions.
- `[program] --help/-h`
- `cat`
- `less`
- `echo`
- `head`
- `cd` - change working directory.
  - `cd -` - change to previous working directory.
  - `cd ~-` - same things as `cd -` without echoing the path.
- `tail`
- `pwd` - print name of current/working directory.
- `passwd` - change user password.
- `alias` - list and create aliases.
- `mkdir -p folder/{sub1,sub2}/{sub1,sub2,sub3}` - make directories/subdirectories quickly.
- `chsh` - change login shell.
- `grep` - pattern searching.
- `fdisk` - disk partition utility.
- `cfdisk` - disk partition utitlity.
- `dd` - convert or copy a file, create bootable USBs from ISOs. **use cautiously. can destroy data irreversibly.** To monitor the progress of an operation, add the `status=progress` option to the command.
- `wc` - print newline, word and byte counts for files.
- `history` - show history.
  - `<space>man man` - don't add `man man` command to history.
  - `fc` - fix a long command that you messed up.
  - `!666` - run 666th command in history.
  - `!-n` - refer to the command _n_ lines back.
  - `!-1` / `!!` - refer to the previous command.
  - `sudo !!` - run previous command but append `sudo` at the beginning.
  - `[program] !!` - run previous command using [program].
- `lsusb` - list USB devices.
- `lsblk` - list information about block devices.
- `env` / `printenv` - list all environmental variables.
- `free` - display amount of free and used memory in the system.
- `df` - report file system disk space usage.
- `du` - estimate file space usage.
  - `du -sh dir/` - check size of dir/ on disk.
- `fc-list` - list available fonts.
- `timedatectl` - control the system time and date.
  - `cat /etc/timezone` - (on Debian) print current timezone.
- `xprop` - property displayer for X.
- `shred` - overwrite the specified file(s) repeatedly, in order to make it harder for even very expensive hardware probing to recover the data.
- `mount` - mount a filesystem.
- `clear` - clear the terminal screen.

### System Monitoring

- `ps` - report a snapshot of the current processes.
  - `ps aux | grep nginx` - search for 'nginx' in ps output.
- `htop` - interactive process viewer.
- `top` - display Linux processes.
- `cat /proc/loadavg` - load average.
- `uptime` - tell how long the system has been running.
- `w` - see who is logged on and what they are doing.
- `acpi` - shows battery status and other ACPI information.
  - `upower -i `upower -e | grep 'BAT'`` - battery information.

### System Info

- `lsb_release -a` - print distribution-specific information.
- `cat /etc/*release`
- `uname -a` - print system information.
- `cat /etc/fstab` - static file system information.

### Networking

- `vim /etc/resolv.conf` - change DNS server.
- `ip` - show / manipulate routing, network devices, interfaces and tunnels.
  - `ip addr` - display IP addresses and property information.

## Miscellaneous

- Drop into a tty(tty3): `Ctrl + Alt + F3`
- Move to different ttys: `Alt + Left/Right`
- Mod Keys:
  - Mod1 : Left alt
  - Mod3 : Right Alt
  - Mod4 : Super/Windows
