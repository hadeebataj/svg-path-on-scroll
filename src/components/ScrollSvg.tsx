import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';

const ScrollSVG = () => {
  const controls = useAnimation();
  const svgRef = useRef(null);

  const handleScroll = () => {
    const svg = svgRef.current;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollFraction = scrollTop / scrollHeight;

    controls.start({
      pathLength: scrollFraction,
      transition: { duration: 0 },
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ height: '200vh', padding: '20px' }}>
      <svg
        ref={svgRef}
        viewBox="0 0 700 700"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          width: '100%',
          height: '100vh',
          maxWidth: '100%',
          maxHeight: '100%',
          position: 'fixed',
          top: 0,
          left: 100,
        }}
      >
        <defs>
          <linearGradient id="strokeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#000000" />
            <stop offset="100%" stopColor="#49A9E0" />
          </linearGradient>
        </defs>
        <motion.path
          d="M3.00035 624C84.5007 643 154.001 613.5 208 604.5C225.121 601.647 270.501 605.5 275.501 616.5C275.501 638.5 190.501 638.5 180.501 638.5C169.707 638.5 101.999 633.5 56.5011 590.5C24.5009 552 -2.20802 511.939 3.00035 404.501C6.99984 322 36.3339 237.834 47.5007 208.001C51.0007 198.001 60.7008 177.301 71.5008 174.501C82.3008 171.701 94 210.5 98 230.5C104 264.999 113 339.3 115 360.5C117.5 387 119 410 119 420C119 430 111.868 486.575 109.501 499C107.5 509.5 89.5 556.5 80.5008 569C72.3784 580.281 59.5007 590 52.5007 560C46.9007 536 48.1674 489 49.5007 468.5C50.0007 442.5 51 400.5 51 389.5C48.5 375 39.3206 344.919 37.5007 330C35 309.5 35 279.5 36 260.5C37 241.5 56.5093 146.794 69 119.5C82.5 89.9999 93 61.0002 128.5 25.5002C156.9 -2.89979 187.001 2.33301 202.001 4.99968C209.334 7.33309 224.773 13.0002 230.5 13.0002C239 13.0002 285.5 11.5004 294 13.0002C306 15.1176 319 17 323.5 28C311.499 30.5001 281.499 33.5001 271 37C265.448 38.8508 224.501 44.4999 208.501 75.9999C195.701 101.2 211.271 110.5 216.501 117.5C227.334 132 252 168.5 254 200.5C256.5 240.5 265.5 385.5 249 506.5"
          stroke="url(#strokeGradient)"
          stroke-width="6"
          stroke-linecap="round"
          initial={{ pathLength: 0 }}
          animate={controls}
          fill={'transparent'}
        />
      </svg>
    </div>
  );
};

export default ScrollSVG;
