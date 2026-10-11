/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Download, FileText, CheckCircle2, ShieldCheck, Info } from 'lucide-react';
import SectionHeader from './SectionHeader';
import { MODULO_ISCRIZIONE_DOWNLOAD_URL, MODULO_ISCRIZIONE_FILE_NAME } from '../downloads';

const TESSERAMENTO_EMAIL = 'hello@example.com';

export default function IscrizioneView() {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownload = () => {
    setDownloadSuccess(true);

    setTimeout(() => {
      setDownloadSuccess(false);
    }, 4000);
  };

  const steps = [
    {
      step: '01',
      title: 'Scarica il Documento demo',
      desc: <span>Usa il pulsante dedicato per scaricare lo <strong>documento di esempio</strong> in formato testo.</span>
    },
    {
      step: '02',
      title: 'Compila e Firma',
      desc: <span>Inserisci le informazioni anagrafiche, la tua <strong>qualifica professionale</strong> e apponi la <strong>firma autografa</strong>.</span>
    },
    {
      step: '03',
      title: 'Invia il documento',
      desc: <span><strong>Invia il modulo compilato e firmato</strong> alla tua azienda secondo le <strong>modalità previste internamente</strong> e trasmettine copia anche alla mail <a href={`mailto:${TESSERAMENTO_EMAIL}`} className="font-bold text-cobalt-600 hover:underline">{TESSERAMENTO_EMAIL}</a>, come indicato nel modulo.</span>
    }
  ];

  const stepsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const stepItemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <div className="space-y-12 py-10" id="iscrizione-view">
      {/* Intro section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            <SectionHeader
              tag="Associazione SIAPS"
              title="Come aderire al Sindacato SIAPS"
              subtitle="L'adesione a SIAPS consente di sostenere la nostra opera e di partecipare attivamente alle decisioni strategiche per la tutela delle professioni sanitarie TSRM e PSTRP."
            />

            <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              <p>
                In questa prima fase costitutiva, per massimizzare la trasparenza e garantire la massima conformità alle normative sulla privacy, l’adesione avviene esclusivamente tramite <strong>modulo cartaceo o PDF</strong> autografo da compilare offline.
              </p>
              <p>
                Questo previene la trasmissione non controllata di <strong>dati sensibili sul web</strong> ed assicura che ogni singola adesione sia <strong>validata manualmente</strong> dai nostri referenti d'organo sindacale.
              </p>
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="rounded-lg bg-amber-50 border border-amber-200 p-4 text-xs text-amber-900 font-medium"
              >
                <p className="flex items-center gap-1.5 font-bold mb-1">
                  <ShieldCheck size={15} className="text-amber-600 shrink-0" />
                  Nessun Pagamento Online Richiesto
                </p>
                Non inserire in alcun caso <strong>numeri di carte di credito</strong>, credenziali bancarie o dati di tessere digitali su questo sito. SIAPS gestisce le tutele associatative tramite <strong>canali istituzionali fisici e protetti</strong>.
              </motion.div>
            </div>
          </motion.div>

          {/* Interactive download card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-5 text-left"
          >
            <motion.div
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md relative overflow-hidden transition-shadow duration-200"
            >
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-cobalt-500" />
              <div className="flex items-center gap-3 mb-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cobalt-50 text-cobalt-600">
                  <FileText size={20} />
                </div>
                <div>
                  <h3 className="font-sans text-sm font-bold text-slate-900 leading-none">Domanda di Iscrizione</h3>
                  <p className="mt-1 text-[10px] text-slate-400 font-semibold uppercase tracking-wider">SIAPS AUTONOMO</p>
                </div>
              </div>

              <p className="text-xs text-slate-500 leading-relaxed mb-6 font-normal">
                Scarica il modulo, compilalo con i tuoi <strong>dati professionali</strong>, apponi la data e la tua <strong>firma autografa</strong>. Invia poi il documento firmato a <a href={`mailto:${TESSERAMENTO_EMAIL}`} className="font-bold text-cobalt-600 hover:underline">{TESSERAMENTO_EMAIL}</a>.
              </p>

              {/* PDF button */}
              <AnimatePresence mode="wait">
                <motion.a
                  key={downloadSuccess ? 'success' : 'normal'}
                  href={MODULO_ISCRIZIONE_DOWNLOAD_URL}
                  download={MODULO_ISCRIZIONE_FILE_NAME}
                  onClick={handleDownload}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className={`w-full inline-flex items-center justify-center gap-2 rounded-xl py-3.5 px-4 text-sm font-bold transition-all duration-200 cursor-pointer ${
                    downloadSuccess
                      ? 'bg-emerald-500 text-white hover:bg-emerald-600 shadow-md shadow-emerald-500/10'
                      : 'bg-cobalt-500 text-white hover:bg-cobalt-600 shadow-md shadow-cobalt-500/10'
                  }`}
                  id="btn-download-pdf-modulo"
                >
                  {downloadSuccess ? (
                    <>
                      <CheckCircle2 size={16} />
                      <span>Download avviato</span>
                    </>
                  ) : (
                    <>
                      <Download size={16} />
                      <span>Scarica il modulo di iscrizione [PDF]</span>
                    </>
                  )}
                </motion.a>
              </AnimatePresence>

              <div className="mt-4 flex items-center justify-center gap-1.5 text-[10px] font-semibold text-slate-400">
                <span>Modulo ufficiale SIAPS disponibile per il download</span>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </section>

      {/* Steps process section */}
      <section className="bg-slate-50 py-12 border-y border-slate-200/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            centered
            tag="Istruzioni per l'Iscrizione"
            title="La procedura lineare di adesione"
            subtitle="I tre passaggi necessari per depositare ufficialmente la tua pre-iscrizione alle attività sindacali SIAPS."
          />

          <motion.div
            variants={stepsContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 max-w-5xl mx-auto"
          >
            {steps.map((item, idx) => (
              <motion.div
                key={idx}
                variants={stepItemVariants}
                whileHover={{ y: -4 }}
                className="relative bg-white border border-slate-200 p-6 rounded-xl shadow-xs text-left"
              >
                {/* Step badge */}
                <span className="absolute -top-4 left-6 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-cobalt-500 text-xs font-bold text-white shadow-xs">
                  {item.step}
                </span>

                <h4 className="text-sm font-bold text-slate-900 mt-2 mb-2 leading-tight">
                  {item.title}
                </h4>

                <p className="text-xs text-slate-500 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Prudent Notes section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-xl border border-slate-200/80 bg-white p-5 mt-10 max-w-4xl mx-auto flex items-start gap-3.5 text-left"
          >
            <Info size={20} className="text-cobalt-500 shrink-0 mt-0.5" />
            <div className="text-xs text-slate-500 space-y-1.5 font-normal leading-relaxed">
              <p className="font-bold text-slate-800 leading-none">Note Istituzionali Importanti:</p>
              <p className="italic text-slate-600">
                “Il <strong>modulo di iscrizione compilato e firmato</strong> deve essere trasmesso alla <strong>propria azienda</strong> secondo le <strong>modalità aziendali previste</strong> e inviato in copia anche a <strong>{TESSERAMENTO_EMAIL}</strong>.”
              </p>
              <p>
                La <strong>segreteria SIAPS</strong>, ricevuta la documentazione, potrà fornire eventuali <strong>conferme operative</strong> e ulteriori indicazioni necessarie al completamento della procedura. La procedura si intende completata secondo quanto indicato nel <strong>modulo ufficiale</strong> e nelle successive comunicazioni della <strong>segreteria nazionale SIAPS</strong>.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
