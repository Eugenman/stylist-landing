import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import translations from './i18n.json';

const i18n = i18next.createInstance();

void i18n.use(initReactI18next).init({
  resources: {
    ru: { translation: translations },
  },
  lng: 'ru',
  fallbackLng: 'ru',
  interpolation: { escapeValue: false },
});

export function tObject<T>(key: string): T {
  return i18n.t(key, { returnObjects: true }) as T;
}

export type ListItemContent = {
  title: string;
  description: string;
};

export type StatItemContent = {
  value: string;
  label: string;
};

export type TaskItemContent = {
  label: string;
  title: string;
  description: string;
};

export type ContactLinkContent = {
  label: string;
  href: string;
  icon: 'telegram' | 'vk';
  showLabel?: boolean;
};

export type NavigationLinkContent = {
  label: string;
  href: string;
};

export type ReviewContent = {
  author: string;
  context: string;
  paragraphs: string[];
  sourceLabel: string;
  sourceHref: string;
};

export default i18n;
