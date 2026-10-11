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
import { Sparkles, Scale, ShieldCheck } from 'lucide-react';
// @ts-ignore
import siapsMissione from '../assets/demo-1.svg';
// @ts-ignore
import objectiveImage from '../assets/demo-1.svg';

export default function MissioneView() {
  const capisaldi = [
    {
      title: 'Autonomia Sindacale',
      desc: <span>Nati liberi da <strong>vincoli di partito</strong>, correnti esterne o condizionamenti confederali generici per garantire il <strong>100% dell’attenzione</strong> sulla specificità delle professioni rappresentate.</span>,
      icon: <ShieldCheck size={20} className="text-cobalt-500" />
    },
    {
      title: 'Esperienza Concreta',
      desc: <span>Formato da <strong>professionisti sanitari d’area</strong> con comprovata esperienza ordinistica e sindacale, pronti a tradurre ogni sofferenza quotidiana in <strong>trattative contrattuali solide</strong>.</span>,
      icon: <Sparkles size={20} className="text-cobalt-500" />
    },
    {
      title: 'Pari Dignità',
      desc: <span>Riteniamo fondamentale eliminare il <strong>distacco normativo ed economico</strong> che penalizza chi opera nelle strutture accreditate, nei servizi privati o in <strong>libera professione</strong>.</span>,
      icon: <Scale size={20} className="text-cobalt-500" />
    }
  ];

  const gridContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 90,
        damping: 15
      }
    }
  };

  return (
    <div className="space-y-16 py-10" id="missione-view">
      {/* Intro Presentation - Perché Nasce SIAPS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-center">

          {/* Text wrapper & Mobile Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-6 text-center lg:text-left"
          >
            <SectionHeader
              tag="Le Origini"
              title="Perché nasce SIAPS"
              subtitle="Esperienza sul campo, pensiero libero e determinazione sindacale."
            />

            {/* Mobile Image (visible only on mobile viewports under the title) */}
            <div className="block lg:hidden my-6 w-full">
              {/* Unified Card with Integrated Caption */}
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 text-white shadow-xl group">
                <div className="relative aspect-[1672/941] overflow-hidden">
                  <img
                    src={siapsMissione}
                    alt="SIAPS Mission"
                    className="h-full w-full object-cover brightness-95 object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent pointer-events-none" />
                </div>
                <div className="p-6 border-t border-slate-800 text-left">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-cobalt-400 mb-2">Unione Professionale</h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    Non siamo una generica sigla di categoria. Siamo un'associazione <strong>formata, guidata e pensata</strong> da e per i <strong>professionisti della salute</strong>.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-5 text-sm sm:text-base text-slate-700 leading-relaxed font-normal text-left">
              <p>
                <strong>SIAPS</strong> nasce dal pensiero <strong>libero, autonomo e laico</strong> di professionisti sanitari che hanno maturato una <strong>profonda esperienza ordinistica e sindacale</strong> sul campo. Abbiamo scelto di unire competenze, idee e responsabilità in un progetto sindacale concreto, per colmare un <strong>vuoto di rappresentanza</strong> che penalizza da troppo tempo il nostro settore.
              </p>
              <p>
                Non deleghiamo ad altri le battaglie specifiche delle nostre professioni. Crediamo fermamente che solo chi conosce direttamente la <strong>complessità, i turni e le responsabilità quotidiane</strong> di un reparto di radiologia, di un laboratorio d'analisi, di uno studio di riabilitazione o di prevenzione possa <strong>negoziare tutele reali</strong>.
              </p>
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="bg-cobalt-50 border-l-4 border-cobalt-500 rounded-r-xl p-5 text-cobalt-950 font-medium italic text-sm mt-3 shadow-xs border-y border-r border-cobalt-100/50 transition-colors duration-200"
              >
                "SIAPS nasce per dare <strong>voce diretta ed autonoma</strong> alle professioni sanitarie, trasformando un'esigenza diffusa in <strong>azione sindacale forte</strong>."
              </motion.div>
            </div>
          </motion.div>

          {/* Image Column (desktop only) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="hidden lg:block lg:col-span-7 w-full"
          >
            {/* Unified Card with Integrated Caption */}
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 text-white shadow-xl group">
              <div className="relative aspect-[1672/941] overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.4 }}
                  src={siapsMissione}
                  alt="SIAPS Mission"
                  className="h-full w-full object-cover brightness-95 object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent pointer-events-none" />
              </div>
              <div className="p-6 border-t border-slate-800 text-left">
                <h4 className="text-xs font-bold uppercase tracking-widest text-cobalt-400 mb-2">Unione Professionale</h4>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  Non siamo una generica sigla di categoria. Siamo un'associazione <strong>formata, guidata e pensata</strong> da e per i <strong>professionisti della salute</strong>.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Strategic Mission Overview Section */}
      <section className="bg-slate-100/50 py-16 border-y border-slate-200/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            centered
            tag="La Mission"
            title="L'obiettivo strategico di SIAPS"
            subtitle="Rappresentare direttamente la voce delle professioni sanitarie, senza intermediari."
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mt-10 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 order-2 lg:order-1 text-left text-sm sm:text-base text-slate-600 space-y-6 leading-relaxed"
            >
              <p>
                Vogliamo affrontare direttamente e senza delega le questioni irrisolte che incidono profondamente sulla vita quotidiana dei professionisti:
                <strong> turni massacranti, carichi di lavoro insostenibili, stress correlato, indennità professionali d'area, indennità notturne ed economicamente insoddisfacenti rispetto all'elevato livello di specializzazione richiesto dal SSN.</strong>
              </p>
              <p>
                SIAPS pone al centro dell'agenda sia <strong>aspetti economici generali</strong>, troppo spesso dimenticati, sia nuove competenze organizzative mai risolte in sede ministeriale. Il nostro è un <strong>progetto solido</strong>, basato sull'esperienza e sull'autentica rappresentanza sul campo.
              </p>
              <p className="font-semibold text-slate-900">
                Il nostro non è un elenco di promesse elettorali, ma una linea d'azione programmatica basata sull'onestà e sull'effettiva conoscenza del sistema sanitario nazionale.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 order-1 lg:order-2 relative aspect-[1090/940] overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 shadow-xl"
            >
              <img
                src={objectiveImage}
                alt="Obiettivo strategico SIAPS per le professioni sanitarie"
                className="h-full w-full object-cover brightness-95 object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 text-white">
                <span className="text-[10px] uppercase tracking-widest font-bold bg-cobalt-500 px-2.5 py-1 rounded">Obiettivo SIAPS</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={gridContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto"
          >
            {capisaldi.map((item, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -6, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.05)" }}
                className="bg-white rounded-xl border border-slate-200/80 p-6 flex flex-col justify-between hover:border-slate-300 transition-all duration-250 cursor-default"
              >
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cobalt-50 text-cobalt-600 mb-4">
                    {item.icon}
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-2">{item.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-normal">{item.desc}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-[9px] uppercase font-bold tracking-wider text-cobalt-700">
                  Impegno SIAPS
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section: Non esistono sanitari di serie A e sanitari di serie B */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 text-white p-8 md:p-12 relative overflow-hidden shadow-xl border border-slate-800"
        >
          <div className="absolute top-0 right-0 h-64 w-64 rounded-bl-full bg-cobalt-500/10 pointer-events-none" />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-cobalt-500/25 px-3 py-1 text-xs font-bold text-cobalt-400 border border-cobalt-500/30">
                <span>Dignità Professionale</span>
              </div>
              <h2 className="font-sans text-2xl font-extrabold tracking-tight sm:text-3xl text-white leading-tight">
                Non esistono sanitari di serie A e sanitari di serie B
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                La cura e la riabilitazione non cambiano valore a seconda del codice fiscale della struttura in cui si lavora. SIAPS sostiene fermamente che <strong>tutti i professionisti sanitari debbano avere pari dignità, pari riconoscimento e adeguate tutele economiche e decorative</strong>, indipendentemente dal fatto che l’attività venga prestata in un grande ospedale pubblico, in una struttura privata accreditata, o in uno studio professionale.
              </p>
              <p className="text-xs text-slate-400 italic">
                Combattiamo la <strong>frammentazione contrattuale</strong> per uniformare le tutele sociali e i <strong>minimi salariali</strong>.
              </p>
            </div>
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="relative w-full max-w-xs overflow-hidden rounded-xl border border-slate-700/50 bg-slate-800/20 p-5 backdrop-blur-xs transition-all duration-200"
              >
                <div className="flex h-10 w-10 items-center justify-center bg-cobalt-500 text-white rounded-lg mb-3">
                  <Scale size={20} />
                </div>
                <h4 className="text-sm font-bold text-white mb-2 leading-tight">Equità Lavorativa</h4>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Basta con l’ingiusto divario salariale e di tutele tra dipendenti pubblici ed equiparati della sanità privata accreditata.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Values Block: Sanità pubblica e diritto alla salute */}
      <section className="bg-slate-50 py-12 border-t border-slate-200/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <SectionHeader
            centered
            tag="Valori Fondativi"
            title="Sanità pubblica e diritto alla salute"
            subtitle="I cardini sociali del nostro operato sindacale."
          />
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed mt-6"
          >
            <p>
              SIAPS riconosce la <strong>sanità pubblica e il Servizio Sanitario Nazionale (SSN)</strong> come beni fondamentali del sistema sociale italiano, e come imprescindibili strumenti di equità, giustizia sociale e tutela del diritto costituzionale alla salute (art. 32).
            </p>
            <p className="font-medium text-slate-800">
              L’indebolimento del SSN rappresenta una minaccia per <strong>l’intera collettività</strong> e per la sicurezza lavorativa dei singoli operatori. Difendere chi opera nella sanità significa difendere la <strong>salute di tutti i cittadini italiani</strong>.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
