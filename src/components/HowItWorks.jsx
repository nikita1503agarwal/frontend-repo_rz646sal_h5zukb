import { Search, BookOpenCheck, Trophy } from "lucide-react";

const steps = [
  { icon: Search, title: "Choose a skill", desc: "Pick from tech, design, data, and more." },
  { icon: BookOpenCheck, title: "Learn in short sessions", desc: "Interactive lessons you can finish anytime." },
  { icon: Trophy, title: "Track your progress", desc: "Streaks, insights, and milestones keep you motivated." },
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">How it works</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <div key={i} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition text-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 mb-4">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
