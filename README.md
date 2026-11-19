# Show / Hide Password | CSS

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?style=for-the-badge&logo=github)](https://mrchandrayee.github.io/show-hide-password-css/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org) [![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](./LICENSE)

A complete, dependency-free recreation of the 5.57-second uploaded screen recording.

## What the video shows
- Title: **Show/Hide Password | CSS**
- A cyan/blue gradient pill-shaped password field.
- A clickable eye icon on the right side of the field.
- The field alternates between masked dots and readable text.
- HTML snippet visibly includes `class="pass-icon" id="pass-icon"`.
- CSS snippet visibly shows:

```css
.pass-icon {
  position: absolute;
  top: 23px;
  right: 16px;
  width: 24px;
  height: 24px;
  cursor: pointer;
}
```

## Run
No npm install or build step is required.

```bash
python3 -m http.server 8000
```

Open http://localhost:8000.

## Project files
- `index.html` — semantic password field, eye button, code preview
- `styles.css` — responsive styling and gradient field
- `app.js` — show/hide logic and accessible state updates

## Source accuracy
The video is a short visual demo and only exposes a partial HTML line and a partial CSS rule. It does not show the complete original HTML, CSS, or JavaScript. The exact visible CSS declarations and class/id names are preserved above; the remaining markup, styles, SVG eye icons, and JavaScript behavior are a clean runnable implementation, not recovered original source.

## 👨‍💻 Author

**mrchandrayee** · [GitHub](https://github.com/mrchandrayee)

## 📄 License

[MIT License](./LICENSE)
