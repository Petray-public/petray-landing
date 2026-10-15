"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import type { PanelId } from "@/lib/site-data";
import { PanelContent } from "@/components/site/panel-content";
import { ThemeToggle } from "@/components/site/theme-toggle";

interface SiteUI { openPanel: (panel: PanelId, trigger: HTMLButtonElement) => void }
const SiteUIContext = createContext<SiteUI | null>(null);

export function PanelButton({ panel, className, children }: { panel: PanelId; className?: string; children: ReactNode }) {
  const ui = useContext(SiteUIContext);
  if (!ui) throw new Error("PanelButton must be rendered inside SiteShell.");
  return <button type="button" className={className} data-panel={panel} aria-haspopup="dialog" aria-controls="detail" onClick={event => ui.openPanel(panel, event.currentTarget)}>{children}</button>;
}

export function SiteShell({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activePanel, setActivePanel] = useState<PanelId | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const menuRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

  const openPanel = useCallback((panel: PanelId, trigger: HTMLButtonElement) => {
    triggerRef.current = trigger;
    setMenuOpen(false);
    setActivePanel(panel);
  }, []);
  const ui = useMemo(() => ({ openPanel }), [openPanel]);

  useEffect(() => {
    const query = window.matchMedia("(min-width:1001px)");
    const onResize = (event: MediaQueryListEvent) => { if (event.matches) setMenuOpen(false); };
    const onEscape = (event: KeyboardEvent) => { if (event.key === "Escape") setMenuOpen(false); };
    query.addEventListener("change", onResize);
    document.addEventListener("keydown", onEscape);
    return () => {
      query.removeEventListener("change", onResize);
      document.removeEventListener("keydown", onEscape);
      document.body.classList.remove("body-lock");
    };
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (activePanel && !dialog.open) {
      dialog.showModal();
      dialog.scrollTop = 0;
    } else if (!activePanel && dialog.open) dialog.close();
    document.body.classList.toggle("body-lock", activePanel !== null);
  }, [activePanel]);

  function onDialogClose() {
    setActivePanel(null);
    document.body.classList.remove("body-lock");
    const trigger = triggerRef.current;
    requestAnimationFrame(() => {
      if (trigger?.offsetParent) trigger.focus();
      else menuRef.current?.focus();
    });
  }

  return (
    <SiteUIContext.Provider value={ui}>
      <a className="skip" href="#main">Skip to content</a>
      <header className="header">
        <a className="identity" href="/" aria-label="Petray home"><img src="/assets/petray-logo.png" alt="" width={36} height={43} /><span>PETRAY</span></a>
        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#businesses">Businesses</a>
          <a href="#distribution-partners">Distribution</a>
          <PanelButton panel="about">About</PanelButton>
          <PanelButton panel="careers">Careers</PanelButton>
        </nav>
        <div className="header-actions">
          <PanelButton className="outline header-cta" panel="partners">Work with us</PanelButton>
          <ThemeToggle />
          <button type="button" ref={menuRef} className="menu-toggle" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-controls="mobile-menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(open => !open)}><span /><span /></button>
        </div>
      </header>
      <nav id="mobile-menu" className="mobile-menu" aria-label="Mobile navigation" hidden={!menuOpen}>
        <a href="#businesses" onClick={() => setMenuOpen(false)}>Businesses</a>
        <a href="#distribution-partners" onClick={() => setMenuOpen(false)}>Distribution partners</a>
        <PanelButton panel="about">About Petray</PanelButton>
        <PanelButton panel="careers">Careers</PanelButton>
        <PanelButton panel="partners">Work with us</PanelButton>
      </nav>
      {children}
      <footer className="footer">
        <span>Petray Private Limited</span>
        <address className="footer-address">Office Address: RajShree Estates, Hinjawadi Phase 2, Hinjawadi, Man, Maharashtra 411057.</address>
        <span className="footer-contact"><a href="mailto:petraypvt@gmail.com">petraypvt@gmail.com</a> · <a href="tel:+919823552698">9823552698</a></span>
      </footer>
      <dialog id="detail" ref={dialogRef} aria-labelledby={activePanel ? "panel-title" : undefined} onClose={onDialogClose} onClick={event => {
        const rect = event.currentTarget.getBoundingClientRect();
        if (event.target === event.currentTarget && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) event.currentTarget.close();
      }}>
        <div className="dialog-heading">
          <a className="dialog-brand" href="/">PETRAY</a>
          <button type="button" className="close" aria-label="Close details" onClick={() => dialogRef.current?.close()}><svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg></button>
        </div>
        <div id="panel-content">{activePanel && <PanelContent panel={activePanel} />}</div>
      </dialog>
    </SiteUIContext.Provider>
  );
}
