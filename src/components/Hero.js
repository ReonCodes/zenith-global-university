'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1600&q=80',
    tag: 'World-Class Education',
    heading: 'Rise Beyond\nLimits.',
    sub: 'Zenith Global University — where African excellence meets global ambition. Shape your future with us.',
  },
  {
    image: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=1600&q=80',
    tag: 'AI & Technology',
    heading: 'AI Is a Must\nFor All.',
    sub: 'ZGU leads East Africa in technology education. Our Faculty of Technology prepares you for the digital future.',
  },
  {
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&q=80',
    tag: 'Experiential Learning',
    heading: 'Learn By\nDoing.',
    sub: 'We combine rigorous academics with hands-on real-world experience. Graduate job-ready and confident.',
  },
  {
    image: 'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=1600&q=80',
    tag: 'Global Community',
    heading: 'Students From\n40+ Countries.',
    sub: 'Join a diverse, multicultural community at ZGU. Build global connections that last a lifetime.',
  },
];

const stats = [
  { number: '15,000+', label: 'Students Enrolled' },
  { number: '200+', label: 'Academic Programmes' },
  { number: '50+', label: 'Partner Universities' },
  { number: '95%', label: 'Graduate Employment' },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', overflow: 'hidden' }}>

      {/* Background Images */}
      {slides.map((s, i) => (
        <div key={i} style={{
          position: 'absolute', inset: 0, zIndex: 0,
          transition: 'opacity 1.2s ease',
          opacity: current === i ? 1 : 0,
        }}>
          <img src={s.image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      ))}

      {/* Gradient Overlay */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        background: 'linear-gradient(to right, rgba(10,22,40,0.92) 0%, rgba(10,22,40,0.75) 50%, rgba(10,22,40,0.3) 100%)',
      }} />

      {/* Gold bottom line */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(to right, #c9a84c, #e8c96a, transparent)', zIndex: 10 }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 5, maxWidth: '1280px', margin: '0 auto', padding: '0 24px 80px', width: '100%', paddingTop: '120px' }}>

        {/* Tag */}
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: '8px',
          background: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.4)',
          borderRadius: '100px', padding: '6px 16px', marginBottom: '20px',
          opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(16px)',
          transition: 'all 0.7s ease',
        }}>
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#c9a84c', animation: 'bounce 2s infinite' }} />
          <span style={{ color: '#c9a84c', fontSize: '12px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', fontFamily: 'Inter, sans-serif' }}>
            {slide.tag}
          </span>
        </div>

        {/* Heading */}
        <h1 style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: 'clamp(44px, 6vw, 80px)',
          fontWeight: 700,
          color: 'white',
          lineHeight: 1.1,
          marginBottom: '20px',
          maxWidth: '600px',
          whiteSpace: 'pre-line',
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'translateY(0)' : 'translateY(24px)',
          transition: 'all 0.7s ease 0.15s',
        }}>
          {slide.heading.split('\n').map((line, i) => (
            <span key={i}>
              {i === 1 ? <span style={{ color: '#c9a84c' }}>{line}</span> : line}
              {i === 0 && '\n'}
            </span>
          ))}
        </h1>

        {/* Subtitle */}
        <p style={{
          color: '#d1d5db',
          fontSize: '17px',
          lineHeight: 1.7,
          maxWidth: '520px',
          marginBottom: '32px',
          fontFamily: 'Inter, sans-serif',
          fontWeight: 400,
          opacity: loaded ? 1 : 0,
          transform: loaded ? 'translateY(0)' : 'translateY(24px)',
          transition: 'all 0.7s ease 0.3s',
        }}>
          {slide.sub}
        </p>

        {/* Buttons */}
        <div style={{
          display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '60px',
          opacity: loaded ? 1 : 0,
          transition: 'all 0.7s ease 0.45s',
        }}>
          <Link href="/admissions/apply" style={{
            background: '#c9a84c', color: '#0a1628',
            padding: '14px 32px', borderRadius: '4px',
            fontWeight: 700, fontSize: '13px',
            fontFamily: 'Inter, sans-serif',
            textTransform: 'uppercase', letterSpacing: '0.1em',
            transition: 'all 0.2s', display: 'inline-block',
          }}
          onMouseEnter={e => { e.target.style.background = 'white'; }}
          onMouseLeave={e => { e.target.style.background = '#c9a84c'; }}>
            Apply Now →
          </Link>
          <Link href="/admissions/undergraduate" style={{
            background: 'transparent', color: 'white',
            padding: '14px 32px', borderRadius: '4px',
            fontWeight: 600, fontSize: '13px',
            fontFamily: 'Inter, sans-serif',
            textTransform: 'uppercase', letterSpacing: '0.1em',
            border: '1px solid rgba(255,255,255,0.4)',
            transition: 'all 0.2s', display: 'inline-block',
          }}
          onMouseEnter={e => { e.target.style.borderColor = '#c9a84c'; e.target.style.color = '#c9a84c'; }}
          onMouseLeave={e => { e.target.style.borderColor = 'rgba(255,255,255,0.4)'; e.target.style.color = 'white'; }}>
            Browse Programmes
          </Link>
        </div>

        {/* Stats */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(4, auto)', gap: '0',
          width: 'fit-content',
          opacity: loaded ? 1 : 0,
          transition: 'all 0.7s ease 0.6s',
        }}>
          {stats.map((stat, i) => (
            <div key={stat.label} style={{
              borderLeft: '2px solid #c9a84c',
              paddingLeft: '16px',
              paddingRight: '32px',
            }}>
              <div style={{ fontFamily: 'Playfair Display, serif', fontSize: '28px', fontWeight: 700, color: 'white' }}>{stat.number}</div>
              <div style={{ color: '#9ca3af', fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: 'Inter, sans-serif', marginTop: '2px' }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Slide Controls */}
      {/* Prev Arrow */}
      <button
        onClick={() => setCurrent((current - 1 + slides.length) % slides.length)}
        style={{
          position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)',
          zIndex: 10, background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.3)',
          width: '44px', height: '44px', borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: 'white', fontSize: '18px', cursor: 'pointer', transition: 'all 0.2s',
        }}>
        ‹
      </button>

      {/* Next Arrow */}
      <button
        onClick={() => setCurrent((current + 1) % slides.length)}
        style={{
          position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)',
          zIndex: 10, background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.3)',
          width: '44px', height: '44px', borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: 'white', fontSize: '18px', cursor: 'pointer', transition: 'all 0.2s',
        }}>
        ›
      </button>

      {/* Slide Dots */}
      <div style={{
        position: 'absolute', bottom: '24px', left: '50%', transform: 'translateX(-50%)',
        zIndex: 10, display: 'flex', gap: '8px',
      }}>
        {slides.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} style={{
            height: '3px',
            width: current === i ? '32px' : '16px',
            borderRadius: '2px',
            background: current === i ? '#c9a84c' : 'rgba(255,255,255,0.4)',
            border: 'none', cursor: 'pointer',
            transition: 'all 0.3s ease',
          }} />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div style={{
        position: 'absolute', right: '24px', bottom: '32px', zIndex: 10,
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
      }}>
        <div style={{ width: '1px', height: '40px', background: 'rgba(255,255,255,0.3)' }} />
        <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '10px', letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: 'Inter, sans-serif', writingMode: 'vertical-rl' }}>SCROLL</span>
      </div>
    </section>
  );
}