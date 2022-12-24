import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import { defaultLang } from "./config";

import enLocales from './langs/en';
import mmLocales from './langs/mm';

let lng = defaultLang.value;

if (typeof window !== "undefined") {
    lng = localStorage.getItem("i18nextLng") || defaultLang.value
}

i18n.use(LanguageDetector)




