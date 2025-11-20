const CTA = () => {
  return (
    <section id="get-started" className="py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-blue-500 p-8 sm:p-12 text-center shadow-xl">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_30%,white,transparent_40%),radial-gradient(circle_at_70%_70%,white,transparent_40%)]" />
          <h3 className="relative text-3xl font-bold text-white">Ready to learn faster?</h3>
          <p className="relative mt-2 text-blue-100">Join thousands of learners leveling up their skills.</p>
          <a href="#" className="relative inline-flex items-center justify-center mt-6 rounded-full bg-orange-400 text-slate-900 px-6 py-3 font-medium shadow hover:bg-orange-300 transition">Get Started for Free</a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
