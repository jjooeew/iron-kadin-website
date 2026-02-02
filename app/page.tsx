"use client";

import About from "@/components/About";
import ApplyForm from "@/components/ApplyForm";
import FAQ from "@/components/FAQ";
import Hero from "@/components/Hero";
import Modal from "@/components/Modal";
import ModuleCards from "@/components/ModuleCard";
import ModuleTabs from "@/components/ModuleTabs";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Results from "@/components/Results";
import { useState } from "react";

export default function Home() {
  const [currentPage, setCurrentPage] = useState<"home" | "apply">("home");
  const [isApplyOpen, setIsApplyOpen] = useState(false);


  return (
    <div className="min-h-screen bg-black">
      <Navbar
        onNavigate={(page) => setCurrentPage(page)}
        currentPage={currentPage}
      />
      <main className="relative pt-24 pb-20 px-4 md:px-0">
        <Hero onApply={() => setIsApplyOpen(true)} />
        <ModuleTabs />
        <div className="max-w-7xl mx-auto space-y-24 mt-5">
          <ModuleCards
            id="foundation"
            number="01"
            title="FOUNDATION SYSTEMS"
            description="Strength base, movement quality, and foundational work capacity. Your training becomes the infrastructure."
            bullets={[
              "Structural balance analysis",
              "Movement screening",
              "Neural drive optimization",
            ]}
            type="bars"
          />
          <ModuleCards
            id="performance"
            number="02"
            title="PERFORMANCE ENGINE"
            description="Speed, power, conditioning, and VO2-style progress markers. Engineered for high-output environments."
            bullets={[
              "VO2 Max tracking",
              "Force-velocity profiling",
              "Lactate threshold management",
            ]}
            type="chart"
          />
          <ModuleCards
            id="bodycomp"
            number="03"
            title="BODY RECOMPOSITION"
            description="Aggressive fat loss and lean mass accrual. Data-driven macro adherence and progressive overload protocols."
            bullets={[
              "Bio-marker tracking",
              "Hypertrophy engineering",
              "Weekly macro optimization",
            ]}
            type="ring"
          />
          <ModuleCards
            id="mobility"
            number="04"
            title="MOBILITY & RESILIENCE"
            description="Joint integrity, posture, and athletic movement. Ensuring the machine doesn't just produce force, but lasts."
            bullets={[
              "CARs (Controlled Articular Rotations)",
              "Joint longevity protocols",
              "Posture corrective drills",
            ]}
            type="sliders"
          />
          <ModuleCards
            id="recovery"
            number="05"
            title="RECOVERY & LONGEVITY"
            description="Sleep routines, stress reduction, and deload protocols. Peak performance requires peak recovery."
            bullets={[
              "HRV (Heart Rate Variability) analysis",
              "CNS fatigue monitoring",
              "Nutrient timing for sleep",
            ]}
            type="recovery"
          />
          <Pricing />
          <Results />
          <About />
          <FAQ />

          <section className="text-center">
            <div className="frosted rounded-3xl p-12 md:p-20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-acid-lime/10 blur-[80px]" />
              <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-8">
                READY TO <span className="text-acid-lime italic">EXECUTE?</span>
              </h2>
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <a
                  href="#apply"
                  className="px-10 py-4 rounded-full bg-acid-lime text-black font-bold text-lg hover:shadow-glow-strong transition-all transform hover:-translate-y-1"
                >
                  SCHEDULE CONSULT
                </a>
                <button
                  onClick={() => setIsApplyOpen(true)}
                  className="text-acid-lime hover:underline underline-offset-4 font-medium"
                >
                  Or apply in 2 minutes
                </button>
              </div>
            </div>
          </section>

          <Modal isOpen={isApplyOpen} onClose={() => setIsApplyOpen(false)}>
            <ApplyForm />
          </Modal>  
        </div>
      </main>
    </div>
  );
}
