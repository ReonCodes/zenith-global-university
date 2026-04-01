import Link from 'next/link';

const team = [
  { name: 'Prof. Lwanyaga Ibrahim', role: 'Vice Chancellor & Founder', image: '/reon.jpg', bio: 'BSc Computer Science, Victoria University Kampala. Visionary technologist, software engineer and academic leader. Founded ZGU to build Africa\'s most innovative university. Expert in AI, fullstack systems and cybersecurity. Led ZGU to 15,000+ students and 50+ global partnerships.', phd: 'Victoria University Kampala', specialty: 'Technology & Innovation' },
  { name: 'Dr. Sarah Nakato', role: 'Deputy Vice Chancellor — Academics', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80', bio: 'PhD Harvard University. Over 18 years experience in curriculum development, academic policy and university management across East Africa. Champion of student-centred learning.', phd: 'Harvard University', specialty: 'Curriculum Development' },
  { name: 'Dr. James Okello', role: 'Deputy Vice Chancellor — Finance', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80', bio: 'PhD London School of Economics. Expert in university financial management, resource mobilisation and sustainable institutional development.', phd: 'London School of Economics', specialty: 'Financial Management' },
  { name: 'Prof. Grace Namukasa', role: 'Dean of Students', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80', bio: 'PhD Makerere University. 20+ years championing student welfare, academic support and inclusive campus culture.', phd: 'Makerere University', specialty: 'Student Affairs' },
  { name: 'Dr. Robert Ssemakula', role: 'Dean — Faculty of Technology', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80', bio: 'PhD MIT. Former Google software engineer. Leading ZGU into the AI and cybersecurity era with cutting-edge research and industry partnerships.', phd: 'MIT', specialty: 'AI & Software Engineering' },
  { name: 'Prof. Amina Hassan', role: 'Dean — Faculty of Law', image: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=400&q=80', bio: 'PhD University of Cape Town. International human rights law specialist with experience at the African Union and United Nations.', phd: 'University of Cape Town', specialty: 'International Human Rights Law' },
  { name: 'Dr. Peter Mugisha', role: 'Dean — Faculty of Business', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80', bio: 'PhD University of Edinburgh. Former McKinsey consultant. Specialist in entrepreneurship, innovation and African business development.', phd: 'University of Edinburgh', specialty: 'Business & Entrepreneurship' },
  { name: 'Prof. Joyce Atim', role: 'Dean — Faculty of Health Sciences', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80', bio: 'PhD Johns Hopkins University. Public health specialist with 25 years of experience in East African healthcare systems and policy.', phd: 'Johns Hopkins University', specialty: 'Public Health Policy' },
];

export default function TeamPage() {
  return (
    <div className="bg-white">
      <div className="bg-[#0a1628] py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0" style={{background: 'radial-gradient(circle at 80% 50%, rgba(201,168,76,0.15) 0%, transparent 60%)'}} />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
            <Link href="/" className="hover:text-[#c9a84c]">Home</Link><span>/</span>
            <Link href="/about" className="hover:text-[#c9a84c]">About ZGU</Link><span>/</span>
            <span className="text-[#c9a84c]">Leadership Team</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Our Leadership Team</h1>
          <p className="text-gray-300 text-xl max-w-2xl">Meet the dedicated leaders driving ZGU's vision of excellence.</p>
        </div>
      </div>

      <section className="py-24 px-6 bg-[#f4f6f9]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.name} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative overflow-hidden h-64">
                  <img src={member.image} alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white text-xs leading-relaxed">{member.bio}</p>
                  </div>
                </div>
                <div className="p-5 border-t-2 border-[#c9a84c]">
                  <h3 className="font-bold text-[#0a1628] text-base mb-1">{member.name}</h3>
                  <div className="text-[#c9a84c] text-xs font-bold uppercase tracking-wide mb-2">{member.role}</div>
                  <div className="text-gray-400 text-xs">🎓 {member.phd}</div>
                  <div className="text-gray-400 text-xs mt-1">🔬 {member.specialty}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}