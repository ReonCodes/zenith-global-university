'use client';
import Link from 'next/link';

const programmes = [
  {
    icon: '💻',
    faculty: 'Faculty of Technology',
    description: 'Computer Science, Software Engineering, Cybersecurity, Data Science & AI.',
    courses: ['BSc Computer Science', 'BSc Software Engineering', 'BSc Cybersecurity'],
    color: 'from-blue-900 to-[var(--navy)]',
  },
  {
    icon: '⚖️',
    faculty: 'Faculty of Law',
    description: 'Commercial Law, Human Rights, International Law & Legal Practice.',
    courses: ['LLB Law', 'LLM Commercial Law', 'Diploma in Legal Practice'],
    color: 'from-amber-900 to-[var(--navy)]',
  },
  {
    icon: '📊',
    faculty: 'Faculty of Business',
    description: 'Business Administration, Accounting, Finance, Marketing & Entrepreneurship.',
    courses: ['BBA Business Administration', 'BSc Accounting & Finance', 'MBA'],
    color: 'from-emerald-900 to-[var(--navy)]',
  },
  {
    icon: '🏥',
    faculty: 'Faculty of Health Sciences',
    description: 'Nursing, Public Health, Pharmacy, Medical Laboratory Science.',
    courses: ['BSc Nursing', 'BSc Public Health', 'Diploma in Pharmacy'],
    color: 'from-red-900 to-[var(--navy)]',
  },
  {
    icon: '🎓',
    faculty: 'Faculty of Education',
    description: 'Education, Curriculum Development, Special Needs & Early Childhood.',
    courses: ['BEd Arts', 'BEd Science', 'MEd Educational Leadership'],
    color: 'from-purple-900 to-[var(--navy)]',
  },
  {
    icon: '🌍',
    faculty: 'Faculty of Social Sciences',
    description: 'International Relations, Development Studies, Psychology & Sociology.',
    courses: ['BA International Relations', 'BSc Psychology', 'MA Development Studies'],
    color: 'from-teal-900 to-[var(--navy)]',
  },
];

export default function Programmes() {
  return (
    <section className="py-24 bg-[var(--gray)]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[var(--gold)] text-xs font-bold uppercase tracking-[0.3em]">
            Academic Excellence
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--navy)] mt-3 mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}>
            Explore Our Programmes
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Choose from over 200 world-class programmes designed to prepare you 
            for leadership in a rapidly changing global landscape.
          </p>
          <div className="w-16 h-1 bg-[var(--gold)] mx-auto mt-6" />
        </div>

        {/* Programme Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programmes.map((prog) => (
            <div
              key={prog.faculty}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Card Top */}
              <div className={`bg-gradient-to-br ${prog.color} p-8 relative overflow-hidden`}>
                <div className="text-5xl mb-3">{prog.icon}</div>
                <h3 className="text-white font-bold text-xl leading-tight"
                  style={{ fontFamily: 'Playfair Display, serif' }}>
                  {prog.faculty}
                </h3>
                {/* Decorative circle */}
                <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-white/5" />
                <div className="absolute -right-2 -bottom-10 w-16 h-16 rounded-full bg-[var(--gold)]/10" />
              </div>

              {/* Card Body */}
              <div className="p-6">
                <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                  {prog.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {prog.courses.map((course) => (
                    <li key={course} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--gold)] flex-shrink-0" />
                      {course}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/admissions"
                  className="inline-flex items-center gap-2 text-[var(--navy)] font-bold text-sm uppercase tracking-wide hover:text-[var(--gold)] transition-colors group"
                >
                  View All Programmes
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <Link
            href="/admissions"
            className="bg-[var(--navy)] text-white px-10 py-4 rounded font-bold text-sm uppercase tracking-widest hover:bg-[var(--gold)] hover:text-[var(--navy)] transition-all duration-300"
          >
            View All 200+ Programmes
          </Link>
        </div>
      </div>
    </section>
  );
}