import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Globe, Layers, Smartphone, TrendingUp, Code, Coffee, Terminal, Layout, Database, Briefcase } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import servicesData from '../data/services.json';

const iconMap = { Globe, Layers, Smartphone, TrendingUp, Code, Coffee, Terminal, Layout, Database, Briefcase };

const categories = ['All', 'Web Development', 'Mobile', 'Digital Marketing', 'Training', 'IT Services'];

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedService, setSelectedService] = useState(null);

  const filtered = activeCategory === 'All'
    ? servicesData
    : servicesData.filter((s) => s.category === activeCategory);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 hero-gradient relative overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-secondary/15 rounded-full blur-3xl" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-primary text-sm font-medium uppercase tracking-widest">Our Services</span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mt-3 mb-6">
              Solutions Built for <span className="gradient-text">Your Success</span>
            </h1>
            <p className="text-[#A0A0B0] text-lg leading-relaxed">
              From web development to IT training, we provide end-to-end technology solutions and skill-building programs tailored to your needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-12 border-b border-white/10 sticky top-16 md:top-20 z-40 bg-dark/90 backdrop-blur-md">
        <div className="container-custom">
          <div className="flex items-center gap-3 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg shadow-primary/30'
                    : 'bg-white/5 border border-white/10 text-[#A0A0B0] hover:text-white hover:border-primary/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container-custom">
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence>
              {filtered.map((service, i) => (
                <motion.div
                  key={service.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <ServiceCard
                    service={service}
                    index={i}
                    onClick={() => setSelectedService(service)}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-[#A0A0B0]">
              No services found in this category.
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="glass-card max-w-2xl w-full p-8 relative max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 p-2 rounded-lg bg-white/5 hover:bg-white/10 text-[#A0A0B0] hover:text-white transition-colors"
              >
                <X size={18} />
              </button>

              {(() => {
                const Icon = iconMap[selectedService.icon] || Code;
                return (
                  <>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                        <Icon size={26} className="text-white" />
                      </div>
                      <div>
                        <span className="text-xs font-medium text-[#A0A0B0] bg-white/5 px-3 py-1 rounded-full border border-white/10">
                          {selectedService.category}
                        </span>
                        <h2 className="text-2xl font-heading font-bold text-white mt-1">{selectedService.title}</h2>
                      </div>
                    </div>
                    <p className="text-[#A0A0B0] leading-relaxed mb-6">{selectedService.description}</p>
                    {selectedService.techTags && (
                      <div>
                        <h4 className="text-white font-semibold mb-3 text-sm">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedService.techTags.map((tag) => (
                            <span key={tag} className="text-xs text-primary bg-primary/10 px-3 py-1.5 rounded-full border border-primary/20">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
