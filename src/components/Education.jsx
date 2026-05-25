import { useInView } from "react-intersection-observer";

const Education = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const data = [
    {
      id: 1,
      title: "Sekolah Dasar Negeri Ciadeg 06",
      period: "2015 - 2021",
      icon: "fas fa-school",
      description:
        "Pendidikan tingkat dasar dasar dengan fokus pembangunan karakter diri.",
    },
    {
      id: 2,
      title: "Sekolah Menengah Pertama Islam Terpadu Alfatih",
      period: "2021 - 2024",
      icon: "fas fa-graduation-cap",
      description:
        "Menempuh pendidikan menengah pertama dengan pembekalan nilai-nilai islami dan akademik.",
    },
    {
      id: 3,
      title: "Sekolah Menengah Kejuruan Swasta Wikrama",
      period: "2024 - Now",
      icon: "fas fa-laptop-code",
      description:
        "Mengambil Program Keahlian Pengembangan Perangkat Lunak & Gim (PPLG / RPL). Mendalami industri rekayasa perangkat lunak.",
    },
  ];

  return (
    <section id="education" className="py-20 px-6 section-primary">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-heading section-title">
            Riwayat{" "}
            <span
              className="font-extrabold uppercase"
              style={{ color: "var(--accent)" }}
            >
              Pendidikan
            </span>
          </h2>
          <p className="mt-4 text-sm font-medium tracking-wide text-muted">
            Perjalanan akademik yang membentuk karakter dan karier saya
          </p>
        </div>

        <div
          className="relative border-l border-dashed ml-3 md:ml-6 space-y-10"
          style={{ borderColor: "var(--border)" }}
        >
          {data.map((edu) => {
            return (
              <div
                key={edu.id}
                className={`relative pl-8 sm:pl-10 ${inView ? "reveal active" : "reveal"}`}
                ref={ref}
              >
                <span
                  className="absolute -left-3.5 top-1.5 w-7 h-7 rounded-full flex items-center justify-center border text-xs bg-neutral-100 dark:bg-neutral-900 shadow-sm"
                  style={{
                    borderColor: "var(--border)",
                    color: "var(--text-heading)",
                  }}
                >
                  <i className={edu.icon}></i>
                </span>

                <div className="edu-card rounded-2xl p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                    <h3
                      className="font-bold text-lg text-heading tracking-tight"
                      style={{ color: "var(--text-heading)" }}
                    >
                      {edu.title}
                    </h3>
                    <span
                      className="text-xs font-mono font-semibold px-3 py-1 rounded-full uppercase tracking-wider bg-neutral-900 text-neutral-100 dark:bg-neutral-100 dark:text-neutral-900 border"
                      style={{ borderColor: "var(--border)" }}
                    >
                      {edu.period}
                    </span>
                  </div>
                  <p
                    className="text-sm leading-relaxed text-body"
                    style={{ color: "var(--text-body)" }}
                  >
                    {edu.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;
