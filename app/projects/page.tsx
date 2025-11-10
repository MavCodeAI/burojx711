'use client';

import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      title: 'ERPMax',
      description: 'Complete Enterprise Resource Planning Solution',
      longDescription: 'A powerful ERP system designed for modern businesses. Features include inventory management, financial accounting, HR management, sales & purchase tracking, and real-time reporting. Built with scalability and user experience in mind.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Material-UI'],
      year: '2024',
    },
    {
      title: 'TBL Automation',
      description: 'Interactive AI-driven web assistant',
      longDescription: 'An intelligent web-based assistant that leverages AI to provide real-time support and automation for complex workflows.',
      tech: ['React', 'Node.js', 'OpenAI', 'WebSocket', 'Express'],
      year: '2024',
    },
    {
      title: 'Visuo',
      description: 'Motion-based 3D portfolio site',
      longDescription: 'An immersive 3D portfolio experience that showcases creative work through interactive animations and stunning visual effects.',
      tech: ['Three.js', 'React', 'GSAP', 'WebGL', 'Vite'],
      year: '2023',
    },
    {
      title: 'EcomPulse',
      description: 'Adaptive eCommerce experience engine',
      longDescription: 'A dynamic eCommerce platform that adapts to user behavior, providing personalized shopping experiences that drive conversion.',
      tech: ['Next.js', 'Stripe', 'MongoDB', 'Redis', 'Tailwind'],
      year: '2023',
    },
    {
      title: 'Finexa',
      description: 'Smart financial planner with live data visualization',
      longDescription: 'An intelligent financial planning tool that provides real-time insights and visualizations to help users make informed decisions.',
      tech: ['React', 'D3.js', 'Firebase', 'Chart.js', 'Material-UI'],
      year: '2023',
    },
  ];

  return (
    <div className="min-h-screen pt-24 md:pt-32 pb-16 md:pb-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-20"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-6 md:mb-8 text-gradient">
            Selected Work
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 leading-relaxed max-w-3xl">
            A showcase of our recent projects that blend creativity, technology, and strategic thinking
            to deliver exceptional digital experiences.
          </p>
        </motion.div>

        <div className="space-y-8 md:space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="glass-effect rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-12 group cursor-pointer overflow-hidden relative"
            >
              <div className="relative z-10">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 md:gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 md:gap-4 mb-3 md:mb-4">
                      <span className="text-xs md:text-sm text-gray-500">0{index + 1}</span>
                      <span className="text-xs md:text-sm text-gray-500">{project.year}</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 text-white/90 group-hover:text-gradient transition-all">
                      {project.title}
                    </h2>

                    <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-3 md:mb-4 max-w-2xl">
                      {project.description}
                    </p>

                    <p className="text-sm md:text-base text-gray-500 mb-6 md:mb-8 max-w-2xl leading-relaxed">
                      {project.longDescription}
                    </p>

                    <div className="flex flex-wrap gap-2 md:gap-3 mb-6 md:mb-8">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 md:px-4 py-1.5 md:py-2 bg-white/5 rounded-full text-xs md:text-sm text-gray-400 border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                      <motion.button
                        whileHover={{ x: 4 }}
                        className="text-white/80 hover:text-white text-xs md:text-sm font-medium transition-colors flex items-center gap-2"
                      >
                        <span>View Live Site</span>
                        <span>→</span>
                      </motion.button>
                      <motion.button
                        whileHover={{ x: 4 }}
                        className="text-white/80 hover:text-white text-xs md:text-sm font-medium transition-colors flex items-center gap-2"
                      >
                        <span>View Details</span>
                        <span>→</span>
                      </motion.button>
                    </div>
                  </div>

                  <div className="w-full lg:w-64 h-48 md:h-64 glass-effect rounded-xl md:rounded-2xl flex items-center justify-center">
                    <div className="text-5xl md:text-6xl font-bold text-white/5">
                      {project.title.substring(0, 2)}
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={false}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-white/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[150px]" />
      </div>
    </div>
  );
}
