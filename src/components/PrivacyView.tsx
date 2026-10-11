/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { AlertTriangle, Lock } from 'lucide-react';

export default function PrivacyView() {
  return (
    <div className="py-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8" id="privacy-view">
      <div className="rounded-xl border border-amber-200 bg-amber-50 p-5 text-xs text-amber-900 leading-relaxed font-semibold flex items-start gap-3">
        <AlertTriangle size={18} className="text-amber-600 shrink-0 mt-0.5" />
        <div>
          <p className="font-bold text-sm mb-1">Nota sui dati organizzativi</p>
          Alcuni riferimenti formali dell'organizzazione, come sede legale definitiva, codice fiscale o eventuale referente privacy dedicato, devono essere completati con i dati ufficiali SIAPS prima della pubblicazione definitiva.
        </div>
      </div>

      <div className="space-y-6 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
        <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cobalt-50 text-cobalt-600">
            <Lock size={18} />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900">Informativa sul trattamento dei dati personali</h2>
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Regolamento Generale (UE) 2016/679 - GDPR</p>
          </div>
        </div>

        <p>
          La presente informativa descrive le modalità di trattamento dei dati personali raccolti durante la navigazione del sito istituzionale <strong>SIAPS - Sindacato Italiano Autonomo Professioni Sanitarie</strong> e tramite le richieste inviate volontariamente dagli utenti.
        </p>

        <h3 className="text-sm font-bold text-slate-950 uppercase tracking-wide mt-4">1. Titolare del trattamento</h3>
        <p>
          Il <strong>Titolare del trattamento dei dati</strong> è SIAPS - Sindacato Italiano Autonomo Professioni Sanitarie. Per richieste privacy è possibile scrivere a <a href="mailto:hello@example.com" className="text-cobalt-500 font-semibold hover:underline">hello@example.com</a>. <strong>Dati da completare:</strong> sede legale, codice fiscale/partita IVA ed eventuale referente privacy dedicato.
        </p>

        <h3 className="text-sm font-bold text-slate-950 uppercase tracking-wide mt-4">2. Tipologie di dati trattati</h3>
        <p>
          Il sito, nella configurazione attuale, può trattare:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li><strong>Dati tecnici di navigazione:</strong> indirizzo IP, dati del browser, log tecnici e informazioni necessarie al funzionamento e alla sicurezza dell'infrastruttura hosting.</li>
          <li><strong>Dati di contatto:</strong> nome e cognome, indirizzo email, professione sanitaria opzionale e contenuto del messaggio inviato volontariamente tramite il form contatti o tramite email.</li>
          <li><strong>Dati trasmessi tramite Web3Forms:</strong> i dati inseriti nel form contatti vengono inviati al servizio Web3Forms per consentire la consegna del messaggio alla casella istituzionale SIAPS.</li>
          <li><strong>Eventi tecnici di download del modulo:</strong> timestamp, nome del file/modulo, pagina di provenienza senza query string o hash e user agent del browser, registrati senza nome, email, indirizzo IP o dati inseriti dall'utente.</li>
        </ul>

        <h3 className="text-sm font-bold text-slate-950 uppercase tracking-wide mt-4">3. Finalità del trattamento</h3>
        <p>
          I dati forniti volontariamente sono trattati per:
        </p>
        <ol className="list-decimal pl-5 space-y-1">
          <li>Rispondere a richieste informative, segnalazioni, domande di adesione o collaborazione.</li>
          <li>Gestire comunicazioni inviate alla casella istituzionale <a href="mailto:hello@example.com" className="text-cobalt-500 font-semibold hover:underline">hello@example.com</a>.</li>
          <li>Trasmettere tramite Web3Forms i messaggi inviati dal form contatti alla segreteria SIAPS.</li>
          <li>Garantire sicurezza, manutenzione tecnica e corretto funzionamento del sito.</li>
          <li>Contare in forma aggregata i download del modulo di iscrizione.</li>
        </ol>

        <h3 className="text-sm font-bold text-slate-950 uppercase tracking-wide mt-4">4. Base giuridica</h3>
        <p>
          Il trattamento dei dati inviati tramite form o email si fonda sulla richiesta dell'utente e sul consenso espresso mediante la selezione della casella privacy. Il trattamento dei dati tecnici di navigazione si fonda sul legittimo interesse del titolare alla sicurezza e al corretto funzionamento del sito.
        </p>

        <h3 className="text-sm font-bold text-slate-950 uppercase tracking-wide mt-4">5. Conservazione dei dati</h3>
        <p>
          I dati personali sono conservati per il tempo necessario a gestire la richiesta ricevuta e, di norma, per un periodo non superiore a <strong>12 mesi</strong>, salvo obblighi di legge, esigenze di tutela dei diritti o successiva adesione formale dell'utente a SIAPS.
        </p>

        <h3 className="text-sm font-bold text-slate-950 uppercase tracking-wide mt-4">6. Cookie e strumenti di tracciamento</h3>
        <p>
          Alla data di aggiornamento di questa informativa non risultano attivi strumenti di analytics, pixel pubblicitari, mappe embed, video embed, servizi di profilazione marketing o font caricati da fornitori esterni. Il sito utilizza strumenti tecnici minimi, il salvataggio locale della preferenza relativa all'informativa cookie e un conteggio tecnico non profilante dei download del modulo di iscrizione.
        </p>

        <h3 className="text-sm font-bold text-slate-950 uppercase tracking-wide mt-4">7. Diritti dell'interessato</h3>
        <p>
          Gli utenti godono dei diritti previsti dagli artt. 15 e ss. del GDPR, inclusi <strong>accesso, rettifica, cancellazione, limitazione del trattamento, portabilità e opposizione</strong>. Le richieste possono essere inviate a <a href="mailto:hello@example.com" className="text-cobalt-500 font-semibold hover:underline">hello@example.com</a>.
        </p>

        <h3 className="text-sm font-bold text-slate-950 uppercase tracking-wide mt-4">8. Reclamo all'autorità</h3>
        <p>
          L'utente può proporre reclamo al Garante per la protezione dei dati personali qualora ritenga che il trattamento avvenga in violazione della normativa applicabile.
        </p>

        <p className="text-[11px] text-slate-400 mt-6 pt-4 border-t border-slate-100">
          Informativa aggiornata al {new Date().toLocaleDateString('it-IT', { year: 'numeric', month: 'long', day: 'numeric' })}.
        </p>
      </div>
    </div>
  );
}
