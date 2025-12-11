import { TrendingUp } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

interface HeaderProps {
  lastUpdate: string;
}

export function Header({ lastUpdate }: HeaderProps) {
  const formattedDate = new Date(lastUpdate).toLocaleString("es-AR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/80 backdrop-blur-lg dark:border-neutral-800 dark:bg-neutral-950/80">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        {/* Logo y Título */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white shadow-lg">
            <TrendingUp className="h-5 w-5" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-neutral-900 dark:text-white sm:text-xl">
              Cotizaciones Diarias Hoy
            </h1>
            <p className="hidden text-xs text-neutral-500 dark:text-neutral-400 sm:block">
              Actualizado: {formattedDate}
            </p>
          </div>
        </div>

        {/* Fecha móvil y Toggle */}
        <div className="flex items-center gap-3">
          <p className="text-xs text-neutral-500 dark:text-neutral-400 sm:hidden">
            {formattedDate}
          </p>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
