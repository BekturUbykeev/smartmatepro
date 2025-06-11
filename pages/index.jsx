import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import { motion } from 'framer-motion';

const ExampleCard = ({ name }) => (
  <div
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
);

const features = [
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
];

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
          maxWidth: '520px',
          marginTop: '1rem',
          marginLeft: 'auto',
          marginRight: 'auto',
          whiteSpace: 'pre-line'
        }}>
          Built to sound like you. Trained to serve like you.\nAlways learning. Always on.
        </p>
        <button
          onClick={() => window.fullpage_api.moveTo('examples')}
          style={{
            marginTop: '2rem',
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
  // ... (rest of the sections stay the same)
  ...features.map((item, index) => ({
    key: `feature-${index}`,
    anchor: `feature-${index}`,
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
          background: '#ffffff',
          textAlign: 'center',
          padding: '2rem'
        }}
      >
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 300 }}
          src={`/icons/${item.icon}.png`}
          alt={item.title}
          style={{ width: '220px', height: '220px', marginBottom: '1rem' }}
        />
        <h2 style={{ fontSize: '2rem', fontWeight: 700 }}>{item.title}</h2>
        <p style={{ fontSize: '1.1rem', maxWidth: '480px', margin: '0 auto' }}>{item.desc}</p>
      </motion.div>
    )
  }))
];

export default function Home() {
  return (
    <ReactFullpage
      anchors={sections.map(s => s.anchor)}
      navigation
      scrollingSpeed={1000}
      autoScrolling
      loopBottom
      touchSensitivity={15}
      bigSectionsDestination={'top'}
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
