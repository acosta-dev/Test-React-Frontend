"use client";

import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { GlobalContextProvider } from "./context/store";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "es" }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  let messages;
  try {
    messages = (await import(`../../messages/${params.locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={params.locale} title="Test React Frontend">
      <body>
        <NextIntlClientProvider
          locale={params.locale}
          messages={messages}
          onError={(err) => {
            return;
          }}
        >
          <GlobalContextProvider>{children}</GlobalContextProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
