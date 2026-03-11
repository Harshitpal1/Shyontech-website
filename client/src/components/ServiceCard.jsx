import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Layers, Smartphone, TrendingUp, Code, Coffee, Terminal, Layout, Database, Briefcase } from 'lucide-react';

const iconMap = {
  Globe, Layers, Smartphone, TrendingUp, Code, Coffee, Terminal, Layout, Database, Briefcase,
};

const categoryColors = {
  'Web Development': 'from-primary to-blue-500',
  'Mobile': 'from-purple-500 to-pink-500',
  'Digital Marketing': 'from-secondary to-green-400',
  'Training': 'from-accent to-orange-400',
  'IT Services': 'from-yellow-500 to-primary',
};

export default function ServiceCard({ service, index = 0, onClick }) {
  const Icon = iconMap[service.icon] || Code;
  const gradient = categoryColors[service.category] || 'from-primary to-secondary';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="glass-card p-6 cursor-pointer group hover:border-primary/30 transition-all duration-300"
      onClick={onClick}
    >
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
        <Icon size={22} className="text-white" />
      </div>

      <span className="text-xs font-medium text-[#A0A0B0] bg-white/5 px-3 py-1 rounded-full border border-white/10 mb-3 inline-block">
        {service.category}
      </span>

      <h3 className="text-lg font-heading font-semibold text-white mb-3 group-hover:text-primary transition-colors">
        {service.title}
      </h3>

      <p className="text-[#A0A0B0] text-sm leading-relaxed mb-5 line-clamp-3">
        {service.shortDescription}
      </p>

      {service.techTags && (
        <div className="flex flex-wrap gap-2 mb-5">
          {service.techTags.slice(0, 3).map((tag) => (
            <span key={tag} className="text-xs text-primary bg-primary/10 px-2 py-1 rounded-md border border-primary/20">
              {tag}
            </span>
          ))}
          {service.techTags.length > 3 && (
            <span className="text-xs text-[#A0A0B0] bg-white/5 px-2 py-1 rounded-md">
              +{service.techTags.length - 3}
            </span>
          )}
        </div>
      )}

      <button className="flex items-center gap-2 text-sm text-primary font-medium group-hover:gap-3 transition-all duration-200">
        Learn More <ArrowRight size={14} />
      </button>
    </motion.div>
  );
}
