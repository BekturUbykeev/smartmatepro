import React from 'react';

export default function Home() {
  return (
    <main style={{ fontFamily: 'Inter, sans-serif', margin: 0, backgroundColor: '#fff' }}>
      {/* Hero section */}
      <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: 'linear-gradient(145deg, #f0f4ff, #e6f0ff)', padding: '3rem 2rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', background: 'linear-gradient(to right, #007aff, #00c6ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>SmartMatePro</h1>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>Smarter communication starts here</h2>
        <p style={{ maxWidth: '600px', fontSize: '1.1rem' }}>AI-powered assistant that talks and texts like your best team member.</p>
      </section>

      {/* Demo Chat Carousel */}
      <section style={{ padding: '3rem 2rem', background: '#f9fafc' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, textAlign: 'center', marginBottom: '1rem' }}>How SmartMatePro Works</h2>
        <p style={{ maxWidth: '600px', fontSize: '1.1rem', margin: '0 auto 2rem', textAlign: 'center' }}>Real-life examples of how SmartMatePro assists your business, 24/7.</p>
        <div style={{
          display: 'flex',
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          gap: '1.5rem',
          paddingBottom: '1rem',
          maxWidth: '1200px',
          margin: '0 auto',
          paddingLeft: '1rem',
          paddingRight: '1rem'
        }}>
          {[
            {
              name: 'Emma',
              avatar: '/avatars/emma.png',
              question: "Hi, can I reschedule my appointment for tomorrow?",
              businessAvatar: '/avatars/smartmatepro.png',
              businessName: 'SmartMatePro',
              answer: "Yes, of course. What time works best for you?"
            },
            {
              name: 'James',
              avatar: '/avatars/james.png',
              question: "Do you have any availability this weekend?",
              businessAvatar: '/avatars/smartmatepro.png',
              businessName: 'SmartMatePro',
              answer: "Yes, we have slots this Saturday: 10 AM and 1 PM. Which one works for you?"
            },
            {
              name: 'Linda',
              avatar: '/avatars/linda.png',
              question: "What are your business hours today?",
              businessAvatar: '/avatars/smartmatepro.png',
              businessName: 'SmartMatePro',
              answer: "We’re open until 6 PM. Would you like to schedule a visit?"
            }
          ].map((chat, index) => (
            <div key={index} style={{ flex: '0 0 320px', scrollSnapAlign: 'start', padding: '1.5rem', background: '#fff', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.06)', textAlign: 'left', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <img src={chat.avatar} alt={chat.name} style={{ width: '32px', height: '32px', borderRadius: '999px', marginRight: '0.5rem' }} />
                  <strong>{chat.name}:</strong>
                </div>
                <p style={{ marginBottom: '1rem' }}>{chat.question}</p>
              </div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <img src={chat.businessAvatar} alt={chat.businessName} style={{ width: '32px', height: '32px', borderRadius: '999px', marginRight: '0.5rem' }} />
                  <strong>{chat.businessName}:</strong>
                </div>
                <p>{chat.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Section */}
      <section style={{ padding: '3rem 2rem', background: '#ffffff', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 700 }}>Why SmartMatePro?</h2>
        <ul style={{ listStyle: 'none', padding: 0, fontSize: '1.1rem', margin: '1rem 0' }}>
          {[
            "24/7 AI-powered communication",
            "Voice and text assistant in one platform",
            "Integrated calendar booking",
            "Customizable tone and responses",
            "Fast, no-code setup"
          ].map((item, i) => (
            <li key={i}>✔ {item}</li>
          ))}
        </ul>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
          {['WhatsApp', 'Instagram', 'Telegram', 'Messenger', 'Gmail'].map((platform, i) => (
            <span key={i} style={{ backgroundColor: '#f1f3f5', padding: '0.5rem 1rem', borderRadius: '999px' }}>{platform}</span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '3rem 2rem', background: 'linear-gradient(135deg, #f4f7fc, #e8f0fe)', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 700 }}>Try SmartMatePro</h2>
        <p style={{ fontSize: '1.25rem', fontWeight: 500, marginBottom: '1rem' }}>Let your business speak smarter</p>
        <button style={{ padding: '1rem 2rem', backgroundColor: '#111827', color: 'white', fontSize: '1.1rem', fontWeight: 600, border: 'none', borderRadius: '12px', cursor: 'pointer' }}>
          Get Started
        </button>
      </section>
    </main>
  );
}
