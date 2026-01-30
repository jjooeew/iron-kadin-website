import React from "react";

const tiers = [
  {
    name: "CORE",
    price: "$499",
    period: "PER MONTH",
    desc: "Foundational optimization for the committed professional.",
    features: [
      "Custom Training Protocol",
      "Macro Targeting",
      "Bi-Weekly Progress Review",
      "Community Access",
      "Email Support (48h response)",
    ],
    cta: "Apply for Core",
    highlight: false,
  },
  {
    name: "ELITE",
    price: "$899",
    period: "PER MONTH",
    desc: "Aggressive performance medicine and close-quarters coaching.",
    features: [
      "Everything in Core",
      "Advanced Bio-Marker Analysis",
      "Weekly Video Consults",
      "Movement Correction Feedback",
      "Priority Messenger Support",
      "Performance Lab Testing",
    ],
    cta: "Apply for Elite",
    highlight: true,
  },
  {
    name: "EXECUTIVE",
    price: "$2499",
    period: "PER QUARTER",
    desc: "Full white-glove longevity and athletic engineering.",
    features: [
      "Everything in Elite",
      "24/7 Direct Coach Line",
      "Private In-Person Assessment",
      "Chef/Meal Prep Integration",
      "Executive Travel Protocols",
      "Life-Extension Strategy",
    ],
    cta: "Apply for Executive",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-4">
          THE INVESTMENT.
        </h2>
        <p className="text-white/50 text-lg max-w-2xl mx-auto italic">
          High performance is an asset. Treat it like one.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {tiers.map((tier) => (
            <div
                key={tier.name}
                className={`frosted rounded-3xl p-10 flex flex-col relative overflow-hidden transition-transform hover:-translate-y-2 duration-300 ${
                    tier.highlight ? 'border-acid-lime/40 shadow-glow' : ''
                }`}
            >
                {tier.highlight && (
                    <div className="absolute top-6 right-6 bg-acid-lime text-black text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-glow">
                        Most Effective
                    </div>    
                )}
                <div className="mb-8">
                    <h3 className="text-sm font-black tracking-[0.3em] text-white/40 mb-2">{tier.name}</h3>
                    <div className="flex items-baseline gap-2">
                        <span className="text-5xl font-display font-bold text-white">{tier.price}</span>
                        <span className="text-xs font-medium text-white/30 uppercase tracking-widest">{tier.period}</span>
                    </div>
                    <p className="mt-4 text-sm text-white/60 leading-relaxed">
                        {tier.desc}
                    </p>
                </div>

                <div className="flex-1 space-y-4 mb-10">
                        {tier.features.map((f) => (
                            <div key={f} className="flex items-start gap-3 text-xs text-white/80 font-medium">
                                <div className="w-1.5 h-1.5 rounded-full bg-acid-lime mt-1 shrink-0" />
                                {f}
                            </div>
                        ))}
                </div>

                <a
                    href="#apply"
                    className={`w-full py-4 rounded-full text-center font-bold transition-all ${
                        tier.highlight
                        ? 'bg-acid-lime text-black shadow-glow hover:shadow-glow-strong' 
                        : 'border border-white/20 text-white hover:bg-white/10'
                    }`}
                >
                    {tier.cta}
                </a>
            </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <div className="inline-block frosted p-6 rounded-2xl border-dashed border-white/20">
            <p className="text-sm text-white/60 mb-3">Not sure which system fits your goals?</p>
            <a href="#apply" className="text-acid-lime font-bold hover:underline">Schedule a free consult →</a>
        </div>
      </div>
    </section>
  );
}
