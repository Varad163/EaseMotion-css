# Neumorphic Slide-Up Popover

An interactive pure CSS popover featuring a Neumorphic Soft layout and spring slide-up entrance transitions.

## 1. What does this do?

This component provides a tactile Neumorphic popover card that slides up smoothly from below when triggered, sinking the host button into the panel, and closes automatically when clicking anywhere else on the screen, all built in pure CSS.

## 2. How is it used?

Link to both `easemotion.css` and `style.css`, then construct the HTML with the following pattern inside a `<form>` to enable zero-JS resets:

```html
<form action="javascript:void(0);">
  <div class="popover-wrapper-ag">
    <!-- Checkbox Toggle -->
    <input type="checkbox" id="pop-1" class="popover-checkbox-ag" />

    <!-- Transparent Click-Outside Overlay -->
    <label for="pop-1" class="popover-overlay-ag" aria-hidden="true"></label>

    <!-- Tactile Button Trigger -->
    <label for="pop-1" class="btn-neumorphic-ag" tabindex="0" role="button">
      Open Stats
    </label>

    <!-- Popover Content Box -->
    <div class="popover-box-ag" role="tooltip">
      <div class="popover-title-ag">Telemetry Info</div>
      <p class="popover-desc-ag">Content description goes here...</p>
    </div>
  </div>
</form>
```

### Custom Properties API

Exposed CSS variables that can be overridden at the popover box level:

- `--slide-duration`: Slide entry transition duration (defaults to `0.35s`).
- `--slide-distance`: Offset distance from which the popover slides up (defaults to `16px`).
- `--slide-ease`: Transition timing function (defaults to a spring-like `cubic-bezier(0.34, 1.56, 0.64, 1)` curve).

---

## 3. Why is it useful?

Testimonial nodes, status cards, and settings configurations frequently need context-rich popovers. By using CSS sibling checked selectors and fullscreen label overlays, this component handles both the physical push-button animation and click-outside dismiss logic completely in pure CSS with zero JavaScript dependencies, supporting EaseMotion's framework-friendly library philosophy.
