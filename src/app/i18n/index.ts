import { createInstance } from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import { initReactI18next } from 'react-i18next/initReactI18next';
import { getOptions } from './settings';
import { Language } from './settings';

const getLangsValue = async (lang = 'EN') => {
  try {
    const response = await fetch(
      `${process.env.REACT_REQUEST_LANG_HOST}/product_langs/product_content/accounts/${lang}.json`
    );

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();

    if (!data || Object.keys(data).length === 0) {
      throw new Error('Empty or invalid JSON data');
    }

    return data;
  } catch (error) {
    // 处理错误，可以选择抛出自定义错误或者返回一个错误对象
    console.error('Error fetching data:', error);
    throw new Error('Failed to fetch language data');
  }
};

const initI18next = async (lng: Language) => {
  const i18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next)
    .use(resourcesToBackend(() => getLangsValue(lng === 'pt' ? 'PO' : lng.toUpperCase())))
    .init(getOptions());
  return i18nInstance;
};

export async function useTranslation(lng: Language) {
  const i18nextInstance = await initI18next(lng);
  return {
    t: i18nextInstance.getFixedT(lng),
    i18n: i18nextInstance,
  };
}
