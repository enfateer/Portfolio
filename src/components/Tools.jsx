import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Tools = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const tools = [
    { name: "HTML5", icon: "fab fa-html5", color: "text-[#E34F26]" },
    { name: "CSS3", icon: "fab fa-css3-alt", color: "text-[#1572B6]" },
    { name: "JavaScript", icon: "fab fa-js", color: "text-[#F7DF1E]" },
    { name: "PHP", icon: "fab fa-php", color: "text-[#777BB4]" },
    { name: "Laravel", icon: "fab fa-laravel", color: "text-[#FF2D20]" },
    { name: "React.js", icon: "fab fa-react", color: "text-[#61DAFB]" },
    { name: "Node.js", icon: "fab fa-node", color: "text-[#339933]" },
    { name: "Java", icon: "fab fa-java", color: "text-[#007396]" },
    { name: "Tailwind", icon: "fas fa-wind", color: "text-[#06B6D4]" },
    { name: "Bootstrap", icon: "fab fa-bootstrap", color: "text-[#7952B3]" },
    { name: "MySQL", icon: "fas fa-database", color: "text-[#4479A1]" },
    { name: "MongoDB", icon: "fas fa-database", color: "text-[#47A248]" },
    { name: "PostgreSQL", icon: "fas fa-database", color: "text-[#336791]" },
    { name: "Git", icon: "fab fa-git-alt", color: "text-[#F05032]" },
    { name: "Figma", icon: "fab fa-figma", color: "text-[#F24E1E]" },
    { name: "Sequelize", icon: "fas fa-code-branch", color: "text-[#52B0E7]" },
    { name: "Vite", icon: "fas fa-bolt", color: "text-[#646CFF]" },
    { name: "REST Api", icon: "fas fa-network-wired", color: "text-[#00599C]" },
    { name: "Postman", icon: "fas fa-rocket", color: "text-[#FF6C37]" },
    { name: "TypeScript", icon: "fab fa-js-square", color: "text-[#3178C6]" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 200, damping: 20 },
    },
  };

  return (
    <section
      id="tools"
      className="py-32 px-6 bg-section relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-heading section-title">
            Tech <span className="text-gradient">Stack</span>
          </h2>
          <p className="mt-6 text-body font-medium uppercase text-xs tracking-[0.2em]">
            Empowering ideas with modern technologies
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          {tools.map((tool, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass-card group p-6 rounded-2xl border-white/5 flex flex-col items-center justify-center gap-4 transition-all duration-300"
            >
              <div className="relative">
                <div
                  className={`absolute -inset-2 rounded-full blur-[10px] opacity-0 group-hover:opacity-20 transition-opacity duration-300 ${tool.color.replace("text-", "bg-")}`}
                />
                <i
                  className={`${tool.icon} text-4xl ${tool.color} relative z-10 transition-transform duration-300 group-hover:scale-110`}
                ></i>
              </div>
              <span className="text-sm font-bold text-heading tracking-wide">
                {tool.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Tools;
