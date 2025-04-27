import { motion } from 'framer-motion';

function StatCard({ title, value }) {
  return (
    <motion.div
      whileHover={{ scale: 1.06, boxShadow: "0 12px 24px rgba(16, 185, 129, 0.3)" }}
      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
      className="rounded-2xl p-6 border border-emerald-300 bg-gradient-to-br from-white/30 to-emerald-50/20 backdrop-blur-xl text-center shadow-xl hover:shadow-emerald-300/40 hover:border-emerald-400 transition-all duration-300 ease-in-out"
    >
      <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-emerald-900 tracking-wide uppercase mb-2">
        {title}
      </h3>
      <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-emerald-800 drop-shadow-sm">
        {value}
      </p>
    </motion.div>
  );
}

export default StatCard;
