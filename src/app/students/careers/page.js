import Link from 'next/link';

const employers = [
  { name: 'MTN Uganda', sector: 'Telecoms' },
  { name: 'Stanbic Bank', sector: 'Finance' },
  { name: 'Airtel Uganda', sector: 'Telecoms' },
  { name: 'DFCU Bank', sector: 'Finance' },
  { name: 'Makerere University', sector: 'Education' },
  { name: 'Ministry of Health', sector: 'Government' },
  { name: 'PricewaterhouseCoopers', sector: 'Consultancy' },
  { name: 'KPMG Uganda', sector: 'Consultancy' },
  { name: 'National Water', sector: 'Utilities' },
  { name: 'Uganda Revenue Authority', sector: 'Government' },
  { name: 'Centenary Bank', sector: 'Finance' },
  { name: 'Deloitte Uganda', sector: 'Consultancy' },
];

export default function CareersPage() {
  return (
    <div className="bg-white">
      <div className="bg-[#0a1628] py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0" style={{background: 'radial-gradient(circle at 70% 50%, rgba(201,168,76,0.15) 0%, transparent 60%)'}} />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
            <Link href="/" className="hover:text-[#c9a84c]">Home</Link><span>/</span>
            <Link href="/students" className="hover:text-[#c9a84c]">Students</Link><span>/</span>
            <span className="text-[#c9a84c]">Career & Work</span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">Career & Work</h1>
          <p className="text-gray-300 text-xl max-w-2xl">95% of ZGU graduates employed within 6 months. Your career starts here.</p>
        </div>
      </div>

      <div className="bg-[#c9a84c] py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: '95%', label: 'Graduate Employment Rate' },
            { number: '6 Months', label: 'Average Time to Employment' },
            { number: '200+', label: 'Employer Partners' },
            { number: '500+', label: 'Internships Placed Annually' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-bold text-[#0a1628]">{stat.number}</div>
              <div className="text-[#0a1628]/70 text-sm uppercase tracking-wide mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <span className="text-[#c9a84c] text-xs font-bold uppercase tracking-[0.3em]">Career Centre</span>
              <h2 className="text-4xl font-bold text-[#0a1628] mt-3 mb-6">Your Career, Our Priority</h2>
              <p className="text-gray-500 leading-relaxed mb-4">The ZGU Career Centre is dedicated to connecting students with employers, internships and career opportunities from Year 1 — not just at graduation.</p>
              <p className="text-gray-500 leading-relaxed mb-8">Our team of career advisors, industry mentors and employer partners work together to ensure every ZGU graduate enters the workforce job-ready, confident and competitive.</p>
              <div className="space-y-4">
                {[
                  { icon: '📄', title: 'CV & Cover Letter Support', desc: 'Professional CV writing and review by career experts.' },
                  { icon: '🎙️', title: 'Interview Coaching', desc: 'Mock interviews and feedback sessions with industry professionals.' },
                  { icon: '🤝', title: 'Job Fairs & Networking', desc: 'Regular career fairs connecting you directly with top employers.' },
                  { icon: '💼', title: 'Internship Placement', desc: 'Guaranteed internship placement through our employer network.' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 p-4 bg-[#f4f6f9] rounded-xl">
                    <div className="text-2xl">{item.icon}</div>
                    <div>
                      <h3 className="font-bold text-[#0a1628] mb-1">{item.title}</h3>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80"
                alt="Career" className="rounded-2xl w-full h-[500px] object-cover shadow-2xl" />
            </div>
          </div>

          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#0a1628]">Where Our Graduates Work</h2>
              <div className="w-16 h-1 bg-[#c9a84c] mx-auto mt-4" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {employers.map((emp) => (
                <div key={emp.name} className="bg-[#f4f6f9] rounded-xl p-4 text-center hover:bg-[#0a1628] hover:text-white transition-all duration-300 group">
                  <div className="font-bold text-[#0a1628] group-hover:text-[#c9a84c] text-sm mb-1 transition-colors">{emp.name}</div>
                  <div className="text-gray-400 group-hover:text-gray-300 text-xs transition-colors">{emp.sector}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}