import React from "react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 md:py-24 flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1 text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-[0.2em] font-bold text-white/50 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-acid-lime animate-pulse" />
          Auckland • NZ • Executive Performance
        </div>
        <h1 className="text-5xl md:text-8xl font-display font-bold tracking-tight leading-[0.9] mb-8">
          <span className="text-acid-lime">AGING IS A DISEASE.</span>
          <br />
          <span className="italic font-light text-white/90">
            Slowing it down is the art of longevity.
          </span>
        </h1>
        <p className="text-lg md:text-xl text-white/60 max-w-lg mb-12 leading-relaxed">
          Train with intent. Measure progress. Engineer results. Data-driven
          coaching for founders, athletes, and high-performers who refuse to
          settle.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-6 justify-center md:justify-start">
          <a
            href="#apply"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-acid-lime text-black font-bold flex items-center justify-center gap-2 hover:shadow-glow transition-all group active:scale-95"
          >
            APPLY NOW
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
          <a
            href="#foundation"
            className="text-white/60 hover:text-acid-lime flex items-center gap-2 transition-colors group"
          >
            See what's included
            <span className="group-hover:translate-y-1 transition-transform">
              ↓
            </span>
          </a>
        </div>
      </div>

      <div className="flex-1 relative w-full aspect-4/5 md:aspect-auto">
        <div className="absolute -inset-4 border border-acid-lime/10 rounded-3xl" />
        <div className="absolute inset-0 bg-linear-to-t from-graphite-900 via-transparent to-transparent z-10" />
        <img
          src="https://picsum.photos/800/1000?grayscale"
          alt="Athlete silhouette"
          className="w-full h-full object-cover rounded-2xl grayscale contrast-125"
        />

        <div className="absolute bottom-8 left-8 z-20 frosted p-4 rounded-xl min-w-[160px] animate-bounce-subtle">
          <div className="text-[10px] text-white/50 mb-1">VO2 MAX PEAK</div>
          <div className="text-2xl font-display font-bold text-acid-lime">
            58.4 ml/kg
          </div>
          <div className="w-full h-1 bg-white/10 mt-2 rounded-full overflow-hidden">
            <div className="w-4/5 h-full bg-acid-lime" />
          </div>
        </div>
      </div>
    </section>
  );
}
