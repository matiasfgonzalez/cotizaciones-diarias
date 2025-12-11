import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Cotizaciones Diarias - Dólar, Criptos y Monedas del Mundo";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
          position: "relative",
        }}
      >
        {/* Background pattern */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage:
              "radial-gradient(circle at 25% 25%, rgba(37, 99, 235, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(79, 70, 229, 0.1) 0%, transparent 50%)",
          }}
        />

        {/* Logo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 40,
          }}
        >
          <div
            style={{
              width: 100,
              height: 100,
              background: "linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)",
              borderRadius: 24,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 56,
              color: "white",
              fontWeight: "bold",
              marginRight: 24,
              boxShadow: "0 25px 50px -12px rgba(37, 99, 235, 0.4)",
            }}
          >
            $
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span
              style={{
                fontSize: 56,
                fontWeight: "bold",
                color: "white",
                lineHeight: 1.1,
              }}
            >
              Cotizaciones Diarias
            </span>
            <span
              style={{
                fontSize: 28,
                color: "#94a3b8",
                marginTop: 8,
              }}
            >
              cotizacionesdiarias.com
            </span>
          </div>
        </div>

        {/* Tags */}
        <div
          style={{
            display: "flex",
            gap: 16,
            marginTop: 20,
          }}
        >
          {["💵 Dólar Blue", "₿ Bitcoin", "🌍 Divisas", "🥇 Oro"].map((tag) => (
            <div
              key={tag}
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                borderRadius: 50,
                padding: "12px 24px",
                fontSize: 24,
                color: "white",
                border: "1px solid rgba(255, 255, 255, 0.2)",
              }}
            >
              {tag}
            </div>
          ))}
        </div>

        {/* Subtitle */}
        <p
          style={{
            fontSize: 24,
            color: "#cbd5e1",
            marginTop: 40,
            textAlign: "center",
            maxWidth: 800,
          }}
        >
          Cotización del dólar hoy en Argentina actualizada en tiempo real
        </p>
      </div>
    ),
    {
      ...size,
    }
  );
}
