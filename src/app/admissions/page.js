import Link from 'next/link';

const undergraduate = [
  { code: 'BSC-CS', title: 'BSc Computer Science', duration: '3 Years', faculty: 'Technology' },
  { code: 'BSC-SE', title: 'BSc Software Engineering', duration: '3 Years', faculty: 'Technology' },
  { code: 'BSC-CYB', title: 'BSc Cybersecurity', duration: '3 Years', faculty: 'Technology' },
  { code: 'BSC-DS', title: 'BSc Data Science & AI', duration: '3 Years', faculty: 'Technology' },
  { code: 'LLB', title: 'Bachelor of Laws (LLB)', duration: '4 Years', faculty: 'Law' },
  { code: 'BBA', title: 'BBA Business Administration', duration: '3 Years', faculty: 'Business' },
  { code: 'BSC-ACC', title: 'BSc Accounting & Finance', duration: '3 Years', faculty: 'Business' },
  { code: 'BSC-NUR', title: 'BSc Nursing', duration: '4 Years', faculty: 'Health Sciences' },
  { code: 'BSC-PH', title: 'BSc Public Health', duration: '3 Years', faculty: 'Health Sciences' },
  { code: 'BED-A', title: 'BEd Arts', duration: '3 Years', faculty: 'Education' },
  { code: 'BED-S', title: 'BEd Science', duration: '3 Years', faculty: 'Education' },
  { code: 'BA-IR', title: 'BA International Relations', duration: '3 Years', faculty: 'Social Sciences' },
];

const postgraduate = [
  { code: 'MSC-CS', title: 'MSc Computer Science', duration: '2 Years', faculty: 'Technology' },
  { code: 'MSC-CYB', title: 'MSc Cybersecurity', duration: '2 Years', faculty: 'Technology' },
  { code: 'MBA', title: 'Master of Business Administration', duration: '2 Years', faculty: 'Business' },
  { code: 'LLM', title: 'LLM Commercial Law', duration: '2 Years', faculty: 'Law' },
  { code: 'MED', title: 'MEd Educational Leadership', duration: '2 Years', faculty: 'Education' },
  { code: 'MA-DS', title: 'MA Development Studies', duration: '2 Years', faculty: 'Social Sciences' },
];

const requirements = [
  { icon: '📋', title: 'Uganda Certificate of Education', desc: 'Minimum of 5 passes at UCE (O-Level) including English and Mathematics.' },
  { icon: '🎓', title: 'Uganda Advanced Certificate', desc: 'Minimum of 2 principal passes at UACE (A-Level) for direct entry.' },
  { icon: '📄', title: 'Application Form', desc: 'Completed ZGU application form with all required documents attached.' },
  { icon: '📸', title: 'Passport Photos', desc: 'Two recent passport-size photographs.' },
  { icon: '🪪', title: 'National ID / Passport', desc: 'A copy of your valid National ID or Passport.' },
  { icon: '💳', title: 'Application Fee', desc: 'Non-refundable application fee of UGX 50,000.' },
];

const fees = [
  { programme: 'BSc Computer Science', tuition: 'UGX 1,800,000', functional: 'UGX 450,000', total: 'UGX 2,250,000' },
  { programme: 'Bachelor of Laws (LLB)', tuition: 'UGX 2,000,000', functional: 'UGX 450,000', total: 'UGX 2,450,000' },
  { programme: 'BBA Business Administration', tuition: 'UGX 1,600,000', functional: 'UGX 450,000', total: 'UGX 2,050,000' },
  { programme: 'BSc Nursing', tuition: 'UGX 2,200,000', functional: 'UGX 450,000', total: 'UGX 2,650,000' },
  { programme: 'MBA', tuition: 'UGX 2,500,000', functional: 'UGX 500,000', total: 'UGX 3,000,000' },
  { programme: 'MSc Computer Science', tuition: 'UGX 2,200,000', functional: 'UGX 500,000', total: 'UGX 2,700,000' },
];

