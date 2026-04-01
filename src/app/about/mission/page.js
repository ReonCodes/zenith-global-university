import Link from 'next/link';

export default function MissionPage() {
  return (
    <div className="bg-white">
      <div className="bg-[#0a1628] py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0" style={{background: 'radial-gradient(circle at 20% 50%, rgba(201,168,76,0.15) 0%, transparent 60%)'}} />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
            <Link href="/" className="hover:text-[#c9a84c]">Home</Link><span>/</span>
            <Link href="/about" className="hover:text-[#c9a84c]">About ZGU</Link><span>/</span>
            <span className="text-[#c9a84c]">Vision & Mission</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Vision & Mission</h1>
          <p className="text-gray-300 text-xl max-w-2xl">The foundation that drives everything we do at ZGU.</p>
        </div>
      </div>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="bg-[#f4f6f9] rounded-2xl p-10">
              <div className="text-[#c9a84c] font-bold text-xs uppercase tracking-widest mb-4">Our Mission</div>
              <h2 className="text-2xl font-bold text-[#0a1628] mb-4">What We Do</h2>
              <p className="text-gray-500 leading-relaxed">To provide transformative, accessible and globally competitive education that empowers students to rise beyond limits and lead positive change in their communities and the world.</p>
            </div>
            <div className="bg-[#0a1628] rounded-2xl p-10">
              <div className="text-[#c9a84c] font-bold text-xs uppercase tracking-widest mb-4">Our Vision</div>
              <h2 className="text-2xl font-bold text-white mb-4">Where We're Going</h2>
              <p className="text-gray-300 leading-relaxed">To be Africa's most innovative and globally recognised university — a beacon of knowledge, research and excellence that inspires generations to reach the zenith of human potential.</p>
            </div>
            <div className="bg-[#c9a84c] rounded-2xl p-10">
              <div className="text-[#0a1628] font-bold text-xs uppercase tracking-widest mb-4">Our Motto</div>
              <h2 className="text-2xl font-bold text-[#0a1628] mb-4">Rise Beyond Limits</h2>
              <p className="text-[#0a1628]/80 leading-relaxed">Three words that define our identity — ambition without ceiling, potential without borders, excellence without compromise.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <span className="text-[#c9a84c] text-xs font-bold uppercase tracking-[0.3em]">Core Values</span>
              <h2 className="text-4xl font-bold text-[#0a1628] mt-3 mb-8">What We Stand For</h2>
              <div className="space-y-6">
                {[
                  { icon: '🌟', title: 'Excellence', desc: 'We pursue the highest standards in teaching, research and service delivery.' },
                  { icon: '🤝', title: 'Integrity', desc: 'Honesty, transparency and ethical conduct guide every decision we make.' },
                  { icon: '🌍', title: 'Global Vision', desc: 'We think beyond borders and prepare students to thrive in a globalised world.' },
                  { icon: '💡', title: 'Innovation', desc: 'We embrace creative thinking, new technologies and bold ideas.' },
                  { icon: '🤲', title: 'Inclusivity', desc: 'We welcome everyone regardless of background, nationality or belief.' },
                  { icon: '💪', title: 'Empowerment', desc: 'We build confidence, skills and independence in every student.' },
                ].map((v) => (
                  <div key={v.title} className="flex gap-4 p-5 rounded-xl hover:bg-[#f4f6f9] transition-all">
                    <div className="text-3xl">{v.icon}</div>
                    <div>
                      <h3 className="font-bold text-[#0a1628] text-lg mb-1">{v.title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80"
                alt="ZGU Students" className="rounded-2xl w-full h-[600px] object-cover shadow-2xl" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#0a1628] text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-4">Live Our Values. Rise Beyond Limits.</h2>
          <p className="text-gray-400 text-lg mb-8">Join a university that stands for something greater than just a degree.</p>
          <Link href="/admissions" className="bg-[#c9a84c] text-[#0a1628] px-10 py-4 rounded font-bold text-sm uppercase tracking-widest hover:bg-white transition-all duration-300">
            Apply Now
          </Link>
        </div>
      </section>
    </div>
  );
}