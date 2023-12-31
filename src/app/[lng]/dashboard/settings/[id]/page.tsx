import type { Metadata } from 'next';
import { useTranslation } from '@/app/i18n';

export const metadata: Metadata = {
  title: 'Dashboard Settings ID',
  description: 'Generated by create next app',
};

async function getData() {
  throw new Error();
  const res = await fetch('https://api.github.com/repos/vercel/next.js');
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Page(props: any) {
  const { t } = await useTranslation(props.params.lng);
  const data = await getData();

  return (
    <>
      <h1>
        Hello, Dashboard Settings ID!, {props.params.id} {data.owner.subscriptions_url}{' '}
      </h1>
      <br />
      <h2>
        {t('accounts_accountsCommon_privacyAndAuthorize', {
          buttonText: 2222,
        })}
      </h2>

      <h3>{t('accounts_accountsLogin_resetPassForgetEmailTip')}</h3>
    </>
  );
}
