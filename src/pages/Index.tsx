import { useState, useEffect } from 'react';
import Icon from '@/components/ui/icon';

type LucideIconName = string;

const HERO_IMG = "https://cdn.poehali.dev/projects/c387cc5d-f908-4659-8e46-f1976b7da6bc/files/4de48cf8-f499-4b24-96d8-a717269e9b98.jpg";
const BARBER_IMG = "https://cdn.poehali.dev/projects/c387cc5d-f908-4659-8e46-f1976b7da6bc/files/e64047c1-d05f-4fbe-83eb-576da10773bc.jpg";
const PORTFOLIO_IMG = "https://cdn.poehali.dev/projects/c387cc5d-f908-4659-8e46-f1976b7da6bc/files/2223aab9-00b5-4778-a3b4-8286ca72b790.jpg";

const MASTERS = [
  { id: 1, name: "Артём Волков", role: "Старший мастер", exp: "8 лет опыта", img: BARBER_IMG },
  { id: 2, name: "Даниил Крот", role: "Барбер", exp: "5 лет опыта", img: BARBER_IMG },
  { id: 3, name: "Максим Лебедь", role: "Стилист", exp: "6 лет опыта", img: BARBER_IMG },
];

const SERVICES = [
  { icon: "Scissors", name: "Классическая стрижка", price: "от 900 ₽", time: "45 мин" },
  { icon: "Zap", name: "Фейд / Скинфейд", price: "от 1200 ₽", time: "60 мин" },
  { icon: "Star", name: "Стрижка + борода", price: "от 1600 ₽", time: "90 мин" },
  { icon: "Droplets", name: "Уход за бородой", price: "от 700 ₽", time: "30 мин" },
  { icon: "Crown", name: "Королевское бритьё", price: "от 1100 ₽", time: "45 мин" },
  { icon: "Sparkles", name: "Камуфляж седины", price: "от 1500 ₽", time: "60 мин" },
];

const PORTFOLIO_ITEMS = [
  { label: "Фейд с текстурой", tag: "Стрижка" },
  { label: "Классика", tag: "Борода" },
  { label: "Скинфейд", tag: "Стрижка" },
  { label: "Укладка", tag: "Стайлинг" },
  { label: "Камуфляж", tag: "Окрашивание" },
  { label: "Помпадур", tag: "Стрижка" },
];

const TIMES = ["10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00"];

const NAV_LINKS = [
  { href: "#about", label: "О нас" },
  { href: "#services", label: "Услуги" },
  { href: "#portfolio", label: "Портфолио" },
  { href: "#masters", label: "Мастера" },
  { href: "#contacts", label: "Контакты" },
];

