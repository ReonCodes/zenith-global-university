import Link from 'next/link';

const events = [
  { date: 'Apr 15, 2026', title: 'ZGU Open Day 2026', category: 'Open Day', time: '9:00 AM — 4:00 PM', location: 'Main Campus, Kampala Road', desc: 'Join us for ZGU\'s annual Open Day. Tour the campus, meet lecturers and learn about our 200+ programmes. Free entry for all prospective students and parents.' },
  { date: 'Apr 22, 2026', title: 'Annual Career Fair 2026', category: 'Career', time: '10:00 AM — 5:00 PM', location: 'ZGU Main Hall', desc: 'Connect with 50+ top employers including MTN, Stanbic, PwC and more. Bring your CV and dress professionally.' },
  { date: 'May 5, 2026', title: 'ZGU Innovation Hackathon', category: 'Technology', time: '8:00 AM — 8:00 PM', location: 'Faculty of Technology', desc: '24-hour hackathon challenging students to solve Uganda\'s biggest problems with technology. UGX 5,000,000 in prizes.' },
  { date: 'May 20, 2026', title: 'East Africa Law Moot Court', category: 'Law', time: '9:00 AM — 6:00 PM', location: 'ZGU Law Moot Court', desc: 'Annual inter-university moot court competition featuring universities from Uganda, Kenya, Tanzania and Rwanda.' },
  { date: 'Jun 10, 2026', title: 'ZGU Graduation Ceremony 2026', category: 'Graduation', time: '9:00 AM — 1:00 PM', location: 'Kampala Serena Conference Centre', desc: 'The 12th ZGU Graduation Ceremony. Over 3,000 graduates from the Class of 2026 receive their degrees.' },
  { date: 'Jun 25, 2026', title: 'Research Symposium 2026', category: 'Research', time: '8:30 AM — 5:00 PM', location: 'ZGU Conference Centre', desc: 'Annual academic research symposium featuring postgraduate research presentations and keynote speakers from MIT and Oxford.' },
];

export default function EventsPage() {
  return (
    <div className="bg-white">
      <div className="bg-[#0a1628] py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0" style={{background: 'radial-gradient(circle at 60% 50%, rgba(201,168,76,0.15) 0%, transparent 60%)'}} />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
            <Link href="/" className="hover:text-[#c9a84c]">Home</Link><span>/</span>
            <Link href="/news" className="hover:text-[#c9a84c]">News & Gallery</Link><span>/</span>
            <span className="text-[#c9a84c]">Events</span>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">Upcoming Events</h1>
          <p className="text-gray-300 text-xl max-w-2xl">Stay connected with what's happening at Zenith Global University.</p>
        </div>
      </div>

      <section className="py-24 px-6 bg-[#f4f6f9]">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-6">
            {events.map((event) => (
              <div key={event.title} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row">
                <div className="bg-[#0a1628] text-center p-6 md:p-8 flex flex-col items-center justify-center min-w-32 md:min-w-40">
                  <div className="text-[#c9a84c] text-xs font-bold uppercase tracking-widest mb-1">
                    {event.date.split(' ')[0]}
                  </div>
                  <div className="text-white text-4xl font-bold leading-none">
                    {event.date.split(' ')[1].replace(',', '')}
                  </div>
                  <div className="text-gray-400 text-sm mt-1">
                    {event.date.split(' ')[2]}
                  </div>
                </div>
                <div className="p-6 flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-[#c9a84c]/15 text-[#c9a84c] text-xs font-bold px-3 py-1 rounded-full uppercase">{event.category}</span>
                    <span className="text-gray-400 text-xs">🕐 {event.time}</span>
                  </div>
                  <h3 className="text-[#0a1628] font-bold text-xl mb-2 group-hover:text-[#c9a84c] transition-colors">{event.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-3">{event.desc}</p>
                  <div className="text-gray-400 text-xs">📍 {event.location}</div>
                </div>
                <div className="p-6 flex items-center">
                  <Link href="/contact" className="bg-[#0a1628] text-white px-6 py-3 rounded-lg font-bold text-sm uppercase tracking-wide hover:bg-[#c9a84c] hover:text-[#0a1628] transition-all duration-300 whitespace-nowrap">
                    Register
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}