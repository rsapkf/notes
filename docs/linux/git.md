---
id: git
title: git
---

## Useful Flags

- `git log --oneline` - displays single commit information per line.
- `git rev-list HEAD --count` - total number of commits.
  - `git shortlog` - Summarize 'git log' output.

## Miscellaneous

- Remove a file from history

  ```
  $ git filter-branch --force --index-filter \
    "git rm --cached --ignore-unmatch PATH-TO-YOUR-FILE-WITH-SENSITIVE-DATA" \
    --prune-empty --tag-name-filter cat -- --all
  ```

- Get a list of the deleted files in git history

  `git log --diff-filter=D --summary | grep delete` - without commit hashes.

  `git log --diff-filter=D --summary | grep -E 'delete|^commit\s+\S+'` - with commit hashes.

- Print a leaderboard of authors based on number of commits in a git repo

  `git log --format='%an' | sort | uniq -c | sort -nr`
