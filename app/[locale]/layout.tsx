'use client';

import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";



export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "es" }];
}

export default async function LocaleLayout({ children, params: { locale } }) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale} title="Test React Frontend">
      <body>
        <NextIntlClientProvider
          locale={locale}
          messages={messages}
          onError={(err) => {
           return;
          }}
        >
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
