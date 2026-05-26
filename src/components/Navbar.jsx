import { useState, useEffect } from "react";

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
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.pushState(null, null, href);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navItems.map((item) =>
        document.querySelector(item.href),
      );
      const scrollPosition = window.scrollY + 100;

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
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-2xl transition-all duration-300 ${
        scrolled ? "py-2" : "py-3"
      }`}
      style={{
        background: "var(--bg-nav)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex justify-between items-center">
        <a
          href="#home"
          onClick={(e) => handleClick(e, "#home")}
          className="text-xl sm:text-2xl font-bold tracking-tight"
        >
          <span style={{ color: "var(--accent)" }}>enfateer</span>
        </a>

        <div className="hidden md:flex items-center gap-6">
          <ul className="flex gap-6 text-sm font-medium">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className={`nav-link ${
                    activeSection === item.href.substring(1) ? "active" : ""
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label="Toggle theme"
            title={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            <i className={isDark ? "fas fa-sun" : "fas fa-moon"}></i>
          </button>
        </div>

        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label="Toggle theme"
          >
            <i className={isDark ? "fas fa-sun" : "fas fa-moon"}></i>
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="w-10 h-10 flex items-center justify-center rounded-xl transition-all"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border)",
              color: "var(--text-heading)",
            }}
          >
            <i className={mobileOpen ? "fas fa-times" : "fas fa-bars"}></i>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          className="md:hidden mt-2 mx-5 rounded-xl p-4 backdrop-blur-xl"
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--border)",
          }}
        >
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all"
                  style={{
                    color:
                      activeSection === item.href.substring(1)
                        ? "var(--accent)"
                        : "var(--text-body)",
                    background:
                      activeSection === item.href.substring(1)
                        ? "var(--accent-subtle)"
                        : "transparent",
                  }}
                >
                  <i className={item.icon} style={{ width: "16px" }}></i>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
