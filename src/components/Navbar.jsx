import { Menu } from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all ${scrolled ? "bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm" : "bg-transparent"}`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-blue-600 to-blue-500 shadow-sm flex items-center justify-center text-white font-bold">F</div>
            <span className="text-xl font-semibold tracking-tight text-slate-900">Faster</span>
          </a>

          <div className="hidden md:flex items-center gap-8 text-slate-700">
            <a href="#courses" className="hover:text-slate-900 transition">Courses</a>
            <a href="#features" className="hover:text-slate-900 transition">Features</a>
            <a href="#pricing" className="hover:text-slate-900 transition">Pricing</a>
            <a href="#teams" className="hover:text-slate-900 transition">For Teams</a>
            <a href="#" className="hover:text-slate-900 transition">Sign In</a>
            <a href="#get-started" className="inline-flex items-center rounded-full bg-orange-500 text-white px-4 py-2 text-sm font-medium shadow hover:bg-orange-600 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-orange-500">Get Started</a>
          </div>

          <button className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white/80 backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 py-3 flex flex-col gap-2 text-slate-700">
            <a href="#courses" className="py-2">Courses</a>
            <a href="#features" className="py-2">Features</a>
            <a href="#pricing" className="py-2">Pricing</a>
            <a href="#teams" className="py-2">For Teams</a>
            <a href="#" className="py-2">Sign In</a>
            <a href="#get-started" className="inline-flex items-center justify-center rounded-full bg-orange-500 text-white px-4 py-2 text-sm font-medium shadow hover:bg-orange-600 transition">Get Started</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
