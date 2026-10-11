/**
 * @license
 * SPDX-License-Identifier: Apache-2.5
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ShieldCheck,
  ArrowRight,
  Layers,
  PhoneCall,
  Download,
  Lock,
  HeartPulse,
  Calendar,
  Briefcase,
  Stethoscope
} from 'lucide-react';

import { PageId } from './types';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import SectionHeader from './components/SectionHeader';
import CTAButton from './components/CTAButton';
import { MODULO_ISCRIZIONE_DOWNLOAD_URL, MODULO_ISCRIZIONE_FILE_NAME } from './downloads';

// Views
import MissioneView from './components/MissioneView';
import ProfessioniView from './components/ProfessioniView';
import IscrizioneView from './components/IscrizioneView';
import NewsView from './components/NewsView';
import BattaglieView from './components/BattaglieView';
import ContattiView from './components/ContattiView';
import PrivacyView from './components/PrivacyView';
import CookieView from './components/CookieView';
import InCostruzioneView from './components/InCostruzioneView';

// @ts-ignore
import siapsOrigini from './assets/demo-1.svg';
// @ts-ignore
import siapsMissione from './assets/demo-1.svg';

const SITE_URL = 'https://example.com';

const PAGE_METADATA: Record<PageId, { title: string; description: string }> = {
  home: {
    title: 'SIAPS | Sindacato Italiano Autonomo Professioni Sanitarie',
    description: 'SIAPS tutela, rappresenta e valorizza le professioni sanitarie del comparto con una voce sindacale autonoma.'
  },
  missione: {
    title: 'Mission | SIAPS',
    description: 'Origini, Mission e obiettivi strategici del Sindacato Italiano Autonomo Professioni Sanitarie.'
  },
  iniziative: {
    title: 'Iniziative sindacali | SIAPS',
    description: 'Le iniziative programmatiche SIAPS per tutele contrattuali, pari dignità e valorizzazione delle professioni sanitarie.'
  },
  professioni: {
    title: 'Professioni rappresentate | SIAPS',
    description: 'Le professioni sanitarie e socio-sanitarie del comparto rappresentate da SIAPS nelle aree riabilitativa, diagnostica, prevenzione, tecnico-assistenziale e assistenziale.'
  },
  iscrizione: {
    title: 'Adesione e iscrizione | SIAPS',
    description: 'Informazioni operative per richiedere il modulo di iscrizione SIAPS e aderire al sindacato.'
  },
  news: {
    title: 'News e informative | SIAPS',
    description: 'Aggiornamenti, notizie e informative sindacali SIAPS per le professioni sanitarie.'
  },
  contatti: {
    title: 'Contatti | SIAPS',
    description: 'Contatta la segreteria SIAPS per informazioni, adesioni, collaborazioni e richieste istituzionali.'
  },
  privacy: {
    title: 'Privacy Policy | SIAPS',
    description: 'Informativa SIAPS sul trattamento dei dati personali ai sensi del GDPR.'
  },
  cookie: {
    title: 'Cookie Policy | SIAPS',
    description: 'Informativa SIAPS sull’uso di cookie tecnici e strumenti locali del browser.'
  },
  strutture: {
    title: 'Strutture | SIAPS',
    description: 'Sezione SIAPS in fase di attivazione.'
  },
  servizi: {
    title: 'Servizi | SIAPS',
    description: 'Sezione SIAPS in fase di attivazione.'
  },
  contratti: {
    title: 'Contratti | SIAPS',
    description: 'Sezione SIAPS in fase di attivazione.'
  },
  legislazione: {
    title: 'Legislazione | SIAPS',
    description: 'Sezione SIAPS in fase di attivazione.'
  },
  comunicati: {
    title: 'Comunicati | SIAPS',
    description: 'Sezione SIAPS in fase di attivazione.'
  }
};

const PUBLIC_PAGE_IDS: PageId[] = ['home', 'missione', 'iniziative', 'professioni', 'iscrizione', 'news', 'contatti', 'privacy', 'cookie', 'strutture', 'servizi', 'contratti', 'legislazione', 'comunicati'];

const getPagePath = (page: PageId) => {
  if (page === 'home') return '/';
  return `/${page}`;
};

const getPageFromLocation = (): PageId => {
  const hash = window.location.hash.replace('#/', '');

  if (PUBLIC_PAGE_IDS.includes(hash as PageId)) {
    return hash as PageId;
  }

  const path = window.location.pathname.replace(/^\/+|\/+$/g, '');
  if (!path) {
    return 'home';
  }

  return PUBLIC_PAGE_IDS.includes(path as PageId) ? path as PageId : 'home';
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [cookieAccepted, setCookieAccepted] = useState<boolean>(false);

  // Load cookie preference from localStorage
  useEffect(() => {
    const consent = localStorage.getItem('siaps_cookie_consent');
    if (consent === 'accepted') {
      setCookieAccepted(true);
    }
  }, []);

  // Sincronizza lo stato di navigazione con URL puliti e vecchi hash legacy.
  useEffect(() => {
    const syncPageFromLocation = () => {
      setCurrentPage(getPageFromLocation());
    };

    window.addEventListener('hashchange', syncPageFromLocation);
    window.addEventListener('popstate', syncPageFromLocation);
    syncPageFromLocation();

    return () => {
      window.removeEventListener('hashchange', syncPageFromLocation);
      window.removeEventListener('popstate', syncPageFromLocation);
    };
  }, []);

  useEffect(() => {
    const metadata = PAGE_METADATA[currentPage];
    const pageUrl = `${SITE_URL}${getPagePath(currentPage)}`;

    document.title = metadata.title;

    const setMeta = (selector: string, attribute: 'content' | 'href', value: string) => {
      const element = document.head.querySelector(selector);
      if (element) {
        element.setAttribute(attribute, value);
      }
    };

    setMeta('meta[name="description"]', 'content', metadata.description);
    setMeta('meta[property="og:title"]', 'content', metadata.title);
    setMeta('meta[property="og:description"]', 'content', metadata.description);
    setMeta('meta[property="og:url"]', 'content', pageUrl);
    setMeta('meta[name="twitter:title"]', 'content', metadata.title);
    setMeta('meta[name="twitter:description"]', 'content', metadata.description);
    setMeta('link[rel="canonical"]', 'href', pageUrl);
  }, [currentPage]);

  const handleAcceptCookie = () => {
    localStorage.setItem('siaps_cookie_consent', 'accepted');
    setCookieAccepted(true);
  };

  const navigateTo = (page: PageId) => {
    window.history.pushState({}, '', getPagePath(page));
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Render correct page view
  const renderViewContent = () => {
    switch (currentPage) {
      case 'missione':
        return <MissioneView />;
      case 'iniziative':
        return <BattaglieView />;
      case 'professioni':
        return <ProfessioniView />;
      case 'iscrizione':
        return <IscrizioneView />;
      case 'news':
        return <NewsView />;
      case 'contatti':
        return <ContattiView />;
      case 'privacy':
        return <PrivacyView />;
      case 'cookie':
        return <CookieView />;
      case 'strutture':
        return <InCostruzioneView pageTitle="Strutture" onGoHome={() => navigateTo('home')} />;
      case 'servizi':
        return <InCostruzioneView pageTitle="Servizi" onGoHome={() => navigateTo('home')} />;
      case 'contratti':
        return <InCostruzioneView pageTitle="Contratti" onGoHome={() => navigateTo('home')} />;
      case 'legislazione':
        return <InCostruzioneView pageTitle="Legislazione" onGoHome={() => navigateTo('home')} />;
      case 'comunicati':
        return <InCostruzioneView pageTitle="Comunicati" onGoHome={() => navigateTo('home')} />;
      case 'home':
      default:
        return renderHome();
    }
  };

  // Render Homepage specific blocks
  const renderHome = () => {
    return (
      <div className="space-y-24 pb-16" id="home-view-container">

        {/* 1. Hero block */}
        <Hero
          onLearnMore={() => navigateTo('missione')}
          onDownloadModule={() => navigateTo('iscrizione')}
        />

        {/* 2 & 3. Perché nasce SIAPS & La nostra Mission (Split Focus Section) */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" id="home-mission-block">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            <div className="lg:col-span-6 space-y-5">
              <div className="space-y-2">
                <span className="text-xs font-extrabold uppercase tracking-widest text-cobalt-600 bg-cobalt-50 px-3 py-1 rounded-full border border-cobalt-100/40 inline-block">
                  Le Origini
                </span>
                <h2 className="font-sans text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                  Perché nasce SIAPS
                </h2>
              </div>

              {/* Image card */}
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 text-white shadow-md">
                <div className="relative aspect-[1672/941] overflow-hidden">
                  <img
                    src={siapsOrigini}
                    alt="Perché nasce SIAPS"
                    className="h-full w-full object-cover brightness-95 object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent pointer-events-none" />
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                SIAPS nasce dal pensiero <strong>libero, autonomo e laico</strong> di professionisti sanitari che hanno maturato una <strong>solida esperienza ordinistica e sindacale</strong> sul campo. Abbiamo scelto di unire competenze, idee e responsabilità in un <strong>progetto sindacale concreto</strong>, capace di trasformare un’esigenza di reale tutela in azione diretta e incisiva.
              </p>

              <div className="border-l-4 border-emerald-500 pl-4 py-1 italic text-slate-500 text-xs sm:text-sm">
                "Uniamo chi lavora ogni giorno in prima linea, guidati da chi fa la tua stessa professione e ne condivide le fatiche."
              </div>
            </div>

            <div className="lg:col-span-6 space-y-5 lg:mt-0">
              <div className="space-y-2">
                <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100/40 inline-block">
                  La Mission
                </span>
                <h2 className="font-sans text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                  La nostra Mission
                </h2>
              </div>

              {/* Image card */}
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 text-white shadow-md">
                <div className="relative aspect-[1672/941] overflow-hidden">
                  <img
                    src={siapsMissione}
                    alt="La nostra Mission"
                    className="h-full w-full object-cover brightness-95 object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent pointer-events-none" />
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                Vogliamo rappresentare direttamente la <strong>voce delle professioni sanitarie</strong>, affrontando con determinazione le questioni che incidono realmente sulla <strong>vita professionale e personale</strong> dei lavoratori.
              </p>
              <p className="text-xs sm:text-sm text-slate-500 font-medium">
                Ci concentriamo su: <strong>carichi di lavoro equi</strong>, <strong>turni dignitosi</strong>, adeguate <strong>indennità d’area</strong>, riconoscimento economico e previdenziale, sicurezza dei presidi, formazione continua qualificante, <strong>contratti equi</strong> e pari dignità legislativa ed economica tra pubblico e privato.
              </p>
              <div className="pt-1">
                <button
                  onClick={() => navigateTo('missione')}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-cobalt-600 hover:text-cobalt-700 hover:underline transition cursor-pointer group"
                  id="btn-home-learn-mission"
                >
                  <span>Leggi la Mission strategica</span>
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

          </div>
        </section>

        {/* 4. Section: Non esistono sanitari di serie A e sanitari di serie B (Visually Strong Contrast Banner) */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-slate-900 text-white p-8 md:p-12 relative overflow-hidden shadow-lg border border-slate-800">
            {/* Visual background elements */}
            <div className="absolute top-0 right-0 h-48 w-48 rounded-bl-full bg-emerald-500/10 pointer-events-none" />
            <div className="absolute -bottom-10 left-10 h-36 w-36 rounded-full bg-cobalt-500/10 gradient-blur-circle pointer-events-none" />

            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-400">Pari dignità professionale</span>
                <h3 className="font-sans text-2xl font-extrabold tracking-tight sm:text-4xl text-white leading-tight">
                  Non esistono sanitari di serie A e sanitari di serie B
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  SIAPS sostiene fermamente che <strong>tutti i professionisti sanitari</strong> debbano avere <strong>pari dignità</strong>, pari riconoscimento sociale e adeguate tutele economiche e normative, indipendentemente dalla struttura in cui lavorano.
                </p>
                <p className="text-[11px] text-slate-400 italic">
                  I diritti di chi assiste le vite umane devono essere uniformi, solidi e insindacabili.
                </p>
              </div>

              <div className="lg:col-span-5 flex justify-center lg:justify-end">
                <div className="rounded-xl border border-slate-700/60 bg-slate-800/40 p-5 shadow-inner max-w-xs backdrop-blur-xs">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-cobalt-400 block mb-1">Il nostro principio</span>
                  <p className="text-xs text-slate-200 font-semibold leading-relaxed">
                    Stessa responsabilità, stessa qualifica accademica, stesse mansioni professionali: pretendiamo lo stesso rispetto economico e legislativo per tutti.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Sezione “Le nostre battaglie” (Cards preview of areas) */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" id="home-battles-block">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <SectionHeader
              tag="Iniziative Programmatiche"
              title="Le nostre iniziative concrete"
              subtitle="Nessuna promessa irrealizzabile o slogan utopico. Ci battiamo per risposte e tutele che toccano da vicino la quotidianità lavorativa."
            />
            <div className="shrink-0 pt-2 md:pt-0">
              <CTAButton
                label="Scopri tutte le iniziative"
                onClick={() => navigateTo('iniziative')}
                variant="outline"
                icon={<ArrowRight size={14} />}
                id="btn-home-view-all-battles"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-3 shadow-xs hover:shadow-sm">
              <span className="text-[9px] font-bold text-red-500 uppercase tracking-widest block bg-red-50 px-2 py-0.5 rounded-sm inline-block">Rischio Biologico</span>
              <h4 className="text-base font-bold text-slate-900">Indennità rischio biologico</h4>
              <p className="text-xs text-slate-500 leading-relaxed font-normal">
                Estensione dell'indennità per il <strong>rischio di esposizione a patogeni</strong> ad ogni professionista.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-3 shadow-xs hover:shadow-sm">
              <span className="text-[9px] font-bold text-amber-500 uppercase tracking-widest block bg-amber-50 px-2 py-0.5 rounded-sm inline-block">Rischio Radiologico</span>
              <h4 className="text-base font-bold text-slate-900">Indennità rischio radiologico</h4>
              <p className="text-xs text-slate-500 leading-relaxed font-normal">
                Tutela integrale dell'<strong>indennità specifica</strong> per i tecnici radiologi e professionisti esposti a radiazioni, con opposizione ad ogni declassamento.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-3 shadow-xs hover:shadow-sm">
              <span className="text-[9px] font-bold text-blue-500 uppercase tracking-widest block bg-blue-50 px-2 py-0.5 rounded-sm inline-block">Autonomia e Lavoro</span>
              <h4 className="text-base font-bold text-slate-900">Esclusività e libera professione</h4>
              <p className="text-xs text-slate-500 leading-relaxed font-normal">
                Superamento della clausola di esclusività per sbloccare la <strong>libera professione</strong> intramuraria ed extramuraria dei lavoratori sanitari del comparto.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-3 shadow-xs hover:shadow-sm">
              <span className="text-[9px] font-bold text-emerald-500 uppercase tracking-widest block bg-emerald-50 px-2 py-0.5 rounded-sm inline-block">Università</span>
              <h4 className="text-base font-bold text-slate-900">Riforma delle professioni</h4>
              <p className="text-xs text-slate-500 leading-relaxed font-normal">
                Incontro tra <strong>evoluzione accademica magistrale</strong> ed effettiva attribuzione di ruoli manageriali e indennità di coordinamento elevate in azienda.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-3 shadow-xs hover:shadow-sm">
              <span className="text-[9px] font-bold text-violet-500 uppercase tracking-widest block bg-violet-50 px-2 py-0.5 rounded-sm inline-block">Tassazione</span>
              <h4 className="text-base font-bold text-slate-900">Flat tax sullo straordinario</h4>
              <p className="text-xs text-slate-500 leading-relaxed font-normal">
                Proponiamo la <strong>tassazione sostitutiva agevolata</strong> sulle ore straordinarie effettuate per sopperire alle storiche carenze di organico.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-3 shadow-xs hover:shadow-sm">
              <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest block bg-slate-50 px-2 py-0.5 rounded-sm inline-block">Terzo Settore</span>
              <h4 className="text-base font-bold text-slate-900">Contratti assistenziali ed RSA</h4>
              <p className="text-xs text-slate-500 leading-relaxed font-normal">
                Contrasto attivo al <strong>dumping salariale</strong> delle cooperative e coordinamento normativo a garanzia dei parametri minimi del pubblico impiego.
              </p>
            </div>

          </div>
        </section>

        {/* 6. Sezione “Sanità pubblica e diritto alla salute” (Values Manifesto Block) */}
        <section className="bg-slate-100 py-16 border-y border-slate-200/50" id="home-valori-ssn-block">
          <div className="mx-auto max-w-3xl px-4 text-center space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-cobalt-600 block">Identità Sociale</span>
            <h3 className="font-sans text-2xl font-extrabold tracking-tight sm:text-3.5xl text-slate-950">
              Sanità pubblica e diritto alla salute
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              SIAPS riconosce la sanità pubblica e il <strong>Servizio Sanitario Nazionale</strong> come beni assoluti e inestimabili del sistema sociale italiano, indispensabili strumenti di equità, giustizia costituzionale e tutela della salute pubblica. Difendiamo i professionisti per tutelare l'universalità delle cure.
            </p>
          </div>
        </section>

        {/* 7. Sezione “A chi ci rivolgiamo” */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" id="home-targeting-block">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <SectionHeader
              tag="Soggetti del Comparto"
              title="A chi ci rivolgiamo"
              subtitle="Rappresentiamo in via esclusiva le professioni sanitarie e socio-sanitarie del comparto, unite nel dare voce alle singole eccellenze d'area."
            />
            <div className="shrink-0 pt-2 md:pt-0">
              <CTAButton
                label="Vedi tutte le professioni"
                onClick={() => navigateTo('professioni')}
                variant="outline"
                icon={<ArrowRight size={14} />}
                id="btn-home-view-all-professions"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">

            {/* 1. Area Riabilitativa */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4 shadow-xs">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                <HeartPulse size={20} />
              </div>
              <h4 className="text-base font-bold text-slate-900 leading-none">Area Riabilitativa</h4>
              <p className="text-xs text-slate-500 leading-relaxed font-normal">
                <strong>Educatori professionali</strong>, <strong>Fisioterapisti</strong>, <strong>Logopedisti</strong>, <strong>Ortottisti e assistenti di oftalmologia</strong>, <strong>Podologi</strong>, <strong>Tecnici della riabilitazione psichiatrica</strong>, <strong>Terapisti della neuro e psicomotricità dell’età evolutiva</strong>, <strong>Terapisti occupazionali</strong>.
              </p>
              <div className="text-[10px] text-emerald-600 font-bold uppercase tracking-wider bg-emerald-50 px-2 py-0.5 rounded-sm inline-block">
                Area Sanitaria Riabilitativa
              </div>
            </div>

            {/* 2. Area Tecnico-Diagnostica */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4 shadow-xs">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-cobalt-50 text-cobalt-600">
                <Layers size={20} />
              </div>
              <h4 className="text-base font-bold text-slate-900 leading-none">Area Tecnico-Diagnostica</h4>
              <p className="text-xs text-slate-500 leading-relaxed font-normal">
                <strong>Tecnici audiometristi</strong>, <strong>Tecnici di neurofisiopatologia</strong>, <strong>Tecnici sanitari di laboratorio biomedico</strong>, <strong>Tecnici sanitari di radiologia medica</strong>.
              </p>
              <div className="text-[10px] text-cobalt-600 font-bold uppercase tracking-wider bg-cobalt-50 px-2 py-0.5 rounded-sm inline-block">
                Area Sanitaria Diagnostica
              </div>
            </div>

            {/* 3. Area Tecnico-Assistenziale */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4 shadow-xs">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-violet-50 text-violet-600">
                <Briefcase size={20} />
              </div>
              <h4 className="text-base font-bold text-slate-900 leading-none">Area Tecnico-Assistenziale</h4>
              <p className="text-xs text-slate-500 leading-relaxed font-normal">
                <strong>Dietisti</strong>, <strong>Igienisti dentali</strong>, <strong>Tecnici audioprotesisti</strong>, <strong>Tecnici di fisiopatologia cardiocircolatoria e perfusione cardiovascolare</strong>, <strong>Tecnici ortopedici</strong>.
              </p>
              <div className="text-[10px] text-violet-600 font-bold uppercase tracking-wider bg-violet-50 px-2 py-0.5 rounded-sm inline-block">
                Area Sanitaria Tecnico-Assistenziale
              </div>
            </div>

            {/* 4. Area Assistenziale */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4 shadow-xs">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-rose-50 text-rose-600">
                <Stethoscope size={20} />
              </div>
              <h4 className="text-base font-bold text-slate-900 leading-none">Area Assistenziale</h4>
              <p className="text-xs text-slate-500 leading-relaxed font-normal">
                <strong>Ostetriche</strong>, <strong>Infermieri</strong>, <strong>Operatori Socio Sanitari (OSS)</strong>.
              </p>
              <div className="text-[10px] text-rose-600 font-bold uppercase tracking-wider bg-rose-50 px-2 py-0.5 rounded-sm inline-block">
                Area Sanitaria Assistenziale
              </div>
            </div>

            {/* 5. Area della Prevenzione */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4 shadow-xs">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-50 text-cyan-600">
                <ShieldCheck size={20} className="text-cyan-600" />
              </div>
              <h4 className="text-base font-bold text-slate-900 leading-none">Area della Prevenzione</h4>
              <p className="text-xs text-slate-500 leading-relaxed font-normal">
                <strong>Assistenti sanitari</strong>, <strong>Osteopati</strong>, <strong>Tecnici della prevenzione nell’ambiente e nei luoghi di lavoro</strong>.
              </p>
              <div className="text-[10px] text-cyan-600 font-bold uppercase tracking-wider bg-cyan-50 px-2 py-0.5 rounded-sm inline-block">
                Area Sanitaria Preventiva
              </div>
            </div>

          </div>
        </section>

        {/* 8. Sezione “Notizie e approfondimenti” (Futuristic Editorials Placeholders) */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" id="home-editorial-future">
          <SectionHeader
            centered
            tag="Aggiornamenti & Studio"
            title="Notizie e approfondimenti futuri"
            subtitle="Uno spazio destinato a bollettini e notizie mirate, senza speculazioni o notizie fittizie."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

            <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4">
              <span className="text-[9px] font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded inline-block uppercase tracking-wider">Aggiornamenti Normativi</span>
              <h4 className="text-sm font-bold text-slate-900 leading-tight">Analisi decreti attuativi ministeriali</h4>
              <p className="text-xs text-slate-500 leading-relaxed font-normal">
                Predisposto per la diffusione di <strong>rassegne legali nazionali ed europee</strong> relative alle declaratorie delle professioni sanitarie.
              </p>
              <div className="text-[10px] font-semibold text-cobalt-500 italic block pt-2 border-t border-slate-50">
                Disponibile prossimamente
              </div>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4">
              <span className="text-[9px] font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded inline-block uppercase tracking-wider">Comunicazioni Sindacali</span>
              <h4 className="text-sm font-bold text-slate-900 leading-tight">Sentenze e tutele giurisprudenziali</h4>
              <p className="text-xs text-slate-500 leading-relaxed font-normal">
                Uno spazio editoriale d’approfondimento inerente le ultime sentenze sul <strong>demansionamento dei turni</strong> e sull’adeguamento delle tutele per il rischio.
              </p>
              <div className="text-[10px] font-semibold text-cobalt-500 italic block pt-2 border-t border-slate-50">
                Disponibile prossimamente
              </div>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4">
              <span className="text-[9px] font-bold text-slate-400 bg-slate-50 px-2 py-1 rounded inline-block uppercase tracking-wider">Contrattazione e Previdenza</span>
              <h4 className="text-sm font-bold text-slate-950 leading-tight">Formazione universitaria ed ECM</h4>
              <p className="text-xs text-slate-500 leading-relaxed font-normal">
                Bollettini dedicati all’<strong>evoluzione contrattuale del terzo settore</strong>, dei docenti coordinatori universitari e delle coperture previdenziali in libera professione.
              </p>
              <div className="text-[10px] font-semibold text-cobalt-500 italic block pt-2 border-t border-slate-50">
                Disponibile prossimamente
              </div>
            </div>

          </div>
        </section>

        {/* 9. Sezione “Iscrizione” (Compliance and Paper form) */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" id="home-signup-block">
          <div className="rounded-2xl bg-gradient-to-br from-slate-900 via-slate-950 to-emerald-950 text-white p-8 md:p-12 relative overflow-hidden shadow-xl border border-slate-800">
            <div className="absolute top-0 right-0 h-40 w-40 rounded-bl-full bg-cobalt-500/10 pointer-events-none" />

            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

              <div className="lg:col-span-8 space-y-4">
                <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-400">Pratica d'Iscrizione Cartacea Certificata</span>
                <h3 className="font-sans text-2xl font-extrabold tracking-tight sm:text-3.5xl text-white leading-tight">
                  Adesione a SIAPS tramite modulo PDF
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl font-normal">
                  Rispettiamo al massimo la <strong>sicurezza delle tue informazioni</strong>. Per l'adesione iniziale abbiamo scelto di non predisporre un pagamento online immediato o una tesserazione digitale vulnerabile. Ti basta <strong>scaricare, compilare e firmare</strong> il file PDF, quindi <strong>trasmetterlo alla tua azienda</strong> secondo le <strong>modalità interne</strong> e inviarne copia a <strong>hello@example.com</strong>. Nessuna tariffa occulta o vincolo opaco.
                </p>
                <div className="bg-slate-800/50 rounded-lg p-3 text-[11px] text-slate-300 inline-block leading-snug border border-slate-700/50">
                  Il <strong>modulo ufficiale</strong> indica le modalità di trasmissione alla <strong>propria azienda</strong> e la copia a <strong>hello@example.com</strong> per l'invio della domanda compilata.
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col gap-4">
                <a
                  href={MODULO_ISCRIZIONE_DOWNLOAD_URL}
                  download={MODULO_ISCRIZIONE_FILE_NAME}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-cobalt-500 px-6 py-4 text-xs font-bold text-white shadow-md hover:bg-cobalt-600 transition duration-150 cursor-pointer shadow-cobalt-500/10"
                  id="btn-home-signup-cta"
                >
                  <Download size={14} />
                  <span>Scarica il modulo di iscrizione</span>
                </a>
                <button
                  onClick={() => navigateTo('contatti')}
                  className="w-full inline-flex items-center justify-center gap-1.5 rounded-xl border border-slate-700 bg-slate-800/50 px-6 py-4 text-xs font-semibold text-slate-300 hover:text-white hover:border-slate-600 transition"
                >
                  <span>Invia messaggio in segreteria</span>
                </button>
              </div>

            </div>
          </div>
        </section>

      </div>
    );
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-slate-50/50 selection:bg-cobalt-500 selection:text-white" id="main-applet-wrapper">

      {/* 1. Header & Navigation */}
      <Navbar currentPage={currentPage} setCurrentPage={navigateTo} />

      {/* 2. Main content sections with slide transitions */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.22, ease: 'easeInOut' }}
            className="w-full"
            id={`page-container-${currentPage}`}
          >
            {renderViewContent()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 3. Footer */}
      <Footer setCurrentPage={navigateTo} />

      {/* 4. Informative Cookie Notice */}
      <AnimatePresence>
        {!cookieAccepted && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-slate-900/95 backdrop-blur-md border-t border-slate-800 text-white shadow-xl"
            id="cookie-consent-banner"
          >
            <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4 px-4">
              <div className="text-xs text-slate-300 max-w-3xl text-center sm:text-left leading-relaxed">
                <p className="font-bold text-white flex items-center justify-center sm:justify-start gap-1.5 mb-1">
                  <Lock size={13} className="text-cobalt-400" />
                  <span>Informativa cookie SIAPS</span>
                </p>
                <p>
                  SIAPS non utilizza cookie di profilazione o marketing. Il sito usa solo strumenti tecnici minimi, incluso il salvataggio locale di questa preferenza. Puoi consultare la{' '}
                  <button onClick={() => navigateTo('privacy')} className="text-cobalt-400 underline font-semibold hover:text-cobalt-300">
                    Privacy Policy
                  </button>{' '}
                  e{' '}
                  <button onClick={() => navigateTo('cookie')} className="text-cobalt-400 underline font-semibold hover:text-cobalt-300">
                    Cookie Policy
                  </button>.
                </p>
              </div>
              <div className="flex gap-3 shrink-0">
                <button
                  onClick={handleAcceptCookie}
                  className="rounded-lg bg-cobalt-500 py-2 px-4 text-xs font-bold text-white hover:bg-cobalt-600 transition-colors cursor-pointer"
                  id="btn-accept-cookies"
                >
                  Ho capito
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
