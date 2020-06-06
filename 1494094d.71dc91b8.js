(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{139:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return p}));var a=n(2),i=n(9),r=(n(0),n(191)),l={id:"linux",title:"Linux"},b={id:"linux/linux",title:"Linux",description:"Some useful commands",source:"@site/docs/linux/linux.md",permalink:"/notes/docs/linux/linux",editUrl:"https://github.com/rsapkf/notes/blob/master/docs/docs/linux/linux.md",sidebar:"someSidebar",next:{title:"Suckless",permalink:"/notes/docs/linux/suckless"}},o=[{value:"Some useful commands",id:"some-useful-commands",children:[]},{value:"Desktop Entry Template",id:"desktop-entry-template",children:[]},{value:"Useful Programs",id:"useful-programs",children:[{value:"System Monitoring",id:"system-monitoring",children:[]},{value:"System Info",id:"system-info",children:[]},{value:"Networking",id:"networking",children:[]}]},{value:"Miscellaneous",id:"miscellaneous",children:[]}],c={rightToc:o};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"some-useful-commands"},"Some useful commands"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Free memory (2.2G/7.6G)"),Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"free -h | awk '/^Mem:/ {print $3 \"/\" $2}'"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Top 10 most memory intensive processes"),Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"ps axch -o cmd:15,%mem --sort=-%mem | head"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Top 10 most CPU intensive processes"),Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"ps axch -o cmd:15,%cpu --sort=-%cpu | head"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Does your Terminal Emulator support ",Object(r.b)("em",{parentName:"p"},"Italics"),"?"),Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},'echo -e "\\e[3m foo \\e[23m"'))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"dd")," command usage to burn an iso to a flash drive"),Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"dd if=Downloads/archlinux-x86_64.iso of=/dev/sdb status=progress"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Display the SSID of connected network"),Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"nmcli -t -f active,ssid dev wifi | egrep '^yes' | cut -d\\' -f2"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Colormap in terminal"),Object(r.b)("p",{parentName:"li"},Object(r.b)("inlineCode",{parentName:"p"},"msgcat --color=test")))),Object(r.b)("h2",{id:"desktop-entry-template"},"Desktop Entry Template"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://wiki.archlinux.org/index.php/Desktop_entries"}),"ArchWiki Page")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://specifications.freedesktop.org/desktop-entry-spec/desktop-entry-spec-latest.html#recognized-keys"}),"freedesktop.org Specification"))),Object(r.b)("p",null,"Example .desktop file (",Object(r.b)("inlineCode",{parentName:"p"},"~/.local/share/applications"),"):"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"[Desktop Entry]\nName=pCloud\nGenericName=pCloud Client\nExec=/opt/pcloud\nTerminal=false\nType=Application\nCategories=Application;\nComment=pCloud Cloud Storage\n")),Object(r.b)("h2",{id:"useful-programs"},"Useful Programs"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"man [program]")," - view man pages for programs."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"apropos")," - search the manual page names and descriptions."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"[program] --help/-h")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"cat")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"less")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"echo")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"head")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"cd")," - change working directory.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"cd -")," - change to previous working directory."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"cd ~-")," - same things as ",Object(r.b)("inlineCode",{parentName:"li"},"cd -")," without echoing the path."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"tail")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"pwd")," - print name of current/working directory."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"passwd")," - change user password."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"alias")," - list and create aliases."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"mkdir -p folder/{sub1,sub2}/{sub1,sub2,sub3}")," - make directories/subdirectories quickly."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"chsh")," - change login shell."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"grep")," - pattern searching."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"fdisk")," - disk partition utility."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"cfdisk")," - disk partition utitlity."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"dd")," - convert or copy a file, create bootable USBs from ISOs. ",Object(r.b)("strong",{parentName:"li"},"use cautiously. can destroy data irreversibly.")," To monitor the progress of an operation, add the ",Object(r.b)("inlineCode",{parentName:"li"},"status=progress")," option to the command."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"wc")," - print newline, word and byte counts for files."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"history")," - show history.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"<space>man man")," - don't add ",Object(r.b)("inlineCode",{parentName:"li"},"man man")," command to history."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"fc")," - fix a long command that you messed up."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"!666")," - run 666th command in history."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"!-n")," - refer to the command ",Object(r.b)("em",{parentName:"li"},"n")," lines back."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"!-1")," / ",Object(r.b)("inlineCode",{parentName:"li"},"!!")," - refer to the previous command."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"sudo !!")," - run previous command but append ",Object(r.b)("inlineCode",{parentName:"li"},"sudo")," at the beginning."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"[program] !!")," - run previous command using ","[program]","."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"lsusb")," - list USB devices."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"lsblk")," - list information about block devices."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"env")," / ",Object(r.b)("inlineCode",{parentName:"li"},"printenv")," - list all environmental variables."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"free")," - display amount of free and used memory in the system."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"df")," - report file system disk space usage."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"du")," - estimate file space usage.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"du -sh dir/")," - check size of dir/ on disk."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"fc-list")," - list available fonts."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"timedatectl")," - control the system time and date.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"cat /etc/timezone")," - (on Debian) print current timezone."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"xprop")," - property displayer for X."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"shred")," - overwrite the specified file(s) repeatedly, in order to make it harder for even very expensive hardware probing to recover the data."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"mount")," - mount a filesystem."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"clear")," - clear the terminal screen.")),Object(r.b)("h3",{id:"system-monitoring"},"System Monitoring"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"ps")," - report a snapshot of the current processes.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"ps aux | grep nginx")," - search for 'nginx' in ps output."))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"htop")," - interactive process viewer."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"top")," - display Linux processes."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"cat /proc/loadavg")," - load average."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"uptime")," - tell how long the system has been running."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"w")," - see who is logged on and what they are doing."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"acpi")," - shows battery status and other ACPI information.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"upower -i"),"upower -e | grep 'BAT'`` - battery information.")))),Object(r.b)("h3",{id:"system-info"},"System Info"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"lsb_release -a")," - print distribution-specific information."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"cat /etc/*release")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"uname -a")," - print system information."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"cat /etc/fstab")," - static file system information.")),Object(r.b)("h3",{id:"networking"},"Networking"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"vim /etc/resolv.conf")," - change DNS server."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"ip")," - show / manipulate routing, network devices, interfaces and tunnels.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"ip addr")," - display IP addresses and property information.")))),Object(r.b)("h2",{id:"miscellaneous"},"Miscellaneous"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Drop into a tty(tty3): ",Object(r.b)("inlineCode",{parentName:"li"},"Ctrl + Alt + F3")),Object(r.b)("li",{parentName:"ul"},"Move to different ttys: ",Object(r.b)("inlineCode",{parentName:"li"},"Alt + Left/Right")),Object(r.b)("li",{parentName:"ul"},"Mod Keys:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Mod1 : Left alt"),Object(r.b)("li",{parentName:"ul"},"Mod3 : Right Alt"),Object(r.b)("li",{parentName:"ul"},"Mod4 : Super/Windows")))))}p.isMDXComponent=!0},191:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return d}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),p=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},m=function(e){var t=p(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,d=m["".concat(l,".").concat(u)]||m[u]||s[u]||r;return n?i.a.createElement(d,b(b({ref:t},c),{},{components:n})):i.a.createElement(d,b({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=u;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:a,l[1]=b;for(var c=2;c<r;c++)l[c]=n[c];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);