import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Compass, Music, Trophy, Play, Check } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

// Section 1: Hero
const MethodHero = () => {
  const { t } = useLanguage();
  return (
    <section className="w-full bg-brown pt-[calc(72px+4rem)] pb-[3rem] lg:pt-[calc(72px+7rem)] lg:pb-[5rem] px-4 lg:px-[clamp(24px,4vw,80px)]">
      <div className="animate-on-scroll max-w-site mx-auto grid grid-cols-4 lg:grid-cols-12 gap-[clamp(16px,2vw,24px)] items-center">
        <div className="col-span-4 lg:col-span-5 lg:col-start-8 lg:order-2 order-1 mb-6 lg:mb-0">
          <img src="/assets/guitar-couch-burgundy-portrait.avif" alt="Teaching Method" className="w-full aspect-[3/4] object-cover rounded-lg shadow-offset-sm" />
        </div>
        <div className="col-span-4 lg:col-span-6 lg:order-1 order-2">
          <span className="font-sans text-[11px] font-bold uppercase tracking-[1.5px] text-amber mb-4 block">{t('teachingMethod.hero.label')}</span>
          <h1 className="font-serif text-[clamp(2rem,2rem+2vw,3.5rem)] leading-[1.1] text-white mb-6">{t('teachingMethod.hero.heading')}</h1>
          <p className="font-sans text-[clamp(1rem,1rem+0.2vw,1.125rem)] leading-[1.6] text-white/80 max-w-[480px] mb-8">{t('teachingMethod.hero.desc')}</p>
          <Link to="/contact">
            <Button variant="secondary">{t('teachingMethod.hero.cta')}</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

// Section 2: Philosophy
const Philosophy = () => {
  const { dict } = useLanguage();
  const p = dict.teachingMethod.philosophy;
  const icons = [Compass, Music, Trophy, Play];
  const colors = ['#3A7D8C', '#E8A535', '#5B8F6E', '#E86F3A'];

  return (
    <section className="animate-on-scroll w-full bg-warm-bg py-[clamp(3rem,8vw,6rem)] px-4 lg:px-[clamp(24px,4vw,80px)]">
      <div className="max-w-site mx-auto">
        <div className="text-center mb-12">
          <span className="font-sans text-[11px] font-bold uppercase tracking-[1.5px] text-brown mb-3 block">{p.label}</span>
          <h2 className="font-serif text-[clamp(1.5rem,1.5rem+1.5vw,2.5rem)] leading-[1.2] text-warm-black max-w-[600px] mx-auto">{p.heading}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[clamp(16px,2vw,24px)]">
          {p.pillars.map((pillar, idx) => {
            const Icon = icons[idx];
            return (
              <div key={idx} className="stagger-child flex flex-col items-center text-center p-6 lg:p-8">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-6" style={{ backgroundColor: `${colors[idx]}1F` }}>
                  <Icon size={24} color={colors[idx]} strokeWidth={2} />
                </div>
                <h3 className="font-serif text-[18px] text-warm-black mb-2">{pillar.title}</h3>
                <p className="font-sans text-[14px] text-warm-gray leading-[1.5]">{pillar.desc}</p>
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
  const a = dict.teachingMethod.ageGroups;
  const colors = ['#E86F3A', '#E8A535', '#3A7D8C', '#8A3819'];

  return (
    <section className="animate-on-scroll w-full bg-warm-surface py-[clamp(3rem,8vw,6rem)] px-4 lg:px-[clamp(24px,4vw,80px)]">
      <div className="max-w-site mx-auto">
        <div className="mb-12">
          <span className="font-sans text-[11px] font-bold uppercase tracking-[1.5px] text-brown mb-3 block">{a.label}</span>
          <h2 className="font-serif text-[clamp(1.5rem,1.5rem+1.5vw,2.5rem)] leading-[1.2] text-warm-black max-w-[500px]">{a.heading}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[clamp(16px,2vw,24px)]">
          {a.groups.map((group, idx) => (
            <div key={idx} className="stagger-child bg-white rounded-lg p-7 border border-warm-mid h-full flex flex-col items-start">
              <span className="font-sans text-[11px] font-bold uppercase tracking-wider py-1 px-3 rounded-full mb-4" style={{ backgroundColor: `${colors[idx]}1F`, color: colors[idx] }}>
                {group.range}
              </span>
              <h3 className="font-serif text-[18px] text-warm-black mb-2">{group.title}</h3>
              <p className="font-sans text-[14px] text-warm-gray leading-[1.5]">{group.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Section 4: Instruments
const Instruments = () => {
  const { dict } = useLanguage();
  const inst = dict.teachingMethod.instruments;
  const imgs = [
    "/assets/guitar-couch-burgundy-closeup.avif",
    "/assets/guitar-couch-wide-landscape.avif",
    "/assets/guitar-couch-burgundy-portrait.avif",
    "/assets/guitar-couch-bw-portrait.avif"
  ];

  return (
    <section className="animate-on-scroll w-full bg-warm-bg py-[clamp(3rem,8vw,6rem)] px-4 lg:px-[clamp(24px,4vw,80px)]">
      <div className="max-w-site mx-auto">
        <div className="text-center mb-12">
          <span className="font-sans text-[11px] font-bold uppercase tracking-[1.5px] text-brown mb-3 block">{inst.label}</span>
          <h2 className="font-serif text-[clamp(1.5rem,1.5rem+1.5vw,2.5rem)] leading-[1.2] text-warm-black">{inst.heading}</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[clamp(16px,2vw,24px)]">
          {inst.items.map((item, idx) => (
            <div key={idx} className="stagger-child bg-white border border-warm-mid rounded-lg overflow-hidden group hover:shadow-offset-md transition-shadow duration-200">
              <div className="h-[200px] w-full overflow-hidden">
                 <img src={imgs[idx]} alt={item.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-[18px] text-warm-black mb-2">{item.title}</h3>
                <p className="font-sans text-[14px] text-warm-gray leading-[1.5]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Section 5: Genres
const Genres = () => {
  const { t, dict } = useLanguage();
  const genres = dict.genres;

  return (
    <section className="animate-on-scroll w-full bg-warm-black py-[clamp(3rem,8vw,6rem)] px-4 lg:px-[clamp(24px,4vw,80px)]">
      <div className="max-w-site mx-auto text-center">
        <span className="font-sans text-[11px] font-bold uppercase tracking-[1.5px] text-amber mb-3 block">{t('teachingMethod.genres.label')}</span>
        <h2 className="font-serif text-[clamp(1.5rem,1.5rem+1.5vw,2.5rem)] leading-[1.2] text-white mb-12">{t('teachingMethod.genres.heading')}</h2>
        <div className="flex flex-wrap justify-center gap-3 max-w-[900px] mx-auto mb-12">
          {genres.map((g, idx) => (
            <span key={idx} className="px-6 py-3 rounded-full border border-white/15 bg-white/5 text-white font-sans text-[14px] font-medium hover:bg-white/15 transition-colors cursor-default">{g}</span>
          ))}
        </div>
        <div className="max-w-[800px] mx-auto rounded-xl overflow-hidden aspect-[16/9] bg-[#1A1410] relative">
          <video className="w-full h-full object-cover" controls playsInline poster="/assets/guitar-couch-wide-landscape.avif">
             <source src="/assets/minor-swing-fullscreen-with-text.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

// Section 6: Lesson Structure
const LessonStructure = () => {
  const { dict } = useLanguage();
  const ls = dict.teachingMethod.lessonStructure;

  return (
    <section className="animate-on-scroll w-full bg-warm-bg py-[clamp(3rem,8vw,6rem)] px-4 lg:px-[clamp(24px,4vw,80px)]">
      <div className="max-w-site mx-auto">
        <div className="text-center mb-12">
          <span className="font-sans text-[11px] font-bold uppercase tracking-[1.5px] text-brown mb-3 block">{ls.label}</span>
          <h2 className="font-serif text-[clamp(1.5rem,1.5rem+1.5vw,2.5rem)] leading-[1.2] text-warm-black">{ls.heading}</h2>
        </div>
        <div className="max-w-[1000px] mx-auto">
          <div className="hidden sm:grid grid-cols-5 gap-6 relative">
            <div className="absolute top-[20px] left-[10%] right-[10%] h-[1px] bg-warm-mid -z-1" />
            {ls.steps.map((step, idx) => (
              <div key={idx} className="stagger-child flex flex-col items-center text-center bg-warm-bg z-10">
                <div className="w-10 h-10 rounded-full bg-brown text-white font-sans text-[14px] font-bold flex items-center justify-center mb-3">{idx + 1}</div>
                <span className="font-sans text-[11px] text-warm-gray mb-2 block">{step.time}</span>
                <h4 className="font-sans text-[14px] font-semibold text-warm-black mb-1">{step.title}</h4>
                <p className="font-sans text-[12px] text-warm-gray leading-[1.5] px-2">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="sm:hidden flex flex-col gap-0 border-l-2 border-warm-mid ml-4">
            {ls.steps.map((step, idx) => (
              <div key={idx} className="stagger-child flex flex-col items-start pl-6 pb-8 relative last:pb-0">
                 <div className="absolute -left-[21px] top-0 w-10 h-10 rounded-full bg-brown text-white font-sans text-[14px] font-bold flex items-center justify-center border-4 border-warm-bg">{idx + 1}</div>
                <span className="font-sans text-[11px] text-warm-gray mb-1 mt-1">{step.time}</span>
                <h4 className="font-sans text-[14px] font-semibold text-warm-black mb-1">{step.title}</h4>
                <p className="font-sans text-[13px] text-warm-gray leading-[1.5]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Section 7: Results
const Results = () => {
  const { dict } = useLanguage();
  const r = dict.teachingMethod.results;

  return (
    <section className="animate-on-scroll w-full bg-warm-surface py-[clamp(3rem,8vw,6rem)] px-4 lg:px-[clamp(24px,4vw,80px)]">
      <div className="max-w-site mx-auto">
        <div className="mb-12">
          <span className="font-sans text-[11px] font-bold uppercase tracking-[1.5px] text-brown mb-3 block">{r.label}</span>
          <h2 className="font-serif text-[clamp(1.5rem,1.5rem+1.5vw,2.5rem)] leading-[1.2] text-warm-black">{r.heading}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[clamp(16px,2vw,24px)]">
          {r.items.map((res, idx) => (
             <div key={idx} className="stagger-child bg-white rounded-lg p-8 border border-warm-mid">
                <span className="font-serif text-[clamp(1.5rem,2vw,2.5rem)] text-brown block mb-2 leading-none">{res.metric}</span>
                <h3 className="font-sans text-[14px] font-semibold text-warm-black mb-2">{res.title}</h3>
                <p className="font-sans text-[14px] text-warm-gray leading-[1.5]">{res.desc}</p>
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
    <section className="animate-on-scroll w-full bg-brown py-[clamp(3rem,8vw,5rem)] px-4 lg:px-[clamp(24px,4vw,80px)] text-center">
       <div className="max-w-[700px] mx-auto">
         <h2 className="font-serif text-[clamp(1.5rem,1.5rem+1.5vw,2.5rem)] leading-[1.2] text-white mb-4">{t('teachingMethod.cta.heading')}</h2>
         <p className="font-sans text-[clamp(1rem,1rem+0.2vw,1.125rem)] text-white/75 max-w-[500px] mx-auto mb-8 leading-[1.6]">{t('teachingMethod.cta.desc')}</p>
         <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
           <Link to="/contact" className="w-full sm:w-auto">
             <Button variant="secondary" className="w-full sm:w-auto">{t('teachingMethod.cta.cta')}</Button>
           </Link>
           <Link to="/pricing" className="w-full sm:w-auto">
             <button className="w-full sm:w-auto bg-transparent border-2 border-white rounded-full px-7 py-[14px] text-white font-sans text-[13px] font-medium min-h-[44px] hover:bg-white hover:text-brown transition-all duration-200">
                {t('teachingMethod.cta.viewPricing')}
             </button>
           </Link>
         </div>
       </div>
    </section>
  );
};

const TeachingMethod = () => {
  return (
    <div className="min-h-screen">
      <MethodHero />
      <Philosophy />
      <AgeGroups />
      <Instruments />
      <Genres />
      <LessonStructure />
      <Results />
      <PageCTA />
    </div>
  );
};

export default TeachingMethod;
