
import React from 'react';

const examples = [
  {
    question: 'Hi, can I reschedule my appointment for tomorrow?',
    answer: 'Sure! I’ve moved your appointment to tomorrow at 3 PM. You’ll get a reminder an hour before.',
  },
  {
    question: 'Do you have any availability this weekend?',
    answer: 'Yes, we have two slots available this Saturday: 10 AM and 1 PM. Which one works for you?',
  },
  {
    question: 'What are your business hours today?',
    answer: 'We’re open until 6 PM today. Let me know if you’d like to schedule a visit.',
  },
];

export default function Home() {
  return (
    <main style={{ fontFamily: 'Inter, sans-serif', backgroundColor: '#fff', margin: 0 }}>
      {/* Hero */}
      <section style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '3rem 2rem', background: 'linear-gradient(145deg, #f0f4ff, #e6f0ff)', color: '#111827' }}>
        <div style={{ fontSize: '3rem', fontWeight: 700, background: 'linear-gradient(to right, #007aff, #00c6ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '1rem' }}>SmartMatePro</div>
        <h2 style={{ fontSize: '2rem', fontWeight: 700 }}>Smarter communication starts here</h2>
        <p style={{ maxWidth: '600px', fontSize: '1.1rem' }}>AI-powered assistant that talks and texts like your best team member.</p>
      </section>

      {/* Examples Carousel */}
      <section style={{ height: '100vh', background: 'linear-gradient(180deg, #f9fafc, #ffffff)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '3rem 2rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>How SmartMatePro Works</h2>
        <p style={{ maxWidth: '600px', fontSize: '1.1rem', marginBottom: '2rem' }}>Real-life examples of how SmartMatePro assists your business, 24/7.</p>
        <div style={{ display: 'flex', overflowX: 'auto', gap: '1.5rem', padding: '1rem 0', maxWidth: '90%' }}>
          {examples.map((chat, index) => (
            <div key={index} style={{
              minWidth: '280px',
              background: '#ffffff',
              borderRadius: '12px',
              boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
              padding: '1.5rem',
              textAlign: 'left'
            }}>
              <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>🧑 Customer:</p>
              <p style={{ fontStyle: 'italic', marginBottom: '1rem' }}>{chat.question}</p>
              <p style={{ fontWeight: 600, marginBottom: '0.5rem' }}>🤖 SmartMatePro:</p>
              <p>{chat.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why SmartMatePro */}
      <section style={{ height: '100vh', background: 'linear-gradient(180deg, #ffffff, #f6f9fd)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '3rem 2rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>Why SmartMatePro?</h2>
        <ul style={{ listStyle: 'none', padding: 0, textAlign: 'left' }}>
          {['24/7 AI-powered communication', 'Voice and text assistant in one platform', 'Integrated calendar booking', 'Customizable tone and responses', 'Fast, no-code setup'].map((item, i) => (
            <li key={i} style={{ fontSize: '1.1rem', margin: '0.5rem 0' }}>✔ {item}</li>
          ))}
        </ul>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem', marginTop: '2rem' }}>
          {['WhatsApp', 'Instagram', 'Telegram', 'Messenger', 'Gmail'].map((s, i) => (
            <div key={i} style={{ backgroundColor: '#f1f3f5', padding: '0.5rem 1rem', borderRadius: '999px', fontWeight: 500, fontSize: '0.95rem' }}>{s}</div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ height: '100vh', background: 'linear-gradient(135deg, #f4f7fc, #e8f0fe)', color: '#111827', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', padding: '3rem 2rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>Try SmartMatePro</h2>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem' }}>Let your business speak smarter</h3>
        <button style={{ padding: '1rem 2rem', backgroundColor: '#111827', color: 'white', border: 'none', borderRadius: '12px', fontSize: '1.1rem', fontWeight: 600, cursor: 'pointer', transition: 'background 0.3s ease' }}>
          Get Started
        </button>
      </section>
    </main>
  );
}
