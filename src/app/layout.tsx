import { languages } from './i18n/settings';
import StyleRegistry from '@/lib/AntdRegistry';

type ParamsType = {
  children: React.ReactNode;
  params: Record<string, string>;
};

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({ children, params: { lng } }: ParamsType) {
  return (
    <html lang={lng} dir="ltr">
      <body>
        <StyleRegistry>{children}</StyleRegistry>
      </body>
    </html>
  );
}
