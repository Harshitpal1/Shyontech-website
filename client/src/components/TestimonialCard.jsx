import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export default function TestimonialCard({ testimonial, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card p-6 min-w-[300px] md:min-w-[350px] flex-shrink-0"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex gap-1">
          {Array.from({ length: testimonial.rating || 5 }).map((_, i) => (
            <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
          ))}
        </div>
        <Quote size={24} className="text-primary/30" />
      </div>

      <p className="text-[#A0A0B0] text-sm leading-relaxed mb-5 italic">
        "{testimonial.message}"
      </p>

      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-sm">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <p className="text-white font-medium text-sm">{testimonial.name}</p>
          <p className="text-[#A0A0B0] text-xs">{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  );
}
