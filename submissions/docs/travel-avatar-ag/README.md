# Travel Avatar Showcase

An interactive travel avatar component featuring a vintage compass ring, elastic zooms, and orbiting travel badges.

## 1. What does this do?

This component provides a circular profile avatar that rotates a dashed compass border frame, zooms the profile photo, and expands three orbiting travel badges (plane, camera, map) outwards radially when hovered or focused in pure CSS.

## 2. How is it used?

Link to both `easemotion.css` and `style.css` in your document, and structure your HTML as follows:

```html
<div
  class="travel-avatar-wrapper-ag"
  tabindex="0"
  aria-label="Traveler profile"
>
  <!-- Compass Rotating Ring -->
  <div class="avatar-compass-ag" aria-hidden="true"></div>

  <!-- Profile Photo -->
  <div class="avatar-core-ag">
    <img class="avatar-img-ag" src="traveler.png" alt="Traveler Portrait" />
  </div>

  <!-- Orbiting Badges -->
  <span class="orbit-badge-ag orbit-badge-1" title="Flights">✈️</span>
  <span class="orbit-badge-ag orbit-badge-2" title="Camera">📷</span>
  <span class="orbit-badge-ag orbit-badge-3" title="Map">🗺️</span>
</div>
```

### Custom Properties API

Exposed CSS variables that can be overridden at the wrapper element level:

- `--avatar-size`: Base width/height of the profile image container (defaults to `115px`).
- `--orbit-radius`: Expansion radius distance for the orbiting badges (defaults to `78px`).
- `--travel-duration`: Transition speed for hover scales and badge extensions (defaults to `0.38s`).
- `--travel-accent`: Theme highlight color (defaults to `#3182ce`).

---

## 3. Why is it useful?

User profile logs, explorer bios, and travel feeds are common building blocks in social and travel dashboards. By combining continuous keyframe rotations, spring-like translation vectors, and custom property configurations entirely in pure CSS, this showcase demonstrates how developers can create highly interactive, modern micro-animations with zero JavaScript overhead.
