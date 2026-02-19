import useScrollReveal from "@/hooks/useScrollReveal";

const reviewScreenshots = [
  "https://cdn.poehali.dev/projects/45c1848a-0e1e-4acb-a382-5b495e6b78f2/bucket/b4cdd843-2f08-432b-b93a-478833c25807.png",
  "https://cdn.poehali.dev/projects/45c1848a-0e1e-4acb-a382-5b495e6b78f2/bucket/20211074-bf18-48ac-8956-ab53f9ee7de4.png",
  "https://cdn.poehali.dev/projects/45c1848a-0e1e-4acb-a382-5b495e6b78f2/bucket/ac063273-a060-4924-8a9b-5668587092d7.png",
  "https://cdn.poehali.dev/projects/45c1848a-0e1e-4acb-a382-5b495e6b78f2/bucket/86676c2f-3c61-4933-a09b-b91d758d3eee.png",
  "https://cdn.poehali.dev/projects/45c1848a-0e1e-4acb-a382-5b495e6b78f2/bucket/f8e35029-bf0f-4e73-89da-e17586b968a7.png",
  "https://cdn.poehali.dev/projects/45c1848a-0e1e-4acb-a382-5b495e6b78f2/bucket/863f1e3f-4b8d-4567-817b-e2f4c529b3b1.png",
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

        <div className="columns-1 md:columns-2 lg:columns-3 gap-5 space-y-5">
          {reviewScreenshots.map((src, i) => (
            <div key={i} className="break-inside-avoid rounded-2xl overflow-hidden border border-portal-dark/5 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
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
