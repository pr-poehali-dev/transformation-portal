import Icon from "@/components/ui/icon";
import useScrollReveal from "@/hooks/useScrollReveal";

const categories = [
  {
    emoji: "💰",
    title: "В деньгах",
    items: [
      "Внутренняя разрешённость на больший доход",
      "Уверенность в своей цене",
      "Предсказуемость решений",
      "Спокойное повышение чека",
    ],
  },
  {
    emoji: "🌟",
    title: "В проявлении",
    items: [
      "Снижение страха публичности",
      "Устойчивое проявление",
      "Исчезновение синдрома самозванца",
      "Готовность к масштабным шагам",
    ],
  },
  {
    emoji: "❤️",
    title: "В отношениях",
    items: [
      "Чёткие границы",
      "Зрелая позиция",
      "Снижение эмоциональной зависимости",
      "Спокойствие вместо напряжения",
    ],
  },
];

const ResultsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="results" className="py-12 md:py-16 bg-portal-teal">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto px-6 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <span className="inline-block text-portal-dark/60 font-body text-sm tracking-[0.2em] uppercase mb-4">
          Результат
        </span>
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-portal-dark mb-14 leading-tight">
          После ПОРТАЛА:
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {categories.map((cat, i) => (
            <div
              key={i}
              className="bg-white/40 backdrop-blur-sm rounded-3xl p-7 border border-portal-dark/5 hover:bg-white/60 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="text-4xl mb-4">{cat.emoji}</div>
              <h3 className="font-heading text-2xl font-bold text-portal-dark mb-5">
                {cat.title}
              </h3>
              <ul className="space-y-3">
                {cat.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2.5">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-portal-crimson mt-1 flex-shrink-0"
                    />
                    <span className="font-body text-portal-dark/80 text-[15px] leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center bg-white/30 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-portal-dark/5">
          <p className="font-heading text-xl md:text-2xl text-portal-dark font-semibold mb-2">
            Главное изменение — вы перестаёте жить ниже своего уровня.
          </p>
          <p className="font-body text-portal-dark/70 text-base mb-8">
            Рост станет естественным следствием новой внутренней позиции.
          </p>
          <a
            href="https://t.me/m/oer-H33GZGNi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-portal-crimson text-portal-cream font-body font-medium text-base px-8 py-4 rounded-full hover:brightness-110 transition-all duration-300 hover:scale-105"
          >
            Хочу участвовать
            <Icon name="Sparkles" size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;