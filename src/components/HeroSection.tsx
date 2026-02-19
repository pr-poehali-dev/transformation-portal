import Icon from "@/components/ui/icon";
import { useState, useEffect } from "react";

const getTimeLeft = () => {
  const target = new Date("2026-02-23T10:00:00+03:00").getTime();
  const now = Date.now();
  const diff = Math.max(0, target - now);
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
};

const HeroSection = () => {
  const [time, setTime] = useState(getTimeLeft);

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const units = [
    { value: time.days, label: "дней" },
    { value: time.hours, label: "часов" },
    { value: time.minutes, label: "минут" },
    { value: time.seconds, label: "секунд" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-portal-crimson">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(https://cdn.poehali.dev/projects/45c1848a-0e1e-4acb-a382-5b495e6b78f2/files/ef9b352a-9442-4904-83e4-6a421f916a1f.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-portal-crimson/80 via-portal-crimson/60 to-portal-crimson" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="animate-fade-up mb-6">
          <span className="inline-block text-portal-gold font-body text-sm tracking-[0.3em] uppercase mb-4">
            Трансформационный практикум
          </span>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-portal-cream leading-[1.05] mb-2">
            ПОРТАЛ
          </h1>
        </div>

        <h2 className="animate-fade-up-delay-1 font-heading text-2xl md:text-4xl text-portal-cream/95 leading-tight mb-6 italic">
          Перестаньте жить ниже своего реального масштаба
        </h2>

        <p className="animate-fade-up-delay-2 font-body text-base md:text-lg text-portal-cream/80 max-w-2xl mx-auto mb-4 font-light leading-relaxed">
          Практикум для экспертов и людей в точке перехода, которые чувствуют:
          старая версия себя больше не работает.
        </p>

        <p className="animate-fade-up-delay-2 font-body text-base md:text-lg text-portal-cream/80 max-w-2xl mx-auto mb-8 font-light leading-relaxed">
          За 21 день вы пересоберёте внутреннюю архитектуру личности и стабилизируете
          новый уровень — в деньгах, проявлении и отношениях.
        </p>

        <div className="animate-fade-up-delay-3 flex flex-col items-center gap-5">
          <div className="inline-flex items-center gap-2 text-portal-gold font-body text-sm tracking-wider">
            <Icon name="Calendar" size={16} />
            <span>Старт: 23 февраля</span>
          </div>

          <div className="flex items-center gap-3 md:gap-5">
            {units.map((u, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white/10 backdrop-blur-sm border border-portal-cream/15 flex items-center justify-center">
                  <span className="font-heading text-3xl md:text-4xl font-bold text-portal-cream">
                    {String(u.value).padStart(2, "0")}
                  </span>
                </div>
                <span className="font-body text-portal-cream/50 text-[11px] md:text-xs mt-1.5">
                  {u.label}
                </span>
              </div>
            ))}
          </div>

          <button
            onClick={() => scrollToSection("for-whom")}
            className="btn-glow inline-flex items-center gap-2 bg-portal-gold text-portal-dark font-body font-semibold text-base px-10 py-4 rounded-full hover:brightness-110 transition-all duration-300 hover:scale-105 mt-2"
          >
            Узнать подробнее
            <Icon name="ArrowDown" size={18} />
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <Icon name="ChevronDown" size={24} className="text-portal-cream/40" />
      </div>
    </section>
  );
};

export default HeroSection;
