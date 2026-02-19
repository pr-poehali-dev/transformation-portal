import Icon from "@/components/ui/icon";
import useScrollReveal from "@/hooks/useScrollReveal";

const blocks = [
  {
    symbol: "🜂",
    title: "Блок 1. Разоблачение старой линии",
    subtitle: "Диагностика сценария, точки потолка, страха роста.",
    results: [
      "вы точно понимаете, какой сценарий повторяете в деньгах, отношениях и реализации",
      "становится очевидно, где вы сами себя ограничиваете",
      "исчезает иллюзия «со мной что-то не так»",
      "появляется ясность, в чём ваш настоящий внутренний потолок",
      "вы перестаёте оправдывать застревание обстоятельствами",
      "формируется трезвый взгляд на свою текущую идентичность",
    ],
    closing: "Это точка, где включается осознанность вместо хаоса.",
  },
  {
    symbol: "🜁",
    title: "Блок 2. Разрушение внутренней конструкции",
    subtitle: "Работа с бессознательными блоками, страхом денег и известности.",
    results: [
      "снижается внутреннее сжатие перед ростом",
      "страх больших денег и ответственности теряет силу",
      "уходит зависимость от чужого одобрения",
      "появляется ощущение внутренней силы и опоры",
      "решения начинают приниматься быстрее",
      "старые эмоциональные реакции больше не управляют вами",
    ],
    closing: "Это момент внутреннего перелома.",
  },
  {
    symbol: "🜃",
    title: "Блок 3. Пересборка и стабилизация",
    subtitle: "Формирование нового внутреннего статуса и фиксация решений.",
    results: [
      "появляется устойчивое ощущение «я соответствую своему уровню»",
      "масштаб перестаёт пугать",
      "вы начинаете действовать из спокойствия, а не из напряжения",
      "доход и проявление становятся следствием новой позиции",
      "снижается страх отката",
      "формируется новая траектория решений",
    ],
    closing: "Это уже не всплеск мотивации.\nЭто закреплённая новая идентичность.",
  },
];

const outcomes = [
  "уйдет напряжение",
  "сформируется внутренняя опора",
  "появится ясность в действиях",
  "уйдет синдром самозванца",
  "начнёте быстро принимать решения",
  "уверенно поднимать свой чек",
  "перестанете откладывать запуск проекта",
  "начнёте проявляться без зажимов и блоков",
];

const externalChanges = [
  {
    emoji: "💰",
    title: "В деньгах",
    text: "доход станет более предсказуемым, появится разрешённость на больший масштаб.",
  },
  {
    emoji: "🌟",
    title: "В проявлении",
    text: "уйдет страх публичности, появится устойчивое проявление.",
  },
  {
    emoji: "❤️",
    title: "В отношениях",
    text: "появятся границы, снизится зависимость, появится зрелая позиция.",
  },
];

const ProgramSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const { ref: ref2, isVisible: isVisible2 } = useScrollReveal();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="program" className="py-24 md:py-32" style={{ backgroundColor: "#dfc88b" }}>
      <div
        ref={ref}
        className={`max-w-5xl mx-auto px-6 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <span className="inline-block text-portal-dark/60 font-body text-sm tracking-[0.2em] uppercase mb-4">
          Программа
        </span>
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-portal-dark mb-14 leading-tight">
          Путь трансформации
        </h2>

        <div className="space-y-8 mb-16">
          {blocks.map((block, i) => (
            <div
              key={i}
              className="bg-white/50 backdrop-blur-sm rounded-3xl p-7 md:p-10 border border-portal-dark/5 hover:bg-white/70 transition-all duration-500"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{block.symbol}</span>
                <h3 className="font-heading text-xl md:text-2xl font-bold text-portal-dark">
                  {block.title}
                </h3>
              </div>
              <p className="font-body text-portal-dark/70 text-base mb-6 italic">
                {block.subtitle}
              </p>

              <p className="font-body text-portal-dark/60 text-sm uppercase tracking-wider mb-3">
                Результат блока:
              </p>
              <ul className="space-y-2.5 mb-6">
                {block.results.map((result, j) => (
                  <li key={j} className="flex items-start gap-2.5">
                    <span className="text-portal-crimson mt-0.5 flex-shrink-0">—</span>
                    <span className="font-body text-portal-dark/80 text-[15px] leading-relaxed">
                      {result}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="font-heading text-lg text-portal-crimson font-semibold italic whitespace-pre-line">
                {block.closing}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mb-10">
          <button
            onClick={() => scrollToSection("pricing")}
            className="inline-flex items-center gap-2 bg-portal-dark text-portal-cream font-body font-semibold text-base px-10 py-4 rounded-full hover:bg-portal-dark/90 transition-all duration-300 hover:scale-105"
          >
            Узнать подробнее
            <Icon name="ArrowRight" size={18} />
          </button>
        </div>
      </div>

      <div
        ref={ref2}
        className={`max-w-5xl mx-auto px-6 mt-8 transition-all duration-1000 ${
          isVisible2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-portal-dark/5">
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-portal-dark mb-8 text-center">
            Всего через 21 день у вас
          </h3>

          <div className="grid md:grid-cols-2 gap-3 mb-10">
            {outcomes.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <Icon name="Check" size={18} className="text-portal-crimson mt-0.5 flex-shrink-0" />
                <span className="font-body text-portal-dark/80 text-base leading-relaxed">{item}</span>
              </div>
            ))}
          </div>

          <p className="font-heading text-xl text-portal-dark/60 italic text-center mb-8">
            И как следствие — внешние изменения
          </p>

          <div className="grid md:grid-cols-3 gap-5 mb-10">
            {externalChanges.map((change, i) => (
              <div key={i} className="text-center p-5 rounded-2xl bg-portal-gold/20">
                <span className="text-3xl block mb-3">{change.emoji}</span>
                <h4 className="font-heading text-lg font-bold text-portal-dark mb-2">{change.title}</h4>
                <p className="font-body text-portal-dark/70 text-sm leading-relaxed">{change.text}</p>
              </div>
            ))}
          </div>

          <div className="bg-portal-crimson rounded-2xl p-6 md:p-8 text-center">
            <p className="font-heading text-xl md:text-2xl text-portal-cream font-bold mb-2">
              Главное
            </p>
            <p className="font-body text-portal-cream/85 text-base leading-relaxed">
              После пересборки личности вы больше не сможете жить ниже своего уровня.
              <br />
              Рост становится естественным следствием новой внутренней архитектуры.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
