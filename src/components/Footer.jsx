const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#111827] to-[#1e2a47] text-white py-8 relative z-10">
      <div className="max-w-6xl mx-auto px-5 text-center">
        <p className="text-gray-300">
          &copy; 2026 Made By enfateer 13 | Tech Enthusiast
        </p>
        <div className="flex justify-center gap-6 mt-4 text-gray-400 text-xl">
          <a href="https://github.com/enfateer" target="_blank">
            <i className="fab fa-github hover:text-white transition cursor-pointer hover:scale-110"></i>
          </a>
          <a href="https://www.linkedin.com/in/enfateer1113/" target="_blank">
            <i className="fab fa-linkedin hover:text-white transition cursor-pointer hover:scale-110"></i>
          </a>
          <a href="https://www.instagram.com/fathirrahmaann/" target="_blank">
            <i className="fab fa-instagram hover:text-white transition cursor-pointer hover:scale-110"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
