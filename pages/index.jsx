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

      {/* How It Works section */}
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
          <div style={{ maxWidth: '360px', width: '90%', padding: '1.5rem', background: '#fff', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.06)' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
              <img src="/avatars/emma.png" alt="Emma" style={{ width: '32px', height: '32px', borderRadius: '999px', marginRight: '0.5rem' }} />
              <strong>Emma:</strong>
            </div>
            <p>Hi, can I reschedule my appointment for tomorrow?</p>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '0.5rem' }}>
              <img src="/avatars/smartmatepro.png" alt="SmartMatePro" style={{ width: '32px', height: '32px', borderRadius: '999px', marginRight: '0.5rem' }} />
              <strong>SmartMatePro:</strong>
            </div>
            <p>Absolutely! What time's good for you?</p>
          </div>
          <div style={{ maxWidth: '360px', width: '90%', padding: '1.5rem', background: '#fff', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.06)' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
              <img src="/avatars/james.png" alt="James" style={{ width: '32px', height: '32px', borderRadius: '999px', marginRight: '0.5rem' }} />
              <strong>James:</strong>
            </div>
            <p>Do you have any availability this weekend?</p>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '0.5rem' }}>
              <img src="/avatars/smartmatepro.png" alt="SmartMatePro" style={{ width: '32px', height: '32px', borderRadius: '999px', marginRight: '0.5rem' }} />
              <strong>SmartMatePro:</strong>
            </div>
            <p>Yes, we have slots this Saturday: 10 AM and 1 PM. Which one works for you?</p>
          </div>
          <div style={{ maxWidth: '360px', width: '90%', padding: '1.5rem', background: '#fff', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.06)' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
              <img src="/avatars/linda.png" alt="Linda" style={{ width: '32px', height: '32px', borderRadius: '999px', marginRight: '0.5rem' }} />
              <strong>Linda:</strong>
            </div>
            <p>What are your business hours today?</p>
            <div style={{ display: 'flex', alignItems: 'center', marginTop: '0.5rem' }}>
              <img src="/avatars/smartmatepro.png" alt="SmartMatePro" style={{ width: '32px', height: '32px', borderRadius: '999px', marginRight: '0.5rem' }} />
              <strong>SmartMatePro:</strong>
            </div>
            <p>We’re open until 6 PM. Would you like to schedule a visit?</p>
          </div>
        </div>
      </motion.section>

      {/* Why SmartMatePro section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{
          padding: '3rem 1.5rem',
          background: '#ffffff',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center'
        }}
      >
        <h2 style={{ fontSize: '1.75rem', fontWeight: 700 }}>Why SmartMatePro?</h2>
        <ul style={{ listStyle: 'none', padding: 0, fontSize: '1rem', margin: '1.5rem 0' }}>
          {[
            "24/7 AI assistant for voice and text",
            "Learns and improves with every conversation",
            "Built-in calendar for seamless bookings",
            "Adapts to your brand’s tone and style",
            "Setup in minutes — no coding required"
          ].map((item, i) => (
            <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', justifyContent: 'center', marginBottom: '0.75rem' }}>
              <span style={{ fontSize: '1.25rem', color: '#007aff' }}>●</span> {item}
            </li>
          ))}
        </ul>
      </motion.section>

      {/* Final CTA section */}
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
