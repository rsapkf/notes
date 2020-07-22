---
id: javascript
title: JavaScript
---

- Get random item from `possibleOptions` array:

```
possibleOptions[Math.floor(Math.random()*possibleOptions.length)];`
```

## Node/npm

- See all user installed packages:

```
npm list -g --depth=0`
```

## Redirect to another website:

- With HTML `<meta>` tags (not recommended by W3C):

  Placing this inside `<head>`:

  ```
  <meta http-equiv="refresh" content="0; URL='http://new-website.com'" />
  ```

- With JavaScript:
  ```
  window.location = "http://new-website.com"; // or one of these
  window.location.href = "http://new-website.com";
  window.location.assign("http://new-website.com");
  window.location.replace("http://new-website.com");
  ```

  Details: https://css-tricks.com/redirect-web-page/
