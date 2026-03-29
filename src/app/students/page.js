import Link from 'next/link';

const services = [
  { icon: '🏠', title: 'Student Accommodation', desc: 'On-campus and off-campus housing options with 24/7 security, WiFi and all utilities included.' },
  { icon: '🏥', title: 'Health & Wellness', desc: 'A fully equipped medical centre on campus with qualified doctors and nurses available daily.' },
  { icon: '📚', title: 'Library & Resources', desc: 'Access to over 500,000 physical and digital resources, journals and research databases.' },
  { icon: '💼', title: 'Career Centre', desc: 'Job placement support, CV writing, interview coaching and direct links to top employers.' },
  { icon: '🏋️', title: 'Sports & Recreation', desc: 'State-of-the-art gym, swimming pool, football pitch, basketball courts and more.' },
  { icon: '🤝', title: 'Student Counselling', desc: 'Free and confidential counselling services for mental health and personal development.' },
];

const clubs = [
  'Computer Science Society', 'Law Society', 'Business & Entrepreneurship Club',
  'Debate Club', 'Photography Club', 'Music & Arts Society',
  'Football Club', 'Basketball Team', 'Rotaract Club', 'Environmental Club',
];

export default function StudentsPage() {
  return (
    <div className="bg-white">

      {/* Page Hero */}
      <div className="bg-[var(--navy)] py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{backgroundImage: 'radial-gradient(circle at 70% 50%, var(--gold) 0%, transparent 50%)'}}>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
            <Link href="/" className="hover:text-[var(--gold)] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[var(--gold)]">Students</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}>
            Student Life at ZGU
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl">
            More than a degree — a transformative experience that shapes who you become.
          </p>
        </div>
      </div>

      {/* Life at ZGU */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[var(--gold)] text-xs font-bold uppercase tracking-[0.3em]">Campus Life</span>
            <h2 className="text-4xl font-bold text-[var(--navy)] mt-3 mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}>
              Life at Zenith Global University
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              At ZGU, student life goes far beyond the classroom. Our vibrant campus in the 
              heart of Kampala is alive with activity — from academic competitions and cultural 
              festivals to sports tournaments and entrepreneurship challenges.
            </p>
            <p className="text-gray-500 leading-relaxed mb-4">
              We believe that the most important growth happens outside the lecture hall. 
              That is why we invest in world-class student facilities, clubs, societies and 
              support services that nurture the whole person — not just the student.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              With students from over 40 countries, ZGU is a melting pot of cultures, ideas 
              and ambitions. You will make friendships here that last a lifetime and build 
              networks that span the globe.
            </p>
            <Link href="/admissions"
              className="bg-[var(--navy)] text-white px-8 py-3.5 rounded font-bold text-sm uppercase tracking-widest hover:bg-[var(--gold)] hover:text-[var(--navy)] transition-all duration-300">
              Join ZGU Today
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&q=80"
              alt="Students" className="rounded-xl w-full h-48 object-cover" />
            <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80"
              alt="Campus" className="rounded-xl w-full h-48 object-cover mt-8" />
            <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&q=80"
              alt="Events" className="rounded-xl w-full h-48 object-cover" />
            <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&q=80"
              alt="Friends" className="rounded-xl w-full h-48 object-cover mt-8" />
          </div>
        </div>
      </section>

      {/* Student Services */}
      <section className="py-24 px-6 bg-[var(--gray)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[var(--gold)] text-xs font-bold uppercase tracking-[0.3em]">Support</span>
            <h2 className="text-4xl font-bold text-[var(--navy)] mt-3"
              style={{ fontFamily: 'Playfair Display, serif' }}>
              Student Services
            </h2>
            <div className="w-16 h-1 bg-[var(--gold)] mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-[var(--navy)] font-bold text-lg mb-3"
                  style={{ fontFamily: 'Playfair Display, serif' }}>{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clubs & Societies */}
      <section className="py-24 px-6 bg-[var(--navy)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[var(--gold)] text-xs font-bold uppercase tracking-[0.3em]">Get Involved</span>
            <h2 className="text-4xl font-bold text-white mt-3"
              style={{ fontFamily: 'Playfair Display, serif' }}>
              Clubs & Societies
            </h2>
            <div className="w-16 h-1 bg-[var(--gold)] mx-auto mt-4" />
            <p className="text-gray-400 mt-4 max-w-xl mx-auto">
              With over 30 clubs and societies, there is something for every interest and passion at ZGU.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {clubs.map((club) => (
              <div key={club}
                className="bg-white/5 border border-white/10 rounded-full px-6 py-3 text-white text-sm font-medium hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all duration-200 cursor-pointer">
                {club}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Charter */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-[var(--gold)] text-xs font-bold uppercase tracking-[0.3em]">Our Commitment</span>
          <h2 className="text-4xl font-bold text-[var(--navy)] mt-3 mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}>
            Student Charter
          </h2>
          <div className="w-16 h-1 bg-[var(--gold)] mx-auto mb-8" />
          <p className="text-gray-500 leading-relaxed mb-6">
            The ZGU Student Charter is our formal commitment to every student who joins our community. 
            It outlines the rights, responsibilities and standards that define the ZGU experience.
          </p>
          <p className="text-gray-500 leading-relaxed mb-8">
            We commit to providing a safe, inclusive and stimulating learning environment. 
            We commit to world-class teaching, research support and career development. 
            And we commit to treating every student with dignity, respect and fairness.
          </p>
          <Link href="/admissions"
            className="bg-[var(--gold)] text-[var(--navy)] px-10 py-4 rounded font-bold text-sm uppercase tracking-widest hover:bg-[var(--navy)] hover:text-white transition-all duration-300">
            Join Our Community
          </Link>
        </div>
      </section>
    </div>
  );
}