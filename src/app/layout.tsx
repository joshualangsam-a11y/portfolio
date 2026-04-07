import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Josh Langsam - Builder",
  description:
    "Building AI-powered software for industries that move slow. 15 products shipped. 47 agents orchestrated. Co-founder of Roan Co.",
  openGraph: {
    title: "Josh Langsam - Builder",
    description:
      "Building AI-powered software for industries that move slow. 15 products shipped. 47 agents orchestrated.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Josh Langsam - Builder",
    description:
      "Building AI-powered software for industries that move slow. 15 products shipped.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>JL</text></svg>"
        />
      </head>
      <body className="grain">{children}</body>
    </html>
  );
}
