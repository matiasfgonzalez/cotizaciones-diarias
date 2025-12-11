// Tipos para la API del Dólar Argentina
export interface DolarCotizacion {
  moneda: string;
  casa: string;
  nombre: string;
  compra: number;
  venta: number;
  fechaActualizacion: string;
}

// Tipos para criptomonedas (Binance)
export interface CryptoPriceRaw {
  symbol: string;
  price: string;
}

export interface CryptoPrice {
  symbol: string;
  name: string;
  price: number;
  icon: string;
}

// Tipos para monedas del mundo
export interface ExchangeRateResponse {
  success: boolean;
  base: string;
  date: string;
  rates: Record<string, number>;
}

export interface WorldCurrency {
  code: string;
  name: string;
  flag: string;
  rateToUSD: number;
  rateToARS: number;
}

// Tipos para metales y commodities
export interface MetalCommodity {
  code: string;
  name: string;
  priceUSD: number;
  icon: string;
}

// Tipo general para las cotizaciones
export interface AllQuotes {
  dolares: DolarCotizacion[];
  cryptos: CryptoPrice[];
  worldCurrencies: WorldCurrency[];
  metals: MetalCommodity[];
  lastUpdate: string;
  arsUsdRate: number;
}
