import { useInView } from "react-intersection-observer";
import picture from "../assets/images/fathir.jpeg";


const Profile = () => {

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="profile" className="py-20 px-6 section-secondary">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-heading section-title">
            About{" "}
            <span
              className="font-extrabold uppercase"
              style={{ color: "var(--accent)" }}
            >
              Me
            </span>
          </h2>
          <p className="mt-4 text-sm font-medium tracking-wide text-muted">
            Get to know me better
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div
            className={`flex-1 ${inView ? "reveal active" : "reveal"}`}
            ref={ref}
          >
            <h3
              className="text-xl sm:text-2xl font-bold"
              style={{ color: "var(--text-heading)" }}
            >
              Holaa, saya Muhamad Fathir Rahman
            </h3>
            <p
              className="mt-4 text-sm sm:text-base leading-relaxed"
              style={{ color: "var(--text-body)" }}
            >
              Saya seorang pengembang web antusias yang memiliki ketertarikan
              besar dalam dunia teknologi dan pemrograman. Saat ini saya sedang
              mendalami pengembangan aplikasi mobile dengan Flutter dan terus
              memperdalam rekayasa perangkat lunak web modern.
            </p>
            <p
              className="mt-4 text-sm sm:text-base leading-relaxed"
              style={{ color: "var(--text-body)" }}
            >
              Berkomitmen untuk terus belajar dan berkontribusi dalam proyek
              open-source, serta selalu mengikuti perkembangan arsitektur
              software dan best practices terbaru.
            </p>

            <div className="mt-8 flex gap-3">
              <a
                href="https://www.linkedin.com/in/enfateer1113/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl flex items-center justify-center social-icon"
                title="LinkedIn"
              >
                <i className="fab fa-linkedin-in text-lg"></i>
              </a>
              <a
                href="https://wa.me/6285771218921"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl flex items-center justify-center social-icon"
                title="WhatsApp"
              >
                <i className="fab fa-whatsapp text-lg"></i>
              </a>
              <a
                href="mailto:fathirnato08@gmail.com"
                className="w-10 h-10 rounded-xl flex items-center justify-center social-icon"
                title="Email"
              >
                <i className="far fa-envelope text-lg"></i>
              </a>
              <a
                href="https://github.com/enfateer"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl flex items-center justify-center social-icon"
                title="GitHub"
              >
                <i className="fab fa-github text-lg"></i>
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div
              className="profile-photo-wrapper"
            >
              <div
                className="w-64 h-64 sm:w-72 sm:h-72 rounded-2xl overflow-hidden shadow-xl border p-2 bg-neutral-900/10 dark:bg-white/5 transition-all duration-500 transform hover:rotate-0 rotate-2 hover:scale-[1.02]"
                style={{ borderColor: "var(--border)" }}
              >
                <img
                  src={picture}
                  alt="Fathir Portrait"
                  className="w-full h-full object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
