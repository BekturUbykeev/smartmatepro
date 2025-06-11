import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import { motion } from 'framer-motion';

const sections = [
  {
    key: 'hero',
    anchor: 'hero',
    content: (
      <motion.div
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
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: '#111827' }}>
          AI that speaks your brand.
        </h2>
        <p style={{
          fontSize: '1.1rem',
          fontWeight: 400,
          color: '#444',
          lineHeight: '1.6',
          maxWidth: '600px',
          margin: '1.5rem auto 2rem'
        }}>
          Built to sound like you. Trained to serve like you.<br />
          Always learning. Always on.
        </p>
        <button
          onClick={() => window.fullpage_api.moveTo('examples')}
          style={{
            padding: '1rem 2rem',
            backgroundColor: '#111827',
            color: 'white',
            fontSize: '1rem',
            fontWeight: 600,
            border: 'none',
            borderRadius: '12px',
            cursor: 'pointer',
            minWidth: '160px'
          }}
        >
          Get Started
        </button>
      </motion.div>
    )
  },
  {
    key: 'examples',
    anchor: 'examples',
    content: (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
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
      </motion.div>
    )
  },
  {
    key: 'why',
    anchor: 'why',
    content: (
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
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
      </motion.div>
    )
  }
];

export default function Home() {
  return (
    <ReactFullpage
      anchors={sections.map(s => s.anchor)}
      navigation
      scrollingSpeed={1000}
      autoScrolling
      loopBottom
      render={() => (
        <ReactFullpage.Wrapper>
          {sections.map(section => (
            <div className="section" key={section.key}>
              {section.content}
            </div>
          ))}
        </ReactFullpage.Wrapper>
      )}
    />
  );
}
