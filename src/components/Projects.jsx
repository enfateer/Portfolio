import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("projects");

  const projects = [
    {
      title: "FinTrack - Finance Hub",
      tech: "Laravel + Bootstrap + JS",
      description:
        "A comprehensive personal finance management system designed for efficiency and ease of use.",
      tags: ["Laravel", "Bootstrap", "MySQL"],
      icon: "fas fa-wallet",
      color: "from-cyan-500/20 to-blue-500/20",
      github: "https://github.com/enfateer/FinTrack.git",
    },
    {
      title: "Earthquake Real-time Info",
      tech: "React.js + Tailwind + API",
      description:
        "Real-time earthquake monitoring application with interactive maps and historical data analysis.",
      tags: ["React", "API", "Tailwind"],
      icon: "fas fa-globe-asia",
      color: "from-emerald-500/20 to-teal-500/20",
      github: "https://github.com/enfateer/Gempa-Bumi.git",
    },
    {
      title: "TIX.ID Cinema Booking",
      tech: "Laravel + Javascript",
      description:
        "Streamlined cinema ticket booking system featuring seat selection and automated reporting.",
      tags: ["Laravel", "Bootstrap", "MySql"],
      icon: "fas fa-film",
      color: "from-violet-500/20 to-indigo-500/20",
      github: "https://github.com/enfateer/TIX.ID.git",
    },
  ];

  const certificates = [
    {
      title: "Belajar Dasar AI",
      issuer: "Dicoding Indonesia",
      date: "Dec 2025",
      icon: "fas fa-robot",
      link: "https://www.dicoding.com/certificates/EYX4K0225PDL",
    },
    {
      title: "Programming with Java",
      issuer: "Dicoding Indonesia",
      date: "Aug 2024",
      icon: "fab fa-java",
      link: "https://www.dicoding.com/certificates/QLZ96Q3E7Z5D",
    },
    {
      title: "Basic Javascript",
      issuer: "Dicoding Indonesia",
      date: "Mar 2025",
      icon: "fab fa-js",
      link: "https://www.dicoding.com/certificates/NVP751OMWXR0",
    },
    {
      title: "Financial Literacy",
      issuer: "Dicoding Indonesia",
      date: "Oct 2024",
      icon: "fas fa-chart-line",
      link: "https://www.dicoding.com/certificates/JMZVVKQLRZN9",
    },
  ];

  const handleItemClick = (item) => {
    const url = item.github || item.link;
    if (url) window.open(url, "_blank");
  };

  return (
    <section
      id="projects"
      className="py-32 px-6 bg-section relative scroll-mt-20"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-heading section-title">
            Creative <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="mt-6 text-body font-medium uppercase text-xs tracking-[0.2em]">
            Showcasing my technical achievements & expertise
          </p>
        </motion.div>

        <div className="flex justify-center mb-20">
          <div className="flex p-1.5 rounded-2xl glass-card border-white/5 shadow-2xl relative overflow-hidden">
            <motion.div
              layoutId="tabBackground"
              className="absolute bg-gradient-to-r from-cyan-500 to-violet-500 rounded-xl"
              initial={false}
              animate={{
                left: activeTab === "projects" ? 6 : "calc(50% + 2px)",
                width: "calc(50% - 8px)",
                height: "calc(100% - 12px)",
                top: 6,
              }}
              transition={{ type: "spring", stiffness: 350, damping: 30 }}
            />

            <button
              onClick={() => setActiveTab("projects")}
              className={`relative z-10 flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-bold tracking-wide transition-colors duration-300 ${
                activeTab === "projects"
                  ? "text-white"
                  : "text-muted hover:text-heading"
              }`}
            >
              <i className="fas fa-code text-xs"></i>
              <span>My Projects</span>
            </button>

            <button
              onClick={() => setActiveTab("certificates")}
              className={`relative z-10 flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-bold tracking-wide transition-colors duration-300 ${
                activeTab === "certificates"
                  ? "text-white"
                  : "text-muted hover:text-heading"
              }`}
            >
              <i className="fas fa-award text-xs"></i>
              <span>Certificates</span>
            </button>
          </div>
        </div>

        <motion.div layout className="min-h-[500px]">
          <AnimatePresence mode="wait">
            {activeTab === "projects" ? (
              <motion.div
                key="projects"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {projects.map((project, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ y: -12 }}
                    className="glass-card group rounded-[2rem] overflow-hidden border-white/5 hover:border-white/20 transition-all duration-500 flex flex-col h-full shadow-xl hover:shadow-cyan-500/10"
                  >
                    <div
                      className={`h-48 flex items-center justify-center relative bg-gradient-to-br ${project.color} overflow-hidden`}
                    >
                      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,white_1px,transparent_1px)] bg-[size:20px_20px]" />
                      <i
                        className={`${project.icon} text-5xl text-white group-hover:scale-125 group-hover:rotate-6 transition-transform duration-700 ease-out`}
                      />

                      <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => handleItemClick(project)}
                          className="w-12 h-12 rounded-full bg-white text-slate-900 flex items-center justify-center shadow-lg"
                        >
                          <i className="fas fa-external-link-alt"></i>
                        </motion.button>
                      </div>
                    </div>

                    <div className="p-8 flex flex-col flex-grow">
                      <h3 className="text-xl font-bold tracking-tight text-heading mb-2">
                        {project.title}
                      </h3>
                      <p className="text-xs font-mono font-bold text-cyan-400 mb-4 uppercase tracking-widest">
                        {project.tech}
                      </p>
                      <p className="text-sm leading-relaxed text-body mb-8 flex-grow">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.tags.map((tag, tagIdx) => (
                          <span
                            key={tagIdx}
                            className="text-[10px] font-bold px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-muted uppercase tracking-wider"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between group/link">
                        <button
                          onClick={() => handleItemClick(project)}
                          className="flex items-center gap-2 text-xs font-bold text-heading group-hover/link:text-cyan-400 transition-colors"
                        >
                          <i className="fab fa-github text-lg"></i>
                          <span>SOURCE CODE</span>
                        </button>
                        <i className="fas fa-arrow-right text-xs opacity-0 group-hover/link:opacity-100 group-hover:translate-x-1 transition-all"></i>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="certificates"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid sm:grid-cols-2 gap-6"
              >
                {certificates.map((cert, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{
                      x: 10,
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                    }}
                    onClick={() => handleItemClick(cert)}
                    className="glass-card rounded-[1.5rem] p-6 sm:p-8 cursor-pointer flex flex-col justify-between group transition-all duration-300 border-white/5 hover:border-white/20"
                  >
                    <div className="flex items-center gap-6">
                      <div className="w-14 h-14 rounded-2xl glass-card flex items-center justify-center border-white/10 flex-shrink-0 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-shadow">
                        <i
                          className={`${cert.icon} text-2xl text-cyan-400 group-hover:rotate-12 transition-transform duration-500`}
                        ></i>
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-heading tracking-tight mb-1 group-hover:text-cyan-400 transition-colors">
                          {cert.title}
                        </h3>
                        <p className="text-sm font-medium text-body">
                          {cert.issuer}
                        </p>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between">
                      <span className="text-[10px] font-bold text-muted uppercase tracking-widest bg-white/5 px-2 py-1 rounded-md">
                        {cert.date}
                      </span>
                      <span className="flex items-center gap-2 text-xs font-bold text-heading hover:text-cyan-400 transition-colors">
                        <span>VIEW CREDENTIAL</span>
                        <i className="fas fa-external-link-alt text-[10px]"></i>
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
