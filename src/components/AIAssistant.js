'use client';
import { useState, useRef, useEffect } from 'react';

const getResponse = (input) => {
  const msg = input.toLowerCase();

  if (msg.match(/hi|hello|hey|good morning|good afternoon|greetings/))
    return "Hello! Welcome to Zenith Global University 👋 I'm the ZGU Assistant. How can I help you today? You can ask me about programmes, fees, admissions, campus life and more!";

  if (msg.match(/programme|course|study|faculty|department|degree/))
    return "ZGU offers 200+ programmes across 6 faculties: 💻 Technology (Computer Science, Software Engineering, Cybersecurity, Data Science), ⚖️ Law, 📊 Business, 🏥 Health Sciences, 🎓 Education, and 🌍 Social Sciences. Visit our Admissions page for the full list!";

  if (msg.match(/computer science|software|cyber|data science|tech|it|information technology/))
    return "Our Faculty of Technology offers BSc Computer Science, BSc Software Engineering, BSc Cybersecurity and BSc Data Science & AI — all 3-year programmes. At postgraduate level we offer MSc Computer Science and MSc Cybersecurity. Led by Dr. Robert Ssemakula, former Google engineer and MIT PhD!";

  if (msg.match(/law|llb|llm|legal/))
    return "Our Faculty of Law offers the LLB (Bachelor of Laws) — a 4-year programme, and LLM Commercial Law at postgraduate level. Led by Prof. Amina Hassan, an international human rights law specialist with a PhD from the University of Cape Town.";

  if (msg.match(/business|mba|accounting|finance|marketing|management/))
    return "The Faculty of Business offers BBA Business Administration, BSc Accounting & Finance at undergraduate level, and the MBA at postgraduate level. All programmes are internationally accredited and industry-focused.";

  if (msg.match(/fee|cost|tuition|pay|price|money|ugx|afford/))
    return "ZGU fees per semester range from UGX 1,600,000 to UGX 2,500,000 for tuition, plus UGX 450,000–500,000 functional fees. Application fee is UGX 50,000. Scholarships and flexible payment plans are available! Visit our Admissions page for the full fees structure.";

  if (msg.match(/scholarship|bursary|financial aid|support|funding/))
    return "Yes! ZGU offers merit-based scholarships, need-based bursaries and flexible payment plans. Contact our admissions office at admissions@zenithglobal.ac.ug or call +256 700 000 000 to discuss your options.";

  if (msg.match(/apply|application|admission|enrol|register|join|how to/))
    return "Applying to ZGU is simple! You need: UCE with 5 passes (including English & Maths), UACE with 2 principal passes, completed application form, 2 passport photos, National ID/Passport copy, and UGX 50,000 application fee. Click Apply Now on our website or visit us at Plot 27, Kampala Road!";

  if (msg.match(/requirement|qualify|qualify|eligible|entry|qualify/))
    return "Minimum entry requirements: UCE (O-Level) with at least 5 passes including English and Mathematics, and UACE (A-Level) with at least 2 principal passes. Some programmes like Medicine and Law may have specific subject requirements.";

  if (msg.match(/intake|when|start|semester|academic year|2025|2026/))
    return "ZGU is currently accepting applications for the 2025/2026 Academic Year! 🎉 Semesters run from August–December and February–June. Apply early to secure your place and be eligible for scholarships!";

  if (msg.match(/location|where|address|campus|find|directions|map/))
    return "ZGU is located at Plot 27, Kampala Road, Kampala, Uganda 📍 We are easily accessible by public transport from all parts of Kampala. Open Monday–Friday, 8:00 AM – 5:00 PM.";

  if (msg.match(/contact|email|phone|call|reach|whatsapp/))
    return "You can reach us at: 📞 +256 700 000 000 | ✉ info@zenithglobal.ac.ug | 📍 Plot 27, Kampala Road, Kampala. Admissions: admissions@zenithglobal.ac.ug. Office hours: Mon–Fri, 8AM–5PM.";

  if (msg.match(/vice chancellor|vc|chancellor|founder|president|leadership|management|team/))
    return "ZGU is led by Prof. Lwanyaga Ibrahim — Vice Chancellor and Founder. A visionary technologist with a BSc Computer Science from Victoria University Kampala, he founded ZGU with one mission: to build Africa's most innovative university. Our leadership team includes experts from Oxford, Harvard, MIT and top African institutions.";

  if (msg.match(/library|book|research|journal|database|resource/))
    return "The ZGU Library is world-class! 📚 We have 500,000+ physical resources, 50,000+ e-books and journals, and access to 20+ research databases including JSTOR, IEEE Xplore, PubMed and LexisNexis. Open 7 days a week!";

  if (msg.match(/hostel|accommodation|housing|stay|live|dormitory/))
    return "ZGU offers both on-campus and off-campus accommodation options 🏠 All with 24/7 security, WiFi and utilities. Contact our Student Affairs office for availability and pricing: students@zenithglobal.ac.ug";

  if (msg.match(/sport|gym|fitness|football|basketball|swim|recreation|club/))
    return "ZGU has a state-of-the-art Student Recreation Centre with a gym, swimming pool, football pitch, basketball courts and more! 🏋️ We also have 30+ clubs and societies including the CS Society, Law Society, Debate Club, Rotaract and many more!";

  if (msg.match(/health|medical|hospital|doctor|nurse|clinic|wellness/))
    return "ZGU has a fully equipped on-campus Medical Centre with qualified doctors and nurses available daily. We also offer free and confidential counselling services for mental health and personal development. Your wellbeing is our priority! 🏥";

  if (msg.match(/career|job|employment|work|internship|graduate|after/))
    return "95% of ZGU graduates secure employment within 6 months of graduation! 💼 Our Career Centre provides job placement support, CV writing, interview coaching and direct links to top employers across Uganda, East Africa and globally.";

  if (msg.match(/partner|international|global|foreign|exchange|mit|oxford|harvard/))
    return "ZGU partners with 50+ universities globally including MIT, Oxford and institutions across Africa, Europe and Asia 🌍 We offer student exchange programmes, joint research initiatives and international internship opportunities.";

  if (msg.match(/rank|best|top|award|accredit|recogni/))
    return "ZGU is ranked #1 Fastest Growing University in East Africa 2026! 🏆 Our degrees are internationally accredited and recognised by employers worldwide. We scored 80% in the National Council for Higher Education evaluation — one of the highest in Uganda!";

  if (msg.match(/online|distance|virtual|elearning|remote/))
    return "ZGU offers blended learning with online resources through our VClass-equivalent learning platform. Some programmes have distance learning options. Contact admissions for details on online and hybrid programmes.";

  if (msg.match(/postgraduate|masters|phd|msc|ma|mba|graduate/))
    return "ZGU offers 6+ postgraduate programmes: MSc Computer Science, MSc Cybersecurity, MBA, LLM Commercial Law, MEd Educational Leadership, and MA Development Studies. All 2-year programmes. Research PhD options also available!";

  if (msg.match(/shop|merchandise|hoodie|tshirt|cap|uniform|wear/))
    return "Show your ZGU pride! 🛍️ Visit the ZGU Shop for official merchandise including hoodies (UGX 85,000), polo shirts (UGX 55,000), caps (UGX 35,000), backpacks and more. Free delivery on orders above UGX 100,000 within Kampala!";

  if (msg.match(/thank|thanks|appreciate|helpful|great|awesome|cool/))
    return "You are welcome! 😊 It is my pleasure to help. If you have more questions about ZGU, feel free to ask anytime. We hope to see you at Zenith Global University — Rise Beyond Limits! 🎓";

  if (msg.match(/bye|goodbye|see you|later|exit/))
    return "Goodbye! 👋 Thank you for your interest in Zenith Global University. We look forward to welcoming you to our community. Rise Beyond Limits! 🌟";

  return "That's a great question! For detailed information on that topic, please contact our team directly: 📞 +256 700 000 000 | ✉ info@zenithglobal.ac.ug | or visit us at Plot 27, Kampala Road, Kampala. We are happy to help! 😊";
};

