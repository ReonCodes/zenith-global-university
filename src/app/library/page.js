import Link from 'next/link';

const services = [
  { icon: '📚', title: 'Lending Services', desc: 'Borrow from over 500,000 physical books, journals and magazines with flexible loan periods for students and staff.' },
  { icon: '💻', title: 'Digital Library', desc: 'Access thousands of e-books, online journals, research databases and academic resources 24/7 from anywhere.' },
  { icon: '🔬', title: 'Research Support', desc: 'Our librarians provide dedicated research assistance, literature reviews and citation guidance for all academic levels.' },
  { icon: '🖨️', title: 'Printing & Scanning', desc: 'High-speed printing, scanning and photocopying services available at affordable rates across all library floors.' },
  { icon: '🤫', title: 'Study Spaces', desc: 'Silent study rooms, group discussion rooms and collaborative workspaces — all bookable online.' },
  { icon: '🌐', title: 'Inter-Library Loans', desc: 'Can\'t find what you need? We partner with libraries across East Africa and globally to get you the resources you require.' },
];

const databases = [
  { name: 'JSTOR', desc: 'Academic journals, books and primary sources' },
  { name: 'PubMed', desc: 'Biomedical and health sciences literature' },
  { name: 'IEEE Xplore', desc: 'Engineering and technology research' },
  { name: 'LexisNexis', desc: 'Legal research and case law' },
  { name: 'Emerald Insight', desc: 'Business and management research' },
  { name: 'Scopus', desc: 'Multidisciplinary abstract and citation database' },
];

export default function LibraryPage() {
  return (
    <div className="bg-white">

      {/* Hero */}
      <div className="bg-[var(--navy)] py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{backgroundImage: 'radial-gradient(circle at 60% 50%, var(--gold) 0%, transparent 50%)'}}>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
            <Link href="/" className="hover:text-[var(--gold)] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[var(--gold)]">Library</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}>
            ZGU Library
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl">
            Your gateway to knowledge — 500,000+ resources at your fingertips.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <a href="#"
              className="bg-[var(--gold)] text-[var(--navy)] px-8 py-3 rounded font-bold text-sm uppercase tracking-widest hover:bg-white transition-all duration-300">
              Search Catalogue
            </a>
            <a href="#"
              className="border border-white/40 text-white px-8 py-3 rounded font-bold text-sm uppercase tracking-widest hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all duration-300">
              Digital Library
            </a>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-[var(--gold)] py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: '500,000+', label: 'Physical Resources' },
            { number: '50,000+', label: 'E-Books & Journals' },
            { number: '20+', label: 'Research Databases' },
            { number: '6', label: 'Library Floors' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-bold text-[var(--navy)]"
                style={{ fontFamily: 'Playfair Display, serif' }}>{stat.number}</div>
              <div className="text-[var(--navy)]/70 text-sm uppercase tracking-wide mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Services */}
      <section className="py-24 px-6 bg-[var(--gray)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[var(--gold)] text-xs font-bold uppercase tracking-[0.3em]">What We Offer</span>
            <h2 className="text-4xl font-bold text-[var(--navy)] mt-3"
              style={{ fontFamily: 'Playfair Display, serif' }}>
              Library Services
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

      {/* Databases */}
      <section className="py-24 px-6 bg-[var(--navy)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[var(--gold)] text-xs font-bold uppercase tracking-[0.3em]">Online Access</span>
            <h2 className="text-4xl font-bold text-white mt-3"
              style={{ fontFamily: 'Playfair Display, serif' }}>
              Research Databases
            </h2>
            <div className="w-16 h-1 bg-[var(--gold)] mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {databases.map((db) => (
              <div key={db.name}
                className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-[var(--gold)]/50 hover:bg-white/10 transition-all duration-300 cursor-pointer group">
                <h3 className="text-[var(--gold)] font-bold text-xl mb-2 group-hover:text-white transition-colors"
                  style={{ fontFamily: 'Playfair Display, serif' }}>{db.name}</h3>
                <p className="text-gray-400 text-sm">{db.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hours */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[var(--gold)] text-xs font-bold uppercase tracking-[0.3em]">Visit Us</span>
            <h2 className="text-4xl font-bold text-[var(--navy)] mt-3"
              style={{ fontFamily: 'Playfair Display, serif' }}>
              Opening Hours
            </h2>
            <div className="w-16 h-1 bg-[var(--gold)] mx-auto mt-4" />
          </div>
          <div className="bg-[var(--gray)] rounded-2xl overflow-hidden">
            {[
              { day: 'Monday — Friday', hours: '7:00 AM — 10:00 PM' },
              { day: 'Saturday', hours: '8:00 AM — 8:00 PM' },
              { day: 'Sunday', hours: '10:00 AM — 6:00 PM' },
              { day: 'Public Holidays', hours: '10:00 AM — 4:00 PM' },
            ].map((item, index) => (
              <div key={item.day}
                className={`flex justify-between items-center px-8 py-5 ${index !== 3 ? 'border-b border-gray-200' : ''}`}>
                <span className="font-semibold text-[var(--navy)]">{item.day}</span>
                <span className="text-[var(--gold)] font-bold">{item.hours}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}