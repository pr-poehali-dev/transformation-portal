import useScrollReveal from "@/hooks/useScrollReveal";

const reviewScreenshots = [
  "https://cdn.poehali.dev/projects/45c1848a-0e1e-4acb-a382-5b495e6b78f2/files/review1.jpg",
  "https://cdn.poehali.dev/projects/45c1848a-0e1e-4acb-a382-5b495e6b78f2/files/review2.jpg",
  "https://cdn.poehali.dev/projects/45c1848a-0e1e-4acb-a382-5b495e6b78f2/files/review3.jpg",
];

const reviews = [
  {
    name: "Елена К.",
    role: "Психолог",
    text: "После ПОРТАЛА я впервые подняла чек без внутреннего сопротивления. Клиенты стали приходить другого уровня — и это не магия, а реальная работа с идентичностью.",
  },
  {
    name: "Ирина М.",
    role: "Коуч",
    text: "Синдром самозванца преследовал меня 3 года. За 21 день он растворился. Я начала проводить эфиры, писать посты — и это стало естественным.",
  },
  {
    name: "Наталья С.",
    role: "Нутрициолог",
    text: "Я прошла десятки обучений, но именно ПОРТАЛ дал то, чего не хватало — внутреннюю устойчивость и разрешение на рост. Доход вырос в 2 раза за месяц после практикума.",
  },
];

const ReviewsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="reviews" className="py-24 md:py-32 bg-portal-cream">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto px-6 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <span className="inline-block text-portal-crimson font-body text-sm tracking-[0.2em] uppercase mb-4">
          Отзывы
        </span>
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-portal-dark mb-14 leading-tight">
          Что говорят участницы
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-7 border border-portal-dark/5 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 flex flex-col"
            >
              <p className="font-body text-portal-dark/75 text-[15px] leading-relaxed mb-6 flex-1">
                «{review.text}»
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-portal-dark/5">
                <div className="w-10 h-10 rounded-full bg-portal-crimson/10 flex items-center justify-center">
                  <span className="font-heading text-portal-crimson font-bold text-lg">
                    {review.name[0]}
                  </span>
                </div>
                <div>
                  <p className="font-body font-medium text-portal-dark text-sm">
                    {review.name}
                  </p>
                  <p className="font-body text-portal-dark/50 text-xs">
                    {review.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          {reviewScreenshots.map((src, i) => (
            <div key={i} className="rounded-2xl overflow-hidden border border-portal-dark/5 shadow-md hover:shadow-xl transition-shadow duration-500">
              <img
                src={src}
                alt={`Отзыв участника ${i + 1}`}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
