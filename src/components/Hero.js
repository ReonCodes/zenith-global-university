'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const stats = [
  { number: '15,000+', label: 'Students Enrolled' },
  { number: '200+', label: 'Academic Programmes' },
  { number: '50+', label: 'Partner Universities' },
  { number: '95%', label: 'Graduate Employment' },
];

const slides = [
  'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1600&q=80',
  'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=1600&q=80',
  'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=1600&q=80',
];

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  

  useEffect(() => {
    setLoaded(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">

      {/* Sliding Image Background */}
      {slides.map((slide, index) => (
        <div
          key={slide}
          className="absolute inset-0 z-0 transition-opacity duration-1000"
          style={{ opacity: currentSlide === index ? 1 : 0 }}
        >
          <img
            src={slide}
            alt="ZGU Campus"
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--navy)]/95 via-[var(--navy)]/80 to-[var(--navy)]/40 z-10" />

      {/* Gold bottom line accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--gold)] via-[var(--gold-light)] to-transparent z-20" />

      {/* Slide Dots */}
<div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-30 flex gap-3">
  {slides.map((_, index) => (
    <button
      key={index}
      onClick={() => setCurrentSlide(index)}
      className={`h-2 rounded-full transition-all duration-300 ${
        currentSlide === index
          ? 'bg-[var(--gold)] w-8'
          : 'bg-white/60 w-2'
      }`}
    />
  ))}
</div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 py-24 w-full">
        <div className="max-w-3xl">

          {/* Badge */}
          <div className={`inline-flex items-center gap-2 bg-[var(--gold)]/20 border border-[var(--gold)]/40 rounded-full px-4 py-1.5 mb-6 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="w-2 h-2 rounded-full bg-[var(--gold)] animate-pulse" />
            <span className="text-[var(--gold)] text-xs font-semibold tracking-widest uppercase">Now Accepting Applications — 2025/2026</span>
          </div>

          {/* Main Heading */}
          <h1
            className={`text-5xl md:text-7xl font-bold text-white leading-tight mb-4 transition-all duration-700 delay-150 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Rise Beyond
            <span className="block text-[var(--gold)]">Limits.</span>
          </h1>

          {/* Subtitle */}
          <p className={`text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-xl transition-all duration-700 delay-300 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            Zenith Global University — where world-class education meets African excellence.
            Shaping the leaders, innovators, and change-makers of tomorrow.
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-wrap gap-4 mb-16 transition-all duration-700 delay-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <Link
              href="/admissions"
              className="bg-[var(--gold)] text-[var(--navy)] px-8 py-4 rounded font-bold text-sm uppercase tracking-widest hover:bg-[var(--gold-light)] transition-all duration-200 shadow-lg shadow-[var(--gold)]/20"
            >
              Apply Now
            </Link>
            <Link
              href="/about"
              className="border border-white/40 text-white px-8 py-4 rounded font-semibold text-sm uppercase tracking-widest hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all duration-200"
            >
              Explore ZGU
            </Link>
          </div>

          {/* Stats */}
          <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-700 delay-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            {stats.map((stat) => (
              <div key={stat.label} className="border-l-2 border-[var(--gold)] pl-4">
                <div className="text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: 'Playfair Display, serif' }}>
                  {stat.number}
                </div>
                <div className="text-xs text-gray-400 uppercase tracking-wide mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/40 text-xs uppercase tracking-widest">Scroll</span>
        <svg className="w-4 h-4 text-[var(--gold)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}