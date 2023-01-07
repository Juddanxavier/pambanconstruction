import { defineConfig } from 'vite';
import laravel, { refreshPaths } from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/app.jsx',
                'resource/css/filament.css'
            ],
            refresh: [
                ...refreshPaths,
                'app/Http/Livewire/**'
            ],
        }),
        react(),
    ],
    commonjsOptions: {
        esmExternals: true,
    },
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
            input: [
                'resources/js/app.jsx',
                'resources/css/filament.css'
            ],
        }
    }
});
