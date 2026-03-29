import Link from 'next/link';

const news = [
  {
    category: 'Academic',
    date: 'March 20, 2026',
    title: 'ZGU Launches Africa\'s First AI & Cybersecurity Research Centre',
    excerpt: 'Zenith Global University officially opens its doors to the most advanced technology research centre on the African continent, drawing international attention.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80',
  },
  {
    category: 'Admissions',
    date: 'March 15, 2026',
    title: 'Applications Now Open for 2025/2026 Academic Year',
    excerpt: 'ZGU invites applications from outstanding students across Uganda and the world for our undergraduate and postgraduate programmes.',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80',
  },
  {
    category: 'Events',
    date: 'March 10, 2026',
    title: 'ZGU Students Win East Africa Inter-University Debate Championship',
    excerpt: 'Our law and social sciences students brought home the trophy at the prestigious East Africa Inter-University Debate Championship held in Nairobi.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80',
  },
];

export default function NewsPreview() {
  return (
    <section className="py-24 bg-[var(--gray)]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <span className="text-[var(--gold)] text-xs font-bold uppercase tracking-[0.3em]">
              Latest Updates
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--navy)] mt-3"
              style={{ fontFamily: 'Playfair Display, serif' }}>
              News & Events
            </h2>
            <div className="w-16 h-1 bg-[var(--gold)] mt-4" />
          </div>
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-[var(--navy)] font-bold text-sm uppercase tracking-widest hover:text-[var(--gold)] transition-colors group"
          >
            All News
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* News Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item) => (
            <div
              key={item.title}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="overflow-hidden h-52">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-[var(--gold)]/15 text-[var(--gold)] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    {item.category}
                  </span>
                  <span className="text-gray-400 text-xs">{item.date}</span>
                </div>
                <h3 className="text-[var(--navy)] font-bold text-lg mb-3 leading-snug group-hover:text-[var(--gold)] transition-colors"
                  style={{ fontFamily: 'Playfair Display, serif' }}>
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {item.excerpt}
                </p>
                <Link
                  href="/news"
                  className="inline-flex items-center gap-1 text-[var(--navy)] font-bold text-xs uppercase tracking-wide hover:text-[var(--gold)] transition-colors"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}