import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Menu, X, Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-forest/95 backdrop-blur-md border-b border-white/10 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-white tracking-tighter">
          PORTFOLIO<span className="text-accent">.</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-white/80">
          <a href="#home" className="hover:text-accent transition-colors">Home</a>
          <a href="#work" className="hover:text-accent transition-colors">My Work</a>
          <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
          <a 
            href="#contact"
            className="bg-accent text-forest px-6 py-2 rounded-full font-bold flex items-center gap-2 hover:bg-white transition-all"
          >
            Let's Talk <ArrowUpRight size={18} />
          </a>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-forest border-b border-white/10 p-6 flex flex-col space-y-4 text-white"
        >
          <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#work" onClick={() => setIsOpen(false)}>My Work</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
          <a 
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="bg-accent text-forest px-6 py-3 rounded-full font-bold w-full text-center"
          >
            Let's Talk
          </a>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="bg-forest min-h-[80vh] flex items-center px-6 py-20 overflow-hidden relative">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1 rounded-full text-accent text-xs font-bold uppercase tracking-widest mb-6">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            Welcome to Portfolio
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
          </div>
          
          <h1 className="text-5xl md:text-8xl font-display font-bold text-white leading-[0.9] mb-8">
            WELCOME TO <br />
            MY PORTFOLIO <br />
            I AM <span className="text-accent underline decoration-white/20 underline-offset-8">AKASH</span>
          </h1>
          
          <p className="text-white/60 text-lg max-w-md mb-10 leading-relaxed">
            Live workshop where we define the main problems and challenges before building a strategic plan moving forward.
          </p>
          
          <a 
            href="#work"
            className="bg-accent text-forest px-8 py-4 rounded-full font-bold inline-flex items-center gap-3 hover:scale-105 transition-transform"
          >
            View My Work <ArrowUpRight size={20} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative flex justify-center"
        >
          {/* Abstract Shape Background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/20 rounded-full blur-3xl" />
          <div className="relative w-full aspect-square max-w-lg bg-accent rounded-t-full overflow-hidden border-8 border-white/10 shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" 
              alt="Akash Profile"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          
          {/* Floating Element */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-10 -right-10 bg-white p-6 rounded-2xl shadow-2xl hidden lg:block"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center text-accent">
                <Github size={24} />
              </div>
              <div>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Top Rated</p>
                <p className="text-lg font-bold text-forest">Digital Designer</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />
    </section>
  );
};

export { Navbar, Hero };
