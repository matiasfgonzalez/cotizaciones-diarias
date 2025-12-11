import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { WorldCurrency } from "@/lib/types";
import { formatCurrency } from "@/lib/utils";

interface WorldCurrenciesSectionProps {
  currencies: WorldCurrency[];
}

function CurrencyCard({ currency }: { currency: WorldCurrency }) {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-neutral-100 to-neutral-200 text-2xl shadow-lg dark:from-neutral-800 dark:to-neutral-700">
            {currency.flag}
          </div>
          <div>
            <CardTitle className="text-base">{currency.name}</CardTitle>
            <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
              {currency.code}
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          {/* Valor en USD */}
          <div className="rounded-lg bg-neutral-50 p-3 dark:bg-neutral-800/50">
            <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
              1 {currency.code} =
            </p>
            <p className="text-lg font-bold text-neutral-900 dark:text-white">
              $
              {currency.rateToUSD > 1
                ? formatCurrency(currency.rateToUSD, 2)
                : currency.rateToUSD.toFixed(4)}
            </p>
            <p className="text-xs text-neutral-500">USD</p>
          </div>

          {/* Valor en ARS */}
          <div className="rounded-lg bg-blue-50 p-3 dark:bg-blue-950/30">
            <p className="text-xs font-medium text-blue-600 dark:text-blue-400">
              1 {currency.code} =
            </p>
            <p className="text-lg font-bold text-blue-700 dark:text-blue-300">
              ${formatCurrency(currency.rateToARS, 2)}
            </p>
            <p className="text-xs text-blue-600 dark:text-blue-400">ARS</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function WorldCurrenciesSection({
  currencies,
}: WorldCurrenciesSectionProps) {
  return (
    <section className="py-8" aria-labelledby="world-currencies-heading">
      <div className="mb-6">
        <h2
          id="world-currencies-heading"
          className="text-2xl font-bold text-neutral-900 dark:text-white sm:text-3xl"
        >
          🌍 Monedas del Mundo
        </h2>
        <p className="mt-2 text-neutral-600 dark:text-neutral-400">
          Cotizaciones de las principales divisas internacionales
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {currencies.map((currency) => (
          <CurrencyCard key={currency.code} currency={currency} />
        ))}
      </div>
    </section>
  );
}
