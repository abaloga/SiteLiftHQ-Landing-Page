export default function Footer() {
  return (
    <footer className="bg-slate-900 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 text-white font-semibold text-lg no-underline">
            <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="32" rx="6" fill="#2563eb" />
              <path d="M9 10l4 4.5L16 11l3 3.5L22 10v12H9V10z" fill="rgba(255,255,255,0.3)" />
              <path d="M9 20l4-4 3 3 3-5 3 4" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </svg>
            SiteLiftHQ
          </a>

          {/* Links */}
          <div className="flex items-center gap-8 text-sm">
            <a href="#how-it-works" className="text-slate-400 hover:text-white no-underline transition-colors">
              How It Works
            </a>
            <a href="#pricing" className="text-slate-400 hover:text-white no-underline transition-colors">
              Pricing
            </a>
            <a href="#faq" className="text-slate-400 hover:text-white no-underline transition-colors">
              FAQ
            </a>
            <a href="#book-call" className="text-slate-400 hover:text-white no-underline transition-colors">
              Contact
            </a>
          </div>
        </div>

        <hr className="my-8 border-slate-800" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} SiteLiftHQ. All rights reserved.</p>
          <p>KPI &amp; financial reporting systems for Shopify brands.</p>
        </div>
      </div>
    </footer>
  );
}
