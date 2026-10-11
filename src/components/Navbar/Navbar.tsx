import { useEffect, useRef, useState } from 'react';
import './Navbar.scss';

const links = [
  { label: 'About me', href: '#about' },
  { label: 'My skills', href: '#skills' },
  { label: 'My projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

// Erst ab dieser Scrollposition darf die Leiste verschwinden
const HIDE_AFTER_PX = 80;

function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // Burger-Menü (mobile)
  const [activeId, setActiveId] = useState('about'); // aktuelle Section
  const lastY = useRef(0); // merkt sich die letzte Position, ohne neu zu rendern

  // Leiste beim Runterscrollen ausblenden, beim Hochscrollen einblenden
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const scrollingDown = y > lastY.current;

      setHidden(scrollingDown && y > HIDE_AFTER_PX);
      lastY.current = y;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Aktiven Menüpunkt anhand der sichtbaren Section bestimmen
  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((section) => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Menü mit Escape schließen
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  const isHidden = hidden && !menuOpen;

  return (
    <header className={`navbar ${isHidden ? 'navbar--hidden' : ''}`}>
      <nav className="navbar__inner container" aria-label="Main">
        <button
          type="button"
          className={`navbar__burger ${menuOpen ? 'is-open' : ''}`}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="main-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul
          id="main-menu"
          className={`navbar__list ${menuOpen ? 'is-open' : ''}`}
        >
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={link.href === `#${activeId}` ? 'is-active' : ''}
                aria-current={link.href === `#${activeId}` ? 'true' : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
