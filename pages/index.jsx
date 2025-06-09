import React from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main style={{ fontFamily: 'Inter, sans-serif', margin: 0, backgroundColor: '#fff' }}>

      {/* Hero section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '4rem 1.5rem',
          background: 'linear-gradient(180deg, #eef3fb 0%, #dceeff 100%)',
          textAlign: 'center'
        }}
      >
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          background: 'linear-gradient(to right, #007aff, #00c6ff)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>SmartMatePro</h1>
        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: 700,
          marginBottom: '1rem',
          color: '#111827'
        }}>AI that speaks your brand.</h2>
        <p style={{ maxWidth: '640px', fontSize: '1rem', color: '#333' }}>
          SmartMatePro adapts to your voice, your clients, your business.
        </p>
      </motion.section>

      {/* Examples section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{
          padding: '3rem 1.5rem',
          background: '#f9fafc',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center'
        }}
      >
        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1rem' }}>How SmartMatePro Works</h2>
        <p style={{ maxWidth: '600px', fontSize: '1rem', marginBottom: '2rem' }}>
          Real-life examples of how SmartMatePro assists your business, 24/7.
        </p>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          width: '100%',
          alignItems: 'center'
        }}>
          {['emma', 'james', 'linda'].map((name, idx) => (
            <div key={idx} style={{ maxWidth: '360px', width: '90%', padding: '1.5rem', background: '#fff', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.06)' }}>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                <img src={`/avatars/${name}.png`} alt={name} style={{ width: '32px', height: '32px', borderRadius: '999px', marginRight: '0.5rem' }} />
                <strong>{name.charAt(0).toUpperCase() + name.slice(1)}:</strong>
              </div>
              <p>{
                name === 'emma' ? 'Hi, can I reschedule my appointment for tomorrow?' :
                name === 'james' ? 'Do you have any availability this weekend?' :
                'What are your business hours today?'
              }</p>
              <div style={{ display: 'flex', alignItems: 'center', marginTop: '0.5rem' }}>
                <img src="/avatars/smartmatepro.png" alt="SmartMatePro" style={{ width: '32px', height: '32px', borderRadius: '999px', marginRight: '0.5rem' }} />
                <strong>SmartMatePro:</strong>
              </div>
              <p>{
                name === 'emma' ? "Absolutely! What time's good for you?" :
                name === 'james' ? 'Yes, we have slots this Saturday: 10 AM and 1 PM. Which one works for you?' :
                'We’re open until 6 PM. Would you like to schedule a visit?'
              }</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Why SmartMatePro? */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{
          minHeight: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'linear-gradient(to bottom, #ffffff, #f0fcff)',
          textAlign: 'center',
          padding: '2rem'
        }}
      >
        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#111827' }}>
          Why <span style={{ fontWeight: 900 }}>SmartMatePro</span>?
        </h2>
      </motion.section>

      {/* 24/7 AI Assistant */}
      <motion.section style={fullPageSectionStyle}>
        <img src="/features/clock-icon.png" alt="24/7 AI Assistant" style={{ width: '120px', height: '120px', marginBottom: '1rem' }} />
        <div>
          <h2 style={{ fontSize: '2rem', fontWeight: 700 }}>24/7 AI Assistant</h2>
          <p style={{ fontSize: '1.1rem', maxWidth: '480px', margin: '0 auto' }}>
            Always available to respond to both spoken questions and text messages
          </p>
        </div>
      </motion.section>

      {/* Learns and Improves */}
      <motion.section style={fullPageSectionStyle}>
        <img src="/features/learns-icon.png" alt="Learns and Improves" style={{ width: '120px', height: '120px', marginBottom: '1rem' }} />
        <div>
          <h2 style={{ fontSize: '2rem', fontWeight: 700 }}>Learns and Improves</h2>
          <p style={{ fontSize: '1.1rem', maxWidth: '480px', margin: '0 auto' }}>
            Continuously gets better with every interaction
          </p>
        </div>
      </motion.section>

      {/* Built-in Smart Scheduler */}
      <motion.section style={fullPageSectionStyle}>
        <img src="/features/scheduler-icon.png" alt="Built-in Smart Scheduler" style={{ width: '120px', height: '120px', marginBottom: '1rem' }} />
        <div>
          <h2 style={{ fontSize: '2rem', fontWeight: 700 }}>Built-in Smart Scheduler</h2>
          <p style={{ fontSize: '1.1rem', maxWidth: '480px', margin: '0 auto' }}>
            Beyond booking — SmartMatePro schedules, reminds, reschedules, and adapts — all in real-time, across platforms.
          </p>
        </div>
      </motion.section>

      {/* Supports Multiple Languages */}
      <motion.section style={fullPageSectionStyle}>
        <img src="/features/multilang-icon.png" alt="Supports Multiple Languages" style={{ width: '120px', height: '120px', marginBottom: '1rem' }} />
        <div>
          <h2 style={{ fontSize: '2rem', fontWeight: 700 }}>Supports Multiple Languages</h2>
          <p style={{ fontSize: '1.1rem', maxWidth: '480px', margin: '0 auto' }}>
            From English to Spanish, French to Japanese — SmartMatePro communicates with your clients in their native language.
          </p>
        </div>
      </motion.section>

      {/* Smart Analytics & Insights */}
      <motion.section style={fullPageSectionStyle}>
        <img src="/features/analytics-icon.png" alt="Smart Analytics & Insights" style={{ width: '120px', height: '120px', marginBottom: '1rem' }} />
        <div>
          <h2 style={{ fontSize: '2rem', fontWeight: 700 }}>Smart Analytics & Insights</h2>
          <p style={{ fontSize: '1.1rem', maxWidth: '480px', margin: '0 auto' }}>
            SmartMatePro turns every interaction into valuable insight. See what clients ask, when they ask, and how to serve them better — effortlessly.
          </p>
        </div>
      </motion.section>

      {/* Final CTA */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{
          padding: '3rem 1.5rem',
          background: 'linear-gradient(135deg, #f4f7fc, #e8f0fe)',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center'
        }}
      >
        <h2 style={{ fontSize: '1.75rem', fontWeight: 700 }}>Try SmartMatePro</h2>
        <p style={{ fontSize: '1.1rem', fontWeight: 500, marginBottom: '1.5rem' }}>Let your business speak smarter</p>
        <button style={{
          padding: '1rem 2rem',
          backgroundColor: '#111827',
          color: 'white',
          fontSize: '1rem',
          fontWeight: 600,
          border: 'none',
          borderRadius: '12px',
          cursor: 'pointer',
          width: 'fit-content',
          minWidth: '160px'
        }}>
          Get Started
        </button>
      </motion.section>

    </main>
  );
}

const fullPageSectionStyle = {
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  background: '#ffffff',
  textAlign: 'center',
  padding: '2rem'
};
