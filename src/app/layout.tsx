import type { Metadata } from "next";
import "./styles.css";

export const metadata: Metadata = {
  title: "Luciano Yomayel - Portfolio",
  description: "Full-Stack MERN Developer | AI-Enabled Solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
