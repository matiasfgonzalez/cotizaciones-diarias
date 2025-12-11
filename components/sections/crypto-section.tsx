import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CryptoPrice } from "@/lib/types";
import { formatCurrency } from "@/lib/utils";

interface CryptoSectionProps {
  cryptos: CryptoPrice[];
  arsRate: number;
}

const CRYPTO_COLORS: Record<string, string> = {
  BTC: "from-orange-500 to-yellow-500",
  ETH: "from-purple-500 to-indigo-500",
  SOL: "from-violet-500 to-purple-500",
  BNB: "from-yellow-500 to-amber-500",
  XRP: "from-blue-500 to-cyan-500",
  USDT: "from-green-500 to-emerald-500",
};

function CryptoCard({
  crypto,
  arsRate,
}: {
  crypto: CryptoPrice;
  arsRate: number;
}) {
  const colorClass =
    CRYPTO_COLORS[crypto.symbol] || "from-gray-500 to-gray-600";
  const priceInARS = crypto.price * arsRate;

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-3">
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${colorClass} text-xl font-bold text-white shadow-lg`}
          >
            {crypto.icon}
          </div>
          <div>
            <CardTitle className="text-base">{crypto.name}</CardTitle>
            <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
              {crypto.symbol}
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {/* Precio en USD */}
        <div className="mb-3 rounded-lg bg-neutral-50 p-3 dark:bg-neutral-800/50">
          <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
            Precio USD
          </p>
          <p className="text-2xl font-bold text-neutral-900 dark:text-white">
            $
            {crypto.price >= 1
              ? formatCurrency(crypto.price)
              : crypto.price.toFixed(6)}
          </p>
        </div>

        {/* Precio en ARS */}
        <div className="rounded-lg bg-blue-50 p-3 dark:bg-blue-950/30">
          <p className="text-xs font-medium text-blue-600 dark:text-blue-400">
            Precio ARS (Blue)
          </p>
          <p className="text-lg font-semibold text-blue-700 dark:text-blue-300">
            ${formatCurrency(priceInARS, 0)}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

export function CryptoSection({ cryptos, arsRate }: CryptoSectionProps) {
  return (
    <section className="py-8" aria-labelledby="crypto-heading">
      <div className="mb-6">
        <h2
          id="crypto-heading"
          className="text-2xl font-bold text-neutral-900 dark:text-white sm:text-3xl"
        >
          ₿ Criptomonedas Principales
        </h2>
        <p className="mt-2 text-neutral-600 dark:text-neutral-400">
          Precios actualizados directamente desde Binance
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {cryptos.map((crypto) => (
          <CryptoCard key={crypto.symbol} crypto={crypto} arsRate={arsRate} />
        ))}
      </div>
    </section>
  );
}
