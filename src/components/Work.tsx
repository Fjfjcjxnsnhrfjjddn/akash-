import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Layout, Code, Box, Play } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Website Design for SIEM Platform",
      description: "Konoom represents a cutting-edge SaaS platform meticulously designed to provide multi-location brands",
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800",
      category: "UI/UX DESIGN",
      color: "bg-purple-100"
    },
    {
      title: "AI-based Social network for educators",
      description: "Multi-location brands faced difficulties in efficiently managing customer reviews and ratings across various online platforms.",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=800",
      category: "WEB DESIGN",
      color: "bg-blue-100"
    },
    {
      title: "NFT Buy & Sell Platform",
      description: "In the research phase, we comprehensively study user needs, behaviors, and pain points through methods like interviews",
      image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=80&w=800",
      category: "SAAS PRODUCT",
      color: "bg-cyan-100"
    },
    {
      title: "Review & Web Traffic Management",
      description: "In the implementation phase, we focus on translating the designed user interface into a functional product, adhering",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      category: "DASHBOARD",
      color: "bg-yellow-100"
    }
  ];

  return (
    <section id="work" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/20 px-4 py-1 rounded-full text-accent text-xs font-bold uppercase tracking-widest mb-4">
            <span className="w-2 h-2 bg-accent rounded-full" />
            My Project
            <span className="w-2 h-2 bg-accent rounded-full" />
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-forest mt-4">
            Some of my <br /> project
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className={`relative aspect-[4/3] rounded-3xl overflow-hidden mb-6 ${project.color}`}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-6 right-6 w-12 h-12 bg-accent text-forest rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight size={24} />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-forest mb-3 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Projects };