export default function AdmissionsPage() {
  return (
    <div className="bg-white">

      {/* Page Hero */}
      <div className="bg-[var(--navy)] py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{backgroundImage: 'radial-gradient(circle at 80% 50%, var(--gold) 0%, transparent 50%)'}}>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
            <Link href="/" className="hover:text-[var(--gold)] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[var(--gold)]">Admissions</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}>
            Admissions
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl">
            Your journey to excellence starts here. Explore our programmes and apply today.
          </p>
        </div>
      </div>

      {/* Undergraduate Programmes */}
      <section className="py-24 px-6 bg-[var(--gray)]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="text-[var(--gold)] text-xs font-bold uppercase tracking-[0.3em]">Undergraduate</span>
            <h2 className="text-4xl font-bold text-[var(--navy)] mt-3"
              style={{ fontFamily: 'Playfair Display, serif' }}>
              Undergraduate Programmes
            </h2>
            <div className="w-16 h-1 bg-[var(--gold)] mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {undergraduate.map((prog) => (
              <div key={prog.code}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-l-4 border-[var(--gold)] group">
                <div className="text-xs font-bold text-[var(--gold)] uppercase tracking-widest mb-2">{prog.faculty}</div>
                <h3 className="text-[var(--navy)] font-bold text-lg mb-3"
                  style={{ fontFamily: 'Playfair Display, serif' }}>{prog.title}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm">⏱ {prog.duration}</span>
                  <Link href="/admissions/apply"
                    className="text-xs font-bold text-[var(--navy)] uppercase tracking-wide hover:text-[var(--gold)] transition-colors">
                    Apply →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Postgraduate Programmes */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="text-[var(--gold)] text-xs font-bold uppercase tracking-[0.3em]">Postgraduate</span>
            <h2 className="text-4xl font-bold text-[var(--navy)] mt-3"
              style={{ fontFamily: 'Playfair Display, serif' }}>
              Postgraduate Programmes
            </h2>
            <div className="w-16 h-1 bg-[var(--gold)] mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {postgraduate.map((prog) => (
              <div key={prog.code}
                className="bg-[var(--gray)] rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-l-4 border-[var(--navy)] group">
                <div className="text-xs font-bold text-[var(--navy)] uppercase tracking-widest mb-2">{prog.faculty}</div>
                <h3 className="text-[var(--navy)] font-bold text-lg mb-3"
                  style={{ fontFamily: 'Playfair Display, serif' }}>{prog.title}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500 text-sm">⏱ {prog.duration}</span>
                  <Link href="/admissions/apply"
                    className="text-xs font-bold text-[var(--navy)] uppercase tracking-wide hover:text-[var(--gold)] transition-colors">
                    Apply →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-24 px-6 bg-[var(--navy)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[var(--gold)] text-xs font-bold uppercase tracking-[0.3em]">What You Need</span>
            <h2 className="text-4xl font-bold text-white mt-3"
              style={{ fontFamily: 'Playfair Display, serif' }}>
              Admission Requirements
            </h2>
            <div className="w-16 h-1 bg-[var(--gold)] mx-auto mt-6" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {requirements.map((req) => (
              <div key={req.title}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-[var(--gold)]/40 transition-all">
                <div className="text-3xl mb-4">{req.icon}</div>
                <h3 className="text-white font-bold text-lg mb-2"
                  style={{ fontFamily: 'Playfair Display, serif' }}>{req.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{req.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tuition & Fees */}
      <section className="py-24 px-6 bg-[var(--gray)]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="text-[var(--gold)] text-xs font-bold uppercase tracking-[0.3em]">Fees Structure</span>
            <h2 className="text-4xl font-bold text-[var(--navy)] mt-3"
              style={{ fontFamily: 'Playfair Display, serif' }}>
              Tuition & Fees
            </h2>
            <div className="w-16 h-1 bg-[var(--gold)] mt-4" />
            <p className="text-gray-500 mt-4">Fees shown are per semester in Ugandan Shillings (UGX).</p>
          </div>
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-[var(--navy)] text-white">
                  <th className="text-left px-6 py-4 text-sm font-bold uppercase tracking-wide">Programme</th>
                  <th className="text-left px-6 py-4 text-sm font-bold uppercase tracking-wide">Tuition</th>
                  <th className="text-left px-6 py-4 text-sm font-bold uppercase tracking-wide">Functional</th>
                  <th className="text-left px-6 py-4 text-sm font-bold uppercase tracking-wide text-[var(--gold)]">Total/Semester</th>
                </tr>
              </thead>
              <tbody>
                {fees.map((fee, index) => (
                  <tr key={fee.programme}
                    className={`border-b border-gray-100 hover:bg-[var(--gray)] transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                    <td className="px-6 py-4 font-medium text-[var(--navy)]">{fee.programme}</td>
                    <td className="px-6 py-4 text-gray-600 text-sm">{fee.tuition}</td>
                    <td className="px-6 py-4 text-gray-600 text-sm">{fee.functional}</td>
                    <td className="px-6 py-4 font-bold text-[var(--navy)]">{fee.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-gray-400 text-sm mt-4">* Scholarships and payment plans available. Contact the admissions office for details.</p>
        </div>
      </section>

      {/* Apply CTA */}
      <section className="py-20 px-6 bg-[var(--gold)]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[var(--navy)] mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}>
            Ready to Apply?
          </h2>
          <p className="text-[var(--navy)]/70 text-lg mb-8">
            Join thousands of students already rising beyond limits at ZGU.
          </p>
          <Link href="/admissions/apply"
            className="bg-[var(--navy)] text-white px-12 py-4 rounded font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-[var(--navy)] transition-all duration-300">
            Start Your Application
          </Link>
        </div>
      </section>
    </div>
  );
}