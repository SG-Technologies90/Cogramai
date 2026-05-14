import { useState, useEffect } from 'react';
import Link from 'next/link';

const navLinks = [
  { href: '#hero',        label: 'Home' },
  { href: '#courses',     label: 'Courses' },
  { href: '#features',    label: 'Features' },
  { href: '#scholarship', label: 'Scholarship' },
  { href: '#dashboard',   label: 'Dashboard' },
  { href: '#cart',        label: 'Cart' },
];

export default function Topbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('#hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`topbar ${scrolled ? 'scrolled' : ''}`}>
      <nav className="topbar-nav">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={activeLink === link.href ? 'active' : ''}
            onClick={() => setActiveLink(link.href)}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <div className="topbar-actions">
        <button className="btn-ghost">Sign In</button>
        <button className="btn-primary">Get Started →</button>
      </div>
    </header>
  );
}
