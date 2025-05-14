import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function SectionWrapper({ id, leftContent, rightContent }) {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  const leftVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const rightVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <section
      ref={ref}
      id={id}
      className="w-full flex justify-center px-6 py-24 snap-start"
    >
      <div className="flex flex-col md:flex-row w-full max-w-[1100px] gap-10">
        <motion.div
          className="flex-[1.5] min-w-screen"
          variants={leftVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {leftContent}
        </motion.div>

        <motion.div
          className="flex-1 min-w-0 sticky md:top-36 self-start"
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
