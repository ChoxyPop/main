import { escapeHTML } from "astro/runtime/server/escape.js";
import { siteConfig } from "../config";
import type I18nKey from "./i18nKey";
import { es } from "./languages/es";
// Solo mantenemos español para máxima ligereza. 
// Si luego quieres inglés, añade: import { en } from "./languages/en";

export type Translation = {
    [K in I18nKey]: string;
};

const defaultTranslation = es;

const map: { [key: string]: Translation } = {
    es: es,
    // Si añadiste 'en' arriba, añade aquí: en: en,
};

export function getTranslation(lang: string): Translation {
    return map[lang.toLowerCase()] || defaultTranslation;
}

export function i18n(key: I18nKey): string {
    const lang = siteConfig.lang || "es"; 
    const currentLang = getTranslation(lang);
    const value = currentLang[key];

    const result = value || defaultTranslation[key];
    
    return escapeHTML(result);
}