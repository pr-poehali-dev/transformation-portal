import Icon from "@/components/ui/icon";
import useScrollReveal from "@/hooks/useScrollReveal";

const features = [
  { icon: "Calendar", text: "21 день глубокой трансформации" },
  { icon: "Globe", text: "Онлайн" },
  { icon: "Users", text: "Групповой формат + индивидуальные сессии" },
  { icon: "Headphones", text: "Практики-медитации для запуска энергосистемы и восстановления ресурса" },
  { icon: "Heart", text: "Энерговибрационные сеансы для целостности через соединение тела, души и духа" },
  { icon: "Shield", text: "Сопровождение до результата" },
];

const HowItWorksSection = () => {
  const { ref, isVisible } = useScrollReveal();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-portal-cream">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto px-6 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <span className="inline-block text-portal-crimson font-body text-sm tracking-[0.2em] uppercase mb-4">
          Формат
        </span>
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-portal-dark mb-14 leading-tight">
          Что это за продукт и как он работает
        </h2>

        <div className="space-y-4 mb-12">
          {features.map((feature, i) => (
            <div
              key={i}
              className="flex items-start gap-5 p-5 rounded-2xl bg-white/70 backdrop-blur-sm border border-portal-dark/5 hover:bg-white hover:shadow-md transition-all duration-400"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-portal-teal/30 flex items-center justify-center">
                <Icon name={feature.icon} size={22} className="text-portal-dark/70" />
              </div>
              <p className="font-body text-portal-dark/85 text-base md:text-lg leading-relaxed pt-2.5">
                {feature.text}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-portal-crimson rounded-3xl p-8 md:p-12 text-center">
          <p className="font-heading text-xl md:text-2xl text-portal-cream font-semibold mb-2 italic">
            Это не обучение и не курс теории.
          </p>
          <p className="font-body text-portal-cream/80 text-base mb-2">
            Это процесс под руководством опытных наставников.
          </p>
          <p className="font-body text-portal-cream/70 text-base mb-8">
            Мы не даём теорию, а работаем с внутренней архитектурой личности.
          </p>
          <button
            onClick={scrollToTop}
            className="btn-glow inline-flex items-center gap-2 bg-portal-gold text-portal-dark font-body font-semibold text-base px-10 py-4 rounded-full hover:brightness-110 transition-all duration-300 hover:scale-105"
          >
            Записаться
            <Icon name="ArrowRight" size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
