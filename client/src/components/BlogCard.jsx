import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar, Clock, User, ArrowRight, Tag } from 'lucide-react';

const categoryColors = {
  'Web Development': 'bg-primary/20 text-primary border-primary/30',
  'Career Tips': 'bg-secondary/20 text-secondary border-secondary/30',
  'Digital Marketing': 'bg-accent/20 text-accent border-accent/30',
  'Mobile': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
};

export default function BlogCard({ post, index = 0 }) {
  const categoryStyle = categoryColors[post.category] || 'bg-white/10 text-white border-white/20';
  const formattedDate = post.date
    ? new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
    : post.createdAt
    ? new Date(post.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
    : '';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="glass-card overflow-hidden group hover:border-primary/30 transition-all duration-300 flex flex-col"
    >
      {/* Image placeholder */}
      <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <Tag size={32} className="text-primary/40 mx-auto mb-2" />
            <span className="text-[#A0A0B0] text-xs">{post.category}</span>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
        <span className={`absolute top-4 left-4 text-xs font-medium px-3 py-1 rounded-full border ${categoryStyle}`}>
          {post.category}
        </span>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-lg font-heading font-semibold text-white mb-3 line-clamp-2 group-hover:text-primary transition-colors">
          {post.title}
        </h3>

        <p className="text-[#A0A0B0] text-sm leading-relaxed mb-5 line-clamp-3 flex-1">
          {post.excerpt}
        </p>

        <div className="flex items-center gap-4 text-xs text-[#A0A0B0] mb-5">
          <div className="flex items-center gap-1.5">
            <User size={12} className="text-primary" />
            <span>{post.author}</span>
          </div>
          {formattedDate && (
            <div className="flex items-center gap-1.5">
              <Calendar size={12} className="text-primary" />
              <span>{formattedDate}</span>
            </div>
          )}
          {post.readTime && (
            <div className="flex items-center gap-1.5">
              <Clock size={12} className="text-primary" />
              <span>{post.readTime}</span>
            </div>
          )}
        </div>

        <Link
          to={`/blog/${post._id || post.id}`}
          className="flex items-center gap-2 text-sm text-primary font-medium hover:gap-3 transition-all duration-200 mt-auto"
        >
          Read More <ArrowRight size={14} />
        </Link>
      </div>
    </motion.div>
  );
}
