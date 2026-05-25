import { useState } from "react";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("projects"); // 'projects' or 'certificates'

  const projects = [
    {
      title: "FinTrack - Keuangan App",
      tech: "Laravel + Bootstrap + JS",
      description:
        "Sistem manajemen keuangan personal untuk memantau pendapatan, pengeluaran, dan tabungan harian secara efisien.",
      tags: ["Laravel", "Bootstrap", "MySQL"],
      icon: "fas fa-wallet",
      github: "https://github.com/enfateer/FinTrack.git",
    },
    {
      title: "Gempa Bumi Info App",
      tech: "React.js + Tailwind + API",
      description:
        "Aplikasi informasi gempa bumi waktu nyata (real-time) yang mengonsumsi data dari BMKG/TerraqueApi dengan peta interaktif.",
      tags: ["React", "API", "Tailwind"],
      icon: "fas fa-globe-asia",
      github: "https://github.com/enfateer/Gempa-Bumi.git",
    },
    {
      title: "TIX.ID",
      tech: "Laravel + Javascript",
      description:
        "Aplikasi boking tiket bioskop sederhana dengan fitur pemesanan, manajemen film, dan laporan penjualan.",
      tags: ["Laravel", "Bootstrap", "MySql"],
      icon: "fas fa-boxes-stacked",
      github: "https://github.com/enfateer/TIX.ID.git",
    },
  ];

  const certificates = [
    {
      title: "Belajar Dasar AI",
      issuer: "Dicoding Indonesia",
      date: "Desember 2025",

      icon: "fas fa-robot",
      link: "https://www.dicoding.com/certificates/EYX4K0225PDL",
    },
    {
      title: "Memulai Pemrograman dengan Java",
      issuer: "Dicoding Indonesia",
      date: "Agustus 2024",

      icon: "fab fa-java",
      link: "https://www.dicoding.com/certificates/QLZ96Q3E7Z5D",
    },
    {
      title: "Belajar Dasar Javascript",
      issuer: "Dicoding Indonesia",
      date: "Maret 2025",

      icon: "fab fa-js",
      link: "https://www.dicoding.com/certificates/NVP751OMWXR0",
    },
    {
      title: "Financial Literacy ",
      issuer: "Dicoding Indonesia",
      date: "Oktober 2024",

      icon: "fas fa-wallet",
      link: "https://www.dicoding.com/certificates/JMZVVKQLRZN9",
    },
  ];

  const handleItemClick = (item) => {
    if (item.github) {
      window.open(item.github, "_blank");
    } else if (item.link) {
      window.open(item.link, "_blank");
    }
  };

  return (
    <section id="projects" className="py-20 px-6 section-primary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-heading section-title">
            My{" "}
            <span
              className="font-extrabold uppercase"
              style={{ color: "var(--accent)" }}
            >
              Portfolio
            </span>
          </h2>
          <p className="mt-4 text-sm font-medium tracking-wide text-muted">
            Karya, proyek perangkat lunak, dan pencapaian sertifikasi saya
          </p>
        </div>

        <div className="flex justify-center mb-16">
          <div
            className="flex p-1.5 rounded-2xl border"
            style={{
              backgroundColor: "var(--bg-section)",
              borderColor: "var(--border)",
            }}
          >
            <button
              onClick={() => setActiveTab("projects")}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold tracking-wide transition-all duration-300 ${
                activeTab === "projects"
                  ? "bg-neutral-900 text-white dark:bg-white dark:text-black shadow-md"
                  : "text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
              }`}
            >
              <i className="fas fa-folder-open text-xs"></i>
              <span>Proyek Saya</span>
            </button>
            <button
              onClick={() => setActiveTab("certificates")}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold tracking-wide transition-all duration-300 ${
                activeTab === "certificates"
                  ? "bg-neutral-900 text-white dark:bg-white dark:text-black shadow-md"
                  : "text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
              }`}
            >
              <i className="fas fa-award text-xs"></i>
              <span>Sertifikat</span>
            </button>
          </div>
        </div>

        <div className="tab-content-enter">
          {activeTab === "projects" ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, idx) => (
                <div
                  key={idx}
                  onClick={() => handleItemClick(project)}
                  className="project-card rounded-2xl overflow-hidden cursor-pointer flex flex-col h-full group"
                >
                  <div
                    className="h-36 flex items-center justify-center relative border-b"
                    style={{
                      backgroundColor: "var(--bg-section-alt)",
                      borderColor: "var(--border)",
                    }}
                  >
                    <div className="absolute inset-0 opacity-10 bg-[radial-gradient(var(--text-muted)_1px,transparent_1px)] [background-size:16px_16px]"></div>
                    <i
                      className={`${project.icon} text-4xl group-hover:scale-110 transition-transform duration-500`}
                      style={{ color: "var(--text-heading)" }}
                    ></i>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h3
                      className="text-lg font-bold tracking-tight text-heading"
                      style={{ color: "var(--text-heading)" }}
                    >
                      {project.title}
                    </h3>
                    <p
                      className="text-xs font-mono font-medium mt-1"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {project.tech}
                    </p>
                    <p
                      className="mt-4 text-xs sm:text-sm leading-relaxed flex-grow"
                      style={{ color: "var(--text-body)" }}
                    >
                      {project.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-1.5">
                      {project.tags.map((tag, tagIdx) => (
                        <span
                          key={tagIdx}
                          className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-md uppercase tracking-wider bg-neutral-900/5 text-neutral-800 dark:bg-white/5 dark:text-neutral-200 border"
                          style={{ borderColor: "var(--border)" }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {project.github && (
                      <div
                        className="mt-6 pt-4 border-t flex items-center justify-between text-xs font-semibold"
                        style={{ borderColor: "var(--border)" }}
                      >
                        <span
                          className="flex items-center gap-1.5 hover:underline"
                          style={{ color: "var(--text-heading)" }}
                        >
                          <i className="fab fa-github"></i>
                          <span>Lihat Source Code</span>
                        </span>
                        <i className="fas fa-arrow-up-right-from-square text-[10px] opacity-60"></i>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
              {certificates.map((cert, idx) => (
                <div
                  key={idx}
                  onClick={() => handleItemClick(cert)}
                  className="cert-card rounded-2xl p-6 sm:p-8 cursor-pointer flex flex-col justify-between group h-full"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center border flex-shrink-0"
                      style={{
                        backgroundColor: "var(--bg-section)",
                        borderColor: "var(--border)",
                        color: "var(--text-heading)",
                      }}
                    >
                      <i
                        className={`${cert.icon} text-lg group-hover:rotate-12 transition-transform duration-300`}
                      ></i>
                    </div>
                    <div>
                      <h3
                        className="font-bold text-base sm:text-lg text-heading tracking-tight"
                        style={{ color: "var(--text-heading)" }}
                      >
                        {cert.title}
                      </h3>
                      <p
                        className="text-xs sm:text-sm font-medium mt-1"
                        style={{ color: "var(--text-body)" }}
                      >
                        {cert.issuer}
                      </p>
                    </div>
                  </div>

                  <div
                    className="mt-8 pt-4 border-t flex items-center justify-between"
                    style={{ borderColor: "var(--border)" }}
                  >
                    <span
                      className="text-[11px] font-mono uppercase tracking-wider font-semibold"
                      style={{ color: "var(--text-muted)" }}
                    >
                      {cert.date}
                    </span>
                    <span
                      className="inline-flex items-center gap-1 text-xs font-semibold hover:underline"
                      style={{ color: "var(--text-heading)" }}
                    >
                      <span>Lihat Sertifikat</span>
                      <i className="fas fa-arrow-right text-[10px] group-hover:translate-x-1 transition-transform"></i>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
