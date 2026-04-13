import { useState } from 'react';

const faqs = [
  {
    question: 'Who is this for?',
    answer: 'SiteLiftHQ is built for Shopify and DTC ecommerce brands — typically doing $500K to $10M+ in annual revenue — that need clear, reliable KPI and financial reporting. We work with founders, operators, and marketing leads who are ready to stop guessing and start making decisions with real data.',
  },
  {
    question: 'What data sources do you integrate?',
    answer: 'We integrate Shopify as the core data source, plus advertising platforms like Meta Ads and Google Ads. Depending on your tier, we can also connect email platforms, affiliate networks, payment processors, and other tools your brand uses. During the discovery call, we\'ll map out exactly what makes sense for your setup.',
  },
  {
    question: 'How long does the setup take?',
    answer: 'Most setups are completed within 1–2 weeks from kickoff, depending on the complexity of your data sources and the tier you choose. The Scale tier includes priority timeline. You\'ll have a clear project timeline before we start.',
  },
  {
    question: 'Is this a one-time setup or an ongoing service?',
    answer: 'It\'s a one-time setup. We build your reporting system, walk you through it, and hand it off. There are no monthly retainers or recurring fees. The Scale tier includes 30 days of post-handoff support, and additional support is available if needed.',
  },
  {
    question: 'What do I get at the end of the engagement?',
    answer: 'You\'ll have a fully configured KPI dashboard and financial reporting system connected to your live data sources. You\'ll also receive a walkthrough session (recorded), written documentation, and a clear understanding of every metric being tracked.',
  },
  {
    question: 'Can you do custom work beyond these packages?',
    answer: 'Yes. If your brand has specific reporting needs, custom integrations, or a more complex data environment, we can scope a custom engagement. Book a discovery call and we\'ll figure out the right approach together.',
  },
  {
    question: 'Does this replace my bookkeeper or accountant?',
    answer: 'No. SiteLiftHQ focuses on operational KPI and performance reporting — think revenue tracking, ad spend visibility, ROAS, margins, and business performance metrics. We don\'t handle bookkeeping, tax preparation, or formal accounting. Our reporting complements what your accountant or bookkeeper does by giving you real-time operating visibility.',
  },
  {
    question: 'What tools do you use to build the dashboards?',
    answer: 'We work with industry-standard reporting and BI tools. During the discovery call, we\'ll recommend the best platform based on your needs, existing stack, and team preferences. The goal is a system your team will actually use — not something that collects dust.',
  },
];

function FAQItem({ faq }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 last:border-b-0">
      <button
        className="w-full flex items-center justify-between py-5 text-left cursor-pointer bg-transparent border-none"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="text-base font-medium text-slate-900 pr-4">{faq.question}</span>
        <svg
          className={`w-5 h-5 text-slate-500 flex-shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="pb-5 pr-10">
          <p className="text-sm text-slate-600 leading-relaxed">{faq.answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-brand-600 uppercase tracking-wider mb-3">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Common Questions
          </h2>
        </div>

        <div className="bg-white rounded-xl border border-slate-200 shadow-sm px-6 md:px-8">
          {faqs.map((faq) => (
            <FAQItem key={faq.question} faq={faq} />
          ))}
        </div>

        <p className="text-center mt-8 text-sm text-slate-500">
          Have a question that's not listed here?{' '}
          <a href="#book-call" className="text-brand-600 hover:text-brand-700 underline">
            Book a call
          </a>{' '}
          and we'll answer it directly.
        </p>
      </div>
    </section>
  );
}
