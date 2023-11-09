import Link from 'next/link';
import { useTranslation } from '../../i18n';

type ParamsType = {
  params: Record<string, string>;
};

export default async function Page({ params: { lng } }: ParamsType) {
  const { t } = await useTranslation(lng);
  return (
    <>
      <h1>Hi {t('accounts_accountsCommon_createAccount')}</h1>
      <Link href={`/${lng}`}>{t('back-to-home')}</Link>
    </>
  );
}
