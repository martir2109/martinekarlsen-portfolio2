import { motion } from "framer-motion";

/**
 * FadeUp component
 *
 * Wraps children in a fade-up scroll animation using Framer motion.
 *
 * @param children The content to animate
 * @returns The animated wrapper
 */
export default function FadeUp({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.3,
        ease: "easeOut",
        delay: 0.08,
      }}
    >
      {children}
    </motion.div>
  );
}
