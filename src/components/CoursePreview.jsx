import { useState } from "react";

const courses = [
  { title: "Intro to Python", level: "Beginner", duration: "2h 10m", progress: 35, tag: "Popular" },
  { title: "Figma for Developers", level: "Intermediate", duration: "1h 40m", progress: 60, tag: "Trending" },
  { title: "SQL Crash Course", level: "Beginner", duration: "2h 25m", progress: 20, tag: "New" },
  { title: "AI Basics", level: "Beginner", duration: "1h 15m", progress: 10, tag: "Popular" },
  { title: "JavaScript Sprint", level: "Intermediate", duration: "3h 00m", progress: 75, tag: "Trending" },
  { title: "Data Viz with D3", level: "Intermediate", duration: "2h 05m", progress: 5, tag: "New" },
];

const tabs = ["Popular", "New", "Trending"];

const CoursePreview = () => {
  const [active, setActive] = useState("Popular");

  const filtered = courses.filter(c => c.tag === active);

  return (
    <section id="courses" className="py-20 bg-gradient-to-b from-blue-50/40 to-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Course previews</h2>
          <div className="hidden sm:flex items-center gap-2 rounded-full border border-slate-200 bg-white p-1">
            {tabs.map(t => (
              <button key={t} onClick={() => setActive(t)} className={`px-4 py-1.5 rounded-full text-sm transition ${active === t ? "bg-blue-600 text-white shadow" : "text-slate-700 hover:bg-slate-50"}`}>{t}</button>
            ))}
          </div>
        </div>

        <div className="sm:hidden mb-4">
          <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white p-1 w-full">
            {tabs.map(t => (
              <button key={t} onClick={() => setActive(t)} className={`flex-1 px-4 py-1.5 rounded-full text-sm transition ${active === t ? "bg-blue-600 text-white shadow" : "text-slate-700 hover:bg-slate-50"}`}>{t}</button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((c, i) => (
            <div key={i} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-slate-900">{c.title}</h3>
                <span className="text-xs px-2 py-0.5 rounded-full bg-blue-50 text-blue-700">{c.level}</span>
              </div>
              <p className="text-sm text-slate-500 mb-3">Duration: {c.duration}</p>
              <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-orange-500 to-orange-400" style={{ width: `${c.progress}%` }} />
              </div>
              <div className="mt-2 text-xs text-slate-500">Your progress: {c.progress}%</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursePreview;
