/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Profession {
  id: string;
  name: string;
  description: string;
  category: 'Riabilitazione' | 'Diagnostica' | 'Prevenzione' | 'Tecnica e Assistenza' | 'Assistenziale';
}

export interface Service {
  id: string;
  title: string;
  description: string;
  statusText: string;
  iconName: string;
}

export interface NewsItem {
  id: string;
  category: 'Normativa' | 'Sindacale' | 'Approfondimento';
  title: string;
  date: string;
  summary: string;
  badge: string;
}

export type PageId = 'home' | 'missione' | 'iniziative' | 'professioni' | 'iscrizione' | 'news' | 'contatti' | 'privacy' | 'cookie' | 'strutture' | 'servizi' | 'contratti' | 'legislazione' | 'comunicati';
