import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';
import { LOGO_URL, HERO_IMG, BARBER_IMG, NAV_LINKS } from './constants';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-[#0D0D0D]/95 backdrop-blur-md border-b border-[#242424]' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <img src={LOGO_URL} alt="СТАТУСЪ" className="h-16 w-auto" />
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(link => (
            <a key={link.href} href={link.href} className="nav-link text-sm text-[#EDE8DC]/70 uppercase tracking-widest">
              {link.label}
            </a>
          ))}
        </nav>
        <a href="#booking" className="hidden md:flex items-center gap-2 bg-[#C9A84C] text-[#0D0D0D] px-5 py-2 font-display text-sm tracking-widest uppercase hover:bg-[#E8C96A] transition-colors">
          Записаться
        </a>
        <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
          <Icon name={menuOpen ? "X" : "Menu"} size={24} />
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-[#0D0D0D] border-t border-[#242424] px-6 py-6 flex flex-col gap-5">
          {NAV_LINKS.map(link => (
            <a key={link.href} href={link.href} className="text-[#EDE8DC]/70 font-display tracking-widest uppercase text-sm" onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#booking" className="bg-[#C9A84C] text-[#0D0D0D] px-5 py-2 font-display text-sm tracking-widest uppercase text-center mt-2" onClick={() => setMenuOpen(false)}>
            Записаться
          </a>
        </div>
      )}
    </header>
  );
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={HERO_IMG} alt="Барбершоп" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D] via-[#0D0D0D]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent" />
      </div>
      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-16">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-6 opacity-0 animate-fade-in-up delay-100">
            <div className="w-8 h-[1px] bg-[#C9A84C]" />
            <span className="font-body text-[#C9A84C] text-xs tracking-[0.3em] uppercase">Премиум барбершоп · Москва</span>
          </div>
          <div className="mb-6 opacity-0 animate-fade-in-up delay-200">
            <img src={LOGO_URL} alt="СТАТУСЪ" className="h-24 md:h-36 w-auto" />
          </div>
          <p className="font-serif-it text-2xl md:text-3xl text-[#C9A84C]/80 italic mb-6 opacity-0 animate-fade-in-up delay-300">
            Стиль, который говорит за тебя
          </p>
          <p className="font-body text-[#EDE8DC]/60 text-base leading-relaxed max-w-md mb-10 opacity-0 animate-fade-in-up delay-400">
            Мужская стрижка — это не просто услуга. Это ритуал. Мы работаем с каждым клиентом индивидуально, создавая образ, который подчёркивает характер.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in-up delay-500">
            <a href="#booking" className="group inline-flex items-center gap-3 bg-[#C9A84C] text-[#0D0D0D] px-8 py-4 font-display tracking-widest uppercase hover:bg-[#E8C96A] transition-all duration-300">
              <span>Записаться</span>
              <Icon name="ArrowRight" size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#services" className="inline-flex items-center gap-3 border border-[#242424] text-[#EDE8DC]/70 px-8 py-4 font-display tracking-widest uppercase hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all duration-300">
              Услуги и цены
            </a>
          </div>
          <div className="flex gap-8 mt-14 pt-8 border-t border-[#242424] opacity-0 animate-fade-in-up" style={{animationDelay:'0.6s', animationFillMode:'forwards'}}>
            {[["500+","Клиентов"],["8","Лет работы"],["3","Мастера"]].map(([num, label]) => (
              <div key={label}>
                <div className="font-display text-3xl text-[#C9A84C]">{num}</div>
                <div className="font-body text-[#EDE8DC]/40 text-xs uppercase tracking-widest">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="py-24 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-32 h-32 border border-[#C9A84C]/20 pointer-events-none" />
            <img src={BARBER_IMG} alt="О нас" className="w-full aspect-[4/5] object-cover" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-[#C9A84C]/20 pointer-events-none" />
            <div className="absolute bottom-8 left-0 translate-x-6 bg-[#0D0D0D] border border-[#242424] px-6 py-4">
              <div className="font-display text-[#C9A84C] text-4xl">2016</div>
              <div className="font-body text-[#EDE8DC]/50 text-xs tracking-widest uppercase">Год основания</div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-[#C9A84C]" />
              <span className="font-body text-[#C9A84C] text-xs tracking-[0.3em] uppercase">О нас</span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl text-white uppercase leading-tight mb-6">
              Традиции<br /><span className="text-[#C9A84C]">встречают</span><br />стиль
            </h2>
            <p className="font-body text-[#EDE8DC]/60 leading-relaxed mb-6">
              СТАТУСЪ — это место, где классические техники барберинга сочетаются с современным видением мужского стиля. Каждый мастер проходит многолетнюю подготовку и регулярное обучение.
            </p>
            <p className="font-body text-[#EDE8DC]/60 leading-relaxed mb-10">
              Мы не просто стрижём — мы создаём образ, который отражает вашу личность. Используем только профессиональные инструменты и премиальную косметику.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: "Award", text: "Сертифицированные мастера" },
                { icon: "Clock", text: "Работаем без выходных" },
                { icon: "Shield", text: "Стерильные инструменты" },
                { icon: "Heart", text: "Индивидуальный подход" },
              ].map(item => (
                <div key={item.text} className="flex items-center gap-3">
                  <div className="w-8 h-8 border border-[#C9A84C]/30 flex items-center justify-center flex-shrink-0">
                    <Icon name={item.icon} size={14} className="text-[#C9A84C]" />
                  </div>
                  <span className="font-body text-[#EDE8DC]/70 text-sm">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}