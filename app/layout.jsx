// Fonts
import { Inter, Work_Sans } from "next/font/google";
// Styles
import "./globals.scss";
// Public & Assets

// React/Next Functions

// Context

// Components
import Header from "@/containers/header/header.container.jsx";
import Footer from "@/containers/footer/footer.container.jsx";

const fontPrimary = Inter({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-1",
});
const fontSecondary = Work_Sans({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-2",
});

export async function generateMetadata() {
  return {
    title: "Adam Bartůšek - webový vývojář",
    description: "Profesionální webový vývojář specializující se na tvorbu webových stránek a aplikací.",
    keywords: "webové stránky, e-shop, web, tvorba webu, aplikace, tvorba e-shopu, vývoj webových aplikací",
    openGraph: {
      title: "Adam Bartůšek - webový vývojář",
      description: "Webový vývojář s odborností v Next.js, SEO, a responzivním designu.",
      url: "https://www.adam-bartusek.cz", // Zde doplňte URL vaší stránky
      siteName: "Adam Bartůšek",
      images: [
        {
          url: "https://www.adam-bartusek.cz/hero.png", // Zde doplňte URL obrázku
          width: 1200,
          height: 630,
          alt: "Profesionální webový vývojář Adam Bartůšek",
        },
      ],
      locale: "cs_CZ", // Jazyk a lokalita
      type: "website", // Typ obsahu (může být 'website' nebo 'profile' apod.)
    },
  };
}

export default function RootLayout({ children }) {
  return (
    <html lang="cs">
      <body
        className={`${fontPrimary.variable} ${fontSecondary.variable}`}
        suppressHydrationWarning={true}
      >
        <Header variant="leftsettings-centerlogo-rightmenu" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
