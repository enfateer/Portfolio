import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import picture from "../assets/images/about.jpeg";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    "I am a Web Developer",
    "I am a Backend Developer",
    "I love Problem Solve",
  ];

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    const fullText = roles[roleIndex];

    const timer = setTimeout(
      () => {
        if (isDeleting) {
          setDisplayText(fullText.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        } else {
          setDisplayText(fullText.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }

        if (!isDeleting && charIndex === fullText.length) {
          setIsDeleting(true);
          setTimeout(() => {}, 1800);
        } else if (isDeleting && charIndex === 0) {
          setIsDeleting(false);
          setRoleIndex((roleIndex + 1) % roles.length);
        }
      },
      isDeleting ? 45 : 75,
    );

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-5 py-16 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-100 opacity-70"></div>
      <div className="max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16 relative z-10">
        <div
          className={`flex-1 text-center md:text-left ${inView ? "reveal active" : "reveal"}`}
          ref={ref}
        >
          <div className="mb-4 inline-block px-4 py-2 bg-[#2c3e66]/10 rounded-full text-[#2c3e66] text-sm font-semibold">
            ✨ Welcome to my portfolio
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
            Hallo, Saya{" "}
            <span className="bg-gradient-to-r from-[#1e2a47] to-[#2c3e66] bg-clip-text text-transparent block sm:inline">
              Muhamad Fathir Rahman
            </span>
          </h1>
          <div className="mt-4 text-xl sm:text-2xl text-gray-600 flex flex-wrap items-center justify-center md:justify-start gap-1">
            <span className="font-semibold text-[#2c3e66] min-w-[200px]">
              {displayText}
            </span>
            <span className="cursor-blink"></span>
          </div>
          <p className="mt-6 text-gray-500 max-w-md mx-auto md:mx-0">
            Membangun pengalaman digital yang asik, modern, dan fungsional
            dengan fokus pada kode yang bersih.
          </p>
          <div className="mt-8 flex gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="btn-hover px-8 py-3 bg-gradient-to-r from-[#1e2a47] to-[#2c3e66] text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all relative overflow-hidden"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#projects")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span className="relative z-10">Lihat Proyek</span>
            </a>
            <a
              href="#profile"
              className="px-8 py-3 border-2 border-[#2c3e66] text-[#2c3e66] rounded-full font-medium hover:bg-[#2c3e66] hover:text-white transition-all"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#profile")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              About Me
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center float-animation">
          <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-gradient-to-br from-[#2c3e66] to-[#1e2a47] p-1">
            <img src={picture} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
