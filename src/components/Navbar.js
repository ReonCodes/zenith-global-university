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

  const isTransparent = isHome && !scrolled;

  return (
    <>
      {/* Top Bar */}
      <div style={{background: '#0a1628'}} className="text-white text-xs py-2 px-6 hidden md:flex justify-between items-center">
        <span style={{color: '#9ca3af', fontFamily: 'Inter, sans-serif'}}>
          📍 Kampala, Uganda &nbsp;|&nbsp; ✉ info@zenithglobal.ac.ug &nbsp;|&nbsp; 📞 +256 700 000 000
        </span>
        <div className="flex gap-4">
          <Link href="/portal" style={{color: '#9ca3af', fontFamily: 'Inter, sans-serif'}} className="hover:text-yellow-400 transition-colors text-xs">Student Portal</Link>
          <span style={{color: '#374151'}}>|</span>
          <Link href="/staff" style={{color: '#9ca3af', fontFamily: 'Inter, sans-serif'}} className="hover:text-yellow-400 transition-colors text-xs">Staff Portal</Link>
          <span style={{color: '#374151'}}>|</span>
          <Link href="/library" style={{color: '#9ca3af', fontFamily: 'Inter, sans-serif'}} className="hover:text-yellow-400 transition-colors text-xs">Library</Link>
        </div>
      </div>

      {/* Main Navbar */}
      <nav style={{
        background: isTransparent ? 'transparent' : '#0a1628',
        backdropFilter: isTransparent ? 'none' : 'none',
        boxShadow: isTransparent ? 'none' : '0 2px 20px rgba(0,0,0,0.3)',
        position: 'sticky',
        top: 0,
        zIndex: 50,
        width: '100%',
        transition: 'all 0.4s ease',
        padding: isTransparent ? '16px 0' : '8px 0',
      }}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="ZGU"
              style={{
                height: isTransparent ? '52px' : '40px',
                width: 'auto',
                objectFit: 'contain',
                transition: 'all 0.3s ease',
                filter: 'brightness(0) invert(1)',
              }}
            />
            <div>
              <div style={{
                color: 'white',
                fontFamily: 'Playfair Display, serif',
                fontWeight: 700,
                fontSize: '18px',
                lineHeight: 1,
                letterSpacing: '0.05em'
              }}>ZENITH</div>
              <div style={{
                color: '#c9a84c',
                fontSize: '10px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500
              }}>Global University</div>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link href={link.href} style={{
                  color: 'white',
                  fontSize: '13px',
                  fontWeight: 500,
                  fontFamily: 'Inter, sans-serif',
                  padding: '8px 14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  transition: 'color 0.2s',
                  whiteSpace: 'nowrap',
                }}
                className="hover:text-yellow-400">
                  {link.label}
                  {link.children && (
                    <svg style={{width: '12px', height: '12px', marginTop: '2px', transition: 'transform 0.2s', transform: activeDropdown === link.label ? 'rotate(180deg)' : 'rotate(0deg)'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>

                {link.children && activeDropdown === link.label && (
                  <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    background: 'white',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
                    borderRadius: '0 0 8px 8px',
                    minWidth: '210px',
                    borderTop: '2px solid #c9a84c',
                    zIndex: 100,
                  }}>
                    {link.children.map((child) => (
                      <Link key={child.label} href={child.href} style={{
                        display: 'block',
                        padding: '10px 18px',
                        fontSize: '13px',
                        color: '#374151',
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 400,
                        transition: 'all 0.15s',
                        borderBottom: '1px solid #f3f4f6',
                      }}
                      className="hover:bg-[#0a1628] hover:text-yellow-400">
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Apply Now */}
          <div className="hidden lg:block">
            <Link href="/admissions/apply" style={{
              background: '#c9a84c',
              color: '#0a1628',
              padding: '10px 24px',
              borderRadius: '4px',
              fontWeight: 700,
              fontSize: '12px',
              fontFamily: 'Inter, sans-serif',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              transition: 'all 0.2s',
              display: 'block',
            }}
            className="hover:bg-white">
              Apply Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-white p-2" onClick={() => setMobileOpen(!mobileOpen)}>
            <div style={{width: '24px', height: '2px', background: 'white', marginBottom: '5px', transition: 'all 0.3s', transform: mobileOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'}} />
            <div style={{width: '24px', height: '2px', background: 'white', marginBottom: '5px', transition: 'all 0.3s', opacity: mobileOpen ? 0 : 1}} />
            <div style={{width: '24px', height: '2px', background: 'white', transition: 'all 0.3s', transform: mobileOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none'}} />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div style={{background: '#112240', padding: '16px 24px', borderTop: '1px solid rgba(255,255,255,0.1)'}}>
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link href={link.href}
                  style={{display: 'block', padding: '12px 0', color: 'white', fontFamily: 'Inter, sans-serif', fontSize: '14px', borderBottom: '1px solid rgba(255,255,255,0.08)'}}
                  className="hover:text-yellow-400"
                  onClick={() => setMobileOpen(false)}>
                  {link.label}
                </Link>
                {link.children && (
                  <div style={{paddingLeft: '16px'}}>
                    {link.children.map((child) => (
                      <Link key={child.label} href={child.href}
                        style={{display: 'block', padding: '8px 0', color: '#9ca3af', fontSize: '13px', fontFamily: 'Inter, sans-serif'}}
                        className="hover:text-yellow-400"
                        onClick={() => setMobileOpen(false)}>
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link href="/admissions/apply"
              style={{display: 'block', marginTop: '16px', textAlign: 'center', background: '#c9a84c', color: '#0a1628', padding: '12px', borderRadius: '4px', fontWeight: 700, fontSize: '13px', fontFamily: 'Inter, sans-serif', textTransform: 'uppercase', letterSpacing: '0.08em'}}
              onClick={() => setMobileOpen(false)}>
              Apply Now
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}