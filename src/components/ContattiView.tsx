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
import { Mail, Phone, MapPin, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import SectionHeader from './SectionHeader';

const SEGRETERIA_EMAIL = 'hello@example.com';
const PEC_EMAIL = 'hello@example.com';

export default function ContattiView() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    professione: '',
    messaggio: '',
    accettaPrivacy: false,
    botcheck: false
  });

  const [invioCompletato, setInvioCompletato] = useState(false);
  const [errorForm, setErrorForm] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handlePrivacyClick = () => {
    window.history.pushState({}, '', '/privacy');
    window.dispatchEvent(new PopStateEvent('popstate'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorForm('Demo: invio messaggi disattivato. Nessun dato viene trasmesso.');
  };

  return (
    <div className="py-10 space-y-12" id="contatti-view">
      <p role="note" style={{padding: "12px 20px", margin: "0 auto 20px", maxWidth: "72rem", background: "#fef3c7", color: "#78350f"}}>Demo: invio messaggi disattivato. Usa soltanto dati fittizi.</p>
      {/* Intro section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="Segreteria SIAPS"
          title="Mettiti in contatto con noi"
          subtitle="Siamo pronti ad ascoltare le tue necessità di inquadramento contrattuale, di tutela o a rispondere ai tuoi dubbi sulle adesioni delle aree sanitarie del comparto."
        />

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-xl border border-blue-100 bg-blue-50/50 p-5 text-xs text-slate-600 max-w-4xl mb-4 leading-relaxed text-left"
        >
          <p className="font-bold text-slate-800 text-sm mb-1">
            Messaggio di Trasparenza Informativa:
          </p>
          <p className="italic text-slate-700">
            “Per <strong>informazioni, adesioni o collaborazioni</strong> puoi contattare SIAPS tramite i riferimenti indicati.”
          </p>
        </motion.div>
      </section>

      {/* Grid: Left Contacts Info, Right Contact Form */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Card Left Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-6 text-left"
          >
            <div className="rounded-xl border border-slate-200 bg-white p-6 md:p-8 space-y-8">
              <h3 className="font-sans text-base font-bold text-slate-900 leading-none">Canali Istituzionali</h3>
              <p className="text-xs text-slate-500 leading-normal font-normal">
                Durante l'attuale fase costitutiva delle segreterie territoriali, le comunicazioni vengono accentrate per assicurare <strong>risposte coordinate e certificate</strong>.
              </p>

              {/* Items */}
              <div className="space-y-6">

                {/* Email */}
                <motion.div
                  whileHover={{ x: 3 }}
                  className="flex gap-4 items-start"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cobalt-50 text-cobalt-600 shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email Nazionale</h4>
                    <a href={`mailto:${SEGRETERIA_EMAIL}`} className="text-sm font-semibold text-slate-900 hover:text-cobalt-500 transition-colors">
                      {SEGRETERIA_EMAIL}
                    </a>
                    <p className="text-[10px] text-slate-400 mt-1 leading-snug font-normal">Risposta garantita entro <strong>48 ore lavorative</strong>.</p>
                  </div>
                </motion.div>

                {/* Email Tesseramento */}
                <motion.div
                  whileHover={{ x: 3 }}
                  className="flex gap-4 items-start"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cobalt-50 text-cobalt-600 shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">PEC SIAPS</h4>
                    <a href={`mailto:${PEC_EMAIL}`} className="text-sm font-semibold text-slate-900 hover:text-cobalt-500 transition-colors">
                      {PEC_EMAIL}
                    </a>
                    <p className="text-[10px] text-slate-400 mt-1 leading-snug font-normal">Per comunicazioni formali e istituzionali.</p>
                  </div>
                </motion.div>

                {/* Telefono Segretario Generale */}
                <motion.div
                  whileHover={{ x: 3 }}
                  className="flex gap-4 items-start"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cobalt-50 text-cobalt-600 shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Segretario Generale</h4>
                    <p className="text-sm font-semibold text-slate-900">
                      Telefono in fase di attivazione
                    </p>
                    <p className="text-[10px] text-slate-400 mt-1 font-normal">Sottoscritto in concomitanza con la <strong>deliberazione dei locali associativi</strong>.</p>
                  </div>
                </motion.div>

                {/* Telefono Segreteria Nazionale */}
                <motion.div
                  whileHover={{ x: 3 }}
                  className="flex gap-4 items-start"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cobalt-50 text-cobalt-600 shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Segreteria Nazionale</h4>
                    <p className="text-sm font-semibold text-slate-900">
                      Telefono in fase di attivazione
                    </p>
                    <p className="text-[10px] text-slate-400 mt-1 font-normal">Sottoscritto in concomitanza con la <strong>deliberazione dei locali associativi</strong>.</p>
                  </div>
                </motion.div>

                {/* Sede */}
                <motion.div
                  whileHover={{ x: 3 }}
                  className="flex gap-4 items-start"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-cobalt-50 text-cobalt-600 shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Sede di Coordinamento</h4>
                    <p className="text-sm font-semibold text-slate-900">
                      Sede Centrale in fase di delibera assembleare
                    </p>
                    <p className="text-[10px] text-slate-400 mt-1 font-normal">I locali e l'indirizzo permanente saranno decretati con <strong>atto pubblico</strong> prima del lancio sul territorio.</p>
                  </div>
                </motion.div>

              </div>

              {/* Guard Disclaimer */}
              <div className="pt-6 border-t border-slate-100 flex items-center gap-2 text-[10px] text-slate-400 leading-snug font-medium text-left">
                <ShieldCheck size={14} className="text-emerald-500 shrink-0" />
                <span>Nessun dato fornito viene <strong>venduto o ceduto</strong> a scopi di marketing pubblicitario o profilazione commerciale.</span>
              </div>
            </div>
          </motion.div>

          {/* Form Right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-7 text-left"
          >
            <div className="rounded-xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
              <h3 className="font-sans text-base font-bold text-slate-900 mb-2 leading-none">Scrivi alla Segreteria SIAPS</h3>
              <p className="text-xs text-slate-500 leading-normal mb-6 font-normal">
                Utilizza il modulo sottostante per trasmettere <strong>chiarimenti veloci, segnalazioni o proposte</strong> legate alle aree sanitarie del comparto.
              </p>

              <AnimatePresence mode="wait">
                {invioCompletato ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                    className="rounded-xl bg-emerald-50 border border-emerald-200 p-6 text-center space-y-4"
                    id="invio-completato-success"
                  >
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                      <CheckCircle2 size={24} />
                    </div>
                    <h4 className="text-base font-bold text-slate-900">Messaggio Ricevuto</h4>
                    <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed font-normal">
                      Grazie per aver contattato SIAPS. Il messaggio è stato inviato alla segreteria. Ti risponderemo appena possibile.
                    </p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                    id="contatti-frontend-form"
                  >
                    {errorForm && (
                      <div className="rounded-lg bg-red-50 border border-red-200 p-3.5 text-xs text-red-800 font-semibold">
                        {errorForm}{' '}
                        {errorForm.includes('scrivere direttamente a') && (
                          <a href={`mailto:${SEGRETERIA_EMAIL}`} className="underline hover:text-red-900">
                            {SEGRETERIA_EMAIL}
                          </a>
                        )}
                      </div>
                    )}

                    <input
                      type="checkbox"
                      name="botcheck"
                      checked={formData.botcheck}
                      onChange={handleChange}
                      className="hidden"
                      tabIndex={-1}
                      autoComplete="off"
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Nome */}
                      <div>
                        <label htmlFor="nome" className="block text-xs font-bold text-slate-600 mb-1">
                          Nome e Cognome <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="nome"
                          id="nome"
                          value={formData.nome}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-slate-200 bg-slate-50/50 py-2.5 px-3 text-xs font-medium focus:border-cobalt-500 focus:bg-white focus:outline-none"
                          placeholder="Es. Mario Rossi"
                          required
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="email" className="block text-xs font-bold text-slate-600 mb-1">
                          Indirizzo Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full rounded-lg border border-slate-200 bg-slate-50/50 py-2.5 px-3 text-xs font-medium focus:border-cobalt-500 focus:bg-white focus:outline-none"
                          placeholder="Es. hello@example.com"
                          required
                        />
                      </div>
                    </div>

                    {/* Professione */}
                    <div>
                      <label htmlFor="professione" className="block text-xs font-bold text-slate-600 mb-1">
                        Professione Sanitaria di Riferimento
                      </label>
                      <select
                        name="professione"
                        id="professione"
                        value={formData.professione}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-slate-200 bg-slate-50/50 py-2.5 px-3 text-xs font-semibold focus:border-cobalt-500 focus:bg-white focus:outline-none text-slate-800"
                      >
                        <option value="">Seleziona la tua professione (opzionale)</option>
                        <option value="Assistenti sanitari">Assistente sanitario</option>
                        <option value="Dietisti">Dietista</option>
                        <option value="Educatori professionali">Educatore professionale</option>
                        <option value="Fisioterapisti">Fisioterapista</option>
                        <option value="Igienisti dentali">Igienista dentale</option>
                        <option value="Infermieri">Infermiere</option>
                        <option value="Logopedisti">Logopedista</option>
                        <option value="Ortottisti e assistenti di oftalmologia">Ortottista e assistente di oftalmologia</option>
                        <option value="Ostetriche">Ostetrica</option>
                        <option value="Osteopati">Osteopata</option>
                        <option value="Podologi">Podologo</option>
                        <option value="Operatori Socio Sanitari (OSS)">Operatore Socio Sanitario (OSS)</option>
                        <option value="Tecnici audiometristi">Tecnico audiometrista</option>
                        <option value="Tecnici audioprotesisti">Tecnico audioprotesista</option>
                        <option value="Tecnici della prevenzione nell’ambiente e nei luoghi di lavoro">Tecnico della prevenzione nell’ambiente e nei luoghi di lavoro</option>
                        <option value="Tecnici della riabilitazione psichiatrica">Tecnico della riabilitazione psichiatrica</option>
                        <option value="Tecnici di fisiopatologia cardiocircolatoria e perfusione cardiovascolare">Tecnico di fisiopatologia cardiocircolatoria e perfusione cardiovascolare</option>
                        <option value="Tecnici di neurofisiopatologia">Tecnico di neurofisiopatologia</option>
                        <option value="Tecnici ortopedici">Tecnico ortopedico</option>
                        <option value="Tecnici sanitari di laboratorio biomedico">Tecnico sanitario di laboratorio biomedico</option>
                        <option value="Tecnici sanitari di radiologia medica">Tecnico sanitario di radiologia medica</option>
                        <option value="Terapisti della neuro e psicomotricità dell’età evolutiva">Terapista della neuro e psicomotricità dell’età evolutiva</option>
                        <option value="Terapisti occupazionali">Terapista occupazionale</option>
                        <option value="Altro">Altro</option>
                      </select>
                    </div>

                    {/* Messaggio */}
                    <div>
                      <label htmlFor="messaggio" className="block text-xs font-bold text-slate-600 mb-1">
                        Il tuo messaggio <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="messaggio"
                        id="messaggio"
                        rows={4}
                        value={formData.messaggio}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-slate-200 bg-slate-50/50 py-2.5 px-3 text-xs font-medium focus:border-cobalt-500 focus:bg-white focus:outline-none"
                        placeholder="Scrivi qui la tua richiesta..."
                        required
                      />
                    </div>

                    {/* Accetta Privacy check */}
                    <div className="flex items-start gap-2.5">
                      <input
                        type="checkbox"
                        name="accettaPrivacy"
                        id="accettaPrivacy"
                        checked={formData.accettaPrivacy}
                        onChange={handleChange}
                        className="mt-0.5 h-4 w-4 rounded border-slate-300 text-cobalt-500 focus:ring-cobalt-500 cursor-pointer"
                        required
                      />
                      <div className="text-xs text-slate-500 leading-tight font-normal">
                        <label htmlFor="accettaPrivacy" className="select-none cursor-pointer">
                          Ho letto la Privacy Policy e autorizzo SIAPS a trattare i dati inseriti per rispondere alla mia richiesta. <span className="text-red-500">*</span>
                        </label>{' '}
                        <button type="button" onClick={handlePrivacyClick} className="font-semibold text-cobalt-600 underline hover:text-cobalt-700">
                          Apri Privacy Policy
                        </button>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-cobalt-500 py-3 text-sm font-bold text-white shadow-md shadow-cobalt-500/10 hover:bg-cobalt-600 transition-all cursor-pointer font-sans disabled:cursor-not-allowed disabled:opacity-60"
                        id="btn-submit-contatti"
                      >
                        <Send size={15} />
                        <span>{isSubmitting ? 'Invio in corso...' : 'Invia Messaggio'}</span>
                      </motion.button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </section>
    </div>
  );
}
