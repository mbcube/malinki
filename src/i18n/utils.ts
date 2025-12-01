import { getRelativeLocaleUrl } from 'astro:i18n';

import en from './en.json';
import fr from './fr.json';

const translations = {
    en,
    fr,
};


export function getLangFromUrl(url: URL) {
    const [, lang] = url.pathname.split('/');
    if (lang in translations) return lang as keyof typeof translations;
    return 'en';
}

export function useTranslations(lang: keyof typeof translations) {
    return function t(key: string) {
        const keys = key.split('.');
        let value: any = translations[lang];
        for (const k of keys) {
            if (value && typeof value === 'object' && k in value) {
                value = value[k];
            } else {
                return key;
            }
        }
        return value as string;
    }
}

export function getLocaleUrl(lang: string, path: string) {
    return getRelativeLocaleUrl(lang, path);
}
