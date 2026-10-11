/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { AlertTriangle, Eye } from 'lucide-react';

export default function CookieView() {
  return (
    <div className="py-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8" id="cookie-view">
      <div className="rounded-xl border border-amber-200 bg-amber-50 p-5 text-xs text-amber-900 leading-relaxed font-semibold flex items-start gap-3">
        <AlertTriangle size={18} className="text-amber-600 shrink-0 mt-0.5" />
        <div>
          <p className="font-bold text-sm mb-1">Stato attuale dei tracciamenti</p>
          Dalla verifica del codice non risultano attivi strumenti di analytics, pixel pubblicitari, mappe embed, video embed o font caricati da fornitori esterni. Se in futuro verranno aggiunti servizi di tracciamento o terze parti, questa informativa dovrà essere aggiornata prima della pubblicazione.
        </div>
      </div>

      <div className="space-y-6 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
        <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cobalt-50 text-cobalt-600">
            <Eye size={18} />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900">Informativa estesa sui cookie</h2>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Cookie tecnici e strumenti locali del browser</p>
          </div>
        </div>

        <p>
          La presente Cookie Policy descrive l'utilizzo dei cookie e di tecnologie simili nel sito istituzionale di <strong>SIAPS - Sindacato Italiano Autonomo Professioni Sanitarie</strong>.
        </p>

        <h3 className="text-sm font-bold text-slate-950 uppercase tracking-wide mt-4">Cosa sono i cookie?</h3>
        <p>
          I cookie sono piccoli file di testo che i siti visitati dagli utenti possono inviare ai loro terminali. Tecnologie simili, come il salvataggio locale del browser, possono essere usate per ricordare preferenze tecniche.
        </p>

        <h3 className="text-sm font-bold text-slate-950 uppercase tracking-wide mt-4">Tipologie utilizzate</h3>
        <p>
          Nella configurazione attuale, il sito limita l'impiego di cookie e strumenti simili a:
        </p>

        <div className="space-y-4">
          <div className="border border-slate-200/80 p-4 rounded-lg bg-white">
            <h4 className="text-xs font-bold text-slate-900 uppercase">1. Strumenti tecnici necessari</h4>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              Sono strumenti necessari per navigare correttamente nel sito e usufruire delle funzionalità base, inclusa la <strong>memorizzazione locale</strong> della presa visione dell'informativa cookie. Non hanno finalità di profilazione o marketing.
            </p>
          </div>

          <div className="border border-slate-200/80 p-4 rounded-lg bg-white">
            <h4 className="text-xs font-bold text-slate-900 uppercase">2. Cookie statistici o analytics</h4>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              Alla data di questa informativa non risultano attivi cookie analitici o strumenti di monitoraggio visite. Qualora venissero implementati in futuro, la policy dovrà indicare il servizio usato, la base giuridica e le eventuali modalità di consenso.
            </p>
          </div>

          <div className="border border-slate-200/80 p-4 rounded-lg bg-white">
            <h4 className="text-xs font-bold text-slate-900 uppercase">3. Cookie di profilazione e marketing</h4>
            <p className="text-xs text-slate-500 mt-1 leading-relaxed">
              Questo sito <strong>non fa uso</strong> di cookie di profilazione commerciale, pixel pubblicitari, retargeting o ad-targeting comportamentale.
            </p>
          </div>
        </div>

        <h3 className="text-sm font-bold text-slate-950 uppercase tracking-wide mt-4">Banner cookie</h3>
        <p>
          Poiche il sito usa solo strumenti tecnici minimi, non e previsto un banner di consenso marketing. Il messaggio mostrato agli utenti ha funzione informativa e consente di memorizzare localmente la presa visione.
        </p>

        <h3 className="text-sm font-bold text-slate-950 uppercase tracking-wide mt-4">Come gestire o disattivare i cookie</h3>
        <p>
          L'utente può configurare le proprie preferenze relative ai cookie direttamente dal menù di impostazioni del browser. Disabilitando totalmente gli strumenti tecnici del browser, alcune preferenze locali potrebbero non essere ricordate.
        </p>

        <p className="text-[11px] text-slate-400 mt-6 pt-4 border-t border-slate-100">
          Informativa aggiornata al {new Date().toLocaleDateString('it-IT', { year: 'numeric', month: 'long', day: 'numeric' })}.
        </p>
      </div>
    </div>
  );
}
