<p align="center">
  <img src="/src/assets/codesnap-hero.png" width="500" alt="codesnap-hero">
</p>

## Introduction
CodeSnap is a web application that allows users to add snippets of code inside a text field right in on the webpage. Users can then apply styling and snap a screenshot for socials.

Users will be able to change the main background color of the site to whatever they want. A future update will allow users to select different themes of code text.

## 🧐 What's inside?
A quick look at the files and directories you'll see in the repo.

```bash
└── src
  ├── assets
    ├── repo image files
  ├── js
    ├── components
      ├── buttons
      ├── editor
        ├── lib
          ├── editor.css
          ├── editor.js
      ├── navbar
      ├── select-bars
      ├── toggle
    ├── app.js
    ├── codemirror.js
    ├── color-picker.js
    ├── darkmode.js
    ├── toggles.js
  ├── index.html
  ├── style.css
```

1. **`/src`**: This directory contains all of the source files for the repo.
    1. **`/assets`**: This directory contains images for the repo.
    1. **`/js`**: This directory contains all JavaScript files in the repo.
        1. **`/components`**: This directory contains all JavaScript component files.

## ✅ Todo
__Features:__
- [x] Implement CodeMirror.
- [x] Toggle CodeSnap editor styles.
    - [x] Box shadow toggle.
    - [x] Line numbering toggle.
    - [x] Header toggle.
    - [ ] Language tag toggle.
- [ ] Export to svg and png button.
- [ ] Customize background color.
- [ ] Custom CodeSnap editor themes.
- [ ] Copy code button in text editor.
- [ ] Customize font families.
- [ ] Profile page.

__Design/Build:__
- [x] Add side nav bar with functionality.
- [ ] Side navbar functions:
    - [x] Export CTA button - "Export" exports to png. Icon activates dropdown list of png and svg (Stripe dropdown effect).
    - [x] Theme select bar.
    - [x] Language select bar.
    - [x] Styles toggles.
        - [ ] Display images under toggles showing what they do.
    - [ ] Background color picker.
    - [ ] Share code (Twitter, Instagram, etc.)
- [ ] Add language tag (js, css, etc.) to CodeSnap editor.
- [ ] On CodeSnap editor hover, pin icon (outline) displays. Pin to your collection. If pinned, icon displays filled.
- [ ] Profile page.
    - [ ] "Your Collections" tab.

__Road-map:__
- [ ] Implement social aspect to app.
- [ ] Users can comment on other users' code snippet and make edits/suggestions.
    - [ ] Edits and suggestions can be done right in the editor. Once "submitted" original snippet is unchanged but a snapshot of the suggested editor is posted in the comments along with a description (Slack style).
- [ ] Allow users to save other users' code snippets.
- [ ] Share code snippets between users and social media accounts.
- [ ] More functionality (tab sizing, font styles, font sizing, etc.).

## 🔗 Project Resources
CodeMirror:
* [CodeMirror User Manual](https://codemirror.net/doc/manual.html)
* [CodeMirror Setup Guide](https://www.youtube.com/watch?v=o1DDWQDBT9Y)
* [Changing Mode](https://codemirror.net/doc/manual.html#setOption)
* [Changing Mode StackOverflow](https://stackoverflow.com/questions/6130563/how-to-dynamically-switch-modes-with-codemirror)

Color Picker:
* [Customize ColorPicker in JavaScript](https://ej2.syncfusion.com/javascript/documentation/color-picker/how-to/customize-colorpicker/)
* [Input type color](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/color)
* [Color Picker Tutorial 1](https://www.youtube.com/watch?v=RSbZJYVQmPU)
* [Color Picker Tutorial 2](https://www.youtube.com/watch?v=DP9-CVgkgDA)
* [Input Type Color Tutorial](https://www.youtube.com/watch?v=eIw-Nou9L9E)

Misc:
* [Color is Math](https://dev.to/madsstoumann/colors-are-math-how-they-match-and-how-to-build-a-color-picker-4ei8)
* [Auto-grow text area](https://css-tricks.com/the-cleanest-trick-for-autogrowing-textareas/)
* [Copy Text to Clipboard](https://www.30secondsofcode.org/blog/s/copy-text-to-clipboard-with-javascript)

highlight.js: 
* [highlight.js Usage](https://highlightjs.org/usage/)
* [highlight.js Docs](https://highlightjs.readthedocs.io/en/latest/)

Creating a Syntax Highlighter:
* [MDN Syntax Highlighter](https://developer.mozilla.org/en-US/docs/MDN/Editor/Syntax_highlighting)
* [W3 Syntax Highlighter](https://www.w3schools.com/howto/howto_syntax_highlight.asp)
