import type { Metadata } from "next";
import "./styles.css";

export const metadata: Metadata = {
  title: "Luciano Yomayel — AI-Enabled Full-Stack Engineer",
  description:
    "Full-stack engineer shipping production LLM features. AI agents, RAG, TypeScript, React, Next.js, Node/NestJS. Open to remote roles (USD) worldwide.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&family=Geist:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
