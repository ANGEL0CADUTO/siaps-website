/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Sparkles, Filter, X } from 'lucide-react';
import SectionHeader from './SectionHeader';
import ProfessionCard from './ProfessionCard';
import { PROFESSIONS_LIST } from '../data';
// @ts-ignore
import siapsProfessionisti from '../assets/demo-1.svg';

export default function ProfessioniView() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Tutte');

  const categories = ['Tutte', 'Riabilitazione', 'Diagnostica', 'Prevenzione', 'Tecnica e Assistenza', 'Assistenziale'];

  const filteredProfessions = useMemo(() => {
    const list = PROFESSIONS_LIST.filter((p) => {
      const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            p.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'Tutte' || p.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
    return [...list].sort((a, b) => a.name.localeCompare(b.name, 'it'));
  }, [searchQuery, selectedCategory]);

  return (
    <div className="py-10 space-y-12" id="professioni-view">
      {/* Intro section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Top Grid: Title & Sparkles (Left) vs Image (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-center">

          {/* Left Content Column */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <SectionHeader
              tag="Categorie Rappresentate"
              title="Le Professioni Sanitarie al centro di SIAPS"
              subtitle="SIAPS si rivolge specificamente alle professioni sanitarie e socio-sanitarie del comparto operanti sia nei servizi sanitari pubblici (SSN) e accreditati, sia nelle strutture e ambulatori privati."
            />

            {/* Mobile Image (visible only on mobile viewports under the title) */}
            <div className="block lg:hidden my-6 w-full">
              {/* Unified Card with Integrated Caption */}
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 text-white shadow-xl group">
                <div className="relative aspect-[1672/941] overflow-hidden">
                  <img
                    src={siapsProfessionisti}
                    alt="SIAPS Professionisti"
                    className="h-full w-full object-cover brightness-95 object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent pointer-events-none" />
                </div>
                <div className="p-6 border-t border-slate-800 text-left">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-cobalt-400 mb-2">Unione e Rappresentanza</h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    Diamo voce specifica alle 22 professioni sanitarie e socio-sanitarie del comparto, tutelando ogni operatore nei diversi ambiti lavorativi.
                  </p>
                </div>
              </div>
            </div>

            {/* Sparkles Box */}
            <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 leading-relaxed text-xs text-slate-600 w-full text-left">
              <p className="font-semibold text-slate-800 text-sm mb-1.5 flex items-center gap-1.5">
                <Sparkles size={16} className="text-cobalt-500 shrink-0" />
                Riferimento di rappresentatività e tutela
              </p>
              <p className="font-normal text-slate-600">
                Vogliamo chiarire che SIAPS è un'organizzazione sindacale autonoma volta alla <strong>difesa contrattuale, sindacale e assistenziale</strong> dei singoli operatori. Non agiamo come ordine professionale, albo o ente legislatore pubblico, bensì come <strong>solido interlocutore contrattuale</strong> per ridare dignità economica, valorizzazione e tutele legali a ciascuno dei profili di seguito elencati.
              </p>
            </div>
          </div>

          {/* Image Column (desktop only) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="hidden lg:block lg:col-span-6 w-full"
          >
            {/* Unified Card with Integrated Caption */}
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 text-white shadow-xl group">
              <div className="relative aspect-[1672/941] overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.4 }}
                  src={siapsProfessionisti}
                  alt="SIAPS Professionisti"
                  className="h-full w-full object-cover brightness-95 object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent pointer-events-none" />
              </div>
              <div className="p-6 border-t border-slate-800 text-left">
                <h4 className="text-xs font-bold uppercase tracking-widest text-cobalt-400 mb-2">Unione e Rappresentanza</h4>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  Diamo voce specifica alle 22 professioni sanitarie e socio-sanitarie del comparto, tutelando ogni operatore nei diversi ambiti lavorativi.
                </p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Difference Cards (desktop: full width below, mobile: flows at the end of the grid) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full text-left mt-8"
        >
          <div className="bg-slate-900 text-white rounded-xl p-5 border border-slate-800 shadow-md flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-cobalt-400 block mb-1">IL SINDACATO AUTONOMO (SIAPS)</span>
              <h4 className="text-sm font-bold text-white mb-2 leading-snug">La difesa dei tuoi diritti contrattuali e retributivi</h4>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                SIAPS agisce per stipulare <strong>contratti di lavoro equi</strong>, combattere il dumping salariale, estendere le indennità (biologico, radiologico, pronto soccorso), abolire il vincolo di esclusività della libera professione ed eliminare il <strong>divario tra pubblico e privato</strong>. Siamo la tua voce contrattuale libera e autonoma.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-800 text-[10px] text-cobalt-400 font-semibold uppercase tracking-wider">
              Adesione volontaria ed attiva
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">GLI ORDINI PROFESSIONALI (ALBI)</span>
              <h4 className="text-sm font-bold text-slate-900 mb-2 leading-snug">Tenuta dell'albo e regolamentazione deontologica</h4>
              <p className="text-xs text-slate-500 leading-relaxed font-normal">
                Gli Ordini Professioni sono <strong>enti pubblici sussidiari dello Stato</strong>. Gestiscono l'iscrizione obbligatoria, vigilano sull'etica e sulla deontologia della professione e curano l'ECM, ma <strong>non svolgono compiti di tutela sindacale</strong> o contrattazione dei salari.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-100 text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
              Obbligo di legge iscrizione
            </div>
          </div>
        </motion.div>

      </section>

      {/* Filter and Search Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 rounded-xl border border-slate-200/80 bg-white">

          {/* Quick Categories filter */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-2 flex items-center gap-1">
              <Filter size={12} /> Filtra:
            </span>
            {categories.map((cat) => (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-cobalt-500 text-white border-cobalt-500 shadow-sm'
                    : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50'
                }`}
                id={`filter-${cat.toLowerCase().replace(' ', '-')}`}
              >
                {cat}
              </motion.button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative w-full md:max-w-xs">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
              <Search size={15} />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cerca la tua professione..."
              className="w-full rounded-lg border border-slate-200 bg-slate-50/50 py-2 pl-9 pr-8 text-xs font-medium text-slate-950 placeholder-slate-400 focus:border-cobalt-500 focus:bg-white focus:outline-none"
              id="search-profession-input"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 flex items-center pr-2.5 text-slate-400 hover:text-slate-600"
              >
                <X size={14} />
              </button>
            )}
          </div>

        </div>
      </section>

      {/* Grid List */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <AnimatePresence mode="popLayout">
          {filteredProfessions.length > 0 ? (
            <motion.div
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              id="professions-grid"
            >
              {filteredProfessions.map((prof) => (
                <motion.div
                  key={prof.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                >
                  <ProfessionCard profession={prof} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="rounded-xl border border-dashed border-slate-200 bg-white py-12 text-center"
              id="empty-search-state"
            >
              <p className="text-sm font-semibold text-slate-600">Nessuna professione corrisponde ai criteri di ricerca.</p>
              <p className="text-xs text-slate-400 mt-1">Prova a digitare parole chiave differenti o azzera i filtri.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('Tutte');
                }}
                className="mt-4 inline-flex items-center gap-1.5 rounded-lg bg-cobalt-50 px-4 py-2 text-xs font-semibold text-cobalt-600 border border-cobalt-100/50 hover:bg-cobalt-100/80 transition-all cursor-pointer"
              >
                Azzera Filtri
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
}
