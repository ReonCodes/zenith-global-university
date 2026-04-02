'use client';
import Link from 'next/link';

const programmes = [
  {
    icon: '💻',
    faculty: 'Faculty of Technology',
    tag: 'Technology',
    description: 'Computer Science, Software Engineering, Cybersecurity, Data Science & AI.',
    courses: ['BSc Computer Science', 'BSc Software Engineering', 'BSc Cybersecurity', 'BSc Data Science & AI'],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80',
    href: '/admissions/undergraduate',
    color: '#1e3a5f',
  },
  {
    icon: '⚖️',
    faculty: 'Faculty of Law',
    tag: 'Law',
    description: 'Commercial Law, Human Rights, International Law & Legal Practice.',
    courses: ['LLB Law (4 Years)', 'LLM Commercial Law', 'Diploma in Legal Practice'],
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=600&q=80',
    href: '/admissions/undergraduate',
    color: '#1a2f4a',
  },
  {
    icon: '📊',
    faculty: 'Faculty of Business',
    tag: 'Business',
    description: 'Business Administration, Accounting, Finance, Marketing & Entrepreneurship.',
    courses: ['BBA Business Administration', 'BSc Accounting & Finance', 'MBA'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
    href: '/admissions/undergraduate',
    color: '#0f2a40',
  },
  {
    icon: '🏥',
    faculty: 'Faculty of Health Sciences',
    tag: 'Health',
    description: 'Nursing, Public Health, Pharmacy, Medical Laboratory Science.',
    courses: ['BSc Nursing (4 Years)', 'BSc Public Health', 'Diploma in Pharmacy'],
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=600&q=80',
    href: '/admissions/undergraduate',
    color: '#1a3040',
  },
  {
    icon: '🎓',
    faculty: 'Faculty of Education',
    tag: 'Education',
    description: 'Education, Curriculum Development, Special Needs & Early Childhood.',
    courses: ['BEd Arts', 'BEd Science', 'MEd Educational Leadership'],
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80',
    href: '/admissions/undergraduate',
    color: '#152840',
  },
  {
    icon: '🌍',
    faculty: 'Faculty of Social Sciences',
    tag: 'Social Sciences',
    description: 'International Relations, Development Studies, Psychology & Sociology.',
    courses: ['BA International Relations', 'BSc Psychology', 'MA Development Studies'],
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80',
    href: '/admissions/undergraduate',
    color: '#0a2030',
  },
];

export default function Programmes() {
  return (
    <section style={{ padding: '96px 0', background: '#f8f9fb' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <span style={{ color: '#c9a84c', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', fontFamily: 'Inter, sans-serif' }}>
            Academic Excellence
          </span>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '42px', fontWeight: 700, color: '#0a1628', marginTop: '10px', marginBottom: '14px' }}>
            Explore Our Programmes
          </h2>
          <p style={{ color: '#6b7280', fontSize: '16px', maxWidth: '560px', margin: '0 auto', fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
            Choose from 200+ world-class programmes designed to prepare you for leadership in a rapidly changing global landscape.
          </p>
          <div style={{ width: '48px', height: '3px', background: '#c9a84c', margin: '20px auto 0' }} />
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          {programmes.map((prog) => (
            <div key={prog.faculty} style={{
              background: 'white', borderRadius: '16px', overflow: 'hidden',
              boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              cursor: 'pointer',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-6px)'; e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.12)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.06)'; }}>

              {/* Image Top */}
              <div style={{ position: 'relative', height: '180px', overflow: 'hidden' }}>
                <img src={prog.image} alt={prog.faculty}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} />
                <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to bottom, ${prog.color}99 0%, ${prog.color}ee 100%)` }} />
                <div style={{ position: 'absolute', bottom: '16px', left: '16px', right: '16px' }}>
                  <span style={{ color: '#c9a84c', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: 'Inter, sans-serif' }}>
                    {prog.tag}
                  </span>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '18px', fontWeight: 700, color: 'white', marginTop: '4px', lineHeight: 1.2 }}>
                    {prog.faculty}
                  </h3>
                </div>
              </div>

              {/* Body */}
              <div style={{ padding: '20px 20px 24px' }}>
                <p style={{ color: '#6b7280', fontSize: '13px', lineHeight: 1.6, fontFamily: 'Inter, sans-serif', marginBottom: '14px' }}>
                  {prog.description}
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '18px' }}>
                  {prog.courses.map((course) => (
                    <div key={course} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#c9a84c', flexShrink: 0 }} />
                      <span style={{ color: '#374151', fontSize: '13px', fontFamily: 'Inter, sans-serif' }}>{course}</span>
                    </div>
                  ))}
                </div>
                <Link href={prog.href} style={{
                  display: 'inline-flex', alignItems: 'center', gap: '6px',
                  color: '#0a1628', fontSize: '12px', fontWeight: 700,
                  fontFamily: 'Inter, sans-serif', textTransform: 'uppercase',
                  letterSpacing: '0.08em', transition: 'color 0.2s',
                }}
                onMouseEnter={e => { e.target.style.color = '#c9a84c'; }}
                onMouseLeave={e => { e.target.style.color = '#0a1628'; }}>
                  View All Programmes →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <Link href="/admissions/undergraduate" style={{
            background: '#0a1628', color: 'white',
            padding: '14px 40px', borderRadius: '4px',
            fontWeight: 700, fontSize: '13px',
            fontFamily: 'Inter, sans-serif',
            textTransform: 'uppercase', letterSpacing: '0.1em',
            display: 'inline-block', transition: 'all 0.2s',
          }}
          onMouseEnter={e => { e.target.style.background = '#c9a84c'; e.target.style.color = '#0a1628'; }}
          onMouseLeave={e => { e.target.style.background = '#0a1628'; e.target.style.color = 'white'; }}>
            Browse All 200+ Programmes
          </Link>
        </div>
      </div>
    </section>
  );
}
