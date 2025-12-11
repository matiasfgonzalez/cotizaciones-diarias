import {
  DolarCotizacion,
  CryptoPriceRaw,
  CryptoPrice,
  WorldCurrency,
  MetalCommodity,
  AllQuotes,
} from "./types";

// ============================================
// DÓLAR ARGENTINA
// ============================================
export async function fetchDolarArgentina(): Promise<DolarCotizacion[]> {
  try {
    const response = await fetch("https://dolarapi.com/v1/dolares", {
      next: { revalidate: 60 }, // Revalidar cada 60 segundos
    });

    if (!response.ok) {
      throw new Error("Error fetching dolar data");
    }

    const data: DolarCotizacion[] = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching dolar argentina:", error);
    return [];
  }
}

// ============================================
// CRIPTOMONEDAS (Binance)
// ============================================
const CRYPTO_SYMBOLS = [
  { symbol: "BTCUSDT", name: "Bitcoin", icon: "₿" },
  { symbol: "ETHUSDT", name: "Ethereum", icon: "Ξ" },
  { symbol: "SOLUSDT", name: "Solana", icon: "◎" },
  { symbol: "BNBUSDT", name: "BNB", icon: "⬡" },
  { symbol: "XRPUSDT", name: "XRP", icon: "✕" },
  { symbol: "USDTARS", name: "USDT", icon: "₮" },
];

export async function fetchCryptos(): Promise<CryptoPrice[]> {
  try {
    const promises = CRYPTO_SYMBOLS.map(async (crypto) => {
      // Para USDT mostramos precio fijo de 1 USD
      if (crypto.symbol === "USDTARS") {
        return {
          symbol: "USDT",
          name: crypto.name,
          price: 1,
          icon: crypto.icon,
        };
      }

      const response = await fetch(
        `https://api.binance.com/api/v3/ticker/price?symbol=${crypto.symbol}`,
        { next: { revalidate: 60 } }
      );

      if (!response.ok) {
        throw new Error(`Error fetching ${crypto.symbol}`);
      }

      const data: CryptoPriceRaw = await response.json();

      return {
        symbol: crypto.symbol.replace("USDT", ""),
        name: crypto.name,
        price: parseFloat(data.price),
        icon: crypto.icon,
      };
    });

    const results = await Promise.all(promises);
    return results;
  } catch (error) {
    console.error("Error fetching cryptos:", error);
    return [];
  }
}

// ============================================
// MONEDAS DEL MUNDO
// ============================================
const WORLD_CURRENCIES_CONFIG = [
  { code: "EUR", name: "Euro", flag: "🇪🇺" },
  { code: "BRL", name: "Real Brasileño", flag: "🇧🇷" },
  { code: "GBP", name: "Libra Esterlina", flag: "🇬🇧" },
  { code: "JPY", name: "Yen Japonés", flag: "🇯🇵" },
  { code: "CNY", name: "Yuan Chino", flag: "🇨🇳" },
  { code: "UYU", name: "Peso Uruguayo", flag: "🇺🇾" },
  { code: "CLP", name: "Peso Chileno", flag: "🇨🇱" },
  { code: "MXN", name: "Peso Mexicano", flag: "🇲🇽" },
];

export async function fetchWorldCurrencies(
  arsUsdRate: number
): Promise<WorldCurrency[]> {
  try {
    // Usamos una API gratuita alternativa que no requiere token
    const response = await fetch(
      "https://api.frankfurter.app/latest?from=USD",
      { next: { revalidate: 3600 } } // Revalidar cada hora
    );

    if (!response.ok) {
      throw new Error("Error fetching world currencies");
    }

    const data = await response.json();
    const rates: Record<string, number> = data.rates;

    return WORLD_CURRENCIES_CONFIG.map((currency) => {
      const rateToUSD = rates[currency.code] || 0;
      // Calculamos el valor en ARS usando la tasa del dólar oficial
      const rateToARS = rateToUSD > 0 ? arsUsdRate / rateToUSD : 0;

      return {
        code: currency.code,
        name: currency.name,
        flag: currency.flag,
        rateToUSD: rateToUSD > 0 ? 1 / rateToUSD : 0, // Cuántos USD vale 1 unidad de esta moneda
        rateToARS,
      };
    });
  } catch (error) {
    console.error("Error fetching world currencies:", error);
    return [];
  }
}

// ============================================
// METALES Y COMMODITIES
// ============================================
export async function fetchMetals(): Promise<MetalCommodity[]> {
  try {
    // Usamos la API de Frankfurter para obtener tasas de metales preciosos
    // Nota: Esta API no tiene metales, así que usamos valores aproximados de mercado
    // En producción, se podría usar otra API como metals.live

    const response = await fetch(
      "https://api.frankfurter.app/latest?from=XAU&to=USD",
      { next: { revalidate: 3600 } }
    );

    // Valores de respaldo basados en precios de mercado típicos
    let goldPrice = 2650; // Precio aproximado del oro por onza
    let silverPrice = 31; // Precio aproximado de la plata por onza

    if (response.ok) {
      const data = await response.json();
      if (data.rates && data.rates.USD) {
        goldPrice = data.rates.USD;
      }
    }

    // Intentar obtener precio de plata
    try {
      const silverResponse = await fetch(
        "https://api.frankfurter.app/latest?from=XAG&to=USD",
        { next: { revalidate: 3600 } }
      );
      if (silverResponse.ok) {
        const silverData = await silverResponse.json();
        if (silverData.rates && silverData.rates.USD) {
          silverPrice = silverData.rates.USD;
        }
      }
    } catch {
      // Mantener valor de respaldo
    }

    return [
      {
        code: "XAU",
        name: "Oro (oz)",
        priceUSD: goldPrice,
        icon: "🥇",
      },
      {
        code: "XAG",
        name: "Plata (oz)",
        priceUSD: silverPrice,
        icon: "🥈",
      },
      {
        code: "WTI",
        name: "Petróleo WTI",
        priceUSD: 71.5, // Valor aproximado de referencia
        icon: "🛢️",
      },
      {
        code: "BRENT",
        name: "Petróleo Brent",
        priceUSD: 75.2, // Valor aproximado de referencia
        icon: "🛢️",
      },
    ];
  } catch (error) {
    console.error("Error fetching metals:", error);
    return [
      { code: "XAU", name: "Oro (oz)", priceUSD: 2650, icon: "🥇" },
      { code: "XAG", name: "Plata (oz)", priceUSD: 31, icon: "🥈" },
      { code: "WTI", name: "Petróleo WTI", priceUSD: 71.5, icon: "🛢️" },
      { code: "BRENT", name: "Petróleo Brent", priceUSD: 75.2, icon: "🛢️" },
    ];
  }
}

// ============================================
// FUNCIÓN PRINCIPAL - OBTENER TODAS LAS COTIZACIONES
// ============================================
export async function fetchAllQuotes(): Promise<AllQuotes> {
  // Primero obtenemos el dólar para tener la tasa ARS/USD
  const dolares = await fetchDolarArgentina();

  // Obtenemos el tipo de cambio oficial para cálculos
  const dolarOficial = dolares.find((d) => d.casa === "oficial");
  const arsUsdRate = dolarOficial?.venta || 1050; // Valor de respaldo

  // Ejecutamos las demás consultas en paralelo
  const [cryptos, worldCurrencies, metals] = await Promise.all([
    fetchCryptos(),
    fetchWorldCurrencies(arsUsdRate),
    fetchMetals(),
  ]);

  return {
    dolares,
    cryptos,
    worldCurrencies,
    metals,
    lastUpdate: new Date().toISOString(),
    arsUsdRate,
  };
}
