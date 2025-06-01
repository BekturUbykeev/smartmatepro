import React, { useState } from 'react';

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const chatExamples = [
    {
      name: 'Emma',
      avatar: '/avatars/emma.png',
      question: "Hi, can I reschedule my appointment for tomorrow?",
      businessAvatar: '/avatars/smartmatepro.png',
      businessName: 'SmartMatePro',
      answer: "Sure! I’ve moved your appointment to tomorrow at 3 PM."
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
  ];

  const nextSlide = () => setCurrentIndex((currentIndex + 1) % chatExamples.length);
  const prevSlide = () => setCurrentIndex((currentIndex - 1 + chatExamples.length) % chatExamples.length);

  return (
    <main style={{ fontFamily: 'Inter, sans-serif', margin: 0, backgroundColor: '#fff' }}>
      {/* Hero section */}
      <section style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', background: 'linear-gradient(145deg, #f0f4ff, #e6f0ff)', padding: '3rem 2rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 'bold', background: 'linear-gradient(to right, #007aff, #00c6ff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>SmartMatePro</h1>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>Smarter communication starts here</h2>
        <p style={{ maxWidth: '600px', fontSize: '1.1rem' }}>AI-powered assistant that talks and texts like your best team member.</p>
      </section>

      {/* Demo Chat Carousel */}
      <section style={{ padding: '3rem 2rem', background: '#f9fafc', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1rem' }}>How SmartMatePro Works</h2>
        <p style={{ maxWidth: '600px', fontSize: '1.1rem', margin: '0 auto 2rem' }}>Real-life examples of how SmartMatePro assists your business, 24/7.</p>

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <button onClick={prevSlide} style={{ fontSize: '1.5rem', background: 'none', border: 'none', cursor: 'pointer' }}>◀</button>
          <div style={{ padding: '1.5rem', background: '#fff', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.06)', textAlign: 'left', maxWidth: '360px', width: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
              <img src={chatExamples[currentIndex].avatar} alt={chatExamples[currentIndex].name} style={{ width: '32px', height: '32px', borderRadius: '999px', marginRight: '0.5rem' }} />
              <strong>{chatExamples[currentIndex].name}:</strong>
            </div>
            <p style={{ marginBottom: '1rem' }}>{chatExamples[currentIndex].question}</p>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
              <img src={chatExamples[currentIndex].businessAvatar} alt={chatExamples[currentIndex].businessName} style={{ width: '32px', height: '32px', borderRadius: '999px', marginRight: '0.5rem' }} />
              <strong>{chatExamples[currentIndex].businessName}:</strong>
            </div>
            <p>{chatExamples[currentIndex].answer}</p>
          </div>
          <button onClick={nextSlide} style={{ fontSize: '1.5rem', background: 'none', border: 'none', cursor: 'pointer' }}>▶</button>
        </div>
      </section>

      {/* Why Section */}
      <section style={{ padding: '3rem 2rem', background: '#ffffff', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 700 }}>Why SmartMatePro?</h2>
        <ul style={{ listStyle: 'none', padding: 0, fontSize: '1.1rem', margin: '1rem 0' }}>
          {["24/7 AI-powered communication", "Voice and text assistant in one platform", "Integrated calendar booking", "Customizable tone and responses", "Fast, no-code setup"].map((item, i) => (
            <li key={i}>✔ {item}</li>
          ))}
        </ul>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
          {["WhatsApp", "Instagram", "Telegram", "Messenger", "Gmail"].map((platform, i) => (
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
