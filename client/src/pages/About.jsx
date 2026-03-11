import { motion } from 'framer-motion';
import { CheckCircle, Target, Eye, Calendar, MapPin, Users } from 'lucide-react';
import TeamCard from '../components/TeamCard';

const team = [
  { name: 'Pradeep Kumar Pandey', role: 'Founder & Director', expertise: 'PHP, Laravel, Full Stack' },
  { name: 'Riya Sharma', role: 'Lead Developer', expertise: 'React, Node.js, MongoDB' },
  { name: 'Amit Tiwari', role: 'Android Developer', expertise: 'Java, Kotlin, Firebase' },
  { name: 'Neha Verma', role: 'Digital Marketing Head', expertise: 'SEO, SMM, Google Ads' },
  { name: 'Rahul Gupta', role: 'PHP Trainer', expertise: 'PHP, WordPress, MySQL' },
  { name: 'Pooja Singh', role: 'Placement Coordinator', expertise: 'HR, Career Counseling' },
];

const values = [
  { icon: CheckCircle, title: 'Quality First', desc: 'We never compromise on code quality or training standards.' },
  { icon: Target, title: 'Goal-Oriented', desc: 'Every project and training is aligned with clear, measurable outcomes.' },
  { icon: Users, title: 'Student-Centric', desc: 'Our training programs are designed around student success and placement.' },
  { icon: MapPin, title: 'Local Impact', desc: 'Proud to grow Gwalior\'s IT ecosystem and create local employment.' },
];

const timeline = [
  { year: '2018', title: 'Founded', desc: 'Shyontech was founded in Gwalior, MP with a vision to bridge the IT skill gap.' },
  { year: '2019', title: 'First 50 Students', desc: 'Enrolled and successfully placed our first batch of 50 IT trainees.' },
  { year: '2020', title: 'Web Services Launch', desc: 'Launched professional web development and digital marketing services.' },
  { year: '2021', title: '100+ Projects', desc: 'Delivered over 100 web development and software projects to clients.' },
  { year: '2022', title: 'Full Stack Training', desc: 'Introduced Full Stack Development program with MERN stack.' },
  { year: '2023', title: '200+ Placements', desc: 'Achieved the milestone of 200+ successful student placements.' },
];

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 hero-gradient relative overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/15 rounded-full blur-3xl" />
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="text-primary text-sm font-medium uppercase tracking-widest">About Shyontech</span>
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mt-3 mb-6">
              Passionate About <span className="gradient-text">Technology</span>
            </h1>
            <p className="text-[#A0A0B0] text-lg leading-relaxed mb-8">
              Shyontech Software Technology India Pvt. Ltd. is a leading IT services and training company based in Gwalior, Madhya Pradesh. Since 2018, we've been empowering students and businesses with cutting-edge technology solutions.
            </p>
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-3 glass-card px-5 py-3">
                <Calendar size={18} className="text-primary" />
                <div>
                  <div className="text-white font-semibold">Founded 2018</div>
                  <div className="text-[#A0A0B0] text-xs">6+ Years of Excellence</div>
                </div>
              </div>
              <div className="flex items-center gap-3 glass-card px-5 py-3">
                <MapPin size={18} className="text-secondary" />
                <div>
                  <div className="text-white font-semibold">Gwalior, MP</div>
                  <div className="text-[#A0A0B0] text-xs">H 50, Govind Puri</div>
                </div>
              </div>
              <div className="flex items-center gap-3 glass-card px-5 py-3">
                <Users size={18} className="text-accent" />
                <div>
                  <div className="text-white font-semibold">11-50 Employees</div>
                  <div className="text-[#A0A0B0] text-xs">Growing Team</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-8 border-l-4 border-primary"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Target size={22} className="text-primary" />
                </div>
                <h2 className="text-2xl font-heading font-bold text-white">Our Mission</h2>
              </div>
              <p className="text-[#A0A0B0] leading-relaxed">
                To provide world-class IT training and software development services that empower individuals to build successful careers and help businesses thrive in the digital age. We believe in quality, practical learning, and real-world application.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-8 border-l-4 border-secondary"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center">
                  <Eye size={22} className="text-secondary" />
                </div>
                <h2 className="text-2xl font-heading font-bold text-white">Our Vision</h2>
              </div>
              <p className="text-[#A0A0B0] leading-relaxed">
                To become the most trusted IT services and training company in Central India, creating a pipeline of skilled IT professionals from Gwalior and surrounding regions, while delivering innovative digital solutions to businesses globally.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-card/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-medium uppercase tracking-widest">Our Journey</span>
            <h2 className="section-title mt-3">
              Our <span className="gradient-text">Story</span>
            </h2>
          </motion.div>

          <div className="relative max-w-3xl mx-auto">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-accent" />
            <div className="space-y-8">
              {timeline.map(({ year, title, desc }, i) => (
                <motion.div
                  key={year}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-6 pl-20 relative"
                >
                  <div className="absolute left-4 top-1 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-xs font-bold text-white">
                    {i + 1}
                  </div>
                  <div className="glass-card p-5 flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-primary font-bold text-sm">{year}</span>
                      <h3 className="font-heading font-semibold text-white">{title}</h3>
                    </div>
                    <p className="text-[#A0A0B0] text-sm">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-medium uppercase tracking-widest">The People</span>
            <h2 className="section-title mt-3">
              Meet Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-[#A0A0B0] mt-4 max-w-2xl mx-auto">
              A dedicated team of experts passionate about technology and committed to your success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, i) => (
              <TeamCard key={member.name} member={member} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-card/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-medium uppercase tracking-widest">Core Values</span>
            <h2 className="section-title mt-3">
              What We <span className="gradient-text">Stand For</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card p-6 text-center hover:border-primary/30 transition-all duration-300"
              >
                <Icon size={32} className="text-primary mx-auto mb-4" />
                <h3 className="font-heading font-semibold text-white mb-3">{title}</h3>
                <p className="text-[#A0A0B0] text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
