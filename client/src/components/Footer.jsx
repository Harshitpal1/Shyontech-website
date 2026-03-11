import { Link } from 'react-router-dom';
import { Zap, MapPin, Phone, Mail, Linkedin, Twitter, Github, Facebook, Instagram } from 'lucide-react';

const footerLinks = {
  'Quick Links': [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ],
  Services: [
    { name: 'Web Development', path: '/services' },
    { name: 'Full Stack Dev', path: '/services' },
    { name: 'Android Apps', path: '/services' },
    { name: 'Digital Marketing', path: '/services' },
    { name: 'IT Training', path: '/services' },
  ],
};

const socialLinks = [
  { Icon: Linkedin, href: '#', label: 'LinkedIn' },
  { Icon: Facebook, href: '#', label: 'Facebook' },
  { Icon: Instagram, href: '#', label: 'Instagram' },
  { Icon: Twitter, href: '#', label: 'Twitter' },
  { Icon: Github, href: '#', label: 'GitHub' },
];

export default function Footer() {
  return (
    <footer className="bg-card border-t border-white/10">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Zap size={18} className="text-white" />
              </div>
              <div>
                <div className="text-lg font-heading font-bold gradient-text">Shyontech</div>
                <div className="text-[10px] text-[#A0A0B0] tracking-widest uppercase">Where Quality Rules</div>
              </div>
            </Link>
            <p className="text-[#A0A0B0] text-sm leading-relaxed mb-6">
              Empowering businesses with smart technology. Professional IT services, software development & training since 2018.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#A0A0B0] hover:text-white hover:bg-primary/20 hover:border-primary/50 transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-heading font-semibold text-white mb-5">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-[#A0A0B0] hover:text-primary text-sm transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-5">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-primary mt-1 flex-shrink-0" />
                <span className="text-[#A0A0B0] text-sm">H 50, Govind Puri, Gwalior, Madhya Pradesh 474001, India</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-primary flex-shrink-0" />
                <a href="tel:+919876543210" className="text-[#A0A0B0] hover:text-primary text-sm transition-colors">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-primary flex-shrink-0" />
                <a href="mailto:info@shyontech.in" className="text-[#A0A0B0] hover:text-primary text-sm transition-colors">
                  info@shyontech.in
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#A0A0B0] text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Shyontech Software Technology India Pvt. Ltd. All rights reserved.
          </p>
          <p className="text-[#A0A0B0] text-sm">
            Built with ❤️ in Gwalior, India
          </p>
        </div>
      </div>
    </footer>
  );
}
