/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Profession, Service, NewsItem } from './types';

export const PROFESSIONS_LIST: Profession[] = [
  {
    id: 'assistenti-sanitari',
    name: 'Assistenti sanitari',
    category: 'Prevenzione',
    description: 'Specialisti della prevenzione, della promozione e dell’educazione alla salute, operanti per il benessere e l’igiene generale della comunità.'
  },
  {
    id: 'dietisti',
    name: 'Dietisti',
    category: 'Tecnica e Assistenza',
    description: 'Specialisti competenti per tutte le attività finalizzate alla corretta applicazione dell’alimentazione e della nutrizione.'
  },
  {
    id: 'educatori-professionali',
    name: 'Educatori professionali',
    category: 'Riabilitazione',
    description: 'Curano lo sviluppo della personalità e il recupero sociale di soggetti in condizioni di fragilità, disagio sociale o disabilità.'
  },
  {
    id: 'fisioterapisti',
    name: 'Fisioterapisti',
    category: 'Riabilitazione',
    description: 'Professionisti della prevenzione, cura e riabilitazione nelle aree della motricità, delle funzioni corticali superiori e di quelle viscerali.'
  },
  {
    id: 'igienisti-dentali',
    name: 'Igienisti dentali',
    category: 'Tecnica e Assistenza',
    description: 'Esperti dedicati alla prevenzione delle patologie oro-dentali e alla promozione della salute orale dei pazienti.'
  },
  {
    id: 'logopedisti',
    name: 'Logopedisti',
    category: 'Riabilitazione',
    description: 'Esperti della prevenzione, valutazione e trattamento riabilitativo delle patologie del linguaggio, della comunicazione e della deglutizione.'
  },
  {
    id: 'ortottisti',
    name: 'Ortottisti e assistenti di oftalmologia',
    category: 'Riabilitazione',
    description: 'Specialisti abilitati alla prevenzione e riabilitazione visiva nelle anomalie dello sviluppo e nei disturbi motori e sensoriali della visione.'
  },
  {
    id: 'osteopati',
    name: 'Osteopati',
    category: 'Prevenzione',
    description: 'Professionisti sanitari che svolgono interventi di prevenzione, valutazione e trattamento di disfunzioni somatiche per il ripristino della mobilità corporea.'
  },
  {
    id: 'ostetriche',
    name: 'Ostetriche',
    category: 'Assistenziale',
    description: 'Professioniste sanitarie dedicate all’assistenza ostetrica, alla tutela della salute della donna, della gravidanza, del parto e del puerperio.'
  },
  {
    id: 'infermieri',
    name: 'Infermieri',
    category: 'Assistenziale',
    description: 'Professionisti sanitari responsabili dell’assistenza infermieristica generale, della presa in carico della persona e della continuità delle cure.'
  },
  {
    id: 'operatori-socio-sanitari',
    name: 'Operatori Socio Sanitari (OSS)',
    category: 'Assistenziale',
    description: 'Operatori che supportano l’assistenza di base alla persona nei bisogni quotidiani, collaborando con le equipe sanitarie e socio-sanitarie.'
  },
  {
    id: 'podologi',
    name: 'Podologi',
    category: 'Riabilitazione',
    description: 'Professionisti dedicati alla cura, diagnosi e riabilitazione delle patologie del piede, sia dal punto di vista biomeccanico che dermatologico.'
  },
  {
    id: 'audiometristi',
    name: 'Tecnici audiometristi',
    category: 'Diagnostica',
    description: 'Addetti alla prevenzione, valutazione e misura dell’efficienza uditiva tramite percorsi diagnostici e strumentali.'
  },
  {
    id: 'audioprotesisti',
    name: 'Tecnici audioprotesisti',
    category: 'Tecnica e Assistenza',
    description: 'Professionisti sanitari che si occupano della fornitura, dell’adattamento, del controllo e della personalizzazione dei presidi uditivi.'
  },
  {
    id: 'prevenzione-ambiente',
    name: 'Tecnici della prevenzione nell’ambiente e nei luoghi di lavoro',
    category: 'Prevenzione',
    description: 'Esperti incaricati di vigilare e controllare la sicurezza, l’igiene e la salute pubblica e nei contesti lavorativi.'
  },
  {
    id: 'riabilitazione-psichiatrica',
    name: 'Tecnici della riabilitazione psichiatrica',
    category: 'Riabilitazione',
    description: 'Collaborano alla formulazione, attuazione e verifica del progetto terapeutico e riabilitativo per soggetti con disturbi mentali.'
  },
  {
    id: 'cardiocircolatoria-perfusione',
    name: 'Tecnici di fisiopatologia cardiocircolatoria e perfusione cardiovascolare',
    category: 'Tecnica e Assistenza',
    description: 'Operatori addetti all’uso e alla gestione delle apparecchiature per la circolazione extracorporea e l’emodinamica nei reparti di cardiochirurgia.'
  },
  {
    id: 'neurofisiopatologia',
    name: 'Tecnici di neurofisiopatologia',
    category: 'Diagnostica',
    description: 'Addetti all’esecuzione di indagini diagnostiche strumentali del sistema nervoso centrale, periferico e dell’attività cardio-respiratoria.'
  },
  {
    id: 'tecnici-ortopedici',
    name: 'Tecnici ortopedici',
    category: 'Tecnica e Assistenza',
    description: 'Professionisti abilitati alla progettazione, costruzione, adattamento e collaudo di protesi, ortesi e ausili correttivi.'
  },
  {
    id: 'laboratorio-biomedico',
    name: 'Tecnici sanitari di laboratorio biomedico',
    category: 'Diagnostica',
    description: 'Professionisti responsabili delle analisi biochimiche, microbiologiche, tossicologiche e immunologiche necessarie per la diagnosi e terapia.'
  },
  {
    id: 'radiologia-medica',
    name: 'Tecnici sanitari di radiologia medica',
    category: 'Diagnostica',
    description: 'Operatori sanitari abilitati a svolgere indagini diagnostiche ed esami di radiologia, risonanza magnetica, medicina nucleare e radioterapia.'
  },
  {
    id: 'terapisti-neuro-psicomotricita',
    name: 'Terapisti della neuro e psicomotricità dell’età evolutiva',
    category: 'Riabilitazione',
    description: 'Svolgono attività di abilitazione e riabilitazione dei disordini dello sviluppo neuropsicomotorio in età evolutiva.'
  },
  {
    id: 'terapisti-occupazionali',
    name: 'Terapisti occupazionali',
    category: 'Riabilitazione',
    description: 'Operano per la prevenzione, cura e riabilitazione dei soggetti affetti da malattie fisiche o psichiche, favorendone l’autonomia nelle attività quotidiane.'
  }
];

