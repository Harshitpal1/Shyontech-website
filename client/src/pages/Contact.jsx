import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, CheckCircle, AlertCircle, Linkedin, Facebook, Instagram, Twitter } from 'lucide-react';
import AnimatedButton from '../components/AnimatedButton';
import { contactAPI } from '../utils/api';

const schema = yup.object({
  name: yup.string().required('Name is required').min(2, 'Name must be at least 2 characters'),
  email: yup.string().email('Enter a valid email').required('Email is required'),
  phone: yup.string().matches(/^[0-9+\-\s()]{7,15}$/, 'Enter a valid phone number').nullable().optional(),
  subject: yup.string().required('Subject is required').min(3, 'Subject is too short'),
  message: yup.string().required('Message is required').min(10, 'Message must be at least 10 characters'),
});

const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Us',
    details: ['H 50, Govind Puri', 'Gwalior, Madhya Pradesh 474001', 'India'],
    color: 'text-primary',
    bg: 'bg-primary/10',
  },
  {
    icon: Phone,
    title: 'Call Us',
    details: ['+91 98765 43210', '+91 98765 43211'],
    color: 'text-secondary',
    bg: 'bg-secondary/10',
    href: 'tel:+919876543210',
  },
  {
    icon: Mail,
    title: 'Email Us',
    details: ['info@shyontech.in', 'support@shyontech.in'],
    color: 'text-accent',
    bg: 'bg-accent/10',
    href: 'mailto:info@shyontech.in',
  },
];

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
];

export default function Contact() {
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);
    try {
      await contactAPI.submit(data);
      setSubmitStatus('success');
      reset();
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 hero-gradient relative overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-primary text-sm font-medium uppercase tracking-widest">Contact Us</span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mt-3 mb-6">
              Let's <span className="gradient-text">Work Together</span>
            </h1>
            <p className="text-[#A0A0B0] text-lg">
              Have a project in mind or want to enroll in our training programs? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {contactInfo.map(({ icon: Icon, title, details, color, bg, href }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card p-6 hover:border-primary/30 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl ${bg} flex items-center justify-center mb-4`}>
                  <Icon size={22} className={color} />
                </div>
                <h3 className="font-heading font-semibold text-white mb-3">{title}</h3>
                {details.map((d, idx) =>
                  href ? (
                    <a key={idx} href={href} className={`block text-sm ${color} hover:opacity-80 transition-opacity`}>{d}</a>
                  ) : (
                    <p key={idx} className="text-[#A0A0B0] text-sm">{d}</p>
                  )
                )}
              </motion.div>
            ))}
          </div>

          {/* Form + Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-8"
            >
              <h2 className="text-2xl font-heading font-bold text-white mb-2">Send Us a Message</h2>
              <p className="text-[#A0A0B0] text-sm mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>

              {submitStatus === 'success' && (
                <div className="flex items-center gap-3 bg-green-500/10 border border-green-500/30 text-green-400 px-4 py-3 rounded-xl mb-6">
                  <CheckCircle size={18} />
                  <span className="text-sm">Your message has been sent successfully! We'll get back to you soon.</span>
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="flex items-center gap-3 bg-accent/10 border border-accent/30 text-accent px-4 py-3 rounded-xl mb-6">
                  <AlertCircle size={18} />
                  <span className="text-sm">Failed to send message. Please try again or contact us directly.</span>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-[#A0A0B0] mb-2">Full Name *</label>
                    <input
                      {...register('name')}
                      type="text"
                      placeholder="Your full name"
                      className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-white text-sm placeholder:text-[#A0A0B0] focus:outline-none transition-colors ${errors.name ? 'border-accent/60 focus:border-accent' : 'border-white/10 focus:border-primary/50'}`}
                    />
                    {errors.name && <p className="mt-1.5 text-xs text-accent">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#A0A0B0] mb-2">Email Address *</label>
                    <input
                      {...register('email')}
                      type="email"
                      placeholder="your@email.com"
                      className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-white text-sm placeholder:text-[#A0A0B0] focus:outline-none transition-colors ${errors.email ? 'border-accent/60 focus:border-accent' : 'border-white/10 focus:border-primary/50'}`}
                    />
                    {errors.email && <p className="mt-1.5 text-xs text-accent">{errors.email.message}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-[#A0A0B0] mb-2">Phone Number</label>
                    <input
                      {...register('phone')}
                      type="tel"
                      placeholder="+91 98765 43210"
                      className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-white text-sm placeholder:text-[#A0A0B0] focus:outline-none transition-colors ${errors.phone ? 'border-accent/60 focus:border-accent' : 'border-white/10 focus:border-primary/50'}`}
                    />
                    {errors.phone && <p className="mt-1.5 text-xs text-accent">{errors.phone.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#A0A0B0] mb-2">Subject *</label>
                    <input
                      {...register('subject')}
                      type="text"
                      placeholder="How can we help?"
                      className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-white text-sm placeholder:text-[#A0A0B0] focus:outline-none transition-colors ${errors.subject ? 'border-accent/60 focus:border-accent' : 'border-white/10 focus:border-primary/50'}`}
                    />
                    {errors.subject && <p className="mt-1.5 text-xs text-accent">{errors.subject.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#A0A0B0] mb-2">Message *</label>
                  <textarea
                    {...register('message')}
                    rows={5}
                    placeholder="Tell us about your project or inquiry..."
                    className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-white text-sm placeholder:text-[#A0A0B0] focus:outline-none transition-colors resize-none ${errors.message ? 'border-accent/60 focus:border-accent' : 'border-white/10 focus:border-primary/50'}`}
                  />
                  {errors.message && <p className="mt-1.5 text-xs text-accent">{errors.message.message}</p>}
                </div>

                <AnimatedButton
                  type="submit"
                  variant="primary"
                  size="md"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message <Send size={16} />
                    </>
                  )}
                </AnimatedButton>
              </form>

              {/* Social links */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-[#A0A0B0] text-sm mb-4">Follow us on social media:</p>
                <div className="flex gap-3">
                  {socialLinks.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#A0A0B0] hover:text-white hover:bg-primary/20 hover:border-primary/50 transition-all"
                    >
                      <Icon size={16} />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-6"
            >
              <div className="glass-card overflow-hidden flex-1 min-h-80">
                <iframe
                  title="Shyontech Location - Gwalior"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3603.1234567890123!2d78.1828!3d26.2183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sGovind%20Puri%2C%20Gwalior!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: '320px', filter: 'invert(90%) hue-rotate(180deg)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              <div className="glass-card p-6">
                <h3 className="font-heading font-semibold text-white mb-2">Office Hours</h3>
                <div className="space-y-2 text-sm text-[#A0A0B0]">
                  <div className="flex justify-between">
                    <span>Monday – Friday</span>
                    <span className="text-white">9:00 AM – 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="text-white">9:00 AM – 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="text-accent">Closed</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
