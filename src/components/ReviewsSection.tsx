import { useState, useEffect, useRef } from "react";
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
  const [animating, setAnimating] = useState(false);

  const open = (i: number) => {
    setOpenIndex(i);
    requestAnimationFrame(() => setAnimating(true));
  };

  const close = () => {
    setAnimating(false);
    setTimeout(() => setOpenIndex(null), 300);
  };

  const prev = () => setOpenIndex((i) => (i !== null ? (i - 1 + reviewScreenshots.length) % reviewScreenshots.length : null));
  const next = () => setOpenIndex((i) => (i !== null ? (i + 1) % reviewScreenshots.length : null));

  const touchStart = useRef<{ x: number; y: number } | null>(null);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart.current) return;
    const dx = e.changedTouches[0].clientX - touchStart.current.x;
    const dy = e.changedTouches[0].clientY - touchStart.current.y;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50) {
      if (dx < 0) next();
      else prev();
    }
    touchStart.current = null;
  };

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [openIndex]);

  return (
    <>
      <section id="reviews" className="py-12 md:py-16 bg-portal-cream">
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
                onClick={() => open(i)}
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
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
            animating ? "bg-black/80 backdrop-blur-sm" : "bg-black/0 backdrop-blur-0"
          }`}
          onClick={close}
        >
          <button
            onClick={(e) => { e.stopPropagation(); close(); }}
            className={`absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-300 ${
              animating ? "opacity-100 scale-100" : "opacity-0 scale-75"
            }`}
          >
            <Icon name="X" size={24} className="text-white" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className={`absolute left-3 md:left-6 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-300 ${
              animating ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
            }`}
          >
            <Icon name="ChevronLeft" size={24} className="text-white" />
          </button>

          <img
            src={reviewScreenshots[openIndex]}
            alt={`Отзыв участника ${openIndex + 1}`}
            className={`max-h-[85vh] max-w-[90vw] md:max-w-[600px] rounded-2xl shadow-2xl object-contain transition-all duration-300 ${
              animating ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
            onClick={(e) => e.stopPropagation()}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          />

          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className={`absolute right-3 md:right-6 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-all duration-300 ${
              animating ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
            }`}
          >
            <Icon name="ChevronRight" size={24} className="text-white" />
          </button>

          <div className={`absolute bottom-4 text-white/50 font-body text-sm transition-all duration-300 ${
            animating ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}>
            {openIndex + 1} / {reviewScreenshots.length}
          </div>
        </div>
      )}
    </>
  );
};

export default ReviewsSection;