export const SERVICES_LIST: Service[] = [
  {
    id: 'assistenza-orientamento',
    title: 'Assistenza e orientamento',
    description: 'Supporto iniziale per l’orientamento professionale, inquadramenti contrattuali e informazione sulle tutele lavorative vigenti.',
    statusText: 'In fase di attivazione progressiva',
    iconName: 'Shield'
  },
  {
    id: 'convenzioni-future',
    title: 'Convenzioni future',
    description: 'SIAPS è attivamente al lavoro per stipulare accordi e convenzioni vantaggiose per gli iscritti, incluse coperture assicurative professionali.',
    statusText: 'Pianificato e in fase di sviluppo',
    iconName: 'Briefcase'
  },
  {
    id: 'informazione-aggiornamenti',
    title: 'Informazione e aggiornamenti',
    description: 'Diffusione tempestiva di normative nazionali, bandi di concorso e interpretazioni di leggi di settore rilevanti per le professioni sanitarie.',
    statusText: 'In fase di attivazione progressiva',
    iconName: 'BookOpen'
  },
  {
    id: 'supporto-iscritti',
    title: 'Supporto agli iscritti',
    description: 'Creazione di canali dedicati per l’ascolto e la consulenza sindacale autonoma per le diverse aree e specialità rappresentate.',
    statusText: 'Pianificato e in fase di sviluppo',
    iconName: 'Users'
  }
];

