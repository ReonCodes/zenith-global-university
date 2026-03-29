import Link from 'next/link';

const news = [
  {
    category: 'Academic',
    date: 'March 20, 2026',
    title: 'ZGU Launches Africa\'s First AI & Cybersecurity Research Centre',
    excerpt: 'Zenith Global University officially opens its doors to the most advanced technology research centre on the African continent, drawing international attention from Google, Microsoft and the African Union.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&q=80',
  },
  {
    category: 'Admissions',
    date: 'March 15, 2026',
    title: 'Applications Now Open for 2025/2026 Academic Year',
    excerpt: 'ZGU invites applications from outstanding students across Uganda and the world for our undergraduate and postgraduate programmes. Scholarships available.',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80',
  },
  {
    category: 'Events',
    date: 'March 10, 2026',
    title: 'ZGU Students Win East Africa Inter-University Debate Championship',
    excerpt: 'Our law and social sciences students brought home the trophy at the prestigious East Africa Inter-University Debate Championship held in Nairobi, Kenya.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80',
  },
  {
    category: 'Research',
    date: 'March 5, 2026',
    title: 'ZGU Partners with MIT for Joint Research Programme in Sustainable Energy',
    excerpt: 'A landmark partnership between Zenith Global University and MIT will see joint research into sustainable energy solutions for sub-Saharan Africa.',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&q=80',
  },
  {
    category: 'Student Life',
    date: 'February 28, 2026',
    title: 'ZGU Opens State-of-the-Art Student Recreation Centre',
    excerpt: 'Our brand new student recreation centre features a gym, swimming pool, basketball courts and a student lounge — all designed for student wellbeing.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80',
  },
  {
    category: 'Awards',
    date: 'February 20, 2026',
    title: 'ZGU Ranked #1 Fastest Growing University in East Africa 2026',
    excerpt: 'The African University Rankings 2026 has placed Zenith Global University as the fastest growing university in East Africa for the third consecutive year.',
    image: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=600&q=80',
  },
];

const gallery = [
  'https://images.unsplash.com/photo-1562774053-701939374585?w=400&q=80',
  'https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=400&q=80',
  'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400&q=80',
  'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=400&q=80',
  'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&q=80',
  'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80',
];

export default function NewsPage() {
  return (
    <div className="bg-white">

      {/* Page Hero */}
      <div className="bg-[var(--navy)] py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{backgroundImage: 'radial-gradient(circle at 30% 50%, var(--gold) 0%, transparent 50%)'}}>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
            <Link href="/" className="hover:text-[var(--gold)] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[var(--gold)]">News & Gallery</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}>
            News & Gallery
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl">
            Stay up to date with the latest happenings at Zenith Global University.
          </p>
        </div>
      </div>

      {/* News Grid */}
      <section className="py-24 px-6 bg-[var(--gray)]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="text-[var(--gold)] text-xs font-bold uppercase tracking-[0.3em]">Latest</span>
            <h2 className="text-4xl font-bold text-[var(--navy)] mt-3"
              style={{ fontFamily: 'Playfair Display, serif' }}>
              ZGU News
            </h2>
            <div className="w-16 h-1 bg-[var(--gold)] mt-4" />
          </div>

          {/* Featured News */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300">
              <div className="overflow-hidden h-72">
                <img src={news[0].image} alt={news[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-[var(--gold)]/15 text-[var(--gold)] text-xs font-bold px-3 py-1 rounded-full uppercase">
                    {news[0].category}
                  </span>
                  <span className="text-gray-400 text-xs">{news[0].date}</span>
                </div>
                <h3 className="text-[var(--navy)] font-bold text-2xl mb-3 leading-snug"
                  style={{ fontFamily: 'Playfair Display, serif' }}>
                  {news[0].title}
                </h3>
                <p className="text-gray-500 leading-relaxed mb-4">{news[0].excerpt}</p>
                <Link href="#" className="inline-flex items-center gap-2 text-[var(--navy)] font-bold text-sm uppercase tracking-wide hover:text-[var(--gold)] transition-colors">
                  Read More →
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {news.slice(1, 4).map((item) => (
                <div key={item.title}
                  className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex gap-4 p-4">
                  <div className="overflow-hidden rounded-lg w-28 h-24 flex-shrink-0">
                    <img src={item.image} alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[var(--gold)] text-xs font-bold uppercase">{item.category}</span>
                      <span className="text-gray-400 text-xs">{item.date}</span>
                    </div>
                    <h3 className="text-[var(--navy)] font-bold text-sm leading-snug mb-1 line-clamp-2"
                      style={{ fontFamily: 'Playfair Display, serif' }}>{item.title}</h3>
                    <Link href="#" className="text-xs font-bold text-[var(--navy)] hover:text-[var(--gold)] transition-colors">
                      Read More →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* More News */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {news.slice(4).map((item) => (
              <div key={item.title}
                className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex gap-4 p-5">
                <div className="overflow-hidden rounded-lg w-24 h-20 flex-shrink-0">
                  <img src={item.image} alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div>
                  <span className="text-[var(--gold)] text-xs font-bold uppercase">{item.category}</span>
                  <h3 className="text-[var(--navy)] font-bold text-sm mt-1 mb-2 leading-snug"
                    style={{ fontFamily: 'Playfair Display, serif' }}>{item.title}</h3>
                  <span className="text-gray-400 text-xs">{item.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[var(--gold)] text-xs font-bold uppercase tracking-[0.3em]">Visual Stories</span>
            <h2 className="text-4xl font-bold text-[var(--navy)] mt-3"
              style={{ fontFamily: 'Playfair Display, serif' }}>
              Photo Gallery
            </h2>
            <div className="w-16 h-1 bg-[var(--gold)] mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((img, index) => (
              <div key={index}
                className="group overflow-hidden rounded-xl aspect-square cursor-pointer">
                <img src={img} alt={`ZGU Gallery ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}