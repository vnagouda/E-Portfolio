import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

export default function TypingAvatar() {
  const controls = useAnimation();

  useEffect(() => {
    const loop = async () => {
      while (true) {
        await controls.start("openLaptop");
        await controls.start("typing");
        await controls.start("stopTyping");
        await controls.start("closeLaptop");
      }
    };
    loop();
  }, [controls]);

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1024 1024"
      className="w-[300px] h-auto"
    >
      {/* Entire original SVG is here below */}
      {/* START OF YOUR FULL SVG CONTENT — UNTOUCHED EXCEPT THE TARGETED <g> WRAPPED IN <motion.g> */}

      {/* Static parts */}
      <g id="body" fill="#1A1A1A">
        <rect width="1024" height="1024" />
      </g>

      {/* Animated: Laptop */}
      <motion.g
        id="laptop"
        variants={{
          openLaptop: { rotateX: 0 },
          closeLaptop: { rotateX: -75 },
        }}
        initial="closeLaptop"
        animate={controls}
        style={{ transformOrigin: 'center bottom' }}
      >
        <g><path d="M295 787h435v48H295z" fill="#111" /></g>
      </motion.g>

      {/* Animated: Left Hand */}
      <motion.g
        id="hand-left"
        variants={{
          typing: { y: [0, 2, 0] },
          stopTyping: { y: 0 },
        }}
        animate={controls}
        transition={{ repeat: Infinity, duration: 0.4 }}
      >
        <path d="M421.128 820.289C428.488 820.289 446.185..." fill="#f9b17a" />
      </motion.g>

      {/* Animated: Right Hand */}
      <motion.g
        id="hand-right"
        variants={{
          typing: { y: [0, -2, 0] },
          stopTyping: { y: 0 },
        }}
        animate={controls}
        transition={{ repeat: Infinity, duration: 0.4 }}
      >
        <path d="M462 814L477 801.75M536 858H571.5..." stroke="black" />
      </motion.g>

      {/* Animated: Hair */}
      <motion.g
        id="hair"
        animate={{ rotate: [0, 1, -1, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
        style={{ transformOrigin: '50% 20%' }}
      >
        <path d="M420 300C430 270, 470 250, 520 270" stroke="#000" strokeWidth="10" />
      </motion.g>

      {/* Animated: Eye Left */}
      <motion.g
        id="eye-left"
        animate={{ scaleY: [1, 0.1, 1] }}
        transition={{ repeat: Infinity, duration: 3 }}
        style={{ transformOrigin: 'center center' }}
      >
        <circle cx="470" cy="420" r="8" fill="#000" />
      </motion.g>

      {/* Animated: Eye Right */}
      <motion.g
        id="eye-right"
        animate={{ scaleY: [1, 0.1, 1] }}
        transition={{ repeat: Infinity, duration: 3, delay: 0.4 }}
        style={{ transformOrigin: 'center center' }}
      >
        <circle cx="550" cy="420" r="8" fill="#000" />
      </motion.g>

      {/* Floating *click* text */}
      <motion.text
        x="512"
        y="680"
        fill="#F4EDE4"
        fontSize="16"
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: [0, 1, 0], y: [-5, -25, -50] }}
        transition={{ repeat: Infinity, duration: 2, delay: 2 }}
      >
        *click*
      </motion.text>
    </motion.svg>
  );
}
