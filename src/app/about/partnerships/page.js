import Link from 'next/link';

const partners = [
  { name: 'Massachusetts Institute of Technology', country: 'USA', flag: '🇺🇸', type: 'Research', desc: 'Joint research in AI, sustainable energy and technology innovation.' },
  { name: 'University of Oxford', country: 'UK', flag: '🇬🇧', type: 'Academic', desc: 'Student exchange programmes and joint postgraduate research.' },
  { name: 'Harvard University', country: 'USA', flag: '🇺🇸', type: 'Academic', desc: 'Faculty development and public health research collaboration.' },
  { name: 'University of Cape Town', country: 'South Africa', flag: '🇿🇦', type: 'Research', desc: 'African legal studies and human rights research partnership.' },
  { name: 'Makerere University', country: 'Uganda', flag: '🇺🇬', type: 'Local', desc: 'Joint academic programmes and student mobility agreements.' },
  { name: 'University of Nairobi', country: 'Kenya', flag: '🇰🇪', type: 'Regional', desc: 'East Africa regional research and academic exchange.' },
  { name: 'Dar es Salaam University', country: 'Tanzania', flag: '🇹🇿', type: 'Regional', desc: 'Cross-border student exchange and joint research initiatives.' },
  { name: 'London School of Economics', country: 'UK', flag: '🇬🇧', type: 'Academic', desc: 'Business, economics and finance faculty collaboration.' },
];

export default function PartnershipsPage() {
  return (
    <div className="bg-white">
      <div className="bg-[#0a1628] py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0" style={{background: 'radial-gradient(circle at 30% 50%, rgba(201,168,76,0.15) 0%, transparent 60%)'}} />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
            <Link href="/" className="hover:text-[#c9a84c]">Home</Link><span>/</span>
            <Link href="/about" className="hover:text-[#c9a84c]">About ZGU</Link><span>/</span>
            <span className="text-[#c9a84c]">Partnerships</span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">Collaboration & Partnerships</h1>
          <p className="text-gray-300 text-xl max-w-2xl">50+ global partnerships connecting ZGU students to the world.</p>
        </div>
      </div>

      <div className="bg-[#c9a84c] py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: '50+', label: 'Partner Universities' },
            { number: '40+', label: 'Partner Countries' },
            { number: '500+', label: 'Exchange Students' },
            { number: '20+', label: 'Joint Research Projects' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-bold text-[#0a1628]">{stat.number}</div>
              <div className="text-[#0a1628]/70 text-sm uppercase tracking-wide mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <section className="py-24 px-6 bg-[#f4f6f9]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#c9a84c] text-xs font-bold uppercase tracking-[0.3em]">Global Network</span>
            <h2 className="text-4xl font-bold text-[#0a1628] mt-3">Our Partner Institutions</h2>
            <div className="w-16 h-1 bg-[#c9a84c] mx-auto mt-4" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {partners.map((partner) => (
              <div key={partner.name} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex gap-4">
                <div className="text-4xl">{partner.flag}</div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-[#0a1628]">{partner.name}</h3>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-gray-400 text-xs">{partner.country}</span>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                      partner.type === 'Research' ? 'bg-blue-100 text-blue-700' :
                      partner.type === 'Academic' ? 'bg-purple-100 text-purple-700' :
                      partner.type === 'Regional' ? 'bg-green-100 text-green-700' :
                      'bg-yellow-100 text-yellow-700'
                    }`}>{partner.type}</span>
                  </div>
                  <p className="text-gray-500 text-sm">{partner.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}