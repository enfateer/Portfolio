import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import picture from "../assets/images/fathir.jpeg";

const Profile = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="profile"
      className="py-32 px-6 bg-section relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-500/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-heading section-title">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="mt-6 text-body font-medium tracking-wide uppercase text-sm letter-spacing-widest">
            A Journey of Code and Creativity
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center"
        >
          <div className="lg:col-span-7 space-y-8">
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-3xl font-bold text-heading">
                Muhamad Fathir Rahman
              </h3>
              <p className="text-lg leading-relaxed text-body">
                As a passionate developer based in Indonesia, I thrive at the
                intersection of design and technology. My journey in the tech
                world is driven by an insatiable curiosity and a commitment to
                building meaningful digital experiences.
              </p>
              <p className="text-lg leading-relaxed text-body">
                Currently, I am deep-diving into{" "}
                <span className="text-cyan-400 font-semibold border-b border-cyan-400/30">
                  Flutter
                </span>{" "}
                for mobile excellence and mastering modern{" "}
                <span className="text-violet-400 font-semibold border-b border-violet-400/30">
                  Web Engineering
                </span>
                . I believe that great software is not just about code, but
                about solving real problems and delighting users.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-6 py-8 border-y border-white/5"
            >
              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold text-muted mb-2">
                  Location
                </h4>
                <p className="text-heading font-medium">Bogor, Indonesia</p>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold text-muted mb-2">
                  Focus
                </h4>
                <p className="text-heading font-medium">Full Stack & Web</p>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-4"
            >
              {[
                {
                  icon: "fab fa-linkedin-in",
                  href: "https://www.linkedin.com/in/enfateer1113/",
                  color: "hover:text-cyan-400",
                },
                {
                  icon: "fab fa-github",
                  href: "https://github.com/enfateer",
                  color: "hover:text-indigo-400",
                },
                {
                  icon: "fab fa-whatsapp",
                  href: "https://wa.me/6285771218921",
                  color: "hover:text-emerald-400",
                },
                {
                  icon: "far fa-envelope",
                  href: "mailto:fathirnato08@gmail.com",
                  color: "hover:text-rose-400",
                },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center glass-card border-white/10 text-heading text-xl transition-colors ${social.color}`}
                >
                  <i className={social.icon}></i>
                </motion.a>
              ))}
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative group rounded-[2rem] overflow-hidden transform transition duration-500 hover:scale-[1.02]">
              <img
                src={picture}
                alt="Fathir Rahman"
                className="w-full max-w-[320px] rounded-[2rem] grayscale group-hover:grayscale-0 transition-all duration-700"
              />

              <div className="absolute bottom-6 left-6 right-6 p-5 glass-card border-white/10 rounded-3xl flex flex-col items-center gap-2 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 text-center shadow-2xl backdrop-blur-xl">
                <i className="fas fa-code text-cyan-400 text-lg mb-1"></i>
                <div>
                  <p className="text-[10px] text-muted font-black uppercase tracking-[0.4em] mb-1 leading-none">
                    fathir
                  </p>
                  <p className="text-sm font-bold text-heading leading-tight">
                    Full Stack Developer
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Profile;
