import React, { useState } from "react";
import { Check, ArrowRight, ArrowLeft, Loader2 } from "lucide-react";

export default function ApplyForm() {
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    objective: "Aggressive Body Recomposition",
    obstacle: "",
    trainingAge: "0-2 Years",
    budget: "$499 - $899 / Month",
    commitment: "10",
    whyNow: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    setSubmitting(true);

    console.log("Submitting Data:", formData);

    // Simulate API call
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 2000);
  };

  if (submitted) {
    <div className="max-w-2xl mx-auto mt-12 frosted p-12 rounded-3xl text-center space-y-8 animate-fade-up">
      <div className="w-20 h-20 bg-acid-lime/20 rounded-full flex items-center justify-center mx-auto shadow-glow">
        <Check size={40} className="text-acid-lime" />
      </div>
      <div className="space-y-4">
        <h2 className="text-4xl font-display font-bold">ANALYSIS UNDERWAY.</h2>
        <p className="text-white/60">
          Your profile has been received. I review every application personally.
          You'll hear from me within 24 hours.
        </p>
      </div>
      <div className="p-6 bg-white/5 rounded-xl border border-dashed border-white/20">
        <div className="text-[10px] font-black tracking-widest text-white/40 mb-4 uppercase">
          Next Steps
        </div>
        <p className="text-sm text-white/80">
          While you wait, keep an eye on your inbox. We'll schedule a 15-minute
          diagnostic call to dive deeper into your biomarkers.
        </p>
      </div>
      <button
        onClick={() => (window.location.hash = "")}
        className="text-acid-lime hover:underline"
      >
        Back to site
      </button>
    </div>;
  }

  return (
    <div className="max-w-3xl mx-auto mt-12 px-4 animate-fade-up">
      <div className="mb-12 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-4 uppercase">
          Let's Build the <span className="text-acid-lime">Machine.</span>
        </h1>
        <p className="text-white/50 max-w-lg">
          Complete the diagnostic below. I only work with 5 new clients per
          month to ensure elite-level attention.
        </p>
      </div>

      <div className="frosted rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
        <div className="flex justify-between items-center mb-12">
          <div
            className={`flex items-center gap-2 ${step === 1 ? "text-acid-lime" : "text-white/30"}`}
          >
            <span
              className={`w-8 h-8 rounded-full border flex items-center justify-center font-bold text-xs ${step === 1 ? "border-acid-lime" : "border-white/10"}`}
            >
              1
            </span>
            <span className="text-[10px] font-black tracking-widest uppercase">
              Objectives
            </span>
          </div>
          <div className="h-px bg-white/5 flex-1 mx-4" />
          <div
            className={`flex items-center gap-2 ${step === 2 ? "text-acid-lime" : "text-white/30"}`}
          >
            <span
              className={`w-8 h-8 rounded-full border flex items-center justify-center font-bold text-xs ${step === 2 ? "border-acid-lime" : "border-white/10"}`}
            >
              2
            </span>
            <span className="text-[10px] font-black tracking-widest uppercase">
              Execution
            </span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {step === 1 ? (
            <div className="space-y-6 animate-fade-in">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-white/40 uppercase tracking-widest ml-1">
                    Full Name
                  </label>
                  <input
                    required
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    type="text"
                    placeholder="John Doe"
                    className="w-full bg-graphite-900/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-acid-lime/50 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-white/40 uppercase tracking-widest ml-1">
                    Email Address
                  </label>
                  <input
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="john@example.com"
                    className="w-full bg-graphite-900/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-acid-lime/50 transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-white/40 uppercase tracking-widest ml-1">
                  Primary Objective
                </label>
                <select
                  name="objective"
                  value={formData.objective}
                  onChange={handleChange}
                  className="w-full bg-graphite-900/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-acid-lime/50 transition-colors appearance-none"
                >
                  <option>Aggressive Body Recomposition</option>
                  <option>Elite Strength & Power</option>
                  <option>Longevity & Bio-Optimization</option>
                  <option>VO2 Max / Performance Engine</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-white/40 uppercase tracking-widest ml-1">
                  Current Obstacle
                </label>
                <textarea
                  name="obstacle"
                  value={formData.obstacle}
                  onChange={handleChange}
                  rows={4}
                  placeholder="What is stopping you from reaching the next level?"
                  className="w-full bg-graphite-900/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-acid-lime/50 transition-colors"
                />
              </div>
              <button
                type="button"
                onClick={() => setStep(2)}
                // Disabled check to ensure Step 1 is filled
                disabled={!formData.fullName || !formData.email}
                className="w-full py-4 rounded-full bg-acid-lime text-black font-bold flex items-center justify-center gap-2 hover:shadow-glow transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                PROCEED TO STEP 2 <ArrowRight size={18} />
              </button>
            </div>
          ) : (
            <div className="space-y-6 animate-fade-in">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-white/40 uppercase tracking-widest ml-1">
                    Training Age (Years)
                  </label>
                  <select
                    name="trainingAge"
                    value={formData.trainingAge}
                    onChange={handleChange}
                    className="w-full bg-graphite-900/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-acid-lime/50 transition-colors appearance-none"
                  >
                    <option>0-2 Years</option>
                    <option>2-5 Years</option>
                    <option>5-10 Years</option>
                    <option>10+ Years</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-white/40 uppercase tracking-widest ml-1">
                    Budget Comfort
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full bg-graphite-900/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-acid-lime/50 transition-colors appearance-none"
                  >
                    <option>$499 - $899 / Month</option>
                    <option>$899 - $1500 / Month</option>
                    <option>$2000+ / Quarter (Elite Executive)</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-white/40 uppercase tracking-widest ml-1 flex justify-between">
                  <span>Commitment Level</span>
                  <span className="text-acid-lime">
                    {formData.commitment}/10
                  </span>
                </label>
                <input
                  type="range"
                  name="commitment"
                  min="1"
                  max="10"
                  value={formData.commitment}
                  onChange={handleChange}
                  className="w-full accent-acid-lime"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-white/40 uppercase tracking-widest ml-1">
                  Why Now?
                </label>
                <textarea
                  required
                  name="whyNow"
                  value={formData.whyNow}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Why is this the right time for you to commit?"
                  className="w-full bg-graphite-900/50 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-acid-lime/50 transition-colors"
                />
              </div>
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="..."
                >
                  {" "}
                  <ArrowLeft size={18} /> BACK{" "}
                </button>
                <button disabled={submitting} className="...">
                  {submitting ? (
                    <Loader2 size={24} className="animate-spin" />
                  ) : (
                    "FINALIZE APPLICATION"
                  )}
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
