import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  const landingPath = '/binh-xit-diet-moi-mot-kien-gian-con-trung';
  return {
    plugins: [{
      name: 'local-landing-index',
      configureServer(server) {
        server.middlewares.use((req, _res, next) => {
          const [pathname, query] = (req.url ?? '').split(/\?(.*)/s);
          if (pathname === landingPath || pathname === landingPath + '/') {
            req.url = landingPath + '/index.html' + (query ? '?' + query : '');
          }
          next();
        });
      },
    }, react(), tailwindcss()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
