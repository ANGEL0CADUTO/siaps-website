/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import { PageId } from '../types';
// @ts-ignore
import logoImage from '../assets/demo-1.svg';

const SEGRETERIA_EMAIL = 'hello@example.com';
const PEC_EMAIL = 'hello@example.com';

interface FooterProps {
  setCurrentPage: (page: PageId) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (id: PageId) => {
    setCurrentPage(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 border-t border-slate-800" id="main-footer">
      {/* Top Footer Panel */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">

          {/* Logo & Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logoImage} alt="Logo SIAPS" className="h-16 w-16 object-contain" />
              <div>
                <span className="font-sans text-lg font-bold tracking-tight text-white">SIAPS</span>
                <p className="text-[8px] font-semibold text-slate-400 uppercase leading-snug">
                  Sindacato Italiano Autonomo<br />Professioni Sanitarie
                </p>
              </div>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Il Sindacato Italiano Autonomo Professioni Sanitarie (SIAPS) è una realtà autonoma nata per dare voce, tutela, rappresentanza e informazione di categoria ai professionisti sanitari.
            </p>
            <div className="text-[11px] text-slate-500 border-l-2 border-cobalt-500 pl-3 italic leading-snug">
              Nota: SIAPS è un'organizzazione sindacale autonoma di categoria, non un Ordine professionale o ente pubblico regolatore.
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200">Menu Navigazione</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <button onClick={() => handleLinkClick('home')} className="hover:text-white transition-colors duration-150 text-left">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('missione')} className="hover:text-white transition-colors duration-150 text-left">
                  La nostra Mission
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('professioni')} className="hover:text-white transition-colors duration-150 text-left">
                  Professioni Rappresentate
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('iscrizione')} className="hover:text-white transition-colors duration-150 text-left">
                  Iscrizione
                </button>
              </li>
            </ul>
          </div>

          {/* Secondary Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200">Sindacato & Lavoro</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <button onClick={() => handleLinkClick('news')} className="hover:text-white transition-colors duration-150 text-left">
                  News e Informative
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('iniziative')} className="hover:text-white transition-colors duration-150 text-left">
                  Le nostre Iniziative
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('contatti')} className="hover:text-white transition-colors duration-150 text-left">
                  Contatti
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Placeholders */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-200">Riferimenti Istituzionali</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <Mail size={16} className="mt-0.5 text-cobalt-400 shrink-0" />
                <div>
                  <p className="text-xs text-slate-500">Email di Contatto</p>
                  <a href={`mailto:${SEGRETERIA_EMAIL}`} className="text-slate-300 hover:text-white transition-colors text-xs font-semibold">
                    {SEGRETERIA_EMAIL}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail size={16} className="mt-0.5 text-cobalt-400 shrink-0" />
                <div>
                  <p className="text-xs text-slate-500">PEC SIAPS</p>
                  <a href={`mailto:${PEC_EMAIL}`} className="text-slate-300 hover:text-white transition-colors text-xs font-semibold">
                    {PEC_EMAIL}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="mt-0.5 text-cobalt-400 shrink-0" />
                <div>
                  <p className="text-xs text-slate-500">Sede</p>
                  <p className="text-xs text-slate-300 font-medium">Da completare con sede ufficiale SIAPS</p>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Panel */}
      <div className="border-t border-slate-800 bg-slate-950/40 py-6 text-xs">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500">
            &copy; {currentYear} SIAPS - Sindacato Italiano Autonomo Professioni Sanitarie. Tutti i diritti riservati.
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => handleLinkClick('privacy')}
              className="text-slate-500 hover:text-slate-300 transition-colors"
            >
              Privacy Policy
            </button>
            <span className="text-slate-800">|</span>
            <button
              onClick={() => handleLinkClick('cookie')}
              className="text-slate-500 hover:text-slate-300 transition-colors"
            >
              Cookie Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
