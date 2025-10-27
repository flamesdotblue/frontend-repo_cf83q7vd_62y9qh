import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Shield, Zap, Rocket } from 'lucide-react';

const features = [
  {
    icon: Bot,
    title: 'Natural conversations',
    desc: 'Human-like dialogue with intent detection, memory, and context windows for fluid support.',
  },
  {
    icon: Shield,
    title: 'Enterprise-grade security',
    desc: 'SSO, audit logs, role-based access, and SOC2-ready data handling by default.',
  },
  {
    icon: Zap,
    title: 'Real-time latency',
    desc: 'Ultra-low round trip with streaming and edge inference for snappy responses.',
  },
  {
    icon: Rocket,
    title: 'Deploy in minutes',
    desc: 'SDKs and templates to integrate with your stack and go live instantly.',
  },
];

const Features = () => {
  return (
    <section id="features" className="relative bg-slate-950 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl text-white md:text-4xl">Everything you need to launch</h2>
          <p className="mt-3 text-slate-300">Designed for reliability, speed, and scale.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition hover:border-purple-400/30 hover:bg-white/[0.06]"
            >
              <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-purple-600/30 to-blue-600/30 p-3 ring-1 ring-white/10">
                <f.icon className="h-5 w-5 text-purple-300" />
              </div>
              <h3 className="text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-300">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
