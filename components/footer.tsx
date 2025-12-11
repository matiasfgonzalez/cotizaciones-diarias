import { TrendingUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-950">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        {/* Contenido SEO */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Columna 1 - Sobre el sitio */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 text-white">
                <TrendingUp className="h-4 w-4" />
              </div>
              <span className="font-semibold text-neutral-900 dark:text-white">
                Cotizaciones Diarias
              </span>
            </div>
            <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
              Cotización del dólar hoy en Argentina actualizada minuto a minuto.
              Valores del dólar blue, oficial, MEP, CCL y tarjeta en tiempo
              real.
            </p>
          </div>

          {/* Columna 2 - Criptomonedas */}
          <div>
            <h3 className="mb-3 font-semibold text-neutral-900 dark:text-white">
              Criptomonedas
            </h3>
            <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
              Criptomonedas al precio del momento con actualización automática.
              Bitcoin, Ethereum, Solana, BNB, XRP y USDT con valores precisos
              directamente desde Binance.
            </p>
          </div>

          {/* Columna 3 - Monedas Internacionales */}
          <div>
            <h3 className="mb-3 font-semibold text-neutral-900 dark:text-white">
              Monedas Internacionales
            </h3>
            <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
              Cotizaciones del euro, real, libra, yen y otras monedas
              internacionales. Metales preciosos y petróleo con valores globales
              actualizados.
            </p>
          </div>
        </div>

        {/* Separador */}
        <div className="my-8 border-t border-neutral-200 dark:border-neutral-800" />

        {/* Texto SEO adicional */}
        <div className="mb-8 rounded-xl bg-white p-6 shadow-sm dark:bg-neutral-900">
          <h2 className="mb-3 text-lg font-semibold text-neutral-900 dark:text-white">
            Tu fuente confiable de cotizaciones financieras
          </h2>
          <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
            En Cotizaciones Diarias encontrarás toda la información actualizada
            sobre el mercado cambiario argentino. Consultá el precio del dólar
            blue, el dólar oficial, MEP, CCL, tarjeta y mayorista. También podés
            ver las cotizaciones de las principales criptomonedas como Bitcoin
            (BTC), Ethereum (ETH), Solana (SOL) y más. Además, accedé a los
            valores de monedas internacionales como el euro, real brasileño,
            libra esterlina, yen japonés y yuan chino. Completamos la
            información con los precios de metales preciosos (oro y plata) y
            commodities como el petróleo WTI y Brent.
          </p>
        </div>

        {/* Copyright */}
        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            © {new Date().getFullYear()} Cotizaciones Diarias. Información de
            mercado en tiempo real.
          </p>
          <p className="text-xs text-neutral-400 dark:text-neutral-500">
            Los datos son proporcionados por fuentes públicas y pueden tener
            variaciones. No constituyen asesoramiento financiero.
          </p>
        </div>
      </div>
    </footer>
  );
}
