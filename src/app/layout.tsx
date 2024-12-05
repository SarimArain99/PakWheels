import type { Metadata } from "next";
import "./globals.css";
import Logo from "../../public/logo-tyre.png";

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
      <link rel="shortcut icon" href={Logo.src} type="image/x-icon" />
      <body>{children}</body>
    </html>
  );
}
