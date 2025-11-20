const Teams = () => {
  return (
    <section id="teams" className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-gradient-to-r from-blue-50 to-white p-8 sm:p-12 shadow-sm">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">Built for teams</h3>
              <p className="mt-3 text-slate-600">Give your company a faster way to upskill with shared workspaces, team analytics, and seat management.</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700 list-disc pl-5">
                <li>Track team progress and engagement</li>
                <li>Assign learning paths by role</li>
                <li>SSO and popular integrations</li>
              </ul>
              <a href="#pricing" className="inline-flex items-center mt-6 rounded-full bg-orange-500 text-white px-5 py-2.5 text-sm font-medium shadow hover:bg-orange-600 transition">See team plans</a>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {["Engineering Onboarding","Product Excellence","Data Literacy","Design Foundations"].map((t, i) => (
                <div key={i} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="text-xs text-blue-700 bg-blue-50 inline-block px-2 py-0.5 rounded-full mb-2">Template</div>
                  <h4 className="font-semibold text-slate-900">{t}</h4>
                  <p className="text-xs text-slate-500 mt-1">Curated lessons and checkpoints</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teams;
