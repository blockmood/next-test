import Link from 'next/link';
import { useTranslation } from '../i18n';
import { handleUrlRedirect } from '../utils';
import styles from './page.module.scss';
import { Button } from 'antd';

type ParamsType = {
  params: Record<string, string>;
};

export default async function Page({ params: { lng } }: ParamsType) {
  const { t } = await useTranslation(lng);

  return (
    <>
      <h1 className={styles.hello}>{t('accounts_accountsLogin_loginTitle')}</h1>
      <Link href={`/${lng}/second-page`}>{t('accounts_accountsRegister_CREARCUENTA')}</Link>
      <br />
      <Link href={handleUrlRedirect(`/${lng}/dashboard/settings/9999`)}>
        {t('accounts_accountsMain_timezoneTitle')}333
      </Link>
      <Link href={`/${lng}/dashboard/settings/9999`}>
        {t('accounts_accountsMain_timezoneTitle')}333
      </Link>

      <Button type="primary">hello</Button>
    </>
  );
}
