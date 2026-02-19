import useScrollReveal from "@/hooks/useScrollReveal";
import Icon from "@/components/ui/icon";

const team = [
  {
    name: "Елена",
    telegram: "https://t.me/Elena_proresurs",
    photo: "https://cdn.poehali.dev/projects/45c1848a-0e1e-4acb-a382-5b495e6b78f2/bucket/eedb3df5-7e56-4812-bd10-9f7e98d04149.png",
    role: "Мастер Рей Ки До Сатори, целитель, регрессолог",
    description: "Помогает женщинам и мужчинам очистить свою энергосистему, повысить уровень жизненного ресурса при помощи медитативных практик и регресса.",
    details: "Работает с глубинным очищением, родовыми программами и состояниями кризиса. Проводит практики и медитации на восстановление ресурса.",
  },
  {
    name: "Элла",
    telegram: "https://t.me/voroshilinaella",
    photo: "https://cdn.poehali.dev/projects/45c1848a-0e1e-4acb-a382-5b495e6b78f2/bucket/508dccba-a3f5-45e5-b64f-fcea5b3ed80d.png",
    role: "Автор системы «Архитектор Судьбы», трансформационный практик, целитель, ченнеллер",
    description: "Помогает экспертам и людям в точке перехода выйти на новый уровень дохода, проявления и личной зрелости.",
    details: "Работает с кармическими узлами, деструктивными программами и выстраиванием целостности между Высшим Я, душой и телом.",
  },
  {
    name: "Максим",
    telegram: "https://t.me/Alladium",
    photo: "https://cdn.poehali.dev/projects/45c1848a-0e1e-4acb-a382-5b495e6b78f2/bucket/959e8051-ad99-4d21-a08c-ff59696361c7.png",
    role: "Финансовый стратег перехода",
    description: "Помогает экспертам и предпринимателям, которые выросли, но упёрлись в потолок дохода.",
    details: "Выявляет конфликт идентичности, помогает принять стратегически верные финансовые решения, пересобрать роль собственника под новый уровень и выстроить правила управления деньгами.",
  },
];

const TeamSection = () => {
  const { ref, isVisible } = useScrollReveal();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="team" className="py-24 md:py-32" style={{ backgroundColor: "#f0ebe5" }}>
      <div
        ref={ref}
        className={`max-w-5xl mx-auto px-6 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <span className="inline-block text-portal-crimson font-body text-sm tracking-[0.2em] uppercase mb-4">
          Наставники
        </span>
        <h2 className="font-heading text-3xl md:text-5xl font-bold text-portal-dark mb-14 leading-tight">
          Почему с нами
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {team.map((person, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl overflow-hidden border border-portal-dark/5 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={person.photo}
                  alt={person.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-2xl font-bold text-portal-dark mb-1">
                  {person.name}
                </h3>
                <p className="font-body text-portal-crimson text-sm font-medium mb-4 leading-snug">
                  {person.role}
                </p>
                <p className="font-body text-portal-dark/75 text-[14px] leading-relaxed mb-2">
                  {person.description}
                </p>
                <p className="font-body text-portal-dark/60 text-[13px] leading-relaxed mb-4">
                  {person.details}
                </p>
                <a
                  href={person.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-portal-crimson font-body text-sm font-medium hover:underline"
                >
                  <Icon name="Send" size={14} />
                  Написать в Telegram
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-portal-dark/5 text-center mb-10">
          <p className="font-body text-portal-dark/80 text-base md:text-lg leading-relaxed mb-4">
            Мы соединяем глубинную пересборку личности, энергетическую стабилизацию
            и стратегическое финансовое мышление.
          </p>
          <p className="font-heading text-xl md:text-2xl text-portal-crimson font-semibold italic">
            В результате вы больше не можете жить ниже своего уровня.
            <br />
            Рост становится естественным следствием новой внутренней архитектуры.
          </p>
        </div>

        <div className="text-center">
          <a
            href="https://t.me/voroshilinaella"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow inline-flex items-center gap-2 bg-portal-gold text-portal-dark font-body font-semibold text-base px-10 py-4 rounded-full hover:brightness-110 transition-all duration-300 hover:scale-105"
          >
            Записаться
            <Icon name="ArrowRight" size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;