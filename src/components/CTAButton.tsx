/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CTAButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  icon?: React.ReactNode;
  className?: string;
  id?: string;
}

export default function CTAButton({
  label,
  onClick,
  variant = 'primary',
  icon,
  className = '',
  id
}: CTAButtonProps) {
  let baseStyle = 'inline-flex items-center justify-center rounded-lg px-5 py-3 text-sm font-semibold transition-all duration-150 focus:outline-none cursor-pointer';
  let variantStyle = '';

  switch (variant) {
    case 'primary':
      variantStyle = 'bg-cobalt-500 text-white hover:bg-cobalt-600 hover:shadow-xs shadow-cobalt-500/10 active:scale-98';
      break;
    case 'secondary':
      variantStyle = 'bg-slate-100 text-slate-900 hover:bg-slate-200 active:scale-98';
      break;
    case 'outline':
      variantStyle = 'border border-slate-300 text-slate-700 bg-white hover:bg-slate-50 hover:text-slate-900 active:scale-98';
      break;
  }

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${variantStyle} ${className}`}
      id={id}
    >
      <span>{label}</span>
      {icon ? <span className="ml-2 shrink-0">{icon}</span> : null}
    </button>
  );
}
