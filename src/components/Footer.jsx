import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-20 relative z-10 border-t border-white/5 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex flex-col items-center md:items-start gap-4">
            <a href="#home" className="text-3xl font-bold tracking-tighter">
              <span className="text-gradient">enfateer</span>
            </a>
          </div>

          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="flex items-center gap-4">
              {[
                { icon: "fab fa-github", href: "https://github.com/enfateer" },
                {
                  icon: "fab fa-linkedin-in",
                  href: "https://www.linkedin.com/in/enfateer1113/",
                },
                {
                  icon: "fab fa-instagram",
                  href: "https://www.instagram.com/fathirrahmaann/",
                },
              ].map((social, i) => (
                <motion.a
                  key={i}
                  whileHover={{
                    y: -5,
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-2xl flex items-center justify-center glass-card border-white/10 text-muted hover:text-heading transition-colors"
                >
                  <i className={social.icon + " text-xl"}></i>
                </motion.a>
              ))}
            </div>

            <p className="text-xs font-bold tracking-[0.2em] text-muted uppercase">
              &copy; {new Date().getFullYear()} enfateer. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
