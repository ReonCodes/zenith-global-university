'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function ApplyPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    nationality: '', programme: '', level: '', message: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white">

      {/* Page Hero */}
      <div className="bg-[var(--navy)] py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{backgroundImage: 'radial-gradient(circle at 50% 50%, var(--gold) 0%, transparent 50%)'}}>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
            <Link href="/" className="hover:text-[var(--gold)] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/admissions" className="hover:text-[var(--gold)] transition-colors">Admissions</Link>
            <span>/</span>
            <span className="text-[var(--gold)]">Apply</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}>
            Apply to ZGU
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl">
            Start your application today. Rise Beyond Limits.
          </p>
        </div>
      </div>

      {/* Application Form */}
      <section className="py-24 px-6 bg-[var(--gray)]">
        <div className="max-w-3xl mx-auto">
          {submitted ? (
            <div className="bg-white rounded-2xl p-12 text-center shadow-xl">
              <div className="text-6xl mb-6">🎓</div>
              <h2 className="text-3xl font-bold text-[var(--navy)] mb-4"
                style={{ fontFamily: 'Playfair Display, serif' }}>
                Application Received!
              </h2>
              <p className="text-gray-500 text-lg mb-8">
                Thank you for applying to Zenith Global University. 
                Our admissions team will contact you within 5 working days.
              </p>
              <Link href="/"
                className="bg-[var(--gold)] text-[var(--navy)] px-10 py-4 rounded font-bold text-sm uppercase tracking-widest hover:bg-[var(--navy)] hover:text-white transition-all duration-300">
                Back to Home
              </Link>
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-[var(--navy)] px-8 py-6">
                <h2 className="text-2xl font-bold text-white"
                  style={{ fontFamily: 'Playfair Display, serif' }}>
                  Admission Application Form
                </h2>
                <p className="text-gray-400 text-sm mt-1">2025/2026 Academic Year</p>
              </div>
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-bold text-[var(--navy)] mb-2 uppercase tracking-wide">First Name *</label>
                    <input name="firstName" value={form.firstName} onChange={handleChange}
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[var(--gold)] transition-colors"
                      placeholder="Enter your first name" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[var(--navy)] mb-2 uppercase tracking-wide">Last Name *</label>
                    <input name="lastName" value={form.lastName} onChange={handleChange}
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[var(--gold)] transition-colors"
                      placeholder="Enter your last name" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[var(--navy)] mb-2 uppercase tracking-wide">Email Address *</label>
                    <input name="email" type="email" value={form.email} onChange={handleChange}
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[var(--gold)] transition-colors"
                      placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[var(--navy)] mb-2 uppercase tracking-wide">Phone Number *</label>
                    <input name="phone" value={form.phone} onChange={handleChange}
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[var(--gold)] transition-colors"
                      placeholder="+256 700 000 000" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[var(--navy)] mb-2 uppercase tracking-wide">Nationality *</label>
                    <input name="nationality" value={form.nationality} onChange={handleChange}
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[var(--gold)] transition-colors"
                      placeholder="e.g. Ugandan" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[var(--navy)] mb-2 uppercase tracking-wide">Level of Study *</label>
                    <select name="level" value={form.level} onChange={handleChange}
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[var(--gold)] transition-colors bg-white">
                      <option value="">Select level</option>
                      <option>Undergraduate</option>
                      <option>Postgraduate</option>
                      <option>Academic Upgrading</option>
                    </select>
                  </div>
                </div>
                <div className="mb-6">
                  <label className="block text-sm font-bold text-[var(--navy)] mb-2 uppercase tracking-wide">Programme of Interest *</label>
                  <input name="programme" value={form.programme} onChange={handleChange}
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[var(--gold)] transition-colors"
                    placeholder="e.g. BSc Computer Science" />
                </div>
                <div className="mb-8">
                  <label className="block text-sm font-bold text-[var(--navy)] mb-2 uppercase tracking-wide">Additional Message</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={4}
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[var(--gold)] transition-colors resize-none"
                    placeholder="Tell us about yourself and why you want to study at ZGU..." />
                </div>
                <button onClick={handleSubmit}
                  className="w-full bg-[var(--gold)] text-[var(--navy)] py-4 rounded-lg font-bold text-sm uppercase tracking-widest hover:bg-[var(--navy)] hover:text-white transition-all duration-300">
                  Submit Application
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}