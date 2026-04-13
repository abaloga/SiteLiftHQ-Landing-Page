const steps = [
  {
    number: '01',
    title: 'Discovery Call',
    description: 'We learn about your brand, your current reporting setup, and where the gaps are. We\'ll identify which metrics actually matter for your business.',
    detail: '30 minutes — no obligation',
  },
  {
    number: '02',
    title: 'Data & System Audit',
    description: 'We map out your data sources — Shopify, ad platforms, payment processors — and design the reporting structure that fits your operations.',
    detail: 'You\'ll see the plan before we build',
  },
  {
    number: '03',
    title: 'Build & Configure',
    description: 'We set up your KPI dashboard, connect your data sources, and build out the financial and performance reports you\'ll actually use.',
    detail: 'Done-for-you — no technical work on your end',
  },
  {
    number: '04',
    title: 'Walkthrough & Handoff',
    description: 'We walk you through every report and metric so you know exactly how to read and use your new system from day one.',
    detail: 'Includes documentation and recorded walkthrough',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-3">
            How It Works
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            From Scattered Data to Complete Clarity in Four Steps
          </h2>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            We handle the entire setup. You stay focused on running your brand.
          </p>
        </div>

        <div className="space-y-0">
          {steps.map((step, index) => (
            <div key={step.number} className="relative flex gap-6 md:gap-8">
              {/* Vertical line connector */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-brand-600 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className="w-px flex-1 bg-brand-200 my-2" />
                )}
              </div>

              <div className={`pb-12 ${index === steps.length - 1 ? 'pb-0' : ''}`}>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">{step.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-2">{step.description}</p>
                <span className="inline-block text-xs font-medium text-brand-600 bg-brand-50 px-3 py-1 rounded-full">
                  {step.detail}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
