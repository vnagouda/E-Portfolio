import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

// Social/contact items
const contacts = [
  {
    icon: FaEnvelope,
    label: 'vnagouda@gmail.com',
    href: 'mailto:vnagouda@gmail.com'
  },
  {
    icon: FaGithub,
    label: 'github.com/vnagouda',
    href: 'https://github.com/vnagouda'
  },
  {
    icon: FaLinkedin,
    label: 'linkedin.com/in/viresh-nagouda',
    href: 'https://www.linkedin.com/in/viresh-nagouda-607a7b175'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100 }
  }
};

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="min-h-screen p-8 text-white relative overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {/* Decorative gradient background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-pink-900 via-transparent to-indigo-900 opacity-20 pointer-events-none" />

      <div className="relative max-w-md mx-auto text-center">
        {/* Section title */}
        <motion.h2
          className="text-4xl font-bold mb-6 border-b-2 border-pink-600 inline-block"
          variants={itemVariants}
        >
          Contact
        </motion.h2>

        {/* Intro text */}
        <motion.p
          className="mt-4 text-lg text-gray-300"
          variants={itemVariants}
        >
          Interested in collaborating or want to connect? Let’s get in touch!
        </motion.p>

        {/* Contact buttons */}
        <motion.div
          className="mt-8 flex flex-col gap-4 items-center"
          variants={containerVariants}
        >
          {contacts.map(({ icon: Icon, label, href }, idx) => (
            <motion.a
              key={idx}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-pink-500 to-pink-700 rounded-2xl shadow-xl transform-gpu hover:-translate-y-1 hover:shadow-pink-600/50 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon className="text-2xl" />
              <span className="font-medium">{label}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
