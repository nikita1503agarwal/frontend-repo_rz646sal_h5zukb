import { Quote } from "lucide-react";

const quotes = [
  {
    name: "Ava Thompson",
    role: "Product Manager",
    text: "Faster made it effortless to upskill in just a few minutes a day. My team loves it.",
  },
  {
    name: "Liam Chen",
    role: "Data Analyst",
    text: "The bite-sized lessons fit perfectly between meetings. My streak keeps me motivated!",
  },
  {
    name: "Sofia Martinez",
    role: "Designer",
    text: "Clear, interactive courses and certificates I can share. I learned more in less time.",
  },
];

const logos = ["/logos/company-1.svg","/logos/company-2.svg","/logos/company-3.svg","/logos/company-4.svg"]; // placeholders

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Loved by learners and teams</h2>
          <p className="mt-3 text-slate-600">Thousands of professionals trust Faster to stay ahead.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {quotes.map((q, i) => (
            <div key={i} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <Quote className="h-6 w-6 text-blue-600 mb-3" />
              <p className="text-slate-700">“{q.text}”</p>
              <div className="mt-4 text-sm text-slate-500">{q.name} • {q.role}</div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-8 opacity-70 flex-wrap">
          {logos.map((src, i) => (
            <div key={i} className="h-10 w-28 rounded-md bg-slate-100" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
