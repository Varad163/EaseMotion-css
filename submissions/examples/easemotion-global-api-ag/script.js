/* ============================================================
   EaseMotion Programmatic JavaScript API
   Submission for EaseMotion CSS · Suffix '-ag'
   ============================================================ */

(function (global) {
  "use strict";

  // Modal active states tracker
  const activeModals = new Map();

  const Modal = {
    open(id) {
      const modal = document.getElementById(id);
      if (!modal) return;

      // Save current active element focus to restore on close
      const trigger = document.activeElement;

      modal.classList.add("is-active");
      modal.setAttribute("aria-hidden", "false");

      // Find interactive elements inside modal
      const focusableSelectors =
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
      const focusableElements = Array.from(
        modal.querySelectorAll(focusableSelectors)
      );

      if (focusableElements.length > 0) {
        // Focus first element
        focusableElements[0].focus();
      }

      // Keyboard listener to trap focus WAI-ARIA
      const handleKeyDown = (e) => {
        if (e.key === "Escape") {
          Modal.close(id);
          return;
        }

        if (e.key === "Tab") {
          const firstEl = focusableElements[0];
          const lastEl = focusableElements[focusableElements.length - 1];

          if (e.shiftKey) {
            // Shift + Tab (Backward)
            if (document.activeElement === firstEl) {
              lastEl.focus();
              e.preventDefault();
            }
          } else {
            // Tab (Forward)
            if (document.activeElement === lastEl) {
              firstEl.focus();
              e.preventDefault();
            }
          }
        }
      };

      modal.addEventListener("keydown", handleKeyDown);

      // Save state
      activeModals.set(id, { trigger, handleKeyDown });
    },

    close(id) {
      const modal = document.getElementById(id);
      if (!modal) return;

      modal.classList.remove("is-active");
      modal.setAttribute("aria-hidden", "true");

      const state = activeModals.get(id);
      if (state) {
        modal.removeEventListener("keydown", state.handleKeyDown);
        if (state.trigger) {
          state.trigger.focus();
        }
        activeModals.delete(id);
      }
    },
  };

  const Tabs = {
    select(containerSelector, index) {
      const container = document.querySelector(containerSelector);
      if (!container) return;

      const tabHeader = container.querySelector(".ease-tabs-header-ag");
      const tabs = Array.from(tabHeader.querySelectorAll(".ease-tab-btn-ag"));
      const panels = Array.from(
        container.querySelectorAll(".ease-tab-panel-ag")
      );

      if (index < 0 || index >= tabs.length) return;

      // Update Tab Headers active state
      tabs.forEach((tab, idx) => {
        const isSelected = idx === index;
        tab.setAttribute("aria-selected", isSelected ? "true" : "false");
        tab.setAttribute("tabindex", isSelected ? "0" : "-1");
        if (isSelected) {
          tab.classList.add("is-active");
        } else {
          tab.classList.remove("is-active");
        }
      });

      // Update Panels active state
      panels.forEach((panel, idx) => {
        if (idx === index) {
          panel.classList.add("is-active");
          panel.removeAttribute("hidden");
        } else {
          panel.classList.remove("is-active");
          panel.setAttribute("hidden", "true");
        }
      });

      // Update slider underline positions
      Tabs.refresh(containerSelector);
    },

    refresh(containerSelector) {
      const container = document.querySelector(containerSelector);
      if (!container) return;

      const tabHeader = container.querySelector(".ease-tabs-header-ag");
      const activeTab = tabHeader.querySelector(
        '.ease-tab-btn-ag[aria-selected="true"]'
      );
      const underline = tabHeader.querySelector(".ease-tab-underline-ag");

      if (!activeTab || !underline) return;

      // Calculate relative bounds
      const headerRect = tabHeader.getBoundingClientRect();
      const activeRect = activeTab.getBoundingClientRect();

      const leftOffset = activeRect.left - headerRect.left;
      const width = activeRect.width;

      // Apply CSS custom properties
      underline.style.setProperty("--ease-tab-left", `${leftOffset}px`);
      underline.style.setProperty("--ease-tab-width", `${width}px`);
    },
  };

  // Centralized Intersection Observer
  let revealObserver = null;

  const Reveal = {
    observe(selector) {
      const elements = document.querySelectorAll(selector);
      if (elements.length === 0) return;

      if (!revealObserver) {
        revealObserver = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("is-revealed");
                revealObserver.unobserve(entry.target);
              }
            });
          },
          {
            threshold: 0.15,
          }
        );
      }

      elements.forEach((el) => {
        el.classList.add("ease-reveal-ag");
        revealObserver.observe(el);
      });
    },
  };

  // Expose global window API namespace
  global.EaseMotion = {
    Modal,
    Tabs,
    Reveal,
  };

  // Auto-refresh active tab sliders on resize
  window.addEventListener("resize", () => {
    document
      .querySelectorAll(".ease-tabs-container-ag")
      .forEach((container) => {
        const id = container.id ? `#${container.id}` : null;
        if (id) Tabs.refresh(id);
      });
  });
})(window);
