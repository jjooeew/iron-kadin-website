import { Quote } from "lucide-react";
import React from "react";

const stats = [
  { label: "LEAN MASS", value: "+14 LBS" },
  { label: "BODY FAT", value: "-9%" },
  { label: "STRENGTH", value: "+28%" },
  { label: "RECOVERY", value: "OPTIMAL" },
];

export default function Results() {
  return (
    <section id="results" className="py-24">
      <div className="flex flex-col lg:flex-row gap-16 items-center">
        <div className="flex-1 grid grid-cols-2 gap-4">
          <img
            src="https://picsum.photos/400/500?grayscale&sig=1"
            className="rounded-2xl grayscale hover:grayscale-0 transition-all duration-500"
            alt="Result 1"
          />
          <img
            src="https://picsum.photos/400/500?grayscale&sig=2"
            className="rounded-2xl grayscale hover:grayscale-0 transition-all duration-500 mt-8"
            alt="Result 2"
          />
        </div>

        <div className="flex-1 space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight">
              DATA DOESN'T <span className="text-acid-lime italic">LIE.</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed">
              We track physiological adaptations. Every protocol is measured,
              adjusted, and optimised for maximum output.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="border-1-2 border-acid-lime pl-4">
                <div className="text-[10px] font-black text-white/30 tracking-widest mb-1">
                  {s.label}
                </div>
                <div className="text-3xl font-display font-bold text-white">
                  {s.value}
                </div>
              </div>
            ))}
          </div>

          <div className="frosted p-8 rounded-2xl relative">
            <Quote className="absolute top-6 right-6 text-acid-lime/20" size={48} />
            <p className="text-white/80 italic text-lg leading-relaxed mb-6">
                "Kadin doesn't just give you a workout plan. He gives you an operating system for your biology. My focus and strength have never been higher."
            </p>
            <div className="flex items-center gap-4">
               <div className="w-12 h-12 rounded-full bg-acid-lime/20" />
              <div>
                <div className="font-bold">George "Blade" Caldwell</div>
                <div className="text-xs text-white/40 uppercase tracking-widest">Tech Founder</div>
              </div> 
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
