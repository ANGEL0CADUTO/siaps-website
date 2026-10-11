/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';

interface SectionHeaderProps {
  tag?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeader({ tag, title, subtitle, centered = false }: SectionHeaderProps) {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1], // snappy custom ease-out spring
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.div
      className={`mb-10 ${centered ? 'text-center max-w-2xl mx-auto' : 'text-left max-w-3xl'}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={containerVariants}
    >
      {tag && (
        <motion.span
          variants={itemVariants}
          className="inline-block px-3 py-1 bg-cobalt-50 text-cobalt-500 text-[10px] font-bold uppercase tracking-widest rounded-full mb-3 w-fit border border-cobalt-100/60 shadow-xs"
        >
          {tag}
        </motion.span>
      )}
      <motion.h2
        variants={itemVariants}
        className="font-sans text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl leading-tight"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={itemVariants}
          className="mt-3 text-sm text-slate-500 leading-relaxed font-normal"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
