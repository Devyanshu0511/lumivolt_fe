import React from 'react';
import { motion } from 'framer-motion';
import './ComingSoon.css';

import logo from '../assets/logo.png';

const ComingSoon = () => {
  return (
    <div className="coming-soon-container">
      {/* Animated background orbs */}
      <motion.div
        className="glow-orb orb-1"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="glow-orb orb-2"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      <div className="coming-soon-content">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src={logo} alt="Lumivolt Logo" className="brand-logo-img" />

          <div className="status-badge">
            <span className="pulse">●</span> COMING SOON
          </div>

          <h1 className="main-title">
            The Future of <br />
            <span style={{ color: '#ffb800' }}>Solar Energy</span>
          </h1>

          <p className="subtitle">
            We're building something revolutionary. Lumivolt is redefining how we harness the sun's power for a sustainable tomorrow.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <div style={{ height: '1px', width: '50px', backgroundColor: 'rgba(255,255,255,0.1)', alignSelf: 'center' }}></div>
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: '#444', letterSpacing: '4px' }}>Launching 2026</span>
              <div style={{ height: '1px', width: '50px', backgroundColor: 'rgba(255,255,255,0.1)', alignSelf: 'center' }}></div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <div className="coming-soon-footer">
        © 2026 LUMIVOLT ENERGY. ALL RIGHTS RESERVED.
      </div>
    </div>
  );
};

export default ComingSoon;
