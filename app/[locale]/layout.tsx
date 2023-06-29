'use client';

import "./globals.css";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "es" }];
}



const consoleError = console.error.bind(console);
// eslint-disable-next-line
console.error = (message, ...args) => {
  if (
    typeof message === "string" &&
    message.startsWith("[React Intl] Missing message:")
  ) {
    return;
  }
  consoleError(message, ...args);
};

export default async function LocaleLayout({ children, params: { locale } }) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
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
