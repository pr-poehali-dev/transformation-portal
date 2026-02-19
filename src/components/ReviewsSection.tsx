import { useState } from "react";
import useScrollReveal from "@/hooks/useScrollReveal";
import Icon from "@/components/ui/icon";

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
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = () => setOpenIndex(null);
  const prev = () => setOpenIndex((i) => (i !== null ? (i - 1 + reviewScreenshots.length) % reviewScreenshots.length : null));
  const next = () => setOpenIndex((i) => (i !== null ? (i + 1) % reviewScreenshots.length : null));

  return (
    <>
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

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {reviewScreenshots.map((src, i) => (
              <div
                key={i}
                onClick={() => setOpenIndex(i)}
                className="rounded-2xl overflow-hidden border border-portal-dark/5 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1 aspect-[9/16] bg-portal-dark/5 cursor-pointer"
              >
                <img
                  src={src}
                  alt={`Отзыв участника ${i + 1}`}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {openIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={close}
        >
          <button
            onClick={(e) => { e.stopPropagation(); close(); }}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <Icon name="X" size={24} className="text-white" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-3 md:left-6 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <Icon name="ChevronLeft" size={24} className="text-white" />
          </button>

          <img
            src={reviewScreenshots[openIndex]}
            alt={`Отзыв участника ${openIndex + 1}`}
            className="max-h-[85vh] max-w-[90vw] md:max-w-[600px] rounded-2xl shadow-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-3 md:right-6 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
          >
            <Icon name="ChevronRight" size={24} className="text-white" />
          </button>

          <div className="absolute bottom-4 text-white/50 font-body text-sm">
            {openIndex + 1} / {reviewScreenshots.length}
          </div>
        </div>
      )}
    </>
  );
};

export default ReviewsSection;
