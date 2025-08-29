// src/app/components/Footer.tsx

import React from 'react';
import { FaLinkedin, FaGithub, FaXTwitter } from 'react-icons/fa6'; // Corrected import for React Icons

const Footer = () => {
  return (
    <footer className="w-full flex justify-center py-6 px-4 bg-gradient-to-r from-fuchsia-500 to-purple-600 shadow-xl">
      <div className="flex gap-8 flex-wrap items-center justify-center text-white">
        {/* LinkedIn */}
        <a
          href="https://linkedin.com/in/uwimana-rachel"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 p-2 rounded-lg transition-transform duration-300 hover:scale-110 relative group glass-container overflow-hidden"
        >
          <div className="text-2xl z-10">
            <FaLinkedin />
          </div>
          <span className="text-lg font-bold z-10">LinkedIn</span>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/omoyi"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 p-2 rounded-lg transition-transform duration-300 hover:scale-110 relative group glass-container overflow-hidden"
        >
          <div className="text-2xl z-10">
            <FaGithub />
          </div>
          <span className="text-lg font-bold z-10">GitHub</span>
        </a>

        {/* X (Twitter) */}
        <a
          href="https://x.com/uwi_rachel"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 p-2 rounded-lg transition-transform duration-300 hover:scale-110 relative group glass-container overflow-hidden"
        >
          <div className="text-2xl z-10">
            <FaXTwitter />
          </div>
          <span className="text-lg font-bold z-10">X</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;