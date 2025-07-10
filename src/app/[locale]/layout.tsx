import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Luciano Yomayel - Portfolio",
  description: "Full-Stack MERN Developer | AI-Enabled Solutions - Portfolio",
};

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "es" }];
}

export default async function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <div className={`${inter.className} min-h-screen bg-gray-50`}>
        {children}
      </div>
    </NextIntlClientProvider>
  );
}
