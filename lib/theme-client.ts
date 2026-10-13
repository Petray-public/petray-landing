import { themeStorageKey, type Theme } from "./theme";

let transition: ViewTransition | undefined;
let fadeTimer: number | undefined;
let revision = 0;
let requestedTheme: Theme | undefined;

export function savedTheme(): Theme | null {
  try {
    const value = window.localStorage.getItem(themeStorageKey);
    return value === "light" || value === "dark" ? value : null;
  } catch { return null; }
}

export function currentTheme(): Theme {
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

export function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", theme === "dark" ? "#0d1117" : "#fcfcfc");
  window.dispatchEvent(new Event("petray-theme-change"));
}

export function cancelThemeTransition() {
  revision += 1;
  transition?.skipTransition();
  transition = undefined;
  window.clearTimeout(fadeTimer);
  requestedTheme = undefined;
  delete document.documentElement.dataset.themeTransition;
}

export function toggleTheme(origin: { x: number; y: number }, commit: (theme: Theme) => void = applyTheme) {
  // A second click reverses the pending choice, even before its snapshot is ready.
  const next = (requestedTheme ?? currentTheme()) === "dark" ? "light" : "dark";
  cancelThemeTransition();
  requestedTheme = next;
  const id = revision;
  const root = document.documentElement;
  try { window.localStorage.setItem(themeStorageKey, next); } catch { /* A session-only choice still works. */ }
  const update = () => { if (id === revision) commit(next); };
  const cleanup = () => {
    if (id !== revision) return;
    transition = undefined;
    requestedTheme = undefined;
    delete root.dataset.themeTransition;
  };

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    update();
    cleanup();
    return;
  }

  const fade = () => {
    root.dataset.themeTransition = "fade";
    // Establish the old colours before changing the tokens; never animate layout.
    void window.getComputedStyle(root).backgroundColor;
    update();
    fadeTimer = window.setTimeout(cleanup, 460);
  };

  if (typeof document.startViewTransition !== "function") { fade(); return; }
  root.dataset.themeTransition = "reveal";
  try {
    const view = document.startViewTransition(update);
    transition = view;
    void view.ready.then(() => {
      if (id !== revision) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { view.skipTransition(); return; }
      const x = Math.max(0, Math.min(origin.x, window.innerWidth));
      const y = Math.max(0, Math.min(origin.y, window.innerHeight));
      const radius = Math.ceil(Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y)));
      root.animate({ clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] }, {
        duration: 520,
        easing: "cubic-bezier(.4,0,.2,1)",
        pseudoElement: "::view-transition-new(root)",
      });
    }).catch(() => { if (id === revision) update(); });
    // Skipped or interrupted snapshots must never leave a stale transition class.
    void view.finished.then(cleanup, cleanup);
  } catch { fade(); }
}
