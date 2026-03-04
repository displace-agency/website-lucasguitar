import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Target, Star, Lightbulb, Infinity, Check, ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

// Section 1: Hero
const KidsHero = () => {
  const { t } = useLanguage();
  return (
    <section className="w-full bg-coral pt-[calc(72px+4rem)] pb-[3rem] lg:pt-[calc(72px+7rem)] lg:pb-[5rem] px-4 lg:px-[clamp(24px,4vw,80px)]">
      <div className="animate-on-scroll max-w-site mx-auto grid grid-cols-4 lg:grid-cols-12 gap-[clamp(16px,2vw,24px)] items-center">
        <div className="col-span-4 lg:col-span-5 lg:col-start-8 lg:order-2 order-1 mb-8 lg:mb-0 flex justify-center lg:justify-end">
          <div className="w-full aspect-[16/9] rounded-xl overflow-hidden bg-warm-black shadow-offset-lg relative">
            <video className="w-full h-full object-cover" controls playsInline poster="/assets/portrait-headshot-blue-shirt-alt.avif">
              <source src="/assets/sweet-child-fullscreen-no-text.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
        <div className="col-span-4 lg:col-span-6 lg:order-1 order-2">
          <span className="font-sans text-[11px] font-bold uppercase tracking-[1.5px] text-white/80 mb-4 block">{t('forKids.hero.label')}</span>
          <h1 className="font-serif text-[clamp(2rem,2rem+2vw,3.5rem)] leading-[1.1] text-white mb-6">{t('forKids.hero.heading')}</h1>
          <p className="font-sans text-[clamp(1rem,1rem+0.2vw,1.125rem)] leading-[1.6] text-white/85 max-w-[460px] mb-8">{t('forKids.hero.desc')}</p>
          <Link to="/contact">
            <button className="bg-white text-coral hover:bg-white/90 font-medium transition-all duration-200 ease-out rounded-md text-[13px] px-7 py-3.5 tracking-[0.3px] min-h-[44px]">
              {t('forKids.hero.cta')}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

// Section 2: Why Music
const WhyMusic = () => {
  const { t, dict } = useLanguage();
  const wm = dict.forKids.whyMusic;
  const icons = [Target, Star, Lightbulb, Infinity];
  const colors = ['#3A7D8C', '#E8A535', '#E86F3A', '#5B8F6E'];

  return (
    <section className="animate-on-scroll w-full bg-warm-bg py-[clamp(3rem,8vw,6rem)] px-4 lg:px-[clamp(24px,4vw,80px)]">
      <div className="max-w-site mx-auto">
        <div className="text-center mb-12">
          <span className="font-sans text-[11px] font-bold uppercase tracking-[1.5px] text-brown mb-3 block">{wm.label}</span>
          <h2 className="font-serif text-[clamp(1.5rem,1.5rem+1.5vw,2.5rem)] leading-[1.2] text-warm-black max-w-[600px] mx-auto mb-4">{wm.heading}</h2>
          <p className="font-sans text-[clamp(1rem,1rem+0.1vw,1.125rem)] text-warm-gray text-center max-w-[500px] mx-auto">{wm.desc}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[clamp(16px,2vw,24px)]">
          {wm.benefits.map((b, idx) => {
            const Icon = icons[idx];
            return (
              <div key={idx} className="stagger-child bg-white border border-warm-mid rounded-lg p-7">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: `${colors[idx]}1F` }}>
                  <Icon size={24} color={colors[idx]} strokeWidth={2} />
                </div>
                <h3 className="font-serif text-[18px] text-warm-black mb-2">{b.title}</h3>
                <p className="font-sans text-[14px] text-warm-gray leading-[1.5]">{b.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Section 3: Age Groups
const AgeGroups = () => {
  const { dict } = useLanguage();
  const ag = dict.forKids.ageGroups;
  const borderColors = ['border-coral', 'border-amber', 'border-teal'];
  const badgeColors = ['#E86F3A', '#E8A535', '#3A7D8C'];
  const checkColors = ['text-coral', 'text-amber', 'text-teal'];

  return (
    <section className="animate-on-scroll w-full bg-warm-surface py-[clamp(3rem,8vw,6rem)] px-4 lg:px-[clamp(24px,4vw,80px)]">
      <div className="max-w-site mx-auto">
        <div className="mb-12">
          <span className="font-sans text-[11px] font-bold uppercase tracking-[1.5px] text-brown mb-3 block">{ag.label}</span>
          <h2 className="font-serif text-[clamp(1.5rem,1.5rem+1.5vw,2.5rem)] leading-[1.2] text-warm-black max-w-[500px]">{ag.heading}</h2>
        </div>
        <div className="space-y-6">
          {ag.groups.map((group, idx) => (
            <div key={idx} className={`stagger-child bg-white rounded-lg p-8 border-l-[4px] ${borderColors[idx]} max-w-[1400px] mx-auto`}>
              <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12">
                <div className="md:w-1/3">
                  <span className="inline-block font-sans text-[11px] font-bold uppercase tracking-wider py-1 px-3 rounded-full mb-3" style={{ backgroundColor: `${badgeColors[idx]}1F`, color: badgeColors[idx] }}>
                    {group.range}
                  </span>
                  <h3 className="font-serif text-[clamp(1.25rem,1.5vw,1.5rem)] text-warm-black mb-4">{group.title}</h3>
                  <p className="font-sans text-[14px] text-warm-gray leading-[1.6]">{group.desc}</p>
                </div>
                <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {group.bullets.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check size={18} className={`${checkColors[idx]} shrink-0 mt-[2px]`} />
                      <span className="font-sans text-[14px] text-warm-black">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Section 4: Curriculum
const Curriculum = () => {
  const { dict } = useLanguage();
  const cur = dict.forKids.curriculum;

  return (
    <section className="animate-on-scroll w-full bg-warm-bg py-[clamp(3rem,8vw,6rem)] px-4 lg:px-[clamp(24px,4vw,80px)]">
      <div className="max-w-site mx-auto">
        <div className="mb-12">
          <span className="font-sans text-[11px] font-bold uppercase tracking-[1.5px] text-brown mb-3 block">{cur.label}</span>
          <h2 className="font-serif text-[clamp(1.5rem,1.5rem+1.5vw,2.5rem)] leading-[1.2] text-warm-black max-w-[500px]">{cur.heading}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[clamp(16px,2vw,24px)]">
          {cur.skills.map((skill, idx) => (
            <div key={idx} className="stagger-child p-6">
              <h3 className="font-sans text-[14px] font-bold text-warm-black mb-2">{skill.title}</h3>
              <p className="font-sans text-[13px] text-warm-gray leading-[1.6]">{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Section 5: First Lesson
const FirstLesson = () => {
  const { dict } = useLanguage();
  const fl = dict.forKids.firstLesson;

  return (
    <section className="animate-on-scroll w-full bg-warm-surface py-[clamp(3rem,8vw,6rem)] px-4 lg:px-[clamp(24px,4vw,80px)]">
      <div className="max-w-site mx-auto">
        <div className="text-center mb-12">
          <span className="font-sans text-[11px] font-bold uppercase tracking-[1.5px] text-brown mb-3 block">{fl.label}</span>
          <h2 className="font-serif text-[clamp(1.5rem,1.5rem+1.5vw,2.5rem)] leading-[1.2] text-warm-black max-w-[600px] mx-auto mb-4">{fl.heading}</h2>
          <p className="font-sans text-[clamp(1rem,1rem+0.1vw,1.125rem)] text-warm-gray text-center">{fl.desc}</p>
        </div>
        <div className="max-w-[1000px] mx-auto">
          <div className="hidden sm:grid grid-cols-4 gap-6 relative">
            <div className="absolute top-[18px] left-[12%] right-[12%] h-[1px] bg-warm-mid -z-1" />
            {fl.steps.map((step, idx) => (
              <div key={idx} className="stagger-child flex flex-col items-center text-center bg-warm-surface z-10 px-2">
                <div className="w-9 h-9 rounded-full bg-coral text-white font-sans text-[14px] font-bold flex items-center justify-center mb-4 shadow-sm">{idx + 1}</div>
                <h4 className="font-sans text-[14px] font-bold text-warm-black mb-2">{step.title}</h4>
                <p className="font-sans text-[13px] text-warm-gray leading-[1.5]">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="sm:hidden flex flex-col gap-0 border-l-2 border-warm-mid ml-4">
            {fl.steps.map((step, idx) => (
              <div key={idx} className="stagger-child flex flex-col items-start pl-6 pb-8 relative last:pb-0">
                 <div className="absolute -left-[19px] top-0 w-9 h-9 rounded-full bg-coral text-white font-sans text-[14px] font-bold flex items-center justify-center border-4 border-warm-surface">{idx + 1}</div>
                <h4 className="font-sans text-[14px] font-bold text-warm-black mb-1 mt-1">{step.title}</h4>
                <p className="font-sans text-[13px] text-warm-gray leading-[1.5]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Section 6: Testimonials
const ParentTestimonials = () => {
  const { dict } = useLanguage();
  const pt = dict.forKids.parentTestimonials;

  return (
    <section className="animate-on-scroll w-full bg-warm-bg py-[clamp(3rem,8vw,6rem)] px-4 lg:px-[clamp(24px,4vw,80px)]">
      <div className="max-w-site mx-auto">
        <div className="mb-12">
          <span className="font-sans text-[11px] font-bold uppercase tracking-[1.5px] text-brown mb-3 block">{pt.label}</span>
          <h2 className="font-serif text-[clamp(1.5rem,1.5rem+1.5vw,2.5rem)] leading-[1.2] text-warm-black">{pt.heading}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[clamp(16px,2vw,24px)]">
          {pt.items.map((item, idx) => (
            <div key={idx} className="stagger-child bg-white border border-warm-mid rounded-lg p-7">
              <div className="font-serif text-[48px] text-brown/15 leading-none mb-2">"</div>
              <p className="font-sans text-[16px] font-normal leading-[1.6] text-warm-black mb-6">"{item.quote}"</p>
              <div>
                <p className="font-sans text-[14px] font-semibold text-warm-black">{item.author}</p>
                <p className="font-sans text-[12px] text-warm-gray mt-1">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Section 7: FAQ
const PracticalInfo = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { dict } = useLanguage();
  const faq = dict.forKids.faq;

  const toggle = (idx: number) => { setOpenIndex(openIndex === idx ? null : idx); };

  return (
    <section className="animate-on-scroll w-full bg-warm-surface py-[clamp(3rem,8vw,6rem)] px-4 lg:px-[clamp(24px,4vw,80px)]">
      <div className="max-w-site mx-auto">
        <div className="mb-12">
          <span className="font-sans text-[11px] font-bold uppercase tracking-[1.5px] text-brown mb-3 block">{faq.label}</span>
          <h2 className="font-serif text-[clamp(1.5rem,1.5rem+1.5vw,2.5rem)] leading-[1.2] text-warm-black">{faq.heading}</h2>
        </div>
        <div className="max-w-[1400px] mx-auto">
          {faq.items.map((item, idx) => (
            <div key={idx} className="stagger-child bg-white border border-warm-mid rounded-lg mb-2 overflow-hidden">
              <button onClick={() => toggle(idx)} className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none">
                <span className="font-sans text-[15px] font-semibold text-warm-black pr-4">{item.q}</span>
                {openIndex === idx ? <ChevronUp size={20} className="text-warm-gray shrink-0" /> : <ChevronDown size={20} className="text-warm-gray shrink-0" />}
              </button>
              <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-[200px] pb-5 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="font-sans text-[14px] text-warm-gray leading-[1.6]">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Section 8: CTA
const PageCTA = () => {
  const { t } = useLanguage();
  return (
    <section className="animate-on-scroll w-full bg-coral py-[clamp(3rem,8vw,5rem)] px-4 lg:px-[clamp(24px,4vw,80px)] text-center">
       <div className="max-w-[700px] mx-auto">
         <h2 className="font-serif text-[clamp(1.5rem,1.5rem+1.5vw,2.5rem)] leading-[1.2] text-white mb-4">{t('forKids.cta.heading')}</h2>
         <p className="font-sans text-[clamp(1rem,1rem+0.2vw,1.125rem)] text-white/85 max-w-[500px] mx-auto mb-8 leading-[1.6]">{t('forKids.cta.desc')}</p>
         <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
           <Link to="/contact" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-white text-coral hover:bg-white/90 font-medium transition-all duration-200 ease-out rounded-md text-[13px] px-7 py-3.5 tracking-[0.3px] min-h-[44px]">
                {t('forKids.cta.cta')}
              </button>
           </Link>
           <Link to="/pricing" className="w-full sm:w-auto">
             <button className="w-full sm:w-auto bg-transparent border-2 border-white rounded-full px-7 py-[14px] text-white font-sans text-[13px] font-medium min-h-[44px] hover:bg-white hover:text-coral transition-all duration-200">
                {t('forKids.cta.viewPricing')}
             </button>
           </Link>
         </div>
       </div>
    </section>
  );
};

const ForKids = () => {
  return (
    <div className="min-h-screen">
      <KidsHero />
      <WhyMusic />
      <AgeGroups />
      <Curriculum />
      <FirstLesson />
      <ParentTestimonials />
      <PracticalInfo />
      <PageCTA />
    </div>
  );
};

export default ForKids;
