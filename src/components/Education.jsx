import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Education = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const data = [
    {
      id: 1,
      title: "SDN Ciadeg 06",
      period: "2015 - 2021",
      icon: "fas fa-school",
      color: "from-blue-400 to-cyan-400",
      description:
        "Building a strong foundation in character and basic logic during the formative years.",
    },
    {
      id: 2,
      title: "SMPIT Alfatih",
      period: "2021 - 2024",
      icon: "fas fa-graduation-cap",
      color: "from-violet-400 to-fuchsia-400",
      description:
        "Secondary education focusing on academic excellence and Islamic values.",
    },
    {
      id: 3,
      title: "SMK Wikrama",
      period: "2024 - Present",
      icon: "fas fa-laptop-code",
      color: "from-emerald-400 to-teal-400",
      description:
        "Specializing in Software & Game Development (PPLG). Mastering modern tech stacks and industry standards.",
    },
  ];

  return (
    <section
      id="education"
      className="py-32 px-6 bg-page relative overflow-hidden"
    >
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-x-1/2 hidden md:block" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-heading section-title">
            Academic <span className="text-gradient">Journey</span>
          </h2>
          <p className="mt-6 text-body font-medium uppercase text-xs tracking-[0.2em]">
            Tracing the path of my learning and growth
          </p>
        </motion.div>

        <div
          className="relative border-l border-white/5 md:border-l-0 space-y-16 ml-4 md:ml-0"
          ref={ref}
        >
          {data.map((edu, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                className="relative pl-8 md:pl-0"
              >
                <div className="absolute left-0 top-1 md:left-1/2 -translate-x-1/2 flex items-center justify-center z-20">
                  <div className="w-10 h-10 rounded-2xl bg-slate-950 border border-white/10 flex items-center justify-center text-sm shadow-xl backdrop-blur-md">
                    <i
                      className={`${edu.icon} bg-gradient-to-br ${edu.color} bg-clip-text text-transparent`}
                    ></i>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-16 items-start">
                  <div
                    className={`space-y-2 md:pt-1 ${isEven ? "md:text-right md:col-start-1" : "md:text-left md:col-start-2 md:row-start-1"}`}
                  >
                    <span className="inline-block text-xs font-bold tracking-widest text-muted uppercase">
                      {edu.period}
                    </span>
                    <h3 className="text-2xl font-bold text-heading">
                      {edu.title}
                    </h3>
                  </div>

                  <div
                    className={`md:pt-1 ${isEven ? "md:col-start-2" : "md:col-start-1 md:row-start-1"}`}
                  >
                    <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-colors">
                      <p className="text-body leading-relaxed">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
