---
id: git
title: git
---

## Useful Flags

- `git log --oneline` - displays single commit information per line.

## Miscellaneous

- Print a leaderboard of authors based on number of commits in a git repo

  `git log --format='%an' | sort | uniq -c | sort -nr`
