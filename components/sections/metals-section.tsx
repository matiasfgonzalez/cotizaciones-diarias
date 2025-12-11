import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MetalCommodity } from "@/lib/types";
import { formatCurrency } from "@/lib/utils";

interface MetalsSectionProps {
  metals: MetalCommodity[];
  arsRate: number;
}

const METAL_COLORS: Record<string, string> = {
  XAU: "from-yellow-400 to-amber-500",
  XAG: "from-gray-300 to-slate-400",
  WTI: "from-neutral-700 to-neutral-900",
  BRENT: "from-neutral-600 to-neutral-800",
};

function MetalCard({
  metal,
  arsRate,
}: {
  metal: MetalCommodity;
  arsRate: number;
}) {
  const colorClass = METAL_COLORS[metal.code] || "from-gray-500 to-gray-600";
  const priceInARS = metal.priceUSD * arsRate;

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-3">
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${colorClass} text-xl shadow-lg`}
          >
            {metal.icon}
          </div>
          <div>
            <CardTitle className="text-base">{metal.name}</CardTitle>
            <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
              {metal.code}
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          {/* Precio en USD */}
          <div className="rounded-lg bg-neutral-50 p-3 dark:bg-neutral-800/50">
            <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
              Precio USD
            </p>
            <p className="text-xl font-bold text-neutral-900 dark:text-white">
              ${formatCurrency(metal.priceUSD)}
            </p>
          </div>

          {/* Precio en ARS */}
          <div className="rounded-lg bg-amber-50 p-3 dark:bg-amber-950/30">
            <p className="text-xs font-medium text-amber-600 dark:text-amber-400">
              Precio ARS
            </p>
            <p className="text-lg font-bold text-amber-700 dark:text-amber-300">
              ${formatCurrency(priceInARS, 0)}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function MetalsSection({ metals, arsRate }: MetalsSectionProps) {
  return (
    <section className="py-8" aria-labelledby="metals-heading">
      <div className="mb-6">
        <h2
          id="metals-heading"
          className="text-2xl font-bold text-neutral-900 dark:text-white sm:text-3xl"
        >
          🥇 Metales y Commodities
        </h2>
        <p className="mt-2 text-neutral-600 dark:text-neutral-400">
          Oro, plata y petróleo a precios internacionales
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {metals.map((metal) => (
          <MetalCard key={metal.code} metal={metal} arsRate={arsRate} />
        ))}
      </div>
    </section>
  );
}
