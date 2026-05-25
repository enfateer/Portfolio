import { useState, useEffect } from "react";
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
        { text: '"Junior Full Stack Developer"', cls: "vsc-string" },
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
    <div className="vsc-editor">
      <div className="vsc-titlebar">
        <div className="vsc-dots">
          <span className="vsc-dot vsc-dot-red"></span>
          <span className="vsc-dot vsc-dot-yellow"></span>
          <span className="vsc-dot vsc-dot-green"></span>
        </div>
        <span className="vsc-title">developer.js — Portfolio</span>
        <div style={{ width: 52 }}></div>
      </div>

      <div className="vsc-tabbar">
        <div className="vsc-tab vsc-tab-active">
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
          <span>developer.js</span>
          <span className="vsc-tab-close">×</span>
        </div>
      </div>

      <div className="vsc-code-area">
        <div className="vsc-minimap">
          <div className="vsc-minimap-line" style={{ width: "30%" }}></div>
          <div className="vsc-minimap-line" style={{ width: "65%" }}></div>
          <div className="vsc-minimap-line" style={{ width: "80%" }}></div>
          <div className="vsc-minimap-line" style={{ width: "70%" }}></div>
          <div className="vsc-minimap-line" style={{ width: "75%" }}></div>
          <div className="vsc-minimap-line" style={{ width: "25%" }}></div>
          <div className="vsc-minimap-line" style={{ width: "55%" }}></div>
          <div className="vsc-minimap-line" style={{ width: "40%" }}></div>
        </div>

        <div className="vsc-lines">
          {lines.map((line, i) => (
            <div
              key={i}
              className={`vsc-line ${line.num === 5 ? "vsc-line-active" : ""}`}
            >
              <span className="vsc-line-num">{line.num}</span>
              <span className="vsc-line-content">
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
                  ></span>
                )}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="vsc-statusbar">
        <div className="vsc-statusbar-left">
          <span className="vsc-statusbar-branch">
            <svg
              width="12"
              height="12"
              viewBox="0 0 16 16"
              fill="currentColor"
              style={{ marginRight: 4 }}
            >
              <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zM13 4.5H9.5V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5z" />
            </svg>
            main
          </span>
        </div>
        <div className="vsc-statusbar-right">
          <span>Ln 5, Col 42</span>
          <span>UTF-8</span>
          <span>JavaScript</span>
        </div>
      </div>
    </div>
  );
};

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    "Web Developer",
    "Back End Developer",
    "Problem Solver",
    "Tech Explorer",
  ];

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    const fullText = roles[roleIndex];

    const timer = setTimeout(
      () => {
        if (isDeleting) {
          setDisplayText(fullText.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setDisplayText(fullText.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }

        if (!isDeleting && charIndex === fullText.length) {
          setIsDeleting(true);
        } else if (isDeleting && charIndex === 0) {
          setIsDeleting(false);
          setRoleIndex((roleIndex + 1) % roles.length);
        }
      },
      isDeleting ? 40 : 80,
    );

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 py-24 relative overflow-hidden section-primary"
    >
      <div className="max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20 relative z-10 w-full">
        <div
          className={`flex-1 text-center md:text-left ${
            inView ? "reveal active" : "reveal"
          }`}
          ref={ref}
        >
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.15] tracking-tight"
            style={{ color: "var(--text-heading)" }}
          >
            Hai, I am <br className="hidden md:inline" />
            <span
              style={{ color: "var(--text-heading)" }}
              className="font-extrabold"
            >
              Fathir Rahman
            </span>
          </h1>

          <div className="mt-4 text-lg sm:text-xl flex flex-wrap items-center justify-center md:justify-start gap-1.5 h-8">
            <span className="text-muted text-sm sm:text-base font-medium">
              Fokus pada
            </span>
            <span
              className="font-semibold text-sm sm:text-base underline underline-offset-4 decoration-1"
              style={{ color: "var(--text-heading)" }}
            >
              {displayText}
            </span>
            <span className="cursor-blink"></span>
          </div>

          <p
            className="mt-6 max-w-md mx-auto md:mx-0 leading-relaxed text-sm sm:text-base"
            style={{ color: "var(--text-body)" }}
          >
            Membangun aplikasi web dan mobile dengan kode yang bersih,
            terstruktur, serta mengutamakan kenyamanan pengguna.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3.5 justify-center md:justify-start">
            <a
              href="#projects"
              className="btn-hover px-7 py-3 rounded-full font-medium shadow-sm transition-all relative overflow-hidden flex items-center justify-center gap-2 text-sm"
              style={{
                background: "var(--accent)",
                color: "var(--text-inverse)",
              }}
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#projects")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span>Lihat Proyek</span>
              <i className="fas fa-arrow-right text-xs"></i>
            </a>
            <a
              href="/MFathirRahman.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3 rounded-full font-medium text-sm transition-all flex items-center justify-center gap-2 border hover:bg-neutral-800/5 dark:hover:bg-white/5"
              style={{
                border: "1px solid var(--border)",
                color: "var(--text-heading)",
              }}
            >
              <i className="fas fa-file-alt text-xs"></i>
              <span>My CV</span>
            </a>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <VSCodeSnippet />
        </div>
      </div>
    </section>
  );
};

export default Hero;
