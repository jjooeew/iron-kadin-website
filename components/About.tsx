import React from "react";

export default function About() {
  return (
    <section id="about" className="py-10 border-t border-white/5">
      <div className="flex flex-col md:flex-row gap-16 items-start">
        <div className="flex-1 top-32">
          <div className="relative">
            <div className="absolute -inset-4 border border-acid-lime/10 rounded-3xl" />
            <img
              src="https://picsum.photos/800/800?grayscale&sig=coach"
              alt="Kadin Richardson"
              className="w-full rounded-2xl shadow-2xl grayscale"
            />
            <div className="absolute bottom-6 left-6 frosted p-4 rounded-xl">
              <div className="text-sm font-bold">KADIN RICHARDSON</div>
              <div className="text-[10px] text-acid-lime font-black tracking-widest mt-1">
                HEAD PERFORMANCE ENGINEER
              </div>
            </div>
          </div>
        </div>

          <div className="flex-[1.5] space-y-10">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight">
                THE SYSTEM BEHIND THE RESULTS.
              </h2>
              <p className="text-white/60 text-lg leading-relaxed">
                I've spent the last 12 years deconstructing elite performance.
                My philosophy is simple: cut the noise, follow the data, and
                build a physique that works as hard as you do.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-6 pb-6 border-b border-white/5">
                <span className="text-acid-lime font-mono">01</span>
                <div>
                  <h3 className="font-bold text-lg mb-1 uppercase tracking-tight">
                    Scientific Rigor
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed">
                    Every rep and gram is accounted for. No guesswork, just
                    physiological math.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 pb-6 border-b border-white/5">
                <span className="text-acid-lime font-mono">02</span>
                <div>
                  <h3 className="font-bold text-lg mb-1 uppercase tracking-tight">
                    Longevity First
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed">
                    What good is a 400lb squat if your joints are failing? We
                    build for the long game.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 pb-6 border-b border-white/5">
                <span className="text-acid-lime font-mono">03</span>
                <div>
                  <h3 className="font-bold text-lg mb-1 uppercase tracking-tight">
                    Extreme Ownership
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed">
                    I provide the map, but you drive the machine. Results are
                    the only currency we accept.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="frosted p-4 rounded-xl">
                <div className="text-[10px] font-black text-white/40 mb-2 uppercase">
                  Certifications
                </div>
                <ul className="text-xs space-y-1 text-white/70">
                  <li>ASCA Level 2 S&C</li>
                  <li>Precision Nutrition L2</li>
                  <li>FMS Level 1 & 2</li>
                </ul>
              </div>
              <div className="frosted p-4 rounded-xl">
                <div className="text-[10px] font-black text-white/40 mb-2 uppercase">
                  Specialization
                </div>
                <ul className="text-xs space-y-1 text-white/70">
                  <li>Hypertrophy Strategy</li>
                  <li>Biohacker Protocols</li>
                  <li>Executive Wellness</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}
