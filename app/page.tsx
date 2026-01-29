import Hero from "@/components/Hero";
import ModuleCards from "@/components/ModuleCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Hero />

      <div className="max-w-7xl mx-auto space-y-24 mt-24">
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
      </div>
    </main>
  );
}