function Navbar() {
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
          <img src="https://cdn.poehali.dev/projects/c387cc5d-f908-4659-8e46-f1976b7da6bc/bucket/c583d16f-63fd-40ce-94bf-b49bfd894bbc.PNG" alt="СТАТУСЪ" className="h-10 w-auto" />
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

function Hero() {
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
            <img src="https://cdn.poehali.dev/projects/c387cc5d-f908-4659-8e46-f1976b7da6bc/bucket/c583d16f-63fd-40ce-94bf-b49bfd894bbc.PNG" alt="СТАТУСЪ" className="h-24 md:h-36 w-auto" />
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

function About() {
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
              BLADE — это место, где классические техники барберинга сочетаются с современным видением мужского стиля. Каждый мастер проходит многолетнюю подготовку и регулярное обучение.
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
                    <Icon name={item.icon as LucideIconName} size={14} className="text-[#C9A84C]" />
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

function Services() {
  return (
    <section id="services" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-[#C9A84C]" />
            <span className="font-body text-[#C9A84C] text-xs tracking-[0.3em] uppercase">Прайс-лист</span>
            <div className="w-8 h-[1px] bg-[#C9A84C]" />
          </div>
          <h2 className="font-display text-5xl md:text-6xl text-white uppercase">Услуги</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#242424]">
          {SERVICES.map((s, i) => (
            <div key={i} className="bg-[#0A0A0A] p-8 group hover:bg-[#141414] transition-all duration-300 cursor-pointer">
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 border border-[#242424] group-hover:border-[#C9A84C] flex items-center justify-center transition-colors">
                  <Icon name={s.icon as LucideIconName} size={18} className="text-[#C9A84C]" />
                </div>
                <span className="font-body text-[#EDE8DC]/30 text-xs">{s.time}</span>
              </div>
              <h3 className="font-display text-xl text-white uppercase tracking-wide mb-2 group-hover:text-[#C9A84C] transition-colors">{s.name}</h3>
              <div className="w-8 h-[1px] bg-[#242424] group-hover:bg-[#C9A84C] transition-all duration-300 mb-4" />
              <div className="font-display text-2xl text-[#C9A84C]">{s.price}</div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <a href="#booking" className="inline-flex items-center gap-3 bg-[#C9A84C] text-[#0D0D0D] px-10 py-4 font-display tracking-widest uppercase hover:bg-[#E8C96A] transition-colors">
            Записаться на услугу
          </a>
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-[#C9A84C]" />
              <span className="font-body text-[#C9A84C] text-xs tracking-[0.3em] uppercase">Наши работы</span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl text-white uppercase">Портфолио</h2>
          </div>
          <p className="font-body text-[#EDE8DC]/40 max-w-xs text-sm">Каждая работа — это история клиента, рассказанная через стиль</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {PORTFOLIO_ITEMS.map((item, i) => (
            <div key={i} className="relative group overflow-hidden aspect-square bg-[#141414]">
              <img src={PORTFOLIO_IMG} alt={item.label} className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <div className="text-xs font-body text-[#C9A84C] uppercase tracking-widest mb-1">{item.tag}</div>
                <div className="font-display text-white uppercase">{item.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Masters() {
  return (
    <section id="masters" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-[#C9A84C]" />
            <span className="font-body text-[#C9A84C] text-xs tracking-[0.3em] uppercase">Команда</span>
            <div className="w-8 h-[1px] bg-[#C9A84C]" />
          </div>
          <h2 className="font-display text-5xl md:text-6xl text-white uppercase">Мастера</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {MASTERS.map((m) => (
            <div key={m.id} className="group">
              <div className="relative overflow-hidden mb-6">
                <img src={m.img} alt={m.name} className="w-full aspect-[3/4] object-cover object-top filter grayscale group-hover:grayscale-0 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/80 to-transparent" />
                <div className="absolute top-4 right-4 w-8 h-8 border border-[#C9A84C]/0 group-hover:border-[#C9A84C]/60 transition-all duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="font-display text-2xl text-white uppercase">{m.name}</div>
                  <div className="text-[#C9A84C] font-body text-xs uppercase tracking-widest">{m.role}</div>
                </div>
              </div>
              <div className="flex items-center justify-between px-2">
                <span className="font-body text-[#EDE8DC]/40 text-sm">{m.exp}</span>
                <a href="#booking" className="font-display text-xs text-[#C9A84C] uppercase tracking-widest hover:text-[#E8C96A] transition-colors flex items-center gap-2">
                  Записаться <Icon name="ArrowRight" size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Booking() {
  const [step, setStep] = useState(1);
  const [selected, setSelected] = useState({ master: '', service: '', date: '', time: '', name: '', phone: '' });
  const [submitted, setSubmitted] = useState(false);

  const today = new Date();
  const dates = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    return d;
  });

  const formatDate = (d: Date) => {
    const days = ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'];
    return { day: days[d.getDay()], num: d.getDate(), full: d.toLocaleDateString('ru-RU') };
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="booking" className="py-24 bg-[#0D0D0D]">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-[1px] bg-[#C9A84C]" />
            <span className="font-body text-[#C9A84C] text-xs tracking-[0.3em] uppercase">Онлайн-запись</span>
            <div className="w-8 h-[1px] bg-[#C9A84C]" />
          </div>
          <h2 className="font-display text-5xl md:text-6xl text-white uppercase">Бронирование</h2>
        </div>

        {submitted ? (
          <div className="text-center py-16 border border-[#242424]">
            <div className="w-16 h-16 border border-[#C9A84C] flex items-center justify-center mx-auto mb-6">
              <Icon name="Check" size={24} className="text-[#C9A84C]" />
            </div>
            <h3 className="font-display text-3xl text-white uppercase mb-3">Запись принята!</h3>
            <p className="font-body text-[#EDE8DC]/50">Мы свяжемся с вами для подтверждения</p>
            <button onClick={() => { setSubmitted(false); setStep(1); setSelected({ master:'', service:'', date:'', time:'', name:'', phone:'' }); }}
              className="mt-8 border border-[#C9A84C] text-[#C9A84C] px-8 py-3 font-display tracking-widest uppercase text-sm hover:bg-[#C9A84C] hover:text-[#0D0D0D] transition-all">
              Новая запись
            </button>
          </div>
        ) : (
          <div className="border border-[#242424]">
            <div className="flex border-b border-[#242424]">
              {[{n:1,label:"Мастер"},{n:2,label:"Услуга"},{n:3,label:"Дата & Время"},{n:4,label:"Контакты"}].map(s => (
                <div key={s.n} className={`flex-1 flex items-center justify-center gap-2 py-4 text-xs font-display tracking-widest uppercase cursor-pointer border-b-2 transition-all ${step===s.n ? 'border-[#C9A84C] text-[#C9A84C]' : step>s.n ? 'border-[#C9A84C]/30 text-[#EDE8DC]/40' : 'border-transparent text-[#EDE8DC]/30'}`}
                  onClick={() => step > s.n && setStep(s.n)}>
                  <span className={`w-5 h-5 text-[10px] flex items-center justify-center border ${step===s.n ? 'border-[#C9A84C] text-[#C9A84C]' : step>s.n ? 'border-[#C9A84C]/30 text-[#C9A84C]/50' : 'border-[#242424] text-[#EDE8DC]/30'}`}>
                    {step > s.n ? '✓' : s.n}
                  </span>
                  <span className="hidden sm:inline">{s.label}</span>
                </div>
              ))}
            </div>

            <div className="p-8">
              {step === 1 && (
                <div>
                  <h3 className="font-display text-2xl text-white uppercase mb-8">Выберите мастера</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {MASTERS.map(m => (
                      <div key={m.id} onClick={() => { setSelected(p => ({...p, master: m.name})); setStep(2); }}
                        className={`cursor-pointer border p-5 transition-all hover:border-[#C9A84C] flex items-center gap-4 ${selected.master===m.name ? 'border-[#C9A84C] bg-[#141414]' : 'border-[#242424]'}`}>
                        <img src={m.img} alt={m.name} className="w-12 h-12 object-cover object-top filter grayscale flex-shrink-0" />
                        <div>
                          <div className="font-display text-white uppercase text-sm">{m.name}</div>
                          <div className="font-body text-[#C9A84C] text-xs">{m.role} · {m.exp}</div>
                        </div>
                      </div>
                    ))}
                    <div onClick={() => { setSelected(p => ({...p, master: 'Любой'})); setStep(2); }}
                      className="cursor-pointer border border-[#242424] p-5 hover:border-[#C9A84C] transition-all flex items-center gap-4">
                      <div className="w-12 h-12 border border-[#242424] flex items-center justify-center flex-shrink-0">
                        <Icon name="Users" size={18} className="text-[#EDE8DC]/40" />
                      </div>
                      <div>
                        <div className="font-display text-white uppercase text-sm">Любой мастер</div>
                        <div className="font-body text-[#EDE8DC]/40 text-xs">Первый свободный</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div>
                  <h3 className="font-display text-2xl text-white uppercase mb-8">Выберите услугу</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {SERVICES.map((s, i) => (
                      <div key={i} onClick={() => { setSelected(p => ({...p, service: s.name})); setStep(3); }}
                        className={`cursor-pointer border p-5 transition-all hover:border-[#C9A84C] flex items-center justify-between gap-4 ${selected.service===s.name ? 'border-[#C9A84C] bg-[#141414]' : 'border-[#242424]'}`}>
                        <div className="flex items-center gap-4">
                          <Icon name={s.icon as LucideIconName} size={16} className="text-[#C9A84C]" />
                          <div>
                            <div className="font-display text-white uppercase text-sm">{s.name}</div>
                            <div className="font-body text-[#EDE8DC]/40 text-xs">{s.time}</div>
                          </div>
                        </div>
                        <div className="font-display text-[#C9A84C] text-sm whitespace-nowrap">{s.price}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {step === 3 && (
                <div>
                  <h3 className="font-display text-2xl text-white uppercase mb-8">Дата и время</h3>
                  <div className="mb-8">
                    <div className="font-body text-[#EDE8DC]/40 text-xs uppercase tracking-widest mb-4">Выберите дату</div>
                    <div className="flex gap-2 overflow-x-auto pb-2">
                      {dates.map((d, i) => {
                        const { day, num, full } = formatDate(d);
                        return (
                          <div key={i} onClick={() => setSelected(p => ({...p, date: full}))}
                            className={`flex-shrink-0 w-16 border cursor-pointer transition-all text-center py-3 ${selected.date===full ? 'border-[#C9A84C] bg-[#141414]' : 'border-[#242424] hover:border-[#C9A84C]/40'}`}>
                            <div className="font-body text-[#EDE8DC]/40 text-xs uppercase">{day}</div>
                            <div className="font-display text-xl text-white">{num}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div>
                    <div className="font-body text-[#EDE8DC]/40 text-xs uppercase tracking-widest mb-4">Выберите время</div>
                    <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                      {TIMES.map(t => (
                        <div key={t} onClick={() => setSelected(p => ({...p, time: t}))}
                          className={`border cursor-pointer transition-all text-center py-2 font-display text-sm ${selected.time===t ? 'border-[#C9A84C] bg-[#141414] text-[#C9A84C]' : 'border-[#242424] text-[#EDE8DC]/50 hover:border-[#C9A84C]/40'}`}>
                          {t}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-8 flex justify-end">
                    <button disabled={!selected.date || !selected.time} onClick={() => setStep(4)}
                      className="bg-[#C9A84C] text-[#0D0D0D] px-8 py-3 font-display tracking-widest uppercase hover:bg-[#E8C96A] transition-colors disabled:opacity-30 disabled:cursor-not-allowed">
                      Далее
                    </button>
                  </div>
                </div>
              )}

              {step === 4 && (
                <div>
                  <h3 className="font-display text-2xl text-white uppercase mb-8">Контактные данные</h3>
                  <div className="border border-[#C9A84C]/20 p-5 bg-[#0A0A0A] mb-8">
                    <div className="font-body text-[#EDE8DC]/30 text-xs uppercase tracking-widest mb-4">Ваша запись</div>
                    {[
                      {label:"Мастер", val:selected.master},
                      {label:"Услуга", val:selected.service},
                      {label:"Дата", val:selected.date},
                      {label:"Время", val:selected.time},
                    ].map(item => (
                      <div key={item.label} className="flex justify-between items-center py-2 border-b border-[#242424] last:border-0">
                        <span className="font-body text-[#EDE8DC]/40 text-xs">{item.label}</span>
                        <span className="font-display text-white text-sm uppercase">{item.val}</span>
                      </div>
                    ))}
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="font-body text-[#EDE8DC]/40 text-xs uppercase tracking-widest block mb-2">Ваше имя</label>
                      <input type="text" required placeholder="Иван Петров"
                        value={selected.name} onChange={e => setSelected(p => ({...p, name: e.target.value}))}
                        className="w-full bg-transparent border border-[#242424] focus:border-[#C9A84C] px-4 py-3 text-white font-body outline-none transition-colors placeholder:text-[#EDE8DC]/20" />
                    </div>
                    <div>
                      <label className="font-body text-[#EDE8DC]/40 text-xs uppercase tracking-widest block mb-2">Телефон</label>
                      <input type="tel" required placeholder="+7 (999) 000-00-00"
                        value={selected.phone} onChange={e => setSelected(p => ({...p, phone: e.target.value}))}
                        className="w-full bg-transparent border border-[#242424] focus:border-[#C9A84C] px-4 py-3 text-white font-body outline-none transition-colors placeholder:text-[#EDE8DC]/20" />
                    </div>
                    <div className="flex justify-between pt-4">
                      <button type="button" onClick={() => setStep(3)}
                        className="border border-[#242424] text-[#EDE8DC]/50 px-6 py-3 font-display tracking-widest uppercase text-sm hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all">
                        Назад
                      </button>
                      <button type="submit"
                        className="bg-[#C9A84C] text-[#0D0D0D] px-10 py-3 font-display tracking-widest uppercase hover:bg-[#E8C96A] transition-colors">
                        Подтвердить запись
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function Contacts() {
  return (
    <section id="contacts" className="py-24 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-[#C9A84C]" />
              <span className="font-body text-[#C9A84C] text-xs tracking-[0.3em] uppercase">Контакты</span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl text-white uppercase leading-tight mb-10">
              Найдите<br />нас
            </h2>
            <div className="space-y-8">
              {[
                { icon: "MapPin", label: "Адрес", value: "ул. Примерная, 12\nМосква, 123456" },
                { icon: "Phone", label: "Телефон", value: "+7 (999) 123-45-67" },
                { icon: "Clock", label: "Режим работы", value: "Ежедневно 10:00 – 21:00" },
                { icon: "Instagram", label: "Instagram", value: "@blade.barbershop" },
              ].map(item => (
                <div key={item.label} className="flex gap-5">
                  <div className="w-10 h-10 border border-[#242424] flex items-center justify-center flex-shrink-0">
                    <Icon name={item.icon as LucideIconName} size={16} className="text-[#C9A84C]" />
                  </div>
                  <div>
                    <div className="font-body text-[#EDE8DC]/30 text-xs uppercase tracking-widest mb-1">{item.label}</div>
                    <div className="font-body text-[#EDE8DC]/80 whitespace-pre-line">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#141414] border border-[#242424] p-8 flex flex-col">
            <h3 className="font-display text-2xl text-white uppercase mb-6">Написать нам</h3>
            <form className="flex flex-col flex-1 gap-4">
              <input type="text" placeholder="Ваше имя"
                className="bg-transparent border border-[#242424] focus:border-[#C9A84C] px-4 py-3 text-white font-body outline-none transition-colors placeholder:text-[#EDE8DC]/20" />
              <input type="tel" placeholder="+7 (999) 000-00-00"
                className="bg-transparent border border-[#242424] focus:border-[#C9A84C] px-4 py-3 text-white font-body outline-none transition-colors placeholder:text-[#EDE8DC]/20" />
              <textarea placeholder="Сообщение" rows={4}
                className="bg-transparent border border-[#242424] focus:border-[#C9A84C] px-4 py-3 text-white font-body outline-none transition-colors placeholder:text-[#EDE8DC]/20 resize-none flex-1" />
              <button type="button" className="bg-[#C9A84C] text-[#0D0D0D] px-8 py-4 font-display tracking-widest uppercase hover:bg-[#E8C96A] transition-colors mt-2">
                Отправить
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#0D0D0D] border-t border-[#242424] py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <img src="https://cdn.poehali.dev/projects/c387cc5d-f908-4659-8e46-f1976b7da6bc/bucket/c583d16f-63fd-40ce-94bf-b49bfd894bbc.PNG" alt="СТАТУСЪ" className="h-8 w-auto opacity-60" />
        <div className="font-body text-[#EDE8DC]/30 text-xs">© 2024 СТАТУСЪ Барбершоп. Все права защищены.</div>
        <div className="flex gap-6 flex-wrap justify-center">
          {NAV_LINKS.map(link => (
            <a key={link.href} href={link.href} className="font-body text-[#EDE8DC]/30 text-xs uppercase tracking-widest hover:text-[#C9A84C] transition-colors">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0D0D0D]">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Masters />
      <Booking />
      <Contacts />
      <Footer />
    </div>
  );
};

export default Index;