export default function Hero() {
  return (
    <section className="pt-28 pb-20 md:pt-36 md:pb-28 bg-gradient-to-b from-brand-50/60 to-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-100 text-brand-700 text-xs font-medium rounded-full mb-6">
          <span className="w-1.5 h-1.5 bg-brand-500 rounded-full" />
          Built for Shopify Brands
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight tracking-tight">
          Finally See What's Actually{' '}
          <span className="text-brand-600">Happening</span> in Your Business
        </h1>

        <p className="mt-6 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          SiteLiftHQ sets up a clear, decision-ready KPI and financial reporting system for your
          Shopify brand — so you stop guessing and start operating with real numbers.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#book-call"
            className="inline-flex items-center px-7 py-3.5 bg-brand-600 text-white font-semibold rounded-lg hover:bg-brand-700 transition-colors no-underline text-base shadow-sm"
          >
            Book a Free Discovery Call
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center px-7 py-3.5 border border-slate-300 text-slate-700 font-medium rounded-lg hover:bg-slate-50 transition-colors no-underline text-base"
          >
            See How It Works
          </a>
        </div>

        <p className="mt-6 text-sm text-slate-500">
          One-time setup. No monthly retainer. Clarity from day one.
        </p>

        {/* Abstract dashboard illustration */}
        <div className="mt-14 max-w-3xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-6 md:p-8">
            {/* Top bar */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-300" />
              <div className="w-3 h-3 rounded-full bg-yellow-300" />
              <div className="w-3 h-3 rounded-full bg-green-300" />
              <div className="ml-4 h-3 w-40 bg-slate-100 rounded" />
            </div>

            {/* Metric cards row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {[
                { label: 'Revenue', color: 'bg-brand-500' },
                { label: 'Ad Spend', color: 'bg-amber-500' },
                { label: 'Margin', color: 'bg-emerald-500' },
                { label: 'ROAS', color: 'bg-violet-500' },
              ].map((metric) => (
                <div key={metric.label} className="bg-slate-50 rounded-lg p-4 text-left">
                  <div className="text-xs text-slate-500 mb-1">{metric.label}</div>
                  <div className="h-5 w-20 bg-slate-200 rounded mb-2" />
                  <div className={`h-1.5 rounded-full ${metric.color}`} style={{ width: `${55 + Math.random() * 40}%` }} />
                </div>
              ))}
            </div>

            {/* Chart area */}
            <div className="bg-slate-50 rounded-lg p-4 h-32 flex items-end gap-1.5">
              {[40, 55, 35, 65, 50, 75, 60, 80, 70, 85, 65, 90, 78, 88, 72, 95].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 bg-brand-200 rounded-t hover:bg-brand-400 transition-colors"
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
