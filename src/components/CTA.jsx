import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section id="get-started" className="relative overflow-hidden bg-gradient-to-b from-slate-950 to-slate-900 py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-1/4 top-1/3 h-72 w-72 rounded-full bg-purple-600/20 blur-3xl" />
        <div className="absolute left-1/3 top-1/2 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-10 text-center backdrop-blur"
        >
          <h3 className="font-display text-3xl text-white md:text-4xl">Ready to build your AI voice agent?</h3>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            Start for free, then choose a plan that fits your use case. No credit card required.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-5 py-3 font-medium text-white shadow-lg shadow-purple-600/20 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-purple-400"
            >
              Create account
              <ArrowRight size={18} className="ml-2" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 font-medium text-white/90 backdrop-blur transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
            >
              Learn more
            </a>
          </div>

          <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              ['99.9% uptime', 'Reliable, all day every day'],
              ['Global edge', 'Low latency worldwide'],
              ['Compliance', 'SOC2-ready process'],
            ].map(([title, subtitle]) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <div className="text-sm font-semibold text-white">{title}</div>
                <div className="text-xs text-slate-300">{subtitle}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center text-sm text-slate-400 md:flex-row md:text-left">
          <p>© {new Date().getFullYear()} Auralink AI Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Status</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
