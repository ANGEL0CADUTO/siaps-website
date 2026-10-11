/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import SectionHeader from './SectionHeader';
import NewsPlaceholderCard from './NewsPlaceholderCard';
import { NEWS_LIST } from '../data';
import { Sparkles, CalendarRange } from 'lucide-react';

export default function NewsView() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <div className="py-10 space-y-12" id="news-view">
      {/* Page Intro */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-8 space-y-5 text-left"
          >
            <SectionHeader
              tag="Informativa Nazionale"
              title="News e informative sindacali"
              subtitle="Il nostro impegno si traduce anche nello studio costante dell’evoluzione legislativa. Questa sezione sarà il canale ufficiale di comunicazione per rassegne stampa, tutele collettive e approfondimenti di categoria."
            />
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
              In questo spazio SIAPS pubblicherà con costanza <strong>approfondimenti accurati</strong>, notizie utili, circolari e note esplicative volte a istruire gli iscritti sulle migliori <strong>strategie professionali e contrattuali</strong>. L’informazione veritiera e trasparente è un asse primario del nostro modo libero e autonomo di fare sindacato.
            </p>
          </motion.div>

          {/* Prudent visual sidebar box badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            whileHover={{ scale: 1.01 }}
            className="lg:col-span-4 bg-cobalt-500 text-white rounded-xl p-6 space-y-4 shadow-sm border border-cobalt-600 transition-all duration-200"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white">
              <CalendarRange size={20} />
            </div>
            <h4 className="text-sm font-semibold tracking-tight uppercase leading-none text-white">Rimani aggiornato</h4>
            <p className="text-xs text-cobalt-100/90 leading-normal font-normal">
              Stiamo allestendo la <strong>redazione sindacale SIAPS</strong>. Prossimamente potrai iscriverti alla nostra newsletter di categoria per non perdere nessuna <strong>notifica normativa importante</strong>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Placeholder Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-t border-slate-200/60 pt-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            id="news-grid-placeholders"
          >
            {NEWS_LIST.map((news) => (
              <motion.div key={news.id} variants={itemVariants}>
                <NewsPlaceholderCard news={news} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Subscription/Stay-Tuned Box */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -2 }}
          className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-xs text-center space-y-4 cursor-default transition-all duration-200"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-cobalt-50 text-cobalt-600">
            <Sparkles size={16} />
          </span>
          <h3 className="font-sans text-lg font-bold text-slate-900">
            Segreteria SIAPS in continuo movimento
          </h3>
          <p className="text-xs text-slate-500 max-w-lg mx-auto leading-relaxed font-normal">
            I canali informativi di SIAPS si arricchiranno man mano che le <strong>nomine territoriali</strong> diventeranno esecutive. Tutti gli aggiornamenti verranno caricati <strong>tempestivamente e in piena trasparenza</strong> su questa pagina.
          </p>
          <div className="text-[10px] text-slate-400 font-semibold tracking-wide flex items-center justify-center gap-1">
            <span>Aggiornato costantemente • SIAPS Autonomo</span>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
