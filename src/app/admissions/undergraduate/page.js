import Link from 'next/link';

const programmes = [
  { code: 'BSC-CS', title: 'BSc Computer Science', duration: '3 Years', faculty: 'Technology', overview: 'A comprehensive programme covering algorithms, software development, AI, databases and cybersecurity.', careers: ['Software Engineer', 'Data Scientist', 'Cybersecurity Analyst', 'Systems Architect'], image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&q=80' },
  { code: 'BSC-SE', title: 'BSc Software Engineering', duration: '3 Years', faculty: 'Technology', overview: 'Focused on building scalable, production-grade software systems for real-world applications.', careers: ['Frontend Developer', 'Backend Developer', 'DevOps Engineer', 'Product Manager'], image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&q=80' },
  { code: 'BSC-CYB', title: 'BSc Cybersecurity', duration: '3 Years', faculty: 'Technology', overview: 'Training the next generation of security experts in network defence, ethical hacking and digital forensics.', careers: ['Security Analyst', 'Penetration Tester', 'CISO', 'Forensics Investigator'], image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&q=80' },
  { code: 'LLB', title: 'Bachelor of Laws (LLB)', duration: '4 Years', faculty: 'Law', overview: 'A rigorous legal education covering constitutional law, commercial law, human rights and legal practice.', careers: ['Advocate', 'State Attorney', 'Legal Consultant', 'Magistrate'], image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&q=80' },
  { code: 'BBA', title: 'BBA Business Administration', duration: '3 Years', faculty: 'Business', overview: 'A broad-based business degree covering management, marketing, finance, HR and entrepreneurship.', careers: ['Business Manager', 'Marketing Manager', 'Entrepreneur', 'HR Manager'], image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80' },
  { code: 'BSC-ACC', title: 'BSc Accounting & Finance', duration: '3 Years', faculty: 'Business', overview: 'Professional accounting education aligned with ICPAU and global accounting standards.', careers: ['Accountant', 'Financial Analyst', 'Auditor', 'Tax Consultant'], image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&q=80' },
  { code: 'BSC-NUR', title: 'BSc Nursing', duration: '4 Years', faculty: 'Health Sciences', overview: 'Comprehensive nursing training combining theory with hands-on clinical practice across all specialties.', careers: ['Registered Nurse', 'Midwife', 'Clinical Officer', 'Health Administrator'], image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80' },
  { code: 'BSC-PH', title: 'BSc Public Health', duration: '3 Years', faculty: 'Health Sciences', overview: 'Training public health professionals to address Uganda\'s and Africa\'s most pressing health challenges.', careers: ['Public Health Officer', 'Epidemiologist', 'Health Policy Analyst', 'NGO Worker'], image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&q=80' },
];

export default function UndergraduatePage() {
  return (
    <div className="bg-white">
      <div className="bg-[#0a1628] py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0" style={{background: 'radial-gradient(circle at 20% 50%, rgba(201,168,76,0.15) 0%, transparent 60%)'}} />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
            <Link href="/" className="hover:text-[#c9a84c]">Home</Link><span>/</span>
            <Link href="/admissions" className="hover:text-[#c9a84c]">Admissions</Link><span>/</span>
            <span className="text-[#c9a84c]">Undergraduate</span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">Undergraduate Programmes</h1>
          <p className="text-gray-300 text-xl max-w-2xl">Choose from 12+ undergraduate programmes designed for the careers of tomorrow.</p>
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
                    <span className="bg-[#c9a84c]/15 text-[#c9a84c] text-xs font-bold px-3 py-1 rounded-full uppercase">{prog.faculty}</span>
                    <span className="text-gray-400 text-sm">⏱ {prog.duration}</span>
                  </div>
                  <h3 className="text-[#0a1628] font-bold text-xl mb-2">{prog.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{prog.overview}</p>
                  <div className="mb-4">
                    <div className="text-xs font-bold text-[#0a1628] uppercase tracking-wide mb-2">Career Paths</div>
                    <div className="flex flex-wrap gap-2">
                      {prog.careers.map((career) => (
                        <span key={career} className="text-xs bg-[#f4f6f9] text-gray-600 px-3 py-1 rounded-full">{career}</span>
                      ))}
                    </div>
                  </div>
                  <Link href="/admissions/apply" className="block text-center bg-[#0a1628] text-white py-3 rounded-lg font-bold text-sm uppercase tracking-wide hover:bg-[#c9a84c] hover:text-[#0a1628] transition-all duration-300">
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