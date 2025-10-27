import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-gradient-to-tr from-purple-600/30 via-blue-500/20 to-orange-400/20 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-20 md:grid-cols-2 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80 backdrop-blur">
            <Sparkles size={14} className="text-purple-300" />
            Next-gen AI voice agent platform
          </div>
          <h1 className="font-display text-4xl leading-tight text-white sm:text-5xl md:text-6xl">
            Elevate customer conversations with an AI voice agent
          </h1>
          <p className="mt-5 max-w-xl text-base text-slate-300 md:text-lg">
            Launch a voice-first assistant that listens, understands, and resolves in real time. Fast, secure, and built for modern teams.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-5 py-3 font-medium text-white shadow-lg shadow-purple-600/20 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-purple-400"
            >
              Get started
              <ArrowRight size={18} className="ml-2" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-5 py-3 font-medium text-white/90 backdrop-blur transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20"
            >
              See features
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 items-center gap-6 opacity-80 sm:max-w-md">
            <div className="h-8 rounded bg-white/5" />
            <div className="h-8 rounded bg-white/5" />
            <div className="h-8 rounded bg-white/5" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative h-[420px] w-full sm:h-[520px] md:h-[560px] lg:h-[640px]"
        >
          <div className="absolute inset-0 rounded-3xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent shadow-2xl shadow-purple-900/10 backdrop-blur">
            <Spline
              scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
