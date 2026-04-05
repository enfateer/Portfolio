import { useState, useEffect } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Profile", href: "#profile" },
    { name: "Pendidikan", href: "#education" },
    { name: "Tools", href: "#tools" },
    { name: "Proyek", href: "#projects" },
  ];

  const handleClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.pushState(null, null, href);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
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
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-lg border-b border-gray-200/60">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-3 flex flex-wrap justify-between items-center">
        <div className="text-2xl font-bold tracking-tight bg-gradient-to-r from-[#1e2a47] to-[#3a5a8f] bg-clip-text text-transparent">
          enfateer<span className="text-[#2c3e66]"> 13</span>
        </div>

        <ul className="flex space-x-5 sm:space-x-8 text-sm sm:text-base font-medium text-gray-700">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={`hover:text-[#2c3e66] transition ${
                  activeSection === item.href.substring(1)
                    ? "text-[#2c3e66]"
                    : ""
                }`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
