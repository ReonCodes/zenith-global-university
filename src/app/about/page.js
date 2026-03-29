import Link from 'next/link';

const team = [
  {
  name: 'Prof. Lwanyaga Ibrahim',
  role: 'Vice Chancellor & Founder',
  image: '/reon.jpg',
  bio: 'BSc Computer Science, Victoria University Kampala. Visionary technologist, software engineer and academic leader. Founded ZGU to build Africa\'s most innovative university. Expert in AI, fullstack systems and cybersecurity. Led ZGU to 15,000+ students and 50+ global partnerships.',
},
  {
    name: 'Dr. Sarah Nakato',
    role: 'Deputy Vice Chancellor — Academics',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
    bio: 'PhD Harvard University. Specialist in curriculum development and education policy.',
  },
  {
    name: 'Dr. James Okello',
    role: 'Deputy Vice Chancellor — Finance',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    bio: 'PhD London School of Economics. Expert in university financial management.',
  },
  {
    name: 'Prof. Grace Namukasa',
    role: 'Dean of Students',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
    bio: 'PhD Makerere University. Champion of student welfare and academic excellence.',
  },
  {
    name: 'Dr. Robert Ssemakula',
    role: 'Dean — Faculty of Technology',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    bio: 'PhD MIT. Former Google engineer. Leading ZGU into the AI and tech era.',
  },
  {
    name: 'Prof. Amina Hassan',
    role: 'Dean — Faculty of Law',
    image: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=400&q=80',
    bio: 'PhD University of Cape Town. International human rights law specialist.',
  },
];

const values = [
  { icon: '🌟', title: 'Excellence', desc: 'We pursue the highest standards in everything we do.' },
  { icon: '🤝', title: 'Integrity', desc: 'Honesty and transparency guide every decision.' },
  { icon: '🌍', title: 'Global Vision', desc: 'We think beyond borders and build world citizens.' },
  { icon: '💡', title: 'Innovation', desc: 'We embrace new ideas and creative problem-solving.' },
];

