CONTROL DE OBRA — versión PWA para iPhone/iPad

CONTENIDO
- index.html: tu app adaptada para pantalla móvil y modo standalone.
- manifest.json: nombre e iconos de la app instalable.
- sw.js: caché básica de la carcasa estática; NO guarda datos de Supabase.
- icon-180.png, icon-192.png, icon-512.png: iconos.

IMPORTANTE
1. Esta carpeta debe publicarse en una URL HTTPS pública.
2. Después de publicarla, abre la URL en Safari en iPhone/iPad.
3. Toca Compartir > Añadir a pantalla de inicio.
4. La app necesita conexión a Internet para iniciar sesión y consultar Supabase.
5. Este paquete NO publica la app en el App Store.
6. En el código actual, guardar incidencias y reparaciones todavía está pendiente de conectar a quick-api. La app muestra un aviso en esos formularios, igual que el HTML original.
7. Configura las políticas RLS de Supabase y las políticas del bucket de fotos. No pongas claves secretas/service_role en el HTML.
8. Prueba login, crear/listar obras y cerrar sesión antes de usarlo en una obra real.

Publicación gratuita sugerida: despliega estos archivos como sitio estático HTTPS en un servicio que permita PWA. No uses W3Schools si la URL no es pública.
