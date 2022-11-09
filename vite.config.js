import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',
            refresh: true,
        }),
        react(),
    ],
    // root: path.resolve(__dirname, '../public_html/build'),
    // build: {
    //     manifest: true,
    //     outDir: 'public',
    // }
    build: {
        outDir: path.resolve(__dirname, 'public/build'),
        emptyOutDir: false,
        manifest: true,
        rollupOptions: {
          input: 'resources/js/app.jsx',
        }
    }
});
