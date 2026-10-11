/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { NewsItem } from '../types';

// @ts-ignore
import newsEsclusivita from '../assets/demo-1.svg';
// @ts-ignore
import newsBiologico from '../assets/demo-1.svg';
// @ts-ignore
import newsTassazione from '../assets/demo-1.svg';
// @ts-ignore
import newsComunita from '../assets/demo-1.svg';
// @ts-ignore
import newsUniversita from '../assets/demo-1.svg';
// @ts-ignore
import newsRsa from '../assets/demo-1.svg';

interface NewsPlaceholderCardProps {
  key?: React.Key;
  news: NewsItem;
}

const emphasisTerms = [
  'vincolo di esclusività',
  '31 dicembre 2026',
  'rischio biologico',
  'indennità specifica',
  '5%',
  'tutte le professioni sanitarie',
  'Case della Comunità',
  'Terapisti Occupazionali',
  'Logopedisti',
  'Fisioterapisti',
  'Dipartimento autonomo',
  'Professioni Sanitarie',
  'disparità retributive',
  'sanità pubblica',
  'professionale',
  'Dietisti',
  'Educatori Professionali',
  'etc..',
  'Dipartimenti Accademici'
];

function emphasizeText(text: string) {
  const sortedTerms = [...emphasisTerms].sort((a, b) => b.length - a.length);
  const pattern = new RegExp(`(${sortedTerms.map((term) => term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'gi');

  return text.split(pattern).map((part, index) => (
    emphasisTerms.some((term) => term.toLowerCase() === part.toLowerCase())
      ? <strong key={`${part}-${index}`}>{part}</strong>
      : part
  ));
}

export default function NewsPlaceholderCard({ news }: NewsPlaceholderCardProps) {
  let imageUrl = '';
  switch (news.id) {
    case 'deroga-esclusivita-milleproroghe':
      imageUrl = newsEsclusivita;
      break;
    case 'rischio-biologico-tslb-richiesta':
      imageUrl = newsBiologico;
      break;
    case 'flat-tax-straordinario-discriminazione':
      imageUrl = newsTassazione;
      break;
    case 'case-di-comunita-ruolo-professionisti':
      imageUrl = newsComunita;
      break;
    case 'dipartimento-universitario-professioni-sanitarie':
      imageUrl = newsUniversita;
      break;
    case 'dumping-salariale-terzo-settore':
      imageUrl = newsRsa;
      break;
    default:
      imageUrl = newsBiologico;
      break;
  }

  return (
    <div
      className="flex flex-col justify-between overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-xs transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
      id={`news-card-${news.id}`}
    >
      {/* Article Image Header */}
      <div className="relative h-44 w-full overflow-hidden bg-slate-100 border-b border-slate-100">
        <img
          src={imageUrl}
          alt={news.title}
          className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-3 left-3">
          <span className="rounded bg-cobalt-500 px-2.5 py-0.5 text-[9px] font-bold tracking-wider text-white uppercase shadow-sm">
            {news.category}
          </span>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Article Date & Availability info */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
              SIAPS News
            </span>
            <div className="flex items-center gap-1 text-[11px] font-medium text-slate-400">
              <Calendar size={12} />
              <span>{news.date}</span>
            </div>
          </div>

          {/* Title */}
          <h4 className="text-base font-bold text-slate-900 leading-snug">
            {news.title}
          </h4>

          {/* Summary */}
          <p className="mt-2.5 text-xs text-slate-500 leading-relaxed">
            {emphasizeText(news.summary)}
          </p>
        </div>

        {/* Action Callout */}
        <div className="mt-5 pt-4 border-t border-slate-50 flex items-center justify-between text-[11px] font-semibold text-slate-400">
          <span>Futuro aggiornamento</span>
          <span className="flex items-center gap-1 text-cobalt-500">
            Leggi presto <ArrowRight size={12} />
          </span>
        </div>
      </div>
    </div>
  );
}
