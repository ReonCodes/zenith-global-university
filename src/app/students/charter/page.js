import Link from 'next/link';

const rights = [
  { icon: '📚', title: 'Right to Quality Education', desc: 'Every student has the right to receive world-class instruction from qualified, passionate educators.' },
  { icon: '🤝', title: 'Right to be Heard', desc: 'Your voice matters. Students have the right to participate in decisions that affect their academic experience.' },
  { icon: '🛡️', title: 'Right to Safety', desc: 'A safe, secure and harassment-free campus environment is guaranteed to all students.' },
  { icon: '⚖️', title: 'Right to Fair Treatment', desc: 'All students are treated equally regardless of gender, nationality, religion or background.' },
  { icon: '📋', title: 'Right to Information', desc: 'Students have the right to clear, accurate and timely information about their academic progress.' },
  { icon: '🎯', title: 'Right to Support', desc: 'Academic, financial, mental health and career support services are available to every student.' },
];

const responsibilities = [
  { icon: '⏰', title: 'Attend Classes Regularly', desc: 'Maintain at least 75% attendance in all registered courses.' },
  { icon: '📝', title: 'Submit Work on Time', desc: 'Complete and submit all assignments, projects and exams by the stated deadlines.' },
  { icon: '🤲', title: 'Respect Others', desc: 'Treat fellow students, staff and visitors with dignity, respect and kindness.' },
  { icon: '🔒', title: 'Uphold Academic Integrity', desc: 'Maintain honesty in all academic work. Plagiarism and cheating are strictly prohibited.' },
  { icon: '🏛️', title: 'Respect University Property', desc: 'Take care of university facilities, equipment and resources.' },
  { icon: '🌍', title: 'Be a ZGU Ambassador', desc: 'Represent ZGU with pride and professionalism in all public spaces.' },
];

export default function CharterPage() {
  return (
    <div className="bg-white">
      <div className="bg-[#0a1628] py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0" style={{background: 'radial-gradient(circle at 60% 50%, rgba(201,168,76,0.15) 0%, transparent 60%)'}} />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
            <Link href="/" className="hover:text-[#c9a84c]">Home</Link><span>/</span>
            <Link href="/students" className="hover:text-[#c9a84c]">Students</Link><span>/</span>
            <span className="text-[#c9a84c]">Student Charter</span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">Student Charter</h1>
          <p className="text-gray-300 text-xl max-w-2xl">Our formal commitment to every student who joins the ZGU community.</p>
        </div>
      </div>

      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-[#c9a84c] text-xs font-bold uppercase tracking-[0.3em]">Our Promise</span>
          <h2 className="text-4xl font-bold text-[#0a1628] mt-3 mb-6">ZGU's Commitment to You</h2>
          <p className="text-gray-500 text-lg leading-relaxed">The ZGU Student Charter defines the relationship between the university and its students. It outlines what you can expect from us, and what we expect from you in return.</p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-[#0a1628] mb-8 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-[#c9a84c] flex items-center justify-center text-[#0a1628] text-xl">✓</span>
              Your Rights
            </h2>
            <div className="space-y-4">
              {rights.map((item) => (
                <div key={item.title} className="flex gap-4 p-5 bg-[#f4f6f9] rounded-xl hover:bg-[#0a1628] group transition-all duration-300">
                  <div className="text-2xl">{item.icon}</div>
                  <div>
                    <h3 className="font-bold text-[#0a1628] group-hover:text-[#c9a84c] mb-1 transition-colors">{item.title}</h3>
                    <p className="text-gray-500 group-hover:text-gray-300 text-sm transition-colors">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[#0a1628] mb-8 flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-[#0a1628] flex items-center justify-center text-[#c9a84c] text-xl">★</span>
              Your Responsibilities
            </h2>
            <div className="space-y-4">
              {responsibilities.map((item) => (
                <div key={item.title} className="flex gap-4 p-5 bg-[#f4f6f9] rounded-xl hover:bg-[#0a1628] group transition-all duration-300">
                  <div className="text-2xl">{item.icon}</div>
                  <div>
                    <h3 className="font-bold text-[#0a1628] group-hover:text-[#c9a84c] mb-1 transition-colors">{item.title}</h3>
                    <p className="text-gray-500 group-hover:text-gray-300 text-sm transition-colors">{item.desc}</p>
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