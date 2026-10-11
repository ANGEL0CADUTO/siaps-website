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
import {
  Shield,
  Layers,
  Activity,
  Briefcase,
  GraduationCap,
  Coins,
  Map,
  UserCheck,
  Building2,
  TrendingUp,
  Sparkles,
  Scale
} from 'lucide-react';
// @ts-ignore
import objectiveImage from '../assets/demo-1.svg';

interface BattagliaItem {
  id: string;
  title: string;
  description: React.ReactNode;
  icon: React.ReactNode;
  category: string;
}

const getCategoryStyle = (category: string) => {
  switch (category) {
    case 'Salute e Sicurezza':
      return 'text-red-700 bg-red-50 border border-red-100';
    case 'Indennità d\'Area':
      return 'text-blue-700 bg-blue-50 border border-blue-100';
    case 'Libera Professione':
      return 'text-cobalt-700 bg-cobalt-50 border border-cobalt-100';
    case 'Formazione Accademica':
      return 'text-emerald-700 bg-emerald-50 border border-emerald-100';
    case 'Fisco e Lavoro':
      return 'text-violet-700 bg-violet-50 border border-violet-100';
    case 'Sanità Territoriale':
      return 'text-cyan-700 bg-cyan-50 border border-cyan-100';
    case 'Terzo Settore':
      return 'text-indigo-700 bg-indigo-50 border border-indigo-100';
    case 'Contrattazione':
      return 'text-teal-700 bg-teal-50 border border-teal-100';
    default:
      return 'text-slate-600 bg-slate-100 border border-slate-200';
  }
};

