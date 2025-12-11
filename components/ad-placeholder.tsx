export function AdPlaceholder({ position }: { position: string }) {
  return (
    <div className="my-8">
      {/* 
        ============================================
        GOOGLE ADSENSE PLACEHOLDER
        Position: {position}
        ============================================
        
        Para insertar Google AdSense, reemplaza este div con tu código de anuncio:
        
        <ins className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-XXXXXXXXXX"
          data-ad-slot="XXXXXXXXXX"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
        <script>
          (adsbygoogle = window.adsbygoogle || []).push({});
        </script>
        
        ============================================
      */}
      <div className="flex min-h-[100px] items-center justify-center rounded-xl border-2 border-dashed border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900/50">
        <div className="text-center">
          <p className="text-xs font-medium text-neutral-400 dark:text-neutral-500">
            Espacio publicitario
          </p>
          <p className="text-xs text-neutral-300 dark:text-neutral-600">
            {position}
          </p>
        </div>
      </div>
    </div>
  );
}
