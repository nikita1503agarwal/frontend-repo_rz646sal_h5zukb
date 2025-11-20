import { Gauge, LineChart, Certificate, Sparkles } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Bite-sized lessons",
    desc: "Learn in focused, digestible sessions designed for busy schedules.",
  },
  {
    icon: Gauge,
    title: "Personalized paths",
    desc: "Adaptive recommendations that guide you to your goals faster.",
  },
  {
    icon: LineChart,
    title: "Progress analytics",
    desc: "See streaks, completion and time saved with clear insights.",
  },
  {
    icon: Certificate,
    title: "Certificates",
    desc: "Earn shareable credentials to showcase your skills.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gradient-to-b from-white to-blue-50/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Built to help you learn fast</h2>
          <p className="mt-3 text-slate-600">Everything you need to go from curious to confident, in record time.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100 text-orange-600 mb-4">
                <Icon className="h-5 w-5" />
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

export default Features;