export default function BattaglieView() {
  const battaglie: BattagliaItem[] = [
    {
      id: 'rischio-biologico',
      title: 'Indennità di rischio biologico per i TSLB',
      description: <span>I Tecnici Sanitari di Laboratorio Biomedico affrontano un’esposizione quotidiana e severa al <strong>rischio chimico-biologico</strong>. Visto che il CCNL non prevede un’indennità specifica generalizzata automatica per questa figura, ci battiamo per <strong>istituire formalmente l’Indennità di Rischio Biologico</strong> <strong>Professionale</strong>.</span>,
      icon: <Shield size={20} className="text-red-500" />,
      category: 'Salute e Sicurezza'
    },
    {
      id: 'rischio-radiologico',
      title: 'Adeguamento indennità rischio radiologico',
      description: <span>L’indennità di rischio radiologico in Italia, introdotta originariamente con la Legge n. 416/1968, è rimasta ferma ai parametri definiti quasi cinquant’anni fa dalla Legge n. 460/1988. Esigiamo una <strong>rivalutazione economica strutturale e permanente</strong> per tutto il personale esposto nelle zone controllate.</span>,
      icon: <Activity size={20} className="text-amber-500" />,
      category: 'Salute e Sicurezza'
    },
    {
      id: 'pronto-soccorso',
      title: 'Estensione indennità pronto soccorso a TSRM e TSLB',
      description: <span>Negli ospedali di vecchia costruzione non vi sono radiologie d’urgenza e laboratori fisicamente ubicati all’interno del PS. Di conseguenza, TSRM e TSLB che lavorano tutta la notte fornendo centinaia di prestazioni cruciali per il Pronto Soccorso <strong>vengono iniquamente esclusi da questa indennità per meri motivi logistici</strong>.</span>,
      icon: <Layers size={20} className="text-blue-500" />,
      category: 'Indennità d\'Area'
    },
    {
      id: 'esclusivita-libera-professione',
      title: 'Superamento del vincolo di exclusività',
      description: <span>La deroga straordinaria del Decreto Milleproroghe consente l’attività libero-professionale extramuraria fino al 31 dicembre 2026, ma pone vincoli di autorizzazione complessi. Esigiamo che la deroga diventi <strong>permanente senza limiti</strong>, o in alternativa che <strong>l’esclusività venga indennizzata</strong> al pari dei dirigenti medici.</span>,
      icon: <Briefcase size={20} className="text-cobalt-500" />,
      category: 'Libera Professione'
    },
    {
      id: 'riforma-universitaria',
      title: 'Riforma universitaria delle professioni sanitarie',
      description: <span>Pretendiamo l’istituzione del <strong>“Dipartimento delle Professioni Sanitarie”</strong> diretto esclusivamente da un professionista sanitario d’area. La formazione accademica è una nostra responsabilità patrimoniale e culturale; i direttori dei corsi devono provenire dal nostro <strong>Dipartimento</strong> e non da Medicina.</span>,
      icon: <GraduationCap size={20} className="text-emerald-500" />,
      category: 'Formazione Accademica'
    },
    {
      id: 'flat-tax-straordinario',
      title: 'Flat Tax 5% sullo straordinario per tutto il comparto',
      description: <span>La Legge di Bilancio 2025 ha introdotto un’imposta sostitutiva agevolata del 5% sui compensi per lavoro straordinario, limitando però il beneficio ai soli infermieri del SSN. Esigiamo con forza <strong>l’estensione immediata di questa flat tax</strong> a tutte le professioni sanitarie sia del SSN pubblico che privato.</span>,
      icon: <Coins size={20} className="text-violet-500" />,
      category: 'Fisco e Lavoro'
    },
    {
      id: 'case-comunita-territorio',
      title: 'Valorizzazione nelle Case della Comunità',
      description: <span>Entro metà 2026 il PNRR prevede l’attivazione di 1700 Case della Comunità hub e spoke. Denunciamo il fatto che molte ASL abbiano attivato corsi solo per infermieri, lasciando “in trasparenza” coperture e posti vacanti per <strong>Dietisti, Educatori Professionali, Fisioterapisti, Logopedisti, Terapisti Occupazionali, etc..</strong></span>,
      icon: <Map size={20} className="text-cyan-500" />,
      category: 'Sanità Territoriale'
    },
    {
      id: 'contratti-terzo-settore',
      title: 'Equiparazione contratti del Terzo Settore ed RSA',
      description: <span>Lottiamo per la rimodulazione strutturale dei contratti collettivi applicati nel settore assistenziale, sociosanitario e delle cooperative per <strong>sconfiggere il dumping salariale</strong>, allineando giuridicamente ed economicamente i parametri minimi a quelli del <strong>CCNL Sanità Pubblica</strong>.</span>,
      icon: <UserCheck size={20} className="text-indigo-500" />,
      category: 'Terzo Settore'
    },
    {
      id: 'contratti-studi-commercio',
      title: 'Tutele per studi professionali e commercio',
      description: <span>Attenzioniamo tutti i contratti atipici e di comparto (commercio, turismo, pubblici esercizi) che regolano abusivamente le prestazioni professionali sanitarie dei nostri iscritti in regime di dipendenza, vigilando sull’applicazione di <strong>parametri di salvaguardia scientifica ed economica</strong>.</span>,
      icon: <Building2 size={20} className="text-teal-500" />,
      category: 'Contrattazione'
    },
    {
      id: 'previdenza-liberi-professionisti',
      title: 'Istituzione Ente di Previdenza Professionale',
      description: <span>Ci battiamo per la nascita di una <strong>Cassa o Ente di Previdenza e Assistenza autonomo</strong> delle Professioni Sanitarie, volto a garantire coperture previdenziali obbligatorie, trattamenti pensionistici di vecchiaia, inabilità, tutele per i superstiti e <strong>indennità di maternità</strong> per tutti i liberi professionisti.</span>,
      icon: <TrendingUp size={20} className="text-rose-500" />,
      category: 'Fisco e Lavoro'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 16,
      }
    }
  };

  return (
    <div className="py-10 space-y-12" id="regular-battles-layout">
      {/* Intro Header */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-100/30 p-8 rounded-2xl border border-slate-200/50"
        >
          <div className="lg:col-span-8 space-y-5 text-left">
            <SectionHeader
              tag="Punti Programmatici"
              title="Le nostre iniziative sindacali"
              subtitle="Una visione d'azione solida, pragmatica, orientata a tutele legali, contrattuali e pari dignità per chi opera in prima linea."
            />
            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
              SIAPS agisce senza promesse demagogiche o trionfalismi irrealizzabili. Ogni punto programmatico risponde a una <strong>criticità riscontrata quotidianamente</strong> nei contesti ospedalieri pubblici, nelle RSA, nei centri di riabilitazione privati o nel libero esercizio.
            </p>
          </div>

          {/* Intro visual */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="lg:col-span-4 overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-sm"
          >
            <div className="relative aspect-[1090/940] overflow-hidden bg-slate-900">
              <img
                src={objectiveImage}
                alt="SIAPS iniziative sindacali professioni sanitarie"
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="inline-flex rounded bg-cobalt-500 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                  Concretezza Sindacale
                </span>
              </div>
            </div>
            <p className="p-5 text-[11px] text-slate-500 leading-relaxed font-normal">
              Ogni nostra istanza viene portata ai <strong>tavoli ministeriali e regionali</strong> con rigoroso supporto accademico, normativo ed economico.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Programmatic Battles Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          id="battaglie-grid"
        >
          {battaglie.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              whileHover={{ y: -5, border: '1px solid rgba(0, 71, 171, 0.4)', boxShadow: '0 8px 30px rgba(0,71,171,0.06)' }}
              className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs transition-shadow duration-200 flex flex-col justify-between cursor-default"
              id={`battaglia-card-${item.id}`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-50 border border-slate-100 shadow-inner">
                    {item.icon}
                  </div>
                  <span className={`text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded border ${getCategoryStyle(item.category)}`}>
                    {item.category}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 leading-tight">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
              <div className="mt-4 pt-3.5 border-t border-slate-100 text-[10px] text-cobalt-600 font-bold uppercase tracking-wider">
                SIAPS • Proposta di tutela
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Suggestion banner */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pb-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-slate-200 bg-slate-900 text-white p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 relative overflow-hidden shadow-md"
        >
          <div className="absolute top-0 right-0 h-24 w-24 rounded-bl-full bg-cobalt-500/10" />
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cobalt-500 text-white shrink-0 shadow-lg">
            <Sparkles size={22} className="text-white" />
          </div>
          <div className="space-y-1 text-left">
            <h4 className="text-sm font-bold text-white">Partecipa al dibattito sulle indennità d'area</h4>
            <p className="text-xs text-slate-300 leading-relaxed max-w-xl font-normal">
              SIAPS è un sindacato laico e aperto. Se vuoi segnalare una <strong>disparità contrattuale</strong> o proporre integrazioni ai punti programmatici, scrivici direttamente.
            </p>
          </div>
          <div className="md:ml-auto w-full md:w-auto text-right shrink-0">
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block text-[10px] font-bold text-white bg-cobalt-500 px-3.5 py-2.5 rounded shadow-xs uppercase tracking-wider cursor-pointer font-sans"
            >
              Invia un suggerimento
            </motion.span>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
