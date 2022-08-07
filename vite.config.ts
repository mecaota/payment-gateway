import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import VitePluginLinaria from 'vite-plugin-linaria';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), VitePluginLinaria()],
});
