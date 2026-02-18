import Icon from "@/components/ui/icon";
import useScrollReveal from "@/hooks/useScrollReveal";

const points = [
  { icon: "User", text: "вы эксперт или специалист помогающей профессии" },
  { icon: "TrendingUp", text: "вы чувствуете внутренний потолок" },
  { icon: "DollarSign", text: "доход нестабилен, несмотря на опыт" },
  { icon: "ShieldAlert", text: "страшно поднимать чек или выходить в публичность" },
  { icon: "RefreshCcw", text: "вы устали от повторяющихся сценариев" },
  { icon: "Eye", text: "вы понимаете, что проблема не во внешних обстоятельствах" },
];

const ForWhomSection = () => {
  const { ref, isVisible } = useScrollReveal();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="for-whom" className="py-24 md:py-32 bg-portal-cream">
      <div
        ref={ref}
        className={`max-w-4xl mx-auto px-6 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <span className="inline-block text-portal-crimson font-body text-sm tracking-[0.2em] uppercase mb-4">
          Для кого
        </span>
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-portal-dark mb-12 leading-tight">
          Этот практикум для вас, если:
        </h2>

        <div className="grid md:grid-cols-2 gap-5 mb-12">
          {points.map((point, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-5 rounded-2xl bg-white/60 backdrop-blur-sm border border-portal-dark/5 transition-all duration-500 hover:bg-white hover:shadow-lg hover:-translate-y-1"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-portal-crimson/10 flex items-center justify-center">
                <Icon name={point.icon} size={20} className="text-portal-crimson" />
              </div>
              <p className="font-body text-portal-dark/85 text-base leading-relaxed pt-1.5">
                {point.text}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-portal-dark/5">
          <p className="font-body text-portal-dark/80 text-lg leading-relaxed mb-3">
            Вы много знаете и много пробовали, но внутренний уровень не совпадает
            с тем, куда вы хотите прийти.
          </p>
          <p className="font-heading text-xl md:text-2xl text-portal-crimson font-semibold italic">
            Старые подходы не работают, потому что они не меняют идентичность.
          </p>
        </div>

        <div className="mt-10 text-center">
          <button
            onClick={() => scrollToSection("results")}
            className="inline-flex items-center gap-2 bg-portal-crimson text-portal-cream font-body font-medium text-base px-8 py-4 rounded-full hover:brightness-110 transition-all duration-300 hover:scale-105"
          >
            Узнать подробнее
            <Icon name="ArrowRight" size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ForWhomSection;
