import { useTranslation } from "react-i18next";
// components
import i18n from "./i18n";
//
import { allLangs, defaultLang } from "./config";

// ----------------------------------------------------------------------

export default function useLocales() {
    const {t:translate} = i18n
	const akk = useTranslation();

	const langStorage =
		typeof window !== "undefined" ? localStorage.getItem("i18nextLng") : "";

	const currentLang =
		allLangs.find((_lang) => _lang.value === langStorage) || defaultLang;

	const handleChangeLanguage = (newlang: string) => {
		// i18n.changeLanguage(newlang);
        i18n.changeLanguage(newlang)
        console.log(translate)
	};

	return {
		onChangeLang: handleChangeLanguage,
		translate: (text: any, options?: any) => translate(text, options),
		currentLang,
		allLangs,
	};
}
