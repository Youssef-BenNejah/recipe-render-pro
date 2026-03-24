import { motion } from "framer-motion";

const OrnamentDivider = () => {
  return (
    <motion.div
      className="flex items-center justify-center gap-3 py-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="h-px w-20 bg-gradient-to-r from-transparent to-caramel/30" />
      <div className="w-1.5 h-1.5 rotate-45 bg-gold/60" />
      <div className="w-2 h-2 rotate-45 bg-gold" />
      <div className="w-1.5 h-1.5 rotate-45 bg-gold/60" />
      <div className="h-px w-20 bg-gradient-to-l from-transparent to-caramel/30" />
    </motion.div>
  );
};

export default OrnamentDivider;
