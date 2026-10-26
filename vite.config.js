import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';

/**
 * Configuration minimale : le projet est constitué de pages HTML statiques
 * (CSS et JS inline dans chaque fichier), sans framework.
 *
 * - `host: true` et `allowedHosts: true` : indispensables pour que l'aperçu
 *   fonctionne derrière le proxy de Bolt / Arena (domaines *.bolt.new, *.e2b.app).
 * - `cors: true` : évite les blocages quand l'aperçu est chargé dans une iframe.
 */
export default defineConfig({
  base: './',
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: false,
    cors: true,
    allowedHosts: true,
    hmr: { clientPort: 443 },
  },
  preview: {
    host: '0.0.0.0',
    port: 4173,
    cors: true,
    allowedHosts: true,
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        interne: fileURLToPath(new URL('./formulaire-interne.html', import.meta.url)),
      },
    },
  },
});
