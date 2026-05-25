const Tools = () => {
  const tools = [
    { name: "HTML5", icon: "fab fa-html5" },
    { name: "CSS3", icon: "fab fa-css3-alt" },
    { name: "JavaScript", icon: "fab fa-js" },
    { name: "Git", icon: "fab fa-git-alt" },
    { name: "PHP", icon: "fab fa-php" },
    { name: "Laravel", icon: "fab fa-laravel" },
    { name: "Bootstrap", icon: "fab fa-bootstrap" },
    { name: "MySQL", icon: "fas fa-database" },
    { name: "Figma", icon: "fab fa-figma" },
    { name: "React.js", icon: "fab fa-react" },
    { name: "TailwindCSS", icon: "fas fa-wind" },
    { name: "Node.js", icon: "fab fa-node" },
    { name: "Java", icon: "fab fa-java" },
    { name: "MongoDB", icon: "fas fa-database" },
    { name: "ChatGPT", icon: "fas fa-robot" },
    { name: "Gemini", icon: "fas fa-star" },
  ];

  return (
    <section
      id="tools"
      className="py-20 px-6 section-secondary overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-heading section-title">
            Skills &{" "}
            <span
              className="font-extrabold uppercase"
              style={{ color: "var(--accent)" }}
            >
              Tools
            </span>
          </h2>
          <p className="mt-4 text-sm font-medium tracking-wide text-muted">
            Tools dan teknologi yang pernah saya pelajari dan gunakan dalam
            proyek
          </p>
        </div>
        <div className="marquee-wrapper mt-8">
          <div className="marquee-track">
            {tools.map((tool, idx) => (
              <div
                key={`set1-${idx}`}
                className="tool-card inline-flex items-center gap-3 px-5 py-3 mx-3 rounded-xl"
              >
                <i
                  className={`${tool.icon} text-2xl`}
                  style={{ color: "var(--text-heading)" }}
                ></i>
                <span
                  className="font-semibold text-sm tracking-tight"
                  style={{ color: "var(--text-heading)" }}
                >
                  {tool.name}
                </span>
              </div>
            ))}

            {tools.map((tool, idx) => (
              <div
                key={`set2-${idx}`}
                className="tool-card inline-flex items-center gap-3 px-5 py-3 mx-3 rounded-xl"
              >
                <i
                  className={`${tool.icon} text-2xl`}
                  style={{ color: "var(--text-heading)" }}
                ></i>
                <span
                  className="font-semibold text-sm tracking-tight"
                  style={{ color: "var(--text-heading)" }}
                >
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;
