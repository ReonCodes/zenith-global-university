import Link from 'next/link';

const council = [
  { name: 'Prof. Lwanyaga Ibrahim', role: 'Vice Chancellor & Chairman', type: 'Executive' },
  { name: 'Dr. Sarah Nakato', role: 'Deputy Vice Chancellor — Academics', type: 'Executive' },
  { name: 'Dr. James Okello', role: 'Deputy Vice Chancellor — Finance', type: 'Executive' },
  { name: 'Mr. David Kizito', role: 'University Secretary', type: 'Management' },
  { name: 'Prof. Grace Namukasa', role: 'Dean of Students', type: 'Management' },
  { name: 'Mr. Isaac Tumwine', role: 'Director — Finance', type: 'Management' },
  { name: 'Ms. Ruth Aceng', role: 'Director — Human Resources', type: 'Management' },
  { name: 'Mr. Brian Ssali', role: 'Director — ICT', type: 'Management' },
];

export default function GovernancePage() {
  return (
    <div className="bg-white">
      <div className="bg-[#0a1628] py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0" style={{background: 'radial-gradient(circle at 50% 50%, rgba(201,168,76,0.15) 0%, transparent 60%)'}} />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
            <Link href="/" className="hover:text-[#c9a84c]">Home</Link><span>/</span>
            <Link href="/about" className="hover:text-[#c9a84c]">About ZGU</Link><span>/</span>
            <span className="text-[#c9a84c]">Governance</span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">University Governance</h1>
          <p className="text-gray-300 text-xl max-w-2xl">Transparent, accountable and visionary leadership guiding ZGU forward.</p>
        </div>
      </div>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            <div>
              <span className="text-[#c9a84c] text-xs font-bold uppercase tracking-[0.3em]">How We're Run</span>
              <h2 className="text-4xl font-bold text-[#0a1628] mt-3 mb-6">Governance Structure</h2>
              <p className="text-gray-500 leading-relaxed mb-4">Zenith Global University operates under a clear governance framework designed to ensure accountability, transparency and strategic excellence at every level of the institution.</p>
              <p className="text-gray-500 leading-relaxed mb-4">Our University Council is the supreme governing body, supported by the University Senate for academic matters, and the University Management for day-to-day operations.</p>
              <p className="text-gray-500 leading-relaxed">ZGU is fully accredited by the Uganda National Council for Higher Education (NCHE) and operates in full compliance with all national and international higher education standards.</p>
            </div>
            <div className="space-y-4">
              {[
                { title: 'University Council', desc: 'Supreme governing body responsible for strategic direction, policy oversight and institutional accountability.', icon: '🏛️' },
                { title: 'University Senate', desc: 'Academic governing body responsible for curriculum, examinations, research and academic standards.', icon: '🎓' },
                { title: 'University Management', desc: 'Day-to-day operational leadership led by the Vice Chancellor and senior management team.', icon: '⚙️' },
                { title: 'Faculty Boards', desc: 'Each faculty has its own board responsible for academic programmes, research and faculty welfare.', icon: '📋' },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 p-6 bg-[#f4f6f9] rounded-xl hover:bg-[#0a1628] hover:text-white transition-all duration-300 group">
                  <div className="text-3xl">{item.icon}</div>
                  <div>
                    <h3 className="font-bold text-[#0a1628] group-hover:text-[#c9a84c] text-lg mb-1 transition-colors">{item.title}</h3>
                    <p className="text-gray-500 group-hover:text-gray-300 text-sm leading-relaxed transition-colors">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-[#0a1628] mb-8">University Management Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {council.map((member) => (
                <div key={member.name} className="flex items-center gap-4 p-5 bg-[#f4f6f9] rounded-xl hover:shadow-md transition-all">
                  <div className="w-12 h-12 rounded-full bg-[#0a1628] flex items-center justify-center text-[#c9a84c] font-bold text-lg flex-shrink-0">
                    {member.name[0]}
                  </div>
                  <div>
                    <h3 className="font-bold text-[#0a1628]">{member.name}</h3>
                    <p className="text-gray-500 text-sm">{member.role}</p>
                    <span className={`text-xs font-bold uppercase tracking-wide ${member.type === 'Executive' ? 'text-[#c9a84c]' : 'text-blue-500'}`}>{member.type}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}