import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const VSCodeSnippet = () => {
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => setShowCursor((v) => !v), 530);
    return () => clearInterval(interval);
  }, []);

  const lines = [
    { num: 1, content: null },
    {
      num: 2,
      content: [
        { text: "const ", cls: "vsc-keyword" },
        { text: "developer", cls: "vsc-variable" },
        { text: " = {", cls: "vsc-bracket" },
      ],
    },
    {
      num: 3,
      content: [
        { text: "  name", cls: "vsc-property" },
        { text: ": ", cls: "vsc-bracket" },
        { text: '"Muhamad Fathir Rahman"', cls: "vsc-string" },
        { text: ",", cls: "vsc-bracket" },
      ],
    },
    {
      num: 4,
      content: [
        { text: "  job", cls: "vsc-property" },
        { text: ": ", cls: "vsc-bracket" },
        { text: '"Full Stack Developer"', cls: "vsc-string" },
        { text: ",", cls: "vsc-bracket" },
      ],
    },
    {
      num: 5,
      content: [
        { text: "  email", cls: "vsc-property" },
        { text: ": ", cls: "vsc-bracket" },
        { text: '"fathirnato08@gmail.com"', cls: "vsc-string" },
        { text: ",", cls: "vsc-bracket" },
      ],
    },
    {
      num: 6,
      content: [
        { text: "}", cls: "vsc-bracket" },
        { text: ";", cls: "vsc-bracket" },
      ],
    },
    { num: 7, content: null },
    {
      num: 8,
      content: [
        { text: "module", cls: "vsc-keyword" },
        { text: ".", cls: "vsc-bracket" },
        { text: "exports", cls: "vsc-property" },
        { text: " = ", cls: "vsc-bracket" },
        { text: "developer", cls: "vsc-variable" },
        { text: ";", cls: "vsc-bracket" },
      ],
    },
    { num: 9, content: null },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="vsc-editor glass-card border-white/5"
    >
      <div className="vsc-titlebar bg-slate-900/50">
        <div className="vsc-dots">
          <span className="vsc-dot vsc-dot-red"></span>
          <span className="vsc-dot vsc-dot-yellow"></span>
          <span className="vsc-dot vsc-dot-green"></span>
        </div>
        <span className="vsc-title">developer.js — Portfolio</span>
        <div style={{ width: 52 }}></div>
      </div>

      <div className="vsc-tabbar bg-slate-900/30">
        <div className="vsc-tab vsc-tab-active bg-slate-800/40">
          <svg
            width="14"
            height="14"
            viewBox="0 0 32 32"
            style={{ marginRight: 6, flexShrink: 0 }}
          >
            <path
              d="M29.01 5.03l-5.23-2.76c-.46-.24-1.02-.17-1.41.17L12.48 11.2 7.92 7.81c-.36-.28-.86-.27-1.21.03l-1.6 1.37c-.43.37-.43 1.05 0 1.42l3.96 3.37-3.96 3.37c-.43.37-.43 1.05 0 1.42l1.6 1.37c.35.3.85.31 1.21.03l4.56-3.39 9.89 8.76c.39.34.95.41 1.41.17l5.23-2.76c.28-.14.46-.43.46-.75V5.78c0-.32-.18-.61-.46-.75z"
              fill="#519aba"
            />
          </svg>
          <span className="text-xs">developer.js</span>
          <span className="vsc-tab-close opacity-0 hover:opacity-100 transition-opacity">
            ×
          </span>
        </div>
      </div>

      <div className="vsc-code-area bg-[#0d1117]/80">
        <div className="vsc-minimap">
          {[30, 65, 80, 70, 75, 25, 55, 40].map((width, idx) => (
            <div
              key={idx}
              className="vsc-minimap-line"
              style={{ width: `${width}%` }}
            ></div>
          ))}
        </div>

        <div className="vsc-lines py-4">
          {lines.map((line, i) => (
            <div
              key={i}
              className={`vsc-line ${line.num === 5 ? "bg-white/5" : ""}`}
            >
              <span className="vsc-line-num text-slate-600">{line.num}</span>
              <span className="vsc-line-content font-mono text-[12.5px]">
                {line.content
                  ? line.content.map((token, j) => (
                      <span key={j} className={token.cls}>
                        {token.text}
                      </span>
                    ))
                  : "\u00A0"}
                {line.num === 5 && (
                  <span
                    className={`vsc-cursor ${showCursor ? "" : "vsc-cursor-hidden"}`}
                    style={{ background: "var(--accent-cyan)" }}
                  ></span>
                )}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 py-24 relative overflow-hidden bg-page"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-aurora -z-10" />

      <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-cyan-500/20 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-[350px] h-[350px] bg-violet-600/20 blur-[120px] rounded-full animate-pulse" />

      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center lg:text-left"
          ref={ref}
        >
          <div className="flex items-center justify-center lg:justify-start mb-6 relative group">
            <span className="text-[10px] sm:text-xs font-bold tracking-[0.3em] text-muted uppercase">
              Fathir Rahman • Full Stack Developer
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter text-heading leading-[1.1] mb-6">
            Fathir <span className="text-gradient">Rahman.</span>
          </h1>

          <p className="mt-8 max-w-xl mx-auto lg:mx-0 leading-relaxed text-body text-lg">
            A passionate Full Stack Developer dedicated to crafting clean,
            efficient, and scalable solutions using modern technologies.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="px-8 py-4 rounded-2xl font-bold shadow-lg transition-all flex items-center justify-center gap-3 text-sm tracking-wide"
              style={{
                background:
                  "linear-gradient(135deg, var(--accent-cyan), var(--accent-violet))",
                color: "var(--text-inverse)",
              }}
              onClick={(e) => {
                e.preventDefault();
                const target = document.querySelector("#projects");
                if (target) {
                  const offset = 80;
                  const elementPosition = target.getBoundingClientRect().top;
                  const offsetPosition =
                    elementPosition + window.pageYOffset - offset;
                  window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                }
              }}
            >
              <span>Explore Projects</span>
              <i className="fas fa-chevron-right text-[10px]"></i>
            </motion.a>

            <motion.a
              whileHover={{
                scale: 1.05,
                background: "rgba(255, 255, 255, 0.05)",
              }}
              whileTap={{ scale: 0.95 }}
              href="/MFathirRahman.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-2xl font-bold text-sm transition-all flex items-center justify-center gap-3 glass-card border-white/10 text-heading tracking-wide"
            >
              <i className="fas fa-file-pdf text-xs text-cyan-400"></i>
              <span>Hire Me</span>
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
          animate={inView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex-1 flex justify-center w-full lg:w-auto overflow-hidden lg:overflow-visible"
        >
          <VSCodeSnippet />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
