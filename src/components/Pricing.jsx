const CheckIcon = () => (
  <svg className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 13l4 4L19 7" />
  </svg>
);

const tiers = [
  {
    name: 'Essentials',
    price: '$1,500',
    description: 'Core KPI visibility for brands that need a clean, reliable reporting foundation.',
    features: [
      'KPI dashboard setup with core Shopify metrics',
      'Revenue, orders, AOV, and conversion tracking',
      'Single ad platform integration (Meta or Google)',
      'Executive summary view',
      'Walkthrough session + documentation',
    ],
    cta: 'Book a Discovery Call',
    highlighted: false,
  },
  {
    name: 'Growth',
    price: '$2,500',
    description: 'Full reporting system for brands ready to see the complete picture across channels.',
    features: [
      'Everything in Essentials',
      'Multi-platform ad integration (Meta + Google)',
      'Financial performance reporting (revenue, spend, margins)',
      'ROAS and blended acquisition cost tracking',
      'Custom metric configuration for your business model',
      'Recorded walkthrough + team documentation',
    ],
    cta: 'Book a Discovery Call',
    highlighted: true,
  },
  {
    name: 'Scale',
    price: '$4,500',
    description: 'Advanced setup for brands with complex operations and multiple data sources.',
    features: [
      'Everything in Growth',
      'Additional data source integrations (email, affiliate, etc.)',
      'Multi-store or multi-brand reporting',
      'Custom financial models and margin calculations',
      'Cohort and LTV visibility setup',
      'Priority setup timeline',
      '30 days of post-handoff support',
    ],
    cta: 'Book a Discovery Call',
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-3">
            Pricing
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Simple, One-Time Pricing
          </h2>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Pay once. Get a complete reporting system. No monthly retainer, no surprise fees.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`rounded-2xl p-8 ${
                tier.highlighted
                  ? 'bg-brand-600 text-white ring-2 ring-brand-600 shadow-xl relative'
                  : 'bg-white border border-slate-200 shadow-sm'
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-amber-400 text-amber-900 text-xs font-semibold rounded-full">
                  Most Popular
                </div>
              )}

              <h3
                className={`text-lg font-semibold ${
                  tier.highlighted ? 'text-white' : 'text-slate-900'
                }`}
              >
                {tier.name}
              </h3>

              <div className="mt-4 flex items-baseline gap-1">
                <span
                  className={`text-4xl font-bold tracking-tight ${
                    tier.highlighted ? 'text-white' : 'text-slate-900'
                  }`}
                >
                  {tier.price}
                </span>
                <span
                  className={`text-sm ${
                    tier.highlighted ? 'text-brand-200' : 'text-slate-500'
                  }`}
                >
                  one-time
                </span>
              </div>

              <p
                className={`mt-3 text-sm leading-relaxed ${
                  tier.highlighted ? 'text-brand-100' : 'text-slate-600'
                }`}
              >
                {tier.description}
              </p>

              <hr
                className={`my-6 ${
                  tier.highlighted ? 'border-brand-500' : 'border-slate-200'
                }`}
              />

              <ul className="space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-2.5 text-sm">
                    {tier.highlighted ? (
                      <svg className="w-4 h-4 text-brand-200 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <CheckIcon />
                    )}
                    <span className={tier.highlighted ? 'text-brand-50' : 'text-slate-700'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#book-call"
                className={`mt-8 block text-center px-6 py-3 font-semibold rounded-lg transition-colors no-underline text-sm ${
                  tier.highlighted
                    ? 'bg-white text-brand-700 hover:bg-brand-50'
                    : 'bg-brand-600 text-white hover:bg-brand-700'
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-center mt-10 text-sm text-slate-500">
          Not sure which tier is right? Book a discovery call and we'll recommend the best fit for your brand.
        </p>
      </div>
    </section>
  );
}
