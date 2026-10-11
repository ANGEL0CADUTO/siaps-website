/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Download, ShieldCheck, Sparkles } from 'lucide-react';
// @ts-ignore
import siapsHero from '../assets/demo-1.svg';

interface HeroProps {
  onLearnMore: () => void;
  onDownloadModule: () => void;
}

export default function Hero({ onLearnMore, onDownloadModule }: HeroProps) {
  // Container stagger effects
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      }
    }
  };

  // Text entry animation (smooth cubic-bezier fade and slide)
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] // Apple-like smooth cubic ease
      }
    }
  };

  return (
    <section className="relative overflow-hidden bg-white py-8 sm:py-10 lg:py-16 xl:py-20 border-b border-gray-100" id="hero-section">
      {/* Absolute Decorative Grid and Blurred Blue Lights */}
      <div className="absolute inset-0 bg-grid-pattern opacity-70" />
      <div className="absolute top-0 right-1/4 h-72 w-72 rounded-full bg-cobalt-100/40 gradient-blur-circle" />
      <div className="absolute bottom-12 left-10 h-64 w-64 rounded-full bg-indigo-50/40 gradient-blur-circle" />

      <motion.div
        className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-12 items-center">

          {/* Hero Left Content Column */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-5 text-center lg:text-left">
            {/* Tagline Badge */}
            <motion.div
              variants={textVariants}
              className="inline-flex items-center gap-1.5 rounded-full bg-cobalt-50 px-3 py-1 text-xs font-bold text-cobalt-700 border border-cobalt-100/50 w-fit mx-auto lg:mx-0 shadow-xs"
            >
              <Sparkles size={13} className="text-cobalt-500" />
              <span>Nuova Presenza Istituzionale Sindacale Autonoma</span>
            </motion.div>

            {/* Title / Payoff */}
            <motion.h1
              variants={textVariants}
              className="font-sans text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl xl:text-6xl leading-tight"
            >
              SIAPS
              <span className="block mt-1 text-xs sm:text-sm uppercase tracking-widest text-slate-500 font-extrabold">
                Sindacato Italiano Autonomo<br />Professioni Sanitarie
              </span>
              <span className="block mt-2 text-cobalt-500 font-sans font-extrabold">
                Una nuova voce per le professioni sanitarie
              </span>
            </motion.h1>

            {/* Mobile Hero Image (visible only on mobile viewports under the title) */}
            <div className="block lg:hidden my-6 w-full">
              <div className="relative aspect-[1672/941] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-xl">
                <img
                  src={siapsHero}
                  alt="SIAPS Professioni Sanitarie"
                  className="h-full w-full object-cover brightness-95 contrast-105 object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-slate-900/5 to-transparent" />
              </div>
            </div>

            {/* Subtitle */}
            <motion.p
              variants={textVariants}
              className="mx-auto lg:mx-0 max-w-xl text-sm text-slate-700 sm:text-base xl:text-lg leading-relaxed font-normal"
            >
              Rappresentanza <strong>autonoma</strong>, tutela <strong>sindacale</strong> e valorizzazione <strong>professionale</strong> per chi opera ogni giorno nel sistema sanitario.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={textVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2"
            >
              <motion.button
                onClick={onDownloadModule}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-cobalt-500 px-5 py-3 text-sm font-bold text-white shadow-md shadow-cobalt-500/10 hover:bg-cobalt-600 hover:shadow-lg transition-all duration-150 cursor-pointer"
                id="hero-cta-download"
              >
                <Download size={16} />
                <span>Scarica il modulo di iscrizione</span>
              </motion.button>

              <motion.button
                onClick={onLearnMore}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-350 bg-white px-5 py-3 text-sm font-bold text-slate-800 hover:bg-slate-50 hover:text-slate-950 transition-all cursor-pointer"
                id="hero-cta-learn"
              >
                <span>Scopri la nostra Mission</span>
                <ArrowRight size={15} />
              </motion.button>
            </motion.div>

            {/* Highlights Checkmark list */}
            <motion.div
              variants={textVariants}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-5 pt-4 text-[11px] sm:text-xs text-slate-700 font-medium border-t border-slate-200"
            >
              <div className="flex items-center gap-1.5">
                <ShieldCheck size={16} className="text-cobalt-500" />
                <span>Sindacato Italiano <strong>Autonomo</strong> Professioni Sanitarie</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck size={16} className="text-cobalt-500" />
                <span>Tutela <strong>Legale</strong> & <strong>Contrattuale</strong></span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck size={16} className="text-cobalt-500" />
                <span>Rappresentanza <strong>Indipendente</strong></span>
              </div>
            </motion.div>
          </div>

          {/* Hero Right Graphic Column (desktop only) */}
          <div className="hidden lg:block lg:col-span-7 relative w-full">
            <div className="relative w-full max-w-3xl lg:max-w-[820px] xl:max-w-[940px] lg:-mr-8 xl:-mr-16 ml-auto flex justify-end">
              {/* Back ambient card with new premium SIAPS HERO photography */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="relative aspect-[1672/941] w-full overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-xl"
              >
                <img
                  src={siapsHero}
                  alt="SIAPS Professioni Sanitarie"
                  className="h-full w-full object-cover brightness-95 contrast-105 object-center"
                />
                {/* Elegant overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-slate-900/5 to-transparent" />
              </motion.div>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
