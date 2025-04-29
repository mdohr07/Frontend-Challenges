# Frontend Mentor - QR code component

My version:
![Design preview for the QR code component by mdohr07](images/Screenshot%202025-04-29.png)

*See the original on the bottom of this file*

## ✨ Extra Features Added

In addition to the required layout and styles from the original Frontend Mentor challenge, I implemented the following enhancements:

### 🔧 JavaScript Feature
- **Copy-to-Clipboard button**: Allows users to copy the QR code link with one click.
- Uses the **Clipboard API**: `navigator.clipboard.writeText()` to copy the link.
- Includes visual and screen reader feedback after copying.

### ♿ Accessibility Improvements
- Added proper semantic structure with `<main>`, `<section>`, `<h1>`, and `<button>`.
- Used `aria-live="polite"` with `role="status"` to give screen reader users a non-intrusive confirmation message when the link is copied.
- Provided meaningful `alt` text for the QR code image.

These additions are aimed at improving both user experience and accessibility without altering the core design - and my learning experience, of course.

Original:
![Design preview for the QR code component coding challenge](./preview.jpg)

