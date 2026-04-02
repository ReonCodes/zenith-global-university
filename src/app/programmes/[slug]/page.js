'use client';
import { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const programmeData = {
  'bsc-computer-science': {
    title: 'Bachelor of Science in Computer Science',
    faculty: 'Faculty of Technology',
    duration: '3 Years',
    credential: "Bachelor's Degree",
    delivery: 'On-Campus & Online',
    language: 'English',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1600&q=80',
    overview: `Computer Scientists work on challenging, complex problems. They develop the foundation of new software technologies, both theoretical and practical. Computer science is fundamental to the newest trends in computing including machine learning, autonomous systems, cybersecurity and virtual reality.

These trends are part of everyday technologies — smartphones, cloud computing, AI assistants and more. ZGU's BSc Computer Science programme prepares you to be at the forefront of these developments, combining strong theoretical foundations with practical hands-on skills.

Our graduates work at leading technology companies, financial institutions, government agencies and startups across Uganda, East Africa and globally.`,
    requirements: [
      'Uganda Certificate of Education (UCE) with at least 5 passes including English and Mathematics',
      'Uganda Advanced Certificate of Education (UACE) with at least 2 principal passes',
      'At least one subsidiary pass in Mathematics at UACE',
      'Applicants whose first language is not English must demonstrate English proficiency',
    ],
    whatYouLearn: [
      'Programming fundamentals and advanced software development',
      'Data structures, algorithms and computational theory',
      'Artificial intelligence and machine learning',
      'Cybersecurity principles and network security',
      'Database design and management systems',
      'Web and mobile application development',
      'Software engineering and project management',
      'Research methodology and academic writing',
    ],
    careers: [
      { title: 'Software Engineer', desc: 'Design and build software systems for businesses and consumers.' },
      { title: 'Data Scientist', desc: 'Analyse complex data to drive business decisions and insights.' },
      { title: 'Cybersecurity Analyst', desc: 'Protect organizations from digital threats and breaches.' },
      { title: 'Systems Architect', desc: 'Design large-scale technical infrastructure and systems.' },
      { title: 'AI/ML Engineer', desc: 'Build intelligent systems and machine learning models.' },
      { title: 'Tech Entrepreneur', desc: 'Launch your own technology startup or product company.' },
    ],
    fees: {
      tuition: '1,800,000',
      functional: '450,000',
      total: '2,250,000',
      registration: '100,000',
      application: '50,000',
    },
  },
  'bsc-cybersecurity': {
    title: 'Bachelor of Science in Cybersecurity',
    faculty: 'Faculty of Technology',
    duration: '3 Years',
    credential: "Bachelor's Degree",
    delivery: 'On-Campus & Online',
    language: 'English',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1600&q=80',
    overview: `Cybersecurity is one of the fastest-growing fields in technology. As organizations increasingly depend on digital infrastructure, the need for skilled cybersecurity professionals has never been greater.

ZGU's BSc Cybersecurity programme trains the next generation of security experts in network defence, ethical hacking, digital forensics and security architecture. You will learn to think like an attacker to better defend against real-world threats.

Our programme is aligned with international cybersecurity frameworks and prepares graduates for certifications such as CEH, CompTIA Security+, and OSCP.`,
    requirements: [
      'Uganda Certificate of Education (UCE) with at least 5 passes including English and Mathematics',
      'Uganda Advanced Certificate of Education (UACE) with at least 2 principal passes',
      'Strong mathematical aptitude recommended',
    ],
    whatYouLearn: [
      'Network security and firewall configuration',
      'Ethical hacking and penetration testing',
      'Digital forensics and incident response',
      'Cryptography and secure communications',
      'Security architecture and risk management',
      'Malware analysis and reverse engineering',
      'Cloud security and compliance',
      'Cybersecurity law and ethics',
    ],
    careers: [
      { title: 'Penetration Tester', desc: 'Legally hack systems to find vulnerabilities before attackers do.' },
      { title: 'Security Analyst', desc: 'Monitor and protect organizational networks from threats.' },
      { title: 'Digital Forensics Expert', desc: 'Investigate cybercrime and digital evidence.' },
      { title: 'CISO', desc: 'Lead an organization\'s information security strategy.' },
      { title: 'Threat Intelligence Analyst', desc: 'Research and report on emerging cyber threats.' },
      { title: 'Security Consultant', desc: 'Advise organizations on security posture and improvements.' },
    ],
    fees: {
      tuition: '1,900,000',
      functional: '450,000',
      total: '2,350,000',
      registration: '100,000',
      application: '50,000',
    },
  },
};

const tabs = ['Overview', 'Admission Requirements', 'What You Will Learn', 'Career Opportunities', 'Tuition and Fees'];

export default function ProgrammePage() {
  const { slug } = useParams();
  const [activeTab, setActiveTab] = useState('Overview');

  const prog = programmeData[slug] || programmeData['bsc-computer-science'];

  return (
    <div style={{ background: 'white' }}>

      {/* Hero */}
      <div style={{ position: 'relative', minHeight: '480px', display: 'flex', alignItems: 'flex-end', overflow: 'hidden' }}>
        <img src={prog.image} alt={prog.title}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(10,22,40,0.95) 0%, rgba(10,22,40,0.7) 60%, rgba(10,22,40,0.3) 100%)' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '1280px', margin: '0 auto', padding: '40px 24px 60px', width: '100%' }}>
          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px', fontFamily: 'Inter, sans-serif', fontSize: '13px' }}>
            <Link href="/" style={{ color: '#9ca3af' }}>Home</Link>
            <span style={{ color: '#6b7280' }}>›</span>
            <Link href="/admissions/undergraduate" style={{ color: '#9ca3af' }}>Undergraduate</Link>
            <span style={{ color: '#6b7280' }}>›</span>
            <span style={{ color: '#c9a84c' }}>{prog.title}</span>
          </div>

          {/* Faculty Tag */}
          <div style={{
            display: 'inline-block',
            background: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.4)',
            borderRadius: '4px', padding: '6px 14px', marginBottom: '16px',
          }}>
            <span style={{ color: '#c9a84c', fontSize: '12px', fontWeight: 600, fontFamily: 'Inter, sans-serif', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              {prog.faculty}
            </span>
          </div>

          <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(28px, 4vw, 52px)', fontWeight: 700, color: 'white', marginBottom: '28px', maxWidth: '640px', lineHeight: 1.15 }}>
            {prog.title}
          </h1>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link href="/admissions/apply" style={{
              background: '#c9a84c', color: '#0a1628', padding: '12px 28px',
              borderRadius: '4px', fontWeight: 700, fontSize: '13px',
              fontFamily: 'Inter, sans-serif', textTransform: 'uppercase',
              letterSpacing: '0.08em', display: 'inline-block',
            }}>
              Apply Now →
            </Link>
            <a href="#overview" style={{
              background: 'transparent', color: 'white', padding: '12px 28px',
              borderRadius: '4px', fontWeight: 600, fontSize: '13px',
              fontFamily: 'Inter, sans-serif', textTransform: 'uppercase',
              letterSpacing: '0.08em', border: '1px solid rgba(255,255,255,0.4)',
              display: 'inline-block',
            }}>
              Learn More
            </a>
          </div>
        </div>

        {/* Scroll */}
        <div style={{ position: 'absolute', right: '32px', bottom: '32px', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
          <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: 'Inter, sans-serif', writingMode: 'vertical-rl' }}>SCROLL</span>
          <div style={{ width: '1px', height: '32px', background: 'rgba(255,255,255,0.2)' }} />
        </div>
      </div>

      {/* About Programme */}
      <div style={{ background: 'white', padding: '40px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'start' }}>
          <div>
            <span style={{ color: '#c9a84c', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', fontFamily: 'Inter, sans-serif' }}>
              About This Programme
            </span>
            <p style={{ color: '#374151', fontSize: '15px', lineHeight: 1.8, fontFamily: 'Inter, sans-serif', marginTop: '12px' }}>
              {prog.overview.split('\n\n')[0]}
            </p>
          </div>

          {/* Quick Facts */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            {[
              { label: 'CREDENTIAL', value: prog.credential },
              { label: 'DELIVERY OPTIONS', value: prog.delivery },
              { label: 'DURATION', value: `${prog.duration} — Full-time` },
              { label: 'LANGUAGE', value: prog.language },
            ].map((fact) => (
              <div key={fact.label} style={{
                border: '1px solid #e5e7eb', borderRadius: '10px',
                padding: '20px', background: '#f8f9fb',
              }}>
                <div style={{ color: '#9ca3af', fontSize: '10px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.12em', fontFamily: 'Inter, sans-serif', marginBottom: '8px' }}>{fact.label}</div>
                <div style={{ color: '#0a1628', fontSize: '15px', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>{fact.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tabbed Section — VU Style */}
      <div id="overview" style={{ maxWidth: '1280px', margin: '0 auto', padding: '20px 24px 80px', display: 'grid', gridTemplateColumns: '280px 1fr', gap: '40px', alignItems: 'start' }}>

        {/* Left Sidebar */}
        <div style={{ position: 'sticky', top: '90px' }}>
          {tabs.map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)} style={{
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              width: '100%', padding: '14px 16px', border: 'none',
              background: activeTab === tab ? '#0a1628' : 'transparent',
              color: activeTab === tab ? '#c9a84c' : '#374151',
              fontSize: '14px', fontWeight: activeTab === tab ? 600 : 400,
              fontFamily: 'Inter, sans-serif', cursor: 'pointer',
              borderBottom: '1px solid #f3f4f6', textAlign: 'left',
              transition: 'all 0.2s',
              borderLeft: activeTab === tab ? '3px solid #c9a84c' : '3px solid transparent',
            }}>
              {tab}
              <svg style={{ width: '14px', height: '14px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          ))}
          <div style={{ marginTop: '20px' }}>
            <Link href="/admissions/apply" style={{
              display: 'block', textAlign: 'center',
              background: '#c9a84c', color: '#0a1628',
              padding: '14px', borderRadius: '4px',
              fontWeight: 700, fontSize: '13px',
              fontFamily: 'Inter, sans-serif',
              textTransform: 'uppercase', letterSpacing: '0.08em',
            }}>
              Apply Now →
            </Link>
          </div>
        </div>

        {/* Right Content */}
        <div>

          {activeTab === 'Overview' && (
            <div>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '32px', fontWeight: 700, color: '#0a1628', marginBottom: '8px' }}>Overview</h2>
              <div style={{ width: '40px', height: '3px', background: '#c9a84c', marginBottom: '24px' }} />
              {prog.overview.split('\n\n').map((para, i) => (
                <p key={i} style={{ color: '#374151', fontSize: '15px', lineHeight: 1.8, fontFamily: 'Inter, sans-serif', marginBottom: '16px' }}>{para}</p>
              ))}
            </div>
          )}

          {activeTab === 'Admission Requirements' && (
            <div>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '32px', fontWeight: 700, color: '#0a1628', marginBottom: '8px' }}>Admission Requirements</h2>
              <div style={{ width: '40px', height: '3px', background: '#c9a84c', marginBottom: '24px' }} />

              {/* Entrance Requirements */}
              <div style={{ background: '#0a1628', borderRadius: '8px', padding: '16px 20px', marginBottom: '4px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer' }}>
                <span style={{ color: 'white', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>Entrance Requirements</span>
                <span style={{ color: '#c9a84c' }}>▲</span>
              </div>
              <div style={{ border: '1px solid #e5e7eb', borderRadius: '0 0 8px 8px', padding: '20px', marginBottom: '16px' }}>
                <p style={{ color: '#6b7280', fontSize: '13px', fontStyle: 'italic', marginBottom: '12px', fontFamily: 'Inter, sans-serif' }}>
                  Normal Entry Requirements for Degree Courses (in line with NCHE requirements):
                </p>
                {prog.requirements.map((req, i) => (
                  <div key={i} style={{ display: 'flex', gap: '12px', marginBottom: '10px', alignItems: 'flex-start' }}>
                    <span style={{ color: '#0a1628', fontWeight: 700, fontFamily: 'Inter, sans-serif', flexShrink: 0 }}>{i + 1}.</span>
                    <p style={{ color: '#374151', fontSize: '14px', fontFamily: 'Inter, sans-serif', lineHeight: 1.6 }}>{req}</p>
                  </div>
                ))}
              </div>

              {/* Additional Requirements */}
              <div style={{ background: '#0a1628', borderRadius: '8px', padding: '16px 20px', marginBottom: '4px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ color: 'white', fontWeight: 600, fontFamily: 'Inter, sans-serif' }}>Additional Requirements & Considerations</span>
                <span style={{ color: '#c9a84c' }}>▲</span>
              </div>
              <div style={{ border: '1px solid #e5e7eb', borderRadius: '0 0 8px 8px', padding: '20px' }}>
                <p style={{ color: '#374151', fontSize: '14px', fontFamily: 'Inter, sans-serif', lineHeight: 1.7 }}>
                  Applicants whose first language is not English will be required to demonstrate a proficiency in the English language by passing an English proficiency test conducted by the University. Equivalent qualifications from recognised institutions may also be considered on a case-by-case basis.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'What You Will Learn' && (
            <div>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '32px', fontWeight: 700, color: '#0a1628', marginBottom: '8px' }}>What You Will Learn</h2>
              <div style={{ width: '40px', height: '3px', background: '#c9a84c', marginBottom: '24px' }} />
              <p style={{ color: '#6b7280', fontSize: '15px', fontFamily: 'Inter, sans-serif', lineHeight: 1.7, marginBottom: '28px' }}>
                This programme combines theoretical foundations with practical skills. Here are the core areas you will master during your studies at ZGU:
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                {prog.whatYouLearn.map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '12px', padding: '16px', background: '#f8f9fb', borderRadius: '8px', alignItems: 'flex-start' }}>
                    <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#0a1628', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <span style={{ color: '#c9a84c', fontSize: '12px', fontWeight: 700 }}>✓</span>
                    </div>
                    <p style={{ color: '#374151', fontSize: '13px', fontFamily: 'Inter, sans-serif', lineHeight: 1.5 }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'Career Opportunities' && (
            <div>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '32px', fontWeight: 700, color: '#0a1628', marginBottom: '8px' }}>Career Opportunities</h2>
              <div style={{ width: '40px', height: '3px', background: '#c9a84c', marginBottom: '24px' }} />
              <p style={{ color: '#6b7280', fontSize: '15px', fontFamily: 'Inter, sans-serif', lineHeight: 1.7, marginBottom: '28px' }}>
                Our graduates are employed across Uganda, East Africa and internationally. With a {prog.title}, you can pursue careers in:
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                {prog.careers.map((career) => (
                  <div key={career.title} style={{ padding: '20px', border: '1px solid #e5e7eb', borderRadius: '10px', borderTop: '3px solid #c9a84c', background: 'white' }}>
                    <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '17px', fontWeight: 600, color: '#0a1628', marginBottom: '8px' }}>{career.title}</h3>
                    <p style={{ color: '#6b7280', fontSize: '13px', fontFamily: 'Inter, sans-serif', lineHeight: 1.6 }}>{career.desc}</p>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: '32px', background: '#0a1628', borderRadius: '12px', padding: '28px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
                <div>
                  <div style={{ color: '#c9a84c', fontSize: '32px', fontFamily: 'Playfair Display, serif', fontWeight: 700 }}>95%</div>
                  <div style={{ color: '#9ca3af', fontSize: '13px', fontFamily: 'Inter, sans-serif' }}>of ZGU graduates employed within 6 months</div>
                </div>
                <Link href="/admissions/apply" style={{
                  background: '#c9a84c', color: '#0a1628',
                  padding: '12px 28px', borderRadius: '4px',
                  fontWeight: 700, fontSize: '13px',
                  fontFamily: 'Inter, sans-serif',
                  textTransform: 'uppercase', letterSpacing: '0.08em',
                  display: 'inline-block',
                }}>
                  Start Your Application
                </Link>
              </div>
            </div>
          )}

          {activeTab === 'Tuition and Fees' && (
            <div>
              <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '32px', fontWeight: 700, color: '#0a1628', marginBottom: '8px' }}>Tuition and Fees</h2>
              <div style={{ width: '40px', height: '3px', background: '#c9a84c', marginBottom: '24px' }} />
              <p style={{ color: '#6b7280', fontSize: '14px', fontFamily: 'Inter, sans-serif', marginBottom: '24px', lineHeight: 1.6 }}>
                The tuition and fee amounts are estimates based on the current academic year rates. For financial planning purposes, please use these totals as an approximate estimate of your costs. All amounts in Uganda Shillings (UGX) per semester.
              </p>

              {/* Fees Image Banner — like VU */}
              <div style={{
                background: 'linear-gradient(135deg, #0a1628 0%, #1a3a5c 100%)',
                borderRadius: '12px', padding: '32px', marginBottom: '24px',
                position: 'relative', overflow: 'hidden',
              }}>
                <div style={{ position: 'absolute', top: 0, right: 0, width: '200px', height: '100%', background: 'rgba(201,168,76,0.05)' }} />
                <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                  <div style={{ color: '#c9a84c', fontSize: '11px', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: 'Inter, sans-serif', marginBottom: '6px' }}>
                    Zenith Global University
                  </div>
                  <h3 style={{ color: 'white', fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, marginBottom: '4px' }}>
                    TUITION & FUNCTIONAL FEES 2025/2026
                  </h3>
                  <div style={{ color: '#c9a84c', fontSize: '13px', fontFamily: 'Inter, sans-serif' }}>
                    {prog.faculty.toUpperCase()}
                  </div>
                </div>

                <div style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '8px', overflow: 'hidden' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ background: 'rgba(201,168,76,0.2)' }}>
                        <th style={{ padding: '12px 16px', textAlign: 'left', color: '#c9a84c', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: 'Inter, sans-serif' }}>Fee Type</th>
                        <th style={{ padding: '12px 16px', textAlign: 'center', color: '#c9a84c', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: 'Inter, sans-serif' }}>When Payable</th>
                        <th style={{ padding: '12px 16px', textAlign: 'right', color: '#c9a84c', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: 'Inter, sans-serif' }}>Amount (UGX)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { type: 'Application Fee', when: 'Once on Entry', amount: prog.fees.application },
                        { type: 'Registration Fee', when: 'Once on Entry', amount: prog.fees.registration },
                        { type: 'Functional Fees', when: 'Per Semester', amount: prog.fees.functional },
                        { type: 'Tuition Fees', when: 'Per Semester', amount: prog.fees.tuition },
                      ].map((fee, i) => (
                        <tr key={fee.type} style={{ borderTop: '1px solid rgba(255,255,255,0.08)', background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.03)' }}>
                          <td style={{ padding: '12px 16px', color: 'white', fontSize: '14px', fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>{fee.type}</td>
                          <td style={{ padding: '12px 16px', color: '#9ca3af', fontSize: '13px', fontFamily: 'Inter, sans-serif', textAlign: 'center' }}>{fee.when}</td>
                          <td style={{ padding: '12px 16px', color: '#c9a84c', fontSize: '14px', fontFamily: 'Inter, sans-serif', fontWeight: 700, textAlign: 'right' }}>{fee.amount}</td>
                        </tr>
                      ))}
                      <tr style={{ borderTop: '2px solid rgba(201,168,76,0.4)', background: 'rgba(201,168,76,0.1)' }}>
                        <td style={{ padding: '14px 16px', color: 'white', fontSize: '15px', fontFamily: 'Inter, sans-serif', fontWeight: 700 }}>Total Per Semester</td>
                        <td />
                        <td style={{ padding: '14px 16px', color: '#c9a84c', fontSize: '18px', fontFamily: 'Playfair Display, serif', fontWeight: 700, textAlign: 'right' }}>
                          UGX {prog.fees.total}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <a href="/ZGU_Fees_Structure_2025_2026.pdf" download style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  background: '#0a1628', color: 'white',
                  padding: '12px 24px', borderRadius: '4px',
                  fontWeight: 600, fontSize: '13px',
                  fontFamily: 'Inter, sans-serif',
                  textTransform: 'uppercase', letterSpacing: '0.08em',
                }}>
                  <svg style={{ width: '16px', height: '16px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Fee Structure
                </a>
                <Link href="/admissions/apply" style={{
                  display: 'inline-block',
                  background: '#c9a84c', color: '#0a1628',
                  padding: '12px 24px', borderRadius: '4px',
                  fontWeight: 700, fontSize: '13px',
                  fontFamily: 'Inter, sans-serif',
                  textTransform: 'uppercase', letterSpacing: '0.08em',
                }}>
                  Apply Now →
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}