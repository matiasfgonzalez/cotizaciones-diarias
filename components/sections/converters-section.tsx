"use client";

import { useState, useCallback } from "react";
import { ArrowRightLeft, Calculator } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";

interface ConvertersSectionProps {
  dollarBlueRate: number;
  dollarOficialRate: number;
  euroRate: number;
  btcPrice: number;
}

type ConverterType = "usd-ars" | "ars-usd" | "eur-ars" | "btc-usd";

interface Converter {
  id: ConverterType;
  title: string;
  fromLabel: string;
  toLabel: string;
  fromSymbol: string;
  toSymbol: string;
  convert: (value: number) => number;
  icon: string;
}

export function ConvertersSection({
  dollarBlueRate,
  dollarOficialRate,
  euroRate,
  btcPrice,
}: ConvertersSectionProps) {
  const [values, setValues] = useState<
    Record<ConverterType, { input: string; result: number | null }>
  >({
    "usd-ars": { input: "", result: null },
    "ars-usd": { input: "", result: null },
    "eur-ars": { input: "", result: null },
    "btc-usd": { input: "", result: null },
  });

  const converters: Converter[] = [
    {
      id: "usd-ars",
      title: "USD → ARS",
      fromLabel: "Dólares",
      toLabel: "Pesos (Blue)",
      fromSymbol: "USD",
      toSymbol: "ARS",
      convert: (value: number) => value * dollarBlueRate,
      icon: "🇺🇸",
    },
    {
      id: "ars-usd",
      title: "ARS → USD",
      fromLabel: "Pesos",
      toLabel: "Dólares (Blue)",
      fromSymbol: "ARS",
      toSymbol: "USD",
      convert: (value: number) => value / dollarBlueRate,
      icon: "🇦🇷",
    },
    {
      id: "eur-ars",
      title: "EUR → ARS",
      fromLabel: "Euros",
      toLabel: "Pesos",
      fromSymbol: "EUR",
      toSymbol: "ARS",
      convert: (value: number) => value * euroRate,
      icon: "🇪🇺",
    },
    {
      id: "btc-usd",
      title: "BTC → USD",
      fromLabel: "Bitcoin",
      toLabel: "Dólares",
      fromSymbol: "BTC",
      toSymbol: "USD",
      convert: (value: number) => value * btcPrice,
      icon: "₿",
    },
  ];

  const handleInputChange = useCallback(
    (
      id: ConverterType,
      inputValue: string,
      convertFn: (value: number) => number
    ) => {
      const numericValue = parseFloat(inputValue);
      const result =
        !isNaN(numericValue) && numericValue > 0
          ? convertFn(numericValue)
          : null;

      setValues((prev) => ({
        ...prev,
        [id]: { input: inputValue, result },
      }));
    },
    []
  );

  const handleSwap = useCallback((id: ConverterType) => {
    setValues((prev) => ({
      ...prev,
      [id]: { input: "", result: null },
    }));
  }, []);

  return (
    <section className="py-8" aria-labelledby="converters-heading">
      <div className="mb-6">
        <h2
          id="converters-heading"
          className="text-2xl font-bold text-neutral-900 dark:text-white sm:text-3xl"
        >
          🔄 Convertidores Rápidos
        </h2>
        <p className="mt-2 text-neutral-600 dark:text-neutral-400">
          Calculá conversiones en tiempo real con las cotizaciones actuales
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {converters.map((converter) => (
          <Card key={converter.id} className="overflow-hidden">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 text-lg text-white shadow-lg">
                  <Calculator className="h-5 w-5" />
                </div>
                <div>
                  <CardTitle className="text-base">{converter.title}</CardTitle>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">
                    {converter.fromLabel} a {converter.toLabel}
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                {/* Input */}
                <div className="flex-1">
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-neutral-500">
                      {converter.icon}
                    </span>
                    <Input
                      type="number"
                      placeholder="0.00"
                      className="pl-10 pr-14"
                      value={values[converter.id].input}
                      onChange={(e) =>
                        handleInputChange(
                          converter.id,
                          e.target.value,
                          converter.convert
                        )
                      }
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-neutral-400">
                      {converter.fromSymbol}
                    </span>
                  </div>
                </div>

                {/* Arrow */}
                <div className="flex h-10 w-10 items-center justify-center">
                  <ArrowRightLeft className="h-4 w-4 text-neutral-400" />
                </div>

                {/* Result */}
                <div className="flex-1">
                  <div className="flex h-10 items-center justify-between rounded-lg bg-neutral-50 px-3 dark:bg-neutral-800/50">
                    <span className="text-sm font-semibold text-neutral-900 dark:text-white">
                      {values[converter.id].result !== null
                        ? formatCurrency(values[converter.id].result!, 2)
                        : "—"}
                    </span>
                    <span className="text-xs font-medium text-neutral-400">
                      {converter.toSymbol}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
