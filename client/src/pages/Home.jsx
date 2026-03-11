import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight, CheckCircle, Users, Trophy, Briefcase, Star,
  ChevronLeft, ChevronRight, Zap, Shield, Clock, HeartHandshake
} from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import AnimatedButton from '../components/AnimatedButton';
import servicesData from '../data/services.json';

const featuredServices = servicesData.filter((s) => s.featured).slice(0, 6);

const stats = [
  { icon: Clock, value: '6+', label: 'Years Experience', color: 'text-primary' },
  { icon: Users, value: '200+', label: 'Students Trained', color: 'text-secondary' },
  { icon: Trophy, value: '50+', label: 'Projects Delivered', color: 'text-accent' },
  { icon: Briefcase, value: '100%', label: 'Placement Support', color: 'text-yellow-400' },
];

const whyUs = [
  { icon: Zap, title: 'Fast Delivery', desc: 'We deliver projects on time with agile development practices.' },
  { icon: Shield, title: 'Quality Assured', desc: 'Rigorous testing ensures bug-free, production-ready software.' },
  { icon: HeartHandshake, title: 'Dedicated Support', desc: '24/7 post-deployment support and maintenance services.' },
  { icon: Star, title: 'Expert Team', desc: 'Skilled developers with hands-on industry experience.' },
];

const testimonials = [
  { id: 1, name: 'Rahul Sharma', role: 'PHP Developer (Placed)', message: 'Shyontech transformed my career! The PHP + Laravel training was hands-on and practical. Got placed within 2 months of completing the course.', rating: 5 },
  { id: 2, name: 'Priya Joshi', role: 'Web Design Client', message: 'They built our company website in just 3 weeks. The design is modern, fast, and our conversions have improved significantly.', rating: 5 },
  { id: 3, name: 'Amit Verma', role: 'Full Stack Student', message: 'The Full Stack course was amazing. Real projects, mentorship, and mock interviews helped me crack my first IT job with confidence.', rating: 5 },
  { id: 4, name: 'Sneha Gupta', role: 'Digital Marketing Client', message: 'Our social media following grew 300% in 6 months. Shyontech truly understands digital marketing strategies.', rating: 5 },
  { id: 5, name: 'Vikash Tiwari', role: 'Java Trainee', message: 'Excellent Java training with Core + Advanced curriculum. The placement team helped me land a job at an MNC in Bangalore.', rating: 5 },
  { id: 6, name: 'Kavya Mishra', role: 'Android Developer (Placed)', message: 'From zero coding knowledge to a full Android developer role in 6 months — Shyontech made it possible. Forever grateful!', rating: 5 },
];

export default function Home() {
  const testimonialsRef = useRef(null);

  const scroll = (direction) => {
    if (testimonialsRef.current) {
      testimonialsRef.current.scrollBy({
        left: direction === 'left' ? -380 : 380,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center hero-gradient pt-20">
        {/* Animated orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/15 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-accent/10 rounded-full blur-3xl animate-pulse delay-500" />

        <div className="container-custom relative z-10 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8"
            >
              <Zap size={14} />
              Where Quality Rules — Since 2018
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight mb-6"
            >
              Empowering Businesses with{' '}
              <span className="gradient-text">Smart Technology</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#A0A0B0] text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto"
            >
              Shyontech is your trusted partner for web development, software solutions, and IT training in Gwalior, MP. From PHP to Full Stack, we build what your business needs.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/services">
                <AnimatedButton variant="primary" size="lg">
                  Explore Services <ArrowRight size={18} />
                </AnimatedButton>
              </Link>
              <Link to="/contact">
                <AnimatedButton variant="outline" size="lg">
                  Get In Touch
                </AnimatedButton>
              </Link>
            </motion.div>

            {/* Tech badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-16 flex flex-wrap items-center justify-center gap-3"
            >
              {['PHP', 'Laravel', 'React', 'Node.js', 'Android', 'WordPress', 'Python', 'Digital Marketing'].map((tech) => (
                <span key={tech} className="text-xs text-[#A0A0B0] bg-white/5 border border-white/10 px-3 py-1.5 rounded-full hover:border-primary/30 hover:text-white transition-colors">
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#A0A0B0]"
        >
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-primary to-transparent" />
          <span className="text-xs">Scroll Down</span>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="py-20 border-y border-white/10 bg-card/50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(({ icon: Icon, value, label, color }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <Icon size={28} className={`${color} mx-auto mb-3`} />
                <div className={`text-4xl font-heading font-bold ${color} mb-1`}>{value}</div>
                <div className="text-[#A0A0B0] text-sm">{label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-medium uppercase tracking-widest">What We Offer</span>
            <h2 className="section-title mt-3 mb-4">
              Our <span className="gradient-text">Services</span>
            </h2>
            <p className="text-[#A0A0B0] max-w-2xl mx-auto">
              Comprehensive IT services and training programs designed to help businesses grow and individuals advance their careers.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service, i) => (
              <ServiceCard key={service.id} service={service} index={i} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <AnimatedButton variant="outline" size="md">
                View All Services <ArrowRight size={16} />
              </AnimatedButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-card/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-medium uppercase tracking-widest">Why Shyontech</span>
            <h2 className="section-title mt-3 mb-4">
              Why <span className="gradient-text">Choose Us</span>
            </h2>
            <p className="text-[#A0A0B0] max-w-2xl mx-auto">
              We combine technical expertise with a student-first, client-first approach to deliver results that matter.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card p-6 text-center hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mx-auto mb-5 border border-primary/20">
                  <Icon size={24} className="text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-white mb-3">{title}</h3>
                <p className="text-[#A0A0B0] text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4"
          >
            <div>
              <span className="text-primary text-sm font-medium uppercase tracking-widest">Testimonials</span>
              <h2 className="section-title mt-2">
                What Our <span className="gradient-text">Students Say</span>
              </h2>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => scroll('left')}
                className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-[#A0A0B0] hover:text-white hover:border-primary/50 hover:bg-primary/10 transition-all"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={() => scroll('right')}
                className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center text-[#A0A0B0] hover:text-white hover:border-primary/50 hover:bg-primary/10 transition-all"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </motion.div>

          <div
            ref={testimonialsRef}
            className="flex gap-6 overflow-x-auto pb-4 scrollbar-none"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.id} testimonial={t} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/10 to-accent/10" />
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(108,99,255,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(0,212,255,0.2) 0%, transparent 50%)' }} />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
              Ready to Build Something{' '}
              <span className="gradient-text">Amazing?</span>
            </h2>
            <p className="text-[#A0A0B0] text-lg mb-10">
              Whether you need a website, custom software, or IT training — Shyontech has you covered. Let's talk today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <AnimatedButton variant="primary" size="lg">
                  Start Your Project <ArrowRight size={18} />
                </AnimatedButton>
              </Link>
              <Link to="/services">
                <AnimatedButton variant="outline" size="lg">
                  Explore Services
                </AnimatedButton>
              </Link>
            </div>
            <div className="mt-10 flex items-center justify-center gap-6 text-sm text-[#A0A0B0]">
              {['Free Consultation', 'No Hidden Charges', 'Expert Team'].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle size={14} className="text-primary" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
