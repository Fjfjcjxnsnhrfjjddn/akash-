import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Figma, Chrome, Palette, Video, Mail, Github, Linkedin, Twitter, Instagram, Flag, Image, Contact, BookOpen } from 'lucide-react';

const About = () => {
  return (
    <section className="py-24 px-6 bg-accent">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute inset-0 bg-forest/20 rounded-full blur-3xl" />
          <div className="relative aspect-square w-full max-w-md bg-forest rounded-full overflow-hidden border-8 border-white/20 shadow-2xl mx-auto">
            <img 
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800" 
              alt="Akash Profile"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-forest"
        >
          <div className="inline-flex items-center gap-2 bg-white/20 border border-white/40 px-4 py-1 rounded-full text-forest text-xs font-bold uppercase tracking-widest mb-6">
            <span className="w-2 h-2 bg-forest rounded-full" />
            Welcome to Portfolio
            <span className="w-2 h-2 bg-forest rounded-full" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-8">
            Lead product designer <br /> and art director.
          </h2>
          
          <p className="text-forest/80 text-lg mb-12 leading-relaxed">
            We transitioned our expertise to frontier science to ensure our work yields a tangible, positive impact on humanity. By focusing on innovative solutions, we aim to drive meaningful change that enhances lives and fosters sustainable development.
          </p>
          
          <div className="grid grid-cols-3 gap-8">
            <div>
              <p className="text-4xl md:text-6xl font-bold mb-2">42+</p>
              <p className="text-sm font-bold uppercase tracking-wider opacity-60">Project Served</p>
            </div>
            <div>
              <p className="text-4xl md:text-6xl font-bold mb-2">11+</p>
              <p className="text-sm font-bold uppercase tracking-wider opacity-60">Startup Partner</p>
            </div>
            <div>
              <p className="text-4xl md:text-6xl font-bold mb-2">11K+</p>
              <p className="text-sm font-bold uppercase tracking-wider opacity-60">User served</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Skills = () => {
  const skills = [
    { name: "UI / UX Design", icon: <Figma size={48} />, color: "bg-orange-100" },
    { name: "Graphic Design", icon: <Palette size={48} />, color: "bg-blue-100" },
    { name: "Illustration", icon: <Chrome size={48} />, color: "bg-yellow-100" },
    { name: "Motion Design", icon: <Video size={48} />, color: "bg-purple-100" },
    { name: "Banner Design", icon: <Flag size={48} />, color: "bg-red-100" },
    { name: "Poster Design", icon: <Image size={48} />, color: "bg-green-100" },
    { name: "Visiting Card", icon: <Contact size={48} />, color: "bg-indigo-100" },
    { name: "Brochure Design", icon: <BookOpen size={48} />, color: "bg-pink-100" }
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-forest">
            Skills & Tools For Those <br /> Looking For
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="bg-accent p-10 rounded-[40px] flex flex-col items-center text-center group transition-all"
            >
              <div className="w-24 h-24 bg-forest/10 rounded-3xl flex items-center justify-center text-forest mb-8 group-hover:bg-forest group-hover:text-accent transition-all duration-300">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold text-forest">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="bg-forest pt-24 pb-12 px-6 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Marquee Effect */}
        <div className="flex whitespace-nowrap overflow-hidden border-y border-white/10 py-8 mb-24">
          <motion.div 
            animate={{ x: [0, -1000] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="flex items-center gap-12 text-4xl md:text-6xl font-display font-bold uppercase tracking-tighter"
          >
            {[...Array(10)].map((_, i) => (
              <React.Fragment key={i}>
                <span className="flex items-center gap-4">
                  App Design <span className="text-accent">✦</span>
                </span>
                <span className="flex items-center gap-4">
                  Saas Product <span className="text-accent">✦</span>
                </span>
                <span className="flex items-center gap-4">
                  Dashboard <span className="text-accent">✦</span>
                </span>
                <span className="flex items-center gap-4">
                  Web App <span className="text-accent">✦</span>
                </span>
              </React.Fragment>
            ))}
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-24 mb-24">
          <div>
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-8">
              Let's Work <br /> Together
            </h2>
            <p className="text-white/60 text-lg max-w-md mb-12">
              Let's make your brand truly brilliant! Together, we can create a powerful identity that stands out, resonates with your audience, and drives lasting impact. Your vision deserves to shine!
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-accent hover:text-forest transition-all">
                <Github size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-accent hover:text-forest transition-all">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-accent hover:text-forest transition-all">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-accent hover:text-forest transition-all">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div className="grid gap-6">
            <a 
              href="mailto:kumarsantosh3858@gmail.com"
              className="bg-accent p-8 rounded-[32px] text-forest flex justify-between items-center group cursor-pointer hover:bg-white transition-colors"
            >
              <div>
                <p className="text-sm font-bold uppercase tracking-widest opacity-60 mb-2">Email Me</p>
                <p className="text-xl font-bold">kumarsantosh3858@gmail.com</p>
              </div>
              <ArrowUpRight className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
            </a>
            <a 
              href="tel:+919910797889"
              className="bg-accent p-8 rounded-[32px] text-forest flex justify-between items-center group cursor-pointer hover:bg-white transition-colors"
            >
              <div>
                <p className="text-sm font-bold uppercase tracking-widest opacity-60 mb-2">Call Me</p>
                <p className="text-xl font-bold">+91 9910797889</p>
              </div>
              <ArrowUpRight className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
            </a>
          </div>
        </div>

        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 text-sm text-white/40">
          <div className="flex gap-8 font-medium">
            <a href="#" className="hover:text-white transition-colors">Home</a>
            <a href="#" className="hover:text-white transition-colors">My Work</a>
            <a href="#" className="hover:text-white transition-colors">Case Study</a>
            <a href="#" className="hover:text-white transition-colors">Live Site</a>
          </div>
          <p>© 2026 Akash Kumar. All right reserved</p>
          <div className="flex gap-8 font-medium">
            <a href="#" className="hover:text-white transition-colors uppercase tracking-widest">UI/UX Design</a>
            <a href="#" className="hover:text-white transition-colors uppercase tracking-widest">Web Design</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { About, Skills, Footer };
