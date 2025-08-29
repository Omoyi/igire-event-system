import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="w-full flex justify-center py-6 px-4 bg-gradient-to-r from-fuchsia-500 to-purple-600 shadow-xl">
      <div className="flex gap-8 flex-wrap items-center justify-center">
        {/* LinkedIn Icon */}
        <a
          href="https://linkedin.com/in/your-linkedin"
          target="_blank"
          rel="noopener noreferrer"
          className="relative block p-2 rounded-full transform transition-transform duration-300 hover:scale-110 overflow-hidden"
          style={{
            background: 'rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
          }}
        >
          <div className="absolute top-0 left-0 w-2/3 h-full bg-white opacity-20 transform -skew-x-12 -translate-x-full group-hover:animate-shine"></div>
          <Image src="/linkedin.svg" alt="LinkedIn icon" width={32} height={32} />
        </a>

        {/* GitHub Icon */}
        <a
          href="https://github.com/your-github"
          target="_blank"
          rel="noopener noreferrer"
          className="relative block p-2 rounded-full transform transition-transform duration-300 hover:scale-110 overflow-hidden"
          style={{
            background: 'rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
          }}
        >
          <div className="absolute top-0 left-0 w-2/3 h-full bg-white opacity-20 transform -skew-x-12 -translate-x-full group-hover:animate-shine"></div>
          <Image src="/github.svg" alt="GitHub icon" width={32} height={32} />
        </a>

        {/* Portfolio Icon */}
        <a
          href="https://your-portfolio.com"
          target="_blank"
          rel="noopener noreferrer"
          className="relative block p-2 rounded-full transform transition-transform duration-300 hover:scale-110 overflow-hidden"
          style={{
            background: 'rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            border: '1px solid rgba(255, 255, 255, 0.3)',
          }}
        >
          <div className="absolute top-0 left-0 w-2/3 h-full bg-white opacity-20 transform -skew-x-12 -translate-x-full group-hover:animate-shine"></div>
          <Image src="/portfolio.svg" alt="Portfolio icon" width={32} height={32} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;