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

      {/* Hero */}
      <div className="bg-[#0a1628] py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(201,168,76,0.15),transparent_60%)]" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
            <Link href="/" className="hover:text-[#c9a84c]">Home</Link>
            <span>/</span>
            <Link href="/admissions" className="hover:text-[#c9a84c]">Admissions</Link>
            <span>/</span>
            <span className="text-[#c9a84c]">Tuition & Fees</span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">Tuition & Fees</h1>
          <p className="text-gray-300 text-xl max-w-2xl">
            Transparent, affordable fees for world-class education. All amounts in UGX per semester.
          </p>
        </div>
      </div>

      {/* Info Cards */}
      <section className="py-20 px-6 bg-[#f4f6f9]">
        <div className="max-w-7xl mx-auto">

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {[
              { icon: '💰', title: 'Application Fee', amount: 'UGX 50,000', desc: 'One-time non-refundable fee paid when submitting your application.' },
              { icon: '📅', title: 'Payment Plans', amount: 'Flexible', desc: 'Pay in installments — 50% at start, 50% mid-semester.' },
              { icon: '🎓', title: 'Scholarships', amount: 'Available', desc: 'Merit-based and need-based scholarships available.' },
            ].map((item) => (
              <div key={item.title} className="bg-white p-6 rounded-xl border">
                <div className="text-3xl mb-3">{item.icon}</div>
                <div className="text-lg font-bold text-[#c9a84c]">{item.amount}</div>
                <h3 className="font-semibold text-[#0a1628]">{item.title}</h3>
                <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Table */}
          <div className="bg-white rounded-xl border overflow-hidden">

            <div className="bg-[#0a1628] px-6 py-4">
              <h2 className="text-white font-bold text-lg">Fees Structure 2025/2026</h2>
              <p className="text-gray-400 text-sm">All fees in UGX per semester</p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-[#f4f6f9] text-left">
                  <tr>
                    <th className="px-6 py-3 font-semibold">Programme</th>
                    <th className="px-6 py-3 font-semibold">Level</th>
                    <th className="px-6 py-3 font-semibold">Tuition</th>
                    <th className="px-6 py-3 font-semibold">Functional</th>
                    <th className="px-6 py-3 font-semibold text-[#c9a84c]">Total</th>
                  </tr>
                </thead>

                <tbody>
                  {fees.map((fee, i) => (
                    <tr key={fee.programme} className="border-t hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">{fee.programme}</td>
                      <td className="px-6 py-4">
                        <span className={`text-xs px-2 py-1 rounded-full font-semibold ${
                          fee.level === 'Undergraduate'
                            ? 'bg-blue-100 text-blue-700'
                            : 'bg-purple-100 text-purple-700'
                        }`}>
                          {fee.level}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-gray-600">UGX {fee.tuition}</td>
                      <td className="px-6 py-4 text-gray-600">UGX {fee.functional}</td>
                      <td className="px-6 py-4 font-bold">UGX {fee.total}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap justify-center gap-4 py-10">
              <a
                href="/ZGU_Fees_Structure_2025_2026.pdf"
                download
                className="inline-flex items-center gap-2 bg-[#0a1628] text-white px-8 py-3 rounded font-bold text-sm uppercase tracking-widest hover:bg-[#c9a84c] hover:text-[#0a1628] transition-all"
              >
                Download PDF
              </a>

              <Link
                href="/admissions/apply"
                className="inline-flex items-center bg-[#c9a84c] text-[#0a1628] px-8 py-3 rounded font-bold text-sm uppercase tracking-widest hover:bg-[#0a1628] hover:text-white transition-all"
              >
                Apply Now
              </Link>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}