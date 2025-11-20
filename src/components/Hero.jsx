import { Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-blue-100" />
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-blue-200/40 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-orange-200/40 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3 py-1 text-xs text-blue-700 shadow-sm mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
            New: Interactive lessons and streaks
          </div>
          <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold tracking-tight text-slate-900">
            Learn faster, grow smarter.
          </h1>
          <p className="mt-4 text-lg text-slate-600 max-w-xl">
            Master new skills in minutes a day with bite-sized courses, interactive lessons, and real progress tracking.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#get-started" className="inline-flex items-center justify-center rounded-full bg-orange-500 text-white px-6 py-3 text-base font-medium shadow-lg hover:shadow-xl hover:bg-orange-600 transition">
              Start Learning Now
            </a>
            <a href="#demo" className="inline-flex items-center justify-center rounded-full border border-slate-300 text-slate-700 px-6 py-3 text-base font-medium hover:bg-slate-50 transition">
              <Play className="h-4 w-4 mr-2" /> Watch Demo
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 bg-gradient-to-tr from-blue-200/60 to-orange-200/60 rounded-3xl blur-2xl" />
          <div className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl">
            {/* Mock dashboard */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm text-slate-500">Weekly streak</p>
                <p className="text-2xl font-semibold text-slate-900">7 days 🔥</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-slate-500">Completion</p>
                <p className="text-2xl font-semibold text-blue-700">82%</p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {["Design Basics","JavaScript Sprint","Python Foundations","AI for Everyone"].map((title, idx) => (
                <div key={idx} className="rounded-xl border border-slate-200 p-4 shadow-sm hover:shadow-md transition">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-slate-900">{title}</h4>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-blue-50 text-blue-700">{idx % 2 === 0 ? "Beginner" : "Intermediate"}</span>
                  </div>
                  <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-600 to-blue-400" style={{ width: `${60 + idx * 8}%` }} />
                  </div>
                  <div className="mt-2 text-xs text-slate-500">{10 + idx * 2} lessons • {30 + idx * 10} min</div>
                </div>
              ))}
            </div>

            <div className="mt-6 grid grid-cols-3 gap-4">
              {[
                { label: "Badges", value: 12 },
                { label: "Courses", value: 8 },
                { label: "Hours saved", value: 42 },
              ].map((s, i) => (
                <div key={i} className="rounded-xl border border-slate-200 p-4 text-center">
                  <div className="text-2xl font-semibold text-blue-700">{s.value}</div>
                  <div className="text-xs text-slate-500">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
