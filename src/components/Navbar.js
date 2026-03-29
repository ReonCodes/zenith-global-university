'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { label: 'About ZGU', href: '/about', children: [
    { label: 'Our Story', href: '/about' },
    { label: 'Vision & Mission', href: '/about/mission' },
    { label: 'Leadership Team', href: '/about/team' },
    { label: 'Governance', href: '/about/governance' },
    { label: 'Partnerships', href: '/about/partnerships' },
  ]},
  { label: 'Admissions', href: '/admissions', children: [
    { label: 'Undergraduate', href: '/admissions/undergraduate' },
    { label: 'Postgraduate', href: '/admissions/postgraduate' },
    { label: 'Academic Upgrading', href: '/admissions/upgrading' },
    { label: 'Tuition & Fees', href: '/admissions/fees' },
  ]},
  { label: 'Students', href: '/students', children: [
    { label: 'Student Charter', href: '/students/charter' },
    { label: 'Life at ZGU', href: '/students/life' },
    { label: 'Career & Work', href: '/students/careers' },
  ]},
  { label: 'News & Gallery', href: '/news', children: [
    { label: 'ZGU News', href: '/news' },
    { label: 'Photo Gallery', href: '/news/gallery' },
    { label: 'Events', href: '/news/events' },
  ]},
  { label: 'Library', href: '/library' },
  { label: 'ZGU Shop', href: '/shop' },
  
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Transparent on homepage hero, solid on scroll or other pages
  const isTransparent = isHome && !scrolled;
const isBlurred = isHome && scrolled;
  return (
    <>
      {/* Top Bar — always navy */}
      <div className="bg-[var(--navy)] text-white text-xs py-2 px-6 hidden md:flex justify-between items-center relative z-50">
        <span>📍 Kampala, Uganda &nbsp;|&nbsp; ✉ info@zenithglobal.ac.ug &nbsp;|&nbsp; 📞 +256 700 000 000</span>
        <div className="flex gap-4">
          <Link href="/portal" className="hover:text-[var(--gold)] transition-colors">Student Portal</Link>
          <span className="text-gray-500">|</span>
          <Link href="/staff" className="hover:text-[var(--gold)] transition-colors">Staff Portal</Link>
          <span className="text-gray-500">|</span>
          <Link href="/library" className="hover:text-[var(--gold)] transition-colors">Library</Link>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`sticky top-0 z-50 w-full transition-all duration-500 ${
  isTransparent
    ? 'bg-transparent py-4'
    : isBlurred
    ? 'bg-[var(--navy)]/80 backdrop-blur-md shadow-2xl py-2'
    : 'bg-[var(--navy)] shadow-2xl py-2'
}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

         {/* Logo */}
<Link href="/" className="flex items-center gap-3">
  <img
    src="/logo.png"
    alt="Zenith Global University"
    className={`w-auto object-contain transition-all duration-300 ${isTransparent ? 'h-14' : 'h-10'}`}
    style={{ filter: isTransparent ? 'brightness(0) invert(1)' : 'none' }}
  />
  <div>
    <div
      className="font-bold text-lg leading-none tracking-wide text-white"
      style={{ fontFamily: 'Playfair Display, serif' }}
    >
      ZENITH
    </div>
    <div className="text-[var(--gold)] text-xs tracking-[0.2em] uppercase">
      Global University
    </div>
  </div>
</Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors duration-200 whitespace-nowrap text-white hover:text-[var(--gold)]"
                >
                  {link.label}
                  {link.children && (
                    <svg className="w-3 h-3 mt-0.5 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>

                {/* Dropdown */}
                {link.children && activeDropdown === link.label && (
                  <div className="absolute top-full left-0 bg-white shadow-2xl rounded-b-lg min-w-52 border-t-2 border-[var(--gold)] z-50">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-5 py-3 text-sm text-gray-700 hover:bg-[var(--navy)] hover:text-[var(--gold)] transition-all duration-150 last:rounded-b-lg"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Apply Now Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/admissions"
              className={`px-6 py-2.5 rounded text-sm font-bold transition-all duration-300 tracking-wide uppercase ${
                isTransparent
                  ? 'bg-white/20 text-white border border-white/40 hover:bg-[var(--gold)] hover:text-[var(--navy)] hover:border-[var(--gold)]'
                  : 'bg-[var(--gold)] text-[var(--navy)] hover:bg-[var(--gold-light)]'
              }`}
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-white mb-1.5 transition-all ${mobileOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-0.5 bg-white transition-all ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-[var(--navy)] px-6 py-4 border-t border-white/10">
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link
                  href={link.href}
                  className="block py-3 text-white font-medium border-b border-white/10 hover:text-[var(--gold)] transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
                {link.children && (
                  <div className="pl-4">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block py-2 text-sm text-gray-400 hover:text-[var(--gold)] transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/admissions"
              className="mt-4 block text-center bg-[var(--gold)] text-[var(--navy)] px-6 py-3 rounded font-bold uppercase tracking-wide"
              onClick={() => setMobileOpen(false)}
            >
              Apply Now
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}