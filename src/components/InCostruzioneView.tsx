/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Home, Hammer } from 'lucide-react';
// @ts-ignore
import inCostruzioneImage from '../assets/demo-1.svg';

interface InCostruzioneViewProps {
  pageTitle: string;
  onGoHome: () => void;
}

export default function InCostruzioneView({ pageTitle, onGoHome }: InCostruzioneViewProps) {
  return (
    <div className="py-16 px-4 max-w-4xl mx-auto text-center space-y-8" id="in-costruzione-view">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-4"
      >
        <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-1 text-xs font-bold text-amber-700 border border-amber-100 shadow-xs">
          <Hammer size={13} />
          <span>Sezione in fase di attivazione</span>
        </span>

        <h2 className="font-sans text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          {pageTitle}
        </h2>

        <p className="text-sm sm:text-base text-slate-500 max-w-lg mx-auto leading-relaxed">
          Stiamo lavorando per arricchire questa sezione con informazioni, tutele ed approfondimenti specifici per le professioni del comparto.
        </p>
      </motion.div>

      {/* Image Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="relative max-w-lg mx-auto overflow-hidden rounded-2xl border border-slate-200 shadow-lg bg-white p-2"
      >
        <img
          src={inCostruzioneImage}
          alt={`${pageTitle} in costruzione`}
          className="w-full h-auto rounded-xl object-cover"
        />
      </motion.div>

      {/* Go Back button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="pt-4"
      >
        <button
          onClick={onGoHome}
          className="inline-flex items-center gap-2 rounded-xl bg-cobalt-500 px-6 py-3 text-xs font-bold text-white shadow-md hover:bg-cobalt-600 transition cursor-pointer font-sans"
        >
          <Home size={14} />
          <span>Torna alla Home</span>
        </button>
      </motion.div>
    </div>
  );
}
