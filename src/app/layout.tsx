import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Buy & Sell Cars, Bikes & Autoparts",
  description: "PAKISTAN'S #1 AUTOMOBILE WEBSITE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="shortcut icon" href="/logo-tyre.png" type="image/x-icon" />
      <body>{children}</body>
    </html>
  );
}
