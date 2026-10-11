/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Menu, X, Shield, Phone, Mail } from 'lucide-react';
import { PageId } from '../types';
// @ts-ignore
import logoImage from '../assets/demo-1.svg';

const SEGRETERIA_EMAIL = 'hello@example.com';
const PEC_EMAIL = 'hello@example.com';

interface NavbarProps {
  currentPage: PageId;
  setCurrentPage: (page: PageId) => void;
}

export default function Navbar({ currentPage, setCurrentPage }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'missione', label: 'Mission' },
    { id: 'professioni', label: 'Professioni' },
    { id: 'iscrizione', label: 'Iscrizione' },
    // { id: 'strutture', label: 'Strutture' },
    // { id: 'servizi', label: 'Servizi' },
    // { id: 'contratti', label: 'Contratti' },
    { id: 'iniziative', label: 'Iniziative' },
    { id: 'legislazione', label: 'Legislazione' },
    { id: 'news', label: 'Notizie' },
    // { id: 'comunicati', label: 'Comunicati' },
    { id: 'contatti', label: 'Contatti' },
  ] as const;

  const handleNavClick = (id: PageId) => {
    setCurrentPage(id);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200/80 bg-white/95 backdrop-blur-md">
      {/* Top Banner (Istituzionale) */}
      <div className="hidden h-9 bg-slate-900 px-4 text-xs font-medium text-slate-300 md:flex items-center justify-between">
        <div className="flex items-center space-x-6 max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-1.5">
            <Shield size={13} className="text-cobalt-400" />
            <span>Sindacato Italiano Autonomo Professioni Sanitarie</span>
          </div>
          <div className="flex items-center gap-4 ml-auto">
            <a href={`mailto:${SEGRETERIA_EMAIL}`} className="flex items-center gap-1 hover:text-white transition-colors">
              <Mail size={13} />
              <span>{SEGRETERIA_EMAIL}</span>
            </a>
            <a href={`mailto:${PEC_EMAIL}`} className="flex items-center gap-1 hover:text-white transition-colors">
              <Mail size={13} />
              <span>{PEC_EMAIL}</span>
            </a>
            <span className="text-slate-600">|</span>
            <div className="flex items-center gap-1">
              <Phone size={13} />
              <span>Contatti Istituzionali</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo/Identity Section */}
        <button
          onClick={() => handleNavClick('home')}
          className="group flex items-center gap-2.5 text-left focus:outline-none"
          id="nav-logo-btn"
        >
          <div className="flex h-14 w-14 items-center justify-center overflow-hidden transition-all group-hover:scale-105 p-0.5">
            <img
              src={logoImage}
              alt="SIAPS Logo"
              className="h-full w-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <div className="flex items-baseline gap-1">
              <span className="font-sans text-xl font-extrabold tracking-tight text-slate-900">SIAPS</span>
            </div>
            <p className="-mt-1 text-[8px] font-semibold tracking-wide text-slate-500 uppercase max-w-[200px] leading-tight">
              Sindacato Italiano Autonomo<br />Professioni Sanitarie
            </p>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-3 xl:gap-5 text-xs xl:text-sm" id="desktop-nav">
          {navItems.map((item) => {
            const isActive = currentPage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative pb-1 text-sm font-medium transition-colors duration-150 border-b-2 cursor-pointer ${
                  isActive
                    ? 'text-cobalt-500 border-cobalt-500 font-bold'
                    : 'text-slate-600 border-transparent hover:text-cobalt-500 hover:border-cobalt-200'
                }`}
                id={`nav-${item.id}`}
              >
                {item.label}
              </button>
            );
          })}
          <button
            onClick={() => handleNavClick('iscrizione')}
            className="ml-1 xl:ml-3 bg-cobalt-500 text-white px-4 xl:px-5 py-2.5 rounded-md text-xs font-bold hover:bg-cobalt-600 transition-all shadow-sm cursor-pointer"
            id="nav-cta-iscrizione"
          >
            ISCRIVITI ORA
          </button>
        </nav>

        {/* Mobile menu trigger button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center rounded-lg p-2 text-slate-500 hover:bg-slate-50 hover:text-slate-900 focus:outline-none lg:hidden"
          aria-expanded={isOpen}
          id="mobile-menu-trigger"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer menu */}
      {isOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white" id="mobile-menu">
          <div className="space-y-1 px-4 py-3 pb-4">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex w-full items-center rounded-lg px-3 py-2.5 text-base font-semibold transition-colors ${
                    isActive
                      ? 'bg-cobalt-50 text-cobalt-600'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-950'
                  }`}
                  id={`mobile-nav-${item.id}`}
                >
                  {item.label}
                </button>
              );
            })}
            <div className="mt-4 border-t border-gray-100 pt-4">
              <button
                onClick={() => handleNavClick('iscrizione')}
                className="flex w-full items-center justify-center rounded-lg bg-cobalt-500 py-3 text-center text-sm font-semibold text-white shadow-sm hover:bg-cobalt-600"
                id="mobile-nav-cta"
              >
                Richiedi Modulo di Iscrizione
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
