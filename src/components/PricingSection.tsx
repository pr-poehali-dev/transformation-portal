import Icon from "@/components/ui/icon";
import useScrollReveal from "@/hooks/useScrollReveal";

const standardItems = [
  "30 дней трансформации",
  "Групповой формат",
  "Практики и медитации",
  "Энерговибрационные сеансы",
  "2 индивидуальных сеанса",
  "Сопровождение в чате",
];

const vipItems = [
  "30 дней трансформации",
  "Групповой формат",
  "Практики и медитации",
  "Энерговибрационные сеансы",
  "Сопровождение в чате",
  "Индивидуальное сопровождение каждого наставника",
];

const PricingSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="pricing" className="py-12 md:py-16" style={{ backgroundColor: "#94c1c0" }}>
      <div
        ref={ref}
        className={`max-w-4xl mx-auto px-6 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <span className="inline-block text-portal-dark/60 font-body text-sm tracking-[0.2em] uppercase mb-4">
          Участие
        </span>
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-portal-dark mb-8 leading-tight">
          Форматы и цены
        </h2>

        <div className="inline-flex items-center gap-2 bg-white/70 text-portal-dark font-body text-sm px-5 py-2.5 rounded-full mb-10 border border-portal-dark/10">
          <Icon name="CreditCard" size={16} className="text-portal-crimson flex-shrink-0" />
          <span>Доступна рассрочка от банка — без переплат</span>
        </div>

        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          <div className="bg-white rounded-3xl p-8 md:p-10 border border-portal-dark/5 shadow-xl text-center flex flex-col">
            <div className="inline-block bg-portal-gold/20 text-portal-dark font-body text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              Рекомендуемый
            </div>

            <h3 className="font-heading text-3xl md:text-4xl font-bold text-portal-dark mb-4">
              Стандарт
            </h3>

            <ul className="space-y-3 text-left max-w-md mx-auto mb-8 flex-1">
              {standardItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Icon name="Check" size={18} className="text-portal-crimson flex-shrink-0 mt-0.5" />
                  <span className="font-body text-portal-dark/80 text-base leading-snug">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mb-2">
              <span className="font-heading text-5xl md:text-6xl font-bold text-portal-dark">
                50 000
              </span>
              <span className="font-body text-portal-dark/60 text-lg ml-1">₽</span>
            </div>

            <div className="flex items-center justify-center gap-2 text-portal-dark/60 font-body text-sm mb-8">
              <Icon name="Calendar" size={16} />
              <span>Старт: 6 апреля</span>
            </div>

            <a
              href="https://t.me/m/oer-H33GZGNi"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow inline-flex items-center justify-center gap-2 bg-portal-crimson text-portal-cream font-body font-semibold text-base px-8 py-4 rounded-full hover:brightness-110 transition-all duration-300 hover:scale-105 w-full"
            >
              Хочу участвовать
              <Icon name="ArrowRight" size={18} />
            </a>
          </div>

          <div className="bg-portal-dark rounded-3xl p-8 md:p-10 border border-portal-gold/30 shadow-xl text-center flex flex-col">
            <div className="inline-block bg-portal-gold/30 text-portal-gold font-body text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              Максимум
            </div>

            <h3 className="font-heading text-3xl md:text-4xl font-bold text-portal-cream mb-4">
              ВИП
            </h3>

            <ul className="space-y-3 text-left max-w-md mx-auto mb-8 flex-1">
              {vipItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Icon
                    name="Check"
                    size={18}
                    className={`flex-shrink-0 mt-0.5 ${i >= vipItems.length - 1 ? "text-portal-gold" : "text-portal-cream/60"}`}
                  />
                  <span className={`font-body text-base leading-snug ${i >= vipItems.length - 1 ? "text-portal-gold font-semibold" : "text-portal-cream/80"}`}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mb-2">
              <span className="font-heading text-5xl md:text-6xl font-bold text-portal-cream">
                100 000
              </span>
              <span className="font-body text-portal-cream/60 text-lg ml-1">₽</span>
            </div>

            <div className="flex items-center justify-center gap-2 text-portal-cream/60 font-body text-sm mb-8">
              <Icon name="Calendar" size={16} />
              <span>Старт: 6 апреля</span>
            </div>

            <a
              href="https://t.me/m/oer-H33GZGNi"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glow inline-flex items-center justify-center gap-2 bg-portal-gold text-portal-dark font-body font-semibold text-base px-8 py-4 rounded-full hover:brightness-110 transition-all duration-300 hover:scale-105 w-full"
            >
              Хочу в ВИП
              <Icon name="ArrowRight" size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;