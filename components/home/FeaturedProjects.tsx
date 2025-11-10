'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const FeaturedProjects = () => {
  const projects = [
    {
      title: 'ERPMax',
      description: 'Complete Enterprise Resource Planning Solution',
      longDescription: 'A powerful ERP system designed for modern businesses. Features include inventory management, financial accounting, HR management, sales & purchase tracking, and real-time reporting. Built with scalability and user experience in mind.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Material-UI'],
      category: 'Enterprise',
      year: '2024',
      impact: '+65% Productivity',
      image: '/projects/ErpMAx.png'
    },
    {
      title: 'TBL Automation',
      description: 'AI-powered business automation',
      longDescription: 'Intelligent automation platform leveraging AI to streamline operations and boost productivity.',
      tech: ['React', 'Node.js', 'OpenAI', 'WebSocket'],
      category: 'AI/ML',
      year: '2024',
      impact: '10x Faster',
      image: '/projects/tbl.jpg'
    },
    {
      title: 'Visuo',
      description: 'Immersive 3D portfolio experience',
      longDescription: 'Award-winning portfolio site featuring cutting-edge 3D animations and interactive storytelling.',
      tech: ['Three.js', 'React', 'GSAP', 'WebGL'],
      category: 'Creative',
      year: '2023',
      impact: 'Award Winner',
      image: '/projects/visuo.jpg'
    },
  ];

  return (
    <section id="projects-section" className="relative py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Premium header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-effect-light rounded-full border border-white/10 mb-6">
            <span className="text-xs md:text-sm text-gray-300 font-medium uppercase tracking-wider">Featured Work</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-gradient leading-[1.1] tracking-tight">
            Projects That Made Impact
          </h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl">
            Real results for real businesses. Each project represents a unique challenge solved with creativity, technical excellence, and strategic thinking.
          </p>
        </motion.div>

        {/* Premium project cards */}
        <div className="space-y-6 md:space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="glass-effect rounded-2xl md:rounded-3xl p-6 md:p-10 border border-white/5 hover:border-white/10 transition-all hover:scale-[1.01]">
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Content */}
                  <div className="flex-1 space-y-6">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-3 mb-3">
                          <span className="text-xs text-gray-500 font-mono">0{index + 1}</span>
                          <span className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-400 border border-white/10">
                            {project.category}
                          </span>
                          <span className="text-xs text-gray-500">{project.year}</span>
                        </div>
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold text-white group-hover:text-gradient transition-colors">
                          {project.title}
                        </h3>
                      </div>
                      <div className="hidden md:block px-4 py-2 glass-effect-light rounded-lg border border-white/10">
                        <div className="text-sm font-bold text-gradient">{project.impact}</div>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="space-y-3">
                      <p className="text-lg md:text-xl text-gray-300">
                        {project.description}
                      </p>
                      <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                        {project.longDescription}
                      </p>
                    </div>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 bg-white/5 rounded-lg text-xs md:text-sm text-gray-400 border border-white/10 hover:border-white/20 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex flex-wrap gap-4 pt-4">
                      <button className="group/btn flex items-center gap-2 text-white hover:text-gradient transition-colors">
                        <span className="text-sm font-medium">View Case Study</span>
                        <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </button>
                      <button className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
                        Live Demo →
                      </button>
                    </div>
                  </div>

                  {/* Project visual */}
                  <div className="w-full lg:w-80 h-56 sm:h-64 lg:h-96 rounded-xl border border-white/10 overflow-hidden group-hover:border-white/20 transition-colors relative bg-white/5">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 320px"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full">
                        <div className="text-center">
                          <div className="text-4xl sm:text-6xl font-bold text-white/5 mb-2">{project.title.substring(0, 2)}</div>
                          <div className="text-xs text-gray-500 uppercase tracking-wider">Project Preview</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 md:mt-20 text-center"
        >
          <Link href="/projects">
            <button className="group px-10 md:px-12 py-4 glass-effect rounded-full text-white font-semibold hover:bg-white/10 transition-all hover:scale-105 border border-white/10 hover:border-white/20 flex items-center gap-2 mx-auto">
              <span>Explore All Projects</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </Link>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-white/3 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] bg-white/3 rounded-full blur-[120px]" />
      </div>
    </section>
  );
};

export default FeaturedProjects;