export default function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: "Hello! Welcome to Zenith Global University 👋 I'm the ZGU Assistant. Ask me anything about programmes, admissions, fees, campus life and more!" }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = () => {
    if (!input.trim() || loading) return;
    const userMessage = { role: 'user', content: input };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setLoading(true);

    setTimeout(() => {
      const response = getResponse(input);
      setMessages([...newMessages, { role: 'assistant', content: response }]);
      setLoading(false);
    }, 800);
  };

  return (
    <>
      {open && (
        <div style={{
          position: 'fixed', bottom: '90px', right: '24px', zIndex: 9999,
          width: '380px', maxWidth: 'calc(100vw - 2rem)',
          background: 'white', borderRadius: '16px',
          boxShadow: '0 25px 50px rgba(0,0,0,0.25)',
          border: '1px solid #e5e7eb', overflow: 'hidden'
        }}>
          {/* Header */}
          <div style={{ background: '#0a1628', padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <img src="/reon.jpg" style={{width: '36px', height: '36px', borderRadius: '50%', objectFit: 'cover', objectPosition: 'top'}} />
              <div>
                <div style={{ color: 'white', fontWeight: 'bold', fontSize: '14px' }}>ZGU Assistant</div>
                <div style={{ color: '#4ade80', fontSize: '11px' }}>● Online — Ask me anything!</div>
              </div>
            </div>
            <button onClick={() => setOpen(false)} style={{ color: 'rgba(255,255,255,0.6)', background: 'none', border: 'none', fontSize: '18px', cursor: 'pointer' }}>✕</button>
          </div>

          {/* Messages */}
          <div style={{ height: '320px', overflowY: 'auto', padding: '16px', background: '#f9fafb', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {messages.map((msg, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start' }}>
                {msg.role === 'assistant' && (
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: '#c9a84c', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#0a1628', fontSize: '12px', marginRight: '8px', flexShrink: 0, alignSelf: 'flex-end' }}>Z</div>
                )}
                <div style={{
                  maxWidth: '78%', padding: '10px 14px', borderRadius: '16px', fontSize: '13px', lineHeight: '1.6',
                  background: msg.role === 'user' ? '#0a1628' : 'white',
                  color: msg.role === 'user' ? 'white' : '#374151',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
                  borderBottomRightRadius: msg.role === 'user' ? '4px' : '16px',
                  borderBottomLeftRadius: msg.role === 'assistant' ? '4px' : '16px',
                }}>
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <img src="/reon.jpg" style={{width: '28px', height: '28px', borderRadius: '50%', objectFit: 'cover', objectPosition: 'top', marginRight: '8px', flexShrink: 0, alignSelf: 'flex-end'}} />
                <div style={{ background: 'white', borderRadius: '16px', borderBottomLeftRadius: '4px', padding: '12px 16px', boxShadow: '0 1px 3px rgba(0,0,0,0.08)', display: 'flex', gap: '4px', alignItems: 'center' }}>
                  <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#c9a84c', animation: 'bounce 1s infinite 0ms' }} />
                  <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#c9a84c', animation: 'bounce 1s infinite 150ms' }} />
                  <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#c9a84c', animation: 'bounce 1s infinite 300ms' }} />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions */}
          <div style={{ padding: '8px 12px', background: 'white', borderTop: '1px solid #f3f4f6', display: 'flex', gap: '6px', overflowX: 'auto' }}>
            {['Programmes', 'Fees', 'How to Apply', 'Campus Life', 'Contact'].map((q) => (
              <button key={q} onClick={() => setInput(q)}
                style={{ fontSize: '11px', background: '#f4f6f9', color: '#0a1628', border: 'none', padding: '6px 12px', borderRadius: '20px', cursor: 'pointer', whiteSpace: 'nowrap', fontWeight: '600', flexShrink: 0 }}>
                {q}
              </button>
            ))}
          </div>

          {/* Input */}
          <div style={{ padding: '12px 16px', background: 'white', borderTop: '1px solid #f3f4f6', display: 'flex', gap: '8px' }}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') sendMessage(); }}
              placeholder="Ask anything about ZGU..."
              style={{ flex: 1, border: '1px solid #e5e7eb', borderRadius: '12px', padding: '10px 14px', fontSize: '13px', outline: 'none', fontFamily: 'DM Sans, sans-serif' }}
            />
            <button onClick={sendMessage} disabled={loading || !input.trim()}
              style={{ background: '#c9a84c', color: '#0a1628', border: 'none', width: '42px', height: '42px', borderRadius: '12px', cursor: 'pointer', fontWeight: 'bold', fontSize: '16px', flexShrink: 0, opacity: loading || !input.trim() ? 0.5 : 1 }}>
              ➤
            </button>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <div
        onClick={() => setOpen(!open)}
        style={{
          position: 'fixed', bottom: '24px', right: '24px', zIndex: 9999,
          width: '64px', height: '64px', borderRadius: '50%',
          background: open ? '#c9a84c' : '#0a1628',
          color: open ? '#0a1628' : 'white',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'pointer', boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
          fontSize: '26px', transition: 'all 0.3s ease'
        }}>
        {open ? '✕' : '💬'}
        {!open && (
          <div style={{
            position: 'absolute', top: '0', right: '0',
            width: '16px', height: '16px', borderRadius: '50%',
            background: '#c9a84c', border: '2px solid white'
          }} />
        )}
      </div>
    </>
  );
}