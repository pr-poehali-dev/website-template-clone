import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { MASTERS, SERVICES, TIMES, NAV_LINKS, LOGO_URL } from './constants';

export function Booking() {
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
                          <Icon name={s.icon} size={16} className="text-[#C9A84C]" />
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

export function Contacts() {
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
                    <Icon name={item.icon} size={16} className="text-[#C9A84C]" />
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

export function Footer() {
  return (
    <footer className="bg-[#0D0D0D] border-t border-[#242424] py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <img src={LOGO_URL} alt="СТАТУСЪ" className="h-8 w-auto opacity-60" />
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
