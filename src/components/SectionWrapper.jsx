import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function SectionWrapper({ id, leftContent, rightContent }) {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.3 });

  const leftVariants = {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } }
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } }
  };

  return (
    <section
      ref={ref}
      id={id}
      className="w-full flex justify-center px-4 sm:px-6 lg:px-8 py-20 snap-start"
    >
      {/* Always side‑by‑side, but allow wrapping if space is too tight */}
      <div className="flex flex-row flex-wrap w-full max-w-screen-lg gap-16 items-start">
        {/* Left */}
        <motion.div
          className="flex-[1.5] min-w-[260px]"
          variants={leftVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {leftContent}
        </motion.div>

        {/* Right */}
        <motion.div
          className="flex-1 min-w-[220px] flex justify-center"
          variants={rightVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {rightContent}
        </motion.div>
      </div>
    </section>
  );
}
