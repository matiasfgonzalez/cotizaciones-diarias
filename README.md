# 💹 Cotizaciones Diarias

> **Cotización del dólar hoy en Argentina y más** — Una landing moderna, rápida y optimizada para SEO que muestra cotizaciones de divisas, criptomonedas, metales y commodities en tiempo real.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

🌐 **Sitio en producción:** [CotizacionesDiarias.com](https://cotizacionesdiarias.com)

---

## 📸 Preview

![Cotizaciones Diarias Preview](/public/og-image.png)

---

## ✨ Características

- 🚀 **Next.js 16** con App Router y Server Components
- 📱 **Diseño responsivo** tipo dashboard financiero
- 🌓 **Modo claro/oscuro** con toggle persistente
- ⚡ **Actualización automática** de cotizaciones
- 🔍 **SEO optimizado** con metadata, OpenGraph, Twitter Cards y Schema.org
- 💰 **Convertidores** de divisas en tiempo real
- 📊 **APIs gratuitas** sin necesidad de registro

---

## 💵 Datos en Tiempo Real

### Dólar Argentina

- Dólar Blue
- Dólar Oficial
- Dólar MEP
- Dólar CCL
- Dólar Tarjeta
- Dólar Mayorista

### Criptomonedas

- Bitcoin (BTC)
- Ethereum (ETH)
- Solana (SOL)
- BNB
- XRP
- USDT

### Monedas del Mundo

- Euro (EUR)
- Real Brasileño (BRL)
- Libra Esterlina (GBP)
- Yen Japonés (JPY)
- Yuan Chino (CNY)
- Peso Uruguayo (UYU)
- Peso Chileno (CLP)
- Peso Mexicano (MXN)

### Metales y Commodities

- Oro (XAU)
- Plata (XAG)
- Petróleo WTI
- Petróleo Brent

---

## 🛠️ Tecnologías

| Tecnología                                                | Uso                            |
| --------------------------------------------------------- | ------------------------------ |
| [Next.js 16](https://nextjs.org/)                         | Framework React con App Router |
| [TypeScript](https://www.typescriptlang.org/)             | Tipado estático                |
| [Tailwind CSS 4](https://tailwindcss.com/)                | Estilos utility-first          |
| [Lucide React](https://lucide.dev/)                       | Iconografía                    |
| [next-themes](https://github.com/pacocoursey/next-themes) | Gestión de temas               |

---

## 🌐 APIs Utilizadas

| API                                         | Datos                               | Revalidación |
| ------------------------------------------- | ----------------------------------- | ------------ |
| [DolarAPI](https://dolarapi.com/)           | Cotizaciones del dólar en Argentina | 60 segundos  |
| [Binance](https://api.binance.com/)         | Precios de criptomonedas            | 60 segundos  |
| [Frankfurter](https://www.frankfurter.app/) | Tipos de cambio internacionales     | 1 hora       |

---

## 🚀 Instalación

### Prerrequisitos

- Node.js 18+
- npm, yarn o pnpm

### Pasos

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/cotizaciones-diarias.git
cd cotizaciones-diarias

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

---

## 📦 Scripts Disponibles

```bash
npm run dev      # Inicia el servidor de desarrollo
npm run build    # Genera la build de producción
npm run start    # Inicia el servidor de producción
npm run lint     # Ejecuta el linter
```

---

## 🏗️ Estructura del Proyecto

```
cotizaciones-diarias/
├── app/
│   ├── globals.css       # Estilos globales
│   ├── layout.tsx        # Layout principal con SEO
│   └── page.tsx          # Página principal (Server Component)
├── components/
│   ├── ui/               # Componentes UI reutilizables
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── input.tsx
│   ├── sections/         # Secciones de la landing
│   │   ├── dolar-section.tsx
│   │   ├── crypto-section.tsx
│   │   ├── world-currencies-section.tsx
│   │   ├── metals-section.tsx
│   │   └── converters-section.tsx
│   ├── header.tsx
│   ├── footer.tsx
│   ├── theme-provider.tsx
│   ├── theme-toggle.tsx
│   └── ad-placeholder.tsx
├── lib/
│   ├── api.ts            # Funciones de fetch
│   ├── types.ts          # Tipos TypeScript
│   └── utils.ts          # Utilidades
└── public/
    ├── favicon.ico
    ├── icon.svg
    └── og-image.png
```

---

## 🚢 Deploy

### Vercel (Recomendado)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/tu-usuario/cotizaciones-diarias)

```bash
npm i -g vercel
vercel
```

### Cloudflare Pages

```bash
npm run build
# Sube el contenido de .next a Cloudflare Pages
```

---

## ⚙️ Configuración

### Variables de Entorno

Este proyecto no requiere variables de entorno ya que utiliza APIs públicas y gratuitas.

### Personalización

- **Colores:** Edita las variables CSS en `app/globals.css`
- **Metadata SEO:** Modifica `app/layout.tsx`
- **APIs:** Ajusta los tiempos de revalidación en `lib/api.ts`

---

## 📈 SEO

El proyecto incluye:

- ✅ Metadata completa (título, descripción, keywords)
- ✅ OpenGraph tags para redes sociales
- ✅ Twitter Cards
- ✅ Schema.org JSON-LD (FinancialService)
- ✅ Sitemap automático
- ✅ Robots.txt optimizado
- ✅ Canonical URLs

---

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea tu rama (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Agrega nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

---

## ⚠️ Disclaimer

Los datos mostrados son proporcionados por APIs públicas de terceros y pueden tener variaciones. Esta información no constituye asesoramiento financiero. Siempre consulta fuentes oficiales antes de tomar decisiones de inversión.

---

<p align="center">
  Hecho con ❤️ en Argentina 🇦🇷
</p>
