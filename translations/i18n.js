
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languageDetector';
 
import IT_TRANSLATION from './it/translation';
import EN_TRANSLATION from './en/translation';


i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init(
    {
        resources: 
        {
            en: 
            {
                translation: EN_TRANSLATION
            },
            it: 
            {
                translation: IT_TRANSLATION
            }
        }
    });
 
i18n.changeLanguage('it');