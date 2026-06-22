import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = ({ isDark, toggleTheme }) => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home", icon: "fas fa-home" },
    { name: "Profile", href: "#profile", icon: "fas fa-user" },
    { name: "Pendidikan", href: "#education", icon: "fas fa-graduation-cap" },
    { name: "Tools", href: "#tools", icon: "fas fa-wrench" },
    { name: "Portfolio", href: "#projects", icon: "fas fa-briefcase" },
  ];

  const handleClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      window.history.pushState(null, null, href);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navItems.map((item) =>
        document.querySelector(item.href),
      );
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].href.substring(1));
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`flex justify-between items-center px-6 py-3 rounded-2xl glass-card transition-all duration-500 ${
            scrolled ? "mx-0 shadow-lg" : "mx-4"
          }`}
          style={{
            background: scrolled
              ? "var(--bg-nav)"
              : "rgba(255, 255, 255, 0.03)",
          }}
        >
          <motion.a
            href="#home"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={(e) => handleClick(e, "#home")}
            className="text-2xl font-bold tracking-tighter"
          >
            <span className="text-gradient">enfateer</span>
          </motion.a>

          <div className="hidden md:flex items-center gap-8">
            <ul className="flex gap-8 text-[13px] font-semibold uppercase tracking-widest">
              {navItems.map((item, idx) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <a
                    href={item.href}
                    onClick={(e) => handleClick(e, item.href)}
                    className={`relative nav-link transition-colors duration-300 ${
                      activeSection === item.href.substring(1)
                        ? "text-heading"
                        : "text-muted"
                    }`}
                  >
                    {item.name}
                    {activeSection === item.href.substring(1) && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-violet-500"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </a>
                </motion.li>
              ))}
            </ul>

            <div className="h-6 w-px bg-white/10 mx-2" />

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="w-10 h-10 rounded-xl flex items-center justify-center text-lg glass-card border-white/10"
              aria-label="Toggle theme"
            >
              <i
                className={
                  isDark
                    ? "fas fa-sun text-yellow-400 font-bold"
                    : "fas fa-moon text-violet-400 font-bold"
                }
              ></i>
            </motion.button>
          </div>

          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-xl flex items-center justify-center glass-card"
            >
              <i
                className={
                  isDark
                    ? "fas fa-sun text-yellow-400"
                    : "fas fa-moon text-violet-400"
                }
              ></i>
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="w-10 h-10 flex items-center justify-center rounded-xl glass-card transition-all"
            >
              <i className={mobileOpen ? "fas fa-times" : "fas fa-bars"}></i>
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              className="md:hidden mt-3 rounded-2xl p-4 glass-card overflow-hidden"
            >
              <ul className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      onClick={(e) => handleClick(e, item.href)}
                      className={`flex items-center gap-4 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                        activeSection === item.href.substring(1)
                          ? "bg-white/10 text-cyan-400"
                          : "text-body hover:bg-white/5"
                      }`}
                    >
                      <i className={`${item.icon} w-5 text-center`}></i>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
