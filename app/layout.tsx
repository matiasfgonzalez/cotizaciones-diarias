import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cotizacionesdiarias.com"),
  title: {
    default:
      "Cotizaciones Diarias Hoy – Dólar Blue, Criptos y Monedas del Mundo",
    template: "%s | Cotizaciones Diarias",
  },
  description:
    "Cotización del dólar hoy en Argentina: blue, oficial, MEP, CCL y tarjeta. Valores actualizados de criptomonedas, euro, real, libra, yen, yuan, oro y petróleo. Todo en una sola página, en tiempo real.",
  keywords: [
    "dolar hoy",
    "dolar blue",
    "cotizacion dolar",
    "dolar oficial",
    "dolar mep",
    "dolar ccl",
    "dolar tarjeta",
    "bitcoin precio",
    "ethereum precio",
    "euro hoy",
    "cotizacion euro",
    "oro precio",
    "plata precio",
    "criptomonedas",
    "tipo de cambio",
    "argentina",
  ],
  authors: [
    { name: "Cotizaciones Diarias", url: "https://cotizacionesdiarias.com" },
  ],
  creator: "Cotizaciones Diarias",
  publisher: "Cotizaciones Diarias",
  manifest: "/manifest.json",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://cotizacionesdiarias.com",
    siteName: "Cotizaciones Diarias",
    title: "Cotizaciones Diarias Hoy – Dólar Blue, Criptos y Monedas del Mundo",
    description:
      "Cotización del dólar hoy en Argentina: blue, oficial, MEP, CCL y tarjeta. Valores actualizados de criptomonedas, euro, real, libra, yen, yuan, oro y petróleo.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cotizaciones Diarias Hoy – Dólar Blue, Criptos y Monedas del Mundo",
    description:
      "Cotización del dólar hoy en Argentina: blue, oficial, MEP, CCL y tarjeta. Valores actualizados en tiempo real.",
    creator: "@cotizacionesdiarias",
  },
  alternates: {
    canonical: "https://cotizacionesdiarias.com",
  },
  category: "finance",
  other: {
    "google-site-verification": "YOUR_GOOGLE_VERIFICATION_CODE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <meta name="theme-color" content="#2563eb" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FinancialService",
              name: "Cotizaciones Diarias",
              description:
                "Servicio de información de cotizaciones financieras en tiempo real: dólar, criptomonedas, monedas internacionales, metales y commodities.",
              url: "https://cotizacionesdiarias.com",
              logo: "https://cotizacionesdiarias.com/icon.svg",
              areaServed: {
                "@type": "Country",
                name: "Argentina",
              },
              serviceType: "Información financiera",
              provider: {
                "@type": "Organization",
                name: "Cotizaciones Diarias",
                url: "https://cotizacionesdiarias.com",
              },
              sameAs: [],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-neutral-50 font-sans antialiased dark:bg-neutral-950`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
