'use client';

'use client';
import Link from 'next/link';

const programmes = [
  {
    code: 'BSC-CS',
    slug: 'bsc-computer-science',
    title: 'BSc Computer Science',
    duration: '3 Years',
    faculty: 'Technology',
    overview: 'A comprehensive programme covering algorithms, software development, AI, databases and cybersecurity.',
    careers: ['Software Engineer', 'Data Scientist', 'Cybersecurity Analyst', 'Systems Architect'],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&q=80',
  },
  {
    code: 'BSC-SE',
    slug: 'bsc-software-engineering',
    title: 'BSc Software Engineering',
    duration: '3 Years',
    faculty: 'Technology',
    overview: 'Focused on building scalable, production-grade software systems for real-world applications.',
    careers: ['Frontend Developer', 'Backend Developer', 'DevOps Engineer', 'Product Manager'],
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&q=80',
  },
  {
    code: 'BSC-CYB',
    slug: 'bsc-cybersecurity',
    title: 'BSc Cybersecurity',
    duration: '3 Years',
    faculty: 'Technology',
    overview: 'Training the next generation of security experts in network defence, ethical hacking and digital forensics.',
    careers: ['Security Analyst', 'Penetration Tester', 'CISO', 'Forensics Investigator'],
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&q=80',
  },
  {
    code: 'BSC-DS',
    slug: 'bsc-data-science',
    title: 'BSc Data Science & AI',
    duration: '3 Years',
    faculty: 'Technology',
    overview: 'Combining statistics, programming and machine learning to extract insights from complex data.',
    careers: ['Data Scientist', 'ML Engineer', 'Business Analyst', 'AI Researcher'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=80',
  },
  {
    code: 'LLB',
    slug: 'llb-law',
    title: 'Bachelor of Laws (LLB)',
    duration: '4 Years',
    faculty: 'Law',
    overview: 'A rigorous legal education covering constitutional law, commercial law, human rights and legal practice.',
    careers: ['Advocate', 'State Attorney', 'Legal Consultant', 'Magistrate'],
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&q=80',
  },
  {
    code: 'BBA',
    slug: 'bba-business-administration',
    title: 'BBA Business Administration',
    duration: '3 Years',
    faculty: 'Business',
    overview: 'A broad-based business degree covering management, marketing, finance, HR and entrepreneurship.',
    careers: ['Business Manager', 'Marketing Manager', 'Entrepreneur', 'HR Manager'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
  },
  {
    code: 'BSC-ACC',
    slug: 'bsc-accounting-finance',
    title: 'BSc Accounting & Finance',
    duration: '3 Years',
    faculty: 'Business',
    overview: 'Professional accounting education aligned with ICPAU and global accounting standards.',
    careers: ['Accountant', 'Financial Analyst', 'Auditor', 'Tax Consultant'],
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&q=80',
  },
  {
    code: 'BSC-NUR',
    slug: 'bsc-nursing',
    title: 'BSc Nursing',
    duration: '4 Years',
    faculty: 'Health Sciences',
    overview: 'Comprehensive nursing training combining theory with hands-on clinical practice across all specialties.',
    careers: ['Registered Nurse', 'Midwife', 'Clinical Officer', 'Health Administrator'],
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80',
  },
  {
    code: 'BSC-PH',
    slug: 'bsc-public-health',
    title: 'BSc Public Health',
    duration: '3 Years',
    faculty: 'Health Sciences',
    overview: "Training public health professionals to address Uganda's and Africa's most pressing health challenges.",
    careers: ['Public Health Officer', 'Epidemiologist', 'Health Policy Analyst', 'NGO Worker'],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&q=80',
  },
  {
    code: 'BED-A',
    slug: 'bed-arts',
    title: 'BEd Arts',
    duration: '3 Years',
    faculty: 'Education',
    overview: 'Preparing passionate, skilled educators for Uganda\'s arts and humanities classrooms.',
    careers: ['Teacher', 'Education Officer', 'Curriculum Developer', 'School Administrator'],
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&q=80',
  },
  {
    code: 'BED-S',
    slug: 'bed-science',
    title: 'BEd Science',
    duration: '3 Years',
    faculty: 'Education',
    overview: 'Developing qualified science educators equipped with modern pedagogy and subject expertise.',
    careers: ['Science Teacher', 'Lab Technician', 'Education Researcher', 'School Principal'],
    image: 'https://images.unsplash.com/photo-1532094349884-543559373717?w=400&q=80',
  },
  {
    code: 'BA-IR',
    slug: 'ba-international-relations',
    title: 'BA International Relations',
    duration: '3 Years',
    faculty: 'Social Sciences',
    overview: 'Understanding global politics, diplomacy and international organisations in a rapidly changing world.',
    careers: ['Diplomat', 'UN Officer', 'Policy Analyst', 'NGO Director'],
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&q=80',
  },
];

const facultyColors = {
  Technology: '#1e3a5f',
  Law: '#1a2f4a',
  Business: '#0f2a40',
  'Health Sciences': '#1a3040',
  Education: '#152840',
  'Social Sciences': '#0a2030',
};

export default function UndergraduatePage() {
  return (
    <div style={{ background: 'white' }}>

      {/* Hero */}
      <div style={{
        background: '#0a1628', position: 'relative', overflow: 'hidden',
        minHeight: '420px', display: 'flex', alignItems: 'flex-end',
      }}>
        <img
          src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&q=80"
          alt="Undergraduate"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.3 }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(10,22,40,0.97) 40%, rgba(10,22,40,0.6) 100%)' }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '80px 24px', position: 'relative', zIndex: 1, width: '100%' }}>

          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#9ca3af', fontSize: '13px', marginBottom: '16px', fontFamily: 'Inter, sans-serif' }}>
            <Link href="/" style={{ color: '#9ca3af' }}>Home</Link>
            <span>›</span>
            <Link href="/admissions" style={{ color: '#9ca3af' }}>Admissions</Link>
            <span>›</span>
            <span style={{ color: '#c9a84c' }}>Undergraduate</span>
          </div>

          {/* Tag */}
          <div style={{
            display: 'inline-block',
            background: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.4)',
            borderRadius: '4px', padding: '6px 14px', marginBottom: '16px',
          }}>
            <span style={{ color: '#c9a84c', fontSize: '12px', fontWeight: 600, fontFamily: 'Inter, sans-serif', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              PROGRAMMES
            </span>
          </div>

          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: '52px', fontWeight: 700, color: 'white', marginBottom: '16px', lineHeight: 1.1 }}>
            Undergraduate<br />Programmes
          </h1>
          <p style={{ color: '#9ca3af', fontSize: '18px', maxWidth: '520px', fontFamily: 'Inter, sans-serif', lineHeight: 1.7, marginBottom: '28px' }}>
            Explore our range of undergraduate degree programmes designed to provide practical, hands-on skills for the real world.
          </p>
          <Link href="/admissions/apply" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            background: '#c9a84c', color: '#0a1628',
            padding: '13px 28px', borderRadius: '4px',
            fontWeight: 700, fontSize: '13px',
            fontFamily: 'Inter, sans-serif',
            textTransform: 'uppercase', letterSpacing: '0.08em',
          }}>
            Browse Programmes →
          </Link>
        </div>
      </div>

      {/* Programmes Section */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '64px 24px' }}>

        {/* Section Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '40px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <span style={{ color: '#c9a84c', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', fontFamily: 'Inter, sans-serif' }}>
              Our Programmes
            </span>
            <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '36px', fontWeight: 700, color: '#0a1628', marginTop: '8px' }}>
              Undergraduate Programmes
            </h2>
            <div style={{ width: '40px', height: '3px', background: '#c9a84c', marginTop: '10px' }} />
          </div>
          <div style={{ color: '#6b7280', fontSize: '15px', fontFamily: 'Inter, sans-serif' }}>
            <span style={{ fontWeight: 700, color: '#0a1628', fontSize: '20px' }}>{programmes.length}</span> programmes available
          </div>
        </div>

        {/* Programme Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
          {programmes.map((prog) => (
            <div
              key={prog.code}
              style={{
                background: 'white', borderRadius: '16px', overflow: 'hidden',
                boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                border: '1px solid #f3f4f6',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = '0 16px 40px rgba(0,0,0,0.1)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.06)';
              }}
            >
              {/* Image */}
              <div style={{ position: 'relative', height: '180px', overflow: 'hidden' }}>
                <img src={prog.image} alt={prog.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{
                  position: 'absolute', inset: 0,
                  background: `linear-gradient(to bottom, ${facultyColors[prog.faculty] || '#0a1628'}99 0%, ${facultyColors[prog.faculty] || '#0a1628'}ee 100%)`,
                }} />
                <div style={{ position: 'absolute', bottom: '14px', left: '16px', right: '16px' }}>
                  <span style={{ color: '#c9a84c', fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', fontFamily: 'Inter, sans-serif' }}>
                    {prog.faculty}
                  </span>
                  <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '18px', fontWeight: 700, color: 'white', marginTop: '3px', lineHeight: 1.2 }}>
                    {prog.title}
                  </h3>
                </div>
              </div>

              {/* Body */}
              <div style={{ padding: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                  <span style={{ color: '#6b7280', fontSize: '12px', fontFamily: 'Inter, sans-serif' }}>⏱ {prog.duration}</span>
                  <span style={{ color: '#e5e7eb' }}>•</span>
                  <span style={{ color: '#6b7280', fontSize: '12px', fontFamily: 'Inter, sans-serif' }}>Bachelor's Degree</span>
                </div>
                <p style={{ color: '#6b7280', fontSize: '13px', lineHeight: 1.6, fontFamily: 'Inter, sans-serif', marginBottom: '14px' }}>
                  {prog.overview}
                </p>

                {/* Career Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
                  {prog.careers.map((career) => (
                    <span key={career} style={{
                      background: '#f8f9fb', color: '#374151',
                      fontSize: '11px', fontFamily: 'Inter, sans-serif',
                      padding: '4px 10px', borderRadius: '100px',
                      border: '1px solid #e5e7eb',
                    }}>
                      {career}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div style={{ display: 'flex', gap: '8px' }}>
                  <Link
                    href={`/programmes/${prog.slug}`}
                    style={{
                      flex: 1, textAlign: 'center',
                      background: '#0a1628', color: 'white',
                      padding: '11px', borderRadius: '6px',
                      fontWeight: 600, fontSize: '12px',
                      fontFamily: 'Inter, sans-serif',
                      textTransform: 'uppercase', letterSpacing: '0.06em',
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={e => { e.target.style.background = '#c9a84c'; e.target.style.color = '#0a1628'; }}
                    onMouseLeave={e => { e.target.style.background = '#0a1628'; e.target.style.color = 'white'; }}
                  >
                    View Programme
                  </Link>
                  <Link
                    href="/admissions/apply"
                    style={{
                      flex: 1, textAlign: 'center',
                      background: '#c9a84c', color: '#0a1628',
                      padding: '11px', borderRadius: '6px',
                      fontWeight: 700, fontSize: '12px',
                      fontFamily: 'Inter, sans-serif',
                      textTransform: 'uppercase', letterSpacing: '0.06em',
                      transition: 'all 0.2s',
                    }}
                    onMouseEnter={e => { e.target.style.background = '#0a1628'; e.target.style.color = 'white'; }}
                    onMouseLeave={e => { e.target.style.background = '#c9a84c'; e.target.style.color = '#0a1628'; }}
                  >
                    Apply →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Banner */}
      <div style={{ background: '#0a1628', padding: '64px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '36px', fontWeight: 700, color: 'white', marginBottom: '14px' }}>
            Ready to Rise Beyond Limits?
          </h2>
          <p style={{ color: '#9ca3af', fontSize: '16px', fontFamily: 'Inter, sans-serif', lineHeight: 1.7, marginBottom: '28px' }}>
            Join 15,000+ students already transforming their futures at Zenith Global University.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/admissions/apply" style={{
              background: '#c9a84c', color: '#0a1628',
              padding: '14px 36px', borderRadius: '4px',
              fontWeight: 700, fontSize: '13px',
              fontFamily: 'Inter, sans-serif',
              textTransform: 'uppercase', letterSpacing: '0.1em',
              display: 'inline-block',
            }}>
              Apply Now
            </Link>
            <Link href="/contact" style={{
              background: 'transparent', color: 'white',
              padding: '14px 36px', borderRadius: '4px',
              fontWeight: 600, fontSize: '13px',
              fontFamily: 'Inter, sans-serif',
              textTransform: 'uppercase', letterSpacing: '0.1em',
              border: '1px solid rgba(255,255,255,0.3)',
              display: 'inline-block',
            }}>
              Contact Admissions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
