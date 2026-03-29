import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[var(--navy)] text-white">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-[var(--gold)] flex items-center justify-center font-bold text-[var(--navy)] text-xl"
              style={{fontFamily: 'Playfair Display, serif'}}>
              Z
            </div>
            <div>
              <div className="font-bold text-lg tracking-wide" style={{fontFamily: 'Playfair Display, serif'}}>ZENITH</div>
              <div className="text-[var(--gold)] text-xs tracking-[0.2em]">GLOBAL UNIVERSITY</div>
            </div>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Rise Beyond Limits. Shaping Africa's next generation of leaders, 
            innovators and change-makers through world-class education.
          </p>
          
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-[var(--gold)] font-bold text-xs uppercase tracking-[0.2em] mb-6">Quick Links</h4>
          <ul className="space-y-3">
            {['About ZGU', 'Admissions', 'Programmes', 'Students', 'News & Events', 'Library', 'ZGU Shop'].map((link) => (
              <li key={link}>
                <Link href="#" className="text-gray-400 text-sm hover:text-[var(--gold)] transition-colors">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Faculties */}
        <div>
          <h4 className="text-[var(--gold)] font-bold text-xs uppercase tracking-[0.2em] mb-6">Faculties</h4>
          <ul className="space-y-3">
            {['Technology & Computing', 'Law', 'Business & Management', 'Health Sciences', 'Education', 'Social Sciences'].map((faculty) => (
              <li key={faculty}>
                <Link href="#" className="text-gray-400 text-sm hover:text-[var(--gold)] transition-colors">
                  {faculty}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-[var(--gold)] font-bold text-xs uppercase tracking-[0.2em] mb-6">Contact Us</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex gap-3">
              <span className="text-[var(--gold)] mt-0.5">📍</span>
              <span>Plot 27, Kampala Road, Kampala, Uganda</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[var(--gold)]">📞</span>
              <span>+256 709 884 276</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[var(--gold)]">✉</span>
              <span>info@zenithglobal.ac.ug</span>
            </li>
            <li className="flex gap-3">
              <span className="text-[var(--gold)]">🕐</span>
              <span>Mon – Fri: 8:00am – 5:00pm</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Gold Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-[var(--gold)]/40 to-transparent" />

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
        <span>© 2026 Zenith Global University. All Rights Reserved.</span>
        <div className="flex gap-3">
  <a href="#" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-xs text-gray-400 hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all duration-200">F</a>
  <a href="#" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-xs text-gray-400 hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all duration-200">T</a>
  <a href="#" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-xs text-gray-400 hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all duration-200">I</a>
  <a href="#" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-xs text-gray-400 hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all duration-200">L</a>
</div>
      </div>
    </footer>
  );
}