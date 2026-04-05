import { useInView } from "react-intersection-observer";
import picture from "../assets/images/fathir.jpeg";

const Profile = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="profile" className="py-20 px-5 bg-white/80 backdrop-blur-sm">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 section-title">
            About <span className="text-[#2c3e66]">Me</span>
          </h2>
          <p className="mt-4 text-gray-500 text-sm">Get to know me better</p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          <div
            className={`flex-1 ${inView ? "reveal active" : "reveal"}`}
            ref={ref}
          >
            <h3 className="text-2xl font-semibold text-gray-700">
              ✨ Halo, saya Muhamad Fathir Rahman
            </h3>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Saya seorang pengembang web antusias yang memiliki ketertarikan
              besar dalam dunia teknologi dan pemrograman. Saat ini saya sedang
              mendalami pengembangan Flutter.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Berkomitmen untuk terus belajar dan berkontribusi dalam proyek
              open-source, serta selalu mengikuti perkembangan teknologi
              terbaru.
            </p>
            <div className="mt-6 flex gap-3 text-[#2c3e66]">
              <a
                href="https://www.linkedin.com/in/enfateer1113/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin text-2xl hover:scale-110 transition cursor-pointer"></i>
              </a>
              <a
                href="https://wa.me/6285771218921"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-whatsapp text-2xl hover:scale-110 transition cursor-pointer"></i>
              </a>
              <a href="mailto:fathirnato08@gmail.com">
                <i className="fas fa-envelope text-2xl hover:scale-110 transition cursor-pointer"></i>
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="w-72 h-72 rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-3 hover:rotate-0 transition-all duration-500">
              <img src={picture} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
