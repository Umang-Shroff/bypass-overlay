# Overlay Remover Chrome Extension

**Overlay Remover** is a simple Chrome extension that removes intrusive overlay popups (like pop-up modals on Medium, Glassdoor, etc.) so you can read content without interruptions.

---

## Features

- Click-to-activate: Only runs when you manually click the extension.
- Removes full-screen overlays and modals with high z-index.
- Re-enables scrolling if it was blocked.
- Works on most websites (generic detection).
- Lightweight, fast, and easy to use.

---

## Folder Structure

```bash
bypass-overlays-extension/
├── manifest.json   # Chrome extension config
├── background.js   # Injects content script when icon is clicked
├── content.js      # Core logic to detect and remove overlays
└── README.md      
```