export default function AboutPage() {
  return (
    <div className="bg-white">

      {/* Page Hero */}
      <div className="bg-[var(--navy)] py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{backgroundImage: 'radial-gradient(circle at 20% 50%, var(--gold) 0%, transparent 50%)'}}>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
            <Link href="/" className="hover:text-[var(--gold)] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[var(--gold)]">About ZGU</span>
          </div>
          <h1
            className="text-5xl md:text-6xl font-bold text-white mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            About Zenith Global University
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl">
            A legacy of excellence, a vision for the future.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[var(--gold)] text-xs font-bold uppercase tracking-[0.3em]">Who We Are</span>
            <h2
              className="text-4xl font-bold text-[var(--navy)] mt-3 mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Our Story
            </h2>
            <p className="text-gray-500 leading-relaxed mb-4">
              Zenith Global University was founded with one bold vision — to create a world-class
              institution on African soil that competes with the best universities globally.
              From our founding, we have been committed to academic excellence, research,
              and producing graduates who make a real difference in the world.
            </p>
            <p className="text-gray-500 leading-relaxed mb-4">
              Located in the heart of Kampala, Uganda, ZGU serves over 15,000 students
              from across Uganda, East Africa, and 40+ countries worldwide. Our campus
              is a melting pot of cultures, ideas, and ambitions.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              With over 200 programmes spanning Technology, Law, Business, Health Sciences,
              Education and Social Sciences — we are shaping the next generation of African
              and global leaders.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-[var(--gray)] p-6 rounded-xl">
                <div className="text-3xl font-bold text-[var(--navy)] mb-1"
                  style={{ fontFamily: 'Playfair Display, serif' }}>2014</div>
                <div className="text-sm text-gray-500">Year Founded</div>
              </div>
              <div className="bg-[var(--gray)] p-6 rounded-xl">
                <div className="text-3xl font-bold text-[var(--navy)] mb-1"
                  style={{ fontFamily: 'Playfair Display, serif' }}>15,000+</div>
                <div className="text-sm text-gray-500">Students</div>
              </div>
              <div className="bg-[var(--gray)] p-6 rounded-xl">
                <div className="text-3xl font-bold text-[var(--navy)] mb-1"
                  style={{ fontFamily: 'Playfair Display, serif' }}>200+</div>
                <div className="text-sm text-gray-500">Programmes</div>
              </div>
              <div className="bg-[var(--gray)] p-6 rounded-xl">
                <div className="text-3xl font-bold text-[var(--navy)] mb-1"
                  style={{ fontFamily: 'Playfair Display, serif' }}>40+</div>
                <div className="text-sm text-gray-500">Partner Countries</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=800&q=80"
              alt="ZGU Campus"
              className="rounded-2xl w-full h-[500px] object-cover shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-[var(--gold)] text-[var(--navy)] p-6 rounded-xl shadow-xl">
              <div className="text-3xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>#1</div>
              <div className="text-sm font-semibold">Fastest Growing<br />University in Uganda</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Vision Values */}
      <section className="py-24 px-6 bg-[var(--navy)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[var(--gold)] text-xs font-bold uppercase tracking-[0.3em]">Our Foundation</span>
            <h2
              className="text-4xl font-bold text-white mt-3"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Mission, Vision & Values
            </h2>
            <div className="w-16 h-1 bg-[var(--gold)] mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white/5 border border-white/10 rounded-xl p-8 hover:border-[var(--gold)]/40 transition-all">
              <div className="text-[var(--gold)] font-bold text-xs uppercase tracking-widest mb-4">Our Mission</div>
              <p className="text-gray-300 leading-relaxed">
                To provide transformative, accessible and globally competitive education
                that empowers students to rise beyond limits and lead positive change
                in their communities and the world.
              </p>
            </div>
            <div className="bg-[var(--gold)] rounded-xl p-8">
              <div className="text-[var(--navy)] font-bold text-xs uppercase tracking-widest mb-4">Our Vision</div>
              <p className="text-[var(--navy)] leading-relaxed font-medium">
                To be Africa's most innovative and globally recognised university —
                a beacon of knowledge, research and excellence that inspires generations
                to reach the zenith of human potential.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-8 hover:border-[var(--gold)]/40 transition-all">
              <div className="text-[var(--gold)] font-bold text-xs uppercase tracking-widest mb-4">Our Motto</div>
              <p className="text-gray-300 leading-relaxed">
                <span className="text-3xl font-bold text-white block mb-3"
                  style={{ fontFamily: 'Playfair Display, serif' }}>
                  Rise Beyond Limits.
                </span>
                These three words define everything we stand for — ambition without ceiling,
                potential without borders.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="text-center p-6">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-white font-bold text-lg mb-2"
                  style={{ fontFamily: 'Playfair Display, serif' }}>{value.title}</h3>
                <p className="text-gray-400 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-24 px-6 bg-[var(--gray)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[var(--gold)] text-xs font-bold uppercase tracking-[0.3em]">Leadership</span>
            <h2
              className="text-4xl font-bold text-[var(--navy)] mt-3"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Our Leadership Team
            </h2>
            <div className="w-16 h-1 bg-[var(--gold)] mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="overflow-hidden h-64">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 border-t-2 border-[var(--gold)]">
                  <h3
                    className="text-[var(--navy)] font-bold text-lg mb-1"
                    style={{ fontFamily: 'Playfair Display, serif' }}
                  >
                    {member.name}
                  </h3>
                  <div className="text-[var(--gold)] text-xs font-bold uppercase tracking-wide mb-3">
                    {member.role}
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2
            className="text-4xl font-bold text-[var(--navy)] mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Ready to Rise Beyond Limits?
          </h2>
          <p className="text-gray-500 text-lg mb-8">
            Join 15,000+ students already transforming their futures at Zenith Global University.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/admissions"
              className="bg-[var(--gold)] text-[var(--navy)] px-10 py-4 rounded font-bold text-sm uppercase tracking-widest hover:bg-[var(--navy)] hover:text-white transition-all duration-300"
            >
              Apply Now
            </Link>
            <Link
              href="/admissions"
              className="border-2 border-[var(--navy)] text-[var(--navy)] px-10 py-4 rounded font-bold text-sm uppercase tracking-widest hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all duration-300"
            >
              Explore Programmes
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}