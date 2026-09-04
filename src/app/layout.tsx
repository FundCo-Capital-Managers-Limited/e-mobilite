import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const siteUrl = "https://e-mobilite.ng";
const siteDescription =
  "E-Mobilite owns, finances and operates electric bicycles, tricycles, and 4-wheel EVs across Nigeria — leased to operators and drivers under structured agreements, backed by battery-swap and charging infrastructure.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "E-Mobilite | Own the Ride. Finance the Future.",
    template: "%s | E-Mobilite",
  },
  description: siteDescription,
  keywords: [
    "electric mobility Nigeria",
    "EV fleet financing",
    "battery swap Nigeria",
    "electric tricycle keke",
    "electric bicycle Lagos",
    "EV charging network Nigeria",
    "hire purchase electric vehicles",
    "ride-hailing EV fleet",
    "AssetCo electric mobility",
    "FundCo Capital Managers",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "E-Mobilite",
    title: "E-Mobilite | Own the Ride. Finance the Future.",
    description: siteDescription,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "E-Mobilite",
      },
    ],
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: "E-Mobilite | Own the Ride. Finance the Future.",
    description: siteDescription,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "E-Mobilite Limited",
  url: siteUrl,
  logo: `${siteUrl}/images/e-mobilite-logo.svg`,
  description: siteDescription,
  parentOrganization: {
    "@type": "Organization",
    name: "FundCo Capital Managers Limited",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans text-text">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
