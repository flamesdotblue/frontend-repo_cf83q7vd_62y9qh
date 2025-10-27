import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    price: '$19',
    period: 'month',
    highlight: false,
    features: [
      '1,000 minutes included',
      'Email support',
      'Community access',
      'Basic analytics',
    ],
  },
  {
    name: 'Pro',
    price: '$79',
    period: 'month',
    highlight: true,
    features: [
      '10,000 minutes included',
      'Priority support',
      'Advanced analytics',
      'Multi-agent routing',
    ],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    highlight: false,
    features: [
      'Unlimited minutes',
      'SSO & RBAC',
      'SLAs & training',
      'Dedicated success',
    ],
  },
];

const Card = ({ tier }) => (
  <div
    className={
      'relative flex h-full flex-col rounded-2xl border p-6 transition ' +
      (tier.highlight
        ? 'border-purple-400/40 bg-white/[0.07] shadow-lg shadow-purple-700/10'
        : 'border-white/10 bg-white/[0.04]')
    }
  >
    {tier.highlight && (
      <div className="absolute -top-3 left-6 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 px-3 py-1 text-xs font-medium text-white shadow">
        Most popular
      </div>
    )}
    <div>
      <h3 className="text-xl font-semibold text-white">{tier.name}</h3>
      <div className="mt-3 flex items-end gap-1 text-white">
        <span className="text-4xl font-bold">{tier.price}</span>
        {tier.period && <span className="mb-1 text-sm text-slate-300">/ {tier.period}</span>}
      </div>
    </div>

    <ul className="mt-6 flex flex-1 flex-col gap-3 text-sm">
      {tier.features.map((f) => (
        <li key={f} className="flex items-start gap-3 text-slate-200">
          <Check className="mt-0.5 h-4 w-4 text-emerald-400" />
          <span>{f}</span>
        </li>
      ))}
    </ul>

    <a
      href="#get-started"
      className={
        'mt-6 inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 ' +
        (tier.highlight
          ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-600/20 hover:brightness-110 focus:ring-purple-400'
          : 'border border-white/10 bg-white/5 text-white/90 hover:bg-white/10 focus:ring-white/20')
      }
    >
      Choose {tier.name}
    </a>
  </div>
);

const Pricing = () => {
  return (
    <section id="pricing" className="relative bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl text-white md:text-4xl">Simple, transparent pricing</h2>
          <p className="mt-3 text-slate-300">Scale up as you grow. Cancel anytime.</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mt-12 grid gap-6 md:grid-cols-3"
        >
          {tiers.map((t) => (
            <Card key={t.name} tier={t} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
