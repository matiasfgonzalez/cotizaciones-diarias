import { ArrowUpRight, ArrowDownRight, Minus, DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DolarCotizacion } from "@/lib/types";
import { formatCurrency } from "@/lib/utils";

interface DolarSectionProps {
  dolares: DolarCotizacion[];
}

const DOLAR_NAMES: Record<
  string,
  { name: string; description: string; color: string }
> = {
  blue: {
    name: "Dólar Blue",
    description: "Mercado informal",
    color: "from-blue-500 to-blue-600",
  },
  oficial: {
    name: "Dólar Oficial",
    description: "Banco Nación",
    color: "from-green-500 to-emerald-600",
  },
  tarjeta: {
    name: "Dólar Tarjeta",
    description: "Compras en el exterior",
    color: "from-purple-500 to-violet-600",
  },
  bolsa: {
    name: "Dólar MEP",
    description: "Mercado bursátil",
    color: "from-orange-500 to-amber-600",
  },
  contadoconliqui: {
    name: "Dólar CCL",
    description: "Contado con liquidación",
    color: "from-red-500 to-rose-600",
  },
  mayorista: {
    name: "Dólar Mayorista",
    description: "Operaciones comerciales",
    color: "from-cyan-500 to-teal-600",
  },
  cripto: {
    name: "Dólar Cripto",
    description: "P2P y exchanges",
    color: "from-yellow-500 to-orange-600",
  },
};

function DolarCard({ dolar }: { dolar: DolarCotizacion }) {
  const config = DOLAR_NAMES[dolar.casa] || {
    name: dolar.nombre,
    description: "Cotización",
    color: "from-gray-500 to-gray-600",
  };

  // Calcular spread entre compra y venta
  const spread =
    dolar.venta > 0 && dolar.compra > 0
      ? (((dolar.venta - dolar.compra) / dolar.compra) * 100).toFixed(2)
      : null;

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${config.color} text-white shadow-lg`}
            >
              <DollarSign className="h-5 w-5" />
            </div>
            <div>
              <CardTitle className="text-base">{config.name}</CardTitle>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                {config.description}
              </p>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          {/* Compra */}
          <div className="rounded-lg bg-neutral-50 p-3 dark:bg-neutral-800/50">
            <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
              Compra
            </p>
            <p className="text-xl font-bold text-neutral-900 dark:text-white">
              ${formatCurrency(dolar.compra)}
            </p>
          </div>

          {/* Venta */}
          <div className="rounded-lg bg-neutral-50 p-3 dark:bg-neutral-800/50">
            <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
              Venta
            </p>
            <p className="text-xl font-bold text-neutral-900 dark:text-white">
              ${formatCurrency(dolar.venta)}
            </p>
          </div>
        </div>

        {/* Spread */}
        {spread && (
          <div className="mt-3 flex items-center justify-between text-xs">
            <span className="text-neutral-500 dark:text-neutral-400">
              Spread
            </span>
            <span className="font-medium text-neutral-700 dark:text-neutral-300">
              {spread}%
            </span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

export function DolarSection({ dolares }: DolarSectionProps) {
  // Ordenar los dólares en el orden deseado
  const orderedCasas = [
    "blue",
    "oficial",
    "tarjeta",
    "bolsa",
    "contadoconliqui",
    "mayorista",
    "cripto",
  ];
  const sortedDolares = [...dolares].sort((a, b) => {
    const indexA = orderedCasas.indexOf(a.casa);
    const indexB = orderedCasas.indexOf(b.casa);
    return indexA - indexB;
  });

  return (
    <section className="py-8" aria-labelledby="dolar-heading">
      <div className="mb-6">
        <h2
          id="dolar-heading"
          className="text-2xl font-bold text-neutral-900 dark:text-white sm:text-3xl"
        >
          💵 Cotización del Dólar en Argentina
        </h2>
        <p className="mt-2 text-neutral-600 dark:text-neutral-400">
          Todas las variantes del dólar actualizadas en tiempo real
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sortedDolares.map((dolar) => (
          <DolarCard key={dolar.casa} dolar={dolar} />
        ))}
      </div>
    </section>
  );
}
