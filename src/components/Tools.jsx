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
  ];

  return (
    <section id="tools" className="py-16 px-5 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 section-title">
            Tools
          </h2>
          <p className="mt-4 text-gray-500 text-sm">
            Tools yang pernah saya gunakan dan dipelajari
          </p>
        </div>
        <div className="marquee-wrapper">
          <div className="marquee-track">
            {tools.map((tool, idx) => (
              <div
                key={`set1-${idx}`}
                className="tool-card inline-flex items-center gap-2 px-4 py-2 mx-2 bg-gray-100 rounded-lg shadow-md"
              >
                <i className={`${tool.icon} text-xl text-[#2c3e66]`}></i>
                <span className="font-semibold text-sm">{tool.name}</span>
              </div>
            ))}

            {tools.map((tool, idx) => (
              <div
                key={`set2-${idx}`}
                className="tool-card inline-flex items-center gap-2 px-4 py-2 mx-2 bg-gray-100 rounded-lg shadow-md"
              >
                <i className={`${tool.icon} text-xl text-[#2c3e66]`}></i>
                <span className="font-semibold text-sm">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;
