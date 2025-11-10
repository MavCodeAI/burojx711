'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export default function Team() {
  const teamMembers = [
    {
      name: 'Darwesh',
      role: 'Co-Founder & Lead Developer',
      bio: 'Full-stack developer with expertise in modern web technologies. Passionate about creating scalable and performant applications.',
      image: '/team/darwesh.jpg', // Placeholder - add actual image
      skills: ['Next.js', 'React', 'TypeScript', 'Node.js', 'MongoDB'],
      social: {
        github: 'https://github.com/darwesh',
        linkedin: 'https://linkedin.com/in/darwesh',
        twitter: 'https://twitter.com/darwesh',
        email: 'darwesh@burojx.com'
      }
    },
    {
      name: 'Zubair Zair',
      role: 'Co-Founder & Creative Director',
      bio: 'UI/UX designer and creative strategist focused on crafting exceptional digital experiences that blend aesthetics with functionality.',
      image: '/team/zubair.jpg', // Placeholder - add actual image
      skills: ['UI/UX Design', 'Brand Strategy', 'Figma', 'Adobe Creative Suite', 'Motion Design'],
      social: {
        github: 'https://github.com/zubairzair',
        linkedin: 'https://linkedin.com/in/zubairzair',
        twitter: 'https://twitter.com/zubairzair',
        email: 'zubair@burojx.com'
      }
    }
  ];

  const stats = [
    { value: '10+', label: 'Years Combined Experience' },
    { value: '100+', label: 'Projects Delivered' },
    { value: '50+', label: 'Happy Clients' },
    { value: '15+', label: 'Countries Served' },
  ];

  return (
    <div className="min-h-screen pt-24 md:pt-32 pb-16 md:pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-20 text-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-display font-bold mb-6 md:mb-8 text-gradient leading-[1.1] tracking-tight">
            Meet Our Team
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
            The creative minds behind Burojx. We&apos;re a team of passionate designers and developers dedicated to crafting exceptional digital experiences.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16 md:mb-24"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="glass-effect rounded-xl md:rounded-2xl p-6 md:p-8 text-center"
            >
              <div className="text-3xl md:text-4xl font-bold mb-2 text-gradient">{stat.value}</div>
              <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16 md:mb-20">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
              className="glass-effect rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 group hover:bg-white/5 transition-all"
            >
              {/* Profile Image Placeholder */}
              <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 rounded-full bg-gradient-to-br from-white/20 to-white/5 flex items-center justify-center border-2 border-white/10 group-hover:border-white/20 transition-all">
                <span className="text-5xl md:text-6xl font-bold text-white/40">
                  {member.name.charAt(0)}
                </span>
              </div>

              {/* Member Info */}
              <div className="text-center mb-6">
                <h3 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                  {member.name}
                </h3>
                <p className="text-base md:text-lg text-gradient font-medium mb-4">
                  {member.role}
                </p>
                <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                  {member.bio}
                </p>
              </div>

              {/* Skills */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-white/70 mb-3 uppercase tracking-wider">
                  Expertise
                </h4>
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs md:text-sm text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-3">
                <a
                  href={member.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 glass-effect rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all hover:scale-110 border border-white/5 hover:border-white/20"
                  aria-label="GitHub"
                >
                  <Github size={18} />
                </a>
                <a
                  href={member.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 glass-effect rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all hover:scale-110 border border-white/5 hover:border-white/20"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href={member.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 glass-effect rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all hover:scale-110 border border-white/5 hover:border-white/20"
                  aria-label="Twitter"
                >
                  <Twitter size={18} />
                </a>
                <a
                  href={`mailto:${member.social.email}`}
                  className="w-10 h-10 glass-effect rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all hover:scale-110 border border-white/5 hover:border-white/20"
                  aria-label="Email"
                >
                  <Mail size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="glass-effect rounded-2xl md:rounded-3xl p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Want to Join Our Team?
          </h2>
          <p className="text-base md:text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            We&apos;re always looking for talented individuals who are passionate about creating exceptional digital experiences.
          </p>
          <a href="/contact">
            <button className="px-8 md:px-10 py-3 md:py-4 bg-white text-black text-base md:text-lg font-medium rounded-full hover:bg-gray-200 transition-all hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl">
              Get in Touch
            </button>
          </a>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-white/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-white/5 rounded-full blur-[150px]" />
      </div>
    </div>
  );
}
