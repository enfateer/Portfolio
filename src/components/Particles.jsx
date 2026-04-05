import { useEffect } from "react";

const Particles = () => {
  useEffect(() => {
    const particlesContainer = document.getElementById("particles");
    if (!particlesContainer) return;

    particlesContainer.innerHTML = "";

    for (let i = 0; i < 50; i++) {
      const particle = document.createElement("div");
      particle.classList.add("particle");
      const size = Math.random() * 5 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.animationDuration = `${Math.random() * 10 + 5}s`;
      particle.style.animationDelay = `${Math.random() * 5}s`;
      particlesContainer.appendChild(particle);
    }

    return () => {
      if (particlesContainer) {
        particlesContainer.innerHTML = "";
      }
    };
  }, []);

  return <div id="particles"></div>;
};

export default Particles;
