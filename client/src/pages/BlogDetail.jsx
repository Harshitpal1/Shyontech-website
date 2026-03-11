import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowLeft, Tag } from 'lucide-react';
import BlogCard from '../components/BlogCard';
import blogData from '../data/blogPosts.json';

export default function BlogDetail() {
  const { id } = useParams();
  const post = blogData.find((p) => p.id === id || p.slug === id);

  const related = blogData
    .filter((p) => p.id !== id && p.category === post?.category)
    .slice(0, 3);

  if (!post) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-heading font-bold text-white mb-4">Post Not Found</h2>
          <Link to="/blog" className="text-primary hover:underline">← Back to Blog</Link>
        </div>
      </div>
    );
  }

  const formattedDate = post.date
    ? new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    : '';

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-16 hero-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark" />
        <div className="container-custom relative z-10 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/blog" className="inline-flex items-center gap-2 text-[#A0A0B0] hover:text-primary transition-colors mb-6 text-sm">
              <ArrowLeft size={16} /> Back to Blog
            </Link>

            <span className="inline-flex items-center gap-2 text-xs font-medium text-primary bg-primary/10 border border-primary/30 px-3 py-1 rounded-full mb-4">
              <Tag size={12} />
              {post.category}
            </span>

            <h1 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-5 text-sm text-[#A0A0B0]">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xs">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <div className="text-white font-medium">{post.author}</div>
                  <div className="text-xs text-[#A0A0B0]">{post.authorRole}</div>
                </div>
              </div>
              {formattedDate && (
                <div className="flex items-center gap-1.5">
                  <Calendar size={14} className="text-primary" />
                  {formattedDate}
                </div>
              )}
              <div className="flex items-center gap-1.5">
                <Clock size={14} className="text-primary" />
                {post.readTime}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Image placeholder */}
            <div className="w-full h-64 md:h-80 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-white/10 flex items-center justify-center mb-10">
              <div className="text-center">
                <Tag size={40} className="text-primary/40 mx-auto mb-2" />
                <span className="text-[#A0A0B0]">{post.category}</span>
              </div>
            </div>

            <div className="prose prose-invert max-w-none">
              <p className="text-[#A0A0B0] text-base leading-relaxed whitespace-pre-line">
                {post.excerpt}
              </p>
              <div className="mt-8 text-[#A0A0B0] text-base leading-relaxed whitespace-pre-line">
                {post.content}
              </div>
            </div>

            {/* Tags */}
            {post.tags && (
              <div className="mt-10 pt-10 border-t border-white/10">
                <h4 className="text-white font-semibold mb-4 text-sm">Tags:</h4>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="text-xs text-primary bg-primary/10 border border-primary/20 px-3 py-1.5 rounded-full">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Author Card */}
            <div className="mt-10 glass-card p-6 flex items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                {post.author.charAt(0)}
              </div>
              <div>
                <div className="text-white font-heading font-semibold">{post.author}</div>
                <div className="text-primary text-sm mb-2">{post.authorRole}</div>
                <p className="text-[#A0A0B0] text-sm">Expert at Shyontech Software Technology India Pvt. Ltd., passionate about sharing knowledge and empowering the next generation of IT professionals.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Posts */}
      {related.length > 0 && (
        <section className="py-16 bg-card/30">
          <div className="container-custom">
            <h2 className="text-2xl font-heading font-bold text-white mb-10">
              Related <span className="gradient-text">Posts</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((post, i) => (
                <BlogCard key={post.id} post={post} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
