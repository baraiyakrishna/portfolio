"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Mail, Phone, ExternalLink, ChevronRight, Plus } from "lucide-react";

// --- CUSTOM SNOW / PARTICLE ENGINE COMPONENT ---
const SnowEffect = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const particles: any[] = [];
    const particleCount = 100;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 2 + 1,
        d: Math.random() * particleCount,
        speed: Math.random() * 0.4 + 0.2,
      });
    }

    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "rgba(255, 0, 127, 0.6)";

      ctx.beginPath();
      for (let i = 0; i < particleCount; i++) {
        const p = particles[i];
        ctx.moveTo(p.x, p.y);
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
      }
      ctx.fill();

      for (let i = 0; i < particleCount; i++) {
        const p = particles[i];
        p.y += p.speed;
        p.x += Math.sin(p.d) * 0.5;

        if (p.y > height) {
          p.y = -10;
          p.x = Math.random() * width;
        }
      }
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[1] pointer-events-none opacity-60"
    />
  );
};

// --- MAIN PORTFOLIO COMPONENT ---
export default function Portfolio() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [cursorHovered, setCursorHovered] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const allProjects = [
    { title: "Alleviate Financial", type: "Fintech", url: "https://alleviatefinancial.com/" },
    { title: "Varex Imaging", type: "Medical Tech", url: "https://www.vareximaging.com/" },
    { title: "ExpertVoice", type: "Marketing", url: "https://www.expertvoice.com/" },
    { title: "NPG Unique", type: "Corporate", url: "#" },
    { title: "ANBR", type: "Agriculture", url: "http://anbr.in/" },
    { title: "Gel Fertilizer", type: "Agriculture", url: "https://gelfertilizer.com/" },
    { title: "Akshay Seed", type: "Agriculture", url: "https://www.akshayseed.com/" },
    { title: "Sambhrant City", type: "Real Estate", url: "https://www.sambhrantcity.org/" },
    { title: "Divine Greenland", type: "Real Estate", url: "https://divinegreenland.com/" },
    { title: "City Line Smoke Shop", type: "Retail", url: "https://citylinesmokeshop.com/" },
    { title: "Miorah Shop", type: "E-commerce", url: "https://miorahshop.in/" },
    { title: "Arabian Gulf Pearl", type: "Business Services", url: "https://arabiangulfpearl.com/" },
  ];

  const displayedProjects = showAll ? allProjects : allProjects.slice(0, 4);

const fadeInUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8 }
} as const;

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.15 } }
  };

  if (!isMounted) return null;

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-100 selection:bg-[#ff007f] selection:text-white overflow-x-hidden relative font-sans">
      
      <SnowEffect />

      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_-20%,#ff007f15,transparent_60%)] z-0 pointer-events-none" />

      {/* CUSTOM CURSOR */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 w-8 h-8 rounded-full border border-[#ff007f] z-[100] hidden md:block mix-blend-screen"
        animate={{
          x: mousePos.x - 16,
          y: mousePos.y - 16,
          scale: cursorHovered ? 1.8 : 1,
          backgroundColor: cursorHovered ? "rgba(255, 0, 127, 0.15)" : "rgba(255, 0, 127, 0)",
        }}
        transition={{ type: "spring", damping: 25, stiffness: 250, mass: 0.5 }}
      />

      <div className="relative z-10">
        
        {/* HERO */}
        <header className="h-screen flex flex-col justify-center items-center relative px-4 text-center">
          <motion.div initial="initial" animate="whileInView" variants={staggerContainer}>
            <motion.span variants={fadeInUp} className="text-[#ff007f] font-mono tracking-[0.3em] uppercase text-xs md:text-sm mb-6 block">
              Digital Artisan / Krishna Baraiya
            </motion.span>
            
            <motion.h1 variants={fadeInUp} className="text-6xl md:text-[8rem] font-black uppercase tracking-tighter leading-[0.9] mb-6">
              <span className="block text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">Creative</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-zinc-400 via-[#ff007f] to-zinc-800 drop-shadow-[0_0_25px_rgba(255,0,127,0.3)]">
                Designer
              </span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-zinc-400 max-w-lg mx-auto text-lg mb-10 font-light">
              Converting complex designs into pixel-perfect neon realities. Based in Ahmedabad.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex justify-center">
              <a 
                href="#projects"
                onMouseEnter={() => setCursorHovered(true)}
                onMouseLeave={() => setCursorHovered(false)}
                className="group relative px-8 py-4 border border-[#ff007f] text-[#ff007f] font-bold uppercase tracking-widest overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,0,127,0.4)]"
              >
                <span className="relative z-10 group-hover:text-black transition-colors duration-300">My Projects</span>
                <div className="absolute inset-0 bg-[#ff007f] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
              </a>
            </motion.div>
          </motion.div>
        </header>

        <main className="max-w-7xl mx-auto px-6 py-24 space-y-48">
          
          {/* PROJECTS */}
          <section id="projects">
            <motion.div {...fadeInUp} className="mb-20 flex items-center gap-6">
              <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tighter italic">Featured Work</h2>
              <div className="h-[2px] flex-1 bg-gradient-to-r from-[#ff007f] to-transparent opacity-50" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AnimatePresence mode="popLayout">
                {displayedProjects.map((project, i) => (
                  <motion.a
                    key={project.title}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    onMouseEnter={() => setCursorHovered(true)}
                    onMouseLeave={() => setCursorHovered(false)}
                    className="group relative block cursor-pointer bg-zinc-900/40 backdrop-blur-sm border border-zinc-800 p-8 h-[250px] flex flex-col justify-end overflow-hidden hover:border-[#ff007f]/50 transition-colors duration-500 rounded-2xl"
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-[#ff007f]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    <div className="absolute top-8 right-8 text-zinc-600 group-hover:text-[#ff007f] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-500">
                      <ExternalLink size={32} />
                    </div>
                    
                    <div className="relative z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                      <span className="text-[#ff007f] font-mono text-xs uppercase mb-2 block tracking-widest">{project.type}</span>
                      <h3 className="text-3xl md:text-4xl font-bold mb-2 text-white group-hover:text-[#ff007f] transition-colors">{project.title}</h3>
                      <p className="text-zinc-500 group-hover:text-zinc-300 transition-colors line-clamp-1">
                        Modern web experience & creative implementation.
                      </p>
                      <div className="mt-4 flex items-center gap-2 text-[#ff007f] opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-sm font-bold uppercase tracking-widest">
                        View Project <ChevronRight size={16} />
                      </div>
                    </div>
                  </motion.a>
                ))}
              </AnimatePresence>
            </div>

            {!showAll && (
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="mt-16 flex justify-center">
                <button
                  onClick={() => setShowAll(true)}
                  className="group flex items-center gap-3 px-10 py-5 bg-zinc-900 border border-zinc-800 text-white font-bold uppercase tracking-widest hover:border-[#ff007f] hover:text-[#ff007f] transition-all duration-300 rounded-full"
                >
                  <Plus size={20} className="group-hover:rotate-90 transition-transform duration-500" />
                  Read More Projects
                </button>
              </motion.div>
            )}
          </section>

          {/* SKILLS */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-20 items-center">
            <motion.div {...fadeInUp} className="lg:col-span-1">
              <h2 className="text-4xl font-bold uppercase mb-6">The Arsenal</h2>
              <p className="text-zinc-500 leading-relaxed font-light text-lg">
                Crafting robust frontend architectures. Professional expertise in converting complex designs into reality.
              </p>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              whileInView="whileInView"
              viewport={{ once: true, margin: "-100px" }}
              className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-4"
            >
              {["React/Next.js", "Tailwind CSS", "Figma to HTML", "WordPress", "Elementor", "Sass/Less", "JavaScript", "GitLab", "Bootstrap 5"].map((skill, i) => (
                <motion.div 
                  key={i}
                  variants={fadeInUp}
                  className="bg-zinc-900/30 backdrop-blur-md p-8 rounded-xl border border-zinc-800 flex flex-col items-center justify-center group hover:border-[#ff007f]/50 hover:bg-[#ff007f]/5 transition-all duration-300"
                >
                  <div className="w-12 h-12 mb-4 rounded-full border border-zinc-800 bg-zinc-950 flex items-center justify-center group-hover:border-[#ff007f] group-hover:shadow-[0_0_15px_rgba(255,0,127,0.5)] transition-all duration-500">
                    <Code size={20} className="text-zinc-600 group-hover:text-[#ff007f]" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-zinc-500 group-hover:text-white transition-colors">{skill}</span>
                </motion.div>
              ))}
            </motion.div>
          </section>

          {/* EXPERIENCE */}
          <section>
            <motion.div {...fadeInUp} className="mb-16 text-center">
              <h2 className="text-4xl font-bold uppercase">Work Journey</h2>
            </motion.div>

            <div className="space-y-6 max-w-4xl mx-auto">
              {[
                { year: "2024 - Present", company: "Codeflixweb", role: "Frontend Developer", desc: "Designing and developing high-performance websites while crafting intuitive application screen designs for seamless digital experiences." },
                { year: "2022 - 2023", company: "Bytes Technolab Pvt Ltd", role: "Web Designer", desc: "Converted XD/Figma to HTML & worked on Magento/WordPress Elementor themes." },
                { year: "2020 - 2021", company: "WayToWeb Pvt Ltd", role: "Web Design Intern", desc: "Learned the core of Web Design, fundamental layout UI, and corporate logo structures." }
              ].map((exp, i) => (
                <motion.div 
                  key={i}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.2 }}
                  className="flex flex-col md:flex-row items-start md:items-center gap-8 p-8 md:p-10 rounded-2xl border border-zinc-800 bg-zinc-900/20 backdrop-blur-sm hover:border-[#ff007f]/40 hover:bg-zinc-900/60 transition-all duration-500 group"
                >
                  <div className="text-sm font-mono text-[#ff007f] whitespace-nowrap px-4 py-2 rounded-full border border-[#ff007f]/30 group-hover:bg-[#ff007f]/10 transition-colors">
                    {exp.year}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-[#ff007f] transition-colors">{exp.role}</h3>
                    <p className="text-lg font-medium text-zinc-400 mb-3">{exp.company}</p>
                    <p className="text-zinc-500 font-light leading-relaxed">{exp.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </main>

        <footer className="bg-zinc-950/80 backdrop-blur-xl py-32 px-6 border-t border-zinc-900 relative mt-24">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 {...fadeInUp} className="text-5xl md:text-7xl font-black mb-12 uppercase tracking-tighter">
              Ready to start a <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff007f] to-purple-600">Project?</span>
            </motion.h2>
            
            <motion.div {...fadeInUp} className="flex flex-col md:flex-row justify-center items-center gap-12 mb-20">
              <a href="mailto:Baraiyakrishna840@gmail.com" className="flex flex-col items-center gap-3 group">
                <div className="p-4 rounded-full bg-zinc-900 border border-zinc-800 group-hover:border-[#ff007f] group-hover:text-[#ff007f] transition-all">
                  <Mail />
                </div>
                <span className="text-sm font-mono text-zinc-400 group-hover:text-white">Baraiyakrishna840@gmail.com</span>
              </a>
              <div className="flex flex-col items-center gap-3 group">
                <div className="p-4 rounded-full bg-zinc-900 border border-zinc-800 group-hover:border-[#ff007f] group-hover:text-[#ff007f] transition-all">
                  <Phone />
                </div>
                <span className="text-sm font-mono text-zinc-400 group-hover:text-white">+91 9265327436</span>
              </div>
            </motion.div>

            <div className="text-zinc-700 text-xs uppercase tracking-widest font-mono">
              © {new Date().getFullYear()} Krishna Baraiya — Crafted with Next.js
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}