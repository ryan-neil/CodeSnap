<p align="center">
  <img src="/src/assets/codesnap-hero.png" width="500" alt="codesnap-hero">
</p>

## Introduction
CodeSnap is a web application that allows users to add snippets of code inside a text field right in on the webpage. Users can then apply styling and snap a screenshot for socials.

Users will be able to change the main background color of the site to whatever they want. A future update will allow users to select different themes of code text.

## 🧐 What's inside?
A quick look at the files and directories you'll see in the repo.

```bash
  .
  ├── src
    ├── assets
      ├── repo image files
    └── js
      ├── components
        ├── buttons
        ├── editor
        ├── navbar
        ├── select-bars
        ├── toggle
      └── app.js
```

1. **`/src`**: This directory contains all of the source files for the repo.
    1. **`/assets`**: This directory contains images for the repo.
    1. **`/js`**: This directory contains all JavaScript in the repo.
        1. **`/components`**: This directory contains all JavaScript files and components files.

## ✅ Todo
Features:
- [x] Implement CodeMirror.
- [ ] Toggle code editor styles.
    - [x] Box shadow toggle.
    - [ ] Line numbering toggle.
    - [x] Header toggle.
- [ ] Export to svg and png button.
- [ ] Customize background color.
- [ ] Custom code editor themes.
- [ ] Copy code button in text editor.
- [ ] Customize font families.

Design/Build:
- [x] Add side nav bar with functionality.
- [ ] Side navbar functions:
    - [x] Export CTA button - "Export" exports to png. Icon activates dropdown list of png and svg (Stripe dropdown effect).
    - [x] Theme select bar.
    - [x] Language select bar.
    - [x] Styles toggles.
    - [ ] Background color picker.
    - [ ] Share code (Twitter, Instagram, etc.)

Road-map:
- [ ] Implement social aspect to app.
- [ ] Allow users to save other users' code snippets.
- [ ] Share code snippets between users and social media accounts.
- [ ] More functionality (font styles, font sizing, etc.).

## 🔗 Project Resources
CodeMirror:
* [CodeMirror User Manual](https://codemirror.net/doc/manual.html)
* [CodeMirror Setup Guide](https://www.youtube.com/watch?v=o1DDWQDBT9Y)

Color Picker:
* [Customize ColorPicker in JavaScript](https://ej2.syncfusion.com/javascript/documentation/color-picker/how-to/customize-colorpicker/)
* [input type color](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color)
* [Color Picker Tutorial 1](https://www.youtube.com/watch?v=RSbZJYVQmPU)
* [Color Picker Tutorial 2](https://www.youtube.com/watch?v=DP9-CVgkgDA)
* [Input Type Color Tutorial](https://www.youtube.com/watch?v=eIw-Nou9L9E)

Misc:
* [Color is Math](https://dev.to/madsstoumann/colors-are-math-how-they-match-and-how-to-build-a-color-picker-4ei8)
* [Auto-grow text area](https://css-tricks.com/the-cleanest-trick-for-autogrowing-textareas/)
* [pre Tag MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/pre)
* [pre Tag W3](https://www.w3schools.com/tags/tag_pre.asp)
* [code Tag MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/code)
* [Copy Text to Clipboard](https://www.30secondsofcode.org/blog/s/copy-text-to-clipboard-with-javascript)

highlight.js: 
* [highlight.js Usage](https://highlightjs.org/usage/)
* [highlight.js Docs](https://highlightjs.readthedocs.io/en/latest/)

Creating a Syntax Highlighter:
* [MDN Syntax Highlighter](https://developer.mozilla.org/en-US/docs/MDN/Editor/Syntax_highlighting)
* [W3 Syntax Highlighter](https://www.w3schools.com/howto/howto_syntax_highlight.asp)