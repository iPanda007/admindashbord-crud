import { useTranslation } from 'react-i18next';
import { allLangs, defaultLang } from './config';

export default function useLocales() {
    const { i18n, t: translate } = useTranslation();
    const langStorage = typeof window !== "undefined" ? localStorage.getItem("i18nextLng") : "";

    const currentLang = allLangs.find((_lang) => _lang.value === langStorage) || defaultLang;

    const handleChangeLanguage = (newLang:string) => {
        
    }
}