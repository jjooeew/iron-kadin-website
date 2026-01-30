'use client'

import { Minus, Plus } from "lucide-react";
import React, { useState } from "react";

const faqs = [
  {
    q: "Is this only for pro athletes?",
    a: "No. It's for anyone who treats their performance like a priority. Most of my clients are founders, executives, and high-performing professionals who need to maintain elite energy levels and a sharp mind.",
  },
  {
    q: "Do I need a commercial gym?",
    a: "A well-equipped commercial gym is ideal, but I have built effective high-performance systems for home gyms as well. We work with what you have access to.",
  },
  {
    q: "How fast will I see results?",
    a: "Physiological changes start day one. Visible body recomposition usually manifests in 4-6 weeks of strict adherence to the protocol. This isn't a quick fix; it's an engineering project.",
  },
  {
    q: "What is your stance on supplements?",
    a: "We prioritize whole foods and sleep first. Supplements are used strategically (and only based on data) to fill gaps or enhance specific pathways. No hype, just efficacy.",
  },
];

export default function FAQ() {

    const [open, setOpen] = useState<number | null>(0)


  return (
    <section id="faq" className="py-10">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-display font-bold mb-12 text-center uppercase tracking-widest">
          Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="frosted rounded-2xl overflow-hidden border border-white/5"
            >
              <button
                className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                onClick={() => setOpen(open === idx ? null : idx)}
              >
                <span className="font-bold text-lg">{faq.q}</span>
                {open === idx ? (
                  <Minus size={20} className="text-acid-lime" />
                ) : (
                  <Plus size={20} />
                )}
              </button>
              <div
                className={`transition-all duration-300 overflow-hidden ${open === idx ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
              >
                <div className="p-6 pt-0 text-white/60 leading-relaxed border-t border-white/5">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
