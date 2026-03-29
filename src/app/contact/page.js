'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white">

      {/* Hero */}
      <div className="bg-[var(--navy)] py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{backgroundImage: 'radial-gradient(circle at 50% 50%, var(--gold) 0%, transparent 50%)'}}>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
            <Link href="/" className="hover:text-[var(--gold)] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[var(--gold)]">Contact</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4"
            style={{ fontFamily: 'Playfair Display, serif' }}>
            Contact Us
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl">
            We are here to help. Reach out to us anytime.
          </p>
        </div>
      </div>

      {/* Contact Grid */}
      <section className="py-24 px-6 bg-[var(--gray)]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <span className="text-[var(--gold)] text-xs font-bold uppercase tracking-[0.3em]">Get In Touch</span>
              <h2 className="text-3xl font-bold text-[var(--navy)] mt-3 mb-6"
                style={{ fontFamily: 'Playfair Display, serif' }}>
                Contact Information
              </h2>
            </div>

            {[
              { icon: '📍', title: 'Campus Address', info: 'Plot 27, Kampala Road\nKampala, Uganda' },
              { icon: '📞', title: 'Phone', info: '+256 700 000 000\n+256 709 884 276' },
              { icon: '✉', title: 'Email', info: 'info@zenithglobal.ac.ug\nadmissions@zenithglobal.ac.ug' },
              { icon: '🕐', title: 'Office Hours', info: 'Monday — Friday\n8:00 AM — 5:00 PM' },
            ].map((item) => (
              <div key={item.title}
                className="bg-white rounded-xl p-6 shadow-sm flex gap-4 hover:shadow-md transition-all">
                <div className="text-2xl">{item.icon}</div>
                <div>
                  <div className="text-[var(--gold)] text-xs font-bold uppercase tracking-wide mb-1">{item.title}</div>
                  <div className="text-gray-600 text-sm whitespace-pre-line">{item.info}</div>
                </div>
              </div>
            ))}

            {/* Socials */}
            <div className="bg-[var(--navy)] rounded-xl p-6">
              <div className="text-[var(--gold)] text-xs font-bold uppercase tracking-wide mb-4">Follow ZGU</div>
              <div className="flex gap-3">
                {[
                  { label: 'Facebook', url: '#' },
                  { label: 'Twitter/X', url: 'https://x.com/ReonWard' },
                  { label: 'Instagram', url: '#' },
                  { label: 'LinkedIn', url: 'https://linkedin.com/in/lwanyaga-ibrahim' },
                ].map((social) => (
                  <a key={social.label} href={social.url} target="_blank"
                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white text-xs font-bold hover:border-[var(--gold)] hover:text-[var(--gold)] transition-all">
                    {social.label[0]}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="bg-white rounded-2xl p-12 text-center shadow-xl h-full flex flex-col items-center justify-center">
                <div className="text-6xl mb-6">✅</div>
                <h2 className="text-3xl font-bold text-[var(--navy)] mb-4"
                  style={{ fontFamily: 'Playfair Display, serif' }}>Message Sent!</h2>
                <p className="text-gray-500 text-lg mb-8">
                  Thank you for reaching out. We will get back to you within 24 hours.
                </p>
                <button onClick={() => setSubmitted(false)}
                  className="bg-[var(--gold)] text-[var(--navy)] px-10 py-4 rounded font-bold text-sm uppercase tracking-widest hover:bg-[var(--navy)] hover:text-white transition-all duration-300">
                  Send Another Message
                </button>
              </div>
            ) : (
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="bg-[var(--navy)] px-8 py-6">
                  <h2 className="text-2xl font-bold text-white"
                    style={{ fontFamily: 'Playfair Display, serif' }}>Send Us a Message</h2>
                  <p className="text-gray-400 text-sm mt-1">We typically respond within 24 hours</p>
                </div>
                <div className="p-8 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-[var(--navy)] mb-2 uppercase tracking-wide">Full Name *</label>
                      <input name="name" value={form.name} onChange={handleChange}
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[var(--gold)] transition-colors"
                        placeholder="Your full name" />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-[var(--navy)] mb-2 uppercase tracking-wide">Email Address *</label>
                      <input name="email" type="email" value={form.email} onChange={handleChange}
                        className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[var(--gold)] transition-colors"
                        placeholder="your@email.com" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[var(--navy)] mb-2 uppercase tracking-wide">Subject *</label>
                    <select name="subject" value={form.subject} onChange={handleChange}
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[var(--gold)] transition-colors bg-white">
                      <option value="">Select a subject</option>
                      <option>Admissions Enquiry</option>
                      <option>Programme Information</option>
                      <option>Fees & Scholarships</option>
                      <option>Student Support</option>
                      <option>Partnership Enquiry</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-[var(--navy)] mb-2 uppercase tracking-wide">Message *</label>
                    <textarea name="message" value={form.message} onChange={handleChange} rows={6}
                      className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[var(--gold)] transition-colors resize-none"
                      placeholder="How can we help you?" />
                  </div>
                  <button onClick={handleSubmit}
                    className="w-full bg-[var(--gold)] text-[var(--navy)] py-4 rounded-lg font-bold text-sm uppercase tracking-widest hover:bg-[var(--navy)] hover:text-white transition-all duration-300">
                    Send Message
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-80 bg-[var(--navy)] relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <div className="text-5xl mb-4">📍</div>
            <div className="text-xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>
              Plot 27, Kampala Road, Kampala, Uganda
            </div>
            <div className="text-gray-400 mt-2 text-sm">Google Maps integration coming soon</div>
          </div>
        </div>
      </section>
    </div>
  );
}