import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import header_ru from './locales/ru/header.json';
import header_kz from './locales/kz/header.json';
import header_en from './locales/en/header.json';

import mainPage_ru from './locales/ru/mainPage.json';
import mainPage_kz from './locales/kz/mainPage.json';
import mainPage_en from './locales/en/mainPage.json';

import footer_ru from './locales/ru/footer.json';
import footer_kz from './locales/kz/footer.json';
import footer_en from './locales/en/footer.json';

import aboutPage_ru from './locales/ru/aboutPage.json';
import aboutPage_kz from './locales/kz/aboutPage.json';
import aboutPage_en from './locales/en/aboutPage.json';

import newsDetail_ru from './locales/ru/newsDetail.json';
import newsDetail_kz from './locales/kz/newsDetail.json';
import newsDetail_en from './locales/en/newsDetail.json';

import projectDetailPage_ru from './locales/ru/projectDetailPage.json';
import projectDetailPage_kz from './locales/kz/projectDetailPage.json';
import projectDetailPage_en from './locales/en/projectDetailPage.json';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            ru: {
                header: header_ru,
                mainPage: mainPage_ru,
                footer: footer_ru,
                aboutPage: aboutPage_ru,
                newsDetail: newsDetail_ru,
                projectDetailPage: projectDetailPage_ru,
            },
            kz: {
                header: header_kz,
                mainPage: mainPage_kz,
                footer: footer_kz,
                aboutPage: aboutPage_kz,
                newsDetail: newsDetail_kz,
                projectDetailPage: projectDetailPage_kz,
            },
            en: {
                header: header_en,
                mainPage: mainPage_en,
                footer: footer_en,
                aboutPage: aboutPage_en,
                newsDetail: newsDetail_en,
                projectDetailPage: projectDetailPage_en,
            },
        },
        lng: 'ru', // язык по умолчанию
        fallbackLng: 'ru',
        ns: ['header', 'mainPage, footer, aboutPage, newsDetail, projectDetailPage'], // список всех используемых неймспейсов
        defaultNS: 'header', // по умолчанию будет использоваться header, если не указан явно
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;