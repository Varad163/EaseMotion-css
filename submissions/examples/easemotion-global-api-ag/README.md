# EaseMotion Global JavaScript API

A lightweight, unified global JavaScript API (`window.EaseMotion`) to control EaseMotion's interactive components programmatically.

## 1. What does this do?

This component introduces a zero-dependency programmatic API that enables developers to open/close modals, swap tab states with sliding underline transitions, and register scroll reveals entirely in JavaScript without modifying routing URL hashes.

## 2. How is it used?

Link to both `style.css` and `script.js` along with EaseMotion core, then call the methods:

```html
<!-- Modal trigger -->
<button onclick="EaseMotion.Modal.open('my-modal')">Open Modal</button>

<div class="ease-modal-overlay-ag" id="my-modal">
  <div class="ease-modal-ag">
    <button onclick="EaseMotion.Modal.close('my-modal')">&times;</button>
    Modal Content
  </div>
</div>

<!-- Tabs programmatic controller -->
<button onclick="EaseMotion.Tabs.select('#my-tabs', 1)">
  Go to Settings (Tab 2)
</button>
```

### Method API Specifications

- `EaseMotion.Modal.open(id)`: Opens modal, locks focus inside, and handles Esc closes.
- `EaseMotion.Modal.close(id)`: Closes modal and restores focus.
- `EaseMotion.Tabs.select(containerSelector, index)`: Switches active tab index and positions the slider underline relative to coordinates.
- `EaseMotion.Tabs.refresh(containerSelector)`: Recalculates underline bounds (useful on window resizes).
- `EaseMotion.Reveal.observe(selector)`: Registers selectors to the IntersectionObserver to trigger scroll fade-ins.

---

## 3. Why is it useful?

EaseMotion CSS is built to be modular, framework-friendly, and lightweight. In modern Single Page Applications (React, Next.js, Vue, Svelte), using routing hash hashes like `#my-modal` can conflict with client-side routers or cause unintended page scroll jumps. This programmatic API resolves routing issues by managing active state classes directly, handles accessibility focus-traps out-of-the-box, and replaces broad MutationObservers with direct, programmatically triggered updates.