export const NEWS_LIST: NewsItem[] = [
  {
    "id": "deroga-esclusivita-milleproroghe",
    "category": "Normativa",
    "title": "Libera Professione Extra-Moenia: Analisi della proroga al 2026",
    "date": "15 Maggio 2026",
    "summary": "Il Decreto Milleproroghe rinnova la deroga al vincolo di esclusività per le professioni sanitarie fino al 31 dicembre 2026. Analizziamo i requisiti obbligatori di autorizzazione, il conflitto di interessi e i limiti di riposo continuativo previsti dalla normativa attuale.",
    "badge": "Decreto Milleproroghe"
  },
  {
    "id": "rischio-biologico-tslb-richiesta",
    "category": "Sindacale",
    "title": "Rischio Biologico per i TSLB: SIAPS deposita la richiesta contrattuale",
    "date": "02 Maggio 2026",
    "summary": "Nonostante l'esposizione quotidiana a patogeni ed agenti chimici, l'indennità di rischio biologico per i Tecnici di Laboratorio (TSLB) non è ancora automatica nel CCNL. SIAPS ha formalizzato una proposta per l'istituzione di un'indennità specifica professionale.",
    "badge": "Battaglie Contrattuali"
  },
  {
    "id": "flat-tax-straordinario-discriminazione",
    "category": "Approfondimento",
    "title": "Flat Tax Straordinari al 5%: La discriminazione del comparto non infermieristico",
    "date": "24 Aprile 2026",
    "summary": "La Legge di Bilancio ha introdotto un'aliquota sostitutiva agevolata del 5% sul lavoro straordinario ma la riserva esclusivamente al personale infermieristico. SIAPS chiede con forza l'estensione immediata della misura a tutte le professioni sanitarie.",
    "badge": "Fisco & Equità"
  },
  {
    "id": "case-di-comunita-ruolo-professionisti",
    "category": "Normativa",
    "title": "Case della Comunità PNRR: A che punto è l'inserimento dei professionisti?",
    "date": "10 Aprile 2026",
    "summary": "Con l'attivazione prevista di 1700 Case della Comunità entro la fine del 2026, molte ASL stanno avviando corsi obbligatori escludendo però diverse professioni. Denunciamo il ritardo nella copertura dei posti per Dietisti, Educatori Professionali, Fisioterapisti, Logopedisti, Terapisti Occupazionali, etc..",
    "badge": "Sanità Territoriale"
  },
  {
    "id": "dipartimento-universitario-professioni-sanitarie",
    "category": "Approfondimento",
    "title": "Riforma Universitaria: Perché serve un Dipartimento autonomo delle Professioni Sanitarie",
    "date": "29 Marzo 2026",
    "summary": "I laureati delle professioni sanitarie non sono medici. Proponiamo la nascita di Dipartimenti Accademici diretti esclusivamente da docenti delle professioni sanitarie, per sottrarre la nostra formazione alla storica egemonia dei dipartimenti di medicina.",
    "badge": "Riforma Accademica"
  },
  {
    "id": "dumping-salariale-terzo-settore",
    "category": "Sindacale",
    "title": "Contratti Terzo Settore ed RSA: Coordinamento contrattuale contro il dumping",
    "date": "14 Marzo 2026",
    "summary": "I professionisti sanitari dipendenti di cooperative sociali o RSA del terzo settore soffrono di disparità retributive inaccettabili. La nostra battaglia per allineare giuridicamente ed economicamente i contratti a quelli della sanità pubblica.",
    "badge": "Tutela Lavoro"
  }
];
