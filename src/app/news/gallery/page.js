'use client';
import { useState } from 'react';
import Link from 'next/link';

const images = [
  { src: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80', caption: 'ZGU Main Campus', category: 'Campus' },
  { src: 'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=800&q=80', caption: 'Library & Learning Centre', category: 'Facilities' },
  { src: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80', caption: 'Graduation Ceremony 2025', category: 'Events' },
  { src: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800&q=80', caption: 'Students in Lecture', category: 'Academic' },
  { src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80', caption: 'Campus Life', category: 'Students' },
  { src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80', caption: 'Sports & Recreation Centre', category: 'Facilities' },
  { src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80', caption: 'Annual Career Fair', category: 'Events' },
  { src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80', caption: 'Student Collaboration', category: 'Students' },
  { src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80', caption: 'Innovation Hub', category: 'Facilities' },
  { src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80', caption: 'Student Community', category: 'Students' },
  { src: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80', caption: 'Cybersecurity Lab', category: 'Academic' },
  { src: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80', caption: 'Health Sciences Lab', category: 'Academic' },
];

const categories = ['All', 'Campus', 'Facilities', 'Events', 'Academic', 'Students'];

export default function GalleryPage() {
  const [active, setActive] = useState('All');
  const [selected, setSelected] = useState(null);

  const filtered = active === 'All' ? images : images.filter(img => img.category === active);

  return (
    <div style={{background: 'white'}}>

      {/* Hero */}
      <div style={{background: '#0a1628', padding: '96px 24px', position: 'relative', overflow: 'hidden'}}>
        <div style={{position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, rgba(201,168,76,0.12) 0%, transparent 60%)'}} />
        <div style={{maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1}}>
          <div style={{display: 'flex', alignItems: 'center', gap: '8px', color: '#9ca3af', fontSize: '13px', marginBottom: '16px', fontFamily: 'Inter, sans-serif'}}>
            <Link href="/" style={{color: '#9ca3af'}} className="hover:text-yellow-400">Home</Link>
            <span>/</span>
            <Link href="/news" style={{color: '#9ca3af'}} className="hover:text-yellow-400">News & Gallery</Link>
            <span>/</span>
            <span style={{color: '#c9a84c'}}>Photo Gallery</span>
          </div>
          <h1 style={{fontFamily: 'Playfair Display, serif', fontSize: '56px', fontWeight: 700, color: 'white', marginBottom: '12px'}}>Photo Gallery</h1>
          <p style={{color: '#9ca3af', fontSize: '18px', maxWidth: '600px', fontFamily: 'Inter, sans-serif'}}>A visual journey through life at Zenith Global University.</p>
        </div>
      </div>

      <section style={{padding: '80px 24px', background: '#f8f9fb'}}>
        <div style={{maxWidth: '1280px', margin: '0 auto'}}>

          {/* Filter Tabs */}
          <div style={{display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '40px'}}>
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActive(cat)}
                style={{
                  padding: '8px 20px',
                  borderRadius: '100px',
                  fontSize: '13px',
                  fontWeight: 600,
                  fontFamily: 'Inter, sans-serif',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  border: 'none',
                  background: active === cat ? '#0a1628' : 'white',
                  color: active === cat ? 'white' : '#374151',
                  boxShadow: active === cat ? 'none' : '0 1px 4px rgba(0,0,0,0.08)',
                }}>
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '16px'}}>
            {filtered.map((img, index) => (
              <div
                key={index}
                onClick={() => setSelected(img)}
                style={{
                  borderRadius: '12px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  position: 'relative',
                  aspectRatio: '4/3',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                }}
                className="hover:-translate-y-1 hover:shadow-xl group"
              >
                <img src={img.src} alt={img.caption}
                  style={{width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s'}}
                  className="group-hover:scale-110" />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(to top, rgba(10,22,40,0.85) 0%, transparent 50%)',
                  opacity: 0, transition: 'opacity 0.3s'
                }} className="group-hover:opacity-100">
                  <div style={{position: 'absolute', bottom: '16px', left: '16px', right: '16px'}}>
                    <span style={{background: '#c9a84c', color: '#0a1628', fontSize: '10px', fontWeight: 700, padding: '3px 10px', borderRadius: '20px', textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: 'Inter, sans-serif'}}>
                      {img.category}
                    </span>
                    <p style={{color: 'white', fontSize: '14px', fontWeight: 600, marginTop: '6px', fontFamily: 'Playfair Display, serif'}}>{img.caption}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selected && (
        <div
          onClick={() => setSelected(null)}
          style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            background: 'rgba(0,0,0,0.92)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '24px',
          }}>
          <div onClick={(e) => e.stopPropagation()}
            style={{maxWidth: '900px', width: '100%', position: 'relative'}}>
            <img src={selected.src} alt={selected.caption}
              style={{width: '100%', borderRadius: '12px', maxHeight: '75vh', objectFit: 'contain'}} />
            <div style={{padding: '16px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
              <div>
                <span style={{color: '#c9a84c', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: 'Inter, sans-serif'}}>{selected.category}</span>
                <p style={{color: 'white', fontSize: '18px', fontFamily: 'Playfair Display, serif', marginTop: '4px'}}>{selected.caption}</p>
              </div>
              <button onClick={() => setSelected(null)}
                style={{color: 'white', background: 'rgba(255,255,255,0.1)', border: 'none', width: '40px', height: '40px', borderRadius: '50%', fontSize: '20px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                ✕
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}