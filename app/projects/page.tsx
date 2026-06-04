"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Sambhrant City",
    image: "/projects/anbr.webp",
    description: "A premium real estate platform showcasing residential plots, properties, and investment opportunities with a modern user experience.",
    url: "https://www.sambhrantcity.org/",
    tech: ["Php", "Yii", "Html5", "CSS3", "JavaScript"],
  },
  {
    title: "Divine Greenland",
    image: "/projects/gel-fertilizer.webp",
    description: "Luxury real estate project featuring premium living spaces, modern infrastructure, and residential development solutions.",
    url: "https://divinegreenland.com/",
    tech: ["Wordpress", "MySQL", "Gsap"],
  },
  {
    title: "Miorah Shop",
    image: "/projects/akshay-seed.webp",
    description: "Modern e-commerce platform delivering fashion, lifestyle, and everyday products through an intuitive online shopping experience.",
    url: "https://miorahshop.in/",
     tech: ["Wordpress", "MySQL"],
  },
  {
    title: " Arabian Gulf Pearl",
    image: "/projects/akshay-seed.webp",
    description: "Business solutions platform providing professional services, consulting, and corporate support for clients across multiple industries.",
    url: "https://arabiangulfpearl.com/",
     tech: ["Wordpress", "MySQL"],
  },
   
  {
  title: "Excellent Seeds",
  image: "/projects/excellent-seeds.webp",
  description: "Agricultural seed company providing high-quality hybrid seeds and innovative farming solutions to improve crop productivity and yield.",
  url: "https://excellentseeds.in/",
  tech: ["WordPress", "MySQL"],
},

{
  title: "Govindaam",
  image: "/projects/govindaam.webp",
  description: "E-commerce platform offering authentic traditional products, food items, and lifestyle essentials with a seamless online shopping experience.",
  url: "https://govindaam.com/",
  tech: ["WordPress", "MySQL"],
},

{
  title: "Tatvagyan Shakti Modasa",
  image: "/projects/tatvagyan-shakti.webp",
  description: "Spiritual and educational platform dedicated to sharing knowledge, values, and community-focused initiatives.",
  url: "https://tatvagyanshaktimodasa.com/",
  tech: ["WordPress", "MySQL"],
},

{
  title: "Movement On Physio",
  image: "/projects/movement-on-physio.webp",
  description: "Professional physiotherapy and rehabilitation platform focused on patient care, recovery programs, and wellness services.",
  url: "https://movementonphysio.com/",
  tech: ["WordPress", "MySQL"],
},

{
  title: "Wellman Group",
  image: "/projects/wellman-group.webp",
  description: "Corporate business website showcasing industrial solutions, services, and company expertise across multiple sectors.",
  url: "https://wellmangroup.in/",
  tech: ["WordPress", "MySQL"],
},

{
  title: "Faire Venture",
  image: "/projects/faire-venture.webp",
  description: "Business consulting and venture-focused platform providing strategic solutions, investment guidance, and professional services.",
  url: "http://faireventure.ca/",
  tech: ["WordPress", "MySQL"],
},

{
  title: "See2Hear",
  image: "/projects/see2hear.webp",
  description: "Healthcare platform focused on hearing and communication solutions, delivering accessible services and modern patient experiences.",
  url: "https://see2hear.codeflix.fr/",
   tech: ["WordPress", "MySQL"],
},

{
  title: "PVR",
  image: "/projects/pvr.webp",
  description: "Modern web platform featuring responsive design, optimized user experience, and scalable frontend architecture.",
  url: "https://pvr.codeflix.fr/",
  tech: ["WordPress", "MySQL"],
},
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* Background Glow */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-pink-500/20 blur-[120px]" />
        <div className="absolute bottom-20 right-10 h-72 w-72 rounded-full bg-blue-500/20 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-24">
        
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter">
            More
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff007f] to-purple-500">
              Projects
            </span>
          </h1>

          <p className="mt-8 text-zinc-400 text-lg max-w-2xl mx-auto">
            A collection of projects crafted with modern technologies,
            responsive design, and seamless user experiences.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
         {projects.map((project, index) => (
  <motion.a
    key={project.title}
    href={project.url}
    target="_blank"
    rel="noopener noreferrer"
    initial={{ opacity: 0, y: 80 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{
      duration: 0.6,
      delay: index * 0.08,
    }}
    whileHover={{ y: -12 }}
    className="group relative block"
  >
    {/* Premium Glow */}
    <div className="absolute -inset-[1px] rounded-[32px] bg-gradient-to-r from-[#ff007f] via-purple-500 to-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-md" />

    <div className="relative overflow-hidden rounded-[32px] border border-zinc-800 bg-zinc-950/70 backdrop-blur-xl h-full">
      

      {/* Content */}
      <div className="p-7">
        <h3 className="text-2xl font-bold mb-3 transition-colors duration-300 group-hover:text-[#ff007f]">
          {project.title}
        </h3>

        <p className="text-zinc-400 leading-relaxed mb-6">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
  {project.tech.map((tech) => (
    <span
      key={tech}
      className="px-3 py-1 text-xs rounded-full border border-zinc-700 bg-zinc-900/60 text-zinc-300"
    >
      {tech}
    </span>
  ))}
</div>

        <div className="flex items-center gap-2 text-[#ff007f] font-medium">
          View Project

          <span className="transition-transform duration-300 group-hover:translate-x-2">
            →
          </span>
        </div>
      </div>
    </div>
  </motion.a>
))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-32"
        >
          <h2 className="text-5xl md:text-7xl font-black uppercase">
            Let's Build
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff007f] to-purple-500">
              Something Amazing
            </span>
          </h2>
        </motion.div>
      </div>
    </main>
  );
}