import Icon from "@/components/ui/icon";
import useScrollReveal from "@/hooks/useScrollReveal";

const FinalSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 md:py-32 relative overflow-hidden" style={{ backgroundColor: "#b12650" }}>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
      </div>

      <div
        ref={ref}
        className={`relative z-10 max-w-3xl mx-auto px-6 text-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8" style={{ color: "#f0ebe5" }}>
          ПОРТАЛ — для тех, кто понимает, что старый уровень завершён.
        </h2>

        <div className="space-y-4 mb-12">
          <p className="font-body text-lg md:text-xl leading-relaxed" style={{ color: "rgba(240, 235, 229, 0.85)" }}>
            Если вы готовы перестать повторять прежний сценарий
            <br className="hidden md:block" />
            {" "}и перейти к новой версии себя —
          </p>
          <p className="font-heading text-2xl md:text-3xl italic font-semibold" style={{ color: "#dfc88b" }}>
            сейчас подходящий момент.
          </p>
          <p className="font-body text-base" style={{ color: "rgba(240, 235, 229, 0.7)" }}>
            Решение всегда начинается с выбора.
          </p>
        </div>

        <a
          href="https://t.me/voroshilinaella"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-glow inline-flex items-center gap-2 bg-portal-gold text-portal-dark font-body font-semibold text-lg px-12 py-5 rounded-full hover:brightness-110 transition-all duration-300 hover:scale-105"
        >
          Записаться
          <Icon name="ArrowRight" size={20} />
        </a>
      </div>
    </section>
  );
};

export default FinalSection;