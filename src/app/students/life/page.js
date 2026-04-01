import Link from 'next/link';

export default function LifePage() {
  return (
    <div className="bg-white">
      <div className="bg-[#0a1628] py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0" style={{background: 'radial-gradient(circle at 40% 50%, rgba(201,168,76,0.15) 0%, transparent 60%)'}} />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
            <Link href="/" className="hover:text-[#c9a84c]">Home</Link><span>/</span>
            <Link href="/students" className="hover:text-[#c9a84c]">Students</Link><span>/</span>
            <span className="text-[#c9a84c]">Life at ZGU</span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">Life at ZGU</h1>
          <p className="text-gray-300 text-xl max-w-2xl">More than a degree — a transformative journey that shapes who you become.</p>
        </div>
      </div>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <span className="text-[#c9a84c] text-xs font-bold uppercase tracking-[0.3em]">Campus Experience</span>
              <h2 className="text-4xl font-bold text-[#0a1628] mt-3 mb-6">A Campus That Inspires</h2>
              <p className="text-gray-500 leading-relaxed mb-4">Located in the heart of Kampala, ZGU's campus is a vibrant hub of academic activity, cultural exchange and personal growth. From sunrise study sessions in our world-class library to evening events on the campus grounds, every day at ZGU is an opportunity.</p>
              <p className="text-gray-500 leading-relaxed mb-4">Our multicultural community — with students from 40+ countries — creates an environment that prepares you for global citizenship and cross-cultural leadership.</p>
              <p className="text-gray-500 leading-relaxed">Whether you're collaborating on a research project, representing ZGU at a national debate, training at our gym, or building the next startup at our innovation hub — life at ZGU is always full.</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&q=80" className="rounded-xl w-full h-48 object-cover" alt="Students" />
              <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80" className="rounded-xl w-full h-48 object-cover mt-8" alt="Campus" />
              <img src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&q=80" className="rounded-xl w-full h-48 object-cover" alt="Events" />
              <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&q=80" className="rounded-xl w-full h-48 object-cover mt-8" alt="Friends" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {[
              { icon: '🏋️', title: 'Sports & Fitness', desc: 'State-of-the-art gym, swimming pool, football pitch, basketball courts, tennis and volleyball.' , image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80' },
              { icon: '🎭', title: 'Arts & Culture', desc: 'Music studio, drama club, art exhibitions, cultural festivals celebrating ZGU\'s 40+ nationalities.', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&q=80' },
              { icon: '🚀', title: 'Innovation Hub', desc: 'Co-working spaces, startup incubator, hackathons and entrepreneurship challenges year-round.', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&q=80' },
            ].map((item) => (
              <div key={item.title} className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="overflow-hidden h-48">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6 bg-white">
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-[#0a1628] text-xl mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-[#0a1628] text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Experience ZGU Life?</h2>
          <p className="text-gray-400 text-lg mb-8">Join 15,000+ students already living the ZGU experience.</p>
          <Link href="/admissions" className="bg-[#c9a84c] text-[#0a1628] px-10 py-4 rounded font-bold text-sm uppercase tracking-widest hover:bg-white transition-all duration-300">Apply Now</Link>
        </div>
      </section>
    </div>
  );
}