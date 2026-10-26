import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';

/**
 * Site statique : pages HTML autonomes (CSS et JS inline), aucun framework.
 *
 * `host: 0.0.0.0` + `allowedHosts: true` + `cors: true` sont nécessaires pour les
 * aperçus embarqués (Bolt.ai, sandboxes *.e2b.app, tunnels HTTPS).
 *
 * `index.html` = page d'accueil du site (affichée en premier par Bolt).
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
        accueil: fileURLToPath(new URL('./index.html', import.meta.url)),
        demande: fileURLToPath(new URL('./demande-credit.html', import.meta.url)),
        interne: fileURLToPath(new URL('./formulaire-interne.html', import.meta.url)),
        contrat: fileURLToPath(new URL('./contrat-personnalise.html', import.meta.url)),
      },
    },
  },
});
