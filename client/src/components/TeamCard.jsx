import { motion } from 'framer-motion';
import { Linkedin, Twitter, Github } from 'lucide-react';

export default function TeamCard({ member, index = 0 }) {
  const initials = member.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase();

  const gradients = [
    'from-primary to-secondary',
    'from-secondary to-green-400',
    'from-accent to-orange-400',
    'from-purple-500 to-pink-500',
    'from-yellow-500 to-primary',
    'from-teal-500 to-secondary',
  ];
  const gradient = gradients[index % gradients.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card p-6 text-center group hover:border-primary/30 transition-all duration-300"
    >
      {/* Avatar */}
      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mx-auto mb-5 text-2xl font-bold text-white shadow-lg group-hover:scale-105 transition-transform duration-300`}>
        {initials}
      </div>

      <h3 className="font-heading font-semibold text-white text-lg mb-1">{member.name}</h3>
      <p className="text-primary text-sm font-medium mb-2">{member.role}</p>
      {member.expertise && (
        <p className="text-[#A0A0B0] text-xs mb-5">{member.expertise}</p>
      )}

      {/* Social links */}
      <div className="flex items-center justify-center gap-3">
        <a href="#" className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#A0A0B0] hover:text-primary hover:border-primary/30 transition-all duration-200">
          <Linkedin size={14} />
        </a>
        <a href="#" className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#A0A0B0] hover:text-primary hover:border-primary/30 transition-all duration-200">
          <Twitter size={14} />
        </a>
        <a href="#" className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#A0A0B0] hover:text-primary hover:border-primary/30 transition-all duration-200">
          <Github size={14} />
        </a>
      </div>
    </motion.div>
  );
}
