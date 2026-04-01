'use client';
import { useState } from 'react';
import Link from 'next/link';

const tabs = ['About ZGU', 'Our Teams', 'Governance', 'Partnerships'];

const team = [
  { name: 'Prof. Lwanyaga Ibrahim', role: 'Vice Chancellor & Founder', image: '/reon.jpg', bio: 'BSc Computer Science, Victoria University Kampala. Visionary technologist, software engineer and academic leader. Founded ZGU to build Africa\'s most innovative university. Expert in AI, fullstack systems and cybersecurity. Led ZGU to 15,000+ students and 50+ global partnerships.', phd: 'Victoria University Kampala', specialty: 'Technology & Innovation' },
  { name: 'Dr. Sarah Nakato', role: 'Deputy Vice Chancellor — Academics', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80', bio: 'PhD Harvard University. Over 18 years in curriculum development and academic policy across East Africa.', phd: 'Harvard University', specialty: 'Curriculum Development' },
  { name: 'Dr. James Okello', role: 'Deputy Vice Chancellor — Finance', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80', bio: 'PhD London School of Economics. Expert in university financial management and resource mobilisation.', phd: 'London School of Economics', specialty: 'Financial Management' },
  { name: 'Prof. Grace Namukasa', role: 'Dean of Students', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80', bio: 'PhD Makerere University. 20+ years championing student welfare and inclusive campus culture.', phd: 'Makerere University', specialty: 'Student Affairs' },
  { name: 'Dr. Robert Ssemakula', role: 'Dean — Faculty of Technology', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80', bio: 'PhD MIT. Former Google engineer. Leading ZGU into the AI and cybersecurity era.', phd: 'MIT', specialty: 'AI & Software Engineering' },
  { name: 'Prof. Amina Hassan', role: 'Dean — Faculty of Law', image: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=400&q=80', bio: 'PhD University of Cape Town. International human rights law specialist with AU and UN experience.', phd: 'University of Cape Town', specialty: 'International Human Rights Law' },
];

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState('About ZGU');
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <div style={{background: 'white'}}>

      {/* Hero */}
      <div style={{background: '#0a1628', padding: '0', position: 'relative', overflow: 'hidden', minHeight: '420px', display: 'flex', alignItems: 'flex-end'}}>
        <img
          src="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=1600&q=80"
          alt="ZGU Campus"
          style={{position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.3}}
        />
        <div style={{position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(10,22,40,0.97) 40%, rgba(10,22,40,0.6) 100%)'}} />
        <div style={{maxWidth: '1280px', margin: '0 auto', padding: '80px 24px', position: 'relative', zIndex: 1, width: '100%'}}>
          <div style={{display: 'flex', alignItems: 'center', gap: '8px', color: '#9ca3af', fontSize: '13px', marginBottom: '16px', fontFamily: 'Inter, sans-serif'}}>
            <Link href="/" style={{color: '#9ca3af'}} className="hover:text-yellow-400">Home</Link>
            <span>/</span>
            <span style={{color: '#c9a84c'}}>About ZGU</span>
          </div>
          <h1 style={{fontFamily: 'Playfair Display, serif', fontSize: '52px', fontWeight: 700, color: 'white', marginBottom: '12px', maxWidth: '600px', lineHeight: 1.15}}>
            About Zenith Global University
          </h1>
          <p style={{color: '#9ca3af', fontSize: '18px', maxWidth: '550px', fontFamily: 'Inter, sans-serif', lineHeight: 1.7}}>
            A shining beacon of transformational education, empowering students with world-class skills since 2014.
          </p>
          <div style={{display: 'flex', gap: '16px', marginTop: '28px'}}>
            <Link href="/about/mission" style={{background: '#c9a84c', color: '#0a1628', padding: '12px 28px', borderRadius: '4px', fontWeight: 700, fontSize: '12px', fontFamily: 'Inter, sans-serif', textTransform: 'uppercase', letterSpacing: '0.08em'}}>Our Story</Link>
            <Link href="/admissions" style={{background: 'transparent', color: 'white', padding: '12px 28px', borderRadius: '4px', fontWeight: 600, fontSize: '12px', fontFamily: 'Inter, sans-serif', textTransform: 'uppercase', letterSpacing: '0.08em', border: '1px solid rgba(255,255,255,0.3)'}}>Apply Now</Link>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div style={{background: 'white', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', position: 'relative', zIndex: 2}}>
        <div style={{maxWidth: '1280px', margin: '0 auto', padding: '0 24px'}}>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0'}}>
            {[
              { icon: '📅', number: '2014', label: 'Established' },
              { icon: '🏆', number: 'Chartered', label: 'Chartered University' },
              { icon: '🎯', number: '#1', label: 'Experiential Learning' },
              { icon: '💼', number: '95%', label: 'Graduate Employment' },
            ].map((stat, i) => (
              <div key={stat.label} style={{
                padding: '24px 20px',
                textAlign: 'center',
                borderRight: i < 3 ? '1px solid #f3f4f6' : 'none',
                display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px'
              }}>
                <span style={{fontSize: '22px'}}>{stat.icon}</span>
                <div style={{fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#0a1628'}}>{stat.number}</div>
                <div style={{color: '#9ca3af', fontSize: '12px', fontFamily: 'Inter, sans-serif', textTransform: 'uppercase', letterSpacing: '0.08em'}}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tabbed Content — VU Style */}
      <div style={{maxWidth: '1280px', margin: '0 auto', padding: '60px 24px'}}>
        <div style={{display: 'grid', gridTemplateColumns: '240px 1fr', gap: '40px', alignItems: 'start'}}>

          {/* Left Tab Sidebar */}
          <div style={{position: 'sticky', top: '100px'}}>
            <div style={{background: '#f8f9fb', borderRadius: '12px', overflow: 'hidden'}}>
              <div style={{background: '#0a1628', padding: '16px 20px'}}>
                <h3 style={{color: '#c9a84c', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', fontFamily: 'Inter, sans-serif'}}>About ZGU</h3>
              </div>
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    width: '100%', padding: '14px 20px', border: 'none', cursor: 'pointer',
                    background: activeTab === tab ? '#0a1628' : 'transparent',
                    color: activeTab === tab ? '#c9a84c' : '#374151',
                    fontSize: '14px', fontWeight: activeTab === tab ? 600 : 400,
                    fontFamily: 'Inter, sans-serif',
                    borderBottom: '1px solid #f3f4f6',
                    textAlign: 'left',
                    transition: 'all 0.2s',
                  }}>
                  {tab}
                  <svg style={{width: '14px', height: '14px', color: activeTab === tab ? '#c9a84c' : '#d1d5db'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div>
            {activeTab === 'About ZGU' && (
              <div>
                <span style={{color: '#c9a84c', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', fontFamily: 'Inter, sans-serif'}}>Who We Are</span>
                <h2 style={{fontFamily: 'Playfair Display, serif', fontSize: '40px', fontWeight: 700, color: '#0a1628', margin: '12px 0 20px'}}>ZGU at a Glance</h2>
                <div style={{width: '48px', height: '3px', background: '#c9a84c', marginBottom: '28px'}} />
                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '32px'}}>
                  <div>
                    <p style={{color: '#6b7280', lineHeight: 1.8, fontSize: '15px', fontFamily: 'Inter, sans-serif', marginBottom: '16px'}}>
                      Zenith Global University was founded with one bold vision — to create a world-class institution on African soil that competes with the best universities globally.
                    </p>
                    <p style={{color: '#6b7280', lineHeight: 1.8, fontSize: '15px', fontFamily: 'Inter, sans-serif'}}>
                      From our founding in 2014, we have been committed to academic excellence, research innovation, and producing graduates who make a real difference in the world.
                    </p>
                  </div>
                  <div>
                    <p style={{color: '#6b7280', lineHeight: 1.8, fontSize: '15px', fontFamily: 'Inter, sans-serif', marginBottom: '16px'}}>
                      Located in the heart of Kampala, Uganda, ZGU serves over 15,000 students from across Uganda, East Africa, and 40+ countries worldwide.
                    </p>
                    <p style={{color: '#6b7280', lineHeight: 1.8, fontSize: '15px', fontFamily: 'Inter, sans-serif'}}>
                      With over 200 programmes spanning Technology, Law, Business, Health Sciences, Education and Social Sciences — we are shaping the next generation of African and global leaders.
                    </p>
                  </div>
                </div>
                <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80" alt="ZGU"
                  style={{width: '100%', height: '320px', objectFit: 'cover', borderRadius: '12px', marginBottom: '32px'}} />
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px'}}>
                  {[
                    { number: '2014', label: 'Year Founded' },
                    { number: '15,000+', label: 'Students' },
                    { number: '200+', label: 'Programmes' },
                    { number: '40+', label: 'Countries' },
                  ].map((stat) => (
                    <div key={stat.label} style={{background: '#f8f9fb', padding: '20px 16px', borderRadius: '10px', textAlign: 'center', borderBottom: '3px solid #c9a84c'}}>
                      <div style={{fontFamily: 'Playfair Display, serif', fontSize: '24px', fontWeight: 700, color: '#0a1628'}}>{stat.number}</div>
                      <div style={{color: '#9ca3af', fontSize: '12px', fontFamily: 'Inter, sans-serif', marginTop: '4px'}}>{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'Our Teams' && (
              <div>
                <span style={{color: '#c9a84c', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', fontFamily: 'Inter, sans-serif'}}>Leadership</span>
                <h2 style={{fontFamily: 'Playfair Display, serif', fontSize: '40px', fontWeight: 700, color: '#0a1628', margin: '12px 0 8px'}}>Meet the People Behind ZGU</h2>
                <p style={{color: '#6b7280', fontSize: '15px', fontFamily: 'Inter, sans-serif', marginBottom: '32px', lineHeight: 1.7}}>Dedicated leaders, educators and professionals driving transformational education every day.</p>
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px'}}>
                  {team.map((member) => (
                    <div
                      key={member.name}
                      onClick={() => setSelectedMember(member)}
                      style={{
                        background: 'white', borderRadius: '12px', overflow: 'hidden',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.06)', cursor: 'pointer',
                        transition: 'transform 0.3s, box-shadow 0.3s',
                        border: '1px solid #f3f4f6',
                      }}
                      className="hover:-translate-y-1 hover:shadow-xl group"
                    >
                      <div style={{overflow: 'hidden', height: '200px', position: 'relative'}}>
                        <img src={member.image} alt={member.name}
                          style={{width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top', transition: 'transform 0.5s'}}
                          className="group-hover:scale-105" />
                      </div>
                      <div style={{padding: '16px', borderTop: '2px solid #c9a84c'}}>
                        <h3 style={{fontFamily: 'Playfair Display, serif', fontSize: '15px', fontWeight: 600, color: '#0a1628', marginBottom: '4px'}}>{member.name}</h3>
                        <div style={{color: '#c9a84c', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', fontFamily: 'Inter, sans-serif', marginBottom: '8px'}}>{member.role}</div>
                        <div style={{color: '#9ca3af', fontSize: '11px', fontFamily: 'Inter, sans-serif'}}>🎓 {member.phd}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'Governance' && (
              <div>
                <span style={{color: '#c9a84c', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', fontFamily: 'Inter, sans-serif'}}>How We're Run</span>
                <h2 style={{fontFamily: 'Playfair Display, serif', fontSize: '40px', fontWeight: 700, color: '#0a1628', margin: '12px 0 8px'}}>University Governance</h2>
                <div style={{width: '48px', height: '3px', background: '#c9a84c', marginBottom: '28px'}} />
                <p style={{color: '#6b7280', lineHeight: 1.8, fontSize: '15px', fontFamily: 'Inter, sans-serif', marginBottom: '32px'}}>
                  ZGU operates under a clear governance framework designed to ensure accountability, transparency and strategic excellence. We are fully accredited by Uganda's National Council for Higher Education (NCHE).
                </p>
                <div style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
                  {[
                    { title: 'University Council', desc: 'Supreme governing body responsible for strategic direction, policy oversight and institutional accountability.', icon: '🏛️' },
                    { title: 'University Senate', desc: 'Academic governing body responsible for curriculum, examinations, research and academic standards.', icon: '🎓' },
                    { title: 'University Management', desc: 'Day-to-day operational leadership led by the Vice Chancellor and senior management team.', icon: '⚙️' },
                    { title: 'Faculty Boards', desc: 'Each faculty has its own board responsible for academic programmes, research and faculty welfare.', icon: '📋' },
                  ].map((item) => (
                    <div key={item.title} style={{display: 'flex', gap: '16px', padding: '20px', background: '#f8f9fb', borderRadius: '10px', alignItems: 'flex-start'}}>
                      <span style={{fontSize: '28px'}}>{item.icon}</span>
                      <div>
                        <h3 style={{fontFamily: 'Playfair Display, serif', fontSize: '18px', fontWeight: 600, color: '#0a1628', marginBottom: '6px'}}>{item.title}</h3>
                        <p style={{color: '#6b7280', fontSize: '14px', lineHeight: 1.7, fontFamily: 'Inter, sans-serif'}}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'Partnerships' && (
              <div>
                <span style={{color: '#c9a84c', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.15em', fontFamily: 'Inter, sans-serif'}}>Global Network</span>
                <h2 style={{fontFamily: 'Playfair Display, serif', fontSize: '40px', fontWeight: 700, color: '#0a1628', margin: '12px 0 8px'}}>Collaboration & Partnerships</h2>
                <div style={{width: '48px', height: '3px', background: '#c9a84c', marginBottom: '28px'}} />
                <p style={{color: '#6b7280', lineHeight: 1.8, fontSize: '15px', fontFamily: 'Inter, sans-serif', marginBottom: '32px'}}>
                  ZGU partners with 50+ universities and institutions globally, giving our students access to world-class research, exchange programmes and international career networks.
                </p>
                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px'}}>
                  {[
                    { name: 'MIT', country: '🇺🇸 USA', type: 'Research Partner' },
                    { name: 'University of Oxford', country: '🇬🇧 UK', type: 'Academic Partner' },
                    { name: 'Harvard University', country: '🇺🇸 USA', type: 'Academic Partner' },
                    { name: 'University of Cape Town', country: '🇿🇦 South Africa', type: 'Research Partner' },
                    { name: 'Makerere University', country: '🇺🇬 Uganda', type: 'Local Partner' },
                    { name: 'University of Nairobi', country: '🇰🇪 Kenya', type: 'Regional Partner' },
                    { name: 'London School of Economics', country: '🇬🇧 UK', type: 'Academic Partner' },
                    { name: 'Johns Hopkins University', country: '🇺🇸 USA', type: 'Research Partner' },
                  ].map((partner) => (
                    <div key={partner.name} style={{background: '#f8f9fb', padding: '16px', borderRadius: '10px', borderLeft: '3px solid #c9a84c'}}>
                      <h3 style={{fontFamily: 'Playfair Display, serif', fontSize: '15px', fontWeight: 600, color: '#0a1628', marginBottom: '4px'}}>{partner.name}</h3>
                      <div style={{color: '#9ca3af', fontSize: '12px', fontFamily: 'Inter, sans-serif'}}>{partner.country}</div>
                      <span style={{background: '#0a1628', color: '#c9a84c', fontSize: '10px', fontWeight: 700, padding: '2px 8px', borderRadius: '20px', fontFamily: 'Inter, sans-serif', display: 'inline-block', marginTop: '6px'}}>{partner.type}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Team Member Modal */}
      {selectedMember && (
        <div
          onClick={() => setSelectedMember(null)}
          style={{position: 'fixed', inset: 0, zIndex: 9999, background: 'rgba(0,0,0,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px'}}>
          <div
            onClick={(e) => e.stopPropagation()}
            style={{background: 'white', borderRadius: '16px', overflow: 'hidden', maxWidth: '600px', width: '100%', maxHeight: '85vh', overflowY: 'auto'}}>
            <div style={{display: 'grid', gridTemplateColumns: '200px 1fr'}}>
              <img src={selectedMember.image} alt={selectedMember.name}
                style={{width: '100%', height: '100%', minHeight: '250px', objectFit: 'cover', objectPosition: 'top'}} />
              <div style={{padding: '28px'}}>
                <h2 style={{fontFamily: 'Playfair Display, serif', fontSize: '22px', fontWeight: 700, color: '#0a1628', marginBottom: '6px'}}>{selectedMember.name}</h2>
                <div style={{color: '#c9a84c', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', fontFamily: 'Inter, sans-serif', marginBottom: '16px'}}>{selectedMember.role}</div>
                <div style={{display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px'}}>
                  <div style={{color: '#374151', fontSize: '13px', fontFamily: 'Inter, sans-serif'}}>🎓 <strong>Education:</strong> {selectedMember.phd}</div>
                  <div style={{color: '#374151', fontSize: '13px', fontFamily: 'Inter, sans-serif'}}>🔬 <strong>Specialty:</strong> {selectedMember.specialty}</div>
                </div>
                <div style={{width: '40px', height: '2px', background: '#c9a84c', marginBottom: '16px'}} />
                <p style={{color: '#6b7280', fontSize: '14px', lineHeight: 1.7, fontFamily: 'Inter, sans-serif'}}>{selectedMember.bio}</p>
              </div>
            </div>
            <div style={{padding: '16px 28px', borderTop: '1px solid #f3f4f6', display: 'flex', justifyContent: 'flex-end'}}>
              <button onClick={() => setSelectedMember(null)}
                style={{background: '#0a1628', color: 'white', border: 'none', padding: '10px 24px', borderRadius: '6px', fontWeight: 600, fontSize: '13px', cursor: 'pointer', fontFamily: 'Inter, sans-serif'}}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}