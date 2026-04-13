const audiences = [
  {
    title: 'Shopify Brand Founders',
    description: 'You\'re growing fast but can\'t clearly see where the money is going or whether your unit economics actually work.',
  },
  {
    title: 'Ecommerce Operators & GMs',
    description: 'You\'re responsible for performance but spend too much time pulling reports instead of making decisions.',
  },
  {
    title: 'Marketing Leads at DTC Brands',
    description: 'You need to connect ad spend to actual business outcomes — not just platform-reported ROAS.',
  },
  {
    title: 'Brands Doing $500K–$10M+',
    description: 'You\'ve outgrown spreadsheets but aren\'t ready for a full-time data hire or an enterprise BI tool.',
  },
];

export default function WhoItsFor() {
  return (
    <section className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-3">
              Who This Is For
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              Built for Shopify Brands That Are Done Guessing
            </h2>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              If you're running a real Shopify business and you still don't have a clean, reliable
              way to see your key metrics — this is for you. We work with founders, operators,
              and marketing leads who are ready for clarity.
            </p>
            <a
              href="#book-call"
              className="mt-8 inline-flex items-center px-6 py-3 bg-brand-600 text-white font-semibold rounded-lg hover:bg-brand-700 transition-colors no-underline text-sm"
            >
              Book a Free Discovery Call
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <div className="space-y-4">
            {audiences.map((audience) => (
              <div key={audience.title} className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="text-base font-semibold text-slate-900 mb-0.5">{audience.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{audience.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
