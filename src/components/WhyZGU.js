import Link from 'next/link';

const reasons = [
  {
    icon: '🏆',
    title: 'Globally Recognised Degrees',
    description: 'Our degrees are accredited and recognised by universities and employers worldwide, giving you a competitive edge wherever you go.',
  },
  {
    icon: '🌍',
    title: 'Diverse International Community',
    description: 'Study alongside students from 40+ countries. Our multicultural campus prepares you for global citizenship and cross-cultural leadership.',
  },
  {
    icon: '🔬',
    title: 'Research & Innovation Hub',
    description: 'Access state-of-the-art labs, research centres, and innovation hubs that put you at the forefront of knowledge creation.',
  },
  {
    icon: '💼',
    title: '95% Graduate Employment',
    description: 'Our strong industry partnerships and career centre ensure that 95% of our graduates secure employment within 6 months of graduation.',
  },
  {
    icon: '🎓',
    title: 'World-Class Faculty',
    description: 'Learn from professors and industry leaders with PhDs from top universities across the world — Oxford, Harvard, MIT and more.',
  },
  {
    icon: '💰',
    title: 'Affordable Excellence',
    description: 'World-class education at accessible tuition fees, with scholarships, bursaries and flexible payment plans available.',
  },
];

export default function WhyZGU() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">

          {/* Left — Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80"
              alt="ZGU Campus"
              className="rounded-2xl w-full h-96 object-cover shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-[var(--gold)] text-[var(--navy)] p-6 rounded-xl shadow-xl">
              <div className="text-4xl font-bold" style={{fontFamily: 'Playfair Display, serif'}}>10+</div>
              <div className="text-sm font-semibold uppercase tracking-wide">Years of Excellence</div>
            </div>
            <div className="absolute -top-6 -left-6 bg-[var(--navy)] text-white p-5 rounded-xl shadow-xl">
              <div className="text-3xl font-bold text-[var(--gold)]" style={{fontFamily: 'Playfair Display, serif'}}>AAA</div>
              <div className="text-xs text-gray-300 uppercase tracking-wide mt-1">Accredited</div>
            </div>
          </div>

          {/* Right — Text */}
          <div>
            <span className="text-[var(--gold)] text-xs font-bold uppercase tracking-[0.3em]">
              Why Choose Us
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold text-[var(--navy)] mt-3 mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              A University Built for Your Future
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-6">
              At Zenith Global University, we do not just teach — we transform.
              Our approach combines rigorous academics with real-world experience,
              producing graduates who lead industries across Africa and beyond.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              From our cutting-edge facilities in the heart of Kampala to our global
              network of partner institutions, every element of ZGU is designed to
              give you an unfair advantage in life.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/about"
                className="bg-[var(--navy)] text-white px-8 py-3 rounded font-bold text-sm uppercase tracking-widest hover:bg-[var(--gold)] hover:text-[var(--navy)] transition-all duration-300"
              >
                Our Story
              </Link>
              <Link
                href="/admissions"
                className="border-2 border-[var(--navy)] text-[var(--navy)] px-8 py-3 rounded font-bold text-sm uppercase tracking-widest hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all duration-300"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>

        {/* 6 Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="p-8 rounded-xl border border-gray-100 hover:border-[var(--gold)] hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{reason.icon}</div>
              <h3
                className="text-[var(--navy)] font-bold text-lg mb-3"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                {reason.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}