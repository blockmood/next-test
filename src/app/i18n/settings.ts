export const fallbackLng = 'en';
export const languages = [fallbackLng, 'fr', 'pt', 'de', 'it', 'es'];
export type Language = (typeof languages)[number];
//留个key 为了失效后能够快速切换
export const defaultNS = 'translation';

export function getOptions(lng = fallbackLng, ns = defaultNS) {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
