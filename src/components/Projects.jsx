const Projects = () => {
  const projects = [
    {
      title: "Management Keuangan App",
      tech: "Laravel + Bootstrap + Javascript",
      description: "Mengelola Keuangan dengan mudah tanpa ribet.",
      tags: ["Laravel", "Bootstrap"],
      icon: "fas fa-wallet",
      gradient: "from-[#2c3e66] to-[#3a5a8f]",
      github: "https://github.com/enfateer/FinTrack.git",
    },
    {
      title: "Gempa Bumi App",
      tech: "React + Tailwind + API",
      description: "Menampilkan data gempa bumi real-time dari TerraqueApi.",
      tags: ["React", "API"],
      icon: "fas fa-globe-asia",
      gradient: "from-[#1e2a47] to-[#3a5a8f]",
      github: "https://github.com/enfateer/Gempa-Bumi.git",
    },
  ];

  const handleProjectClick = (project) => {
    if (project.github) {
      window.open(project.github, "_blank");
    } else {
      alert(`✨ Proyek: ${project.title}\nDetail lengkap akan segera hadir!`);
    }
  };

  return (
    <section
      id="projects"
      className="py-16 px-5 bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 section-title">
            Project Exp
          </h2>
          <p className="mt-4 text-gray-500 text-sm">
            Beberapa Project yang pernah saya buat
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl overflow-hidden shadow-lg cursor-pointer group hover:shadow-xl transition"
              onClick={() => handleProjectClick(project)}
            >
              <div
                className={`h-48 bg-gradient-to-r ${project.gradient} flex items-center justify-center`}
              >
                <i
                  className={`${project.icon} text-6xl text-white/80 group-hover:scale-110 transition-transform`}
                ></i>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800">
                  {project.title}
                </h3>
                <p className="text-gray-500 text-sm mt-1">{project.tech}</p>
                <p className="text-gray-600 mt-3 text-sm">
                  {project.description}
                </p>

                <div className="mt-4 flex gap-2 flex-wrap">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="text-xs bg-gray-200 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-2 mt-4 text-sm text-blue-600 hover:underline"
                  >
                    <i className="fab fa-github"></i>
                    Lihat di GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
