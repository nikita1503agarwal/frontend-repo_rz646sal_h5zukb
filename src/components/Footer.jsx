import { Twitter, Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-white border-t border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="h-8 w-8 rounded-md bg-gradient-to-br from-blue-600 to-blue-500 shadow-sm flex items-center justify-center text-white font-bold">F</div>
              <span className="text-lg font-semibold tracking-tight text-slate-900">Faster</span>
            </div>
            <p className="text-sm text-slate-600">Learn new skills quickly with interactive, bite-sized lessons.</p>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-3">Product</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-slate-900">About</a></li>
              <li><a href="#" className="hover:text-slate-900">Blog</a></li>
              <li><a href="#" className="hover:text-slate-900">Help Center</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-3">Legal</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-slate-900">Terms</a></li>
              <li><a href="#" className="hover:text-slate-900">Privacy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-slate-900 mb-3">Follow</h4>
            <div className="flex items-center gap-3 text-slate-600">
              <a href="#" aria-label="Twitter" className="hover:text-slate-900"><Twitter className="h-5 w-5" /></a>
              <a href="#" aria-label="GitHub" className="hover:text-slate-900"><Github className="h-5 w-5" /></a>
              <a href="#" aria-label="LinkedIn" className="hover:text-slate-900"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>
        </div>

        <div className="mt-10 text-xs text-slate-500">© {new Date().getFullYear()} Faster. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
