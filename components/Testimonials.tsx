import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Testimonials: React.FC = () => {
  const { t, dict } = useLanguage();
  const testimonials = dict.testimonials.items;

  return (
    <section id="testimonials" className="animate-on-scroll w-full bg-brown py-[clamp(3rem,8vw,6rem)] px-4 lg:px-[clamp(24px,4vw,80px)]">
      <div className="max-w-site mx-auto">
        <p className="font-sans text-[11px] font-bold uppercase tracking-[1.5px] text-amber mb-3">
          {t('testimonials.label')}
        </p>
        <h2 className="font-serif text-[clamp(1.5rem,1.5rem+1.5vw,2.5rem)] leading-[1.2] text-white mb-12">
          {t('testimonials.heading')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[clamp(16px,2vw,24px)]">
          {testimonials.map((item, idx) => (
            <div key={idx} className="stagger-child bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.12)] rounded-lg p-8">
              <div className="font-serif text-[48px] text-white/20 leading-none mb-2">"</div>
              <p className="font-sans text-[16px] font-normal leading-[1.6] text-white mb-6">
                "{item.quote}"
              </p>
              <div>
                <p className="font-sans text-[14px] font-semibold text-white">
                  {item.author}
                </p>
                <p className="font-sans text-[12px] text-white/60 mt-1">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
