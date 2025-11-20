const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/mo",
    highlight: false,
    features: ["Access to free courses", "Basic progress tracking", "Community support"],
  },
  {
    name: "Pro",
    price: "$12",
    period: "/mo",
    highlight: true,
    features: ["All courses", "Advanced analytics", "Certificates", "Offline access"],
  },
  {
    name: "Teams",
    price: "$8",
    period: "/user/mo",
    highlight: false,
    features: ["Team dashboards", "Seat management", "SSO & integrations"],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-white to-blue-50/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Simple, transparent pricing</h2>
          <p className="mt-3 text-slate-600">Start free. Upgrade when you're ready to go faster.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <div key={p.name} className={`rounded-2xl border p-6 shadow-sm transition ${p.highlight ? "bg-blue-600 text-white border-blue-600 scale-[1.02]" : "bg-white border-slate-200"}`}>
              <h3 className={`text-lg font-semibold ${p.highlight ? "text-white" : "text-slate-900"}`}>{p.name}</h3>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-4xl font-bold">{p.price}</span>
                <span className={`text-sm ${p.highlight ? "text-blue-50" : "text-slate-500"}`}>{p.period}</span>
              </div>
              <ul className="mt-4 space-y-2">
                {p.features.map((f, i) => (
                  <li key={i} className={p.highlight ? "text-blue-50" : "text-slate-600"}>• {f}</li>
                ))}
              </ul>
              <button className={`mt-6 w-full rounded-full px-4 py-2 font-medium shadow ${p.highlight ? "bg-orange-400 text-slate-900 hover:bg-orange-300" : "bg-orange-500 text-white hover:bg-orange-600"}`}>Choose plan</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
