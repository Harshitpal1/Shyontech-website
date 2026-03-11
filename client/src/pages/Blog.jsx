import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import BlogCard from '../components/BlogCard';
import blogData from '../data/blogPosts.json';

const POSTS_PER_PAGE = 6;
const categories = ['All', 'Web Development', 'Career Tips', 'Digital Marketing', 'Mobile'];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = useMemo(() => {
    let posts = blogData;
    if (activeCategory !== 'All') posts = posts.filter((p) => p.category === activeCategory);
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      posts = posts.filter(
        (p) => p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q)
      );
    }
    return posts;
  }, [activeCategory, searchQuery]);

  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
  const paginated = filtered.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE);

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 hero-gradient relative overflow-hidden">
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-primary/15 rounded-full blur-3xl" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-primary text-sm font-medium uppercase tracking-widest">Our Blog</span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mt-3 mb-6">
              Insights & <span className="gradient-text">Knowledge</span>
            </h1>
            <p className="text-[#A0A0B0] text-lg">
              Stay updated with the latest in web development, IT careers, and technology trends from the Shyontech team.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-10 border-b border-white/10">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-80">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A0A0B0]" />
              <input
                type="text"
                placeholder="Search posts..."
                value={searchQuery}
                onChange={(e) => { setSearchQuery(e.target.value); setCurrentPage(1); }}
                className="w-full bg-card/50 border border-white/10 rounded-full pl-10 pr-5 py-3 text-white text-sm placeholder:text-[#A0A0B0] focus:outline-none focus:border-primary/50 transition-colors"
              />
            </div>

            {/* Category Filters */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeCategory === cat
                      ? 'bg-gradient-to-r from-primary to-secondary text-white'
                      : 'bg-white/5 border border-white/10 text-[#A0A0B0] hover:text-white hover:border-primary/30'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="container-custom">
          {paginated.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginated.map((post, i) => (
                <BlogCard key={post.id} post={post} index={i} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-[#A0A0B0] text-lg">No posts found matching your search.</p>
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-12">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-[#A0A0B0] hover:text-white hover:border-primary/30 disabled:opacity-40 disabled:cursor-not-allowed transition-all text-sm"
              >
                Previous
              </button>
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i + 1}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-10 h-10 rounded-lg text-sm font-medium transition-all ${
                    currentPage === i + 1
                      ? 'bg-gradient-to-r from-primary to-secondary text-white'
                      : 'bg-white/5 border border-white/10 text-[#A0A0B0] hover:text-white hover:border-primary/30'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-[#A0A0B0] hover:text-white hover:border-primary/30 disabled:opacity-40 disabled:cursor-not-allowed transition-all text-sm"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
