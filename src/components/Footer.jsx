const Footer = () => {
  return (
    <footer 
      className="py-10 relative z-10 border-t" 
      style={{ 
        backgroundColor: "var(--bg-page)", 
        borderColor: "var(--border)",
        color: "var(--text-muted)"
      }}
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-xs sm:text-sm tracking-wide">
          &copy; {new Date().getFullYear()} enfateer 13. All Rights Reserved. Built with React.
        </p>
        <div className="flex items-center gap-4 text-lg">
          <a 
            href="https://github.com/enfateer" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-xl flex items-center justify-center border hover:text-heading hover:bg-neutral-800/10 dark:hover:bg-white/5 transition-all duration-300"
            style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
            title="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>
          <a 
            href="https://www.linkedin.com/in/enfateer1113/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-xl flex items-center justify-center border hover:text-heading hover:bg-neutral-800/10 dark:hover:bg-white/5 transition-all duration-300"
            style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
            title="LinkedIn"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a 
            href="https://www.instagram.com/fathirrahmaann/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-xl flex items-center justify-center border hover:text-heading hover:bg-neutral-800/10 dark:hover:bg-white/5 transition-all duration-300"
            style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}
            title="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
