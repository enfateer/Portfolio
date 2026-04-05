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
      badgeColor: "indigo",
      icon: "fas fa-school",
      description: "Student",
    },
    {
      id: 2,
      title: "Sekolah Menengah Pertama Islam Terpadu Alfatih ",
      period: "2021 - 2024",
      badgeColor: "emerald",
      icon: "fas fa-chalkboard-user",
      description: "Student",
    },
    {
      id: 3,
      title: "Sekolah Menengah Kejuruan Swasta Wikrama",
      period: "2024 - Now",
      badgeColor: "sky",
      icon: "fas fa-laptop-code",
      description: "PPLG | RPL",
    },
  ];

  const colorClasses = {
    indigo: {
      bg: "bg-indigo-100",
      text: "text-indigo-700",
      badgeBg: "bg-indigo-50",
      badgeText: "text-indigo-600",
      iconColor: "text-indigo-400",
    },
    emerald: {
      bg: "bg-emerald-100",
      text: "text-emerald-700",
      badgeBg: "bg-emerald-50",
      badgeText: "text-emerald-600",
      iconColor: "text-emerald-400",
    },
    sky: {
      bg: "bg-sky-100",
      text: "text-sky-700",
      badgeBg: "bg-sky-50",
      badgeText: "text-sky-600",
      iconColor: "text-sky-400",
    },
  };

  return (
    <section
      id="education"
      className="py-16 px-5 bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 section-title">
            Riwayat <span className="text-[#2c3e66]">Pendidikan</span>
          </h2>
          <p className="mt-4 text-gray-500 text-sm">
            Perjalanan akademik yang membentuk karier saya
          </p>
        </div>

        <div className="space-y-4">
          {data.map((edu) => {
            const colors = colorClasses[edu.badgeColor];
            return (
              <div
                key={edu.id}
                className={`bg-white rounded-xl p-4 transition-all hover:bg-gray-50/80 ${inView ? "reveal active" : "reveal"}`}
                ref={ref}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl ${colors.bg} flex items-center justify-center ${colors.text} flex-shrink-0`}
                  >
                    <i className={`${edu.icon} text-xl`}></i>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h3 className="font-bold text-gray-800 text-lg">
                        {edu.title}
                      </h3>
                      <span
                        className={`text-xs ${colors.badgeText} ${colors.badgeBg} px-2 py-0.5 rounded-full`}
                      >
                        {edu.period}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
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
