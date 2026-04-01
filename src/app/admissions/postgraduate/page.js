import Link from 'next/link';

const programmes = [
  { code: 'MSC-CS', title: 'MSc Computer Science', duration: '2 Years', faculty: 'Technology', overview: 'Advanced studies in AI, machine learning, distributed systems and cutting-edge computing research.', entry: 'BSc Computer Science or related field with at least Second Class Honours.', careers: ['AI Engineer', 'Research Scientist', 'CTO', 'Solutions Architect'], image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&q=80' },
  { code: 'MSC-CYB', title: 'MSc Cybersecurity', duration: '2 Years', faculty: 'Technology', overview: 'Advanced cybersecurity training in threat intelligence, digital forensics and security architecture.', entry: 'BSc in Computer Science, IT or Engineering with at least Second Class Honours.', careers: ['CISO', 'Security Architect', 'Forensics Expert', 'Threat Analyst'], image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&q=80' },
  { code: 'MBA', title: 'Master of Business Administration', duration: '2 Years', faculty: 'Business', overview: 'A world-class MBA programme designed for working professionals ready to lead at the highest level.', entry: 'Bachelor\'s degree in any field plus 2 years relevant work experience.', careers: ['CEO', 'Managing Director', 'Strategy Consultant', 'Entrepreneur'], image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80' },
  { code: 'LLM', title: 'LLM Commercial Law', duration: '2 Years', faculty: 'Law', overview: 'Specialist legal training in commercial transactions, corporate law and international business law.', entry: 'LLB degree with at least Second Class Honours from a recognised university.', careers: ['Commercial Lawyer', 'Corporate Counsel', 'Legal Director', 'Arbitrator'], image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&q=80' },
  { code: 'MED', title: 'MEd Educational Leadership', duration: '2 Years', faculty: 'Education', overview: 'Developing the next generation of educational leaders for schools, universities and policy institutions.', entry: 'Bachelor\'s degree in Education or related field with teaching experience.', careers: ['School Principal', 'Education Director', 'Policy Analyst', 'University Dean'], image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&q=80' },
  { code: 'MA-DS', title: 'MA Development Studies', duration: '2 Years', faculty: 'Social Sciences', overview: 'Critical analysis of development theories and practices for Africa\'s sustainable future.', entry: 'Bachelor\'s degree in Social Sciences, Economics or related discipline.', careers: ['Development Officer', 'NGO Director', 'Policy Researcher', 'UN Officer'], image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&q=80' },
];

export default function PostgraduatePage() {
  return (
    <div className="bg-white">
      <div className="bg-[#0a1628] py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0" style={{background: 'radial-gradient(circle at 80% 50%, rgba(201,168,76,0.15) 0%, transparent 60%)'}} />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
            <Link href="/" className="hover:text-[#c9a84c]">Home</Link><span>/</span>
            <Link href="/admissions" className="hover:text-[#c9a84c]">Admissions</Link><span>/</span>
            <span className="text-[#c9a84c]">Postgraduate</span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">Postgraduate Programmes</h1>
          <p className="text-gray-300 text-xl max-w-2xl">Advance your career with a world-class postgraduate qualification from ZGU.</p>
        </div>
      </div>

      <section className="py-24 px-6 bg-[#f4f6f9]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programmes.map((prog) => (
              <div key={prog.code} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="overflow-hidden h-48">
                  <img src={prog.image} alt={prog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-[#0a1628]/10 text-[#0a1628] text-xs font-bold px-3 py-1 rounded-full uppercase">{prog.faculty}</span>
                    <span className="text-gray-400 text-sm">⏱ {prog.duration}</span>
                  </div>
                  <h3 className="text-[#0a1628] font-bold text-xl mb-2">{prog.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-3">{prog.overview}</p>
                  <div className="bg-[#f4f6f9] rounded-lg p-3 mb-4">
                    <div className="text-xs font-bold text-[#0a1628] uppercase tracking-wide mb-1">Entry Requirements</div>
                    <p className="text-gray-500 text-xs">{prog.entry}</p>
                  </div>
                  <div className="mb-4">
                    <div className="text-xs font-bold text-[#0a1628] uppercase tracking-wide mb-2">Career Paths</div>
                    <div className="flex flex-wrap gap-2">
                      {prog.careers.map((career) => (
                        <span key={career} className="text-xs bg-[#c9a84c]/10 text-[#0a1628] px-3 py-1 rounded-full">{career}</span>
                      ))}
                    </div>
                  </div>
                  <Link href="/admissions/apply" className="block text-center bg-[#c9a84c] text-[#0a1628] py-3 rounded-lg font-bold text-sm uppercase tracking-wide hover:bg-[#0a1628] hover:text-white transition-all duration-300">
                    Apply for This Programme
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}