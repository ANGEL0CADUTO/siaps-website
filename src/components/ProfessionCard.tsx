/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Stethoscope, HeartPulse, ShieldCheck, Activity, HandHeart } from 'lucide-react';
import { Profession } from '../types';

interface ProfessionCardProps {
  key?: React.Key;
  profession: Profession;
}

const emphasisTerms = [
  'abilitazione',
  'adattamento',
  'alimentazione',
  'analisi',
  'assistenza',
  'assistenza di base',
  'assistenza infermieristica generale',
  'assistenza ostetrica',
  'attività quotidiane',
  'ausili correttivi',
  'continuità delle cure',
  'contesti lavorativi',
  'prevenzione',
  'curano',
  'cura',
  'deglutizione',
  'diagnosi e terapia',
  'riabilitazione',
  'diagnosi',
  'terapia',
  'diagnostiche',
  'disfunzioni somatiche',
  'equipe sanitarie',
  'igiene',
  'indagini diagnostiche',
  'linguaggio',
  'medicina nucleare',
  'mobilità corporea',
  'nutrizione',
  'sicurezza',
  'salute pubblica',
  'salute orale',
  'autonomia',
  'parto',
  'presidi uditivi',
  'progetto terapeutico',
  'protesi',
  'ortesi',
  'radiologia',
  'risonanza magnetica',
  'promozione',
  'educazione alla salute',
  'valutazione',
  'visione'
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

export default function ProfessionCard({ profession }: ProfessionCardProps) {
  // Determine color and icon depending on profession category
  let badgeColor = '';
  let shadowHover = '';
  let iconComponent = null;

  switch (profession.category) {
    case 'Riabilitazione':
      badgeColor = 'bg-emerald-50 text-emerald-700 border-emerald-100';
      shadowHover = 'hover:shadow-emerald-100/50 hover:border-emerald-200';
      iconComponent = <HeartPulse size={18} className="text-emerald-500" />;
      break;
    case 'Diagnostica':
      badgeColor = 'bg-cobalt-50 text-cobalt-700 border-cobalt-100';
      shadowHover = 'hover:shadow-cobalt-100/50 hover:border-cobalt-200';
      iconComponent = <Activity size={18} className="text-cobalt-500" />;
      break;
    case 'Prevenzione':
      badgeColor = 'bg-cyan-50 text-cyan-700 border-cyan-100';
      shadowHover = 'hover:shadow-cyan-100/50 hover:border-cyan-200';
      iconComponent = <ShieldCheck size={18} className="text-cyan-600" />;
      break;
    case 'Assistenziale':
      badgeColor = 'bg-rose-50 text-rose-700 border-rose-100';
      shadowHover = 'hover:shadow-rose-100/50 hover:border-rose-200';
      iconComponent = <HandHeart size={18} className="text-rose-500" />;
      break;
    case 'Tecnica e Assistenza':
    default:
      badgeColor = 'bg-indigo-50 text-indigo-700 border-indigo-100';
      shadowHover = 'hover:shadow-indigo-100/50 hover:border-indigo-200';
      iconComponent = <Stethoscope size={18} className="text-indigo-500" />;
      break;
  }

  return (
    <div
      className={`group flex flex-col justify-between rounded-xl border border-gray-200/80 bg-white p-5 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${shadowHover}`}
      id={`profession-card-${profession.id}`}
    >
      <div>
        {/* Top bar with category and icon */}
        <div className="flex items-center justify-between mb-4">
          <span className={`rounded-full border px-2.5 py-0.5 text-xs font-semibold tracking-wide ${badgeColor}`}>
            {profession.category}
          </span>
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-50 text-slate-400 group-hover:bg-cobalt-50 group-hover:text-cobalt-600 transition-colors">
            {iconComponent}
          </div>
        </div>

        {/* Profession Name */}
        <h4 className="text-base font-bold text-slate-900 group-hover:text-cobalt-600 transition-colors leading-snug">
          {profession.name}
        </h4>

        {/* Profession Description */}
        <p className="mt-2.5 text-xs text-slate-500 leading-relaxed">
          {emphasizeText(profession.description)}
        </p>
      </div>

      {/* Info indicator */}
      <div className="mt-4 pt-3 border-t border-slate-50 flex items-center justify-between text-[11px] text-slate-400 font-medium select-none">
        <span>Rappresentanza SIAPS</span>
        <span className="text-cobalt-500 group-hover:translate-x-0.5 transition-transform">→</span>
      </div>
    </div>
  );
}
