import Icon from "@/components/ui/icon";
import useScrollReveal from "@/hooks/useScrollReveal";

const PricingSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="pricing" className="py-24 md:py-32" style={{ backgroundColor: "#94c1c0" }}>
      <div
        ref={ref}
        className={`max-w-3xl mx-auto px-6 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <span className="inline-block text-portal-dark/60 font-body text-sm tracking-[0.2em] uppercase mb-4">
          Участие
        </span>
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-portal-dark mb-14 leading-tight">
          Форматы и цены
        </h2>

        <div className="bg-white rounded-3xl p-8 md:p-12 border border-portal-dark/5 shadow-xl text-center">
          <div className="inline-block bg-portal-gold/20 text-portal-dark font-body text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            Рекомендуемый
          </div>

          <h3 className="font-heading text-3xl md:text-4xl font-bold text-portal-dark mb-4">
            Стандарт
          </h3>

          <ul className="space-y-3 text-left max-w-md mx-auto mb-8">
            {[
              "21 день трансформации",
              "Групповой формат",
              "Практики и медитации",
              "Энерговибрационные сеансы",
              "2 индивидуальных сеанса",
              "Сопровождение в чате",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                <Icon name="Check" size={18} className="text-portal-crimson flex-shrink-0" />
                <span className="font-body text-portal-dark/80 text-base">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mb-2">
            <span className="font-heading text-5xl md:text-6xl font-bold text-portal-dark">
              45 000
            </span>
            <span className="font-body text-portal-dark/60 text-lg ml-1">₽</span>
          </div>

          <div className="flex items-center justify-center gap-2 text-portal-dark/60 font-body text-sm mb-8">
            <Icon name="Calendar" size={16} />
            <span>Старт: 23 февраля</span>
          </div>

          <a
            href="https://t.me/voroshilinaella"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow inline-flex items-center gap-2 bg-portal-crimson text-portal-cream font-body font-semibold text-lg px-12 py-5 rounded-full hover:brightness-110 transition-all duration-300 hover:scale-105"
          >
            Хочу участвовать
            <Icon name="ArrowRight" size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;