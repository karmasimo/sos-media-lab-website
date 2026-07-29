import type { Metadata, Viewport } from "next";
import { Footer, Header } from "./site-components";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sosmedialab.com"),
  title: {
    default: "SOS Media Lab | Podcast, audio e produzioni musicali a Rimini",
    template: "%s | SOS Media Lab",
  },
  description:
    "Podcast audio e video, affitto sala podcast, live session, registrazione musicale, voiceover, mix, master, arrangiamenti, colonne sonore e jingle.",
  openGraph: {
    type: "website",
    locale: "it_IT",
    siteName: "SOS Media Lab",
    title: "SOS Media Lab — Dai voce al tuo progetto",
    description: "Podcast, musica e contenuti audio-video progettati per distinguerti.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "SOS Media Lab — Dai voce al tuo progetto",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SOS Media Lab — Dai voce al tuo progetto",
    description: "Podcast, musica e contenuti audio-video progettati per distinguerti.",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/logo-black.png",
    apple: "/logo-black.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0b0c",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
