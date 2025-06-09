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
          {/* ...Cards (Emma, James, Linda) stay unchanged... */}
        </div>
      </motion.section>

      {/* Why SmartMatePro updated section (no image, full code) */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{
          padding: '4rem 1.5rem',
          background: 'linear-gradient(180deg, #ffffff 0%, #f2fcff 100%)',
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center'
        }}
      >
        <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '2rem', color: '#111827' }}>Why SmartMatePro</h2>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0, maxWidth: '640px', fontSize: '1rem', color: '#333' }}>
          {["AI-powered assistant for modern businesses", "Built to match your brand’s tone", "Handles chats and calls 24/7", "Integrates with your favorite tools", "Set up in minutes, no tech skills needed"].map((item, i) => (
            <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <span style={{ fontSize: '1.25rem', color: '#00c6ff' }}>✓</span>
              <span>{item}</span>
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
