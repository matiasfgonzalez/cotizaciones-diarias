import { fetchAllQuotes } from "@/lib/api";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { AdPlaceholder } from "@/components/ad-placeholder";
import { DolarSection } from "@/components/sections/dolar-section";
import { CryptoSection } from "@/components/sections/crypto-section";
import { WorldCurrenciesSection } from "@/components/sections/world-currencies-section";
import { MetalsSection } from "@/components/sections/metals-section";
import { ConvertersSection } from "@/components/sections/converters-section";

export const revalidate = 60; // Revalidar la página cada 60 segundos

export default async function Home() {
  const quotes = await fetchAllQuotes();

  // Obtener valores para los convertidores
  const dolarBlue = quotes.dolares.find((d) => d.casa === "blue");
  const dolarOficial = quotes.dolares.find((d) => d.casa === "oficial");
  const euroCurrency = quotes.worldCurrencies.find((c) => c.code === "EUR");
  const btcCrypto = quotes.cryptos.find((c) => c.symbol === "BTC");

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <Header lastUpdate={quotes.lastUpdate} />

      {/* Main Content */}
      <main className="flex-1">
        <div className="container mx-auto max-w-7xl px-4 py-8">
          {/* Hero Section */}
          <div className="mb-8 text-center">
            <h1 className="sr-only">
              Cotizaciones Diarias Hoy - Dólar, Criptomonedas y Monedas del
              Mundo
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
              Información financiera actualizada en tiempo real. Consultá el
              valor del dólar, criptomonedas, monedas internacionales y
              commodities.
            </p>
          </div>

          {/* Sección Dólar Argentina */}
          <DolarSection dolares={quotes.dolares} />

          {/* Primer Placeholder de Ads */}
          <AdPlaceholder position="Banner horizontal - Post Dólar" />

          {/* Sección Criptomonedas */}
          <CryptoSection
            cryptos={quotes.cryptos}
            arsRate={dolarBlue?.venta || quotes.arsUsdRate}
          />

          {/* Sección Monedas del Mundo */}
          <WorldCurrenciesSection currencies={quotes.worldCurrencies} />

          {/* Segundo Placeholder de Ads */}
          <AdPlaceholder position="Banner horizontal - Pre Metales" />

          {/* Sección Metales y Commodities */}
          <MetalsSection
            metals={quotes.metals}
            arsRate={dolarBlue?.venta || quotes.arsUsdRate}
          />

          {/* Sección Convertidores */}
          <ConvertersSection
            dollarBlueRate={dolarBlue?.venta || quotes.arsUsdRate}
            dollarOficialRate={dolarOficial?.venta || quotes.arsUsdRate}
            euroRate={euroCurrency?.rateToARS || 0}
            btcPrice={btcCrypto?.price || 0}
          />

          {/* Tercer Placeholder de Ads */}
          <AdPlaceholder position="Banner horizontal - Footer" />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
