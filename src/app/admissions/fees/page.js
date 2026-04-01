import Link from 'next/link';

const fees = [
  { programme: 'BSc Computer Science', level: 'Undergraduate', tuition: '1,800,000', functional: '450,000', total: '2,250,000' },
  { programme: 'BSc Software Engineering', level: 'Undergraduate', tuition: '1,800,000', functional: '450,000', total: '2,250,000' },
  { programme: 'BSc Cybersecurity', level: 'Undergraduate', tuition: '1,900,000', functional: '450,000', total: '2,350,000' },
  { programme: 'Bachelor of Laws (LLB)', level: 'Undergraduate', tuition: '2,000,000', functional: '450,000', total: '2,450,000' },
  { programme: 'BBA Business Administration', level: 'Undergraduate', tuition: '1,600,000', functional: '450,000', total: '2,050,000' },
  { programme: 'BSc Accounting & Finance', level: 'Undergraduate', tuition: '1,700,000', functional: '450,000', total: '2,150,000' },
  { programme: 'BSc Nursing', level: 'Undergraduate', tuition: '2,200,000', functional: '450,000', total: '2,650,000' },
  { programme: 'BSc Public Health', level: 'Undergraduate', tuition: '1,800,000', functional: '450,000', total: '2,250,000' },
  { programme: 'BEd Arts / BEd Science', level: 'Undergraduate', tuition: '1,500,000', functional: '450,000', total: '1,950,000' },
  { programme: 'MSc Computer Science', level: 'Postgraduate', tuition: '2,200,000', functional: '500,000', total: '2,700,000' },
  { programme: 'MSc Cybersecurity', level: 'Postgraduate', tuition: '2,300,000', functional: '500,000', total: '2,800,000' },
  { programme: 'MBA', level: 'Postgraduate', tuition: '2,500,000', functional: '500,000', total: '3,000,000' },
  { programme: 'LLM Commercial Law', level: 'Postgraduate', tuition: '2,200,000', functional: '500,000', total: '2,700,000' },
  { programme: 'MEd Educational Leadership', level: 'Postgraduate', tuition: '2,000,000', functional: '500,000', total: '2,500,000' },
];

export default function FeesPage() {
  return (
    <div className="bg-white">
      <div className="bg-[#0a1628] py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0" style={{background: 'radial-gradient(circle at 50% 50%, rgba(201,168,76,0.15) 0%, transparent 60%)'}} />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
            <Link href="/" className="hover:text-[#c9a84c]">Home</Link><span>/</span>
            <Link href="/admissions" className="hover:text-[#c9a84c]">Admissions</Link><span>/</span>
            <span className="text-[#c9a84c]">Tuition & Fees</span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">Tuition & Fees</h1>
          <p className="text-gray-300 text-xl max-w-2xl">Transparent, affordable fees for world-class education. All amounts in UGX per semester.</p>
        </div>
      </div>

      <section className="py-24 px-6 bg-[#f4f6f9]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              { icon: '💰', title: 'Application Fee', amount: 'UGX 50,000', desc: 'One-time non-refundable fee paid when submitting your application.' },
              { icon: '📅', title: 'Payment Plans', amount: 'Flexible', desc: 'Pay in installments — 50% at semester start, 50% by mid-semester.' },
              { icon: '🎓', title: 'Scholarships', amount: 'Available', desc: 'Merit-based and need-based scholarships available. Apply through admissions.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-8 shadow-sm text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <div className="text-2xl font-bold text-[#c9a84c] mb-2">{item.amount}</div>
                <h3 className="font-bold text-[#0a1628] text-lg mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="bg-[#0a1628] px-6 py-4">
              <h2 className="text-white font-bold text-xl">Complete Fees Structure 2025/2026</h2>
              <p className="text-gray-400 text-sm mt-1">All fees in Uganda Shillings (UGX) per semester</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#f4f6f9]">
                    <th className="text-left px-6 py-4 text-sm font-bold text-[#0a1628] uppercase tracking-wide">Programme</th>
                    <th className="text-left px-6 py-4 text-sm font-bold text-[#0a1628] uppercase tracking-wide">Level</th>
                    <th className="text-left px-6 py-4 text-sm font-bold text-[#0a1628] uppercase tracking-wide">Tuition</th>
                    <th className="text-left px-6 py-4 text-sm font-bold text-[#0a1628] uppercase tracking-wide">Functional</th>
                    <th className="text-left px-6 py-4 text-sm font-bold text-[#c9a84c] uppercase tracking-wide">Total/Semester</th>
                  </tr>
                </thead>
                <tbody>
                  {fees.map((fee, index) => (
                    <tr key={fee.programme} className={`border-b border-gray-100 hover:bg-[#f4f6f9] transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                      <td className="px-6 py-4 font-medium text-[#0a1628]">{fee.programme}</td>
                      <td className="px-6 py-4">
                        <span className={`text-xs font-bold px-2 py-1 rounded-full ${fee.level === 'Undergraduate' ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700'}`}>
                          {fee.level}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-600 text-sm">UGX {fee.tuition}</td>
                      <td className="px-6 py-4 text-gray-600 text-sm">UGX {fee.functional}</td>
                      <td className="px-6 py-4 font-bold text-[#0a1628]">UGX {fee.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-6 bg-[#f4f6f9] text-sm text-gray-500">
              * Fees are subject to annual review. Scholarships and flexible payment plans available. Contact admissions@zenithglobal.ac.ug for details.
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link href="/admissions/apply" className="bg-[#c9a84c] text-[#0a1628] px-12 py-4 rounded font-bold text-sm uppercase tracking-widest hover:bg-[#0a1628] hover:text-white transition-all duration-300">
              Apply Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}