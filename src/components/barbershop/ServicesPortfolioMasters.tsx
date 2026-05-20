import Icon from '@/components/ui/icon';
import { SERVICES, PORTFOLIO_ITEMS, PORTFOLIO_IMG, MASTERS } from './constants';

export function Services() {
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
                  <Icon name={s.icon} size={18} className="text-[#C9A84C]" />
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

export function Portfolio() {
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

export function Masters() {
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
