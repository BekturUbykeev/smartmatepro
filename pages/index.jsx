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
        }}>
          SmartMatePro
        </h1>

        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: 700,
          marginBottom: '1rem',
          color: '#111827'
        }}>
          AI that speaks your brand.
        </h2>

        <p style={{
          fontSize: '1.1rem',
          fontWeight: 400,
          color: '#444',
          lineHeight: '1.6',
          textAlign: 'center',
          marginTop: '1.5rem',
          maxWidth: '600px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          Built to sound like you. Trained to serve like you.<br />
          Always learning. Always on.
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
        <h2 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1rem' }}>
          How SmartMatePro Works
        </h2>
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
            <div
              key={idx}
              style={{
                maxWidth: '360px',
                width: '90%',
                padding: '1.5rem',
                background: '#fff',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.06)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                <img
                  src={`/avatars/${name}.png`}
                  alt={name}
                  style={{ width: '32px', height: '32px', borderRadius: '999px', marginRight: '0.5rem' }}
                />
                <strong>{name.charAt(0).toUpperCase() + name.slice(1)}:</strong>
              </div>
              <p>
                {name === 'emma'
                  ? 'Hi, can I reschedule my appointment for tomorrow?'
                  : name === 'james'
                    ? 'Do you have any availability this weekend?'
                    : 'What are your business hours today?'}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', marginTop: '0.5rem' }}>
                <img
                  src="/avatars/smartmatepro.png"
                  alt="SmartMatePro"
                  style={{ width: '32px', height: '32px', borderRadius: '999px', marginRight: '0.5rem' }}
                />
                <strong>SmartMatePro:</strong>
              </div>
              <p>
                {name === 'emma'
                  ? "Absolutely! What time's good for you?"
                  : name === 'james'
                    ? 'Yes, we have slots this Saturday: 10 AM and 1 PM. Which one works for you?'
                    : 'We’re open until 6 PM. Would you like to schedule a visit?'}
              </p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Why SmartMatePro */}
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
          background: 'linear-gradient(180deg, #eef3fb 0%, #dceeff 100%)',
          textAlign: 'center',
          padding: '2rem'
        }}
      >
        <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: '#111827' }}>
          Why <span style={{ fontWeight: 900 }}>SmartMatePro</span>?
        </h2>
      </motion.section>

      {/* Feature Blocks */}
      {[
        {
          icon: 'clock',
          title: '24/7 AI Assistant',
          desc: 'Always available to respond to both spoken questions and text messages'
        },
        {
          icon: 'brain',
          title: 'Learns and Improves',
          desc: 'Continuously gets better with every interaction'
        },
        {
          icon: 'calendar',
          title: 'Built-in Smart Scheduler',
          desc: 'Beyond booking — SmartMatePro schedules, reminds, reschedules, and adapts — all in real-time, across platforms.'
        },
        {
          icon: 'language',
          title: 'Supports Multiple Languages',
          desc: 'From English to Spanish, French to Japanese — SmartMatePro communicates with your clients in their native language.'
        },
        {
          icon: 'analytic',
          title: 'Smart Analytics & Insights',
          desc: 'SmartMatePro turns every interaction into valuable insight. See what clients ask, when they ask, and how to serve them better — effortlessly.'
        }
      ].map((item, index) => (
        <motion.section key={index} style={fullPageSectionStyle}>
          <img
            src={`/icons/${item.icon}.png`}
            alt={item.title}
            style={{ width: '200px', height: '200px', marginBottom: '1rem' }}
          />
          <div>
            <h2 style={{ fontSize: '2rem', fontWeight: 700 }}>{item.title}</h2>
            <p style={{ fontSize: '1.1rem', maxWidth: '480px', margin: '0 auto' }}>{item.desc}</p>
          </div>
        </motion.section>
      ))}

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
        <p style={{ fontSize: '1.1rem', fontWeight: 500, marginBottom: '1.5rem' }}>
          Let your business speak smarter
        </p>
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
